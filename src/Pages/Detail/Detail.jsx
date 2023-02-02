import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { initial } from "../../interface/product.interface";
import { request } from "../../middleware/request";
import { detailService } from "../../services/DetailService";
import { useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();

  const location = useLocation();
  const [createData, setCreateData] = useState(initial);
  const createForm = (event, name) => {
    setCreateData({
      ...createData,
      [name]: event.target.value,
    });
  };
  const getData = async () => {
    let data = request(await detailService.getDetailProduct(location.state.id));
    setCreateData(data);
  };

  const handleUpdate = async () => {
    request(await detailService.UpdateProduct(location.state.id, createData));
    navigate("/");
  };

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

          <button onClick={() => handleUpdate()}>Update</button>
        </div>
      </div>
    </>
  );
}

export default Detail;
