import React from "react";
import "./Checkout.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="check_out">
      <div className="Checkout__left">
        <img
          className="checkout_ad"
          src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket Is empty!</h2>
            <p>
              You have no items in your basket. To Buy One or "Add To BAsket"
              Next to the item!
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your Shopping Basket!</h2>
            {/* List out all of the Checkout Product */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="Checkout__right">
          {/* <h1>Subtotal</h1> */}
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;

// import React from "react";
// import "./Checkout.css";
// import { useStateValue } from "../StateProvider";
// import CheckoutProduct from "./CheckoutProduct";
// import Subtotal from "./Subtotal";

// function Checkout() {
//   const [{ basket }] = useStateValue();
//   return (
//     <div>
//       <div>
//         <img
//           className="checkout_ad"
//           src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
//           alt=""
//         />

//         {basket.length === 0 ? (
//           <div>
//             <h2>Your Shopping Basket Is empty!</h2>
//             <p>
//               You have no items in your basket. To Buy One or "Add To BAsket"
//               Next to the item!
//             </p>
//           </div>
//         ) : (
//           <div>
//             <h2>Your Shopping Basket</h2>
//             {basket.map((item) => (
//               <CheckoutProduct
//                 id={item.id}
//                 title={item.title}
//                 price={item.price}
//                 image={item.image}
//                 rating={item.rating}
//                 message={item.message}
//                 Rupees={item.Rupees}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//       {basket.length > 0 && (
//         <div>
//           <Subtotal />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Checkout;
