import { useEffect, useState } from "react";
import ProfileForm from "../../../components/ProfileForm/Component";

function EditProfilePage() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    setProfileData({
      firstName: "Yasser",
      lastName: "Emam",
      email: "yasser@gmail.com",
      phoneNumber: "01012345678",
      img: "https://lh3.googleusercontent.com/a/ACg8ocKrYpONfaPnfuDyGICBUIwd-DLIqCjqKeYyRJEM-R1yRKLBa_Yn=s96-c",
      country: "Egypt",
      city: "Cairo",
      bio: "I'm a software engineer",
      facebook: "https://www.facebook.com/profile.php?id=100005674454946",
      instagram: "https://www.facebook.com/profile.php?id=100005674454946s",
    });
  }, []);

  return (
    <div>
      <main
        b-10f7mt3975
        className="min-h-[80dvh] md:flex md:gap-10 mt-0 p-0"
        id="overlay"
      >
        <ProfileForm isEditable={true} userDataInp={profileData} />
      </main>
    </div>
  );
}

export default EditProfilePage;
