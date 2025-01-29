export const getEventByEventId = async (eventId) => {
    return {
        "id": eventId,
        name: "Event Name",
        description: "Event Description",
        date: "2021-09-01",
        time: "12:00",
        hours: 0,
        minutes: 0,
        minGuests: 1,
        maxGuests: 2,
    };
}