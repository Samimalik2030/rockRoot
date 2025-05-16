import { Container, Stack, Box, Card, Grid, Group, Badge, rem, Button,Title,Text,Image } from "@mantine/core";
import { motion } from "framer-motion";
import IconStar from "../assets/icons/IconStar";
import handleAddToCart from "../constants/handleAddToCart";
import { IUser, Role } from "../interfaces/IUser";
import { MotionCard } from "./Collections";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function Wishlist(){
      const user: IUser = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user") as string)
        : null;
      const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
      const [loading, setLoading] = useState(false);
      const navigate = useNavigate();
      const [favourites, setFavourites] = useState<any[]>([]);
      const fetchProducts = async () => {
        try {
          const { data } = await api.get(`/wishlists/${user._id}`);
          setFavourites(data || []);
        } catch (error) {
          console.error("Error fetching products", error);
        } finally {
        }
      };
    
      useEffect(() => {
        fetchProducts();
      }, []);
      console.log(favourites, "favourited");
    return(
        <>
          <Container fluid>
                <Stack>
                  <Box>
                    <Title order={2}>Wishlist</Title>
                    <Text>Items You have saved for later</Text>
                  </Box>
                  <Card withBorder shadow="xl">
                    {favourites.length === 0 ? (
                      <Text fz={20} ta="center" c="dimmed" mt={20}>
                        No products found in wishlist
                      </Text>
                    ) : (
                      <Grid>
                        {favourites.map((wishlist, index) => (
                          <Grid.Col span={{
                            base:12,
                            xs:12,
                            sm:12,
                            md:6,
                            lg:4,
                            xl:4
                          }} key={wishlist?.product?._id}>
                            <MotionCard
                              key={index}
                              withBorder
                              radius="lg"
                              shadow="sm"
                              p="lg"
                              className="relative"
                              initial={{ scale: 1 }}
                              animate={{ scale: hoveredIndex === index ? 1.02 : 1 }}
                              onHoverStart={() => setHoveredIndex(index)}
                              onHoverEnd={() => setHoveredIndex(null)}
                            >
                              {/* Top - Bestseller badge and heart */}
                              <Group justify="space-between" mb="xs">
                                <Badge color="orange" variant="filled" radius="sm">
                                  BESTSELLER
                                </Badge>
                              </Group>
        
                              {/* Product Image */}
                              <div
                                style={{
                                  height: rem(250),
                                  borderRadius: rem(12),
                                  backgroundColor: "#f1f5f9",
                                  marginBottom: rem(16),
                                  position: "relative",
                                  overflow: "hidden", // Important to clip the button inside the div
                                }}
                              >
                                <Image
                                  src={wishlist?.product?.image.url}
                                  alt="Image"
                                  fit="cover"
                                  radius="md"
                                  height={250}
                                  fallbackSrc="https://via.placeholder.com/260x150?text=Marble"
                                />
        
                                {/* Add to Cart Button on Hover */}
                                <motion.div
                                  initial={{ opacity: 0, y: 50 }}
                                  animate={
                                    hoveredIndex === index
                                      ? { opacity: 1, y: 0 }
                                      : { opacity: 0, y: 50 }
                                  }
                                  transition={{ duration: 0.3 }}
                                  style={{
                                    position: "absolute",
                                    top: "80%",
                                    left: "10%",
                                    transform: "translate(-50%, -50%)",
                                    width: "80%",
                                  }}
                                >
                                  <Button
                                    color="orange"
                                    radius="md"
                                    fullWidth
                                    onClick={() =>
                                      user && user.role === Role.CUSTOMER
                                        ? handleAddToCart(
                                            wishlist.product._id,
                                            user._id,
                                            setLoading
                                          )
                                        : navigate("/sign-in")
                                    }
                                    loading={loading}
                                  >
                                    Add to Cart
                                  </Button>
                                </motion.div>
                              </div>
        
                              {/* Country and Rating */}
                              <Group gap="xs" mb="xs">
                                <Badge color="gray" variant="light" radius="xl">
                                  Pakistan
                                </Badge>
                                <Group gap={4}>
                                  <IconStar size={16} color="#fbbf24" fill="#fbbf24" />
                                  <Text size="sm" fw={500}>
                                    4.3
                                  </Text>
                                </Group>
                              </Group>
        
                              {/* Title & Description */}
                              <Stack gap={2}>
                                <Text fw={600}>{wishlist?.product?.name}</Text>
                                <Text size="sm" c="gray">
                                  {wishlist?.product?.description}
                                </Text>
                              </Stack>
        
                              {/* Price & Details */}
                              <Group justify="space-between" mt="md" align="center">
                                <Text fw={600} size="lg">
                                  ${wishlist?.product?.price.toFixed(2)}{" "}
                                  <Text component="span" size="sm" color="dimmed">
                                    per sq ft
                                  </Text>
                                </Text>
                              </Group>
                            </MotionCard>
                          </Grid.Col>
                        ))}
                      </Grid>
                    )}
                  </Card>
                </Stack>
              </Container>
        </>
    )
}