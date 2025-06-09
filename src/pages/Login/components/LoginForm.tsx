import PasswordField from "@/components/Fields/PasswordField";
import LoginIcon from "@mui/icons-material/Login";
import { LoadingButton } from "@mui/lab";
import { CircularProgress, Stack } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { initialValues } from "../constants";
import { validationSchema } from "../formSchema";
import TextField from "@/components/Fields/TextField";
import { LoginPayload } from "../types";

const LoginForm = () => {

  const onSubmit = (values: LoginPayload) => {
    // calling the API
    console.log(values);
  };

  const formikProps = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <FormikProvider value={formikProps}>
      <Form>
        <Stack gap={2} p={3}>
          <TextField name="userName" aria-label="Enter your userName" />
          <PasswordField name="password" aria-label="Enter your password" />
          <LoadingButton
            type="submit"
            color="primary"
            variant="contained"
            loadingIndicator={<CircularProgress color="inherit" size={20} />}
            endIcon={<LoginIcon />}
          >
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;