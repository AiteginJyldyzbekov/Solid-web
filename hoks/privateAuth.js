import { useRouter } from "next/router";

const WithAuth = ({Component, isAuth}) => {
    const route = useRouter();

    if(isAuth) {
        return <Component />
    } else {
        route.push("/admin")
        return null;
    }
};
  
  export default WithAuth;