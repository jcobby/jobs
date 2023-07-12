import React from "react";
import Header from "../components/Headersvg";
import HomeNav from "../components/HomeNav";
import HomeCard from "../components/HomeCard";

function ListPage() {
  return (
    <div className="devian">
      <div>
        <Header />
        <HomeNav />
        <HomeCard />
      </div>
    </div>
  );
}

export default ListPage;
