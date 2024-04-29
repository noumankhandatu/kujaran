import Div from "../../../../components/atoms/Div";
import { Appfont, Appheading } from "../../../../utils/theme/typo";
import { useGetRiderQuery } from "../../../../redux/services/rider";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../../../../utils/route-paths";

const IntroCardRider = () => {
  // app hooks
  const navigate = useNavigate();

  // rtk hooks
  const { data, isLoading, isError } = useGetRiderQuery();

  // checks
  if (isLoading) {
    return <>loading..</>;
  }
  if (isError) {
    return <>Error..</>;
  }

  if (data?.user?.horses.length === 0) return navigate(ROUTE_PATH.RIDER.HORSE_REGISTER);
  if (data.user.stableId === null) return navigate(ROUTE_PATH.RIDER.STABLE_REGISTER);
  return (
    <Div sx={{ p: 2, background: "#BEC9D9" }}>
      <Appheading>Rider Name</Appheading>
      <Div height={30} />
      <Div sx={{ display: "flex", alignItems: "center" }}>
        <img src={data?.user.image} alt="" />
        <Div sx={{ ml: 2 }}>
          <Appfont style={{ textTransform: "capitalize", fontWeight: 700, fontSize: 30 }}>
            {data?.user.name}
          </Appfont>
          <Appfont sx={{ mt: 3, mb: 1 }}>{data?.user.nationality}</Appfont>
          <Appfont>{data?.user.gender}</Appfont>
        </Div>
      </Div>
    </Div>
  );
};

export default IntroCardRider;
