import { axiosInstance } from "@/config/axios.config";
import { updateUserSession } from "@/features/User";
import { getSession } from "@/lib/session";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { SessionData } from "@/types/SessionData";
import { useSnackBar } from "./useSnackBar";
import { useAppDispatch } from "@/store/store";

const useSession = () => {
  const session = getSession();
  const [state, setState] = useState({
    isLoggedIn: false,
    isUpdatingSession: true,
  });
  const dispatch = useAppDispatch();
  const { showErrorSnackbar } = useSnackBar();
  useEffect(() => {
    if (!session) {
      setState({
        isLoggedIn: false,
        isUpdatingSession: false,
      });
      return;
    }
    try {
      const payload = jwtDecode<SessionData>(session);
      dispatch(updateUserSession(payload));
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${session}`;
      setState({
        isLoggedIn: true,
        isUpdatingSession: false,
      });
    } catch (error: Error | unknown) {
      if (error instanceof Error)
        showErrorSnackbar({
          message: `${error.name}: ${error.message}`,
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    ...state,
  };
};

export default useSession;