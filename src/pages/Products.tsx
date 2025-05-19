import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  CheckIcon,
  Container,
  Divider,
  Flex,
  Grid,
  Group,
  rem,
  SimpleGrid,
  Slider,
  Stack,
  Text,
  ThemeIcon,
  Title,
  Image,
  Burger,
  Drawer,
  BackgroundImage,
} from "@mantine/core";
import { ProductCard } from "../components/ProductCard";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useState, useCallback, useEffect } from "react";
import api from "../api";
import { Product } from "../interfaces/Product";
import { motion } from "framer-motion";
import IconHeart from "../assets/icons/IconHeart";
import IconStar from "../assets/icons/IconStar";
import handleAddToCart from "../constants/handleAddToCart";
import handleAddToFavorites from "../constants/handleAddToFavourites";
import { IUser, Role } from "../interfaces/IUser";
import { MotionCard } from "./Collections";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import { isSchema } from "yup";

export default function Products() {
  const user: IUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFinish, setSelectedFinish] = useState<string | null>(null);

  const [priceRange, setPriceRange] = useState<number | undefined>(undefined);
  const [products, setProducts] = useState<Product[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState<boolean>(false);
  const [drawerOpened, setDrawerOpened] = useState(false);

  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 56.25em)");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleFinishChange = (finish: string) => {
    setSelectedFinish(finish);
  };

  const handlePriceChange = (value: number) => {
    setPriceRange(value);
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, priceRange, selectedFinish]);

  const fetchProducts = useCallback(async () => {
    try {
      setFetching(true);

      const params = new URLSearchParams();

      if (priceRange) {
        params.append("price", priceRange.toString());
      }

      if (selectedCategory) {
        params.append("category", selectedCategory);
      }

      if (selectedFinish) {
        params.append("finish", selectedFinish);
      }

      const { data } = await api.get(`/products?${params.toString()}`);
      setProducts(data || []);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setFetching(false);
    }
  }, [selectedCategory, priceRange, selectedFinish]);

  return (
    <>
      <Navbar />
      <Card p={0} radius="md" style={{ overflow: "hidden" }}>
        <BackgroundImage
          h={300}
          src="https://images.unsplash.com/photo-1689263131930-c938ae8bf1ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hcmJsZSUyMGZ1cm5zaWhlZCUyMHJvb21zfGVufDB8MHwwfHx8MA%3D%3D"
          style={{ position: "relative" }}
        >
          {/* Dark overlay */}
          <Box
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1,
            }}
          />

          {/* Centered Content */}
          <Flex
            justify="center"
            align="center"
            h="100%"
            style={{ position: "relative", zIndex: 2 }}
          >
            <Card w="50%" bg="transparent" shadow="none">
              <Stack mt={30} gap={25}>
                <Title fw={700} fz={48} ta={"center"} c={"white"}>
                  About Rajput Marble's & Granite
                </Title>
                <Text color="dimmed" size="lg" ta={"center"}>
                  Bringing luxury and elegance to homes across Punjab since 2005
                </Text>
              </Stack>
            </Card>
          </Flex>
        </BackgroundImage>
      </Card>

      <Container fluid mt={12}>
        {isMobile && (
          <Burger
            opened={drawerOpened}
            onClick={() => setDrawerOpened((o) => !o)}
          />
        )}

        <Flex gap={"xl"} mt={isMobile ? 12 : 0}>
          {!isMobile && (
            <Card
              withBorder
              radius="md"
              shadow="sm"
              p="lg"
              w={250}
              h={550}
              style={{
                border: "2px solid rgb(223, 219, 219)",
              }}
            >
              <Stack gap="xs">
                {/* Categories */}
                <Text fw={600} fz={22}>
                  Categories
                </Text>
                <Checkbox
                  checked={selectedCategory === "Floor"}
                  onChange={() => handleCategoryChange("Floor")}
                  label="Floor"
                  fw={600}
                  color="black"
                />
                <Checkbox
                  checked={selectedCategory === "Stairs"}
                  onChange={() => handleCategoryChange("Stairs")}
                  label="Stair"
                  fw={600}
                  color="black"
                />
                <Checkbox
                  checked={selectedCategory === "Kitchen"}
                  onChange={() => handleCategoryChange("Kitchen")}
                  label="Kitchen"
                  fw={600}
                  color="black"
                />

                <Divider my="sm" />

                {/* Price Range */}
                <Flex justify={"space-between"} align={"center"}>
                  <Text fz={18} fw={600}>
                    Price Range
                  </Text>
                </Flex>
                <Flex justify={"space-between"} align={"center"}>
                  <Text fz={16} fw={400}>
                    Rs.{priceRange}
                  </Text>
                  <Text fz={16} fw={400}>
                    Rs.5000
                  </Text>
                </Flex>
                <Slider
                  value={priceRange}
                  onChange={handlePriceChange}
                  min={0}
                  max={5000}
                  step={10}
                  color="#ff9900"
                />

                <Divider my="sm" />

                {/* Finish */}
                <Flex justify={"space-between"} align={"center"}>
                  <Text fz={18} fw={600}>
                    Finish
                  </Text>
                </Flex>
                <Checkbox
                  checked={selectedFinish === "polished"}
                  onChange={() => handleFinishChange("polished")}
                  label="Polished"
                  fw={600}
                  color="black"
                />
                <Checkbox
                  checked={selectedFinish === "honed"}
                  onChange={() => handleFinishChange("honed")}
                  label="Honed"
                  fw={600}
                  color="black"
                />
                <Checkbox
                  checked={selectedFinish === "brushed"}
                  onChange={() => handleFinishChange("brushed")}
                  label="Brushed"
                  fw={600}
                  color="black"
                />
                <Checkbox
                  checked={selectedFinish === "leathered"}
                  onChange={() => handleFinishChange("leathered")}
                  label="Leathered"
                  fw={600}
                  color="black"
                />
                <Checkbox
                  checked={selectedFinish === "flamed"}
                  onChange={() => handleFinishChange("flamed")}
                  label="Flamed"
                  fw={600}
                  color="black"
                />

                <Divider my="sm" />
              </Stack>
            </Card>
          )}
          <Box
            style={{
              flex: 1,
            }}
          >
            {products.length === 0 ? (
              <Text fz={20} ta="center" c="dimmed" mt={20}>
                No products found
              </Text>
            ) : (
              <Grid>
                {products.map((product, index) => (
                  <Grid.Col
                    span={{
                      base: 12,
                      xs: 12,
                      sm: 6,
                      md: 4,
                      lg: 4,
                      xl: 4,
                    }}
                    key={product._id}
                  >
                    <div
                      onClick={() =>
                        navigate(`/product-details`, {
                          state: {
                            product,
                          },
                        })
                      }
                      style={{ cursor: "pointer" }}
                    >
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
                          <Group>
                            <ActionIcon
                              variant="light"
                              radius="xl"
                              color="gray"
                              onClick={() =>
                                handleAddToFavorites(
                                  product._id,
                                  user._id,
                                  setFetching
                                )
                              }
                            >
                              <IconHeart size={14} />
                            </ActionIcon>
                          </Group>
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
                            src={product.image.url}
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
                                      product._id,
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
                            <IconStar
                              size={16}
                              color="#fbbf24"
                              fill="#fbbf24"
                            />
                            <Text size="sm" fw={500}>
                              4.3
                            </Text>
                          </Group>
                        </Group>

                        {/* Title & Description */}
                        <Stack gap={2}>
                          <Text fw={600}>{product.name}</Text>
                          <Text size="sm" c="gray">
                            {product.description}
                          </Text>
                        </Stack>

                        {/* Price & Details */}
                        <Group justify="space-between" mt="md" align="center">
                          <Text fw={600} size="lg">
                            Rs.{product.price.toFixed(2)}{" "}
                            <Text component="span" size="sm" color="dimmed">
                              per sq ft
                            </Text>
                          </Text>
                        </Group>
                      </MotionCard>
                    </div>
                  </Grid.Col>
                ))}
              </Grid>
            )}
          </Box>
        </Flex>
      </Container>
      <Box mt={12}>
        <Footer />
      </Box>

      <Drawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        title="Filters"
        padding="md"
        size="sm"
        position="left"
      >
        {/* Your Filter Card content goes here */}
        <Card
          withBorder
          radius="md"
          shadow="sm"
          p="lg"
          style={{ border: "2px solid rgb(223, 219, 219)" }}
        >
          <Stack gap="xs">
            <Text fw={600} fz={22}>
              Categories
            </Text>
            <Checkbox
              checked={selectedCategory === "Floor"}
              onChange={() => handleCategoryChange("Floor")}
              label="Floor"
              fw={600}
              color="black"
            />
            <Checkbox
              checked={selectedCategory === "Stair"}
              onChange={() => handleCategoryChange("Stair")}
              label="Stair"
              fw={600}
              color="black"
            />
            <Checkbox
              checked={selectedCategory === "Kitchen"}
              onChange={() => handleCategoryChange("Kitchen")}
              label="Kitchen"
              fw={600}
              color="black"
            />

            <Divider my="sm" />

            <Text fz={18} fw={600}>
              Price Range
            </Text>
            <Flex justify={"space-between"} align={"center"}>
              <Text fz={16}>Rs.{priceRange}</Text>
              <Text fz={16}>Rs.5000</Text>
            </Flex>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              min={0}
              max={5000}
              step={10}
              color="#ff9900"
            />

            <Divider my="sm" />

            <Text fz={18} fw={600}>
              Finish
            </Text>
            {["polished", "honed", "brushed", "leathered", "flamed"].map(
              (finish) => (
                <Checkbox
                  key={finish}
                  checked={selectedFinish === finish}
                  onChange={() => handleFinishChange(finish)}
                  label={finish.charAt(0).toUpperCase() + finish.slice(1)}
                  fw={600}
                  color="black"
                />
              )
            )}
          </Stack>
        </Card>
      </Drawer>
    </>
  );
}
