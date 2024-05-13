import * as Yup from "yup";

export const FormSchema = Yup.object().shape({
    title: Yup.string().required("Title Name is required"),
    body: Yup.string().required("Body is required"),
    // dateRange: Yup.object().shape({
    //   startDate: Yup.date().required("Start date is required"),
    //   endDate: Yup.date().required("End date is required").min(Yup.ref("StartDate"), "End date must be after start date"),
    // }),
  });