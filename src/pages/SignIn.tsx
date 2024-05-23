import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../data/firebase";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/page/Header";

// https://github.com/developedbyed/react-auth-firebase/blob/main/pages/auth/login.js ???
// https://www.thapatechnical.com/2022/08/complete-user-registration-login-logout.html ?? (uses Auth0)
// https://www.youtube.com/watch?v=aNMnyLjFqYI ?? (firebase)

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e:{preventDefault: () => void}) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user.uid);
        setUserId(userCredential.user.uid.toString());
        navigate(`/account/${userId}`);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="bg-gradient-to-b from-orange-300 to-[#fcc183]">
      <Header />
      <section className="w-full h-screen flex flex-wrap items-center justify-center font-montserrat" id="home">
        <div className="flex flex-wrap items-center justify-center bg-yellow-50">
          <div className="w-full flex flex-wrap items-center justify-center mb-10">
            <h1 className="text-4xl font-bold w-full text-center p-10">Sign In</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email..."
                id="email"
                value={email}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                className="w-80 p-5 outline-none block m-5 border border-orange-950"
              ></input>
              <input
                type="password"
                placeholder="Password..."
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-80 p-5 outline-none block m-5 border border-orange-950"
              ></input>
              <button type="submit" className="bg-yellow-200 border border-yellow-950 skew-y-3 p-2 text-lg xs:text-sm hover:bg-yellow-300 transition-all hover:border-orange-950 hover:text-orange-950 w-72 my-5 mx-10">
                Log In
              </button>
            </form>
            <h3 className="text-lg w-full text-center p-5">Don't have an account? <Link to="/signup">Sign Up</Link></h3>
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default SignIn;