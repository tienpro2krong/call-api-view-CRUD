import React from "react";
import { useEffect, useState } from "react";
import { productService } from "../../services/ProductService";
import { request } from "../../middleware/request";
import { initial } from "../../interface/product.interface";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const [createData, setCreateData] = useState(initial);
  const navigate = useNavigate();

  const createForm = (event, name) => {
    setCreateData({
      ...createData,
      [name]: event.target.value,
    });
  };

  const createBtn = async () => {
    if (
      createData.product_code &&
      createData.product_name &&
      createData.quantity &&
      createData.supplier
    ) {
      await productService.addProduct(createData);
      getData();
      setCreateData(initial);
    }
  };

  const handleDeleteProduct = async (id) => {
    await productService.deleteProduct(id);
    getData();
  };

  const handelUpdateProduct = async (id) => {
    navigate(`/Detail/${id}`, { state: { id: id } });
  };

  const getData = async () => {
    let product = request(await productService.getAllProduct());
    setData(product);
  };
  // product_code,
  // product_name,
  // supplier,
  // quantity,

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <div className="container-input">
          <div>
            <label style={{ display: "block" }}>Product code</label>
            <input
              value={createData.product_code}
              onChange={(e) => {
                createForm(e, "product_code");
              }}
            />
          </div>

          <div>
            <label style={{ display: "block" }}>Product Name</label>
            <input
              value={createData.product_name}
              onChange={(e) => {
                createForm(e, "product_name");
              }}
            />
          </div>

          <div>
            <label style={{ display: "block" }}>Supplier</label>
            <input
              value={createData.supplier}
              onChange={(e) => {
                createForm(e, "supplier");
              }}
            />
          </div>

          <div className="quantity-input">
            <label style={{ display: "block" }}>Quantity</label>
            <input
              value={createData.quantity}
              onChange={(e) => {
                createForm(e, "quantity");
              }}
            />
          </div>

          <button onClick={createBtn}>Add</button>
        </div>
      </div>

      <div className="container-table">
        <table>
          <thead>
            <tr>
              <th>Product code</th>
              <th>Name</th>
              <th>Supplier</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.product_code}</td>
                    <td>{product.product_name}</td>
                    <td>{product.supplier}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <button
                        style={{ color: "blue" }}
                        onClick={() => handelUpdateProduct(product.id)}
                      >
                        Update
                      </button>
                      <button
                        style={{ color: "red", marginLeft: "10px" }}
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
