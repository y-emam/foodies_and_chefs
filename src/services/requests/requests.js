export const getAllRequestsService = async (status, page = 1, pageSize = 10) => {
    try {
        const token = localStorage.getItem("token");

        const res = await fetch(`${process.env.REACT_APP_API_URL}/Chef/GetMyOffers?page=${page}&pageSize=${pageSize}&status=${status}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await res.json();

        return data;
    } catch (err) {
        console.log("Failed to get all Offers");
        console.log(err);
    }
};