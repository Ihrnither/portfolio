import {
  Alert,
  Box,
  Grid,
  Snackbar,
  Stack,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import CustomButton from "./CustomButtom";
import Input from "./Input";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { useState } from "react";

const schema = yup.object().shape({
  from_name: yup
    .string()
    .min(3, "Name is too short!")
    .required("Name is Required!"),
  from_email: yup
    .string()
    .email("Enter a valid Email!")
    .required("Email is required!"),
  message: yup
    .string()
    .required("Message is required!")
    .min(4, "Message is too short!")
    .max(1000, "Message is too long!"),
});

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });
  const formik = useFormik({
    initialValues: {
      from_name: "",
      from_email: "",
      message: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res = await emailjs.send(
          "service_8tr4fwk",
          "template_ngx1yk3",
          values,
          "user_OLEpCkMauhO1gOX7kh3Jx"
        );
        setSnackbar({
          open: true,
          message: "Message sent successfully!",
          type: "success",
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setSnackbar({ open: true, message: error, type: "error" });
      }
    },
  });

  return (
    <>
      <Stack alignItems="center" spacing={2}>
        <InView threshold={0.8}>
          {({ ref, inView }) => (
            <Typography
              ref={ref}
              component={motion.p}
              initial={{ x: "20vw", opacity: 0 }}
              animate={inView && { x: 0, opacity: 1 }}
              transition={{ type: "tween", duration: 0.6 }}
              color="info.main"
              fontWeight="600"
              align="center"
            >
              Have a question or want to work together?
            </Typography>
          )}
        </InView>
        <InView threshold={0.9}>
          {({ ref, inView }) => (
            <Grid
              ref={ref}
              container
              spacing={1}
              justifyContent="center"
              component={motion.form}
              initial={{ scale: 0 }}
              animate={inView && { scale: 1 }}
              transition={{ type: "spring", duration: 1 }}
              onSubmit={formik.handleSubmit}
            >
              <Grid item xs={12} sm={10} md={8}>
                <Input
                  label="Name"
                  name="from_name"
                  value={formik.values.from_name}
                  handleChange={formik.handleChange}
                  error={
                    formik.touched.from_name && Boolean(formik.errors.from_name)
                  }
                  helperText={
                    formik.touched.from_name && formik.errors.from_name
                  }
                />
              </Grid>
              <Grid item xs={12} sm={10} md={8}>
                <Input
                  label="Email"
                  name="from_email"
                  value={formik.values.from_email}
                  handleChange={formik.handleChange}
                  error={
                    formik.touched.from_email &&
                    Boolean(formik.errors.from_email)
                  }
                  helperText={
                    formik.touched.from_email && formik.errors.from_email
                  }
                />
              </Grid>
              <Grid item xs={12} sm={10} md={8}>
                <Input
                  multiline
                  label="Your Message"
                  name="message"
                  value={formik.values.message}
                  handleChange={formik.handleChange}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                />
              </Grid>
              <Grid item xs={12} sm={10} md={8}>
                <Grid container justifyContent="flex-end">
                  <CustomButton
                    text="SUBMIT"
                    fontSize={16}
                    onClick={() => formik.handleSubmit()}
                    disabled={loading}
                    loading={loading}
                  />
                </Grid>
              </Grid>
            </Grid>
          )}
        </InView>
      </Stack>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1,
          overflow: "hidden",
          lineHeight: 0,
        }}
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            position: "relative",
            display: "block",
            width: `calc(100% + 1.3px)`,
            height: 115,
          }}
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            style={{ fill: "#f5f5f5" }}
          ></path>
        </svg>
      </Box>
      <Snackbar
        open={snackbar.open}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        autoHideDuration={3000}
      >
        <Alert severity={snackbar.type} variant="filled">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contact;
