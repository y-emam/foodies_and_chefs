export const getEventByEventIdService = async (eventId) => {
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

export const getAllEventsService = async (pageNum = 1, pageSize = 5) => {
    try {
        const res = await fetch(`http://khaledyk-001-site6.atempurl.com/Home/GetMyEvents?page=${pageNum}&pageSize=${pageSize}`, {
            method: "GET",
            mode: 'cors'
        });

        const eventsData = await res.json();

        console.log(eventsData);

        return eventsData;
    } catch (err) {
        return err.response;
    }
}