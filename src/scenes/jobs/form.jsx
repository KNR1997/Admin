import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import axios from 'axios';

const JobForm = () => {
  const previousRoute = "/jobs";
  const backToPrevious = () => {
    if (previousRoute) {
      window.location.href = previousRoute;
    }
  };
  const isNonMobile = useMediaQuery("(min-width:600px)");
  
  const handleFormSubmit = (values) => {
    axios.post('http://localhost:8080/api/jobs/addJob', values)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <Box m="20px">
      <Header title="CREATE JOB" subtitle="Create a New Job Position" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Company Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.companyName}
                name="companyName"
                error={!!touched.companyName && !!errors.companyName}
                helperText={touched.companyName && errors.companyName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Tech Stack"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.techStack}
                name="techStack"
                error={!!touched.techStack && !!errors.techStack}
                helperText={touched.techStack && errors.techStack}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Designation"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.designation}
                name="designation"
                error={!!touched.designation && !!errors.designation}
                helperText={touched.designation && errors.designation}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Requirement"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.requirement}
                name="requirement"
                error={!!touched.requirement && !!errors.requirement}
                helperText={touched.requirement && errors.requirement}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                onClick={backToPrevious}
              >
                Create New Job
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  companyName: yup.string().required("required"),
  techStack: yup.string().required("required"),
  designation: yup.string().required("required"),
  requirement: yup.string().required("required"),
});
const initialValues = {
  companyName: "",
  techStack: "",
  designation: "",
  requirement: "",
};

export default JobForm;
