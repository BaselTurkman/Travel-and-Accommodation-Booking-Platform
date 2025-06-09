import PasswordField from "@/components/Fields/PasswordField";
import LoginIcon from "@mui/icons-material/Login";
import { CircularProgress, Stack, Button } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { initialValues } from "../constants";
import { validationSchema } from "../formSchema";
import TextField from "@/components/Fields/TextField";
import { LoginPayload } from "../types";
import useLoginAPI from "../hooks/useLoginAPI";

const LoginForm = () => {
  const { loginUser, isPending } = useLoginAPI();

  const onSubmit = (values: LoginPayload) => {
    loginUser({ ...values });
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
          <Button
            type="submit"
            color="primary"
            variant="contained"
            loadingIndicator={<CircularProgress color="inherit" size={20} />}
            endIcon={<LoginIcon />}
            loading={isPending}
          >
          </Button>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;