import { useRouter } from "next/router";
import firebase from "./../../config/firebase.js";


export default function Admin({isAuth}) {
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    const email = e.target.children[1]
    const password = e.target.children[3]
    try {
      await firebase
        ?.auth()
        .signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
    }
  }

  if(isAuth) {
    router.push("/admin/dashboard")
  }
  return (
    <div className="login">
      <form onSubmit={submit}>
        <p>login</p>
        <input type="email" />

        <p>password</p>
        <input type="password" />
        <button>Log in</button>
      </form>
    </div>
  );
}