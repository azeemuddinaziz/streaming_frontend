import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    setTimeout(() => {
      navigate("/");
    }, 0);
  }

  return <div>Register</div>;
}

export default Login;
