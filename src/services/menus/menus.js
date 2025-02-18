import uploadFileService from "../uploadFileService";

export const getMenuByIdService = async (menuId) => {
    try {
        const token = localStorage.getItem("token")

        const res = await fetch(`${process.env.REACT_APP_API_URL}/Chef/GetMenuById?MenuId=${menuId}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        const data = await res.json();

        return data;
    } catch (err) {
        console.log("Failed to get Menu by ID.");
        console.log(err);
    }
}

export const getAllMenusService = async (page = 1, pageSize = 5) => {
    try {
        const token = localStorage.getItem("token");

        const res = await fetch(`${process.env.REACT_APP_API_URL}/Chef/ChefMenu?page=${page}&pageSize=${pageSize}`,
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


export const addMenuService = async (menu) => {
    try {
        const token = localStorage.getItem("token");

        // create a copy of menu so that I don't remove the image from the original menu object
        const menuToUpload = JSON.parse(JSON.stringify(menu));

        // upload images of the menu first
        for (let i = 0; i < menu.courses.length; i++) {
            if (!menu.courses[i].image) {
                menu.courses[i].image = "";
                continue;
            }

            const course = menu.courses[i];
            const formData = new FormData();
            formData.append('file', course.image);

            const res = await uploadFileService(course.image);

            console.log(res);

            menuToUpload.courses[i].image = res.data;
        }

        // upload the menu itself
        const res = await fetch(`${process.env.REACT_APP_API_URL}/Chef/AddChefMenu`,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    menuName: menuToUpload.name,
                    description: menuToUpload.description,
                    dishes: menuToUpload.courses.map(course => {
                        return {
                            cuisineName: course.name,
                            description: course.description,
                            dishesImage: course.image
                        }
                    })
                })
            }
        )

        const data = await res.json();

        return data
    } catch (err) {
        console.log("Failed to create Menu.");
        console.log(err);
    }
}




export const updateMenu = async (newMenu) => {
    try {
        const token = localStorage.getItem("token");

        // create a copy of menu so that I don't remove the image from the original menu object
        const menuToUpload = JSON.parse(JSON.stringify(newMenu));

        console.log(newMenu);


        // upload images of the menu first
        for (let i = 0; i < newMenu.courses.length; i++) {
            if (!newMenu.courses[i].image) {
                newMenu.courses[i].image = "";
                continue;
            }

            const course = newMenu.courses[i];
            const formData = new FormData();
            formData.append('file', course.image);

            const res = await uploadFileService(course.image);

            console.log(res);

            menuToUpload.courses[i].image = res.data;
        }

        // upload the menu itself
        const res = await fetch(`${process.env.REACT_APP_API_URL}/Chef/UpdateChefMenu`,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    id: menuToUpload.id,
                    menuName: menuToUpload.name,
                    description: menuToUpload.description,
                    dishes: menuToUpload.courses.map(course => {
                        return {
                            cuisineName: course.name,
                            description: course.description,
                            dishesImage: course.image
                        }
                    })
                })
            }
        )

        const data = await res.json();

        console.log(data);

        return data
    } catch (err) {
        console.log("Failed to update Menu");
        console.log(err);

    }
}