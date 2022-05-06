import { useNavigate } from "react-router-dom";

const useNavigation = () => {
  const navigate = useNavigate();

  const back = () => navigate(-1);
  const push = (link: string) => navigate(link);
  const replace = (link: string) => navigate(link);

  return {
    back,
    push,
    replace,
  };
};

export default useNavigation;
