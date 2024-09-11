import { refreshUserTokens } from "@/services/user.services";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function RefreshToken() {
  const [refreshSuccess, setRefreshSuccess] = useState(false);

  useEffect(() => {
    setRefreshSuccess(false);
    try {
      const refresh = async () => {
        await refreshUserTokens();
        setRefreshSuccess(true);
      };

      refresh();
    } catch (error) {
      setRefreshSuccess(false);
      console.log(error);
    }
  }, []);

  if (refreshSuccess) return <Navigate to={"/login"} replace />;

  return <div>RefreshToken</div>;
}

export default RefreshToken;
