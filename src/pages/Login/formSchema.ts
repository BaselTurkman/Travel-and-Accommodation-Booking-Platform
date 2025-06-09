import * as yup from "yup";

export const validationSchema = yup.object().shape({
  userName: yup.string().required("Please enter your userName"),
  password: yup.string().required("Please enter your password"),
});
