import React from 'react';

function Navbar1() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar1;


// import React, { useState } from 'react'
// // import './App.css';
// import { BsSearch } from 'react-icons/bs';

// function Navbar1() {
//     const productList = ["blue pant"
//         , "black pant"
//         , "blue shirt"
//         , "black shoes"
//         , "brown shoes"
//         , "white pant"
//         , "white shoes"
//         , "red shirt"
//         , "gray pant"
//         , "white shirt"
//         , "golden shoes"
//         , "dark pant"
//         , "pink shirt"
//         , "yellow pant"];
//     const [products, setProducts] = useState(productList);
//     const [searchVal, setSearchVal] = useState("");
//     function handleSearchClick() {
//         if (searchVal === "") { setProducts(productList); return; }
//         const filterBySearch = productList.filter((item) => {
//             if (item.toLowerCase()
//                 .includes(searchVal.toLowerCase())) { return item; }
//         })
//         setProducts(filterBySearch);
//     }
//     const mystyle = {
//         marginLeft: "600px",
//         marginTop: "20px",
//         fontWeight: "700"
//     };

//     return (
//         <div>
//             <div style={mystyle}>
//                 <input onChange={e => setSearchVal(e.target.value)}>
//                 </input>
//                 <BsSearch onClick={handleSearchClick} />
//             </div>
//             <div>

//                 {products.map((product) => {
//                     return (
//                         <div style={mystyle}>{product}</div>
//                     )
//                 })
//                 }

//             </div>
//         </div>
//     );
// }

// export default Navbar1;