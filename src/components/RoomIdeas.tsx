import {
  Card,
  Stack,
  Title,
  Text,
  Group,
  Box,
  SimpleGrid,
  Flex,
  Center,
  Button,
} from "@mantine/core";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import { RoomIdeasCard } from "./RoomIdeaCard";
import { useNavigate } from "react-router-dom";

function RoomIdeas() {
  const navigate = useNavigate()
  const imageUrl =
    "https://ik.imagekit.io/bh2albdmg/frames-for-your-heart-2d4lAQAlbDA-unsplash%20(1).jpg?updatedAt=1740806605782";
  return (
    <>
      <Navbar />
      <Stack>
        <Card shadow="sm" h={260} bg={"#1f2937"}>
          <Stack mt={20} gap={15}>
            <Title fw={700} fz={56} ta={"center"} c={"white"}>
              Room Ideas
            </Title>
            <Group justify="center">
              <Text color="dimmed" fz={26} fw={600} ta={"center"} w={"60%"}>
                Get inspired with our curated collection of design ideas for
                every space
              </Text>
            </Group>
          </Stack>
        </Card>
        <Stack gap={12}>
              <Text c={"#ff9918"} fz={18} fw={500} ta={"center"}>
                Expert Advice
              </Text>
              <Title fz={42} ta={"center"} >
                Design Tips from Our Experts
              </Title>
              <Group justify="center">
                <Box
                  w={80}
                  h={4}
                  bg={"#ff9900"}
                  style={{ borderRadius: 20 }}
                ></Box>
              </Group>
              <Text fz={22} fw={500} ta={"center"} color="dimmed">
                Professional insights to help you make the most of natural stone
                in your home
              </Text>
            </Stack>
        <Card px={20} py={30}>
          <Stack gap={50} px={200}>
           
            {/* //////////// */}
            <SimpleGrid cols={3} spacing={20}>
              {/* //////////// */}
              <Card p={0} radius={12} shadow="sm" withBorder>
                <Card
                  radius="md"
                  h={230}
                  p={0}
                  style={{
                    backgroundImage: `url('${imageUrl}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                  }}
                >
                  <Flex
                    justify={"start"}
                    align={"end"}
                    h={"100%"}
                    mb={10}
                    ml={10}
                  >
                    <Title c="white" fz={26}>
                      Mixing Materials
                    </Title>
                  </Flex>
                </Card>
                <Stack px={15} mt={10} py={15}>
                  <Text color="dimmed" fz={18} fw={500}>
                    Don't be afraid to mix different types of stone. Combining
                    marble with granite or quartz can create visual interest and
                    highlight different areas of your space.
                  </Text>
                </Stack>
              </Card>
              {/* /////////// */}
              <Card p={0} radius={12} shadow="sm" withBorder>
                <Card
                  radius="md"
                  h={230}
                  p={0}
                  style={{
                    backgroundImage: `url('${imageUrl}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                  }}
                >
                  <Flex
                    justify={"start"}
                    align={"end"}
                    h={"100%"}
                    mb={10}
                    ml={10}
                  >
                    <Title c="white" fz={26}>
                      Lighting Considerations
                    </Title>
                  </Flex>
                </Card>
                <Stack px={15} mt={10} py={15}>
                  <Text color="dimmed" fz={18} fw={500}>
                    Natural stone looks different under various lighting
                    conditions. Always view samples in the space where they'll
                    be installed, under both natural and artificial light.
                  </Text>
                </Stack>
              </Card>
              {/* ////////////// */}
              <Card p={0} radius={12} shadow="sm" withBorder>
                <Card
                  radius="md"
                  h={230}
                  p={0}
                  style={{
                    backgroundImage: `url('${imageUrl}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                  }}
                >
                  <Flex
                    justify={"start"}
                    align={"end"}
                    h={"100%"}
                    mb={10}
                    ml={10}
                  >
                    <Title c="white" fz={26}>
                      Veining Direction
                    </Title>
                  </Flex>
                </Card>
                <Stack px={15} mt={10} py={15}>
                  <Text color="dimmed" fz={18} fw={500}>
                    Pay attention to the direction of veining in marble and
                    similar stones. Bookmatching (mirroring adjacent slabs) can
                    create dramatic, symmetrical patterns.
                  </Text>
                </Stack>
              </Card>
              {/* ///////////// */}

              <Card p={0} radius={12} shadow="sm" withBorder>
                <Card
                  radius="md"
                  h={230}
                  p={0}
                  style={{
                    backgroundImage: `url('${imageUrl}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                  }}
                >
                  <Flex
                    justify={"start"}
                    align={"end"}
                    h={"100%"}
                    mb={10}
                    ml={10}
                  >
                    <Title c="white" fz={26}>
                      Edge Profiles
                    </Title>
                  </Flex>
                </Card>
                <Stack px={15} mt={10} py={15}>
                  <Text color="dimmed" fz={18} fw={500}>
                    The edge profile you choose for countertops can dramatically
                    change the look. From simple eased edges to elaborate ogee
                    profiles, each creates a different aesthetic.
                  </Text>
                </Stack>
              </Card>
              {/* /////////// */}
              <Card p={0} radius={12} shadow="sm" withBorder>
                <Card
                  radius="md"
                  h={230}
                  p={0}
                  style={{
                    backgroundImage: `url('${imageUrl}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                  }}
                >
                  <Flex
                    justify={"start"}
                    align={"end"}
                    h={"100%"}
                    mb={10}
                    ml={10}
                  >
                    <Title c="white" fz={26}>
                      Maintenance Matters
                    </Title>
                  </Flex>
                </Card>
                <Stack px={15} mt={10} py={15}>
                  <Text color="dimmed" fz={18} fw={500}>
                    Different stones require different maintenance. Consider
                    your lifestyle when choosing - some stones require more
                    regular sealing than others.
                  </Text>
                </Stack>
              </Card>
              {/* ////////////// */}
              <Card p={0} radius={12} shadow="sm" withBorder>
                <Card
                  radius="md"
                  h={230}
                  p={0}
                  style={{
                    backgroundImage: `url('${imageUrl}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                  }}
                >
                  <Flex
                    justify={"start"}
                    align={"end"}
                    h={"100%"}
                    mb={10}
                    ml={10}
                  >
                    <Title c="white" fz={26}>
                      Sample Size
                    </Title>
                  </Flex>
                </Card>
                <Stack px={15} mt={10} py={15}>
                  <Text color="dimmed" fz={18} fw={500}>
                    Always look at large samples of natural stone. Small samples
                    can't capture the full range of variation and movement in
                    the material.
                  </Text>
                </Stack>
              </Card>
            </SimpleGrid>
          </Stack>
        </Card>
      </Stack>
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
      <SimpleGrid cols={4} px={24}>
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
      <Card
        shadow="sm"
        px={10}
        py={50}
        radius="6"
        style={{
          backgroundColor: "#232d3b",
          color: "#fff",
          textAlign: "center",
        }}
        mt={12}
      >
        <Title order={1} mb="sm" fw={700}>
          Ready to Transform Your Space?
        </Title>
        <Group justify="center">
          <Text color="dimmed" size="lg" mb="xl" w={"50%"}>
            Visit our showroom or contact us today to explore our premium
            collection of marble and granite.
          </Text>
        </Group>
        <Group justify="center" gap="md">
          <Button
            color="orange"
            radius="6px"
            w={130}
            h={44}
            c={"black"}
            fz={16}
            fw={600}
            onClick={()=>navigate('/contact-us')}
          >
            Contact Us
          </Button>

          <Button c={"white"} radius="6px" w={170} h={44}
            onClick={()=>navigate('/products')}
          
          >
            Explore Products
          </Button>
        </Group>
      </Card>

      <Box>
        <Footer />
      </Box>
    </>
  );
}

export default RoomIdeas;
