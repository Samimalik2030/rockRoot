import {
  Flex,
  Card,
  Title,
  Text,
  Stack,
  Button,
  SimpleGrid,
  Image,
  Box,
} from "@mantine/core";
import Navbar from "./Navbar";

function LandingPage() {
  return (
    <>
      <Navbar />

      <Card bg={"#656565"} h={"100vh"}>
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
                <Button w={"180px"} h={42} bg={"#f79707"}>
                  View Collection
                </Button>
              </Flex>
            </Stack>
          </Card>
        </Flex>
      </Card>

      <Card bg={"transparent"} p={40}>
        <Stack>
          <Text ta={"center"} fz={18} c={"#e35910ff"}>
            Exclusive Collections
          </Text>
          <Title ta={"center"} fz={42} c={"#0f1729"}>
            Luxury Stone Collections
          </Title>
          <Text ta={"center"} c={"#6575a9"}>
            Discover our exquisite marble and granite collections for your dream
            spaces
          </Text>
          <SimpleGrid cols={5} spacing={25} mt={20}>
            <Card bg={"#888888"} p={0} h={350} radius={8}>
              <Stack gap={12}>
                <Image
                  src={
                    "https://ik.imagekit.io/bh2albdmg/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg?updatedAt=1740806054129"
                  }
                />
                <Title fz={22} pl={18} c={"white"}>
                  Italian Marble
                </Title>
                <Text w={"80%"} pl={18} c={"white"}>
                  Timeless elegance from italy's finest quarries
                </Text>
                <Button w={"170"} bg={"transparent"} c={"#f2960c"} fz={16}>
                  Explore Collection
                </Button>
              </Stack>
            </Card>
            <Card bg={"#888888"} p={0} h={350} radius={8}>
              <Stack gap={12}>
                <Image
                  src={
                    "https://ik.imagekit.io/bh2albdmg/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg?updatedAt=1740806054129"
                  }
                />
                <Title fz={22} pl={18} c={"white"}>
                  Pakistani Marble
                </Title>
                <Text w={"90%"} pl={18} c={"white"}>
                  Premium local marble with unique patterns
                </Text>
                <Button w={"170"} bg={"transparent"} c={"#f2960c"} fz={16}>
                  Explore Collection
                </Button>
              </Stack>
            </Card>
            <Card bg={"#888888"} p={0} h={350} radius={8}>
              <Stack gap={12}>
                <Image
                  src={
                    "https://ik.imagekit.io/bh2albdmg/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg?updatedAt=1740806054129"
                  }
                />
                <Title fz={22} pl={18} c={"white"}>
                  Premium Granite
                </Title>
                <Text w={"83%"} pl={18} c={"white"}>
                  Durable luxury for countertops and flooring
                </Text>
                <Button w={"170"} bg={"transparent"} c={"#f2960c"} fz={16}>
                  Explore Collection
                </Button>
              </Stack>
            </Card>
            <Card bg={"#888888"} p={0} h={350} radius={8}>
              <Stack gap={12}>
                <Image
                  src={
                    "https://ik.imagekit.io/bh2albdmg/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg?updatedAt=1740806054129"
                  }
                />
                <Title fz={22} pl={18} c={"white"}>
                  Exotic Onyx
                </Title>
                <Text w={"80%"} pl={18} c={"white"}>
                  Translucent beauty for statement features
                </Text>
                <Button w={"170"} bg={"transparent"} c={"#f2960c"} fz={16}>
                  Explore Collection
                </Button>
              </Stack>
            </Card>
            <Card bg={"#888888"} p={0} h={350} radius={8}>
              <Stack gap={12}>
                <Image
                  src={
                    "https://ik.imagekit.io/bh2albdmg/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg?updatedAt=1740806054129"
                  }
                />
                <Title fz={22} pl={18} c={"white"}>
                  Designer Quartz
                </Title>
                <Text w={"85%"} pl={18} c={"white"}>
                  Engineered perfection for modern spaces
                </Text>
                <Button w={"170"} bg={"transparent"} c={"#f2960c"} fz={16}>
                  Explore Collection
                </Button>
              </Stack>
            </Card>
          </SimpleGrid>
          <Flex justify={"center"} mt={30}>
            <Button
              w={190}
              h={40}
              bg={"transparent"}
              c={"black"}
              radius={4}
              fz={16}
              style={{ border: "1px solid #e35910ff" }}
            >
              View All Collection
            </Button>
          </Flex>
        </Stack>
      </Card>

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
                    bg={"blue"}
                  ></Box>
                </Flex>

                <Title fz={22} ta={"center"} c={"white"}>
                  Premium Quality
                </Title>
                <Text w={"100%"} ta={"center"} c={"white"} fz={14} fw={600}>
                  All our stones are carefully selected from the finest quarries
                  worldwide and in Pakistan
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
                    bg={"blue"}
                  ></Box>
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
                    bg={"blue"}
                  ></Box>
                </Flex>

                <Title fz={22} ta={"center"} c={"white"}>
                  Expert Consultation
                </Title>
                <Text w={"100%"} ta={"center"} c={"white"} fz={14} fw={600}>
                  Get personalized advice from our stone specialists in Lahore
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
                    bg={"blue"}
                  ></Box>
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

      <Card bg={"blue"} mt={40}></Card>
    </>
  );
}

export default LandingPage;
