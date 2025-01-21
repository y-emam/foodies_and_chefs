import { useEffect, useState } from "react";

import "./styles.css";
import ProfileForm from "../../components/ProfileForm/Component";

function ProfilePage() {
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
    <div className="ProfilePage">
      <main className="min-h-[80dvh] md:flex md:gap-10 mt-0 p-0" id="overlay">
        <ProfileForm isEditable={false} userDataInp={profileData} />
      </main>
    </div>
  );
}

export default ProfilePage;
