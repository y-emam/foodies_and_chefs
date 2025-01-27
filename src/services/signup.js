const signupService = async (data) => {
    try {
        console.log(data);

        const response = await fetch('http://khaledyk-001-site6.atempurl.com/User/SignUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                countryCode: data.countryCode,
                phone: data.phone,
                password: data.password,
                comfirm_Password: data.confirmPassword,
                role: data.role,
            }),
        });

        const res = await response.json();

        console.log(res);
        return res;

    } catch (error) {
        throw error;
    }
}

export default signupService;
