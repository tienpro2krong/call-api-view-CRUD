import axios from "axios";
// product_code,
// product_name,
// supplier,
// quantity,
export class productService {
  static getAllProduct = () => {
    return axios.get("http://localhost:8082/api/product/product");
  };
  static addProduct = (data) => {
    return axios.post("http://localhost:8082/api/product/create", {
      product_code: data.product_code,
      product_name: data.product_name,
      supplier: data.supplier,
      quantity: data.quantity,
    });
  };

  static deleteProduct = (id) => {
    return axios.delete(`http://localhost:8082/api/product/delete/${id}`);
  };
}
