export const getAllMenusService = async (page = 1, pageSize = 5) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_DOMAIN}/Chef/ChefMenu?page=${page}&pageSize=${pageSize}`)

        const data = await res.json();

        console.log(data);

        return data
    } catch (err) {
        console.log("Failed to get all Menus.");
        console.log(err);
    }
}