import { useEffect, useState } from "react";
import { AppButton } from "../../components/atoms/AppButton";
import Div from "../../components/atoms/Div";
import { alpha, primary, secondary } from "../../utils/theme/colors";
import { AppMessage, Appfont } from "../../utils/theme/typo";
import EventCard from "./components/EventCard";
import IntroCard from "./components/IntroCard";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import { ROUTE_PATH } from "../../utils/route-paths";
import { useNavigate, useParams } from "react-router-dom";
import ham from "../../assets/svgs/hamburger.svg";
import { useGetEventByIdMutation } from "../../redux/services/supervisor-apis";
import Apploader from "../../components/atoms/Apploader";
import AppDateFormatter from "../../components/hooks/DateFormatter";
import { useDispatch } from "react-redux";
import { saveClassType } from "../../redux/slices/extraslices";

const SelectedEvent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { id } = useParams();
  const [getEventById, { isLoading }] = useGetEventByIdMutation();
  const [myData, setmyData] = useState(null);
  const [expandedItem, setExpandedItem] = useState();
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await getEventById(id);
          if (response?.data?.event) {
            setmyData(response?.data?.event);
          }
        } catch (error) {
          console.error("Error fetching event:", error);
        }
      }
    };

    fetchData();
  }, [id, getEventById]);
  if (isLoading || !myData) return <Apploader />;

  const handleClass = (index) => {
    navigate(`${ROUTE_PATH.JUDGE.SELECT_CLASS}/${id}?selectclass=${index}`);
  };
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };
  console.log(myData, 'all data')
  return (
    <div>
      <IntroCard />
      <EventCard />
      <Div height={40} />
      <div>
        {/* Tabs */}
        <Div sx={{ display: "flex", justifyContent: "space-between", height: 60 }}>
          <Appfont sx={{ ...textStyle }}>Riders</Appfont>
          <Appfont sx={{ ...textStyle }}> Horses</Appfont>
          <Appfont sx={{ ...textStyle }}> Organisers</Appfont>
          <Appfont sx={{ ...textStyle }}>
            <LaptopMacIcon />
          </Appfont>
        </Div>
        {/* Text Description */}
        {!myData && <Appfont>Something Went Wrong</Appfont>}
        {myData?.CompetitionClass.length === 0 && <AppMessage>No Class Found</AppMessage>}
        {myData?.CompetitionClass &&
          myData?.CompetitionClass.map((items, index) => {
            return (
              <Div key={index}>
                <Div
                  onClick={() => setExpandedItem(expandedItem === items.id ? null : items.id)}
                  sx={{
                    background: primary,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: `3px solid ${alpha}`,
                    cursor: "pointer",
                  }}
                >
                  <Appfont sx={{ ml: 1, color: "white", font: 20 }}>
                    Day : {formatDate(items.createdAt)}
                  </Appfont>
                  <Div sx={{ pt: 1, pb: 1, mr: 1 }}>
                    <img src={ham} alt="" />
                  </Div>
                </Div>
                {expandedItem === items.id && (
                  <Div sx={{ background: alpha, borderBottom: `3px solid #37CF1E` }}>
                    <Div
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        p: 1
                      }}
                    >
                      <div>
                        <Appfont sx={{ ml: 1, fontSize: 20, fontWeight: "bolder", mt: 2, mb: 2 }}>
                          Arena {items.id}
                        </Appfont>
                        <Appfont sx={{ ml: 1, }}>{items.className} </Appfont>
                        <Appfont sx={{ ml: 1 }}>{items.type} </Appfont>
                        <Appfont sx={{ pb: 2, ml: 1 }}>
                          <AppDateFormatter date={items.createdAt} />
                        </Appfont>
                      </div>

                      <Div sx={{ mr: 1, display: "flex", flexDirection: "column", gap: 1 }}>
                        <AppButton
                          onClick={() => {
                            handleClass(items.id);
                            dispatch(saveClassType(items.type));
                          }}
                          sx={{ background: "#CF0E0E" }}
                        >
                          {items.classStatus}
                        </AppButton>
                      </Div>
                    </Div>
                  </Div>
                )
                }
              </Div>
            );
          })}
      </div>
    </div >
  );
};

export default SelectedEvent;

const textStyle = {
  width: "100%",
  pt: 2,
  textAlign: "center",
  "&:hover": {
    background: secondary,
    color: "white",
  },
  transition: "background-color 0.5s, color 0.5s",
};
