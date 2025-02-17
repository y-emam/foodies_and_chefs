/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import MenusForm from "../../../components/MenusForm/Component";
import checkSignIn from "../../../utils/checkSignIn";
import { getMenuByIdService } from "../../../services/menus/menus";
import { useParams } from "react-router-dom";

function EditMenuPage() {
  const { menuId } = useParams();
  const [menu, setMenu] = useState({
    name: "",
    description: "",
    courses: [],
  });

  useEffect(() => {
    checkSignIn();
  });

  useEffect(() => {
    const getMenu = async () => {
      // Add your code here
      const res = await getMenuByIdService(menuId);

      if (res && res.success) {
        const newMenu = res.data;

        // The Change in Menu structure is because Backend API is returning different structure
        setMenu({
          name: newMenu.menuName,
          description: newMenu.description,
          id: newMenu.id,
          courses: newMenu.dishes.map((course) => {
            return {
              name: course.cuisineName,
              description: course.description,
              image: `${process.env.REACT_APP_API_DOMAIN}/${course.dishesImage}`,
            };
          }),
        });
      }
    };

    getMenu();
  }, []);

  return (
    <div>
      <MenusForm isNewMenu={false} menu={menu} setMenu={setMenu} />
    </div>
  );
}

export default EditMenuPage;
