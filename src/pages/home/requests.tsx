import api from "../../services/api";

export const getProducts = async () => {
  try {
    const products = await api.get("/product");
    return products.data;
  } catch (e) {
    console.log(e);
  }
};

export const removeProduct = async (id: number) => {
  try {
    await api.delete(`/product/${id}`);
    return;
  } catch (e) {
    console.log(e);
  }
};
