import {
  Flex,
  Card,
  Title,
  Text,
  Stack,
  Button,
  SimpleGrid,
  Box,
  BackgroundImage,
  Center,
  Container,
  ActionIcon,
  Badge,
  Group,
  rem,
  Image,
  useMantineTheme,
  Divider,
} from "@mantine/core";
import Collections from "./pages/Collections";
import WhyChooseUs from "./components/WhyChooseUs";
import { RoomIdeasCard } from "./components/RoomIdeaCard";
import { Footer } from "./components/Footer";
import IconShield from "./assets/icons/IconShield";
import IconTruck from "./assets/icons/IconTruck";
import IconClock from "./assets/icons/IconClock";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import Navbar from "./components/Navbar";
import { useNavigate } from "react-router-dom";
import api from "./api";
import { useCallback, useEffect, useState } from "react";
import { Product, Project } from "./interfaces/Product";
import { motion } from "framer-motion";
import IconHeart from "./assets/icons/IconHeart";
import IconStar from "./assets/icons/IconStar";
import handleAddToCart from "./constants/handleAddToCart";
import { IUser, Role } from "./interfaces/IUser";
import handleAddToFavorites from "./constants/handleAddToFavourites";
import GeminiText from "./pages/Gemini";

const MotionCard = motion(Card);

function LandingPage() {
  const user: IUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null;
  const [loading, setLoading] = useState(false);
  const [loadingFavourite, setLoadingFavourite] = useState(false);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isMobile = useMediaQuery("(max-width: 56.25em)");
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProducts = useCallback(async () => {
    try {
      const { data } = await api.get(`/products?limit=4`);
      setProducts(data || []);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
    }
  }, []);
  const theme = useMantineTheme();
  const fetchProjects = useCallback(async () => {
    try {
      const { data } = await api.get(`/projects?limit=4`);
      setProjects(data || []);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
    }
  }, []);
  useEffect(() => {
    fetchProducts();
    fetchProjects();
  }, []);

  return (
    <>
      <Container
        fluid
        p={0}
        style={{
          overflow: "hidden",
        }}
      >
        <Navbar />
        <Stack>
          <Card h={"80vh"} p={0} radius="md" style={{ overflow: "hidden" }}>
            <BackgroundImage
              h={"100%"}
              src="https://ik.imagekit.io/yzrrrgg3d/room-with-large-marble-floor-large-window-that-says-company_1149116-13689.jpg?updatedAt=1747363952890"
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
                  <Stack>
                    <Text c="#f79707" ta="center" fz={18} fw={500}>
                      Local Luxury, Global Standards
                    </Text>
                    <Title ta="center" fz={48} fw={700} c="white">
                      Premium Pakistani Marble
                    </Title>
                    <Flex justify="center">
                      <Text w="70%" fz={18} fw={500} c="white" ta="center">
                        Discover our exclusive collection of Pakistani marble,
                        featuring unique patterns and exceptional durability
                      </Text>
                    </Flex>
                    <Flex justify="center">
                      <Button
                        w={180}
                        h={42}
                        bg="#f79707"
                        onClick={() => navigate("/products")}
                      >
                        View Products
                      </Button>
                    </Flex>
                  </Stack>
                </Card>
              </Flex>
            </BackgroundImage>
          </Card>

          <Center py="xl">
            <Stack align="center" gap={10}>
              <Text size="sm" color="orange" fw={600} tt="uppercase" lh={1.2}>
                Why Choose Us
              </Text>

              <Title order={2} c="dark" ta="center">
                Premium Products
              </Title>

              <Box
                h={4}
                w={40}
                bg="orange"
                mt={-6}
                mb={6}
                style={{ borderRadius: 999 }}
              />

              <Text size="md" color="gray" ta="center" maw={500}>
                {/* Satisfaction Guarantee */}
                {/* Expert Consultation */}
                We provide best marbles around the globe with our expert
                consultation and also with free Delivery
              </Text>
            </Stack>
          </Center>
          <Card bg={"#1f2937"} h={230} mt={15}>
            <Flex justify={"center"} align={"center"} h={"100%"}>
              <SimpleGrid cols={4} spacing={15}>
                <Card bg={"transparent"} p={5}>
                  <Stack gap={13}>
                    <Flex justify={"center"}>
                      <Box
                        w={60}
                        h={60}
                        style={{ borderRadius: "30PX" }}
                        bg={"#353e4a"}
                      >
                        <Center w={60} h={60}>
                          <IconShield color="yellow" size={32} />
                        </Center>
                      </Box>
                    </Flex>

                    <Title fz={22} ta={"center"} c={"white"}>
                      Premium Quality
                    </Title>
                    <Text w={"100%"} ta={"center"} c={"white"} fz={14} fw={600}>
                      All our stones are carefully selected from the finest
                      quarries worldwide and in Pakistan
                    </Text>
                  </Stack>
                </Card>
                <Card bg={"transparent"} p={5}>
                  <Stack gap={13}>
                    <Flex justify={"center"}>
                      <Box
                        w={60}
                        h={60}
                        style={{ borderRadius: "30PX" }}
                        bg={"#353e4a"}
                      >
                        <Center w={60} h={60}>
                          <IconTruck color="yellow" size={32} />
                        </Center>
                      </Box>
                    </Flex>

                    <Title fz={22} ta={"center"} c={"white"}>
                      Delivery Across All Punjab
                    </Title>
                    <Text w={"100%"} ta={"center"} c={"white"} fz={14} fw={600}>
                      Free shipping on all orders over Rs. 100,000 within Punjab
                    </Text>
                  </Stack>
                </Card>
                <Card bg={"transparent"} p={5}>
                  <Stack gap={13}>
                    <Flex justify={"center"}>
                      <Box
                        w={60}
                        h={60}
                        style={{ borderRadius: "30PX" }}
                        bg={"#353e4a"}
                      >
                        <Center w={60} h={60}>
                          <IconClock color="yellow" size={32} />
                        </Center>
                      </Box>
                    </Flex>

                    <Title fz={22} ta={"center"} c={"white"}>
                      Expert Consultation
                    </Title>
                    <Text w={"100%"} ta={"center"} c={"white"} fz={14} fw={600}>
                      Get personalized advice from our stone specialists in
                      Lahore
                    </Text>
                  </Stack>
                </Card>
                <Card bg={"transparent"} p={5}>
                  <Stack gap={13}>
                    <Flex justify={"center"}>
                      <Box
                        w={60}
                        h={60}
                        style={{ borderRadius: "30PX" }}
                        bg={"#353e4a"}
                      >
                        <Center w={60} h={60}>
                          <IconShield color="yellow" size={32} />
                        </Center>
                      </Box>
                    </Flex>

                    <Title fz={22} ta={"center"} c={"white"}>
                      Satisfaction Guarantee
                    </Title>
                    <Text w={"100%"} ta={"center"} c={"white"} fz={14} fw={600}>
                      Not satisfied? We offer hassle-free returns within 30 days
                    </Text>
                  </Stack>
                </Card>
              </SimpleGrid>
            </Flex>
          </Card>

          <Center py="xl">
            <Stack align="center" gap={10}>
              <Text size="sm" color="orange" fw={600} tt="uppercase" lh={1.2}>
                Handpicked Selection
              </Text>

              <Title order={2} c="dark" ta="center">
                Premium Products
              </Title>

              <Box
                h={4}
                w={40}
                bg="orange"
                mt={-6}
                mb={6}
                style={{ borderRadius: 999 }}
              />

              <Text size="md" color="gray" ta="center" maw={500}>
                Explore our finest marble and granite selections for luxury
                interiors
              </Text>
            </Stack>
          </Center>
          <SimpleGrid
            cols={{
              base: 1,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 4,
            }}
          >
            {products.map((product, index) => (
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
                            setLoadingFavourite
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
                            ? handleAddToCart(product._id, user._id, setLoading)
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
              </div>
            ))}
          </SimpleGrid>
          <Container w={"100%"} bg={"#242424"} fluid p={"xl"}>
            <Stack align="center" gap="xs">
              <Text size="sm" c={theme.colors.orange[5]} fw={600}>
                Smart Shopping with AI
              </Text>
              <Title order={2} fw={700} ta="center" c="white">
                Why Choose Rajput Marble&apos;s Assistant?
              </Title>
              <Divider
                size="sm"
                color={theme.colors.orange[5]}
                w={56}
                h={rem(3)}
              />
              <Text size="lg" c="dimmed" ta="center" mt="sm" mb="xl" w={800}>
                Discover the future of marble shopping with AI-powered guidance,
                expert support, and a seamless experience—brought to you by
                Punjab&apos;s trusted name in marble and granite.
              </Text>
            </Stack>

            <SimpleGrid
              cols={{
                base: 1,
                xs: 1,
                sm: 1,
                md: 2,
                lg: 2,
                xl: 2,
              }}
            >
              <Card
                style={{
                  maxWidth: 600,
                  height: 500,
                  display: "flex",
                  flexDirection: "column",
                }}
                withBorder
                shadow="xl"
                bg={"#2e2e2e"}
              >
                <Title
                  order={2}
                  style={{
                    fontFamily: "cursive",
                    color: "white",
                  }}
                >
                  Want help from AI?
                </Title>
                <Text
                  c={"#868e96"}
                  style={{
                    fontFamily: "monospace",
                  }}
                >
                  Ask any question or share your thoughts. Our AI assistant is
                  here to provide quick, helpful answers. Whether it’s advice,
                  explanations, or creative ideas, just type your query and let
                  the AI do the rest! Looking for the perfect marble tile? Ask
                  us for recommendations or design tips!
                </Text>
                <Title
                  order={5}
                  c={"white"}
                  style={{
                    fontFamily: "cursive",
                    marginTop: 24,
                  }}
                >
                  How AI Enhances Your Shopping Experience
                </Title>
                <Text
                  c={"#868e96"}
                  style={{
                    fontFamily: "monospace",
                  }}
                >
                  Our AI assistant helps you find the ideal marble tiles by
                  understanding your style and needs. It offers personalized
                  suggestions, answers your questions instantly, and makes your
                  shopping faster and easier. With AI, you get expert guidance
                  anytime—right at your fingertips! Whether you’re looking for
                  the perfect color, pattern, or finish, our AI can guide you
                  through our vast collection effortlessly. It also provides
                  care tips and design ideas to help you create stunning spaces.
                  Enjoy a seamless shopping experience tailored just for you!
                </Text>
              </Card>
              <GeminiText />
            </SimpleGrid>
          </Container>
          <WhyChooseUs />

          <Center py="xl">
            <Stack align="center" gap={10}>
              <Text size="sm" color="orange" fw={600} tt="uppercase" lh={1.2}>
                Our Portfolio
              </Text>

              <Title order={2} c="dark" ta="center">
                Featured Projects
              </Title>

              <Box
                h={4}
                w={40}
                bg="orange"
                mt={-6}
                mb={6}
                style={{ borderRadius: 999 }}
              />

              <Text size="md" color="gray" ta="center" maw={500}>
                Explore our recent installations and transformations
              </Text>
            </Stack>
          </Center>

          <SimpleGrid
            cols={{
              base: 1,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 4,
            }}
          >
            {projects.map((project) => (
              <RoomIdeasCard
                image={project.image.url}
                author={project.author}
                title={project.title}
                description={project.description}
                materials={project.materials}
                isFeatured
                location={project.location}
              />
            ))}
          </SimpleGrid>

          <Footer />
        </Stack>
      </Container>
    </>
  );
}

export default LandingPage;
