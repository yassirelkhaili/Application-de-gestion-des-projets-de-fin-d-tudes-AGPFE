import { Navigate, Outlet} from "react-router-dom";

const PrivateRoutes = () => {
  const loginResponse = JSON.parse(sessionStorage.getItem("auth"))
  return (
    loginResponse === "login_success" ? <Outlet /> : <Navigate to="/auth" replace="true"/>
  )
};

export default PrivateRoutes;
