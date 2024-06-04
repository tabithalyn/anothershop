import { Navigate } from "react-router-dom";
import Account from "./Account";

const Protected = () => {
  const token = localStorage.getItem("token");

  return (
    token ? <Account /> : <Navigate to="/signin" />
  );
}
 
export default Protected;