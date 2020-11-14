import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, title, price, image, rating, Rupees }) {
  const [{}, dispatch] = useStateValue();
  const removebutton = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
      title: title,
      Rupees: Rupees,
      price: price,
      image: image,
      rating: rating,
      
    });
  };
  return (
    <div className="product__lol">
      <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <img
          height="200px"
          src={image}
          className="db w-100 br2 br--top"
          alt="Photo of a kitten looking menacing."
        />
        <div className="pa2 ph3-ns pb3-ns">
          <div className="dt w-100 mt1">
            <div className="dtc">
              <h1 className="f5 f4-ns mv0">
                {id} {title}
              </h1>
            </div>
            <div className="dtc tr">
              <h2 className="f5 mv0">
                {Rupees} {price}
              </h2>
            </div>
          </div>

          <p className="f6 lh-copy measure mt2 mid-gray">
            The OLX marketplace is a platform for buying and selling services
            and goods such as electronics, fashion items, furniture,
            households..
          </p>

          <div className="rating__class">
            {Array(rating)
              .fill()
              .map((_, i) => {
                return (
                  <p key={i} className="fit_rating">
                    ✶
                  </p>
                );
              })}
          </div>
        </div>

        <button className="btn btn-danger btn--lol" onClick={removebutton}>
          Remove From Basket
        </button>
      </article>
    </div>
  );
}

export default CheckoutProduct;
