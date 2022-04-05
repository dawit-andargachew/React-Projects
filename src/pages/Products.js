import React from "react";

function Products() {
  return (
    <div className="product">
      <h1>Here is the product page</h1>
      The list of products are the following
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>three</li>
        <ul>Four</ul>
        <ul>Five</ul>
      </ul>

      <div className="p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, in nemo mollitia quasi, quam necessitatibus tenetur tempora fugit nihil quis eum fuga vero dolorem. Ipsam facilis cum asperiores ipsa quam.</div>
      <div className="p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, in nemo mollitia quasi, quam necessitatibus tenetur tempora fugit nihil quis eum fuga vero dolorem. Ipsam facilis cum asperiores ipsa quam.</div>
      <div className="p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, in nemo mollitia quasi, quam necessitatibus tenetur tempora fugit nihil quis eum fuga vero dolorem. Ipsam facilis cum asperiores ipsa quam.</div>
      <div className="p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, in nemo mollitia quasi, quam necessitatibus tenetur tempora fugit nihil quis eum fuga vero dolorem. Ipsam facilis cum asperiores ipsa quam.</div>
    </div>
  );
}

export default Products;
