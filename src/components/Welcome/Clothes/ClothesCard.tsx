import React from "react";
import Card from "react-bootstrap/Card";
import { ClothesProps } from "../../../models/ClothesProps";
import Item from "../../../models/Item";

function ClothesCard({ clothes }: ClothesProps) {
  return (
    <div>
      <div className="cloth-wrapper row flex">
        {clothes.map((cloth: Item, index: number) => {
          return (
            <Card className="cloth-box col-md-4" key={index}>
              {/* <div className="image-wrapper"> */}
              <Card.Img src={cloth.image} className="cloth-image" />
              {/* </div> */}
              <Card.Title className="cloth-header">{cloth.type}</Card.Title>
              <Card.Text className="cloth-brand">{cloth.brand}</Card.Text>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default ClothesCard;
