import React from "react";
import MainCarousel from "../../Components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../Components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/mens_kurta";
const Homepage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Shoes"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Shirts"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Womens Saree"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Womens Dress"}/>
      </div>
    </div>
  );
};

export default Homepage;
