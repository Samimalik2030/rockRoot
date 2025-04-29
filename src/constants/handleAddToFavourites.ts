import api from "../api";

export default async function handleAddToFavorites(
  product: string,
  user: string,
  setLoading: (loading: boolean) => void
) {
  try {
    setLoading(true);
    // :userId/:productId
    const response = await api.post(`/wishlists/${product}/${user}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    setLoading(false);
  }
}
