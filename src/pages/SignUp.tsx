import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../data/firebase";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/page/Header";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleSubmit = async (e:{preventDefault: () => void}) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      localStorage.setItem("token", user.uid);
      localStorage.setItem("user", JSON.stringify(user));
      setIsOpen(true);
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
          <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={() => setIsOpen(false)}>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex h-full items-center justify-center p-4">
                <DialogPanel
                  className="w-full h-[79%] flex flex-wrap items-center justify-center max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 border-b-black"
                >
                  <DialogTitle as="h3" className="text-3xl font-bold text-black">
                    ✅ Account Created!
                  </DialogTitle>
                  <p className="mt-2 text-xl text-black/50 text-center">
                    Thanks for joining!<br />Hope you have a great shopping experience.
                  </p>
                  <div className="w-full flex flex-wrap justify-around items-center">
                    <Button
                      className="bg-yellow-200 border border-yellow-950 skew-y-3 p-2 text-lg xs:text-sm hover:bg-yellow-300 transition-all hover:border-orange-950 hover:text-orange-950 w-[30%] my-5 mx-10"
                      onClick={() => navigate("/")}
                    >
                      Shop
                    </Button>
                    <Button
                      className="bg-yellow-200 border border-yellow-950 skew-y-3 p-2 text-lg xs:text-sm hover:bg-yellow-300 transition-all hover:border-orange-950 hover:text-orange-950 w-[30%] my-5 mx-10"
                      onClick={() => navigate(`/account/${token}`)}
                    >
                      Account
                    </Button>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
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