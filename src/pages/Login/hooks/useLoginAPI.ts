import { setSession } from "@/lib/session";
import { useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";
import { loginAPI } from "../API";
import { axiosInstance } from "@/config/axios.config";
import { SessionData } from "@/types/SessionData";

const useLoginAPI = () => {
//   const navigate = useNavigate();

  const { mutate: loginUser, isPending } = useMutation({
    mutationFn: loginAPI,
    onSuccess: ({ authentication }) => {
      
      setSession(authentication);
      const payload = jwtDecode<SessionData>(authentication);
      console.log(payload);
      
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${authentication}`;
      /*
      if (payload.userType == "Admin") navigate("/me/cities");
      else navigate("/me");*/
    },
    onError: () => {
      console.log("Errorrrrr!@#$");
      ;
    },
  });

  return {
    loginUser,
    isPending,
  };
};

export default useLoginAPI;