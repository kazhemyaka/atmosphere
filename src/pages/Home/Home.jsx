import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="flex flex-col h-full bg-gradient-to-t from-sky-100 to-white">
      <div className="flex-grow">
        <WelcomeSection />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
