import { deleteUser, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../data/firebase";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/page/Header";
import { useState, useEffect } from "react";

// https://github.com/the-debug-arena/Login-Auth-Firebase-ReactJS/blob/main/src/App.js ???

const Account = () => {
  const [authUser, setAuthUser] = useState({
    email: ""
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser({
          email: user.email!.toString()
        });
        console.log(`${user.uid} is signed in.`);
      }
    });
    return () => listen();
  }, []);

  const signout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      console.log(`${authUser.email} has been signed out.`);
      navigate("/", { replace: true });
    }).catch((error) => {
      console.log(error);
    });
  }

  const deleteAccount = () => {
    const user = auth.currentUser!;
    const confirmation = confirm("Are you sure you want to delete your account?");
    if (confirmation === true) {
      try {
        deleteUser(user);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        console.clear();
        console.log("User has been successfully deleted from database.")
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="bg-gradient-to-b from-orange-300 to-[#fcc183]">
      <Header />
      <section className="w-full h-screen flex flex-wrap items-center justify-center font-montserrat" id="home">
        <div className="flex flex-wrap items-center justify-center bg-yellow-50">
          <div className="w-full flex flex-wrap items-center justify-center mb-10">
            <h1 className="text-4xl font-bold w-full text-center p-10">Account</h1>
          </div>
          <div>
          {
            token ? (
              <div className="mb-20">
                <h1>Welcome, {auth.currentUser?.email}!</h1>
                <h3>Your ID is {id}.</h3>
                <p>
                <button type="submit" className="bg-yellow-200 border border-yellow-950 skew-y-3 p-2 text-lg xs:text-sm hover:bg-yellow-300 transition-all hover:border-orange-950 hover:text-orange-950 w-72 my-2 mx-10" onClick={signout}>Sign Out</button>
                </p>
                <p>
                <button type="submit" className="bg-red-300 border border-red-950 skew-y-3 p-2 text-lg xs:text-sm hover:bg-red-400 transition-all hover:border-orange-950 hover:text-orange-950 w-72 my-2 mx-10" onClick={deleteAccount}>Delete Account</button>
                </p>
              </div>
            ) : (
              <div className="mb-20 flex flex-wrap items-center justify-center w-full">
                <span className="block w-full text-center m-5">You are not authorized.</span>
                <span className="block w-full text-center m-5"><Link to="/signin">Sign In</Link> or <Link to="signup">Sign Up</Link></span>
              </div>
            )
          }
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default Account;