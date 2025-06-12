import { Stack, Paper } from "@mui/material";
import { useState } from "react";
import DatePickerField from "../Fields/DatePickerField";
import TextField from "../Fields/TextField";
import { Form, FormikProvider, useFormik } from "formik";
import GuestRoomSelector from "../Fields/GuestRoomSelector/GuestRoomSelector";
import { initialValues } from "./constants";
import SearchButton from "../Buttons/SearchButton/SearchButton";
import { validationSchema } from "./formSchema";

const SearchForm = () => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const onSubmit = () => {};

  const formikProps = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Paper sx={{ p: 2.5, borderRadius: 5, my: 4 }} elevation={3}>
      <FormikProvider value={formikProps}>
        <Form>
          <Stack
            flexDirection={{ sm: "column", md: "row" }}
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <TextField
              name="city"
              placeholder="Search for hotels, cities..."
            />
            <DatePickerField name="checkInDate" label="Check-In" />
            <DatePickerField name="checkOutDate" label="Check-Out" />
            <GuestRoomSelector
              guestRoomSelector={{
                adults,
                children,
                rooms,
                setAdults,
                setChildren,
                setRooms,
              }}
            />
            <SearchButton disabled={false} loading={false}/>
          </Stack>
        </Form>
      </FormikProvider>
    </Paper>
  );
};

export default SearchForm;
