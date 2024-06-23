import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const [cookies] = useCookies(["authToken"]);
  console.log("ProtectedRoute is running, authToken:", cookies.authToken);

  if (!cookies.authToken) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
