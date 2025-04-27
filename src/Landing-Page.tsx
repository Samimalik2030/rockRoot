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
} from "@mantine/core";
import Collections from "./pages/Collections";
import WhyChooseUs from "./components/WhyChooseUs";
import { RoomIdeasCard } from "./components/RoomIdeaCard";
import { Footer } from "./components/Footer";
import IconShield from "./assets/icons/IconShield";
import IconTruck from "./assets/icons/IconTruck";
import IconClock from "./assets/icons/IconClock";
import { ProductCard } from "./components/ProductCard";
import { useMediaQuery } from "@mantine/hooks";
import Navbar from "./components/Navbar";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const isMobile = useMediaQuery("(max-width: 56.25em)");
  const navigate = useNavigate();
  const products = [
    {
      id: "hdjsfjhsadf",
      name: "Carrara White Marble",
      price: 25,
      description: "Elegant white marble with grey veins.",
      dimensions: "60x30 inches",
      thickness: "2 cm",
      finish: "Polished",
      category: "White Marble",
      image:
        "https://plus.unsplash.com/premium_photo-1708078449934-4de2318cdc84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwaXRtZXN8ZW58MHx8MHx8fDA%3D",
      inStock: true,
      color: "White",
      origin: "Italy",
      tags: ["luxury", "floor", "classic"],
    },
    {
      id: "hdjsfjhsadf",

      name: "Emperador Dark Marble",
      price: 30,
      description: "Deep brown marble with fine veins.",
      dimensions: "48x24 inches",
      thickness: "1.8 cm",
      finish: "Honed",
      category: "Brown Marble",
      image:
        "https://plus.unsplash.com/premium_photo-1708073341819-4edf7d77e7e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFyYmxlJTIwaXRtZXN8ZW58MHx8MHx8fDA%3D",
      inStock: true,
      color: "Brown",
      origin: "Spain",
      tags: ["warm", "premium", "interior"],
    },
    {
      id: "hdjsfjhsadf",
      name: "Black Galaxy Granite",
      price: 28,
      description: "Black granite with golden specks.",
      dimensions: "72x36 inches",
      thickness: "2.5 cm",
      finish: "Polished",
      category: "Black Granite",
      image:
        "https://plus.unsplash.com/premium_photo-1726837532891-8201243681a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFyYmxlJTIwaXRtZXN8ZW58MHx8MHx8fDA%3D",
      inStock: false,
      color: "Black",
      origin: "India",
      tags: ["modern", "flooring", "luxury"],
    },
    {
      id: "hdjsfjhsadf",
      name: "Black Galaxy Granite",
      price: 28,
      description: "Black granite with golden specks.",
      dimensions: "72x36 inches",
      thickness: "2.5 cm",
      finish: "Polished",
      category: "Black Granite",
      image:
        "https://images.unsplash.com/photo-1649331953896-31342f33ea1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFyYmxlJTIwaXRtZXN8ZW58MHx8MHx8fDA%3D",
      inStock: false,
      color: "Black",
      origin: "India",
      tags: ["modern", "flooring", "luxury"],
    },
  ];

  return (
    <>
      <Container fluid p={0}>
        <Navbar />
        <Stack>
          <Card h={"80vh"}>
            <BackgroundImage
              src="https://ik.imagekit.io/yzrrrgg3d/marble.jpg?updatedAt=1745460251414"
              h={"100%"}
              radius={"md"}
            >
              <Flex justify={"center"} align={"center"} h={"100%"}>
                <Card w={"50%"} bg={"transparent"}>
                  <Stack>
                    <Text c={"#f79707"} ta={"center"} fz={18} fw={500}>
                      Local Luxury, Global Standards
                    </Text>
                    <Title ta={"center"} fz={48} fw={700} c={"white"}>
                      Premium Pakistani Marble
                    </Title>
                    <Flex justify={"center"}>
                      <Text w={"70%"} fz={18} fw={500} c={"white"}>
                        Discover our exclusive collection of Pakistani marble,
                        featuring unique patterns and exceptional durability
                      </Text>
                    </Flex>
                    <Flex justify={"center"}>
                      <Button
                        w={"180px"}
                        h={42}
                        bg={"#f79707"}
                        onClick={() => navigate('/products')}
                      >
                        View Products
                      </Button>
                    </Flex>
                  </Stack>
                </Card>
              </Flex>
            </BackgroundImage>
          </Card>

          <Card bg={"transparent"} p={40}>
            <Stack>
              <Text ta={"center"} fz={22} fw={600} c={"#e35910ff"}>
                Exclusive Collections
              </Text>
              <Title ta={"center"} fz={42} c={"#0f1729"}>
                Luxury Stone Collections
              </Title>
              <Text ta={"center"} c={"#6575a9"}>
                Discover our exquisite marble and granite collections for your
                dream spaces
              </Text>
              <Collections />
            </Stack>
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
                      Free Delivery in Punjab
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
          <SimpleGrid cols={4}>
            {products.map((product) => (
              <ProductCard
                description={product.description}
                image={product.image}
                name={product.name}
                origin={product.origin}
                price={product.price}
                rating={4}
                isBestseller
                key={product.id}
              />
            ))}
          </SimpleGrid>

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
          <SimpleGrid cols={4}>
            <RoomIdeasCard
              image="https://images.unsplash.com/photo-1737103515460-7c5f2751bb77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFyYmxlJTIwZnVybmlzaGVkJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
              location="Islamabad"
              author="Faisal Ahmed"
              title="Luxury Master Bathroom with Carrara Marble"
              description="Elegant white marble creates a spa-like retreat in this master bathroom"
              materials={["Carrara White Marble", "Calacatta Gold Marble"]}
              isFeatured
            />
            <RoomIdeasCard
              image="https://images.unsplash.com/photo-1737103515295-cabd3696cd8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hcmJsZSUyMGZ1cm5pc2hlZCUyMHJvb218ZW58MHx8MHx8fDA%3D"
              location="Islamabad"
              author="Faisal Ahmed"
              title="Luxury Master Bathroom with Carrara Marble"
              description="Elegant white marble creates a spa-like retreat in this master bathroom"
              materials={["Carrara White Marble", "Calacatta Gold Marble"]}
              isFeatured
            />
            <RoomIdeasCard
              image="https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hcmJsZSUyMGZ1cm5pc2hlZCUyMHJvb218ZW58MHx8MHx8fDA%3D"
              location="Islamabad"
              author="Faisal Ahmed"
              title="Luxury Master Bathroom with Carrara Marble"
              description="Elegant white marble creates a spa-like retreat in this master bathroom"
              materials={["Carrara White Marble", "Calacatta Gold Marble"]}
              isFeatured
            />
            <RoomIdeasCard
              image="https://images.unsplash.com/photo-1699084260081-354ce46d738b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hcmJsZSUyMGZ1cm5pc2hlZCUyMHJvb218ZW58MHx8MHx8fDA%3D"
              location="Islamabad"
              author="Faisal Ahmed"
              title="Luxury Master Bathroom with Carrara Marble"
              description="Elegant white marble creates a spa-like retreat in this master bathroom"
              materials={["Carrara White Marble", "Calacatta Gold Marble"]}
              isFeatured
            />
          </SimpleGrid>

          <Footer />
        </Stack>
      </Container>
    </>
  );
}

export default LandingPage;
