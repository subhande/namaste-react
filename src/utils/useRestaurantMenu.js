import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resid) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const url = MENU_URL + resId;
    const response = await fetch(url);
    const data = await response.json();
    setResInfo(data.data);
  };
  return resInfo;
};


export default useRestaurantMenu;