import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../data/firebase";
import Header from "../../components/page/Header";
import { Button } from "@headlessui/react";

const Orders = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

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
                <h1 className="text-2xl">Welcome, {auth.currentUser?.email}!</h1>
                
                  <div className="my-10 flex flex-wrap items-center justify-center w-full bg-white border border-orange-200">
                    <span className="block w-full text-center m-5">You haven't placed any orders yet.</span>
                    <Button
                      className="bg-yellow-200 border border-yellow-950 skew-y-3 p-2 text-lg xs:text-sm hover:bg-yellow-300 transition-all hover:border-orange-950 hover:text-orange-950 w-[30%] my-5 mx-10"
                      onClick={() => navigate("/")}
                    >
                      Start Shopping
                    </Button>
                  </div>
                
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