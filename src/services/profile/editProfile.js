const editProfileService = async (userData) => {
    try {
        const res = await fetch('http://localhost:5000/api/users/editProfile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userData)
        });

        const data = await res.json();

        return data
    } catch (error) {
        console.log(error);
    }
}

export default editProfileService;