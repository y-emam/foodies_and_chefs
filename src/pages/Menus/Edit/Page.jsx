import { useEffect, useState } from "react";
import MenusForm from "../../../components/MenusForm/Component";
import checkSignIn from "../../../utils/checkSignIn";
import { getMenuByIdService } from "../../../services/menus/menus";
import { useParams } from "react-router-dom";

function EditMenuPage() {
  const { menuId } = useParams();
  const [menu, setMenu] = useState({
    menuName: "",
    description: "",
    dishes: [],
  });

  useEffect(() => {
    checkSignIn();
  });

  useEffect(() => {
    const getMenu = async () => {
      // Add your code here
      const res = await getMenuByIdService(menuId);

      if (res && res.success) {
        setMenu(res.data);
      }
    };

    getMenu();
  });

  return (
    <div>
      <MenusForm isNewMenu={false} menu={menu} setMenu={setMenu} />
    </div>
  );
}

export default EditMenuPage;
