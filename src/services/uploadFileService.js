const uploadFileService = async (file, token) => {
    try {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch(`${process.env.REACT_APP_API_DOMAIN}/Upload/UploadFile`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
            body: formData,
        });

        if (!res.ok) {
            throw new Error("Upload failed");
        }

        const data = await res.json();

        return data;
    } catch (err) {
        console.log(err);
    }
}

export default uploadFileService;