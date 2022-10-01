import { useRouter } from "next/router";
import firebase from "./../../config/firebase.js";
import { useState } from "react";


export default function Admin({ isAuth }) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      await firebase
        ?.auth()
        .signInWithEmailAndPassword(email, password);
    } catch (error) {
    }
  }

  if (isAuth) {
    router.push("/admin/dashboard")
  }

  return (
    <div className="login">
      <form onSubmit={submit}>
        <div className="form-field">
          <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-field">
          <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="form-field">
          <button className="btn" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}