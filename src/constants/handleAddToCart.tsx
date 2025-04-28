import api from "../api";

export default async function handleAddToCart(
  product: string,
  user: string,
  setLoading: (loading: boolean) => void
) {
  try {
    setLoading(true);
    const response = await api.post("/carts", { product, user });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; 
  } finally {
    setLoading(false);
  }
}
