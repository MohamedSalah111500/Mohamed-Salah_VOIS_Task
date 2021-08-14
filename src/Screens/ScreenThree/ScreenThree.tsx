import React from "react";
import "./ScreenThree.css";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import { getProducts } from "../../redux/selectors";
import { Product } from "../../Types/Types";
import { GlobalProductsState } from "../../redux/types";

interface ScreenThreeProps {
  setScreenNum: (ScreenNum: string) => void;
  products: Product[];
}

interface ScreenProps {
  products: Product[];
}
function mapStateToProps(state: GlobalProductsState): ScreenProps {
  return {
    products: getProducts(state),
  };
}

// get total price for all items in basket and return it 
function getTotalPrice(products:Product[]):number {
  let total = 0;
  products.map((product) => {
    return total += +product.price[0].amount;
  });
  return total;
}



function ScreenThree({ products, setScreenNum }: ScreenThreeProps) {

  return (
    <div className="ScreenThree-container">
      <Header title="Basket" />
      <div className="products-box">
        <h4>OverView</h4>
        {products.map((product) => {
          return (
            <div className="product" key={product.name}>
              <h6 className="product-name">
                <p>{product.name}</p>{" "}
              </h6>
              <p className="product-price">{`${
                product.price[0].amount
              } $ / ${product.price[0].billingFrequency.toLocaleLowerCase()} `}</p>
            </div>
          );
        })}
        <h3 className="total-price">Total Price :{getTotalPrice(products).toString().slice(0,5)}$ </h3>
        <br />
        <Button clicked={() => setScreenNum("ScreenTow")} name="Back"></Button>
        <Button clicked={() => setScreenNum("ScreenOne")} name="Order"></Button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(ScreenThree);
