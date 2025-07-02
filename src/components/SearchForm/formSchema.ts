import * as yup from "yup";

export const validationSchema = yup.object().shape({
  city: yup.string(),
  checkInDate: yup
    .string()
    .required("Check-in date is required")
    .test(
      "is-valid",
      "Check-in date must be a valid date",
      (value) => !isNaN(Date.parse(value || ""))
    )
    .test("not-in-past", "Check-in date cannot be in the past", (value) => {
      if (!value) return false;
      const selectedDate = new Date(value);
      const today = new Date();
      selectedDate.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }),
  checkOutDate: yup
    .string()
    .required("Check-out date is required")
    .test(
      "is-valid",
      "Check-out date must be a valid date",
      (value) => !isNaN(Date.parse(value || ""))
    )
    .test(
      "is-after-check-in",
      "Check-out date must be after check-in date",
      function (value) {
        const { checkInDate } = this.parent;
        return checkInDate && value && new Date(value) > new Date(checkInDate);
      }
    ),
  numberOfRooms: yup.number(),
  adults: yup.number(),
  children: yup.number(),
  starRating: yup.number(),
  sort: yup.string(),
});
