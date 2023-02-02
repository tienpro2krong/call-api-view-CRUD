import axios from "axios";
// product_code,
// product_name,
// supplier,
// quantity,
export class detailService {
  static getDetailProduct = (id) => {
    return axios.get(`http://localhost:8082/api/product/detail/${id}`);
  };

  static UpdateProduct = (id, data) => {
    return axios.put(`http://localhost:8082/api/product/update/${id}`, {
      product_code: data.product_code,
      product_name: data.product_name,
      supplier: data.supplier,
      quantity: data.quantity,
    });
  };
}
