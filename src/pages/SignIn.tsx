import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../data/firebase";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/page/Header";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e:{preventDefault: () => void}) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      localStorage.setItem("token", user.uid);
      localStorage.setItem("user", JSON.stringify(user));
      navigate(`/account/${user.uid}`);
    })
    .catch((error) => {
      console.log(error);
      alert("Password is incorrect.");
    });
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
                required
              ></input>
              <input
                type="password"
                placeholder="Password..."
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-80 p-5 outline-none block m-5 border border-orange-950"
                required
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