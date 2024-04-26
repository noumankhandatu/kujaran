import Div from "../../../components/atoms/Div";
import { useGetUserQuery } from "../../../redux/services/supervisor-apis";
import { Appfont, Appheading } from "../../../utils/theme/typo";

const IntroCard = () => {
  const { data, isLoading, isError } = useGetUserQuery();
  if (isLoading) {
    return <>loading..</>;
  }
  if (isError) {
    return <>Error..</>;
  }
  return (
    <Div sx={{ p: 2, background: "#BEC9D9" }}>
      <Appheading>Supervisor</Appheading>
      <Div height={30} />
      <Div sx={{ display: "flex" }}>
        <img src={data?.user.image} alt="" style={{ height: 200, width: 200 }} />
        <Div sx={{ ml: 2 }}>
          <Appfont style={{ textTransform: "capitalize", fontWeight: 700, fontSize: 30 }}>
            {data?.user.name}
          </Appfont>
          <Appfont sx={{ mt: 3, mb: 1 }}>{data?.user.dob}</Appfont>
          <Appfont>{data?.user.nationality}</Appfont>
        </Div>
      </Div>
    </Div>
  );
};

export default IntroCard;
