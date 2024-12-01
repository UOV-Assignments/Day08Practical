import { Link, Route, Routes } from "react-router-dom";
import Home from "../components/Home.js";
import AboutUs from "../components/AboutUs.js";
import Contact from "../components/Contact.js";
export default function Dashboard(params) {
  return (
    <>
      <div>
        <h1>Hello User</h1>

        <nav className="flex ">
          <div>
            <Link to="home">Home</Link>
          </div>
          <div>
            <Link to="aboutus">AboutUs</Link>
          </div>
          <div>
            <Link to="contacts">Contacts</Link>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contacts" element={<Contact />} />
      </Routes>
    </>
  );
}
