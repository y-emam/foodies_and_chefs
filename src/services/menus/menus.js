export const getAllMenusService = async (page = 1, pageSize = 5) => {
    try {
        const token = localStorage.getItem("token");

        const res = await fetch(`${process.env.REACT_APP_API_DOMAIN}/Chef/ChefMenu?page=${page}&pageSize=${pageSize}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        )

        const data = await res.json();

        return data
    } catch (err) {
        console.log("Failed to get all Menus.");
        console.log(err);
    }
}