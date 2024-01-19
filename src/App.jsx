import React from "react";
import { style } from "./util/style";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import Contract from "./components/Contract";
import Billing from "./components/Billing";
import Business from "./components/Business";
import Cta from "./components/Cta";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Navbar */}
      <div className={`${style.paddingX}  ${style.flexstart} `}>
        <div className={`${style.container}`}>
          <Navbar />
        </div>
      </div>

      {/* Home */}
      <div className={`${style.flexstart}`}>
        <div className={`${style.container}`}>
          <Home />
        </div>
      </div>

      {/* Statistics */}
      <div className={`bg-primary ${style.paddingX} ${style.flexstart} `}>
        <div className={`${style.container}`}>
          <Statistics />
          <Contract />
          <Billing />
          <Business />
          <Testimonials />
          <Clients />
          <Cta />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
