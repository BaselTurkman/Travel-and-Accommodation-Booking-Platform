import { Stack, Paper } from "@mui/material";
import { FC } from "react";
import DatePickerField from "../Fields/DatePickerField";
import TextField from "../Fields/TextField";
import { Form, FormikProvider, useFormik } from "formik";
import GuestRoomSelector from "../Fields/GuestRoomSelector/GuestRoomSelector";
import { initialValues } from "./constants";
import SearchButton from "../Buttons/SearchButton/SearchButton";
import { validationSchema } from "./formSchema";
import { useNavigate } from "react-router-dom";
import { SearchFormProps } from "./types";
import { useAppDispatch } from "@/store/store";
import { setSearchQuery } from "@/features/SearchQuery";
import { SearchQuery } from "@/types";

const SearchForm: FC<SearchFormProps> = ({
  isInSearchPage = true,
  isLoading = false,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const onSubmit = (values: SearchQuery) => {
    dispatch(setSearchQuery({...values}))
    if (!isInSearchPage) {
      navigate("search-result");
    }
  };

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
              label=""
              placeholder="Search for hotels, cities..."
            />
            <DatePickerField name="checkInDate" label="Check-In" />
            <DatePickerField name="checkOutDate" label="Check-Out" />
            <GuestRoomSelector
              guestRoomSelector={{
                adults: formikProps.values.adults,
                children: formikProps.values.children,
                rooms: formikProps.values.numberOfRooms,
                setAdults: (val) => formikProps.setFieldValue("adults", val),
                setChildren: (val) =>
                  formikProps.setFieldValue("children", val),
                setRooms: (val) => formikProps.setFieldValue("rooms", val),
              }}
            />
            <SearchButton disabled={isLoading} loading={false} />
          </Stack>
        </Form>
      </FormikProvider>
    </Paper>
  );
};

export default SearchForm;
