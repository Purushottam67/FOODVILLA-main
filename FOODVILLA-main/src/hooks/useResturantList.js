import { useEffect, useState } from "react";

const useResturantList = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.179683924526447&lng=79.93636887520552&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        const err = response.status;
        throw new Error(err);
      } else {
        const json = await response.json();
        async function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {
            let checkData =
              json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;
            if (checkData !== undefined) {
              return checkData;
            }
          }
        }
        const resData = await checkJsonData(json);
        setAllRestaurants(resData);
        setFilteredRestaurants(resData);
      }
    } catch (error) {
      console.error(error); // show error in console
    }
  }
  return [allRestaurants, filteredRestaurants];
};
export default useResturantList;
