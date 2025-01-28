import { useParams } from "react-router-dom";

function ShowEventPage() {
  const { eventId } = useParams();
  return <div>Show Event Page {eventId}</div>;
}

export default ShowEventPage;
