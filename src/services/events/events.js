export const getEventByEventId = async (eventId) => {
    try {
        const res = await fetch(`http://localhost:3001/events/${eventId}`);
        return await res.json();
    } catch (err) {
        console.log(err);
    }
}