import React, { useState } from "react";

const ProductList =() => {

    const Products =  [
        { category: "Fruits", price: "$1", stocked: "yes", name: "Apple" },
         { category: "Fruits", price: "$1", stocked: "yes", name: "Dragonfruit" },
         { category: "Fruits", price: "$2", stocked: "no", name: "Passionfruit" },
         { category: "Vegetables", price: "$2", stocked: "yes", name: "Spinach" },
         { category: "Vegetables", price: "$4", stocked: "no", name: "Pumpkin" },
         { category: "Vegetables", price: "$1", stocked: "yes", name: "Peas" }
    ];

    const [showData, setShowData ] = useState (false)

    const displayData = () => {
        setShowData(true)
    }

    return (
<div>
    <h2>Product List</h2>

    <button onClick={displayData}>button</button>
    {showData ?
   <table>
    <tr>
        <th>category</th>
        <th>price</th> 
        <th>stocked</th>
        <th>name</th>
    </tr>
     {Products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stocked}</td>
            </tr>
          ))}
   </table>
   : null

   }
   </div>
    );
     };

      
    export default ProductList;

