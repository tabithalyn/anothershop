import { Link } from "react-router-dom";
import { auth } from "../../data/firebase";
import Header from "../../components/page/Header";

const Orders = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="bg-gradient-to-b from-orange-300 to-[#fcc183]">
      <Header />
      <section className="w-full h-screen flex flex-wrap items-center justify-center font-montserrat" id="home">
        <div className="flex flex-wrap items-center justify-center bg-yellow-50">
          <div className="w-full flex flex-wrap items-center justify-center mb-10">
            <h1 className="text-4xl font-bold w-full text-center p-10">Orders</h1>
          </div>
          <div>
          {
            token ? (
              <div className="mb-20">
                <h1>Welcome, {auth.currentUser?.email}!</h1>
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
 
export default Orders;