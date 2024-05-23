import { signOut } from "firebase/auth";
import { auth } from "../../data/firebase";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/page/Header";

// https://github.com/the-debug-arena/Login-Auth-Firebase-ReactJS/blob/main/src/App.js ???

const Account = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out Successful");
      })
      .catch((err:any) => {
        console.log(err);
      });
    navigate("/signin");
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
            auth.currentUser?.uid ? (
              <div className="mb-20">
                <h1>Welcome, {auth.currentUser?.email}!</h1>
                <h3>Your ID is {id}.</h3>
                <p>
                  <button onClick={userSignOut}>Sign Out</button>
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