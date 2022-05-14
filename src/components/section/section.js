import React from "react";
import "./section.scss";

const sectionProducts = {
  products: [
    {
      id: 1,
      name: "tapper love",
      img: "https://picsum.photos/id/873/390/390?animals",
    },
    {
      id: 2,
      name: "Box seduction",
      img: "https://picsum.photos/id/87/390/390?random",
    },
    {
      id: 3,
      name: "Flowers amazing",
      img: "https://picsum.photos/id/80/390/390?random",
    },
  ],
};

const Section = () => {
  return (
    <div className="sectionImg">
      {sectionProducts.products.map((item) => (
        <img className="img" key={item.id} src={item.img} alt={item.name} />
      ))}
    </div>
  );
};
export default Section;

// <img
// className="img"
// src="https://picsum.photos/id/80/390/390?random"
// alt="img"
// />
