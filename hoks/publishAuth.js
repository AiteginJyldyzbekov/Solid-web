import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getAuth } from "../store/selectors.js";

const WithNotAuth = ({Component}) => {
    const route = useRouter();
    const authData = useSelector(getAuth);
    const isAuth = Boolean(authData);

    if(!isAuth) {
        return <Component />
    } else {
        route.push("/profile")
        return null;
    }
};
  
  export default WithNotAuth;