import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Tags from "../../components/Tags/Tags";
import Pagination from "../../components/UI/Pagination";
import VideoGrid from "../../components/VideoGrid/VideoGrid";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Tags />
      <VideoGrid />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Home;
