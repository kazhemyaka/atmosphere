import ContactUsForm from "../../components/ContactUsForm/ContactUsForm";
import Footer from "../../components/Footer/Footer";

const ContactUs = () => {
  return (
    <div className="flex flex-col h-full bg-gradient-to-t from-sky-100 to-white">
      <div className="flex-grow">
        <ContactUsForm />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
