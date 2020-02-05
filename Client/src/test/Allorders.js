import React, { useEffect } from "react";
import {
  get_all_orders,
  delete_Order,
  get_All_Orders
} from "../Actions_art_wear/Cart_And_Order_Action";
import { connect } from "react-redux";

const Allorders = ({
  get_All_Orders,
  delete_Order,
  Articles = [],
  Userinformation,
  user,
  orders = []
}) => {
  useEffect(() => {
    get_All_Orders();
  }, []);
  // console.log('Userinformation', orders.map(el => el.Userinformation))

  // const order = [...orders];
  // const t = [...order][0];
  // const r = (t || {}).Articles;
  // const x = { ...r }[0];
  // const z = (x || {}).id;
  // console.log("orderssqdsqdqsdsqsssss", z);

  // const Articles = { ...orders.Articles };
  // const exp = ({...orders} || {}).Articales;
  // console.log({...exp, Articles:orders.Articales})
  return (
    <div className="container-fluide bg-success">
      <ul className="p-3">
        {orders.map((el, i) => (
          <li key={i} className="p-3 row ">
            {console.log("Articles", el)}
            <span className="px-1 col-3"> {el.name} </span>
            <span className="px-1 col-3"> {el.Articles.qte}fds</span>
            <span className="px-1 col-3">{el.Userinformation.status} fdsfds</span>
            <span className="px-1 col-3"> </span>
            {/* {console.log("component . Articles", orders[0]["Articles"][0].name)} */}
            {el.Articles.map(el => (
              <ul>
                <li > {el.name} </li>
                <li > {el.price}</li>
                <li >{el.qte} </li>
                
              </ul>
              
            ))}
            <span className="px-1 col d-flex">
              <button
                onClick={() => delete_Order("el._id")}
                className="btn btn-danger m-auto "
              >
                delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
const mapstatetoprops = state => {
  return {
    orders: state.order_Reducer
  };
};
export default connect(mapstatetoprops, { get_All_Orders, delete_Order })(
  Allorders
);
