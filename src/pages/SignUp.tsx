import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../data/firebase";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/page/Header";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e:{preventDefault: () => void}) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      localStorage.setItem("token", user.uid);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-gradient-to-b from-orange-300 to-[#fcc183]">
      <Header />
      <section className="w-full h-screen flex flex-wrap items-center justify-center font-montserrat" id="home">
        <div className="flex flex-wrap items-center justify-center bg-yellow-50">
          <div className="w-full flex flex-wrap items-center justify-center mb-10">
            <h1 className="text-4xl font-bold w-full text-center p-10">Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                placeholder="Email..."
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-80 p-5 outline-none block m-5 border border-orange-950"
              ></input>
              <input
                type="password"
                id="password"
                placeholder="Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-80 p-5 outline-none block m-5 border border-orange-950"
              ></input>
              <button type="submit" className="bg-yellow-200 border border-yellow-950 skew-y-3 p-2 text-lg xs:text-sm hover:bg-yellow-300 transition-all hover:border-orange-950 hover:text-orange-950 w-72 my-5 mx-10">Sign Up</button>
            </form>
            <h3 className="text-lg w-full text-center p-5">Already have an account? <Link to="/signin">Sign In</Link></h3>
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default SignUp;