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

export default function Products() {
  const user: IUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null;
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedOrigin, setSelectedOrigin] = useState<string[]>([]);
  const [selectedFinish, setSelectedFinish] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [fetching, setFetching] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleOriginChange = (origin: string) => {
    setSelectedOrigin((prev) =>
      prev.includes(origin)
        ? prev.filter((item) => item !== origin)
        : [...prev, origin]
    );
  };

  const handleFinishChange = (finish: string) => {
    setSelectedFinish((prev) =>
      prev.includes(finish)
        ? prev.filter((item) => item !== finish)
        : [...prev, finish]
    );
  };

  const handlePriceChange = (value: number) => {
    setPriceRange(value);
  };

  useEffect(() => {
    fetchProducts();
    console.log({
      selectedCategories,
      priceRange,
      selectedOrigin,
      selectedFinish,
    });
  }, [selectedCategories, priceRange, selectedOrigin, selectedFinish]);

  const fetchProducts = useCallback(async () => {
    try {
      setFetching(true);

      const params = new URLSearchParams();
      if (selectedCategories && selectedCategories.length > 0) {
        params.append("category", selectedCategories.join(","));
      }

      if (priceRange) {
        params.append("price", priceRange.toString());
      }

      if (selectedFinish && selectedFinish.length > 0) {
        params.append("finish", selectedFinish.join(","));
      }

      if (selectedOrigin && selectedOrigin.length > 0) {
        params.append("origin", selectedOrigin.join(","));
      }

      const { data } = await api.get(`/products?${params.toString()}`);
      setProducts(data || []);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setFetching(false);
    }
  }, [selectedCategories, priceRange, selectedFinish, selectedOrigin]);

  return (
    <>
      <Navbar />
      <Card shadow="sm" h={300} bg={"#1f2937"}>
        <Stack mt={30} gap={25}>
          <Title fw={700} fz={48} ta={"center"} c={"white"}>
            About Rajput Marble's & Granite
          </Title>
          <Text color="dimmed" size="lg" ta={"center"}>
            Bringing luxury and elegance to homes across Punjab since 2005
          </Text>
        </Stack>
      </Card>
      <Container fluid>
        <Grid w={"100%"} p={0} gutter={"xl"} mt={12}>
          <Grid.Col span={2}>
            <Card
              withBorder
              radius="md"
              shadow="sm"
              p="lg"
              w={250}
              style={{ border: "2px solid rgb(223, 219, 219)" }}
            >
              <Stack gap="xs">
                {/* Categories */}
                <Text fw={600} fz={22}>
                  Categories
                </Text>
                <Checkbox
                  checked={selectedCategories.includes("Italian Marble")}
                  onChange={() => handleCategoryChange("Italian Marble")}
                  label="Italian Marble"
                  fw={600}
                  color="black"
                />
                <Checkbox
                  checked={selectedCategories.includes("Pakistani Marble")}
                  onChange={() => handleCategoryChange("Pakistani Marble")}
                  label="Pakistani Marble"
                  fw={600}
                  color="black"
                />
                <Checkbox
                  checked={selectedCategories.includes("Granite")}
                  onChange={() => handleCategoryChange("Granite")}
                  label="Granite"
                  fw={600}
                  color="black"
                />
                <Checkbox
                  checked={selectedCategories.includes("Onyx")}
                  onChange={() => handleCategoryChange("Onyx")}
                  label="Onyx"
                  fw={600}
                  color="black"
                />
                <Checkbox
                  checked={selectedCategories.includes("Quartz")}
                  onChange={() => handleCategoryChange("Quartz")}
                  label="Quartz"
                  fw={600}
                  color="black"
                />
                <Checkbox
                  checked={selectedCategories.includes("Travertine")}
                  onChange={() => handleCategoryChange("Travertine")}
                  label="Travertine"
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
                    $0
                  </Text>
                  <Text fz={16} fw={400}>
                    $500
                  </Text>
                </Flex>
                <Slider
                  value={priceRange}
                  onChange={handlePriceChange}
                  min={0}
                  max={500}
                  step={10}
                  color="#ff9900"
                />

                <Divider my="sm" />

                {/* Origin */}
                <Flex justify={"space-between"} align={"center"}>
                  <Text fz={18} fw={600}>
                    Origin
                  </Text>
                </Flex>
                <Checkbox
                  checked={selectedOrigin.includes("Italy")}
                  onChange={() => handleOriginChange("Italy")}
                  label="Italy"
                  fw={600}
                  color="black"
                />
                <Checkbox
                  checked={selectedOrigin.includes("Pakistan")}
                  onChange={() => handleOriginChange("Pakistan")}
                  label="Pakistan"
                  fw={600}
                  color="black"
                />
                <Checkbox
                  checked={selectedOrigin.includes("India")}
                  onChange={() => handleOriginChange("India")}
                  label="India"
                  fw={600}
                  color="black"
                />
                <Checkbox
                  checked={selectedOrigin.includes("Spain")}
                  onChange={() => handleOriginChange("Spain")}
                  label="Spain"
                  fw={600}
                  color="black"
                />
                <Checkbox
                  checked={selectedOrigin.includes("Turkey")}
                  onChange={() => handleOriginChange("Turkey")}
                  label="Turkey"
                  fw={600}
                  color="black"
                />
                <Checkbox
                  checked={selectedOrigin.includes("Brazil")}
                  onChange={() => handleOriginChange("Brazil")}
                  label="Brazil"
                  fw={600}
                  color="black"
                />
                <Checkbox
                  checked={selectedOrigin.includes("Norway")}
                  onChange={() => handleOriginChange("Norway")}
                  label="Norway"
                  fw={600}
                  color="black"
                />

                <Divider my="sm" />

                {/* Finish */}
                <Flex justify={"space-between"} align={"center"}>
                  <Text fz={18} fw={600}>
                    Finish
                  </Text>
                </Flex>
                <Checkbox
                  checked={selectedFinish.includes("Polished")}
                  onChange={() => handleFinishChange("Polished")}
                  label="Polished"
                  fw={600}
                  color="black"
                />
                <Checkbox
                  checked={selectedFinish.includes("Honed")}
                  onChange={() => handleFinishChange("Honed")}
                  label="Honed"
                  fw={600}
                  color="black"
                />
                <Checkbox
                  checked={selectedFinish.includes("Brushed")}
                  onChange={() => handleFinishChange("Brushed")}
                  label="Brushed"
                  fw={600}
                  color="black"
                />
                <Checkbox
                  checked={selectedFinish.includes("Leathered")}
                  onChange={() => handleFinishChange("Leathered")}
                  label="Leathered"
                  fw={600}
                  color="black"
                />
                <Checkbox
                  checked={selectedFinish.includes("Flamed")}
                  onChange={() => handleFinishChange("Flamed")}
                  label="Flamed"
                  fw={600}
                  color="black"
                />

                <Divider my="sm" />
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col span={10}>
            {products.length === 0 ? (
              <Text fz={20} ta="center" c="dimmed" mt={20}>
                No products found
              </Text>
            ) : (
              <Grid>
                {products.map((product,index) => (
                  <Grid.Col span={4} key={product._id}>
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
                          {product.origin || "Unknown"}
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
                        <Text fw={600}>{product.name}</Text>
                        <Text size="sm" c="gray">
                          {product.description}
                        </Text>
                      </Stack>

                      {/* Price & Details */}
                      <Group justify="space-between" mt="md" align="center">
                        <Text fw={600} size="lg">
                          ${product.price.toFixed(2)}{" "}
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
          </Grid.Col>
        </Grid>
      </Container>
      <Box mt={12}>
        <Footer />
      </Box>
    </>
  );
}
