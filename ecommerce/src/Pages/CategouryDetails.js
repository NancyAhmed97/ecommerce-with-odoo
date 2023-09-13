import React from "react";
import Navbar from "../Components/Navbar/Navbar"
import CategoyList from "../Components/CategoyList/CategoyList";
function CategouryDetails() {
  return (
    <section>
      <Navbar />
      <CategoyList/>
      {/* 
      <CategoyList />
      <Footer /> */}
    </section>
  );
}

export default CategouryDetails;
