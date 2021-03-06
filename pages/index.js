import TheBand from "../components/TheBand";
import Nav from "../components/Navbar/Nav";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import TourDates from "../components/TourDates";
import Map from "../components/Map";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
      <Nav />
      <Banner />
      <TheBand />
      <TourDates />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}
