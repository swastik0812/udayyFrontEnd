import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { DatePicker } from "@material-ui/pickers";
import useStyles from "./useStyles";
import moment from "moment";
import axios from "axios";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import * as _ from "lodash";
   
const initialValues = {
  name:"",
  passward: "",
};
    
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 2) {
    errors.name = "Enter a valid name";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 7) {
    errors.password = "To short Password";
  } else if (values.password.length > 20) {
    errors.password = "To Big password";
  }

  return errors;
};

export default function SignUp() {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  const onSubmit = async (formData) => {
         try {
           localStorage.setItem("userName",formData.name)
      history.push("/Main");
    } catch (error) {
      console.log(error.response);
      alert("It seems we had some issue, please try again!");
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Welcome!
        </Typography>
        <Formik
          validate={validate}
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          {(formikProps) => {
            const {
              values,
              errors,
              handleChange,
              handleBlur,
              touched,
            } = formikProps;

            return (
              <form
                className={classes.form}
                onSubmit={formikProps.handleSubmit}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} >
                    <TextField
                      autoComplete="name"
                      name="name"
                      variant="outlined"
                      required
                      fullWidth
                      label="Name"
                      autoFocus
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!(errors.name && touched.name && errors.name)}
                      helperText={
                        errors.name && touched.name && errors.name
                          ? errors.name
                          : undefined
                      }
                      inputProps={{
                        maxLength: 100,
                      }}
                    />
                  </Grid>
                 
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      color="#d2a238"
                      fullWidth
                      label="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.password && touched.password}
                      helperText={
                        errors.password && touched.password
                          ? errors.password
                          : undefined
                      }
                      inputProps={{
                        maxLength: 100,
                      }}
                    />
                  </Grid>
                 
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={formikProps.isSubmitting}
                >
                  Login
                </Button>
              </form>
            );
          }}
        </Formik>
      </div>
    </Container>
  );
}
