import { useParams } from "react-router-dom";
import EventsForm from "../../../components/EventsForm/Component";
import { useEffect, useState } from "react";
import { getEventByEventId } from "../../../services/events/events";

function EditEventsPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      if (eventId) {
        const res = getEventByEventId(eventId);

        if (res && res.success) {
          setEvent(res);
        }
      }
    };

    fetchEvent();
  }, [eventId]);
  return (
    <div>
      <EventsForm isNewEvent={false} events={event} />
    </div>
  );
}

export default EditEventsPage;
