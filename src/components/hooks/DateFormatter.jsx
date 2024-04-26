
import moment from "moment";

// eslint-disable-next-line react/prop-types
const AppDateFormatter = ({ date, format = "DD MMM YYYY, h:mm a" }) => {
  const formattedDate = moment(date).format(format);
  return <>{formattedDate}</>;
};

export default AppDateFormatter;