import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../data/firebase";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/page/Header";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e:{preventDefault: () => void}) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUserId(userCredential.user.uid);
        console.log(userCredential.user.uid);
      })
      .catch((error) => console.log(error));
    navigate(`/account/${userId}`);
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
                onChange={(e) => setPassword(e.target.value)}                className="w-80 p-5 outline-none block m-5 border border-orange-950"
              ></input>
              <button type="submit" className="bg-yellow-200 border border-yellow-950 skew-y-3 p-2 text-lg xs:text-sm hover:bg-yellow-300 transition-all hover:border-orange-950 hover:text-orange-950 w-72 my-5 mx-10">
                <Link to={`/account/${userId}`}>Sign Up</Link>
              </button>
            </form>
            <h3 className="text-lg w-full text-center p-5">Already have an account? <Link to="/signin">Sign In</Link></h3>
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default SignUp;