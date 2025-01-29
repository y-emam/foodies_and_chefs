import uploadFileService from "../uploadFileService";

const uploadProfilePicture = async (file, token) => {
    try {
        let res = await uploadFileService(file, token);

        console.log(res);

        if (res.success) {
            // set the new profile picture
            res = await fetch("http://khaledyk-001-site6.atempurl.com/User/UploadProfileImage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ imageUrl: res.data }),
            });

            const data = await res.json();

            console.log("Profile Picture Upload");
            console.log(data);

            return data;
        } else {
            return res;
        }
    } catch (error) {
        console.error("Upload failed:", error);
    }
}

export default uploadProfilePicture;