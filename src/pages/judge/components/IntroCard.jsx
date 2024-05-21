import Apploader from "../../../components/atoms/Apploader";
import Div from "../../../components/atoms/Div";
import AppDateFormatter from "../../../components/hooks/DateFormatter";
import { useGetUserQuery } from "../../../redux/services/supervisor-apis";
import { Appfont, Appheading } from "../../../utils/theme/typo";

const IntroCard = () => {
  const { data, isLoading, isError } = useGetUserQuery();
  if (isLoading) return <Apploader />;
  if (isError) return <>Error..</>;
  return (
    <Div sx={{ p: 2, background: "#BEC9D9" }}>
      <Appheading>Judge</Appheading>
      <Div height={30} />
      <Div sx={{ display: "flex", alignItems: 'center' }}>
        <img src={data?.user.image} alt="" style={{ height: 200, width: 200 }} />
        <Div sx={{ ml: 2 }}>
          <Appfont style={{ textTransform: "capitalize", fontWeight: 700, fontSize: 24 }}>
            {data?.user.name}
          </Appfont>
          <Appfont sx={{ mt: 3, mb: 2, textTransform: "capitalize", fontSize: 18 }}>
            <AppDateFormatter date={data?.user.dob} /> <br />
          </Appfont>
          <Appfont sx={{ textTransform: "capitalize", fontSize: 18 }}>{data?.user.nationality}</Appfont>
        </Div>
      </Div>
    </Div>
  );
};

export default IntroCard;
