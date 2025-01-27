const signupService = async (data) => {
    try {
        const response = await fetch('http://localhost:3001/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const res = await response.json();

            console.log(res);
            return res;
        }

    } catch (error) {
        throw error;
    }
}

export default signupService;
