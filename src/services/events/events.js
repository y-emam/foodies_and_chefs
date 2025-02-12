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

        const res = await fetch("https://khaledyk-001-site6.atempurl.com/Home/GetMyEvents?page=1&pageSize=10", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiRm9vZGllcyIsIkNoZWYiXSwiZXhwIjoxNzM5MjIxMTE5fQ.AmIOvU2FBqV28F-JzbelU7FdbzrTRzHQUL-wDdmeO08`,
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

        const res = await fetch(`https://${process.env.REACT_APP_API_DOMAIN}/Home/CreateEvent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiRm9vZGllcyIsIkNoZWYiXSwiZXhwIjoxNzM5MjE5NzQxfQ.EWEsgiXkmAu0SCXNVAyAuvkXHN6wveXhf8WW1O7E_UU`,
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