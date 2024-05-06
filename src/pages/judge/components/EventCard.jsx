import Title from "../../../components/molecules/title";
import Div from "../../../components/atoms/Div";
import { Appfont } from "../../../utils/theme/typo";
import AppDateFormatter from "../../../components/hooks/DateFormatter";
import { useGetEventByIdMutation } from "../../../redux/services/supervisor-apis";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../../components/atoms/Loader";

const EventCard = () => {
  const { id } = useParams();
  const [getEventById, { isLoading }] = useGetEventByIdMutation();

  const [myData, setmyData] = useState(null);

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
  if (isLoading || !myData) return <Loader />;

  return (
    <div>
      <Title bg="#1B2A41">Selected Event </Title>
      <Div sx={{ display: "flex", gap: 3, alignItems: "center" }}>
        <img src={myData.image} style={{ width: 200, height: 200 }} alt="" />
        <div>
          <Appfont sx={{ textTransform: "capitalize", fontSize: 30, fontWeight: 600 }}>
            {myData.title}
          </Appfont>
          <Appfont>{myData.description}</Appfont>
          <Appfont>{myData.status}</Appfont>
          <Appfont>{myData.location}</Appfont>
          <Appfont>
            <AppDateFormatter date={myData.startDate} /> -
            <AppDateFormatter date={myData.endDate} />
          </Appfont>
        </div>
      </Div>
    </div>
  );
};

export default EventCard;
