import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Css/App.css";
import { LogOut } from "../Actions_art_wear/signAction";
import { connect } from "react-redux";
import { searchAll } from "../Actions_art_wear/searchAction";

const Navbar = ({ LogOut, commande, searchAll }) => {
  useEffect(() => {
    searchAll();
  }, []);
  // rfce
  return (
  
    <nav className="navbar bg-dark">
      <h1>
        <input type="text" placeholder="search" className=" mr-3 " />
        <span className=" ml-3 ">
          {commande.map(el => el.qte).reduce((a, b) => a + b, 0)} articles au
          panier
        </span>

        <select type="Select" placeholder="select" className=" form-control">
          <option value="All">All</option>
          <option value="cole V">cole V</option>
          <option value="Cole rond">Cole rond</option>
          <option value="Polo">Polo</option>
        </select>
      </h1>
      <ul>
        <li>
          <Link to="/modifyuser">
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">User Modified </span>
          </Link>
        </li>
        <li>
          <Link to="/allorders">
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">all orders</span>
          </Link>
        </li>
        <li>
          <Link to="/panier">
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm"> Panier</span>
          </Link>
        </li>
        <li>
          <Link to="/admin">
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">All Users</span>
          </Link>
        </li>
        <li>
          <Link to="userprofile">Profile one user</Link>
        </li>
        <li>
          <Link to="catalogue">Catalogue</Link>
        </li>
        <li>
          |
          <Link to="/signup" title="register">
            <i className="fas fa-user"></i>
            <span className="hide-sm">Register</span>
          </Link>
        </li>
        <li>
          <Link to="/signin">
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">Login</span>
          </Link>
        </li>

        <li>
          <Link to="/" title="Deconnect" onClick={LogOut}>
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">Deconnect</span>
          </Link>
        </li>
      </ul>
    </nav>
  );

  
    

 
};
const mapstatetoprops = state => {
  return {
    commande: state.panier_Reducer // state take the name of the file of reducer
  };
};
export default connect(mapstatetoprops, { LogOut, searchAll })(Navbar);





  
// <header className="header">
// <div className="header_overlay"></div>
// <div className="header_content d-flex flex-row align-items-center justify-content-start">
//   <div className="logo">
//     <a href="#!">
//       <div className="d-flex flex-row align-items-center justify-content-start">
//         <div>
//           <img src="/images/logo_1.png" alt="" />
//         </div>
//         <div>Little Cdloset</div>
//       </div>
//     </a>
//   </div>
//   <div className="hamburger">
//     <i className="fa fa-bars" aria-hidden="true"></i>
//   </div>
//   <nav className="main_nav">
//     <ul className="d-flex flex-row align-items-start justify-content-start">
//       <li className="active">
//         <Link to="/productcard">card</Link>
//       </li>
//       <li>
//         <Link to="/catalogue">Catalogue</Link>
//       </li>
//       <li>
//         <Link to="details">details</Link>
//       </li>
//       <li>
//         <a href="#!">Home Deco</a>
//       </li>
//       <li>
//         <a href="#!">Contact</a>
//       </li>
//     </ul>
//   </nav>
//   <div className="header_right d-flex flex-row align-items-center justify-content-start ml-auto">
//     <div className="header_search">
//       <form action="#!" id="header_search_form">
//         <input
//           type="text"
//           className="search_input"
//           placeholder="Search Item"
//           required="required"
//         />
//         <button className="header_search_button">
//           <img src="images/search.png" alt="" />
//         </button>
//       </form>
//     </div>

//     <div className="user">
//       <a href="#!">
//         <div>
//           <img
//             src="images/user.svg"
//             alt="https://www.flaticon.com/authors/freepik"
//           />
//           <div>1</div>
//         </div>
//       </a>
//     </div>

//     <div className="cart">
//       <a href="cart.html">
//         <div>
//           <Link to="panier">
//             <img
//               className="svg"
//               src="images/cart.svg"
//               alt="https://www.flaticon.com/authors/freepik"
//             />
//           </Link>
//         </div>
//       </a>
//     </div>

//     <div className="header_phone d-flex flex-row align-items-center justify-content-start">
//       <div>
//         <div>
//           <img
//             src="images/phone.svg"
//             alt="https://www.flaticon.com/authors/freepik"
//           />
//         </div>
//       </div>
//       <div>
//         {commande.map(el => el.qte).reduce((a, b) => a + b, 0)} articles
//         au panier
//       </div>
//     </div>
//   </div>
// </div>
// </header>