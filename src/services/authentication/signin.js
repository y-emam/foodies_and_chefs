const signinService = async (email, password) => {
    try {
        const res = await fetch("http://khaledyk-001-site6.atempurl.com/User/SignIn", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ emailAddress: email, password }),
        });

        const signinData = await res.json();

        if (signinData.success) {
            localStorage.setItem("token", signinData.token);
            localStorage.setItem("user", JSON.stringify(signinData.data));
        }

        return signinData;
    } catch (err) {
        return err.response.data;
    }
}

export default signinService;