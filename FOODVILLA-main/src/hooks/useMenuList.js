import { useEffect, useState } from "react";

const useMenuList = (id) => {
  const [resturantdeatil, setResturantdetail] = useState([]);
  const [menudeatil, setMenudetail] = useState([]);

  useEffect(() => {
    getResturantsInfo();
  }, []);

  async function getResturantsInfo() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.179683924526447&lng=79.93636887520552&catalog_qa=undefined&submitAction=ENTER&restaurantId=" +
        id
    );
    const json = await data.json();
    const menu = json?.data?.cards?.find((x) => x.groupedCard)?.groupedCard
      ?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    setResturantdetail(json.data?.cards);
    setMenudetail(menu);
  }

  return [resturantdeatil, menudeatil];
};
export default useMenuList;
