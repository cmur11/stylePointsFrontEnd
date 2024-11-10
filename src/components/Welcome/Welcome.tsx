import React, { useState } from "react";
import Clothes from "../../models/Item";
import ClothItem, { OCCASION } from "../../models/Item";
import { ClothType } from "../../models/Item";
import ClothesCard from "./Clothes/ClothesCard";
import styleImg from "../../assets/clipboard.jpg";
import "./Welcome.css";

import { Row, Col, Form } from "react-bootstrap";

function Welcome() {
  const mockClothes: ClothItem[] = [
    {
      image: styleImg,
      occasion: [OCCASION.DATE],
      color: "blue",
      brand: "Faherty",
      category: "Clothing",
      type: ClothType.LONGSLEEVE,
    },
    {
      image: styleImg,
      occasion: [OCCASION.DATE],
      color: "green",
      brand: "Faherty",
      category: "Clothing",
      type: ClothType.SHORTSLEEVE,
    },
    {
      image: styleImg,
      occasion: [OCCASION.DATE],
      color: "red",
      brand: "Faherty",
      category: "Clothing",
      type: ClothType.SHORTSLEEVE,
    },

    {
      image: styleImg,
      occasion: [OCCASION.ATHLEISURE],
      color: "green",
      brand: "Faherty",
      category: "Footwear",
      type: ClothType.FOOTWEAR,
    },
    {
      image: styleImg,
      occasion: [OCCASION.ATHLEISURE],
      color: "gray",
      brand: "Faherty",
      category: "Accessories",
      type: ClothType.ACCESSORIES,
    },
  ];
  const categories = ["Clothing", "Footwear", "Accessories"];
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const handleCheckboxChange = (category: any) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter((item) => item !== category);
      } else {
        return [...prevSelectedCategories, category];
      }
    });
  };
  const filteredProducts = selectedCategories.length
    ? mockClothes.filter((product) =>
        selectedCategories.includes(product.category)
      )
    : mockClothes;
  return (
    <div className="welcome-wrapper container">
      <div className="welcome-gap">Make room</div>
      <div className="welcome row">
        <div className="welcome-filter col-3">
          Filter
          <Form>
            <Row>
              {categories.map((category) => (
                <Col key={category} className="col-12">
                  <Form.Check
                    type="checkbox"
                    label={category}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCheckboxChange(category)}
                  />
                </Col>
              ))}
            </Row>
          </Form>
        </div>
        <div className="welcome-clothes col-9">
          <ClothesCard clothes={filteredProducts} />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
