const uploadFileService = async (file, token) => {
    try {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("http://khaledyk-001-site6.atempurl.com/Upload/UploadFile", {
            method: "POST",
            body: formData,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!res.ok) {
            throw new Error("Upload failed");
        }

        const data = await res.json();

        console.log("File Upload");
        console.log(data);

        return data;
    } catch (err) {
        console.log(err);
    }
}

export default uploadFileService;