const handleSigninSubmit = async (email, password) => {
    try {
        const res = await fetch("http://khaledyk-001-site6.atempurl.com/User/SignIn", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ emailAddress: email, password }),
        });

        const signinData = await res.json();

        console.log(signinData);

        if (signinData.success) {
            localStorage.setItem("token", signinData.token);
        }

        return signinData;
    } catch (err) {
        return err.response.data;
    }
}

export default handleSigninSubmit;