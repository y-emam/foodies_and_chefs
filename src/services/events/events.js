export const getEventByEventIdService = async (eventId) => {
    try {
        const token = localStorage.getItem("token");

        const res = await fetch(`https://${process.env.REACT_APP_API_DOMAIN}/Home/GetEventById?eventId=${eventId}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        });

        const eventData = await res.json();

        return eventData;
    } catch (err) {
        console.log(`Failed to get event by event id: ${eventId}`);
        console.log(err);
    }
}

export const getAllEventsService = async (pageNum = 1, pageSize = 10) => {
    try {
        const token = localStorage.getItem("token");

        const res = await fetch(`https://${process.env.REACT_APP_API_DOMAIN}/Home/GetMyEvents?page=${pageNum}&pageSize=${pageSize}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        });

        const eventsData = await res.json();

        return eventsData;
    } catch (err) {
        console.log(err);
    }
}

export const createEventService = async (event) => {
    try {
        const token = localStorage.getItem("token")
        console.log(token);

        const res = await fetch(`https://${process.env.REACT_APP_API_DOMAIN}/Home/CreateEvent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                "eventName": "Event 1",
                "eventDescription": "An annual technology conference featuring keynotes, workshops, and networking opportunities.",
                "date": "2025-09-15T00:00:00Z",
                "startTime": "2025-09-15T09:00:00Z",
                "endTime": "2025-09-15T17:00:00Z",
                "minNumberOfInvetation": 50.0,
                "maxNumberOfInvetation": 500.0,
                "generalLocation": "San Francisco, CA",
                "latitude": 37.7749,
                "longitude": -122.4194
            }),
        })

        const data = await res.json();

        console.log(data);

        return data
    } catch (err) {
        console.log(err);
    }
}