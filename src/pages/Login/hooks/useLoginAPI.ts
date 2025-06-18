import { setSession } from "@/lib/session";
import { useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../API";
import { axiosInstance } from "@/config/axios.config";
import { SessionData } from "@/types/SessionData";
import { useSnackBar } from "@/hooks/useSnackBar";
import { useAppDispatch } from "@/store/store";
import { login } from "@/features/User";

const useLoginAPI = () => {
  const navigate = useNavigate();
  const { showSuccessSnackbar } = useSnackBar();
  const dispatch = useAppDispatch();

  const { mutate: loginUser, isPending } = useMutation({
    mutationFn: loginAPI,
    onSuccess: ({ authentication }) => {
      showSuccessSnackbar({ message: "Login Successful" });
      setSession(authentication);
      const payload = jwtDecode<SessionData>(authentication);
      dispatch(login(payload));
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${authentication}`;
      if (payload.userType === "User") {
        navigate("/me");
      } else {
        navigate("/me/cities");
      }
    },
  });

  return {
    loginUser,
    isPending,
  };
};

export default useLoginAPI;
