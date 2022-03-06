import { useRouter } from "next/router";

const WithAuth = ({Component, isAuth}) => {
    const route = useRouter();

    if(isAuth) {
        return <Component />
    } else {
        route.push("/SuperAdmin")
        return null;
    }
};
  
  export default WithAuth;