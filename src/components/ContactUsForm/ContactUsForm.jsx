import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { supabase } from "../../supabase";
import { useState } from "react";

const ContactUsSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().min(10, "Minimum 10 characters").required("Required"),
});

const ContactUsForm = () => {
  const [feedback, setFeedback] = useState(null);

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    const { name, email, message } = values;
    try {
      const { error } = await supabase
        .from("appeals")
        .insert({ name, email, message });
      if (error) throw error;
      setFeedback({
        type: "success",
        message: "Form submitted successfully! Thank you for your feedback.",
      });
      resetForm();
    } catch (error) {
      console.error("Error occured.", { error });
      setFeedback({
        type: "error",
        message: "An error occured. Please try again.",
      });
    }
  };

  return (
    <section className="px-5 sm:px-10 h-full flex items-center">
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={ContactUsSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-full sm:w-6/12 mx-auto">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <div className="mt-5">
            <label htmlFor="name" className="block text-lg font-medium">
              Name
            </label>
            <Field
              id="name"
              name="name"
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-dodger-blue focus:border-dodger-blue transition ease-in-out duration-150"
            />
            <ErrorMessage name="name" component="p" className="text-red-500" />
          </div>
          <div className="mt-5">
            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-dodger-blue focus:border-dodger-blue transition ease-in-out duration-150 sm:text-lg"
            />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="block text-lg font-medium">
              Message
            </label>
            <Field
              id="message"
              name="message"
              as="textarea"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-dodger-blue focus:border-dodger-blue transition ease-in-out duration-150 sm:text-lg"
            />
            <ErrorMessage
              name="message"
              component="p"
              className="text-red-500"
            />
          </div>
          <button
            type="submit"
            className="mt-5 w-full bg-dodger-blue text-white font-bold py-2 px-4 rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-dodger-blue focus:ring-opacity-50 transition ease-in-out duration-150"
          >
            Submit
          </button>
          {feedback && (
            <p
              className={`mt-5 p-4 rounded-md ${
                feedback.type === "success" ? "bg-green-200" : "bg-red-200"
              }`}
            >
              {feedback.message}
            </p>
          )}
        </Form>
      </Formik>
    </section>
  );
};

export default ContactUsForm;
