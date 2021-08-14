import React, { useState, useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { setProducts } from "../../redux/actions";
import { Category, Product } from "../../Types/Types";
import { findObjectFromArrayOfIt } from "../../utilits/functions";
import "./ScreenTow.css";


interface ScreenTowProps {
  setScreenNum: (ScreenNum: string) => void;
  setSelectedProduct: (products: Product) => void;
}



function mapDispatchToProps(dispatch: Dispatch) {
  return {
    setSelectedProduct: (products: any) => dispatch(setProducts(products)),
  };
}

function ScreenTow({ setScreenNum, setSelectedProduct }: ScreenTowProps) {
  const [items, setItems]: any = useState([]);
  const [data, setData] = useState<Category[]>([]);

  // get data to initialize items to select from
  const getDataFromLocalFile = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson.productCategories);
      });
  };

  useEffect(() => {
    getDataFromLocalFile();
  }, []);



  // addToBasket function for toggle items in basket (add /remove)
  const addToBasket = (item: Product) => {
    if (findObjectFromArrayOfIt(item, items, "name")) {
      let newSlicedArray = [...items];
      newSlicedArray = newSlicedArray.filter(
        (i: Product) => i.name !== item.name
      );
      setItems(newSlicedArray);
    } else {
      let newArray = [...items];
      newArray.push({ ...item, checked: true });
      setItems(newArray);
    }
  };

  return (
    <>
      <div className="ScreenTow-container">
        <Header title="Products" />

        {data.map((category) => {
          return (
            <div className="category-row" key={category.name}>
              <h3>{category.name}</h3>
              <div className="products-box">
                {category?.products?.map((product) => {
                  return (
                    <div className="product" key={product.name}>
                      <h6 className="product-name">
                        {" "}
                        <input
                          id={product.name}
                          type="checkbox"
                          // checked={product?.checked}
                          onChange={() => addToBasket(product)}
                        />{" "}
                        <label htmlFor={product.name}>{product.name}</label>{" "}
                      </h6>
                      <p className="product-description">
                        {product.description}
                      </p>
                      <p className="product-price">{`${product?.price[0].amount} $ / ${product?.price[0].billingFrequency} `}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        <Button
          clicked={() => {
            setSelectedProduct(items);
            setScreenNum("ScreenThree");
          }}
          name="Basket"
        ></Button>
      </div>
    </>
  );
}

export default connect(null, mapDispatchToProps)(ScreenTow);
