import api from "../api";

export default async function handleAddToFavorites(
  productId: string,
  userId: string,
  setLoading: (loading: boolean) => void
): Promise<any> {
  try {
    setLoading(true);
    const response = await api.post("/wishlists", {
      productId,
      userId,
    });
    return response.data;
  } catch (error: any) {
    console.error("Error adding to wishlist:", error);

    throw error;
  } finally {
    setLoading(false);
  }
}
