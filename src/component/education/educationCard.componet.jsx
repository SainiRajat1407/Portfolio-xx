import { Card } from "@mui/material";
import React from "react";
import ImageCarousel from "./imageCarousel.component";


const EducationCard = (props) => {
  const { id, type, name, major, gpa , images } = props.item;
  return (
    <Card className="education-card-container" key={id}>
      <div className="education-card-photo-container">
          <ImageCarousel images={images} />
      </div>
      <div className="education-card-details">
        <div className="name">{name}</div>
      <div className="type">{type}</div>
      <div className="major">{major}</div>
      <div className="gpa">{gpa}</div>
      </div>
      
    </Card>
  );
};

export default EducationCard;
