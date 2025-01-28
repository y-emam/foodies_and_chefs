const forgotPasswordService = async (email, redirectUrl) => {
    try {
        const res = await fetch('http://khaledyk-001-site6.atempurl.com/User/ForgotPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, url: redirectUrl }),
        });

        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}

export default forgotPasswordService;