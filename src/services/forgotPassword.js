const forgotPasswordService = async (email) => {
    try {
        const res = await fetch('http://khaledyk-001-site6.atempurl.com/User/ForgotPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const data = await res.json();

        console.log(data);

        return data;
    } catch (error) {
        console.log(error);
    }
}

export default forgotPasswordService;