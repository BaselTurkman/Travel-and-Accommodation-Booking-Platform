import { Stack, Paper } from "@mui/material";
import { FC, useState } from "react";
import DatePickerField from "../Fields/DatePickerField";
import TextField from "../Fields/TextField";
import { Form, FormikProvider, useFormik } from "formik";
import SearchButton from "../Buttons/SearchButton/SearchButton";
import { validationSchema } from "./formSchema";
import { useNavigate } from "react-router-dom";
import { SearchFormProps } from "./types";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  clearSearchQuery,
  selectSearchQuery,
  setSearchQuery,
} from "@/features/SearchQuery";
import { SearchQuery } from "@/types";
import ResetButton from "../Buttons/ResetButton/ResetButton";
import { useSnackBar } from "@/hooks/useSnackBar";
import isEqual from "fast-deep-equal";
import GuestRoomSelector from "../Fields/GuestRoomSelector";
import { buildSearchParams } from "@/pages/SearchResult/utils/buildSearchParams";

const SearchForm: FC<SearchFormProps> = ({
  isInSearchPage = true,
  isLoading = false,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector(selectSearchQuery);
  const { showWarningSnackbar } = useSnackBar();
  const [isInSearchMode, setIsInSearchMode] = useState(false);
  const onSubmit = (values: SearchQuery) => {
    if (isEqual(values, searchQuery) && isInSearchPage) {
      showWarningSnackbar({
        message: "You've already searched with these criteria.",
      });
      return;
    }
    dispatch(setSearchQuery({ ...values }));
    const queryString = buildSearchParams(values);

    if (!isInSearchPage) {
      navigate(`search-result?${queryString}`);
    } else {
      setIsInSearchMode(true);
      navigate(`./?${queryString}`);
    }
  };

  const handleClearSearch = () => {
    resetForm();
    setIsInSearchMode(false);
    dispatch(clearSearchQuery());
    navigate("./");
  };

  const formikProps = useFormik({
    initialValues: searchQuery,
    onSubmit,
    validationSchema,
  });

  const { resetForm, values } = formikProps;

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
                adults: values.adults,
                children: values.children,
                rooms: values.numberOfRooms,
                setAdults: (val) => formikProps.setFieldValue("adults", val),
                setChildren: (val) =>
                  formikProps.setFieldValue("children", val),
                setRooms: (val) =>
                  formikProps.setFieldValue("numberOfRooms", val),
              }}
            />

            <SearchButton disabled={isLoading} loading={false} />
            {isInSearchMode && <ResetButton onClick={handleClearSearch} />}
          </Stack>
        </Form>
      </FormikProvider>
    </Paper>
  );
};

export default SearchForm;
