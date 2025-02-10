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

export const getAllEventsService = async (pageNum = 1, pageSize = 10) => {
    try {
        const token = localStorage.getItem("token");
        console.log(token);

        const res = await fetch("http://khaledyk-001-site6.atempurl.com/Home/GetMyEvents?page=1&pageSize=10", {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        });

        const eventsData = await res.json();

        console.log(eventsData);

        return eventsData;
    } catch (err) {
        console.log(err);
    }
}

export const createEventService = async (event) => {
    try {
        const token = localStorage.getItem("token")
        console.log(token);

        const res = await fetch("http://khaledyk-001-site6.atempurl.com/Home/CreateEvent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(event),
        })

        const data = await res.json();

        console.log(data);

        return data
    } catch (err) {
        console.log(err);
    }
}