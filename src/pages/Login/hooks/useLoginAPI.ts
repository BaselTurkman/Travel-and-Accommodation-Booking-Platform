import { setSession } from "@/lib/session";
import { useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../API";
import { axiosInstance } from "@/config/axios.config";
import { SessionData } from "@/types/SessionData";
import { useSnackBar } from "@/hooks/useSnackBar";

const useLoginAPI = () => {
  const navigate = useNavigate();
  const { showSuccessSnackbar } = useSnackBar();

  const { mutate: loginUser, isPending } = useMutation({
    mutationFn: loginAPI,
    onSuccess: ({ authentication }) => {
      showSuccessSnackbar({ message: "Login Successful" });
      setSession(authentication);
      const payload = jwtDecode<SessionData>(authentication);
      console.log(payload);

      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${authentication}`;
      //for now
      navigate("/me");
    },
  });

  return {
    loginUser,
    isPending,
  };
};

export default useLoginAPI;
