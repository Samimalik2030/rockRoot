import {
  Container,
  Stack,
  Card,
  Title,
  SegmentedControl,
  SimpleGrid,
  List,
  Checkbox,
  Center,
  ThemeIcon,
  Flex,
  Button,
  Group,
  CheckIcon,
  Divider,
  TextInput,
  ActionIcon,
  CloseIcon,
  RadioIcon,
  Anchor,
  Text,
  Image,
  BackgroundImage,
  Box,
} from "@mantine/core";
import Navbar from "../components/Navbar";

function Precautions() {
  return (
    <>
      <Navbar />
      <Container fluid bg={"#fafcfd"}>
        <Stack gap={40}>
          <Card p={0} radius="md" style={{ overflow: "hidden" }}>
            <BackgroundImage
              h={300}
              src="https://plus.unsplash.com/premium_photo-1661931013258-9295e33affce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hcmJsZSUyMHJvb21zfGVufDB8MHwwfHx8MA%3D%3D"
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
                  <Stack mt={30} gap={15}>
              <Title fw={700} fz={50} c={"white"}>
                Marble Care & Information
              </Title>
              <Text color="#ced4daff" fz={22} w={"53%"} ta={'center'}>
                Learn how to maintain the beauty and longevity of your premium
                marble and granite surfaces
              </Text>
            </Stack>
                </Card>
              </Flex>
            </BackgroundImage>
          </Card>

          {/* /////////// */}

          <Card px={20} py={40} bg={"transparent"}>
            <SimpleGrid cols={2} spacing={10}>
              {/* //////////// */}

              <Card radius="md" p="md" bg={"transparent"}>
                <Title order={2} mb="sm">
                  Daily Cleaning Tips
                </Title>
                <Text color="dimmed" fz={16} mb="md">
                  Proper daily cleaning is essential to maintain the beauty of
                  your marble surfaces. Follow these expert recommendations for
                  the best results.
                </Text>
                <List
                  spacing="lg"
                  size="xl"
                  listStyleType="none"
                  icon={<Checkbox size="sm" radius={20} color={"#23c55f"} />}
                >
                  <List.Item>
                    <Text fw={600} fz={16}>
                      Use pH Neutral Cleaners
                    </Text>
                    <Text color="dimmed" fz={16}>
                      Always use pH neutral, non-abrasive cleaners specifically
                      designed for natural stone. Avoid acidic cleaners like
                      vinegar or lemon-based products.
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text fw={600} fz={16}>
                      Soft Cloth Cleaning
                    </Text>
                    <Text color="dimmed" size="md">
                      Use soft microfiber cloths for cleaning to avoid
                      scratching the surface. Avoid rough sponges or scrubbing
                      pads.
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text fw={600} fz={16}>
                      Blot, Don't Wipe Spills
                    </Text>
                    <Text color="dimmed" size="md">
                      Immediately blot spills with a paper towel instead of
                      wiping, which can spread the spill and increase the
                      affected area.
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text fw={600} fz={16}>
                      Regular Dusting
                    </Text>
                    <Text color="dimmed" size="md">
                      Dust marble surfaces regularly with a soft cloth to
                      prevent scratching from dust particles.
                    </Text>
                  </List.Item>
                </List>
              </Card>

              {/* /////////// */}

              <Card p={0} bg={"transparent"} mt={10}>
                <Image
                  radius={4}
                  src={
                    "https://ik.imagekit.io/bh2albdmg/19ff79b4d717e61ca279921ab427c497-cc_ft_768.webp?updatedAt=1741692186162"
                  }
                />
              </Card>

              {/* ////////////// */}
            </SimpleGrid>
          </Card>

          {/* /////////// */}

          {/* //////////// */}

          <Card bg={"transparent"}>
            <Title fz={24} mb={30}>
              Frequently Asked Questions
            </Title>

            <SimpleGrid cols={2} spacing={20}>
              <Card shadow="sm" radius="md" withBorder p={20} bg="#ffffff">
                <Title order={5} mb="sm">
                  How often should I seal my marble countertops?
                </Title>
                <Text color="dimmed" fz={16} fw={500} w={"95%"}>
                  For kitchen countertops, we recommend sealing every 6-12
                  months depending on usage. Bathroom surfaces may require less
                  frequent sealing, typically once a year.
                </Text>
              </Card>

              <Card shadow="sm" radius="md" withBorder p={20} bg="#ffffff">
                <Title order={5} mb="lg">
                  Can I use regular household cleaners on marble?
                </Title>
                <Text color="dimmed" fz={16} fw={500} w={"95%"}>
                  No, regular household cleaners are often too harsh or acidic
                  for marble. Always use pH-neutral cleaners specifically
                  designed for natural stone.
                </Text>
              </Card>
              <Card shadow="sm" radius="md" withBorder p={20} bg="#ffffff">
                <Title order={5} mb="md">
                  How do I remove etching from my marble surface?
                </Title>
                <Text color="dimmed" fz={16} fw={500} w={"95%"}>
                  Light etching can be removed with marble polishing powder. For
                  deeper etching, professional restoration may be required.
                </Text>
              </Card>
              <Card shadow="sm" radius="md" withBorder p={20} bg="#ffffff">
                <Title order={5} mb="md">
                  Is marble suitable for kitchen countertops?
                </Title>
                <Text color="dimmed" fz={16} fw={500} w={"95%"}>
                  Yes, but it requires more maintenance than granite or quartz.
                  With proper care and sealing, marble can be a beautiful option
                  for kitchens.
                </Text>
              </Card>
            </SimpleGrid>
          </Card>

          {/* ///////////// */}

          <Card bg={"#222222"}>
            <Stack gap={30}>
              {/* ////////////// */}

              <SimpleGrid cols={4} spacing={6}>
                <Card
                  shadow="sm"
                  padding="sm"
                  radius="md"
                  style={{ backgroundColor: "#222", color: "#fff" }}
                >
                  <Group align="center" gap="sm">
                    <ThemeIcon size={36} radius="md" color="orange">
                      <CheckIcon size={20} />
                    </ThemeIcon>
                    <div>
                      <Text fw={500} fz={18}>
                        Free Shipping
                      </Text>
                      <Text color="dimmed" fz={16}>
                        On all orders above PKR 100,000
                      </Text>
                    </div>
                  </Group>
                </Card>

                {/* /////////////// */}

                <Card
                  shadow="sm"
                  p={10}
                  radius="md"
                  style={{ backgroundColor: "#222", color: "#fff" }}
                >
                  <Group align="center" gap="sm">
                    <ThemeIcon size={36} radius="md" color="orange">
                      <CheckIcon size={20} />
                    </ThemeIcon>
                    <div>
                      <Text fw={500} fz={18}>
                        Quality Guarantee
                      </Text>
                      <Text color="dimmed" fz={16}>
                        Premium marble & granite materials
                      </Text>
                    </div>
                  </Group>
                </Card>

                {/* //////////// */}

                <Card
                  shadow="sm"
                  padding="sm"
                  radius="md"
                  style={{ backgroundColor: "#222", color: "#fff" }}
                >
                  <Group align="center" gap="sm">
                    <ThemeIcon size={36} radius="md" color="orange">
                      <CheckIcon size={20} />
                    </ThemeIcon>
                    <div>
                      <Text fw={500} fz={18}>
                        Luxury Selection
                      </Text>
                      <Text color="dimmed" fz={16}>
                        Curated premium stone collection
                      </Text>
                    </div>
                  </Group>
                </Card>

                {/* //////////////// */}

                <Card
                  shadow="sm"
                  padding="sm"
                  radius="md"
                  style={{ backgroundColor: "#222", color: "#fff" }}
                >
                  <Group align="center" gap="sm">
                    <ThemeIcon size={36} radius="md" color="orange">
                      <CheckIcon size={20} />
                    </ThemeIcon>
                    <div>
                      <Text fw={500} fz={18}>
                        Expert Support
                      </Text>
                      <Text color="dimmed" fz={16}>
                        Professional service at every step
                      </Text>
                    </div>
                  </Group>
                </Card>
              </SimpleGrid>

              {/* /////////////// */}

              <Divider py={"xs"} size={"xs"} color="#6a6a6aff" />

              {/* /////////////// */}

              <SimpleGrid cols={4} spacing={15}>
                <Card
                  shadow="sm"
                  radius="md"
                  p="lg"
                  style={{ backgroundColor: "#222", color: "#fff" }}
                >
                  <Stack>
                    <Title order={2} c="#fbbf24" mb="sm">
                      Rajput Marble's & Graynite
                    </Title>
                    <Text color="diamand" fz={16} mb="md">
                      Premium supplier of luxury marble, granite and natural
                      stone products. Serving Pakistan with the finest quality
                      materials for your dream spaces.
                    </Text>
                    <Stack gap="xs">
                      <Group align="center" gap="sm">
                        <ThemeIcon color="#fbbf24" size={30} radius="sm">
                          <CheckIcon size={16} />
                        </ThemeIcon>
                        <Text>Punjab, Pakistan</Text>
                      </Group>

                      <Group align="center" gap="sm">
                        <ThemeIcon color="#fbbf24" size={30} radius="sm">
                          <CheckIcon size={16} />
                        </ThemeIcon>
                        <Text>+92 300 1234567</Text>
                      </Group>

                      <Group align="center" gap="sm">
                        <ThemeIcon color="#fbbf24" size={30} radius="sm">
                          <CheckIcon size={16} />
                        </ThemeIcon>
                        <Text>info@rajputmarble.com</Text>
                      </Group>
                    </Stack>
                  </Stack>
                </Card>

                {/* //////////////// */}

                <Card
                  shadow="sm"
                  radius="md"
                  // withBorder
                  p="xl"
                  style={{ backgroundColor: "#222", color: "#fff" }}
                >
                  <Text fw={700} fz={22} mb="sm">
                    Quick Links
                  </Text>
                  <Stack fz={16} fw={600} c={"#ced4daff"} mt={15}>
                    <Group gap={10}>
                      <Text>→</Text>
                      Home
                    </Group>

                    <Group gap={10}>
                      <Text>→</Text>
                      About Us
                    </Group>

                    <Group gap={10}>
                      <Text fw={700} fz={16}>
                        →
                      </Text>
                      Products
                    </Group>

                    <Group gap={10}>
                      <Text>→</Text>
                      Collections
                    </Group>

                    <Group gap={10}>
                      <Text>→</Text>
                      Room Ideas
                    </Group>

                    <Group gap={10}>
                      <Text>→</Text>
                      Contact
                    </Group>
                  </Stack>
                </Card>

                <Card
                  shadow="sm"
                  radius="md"
                  // withBorder
                  p="xl"
                  style={{ backgroundColor: "#222", color: "#fff" }}
                >
                  <Text fw={700} fz={22} mb="sm">
                    Categories
                  </Text>
                  <Stack fz={16} fw={600} c={"#ced4daff"} mt={15}>
                    <Group gap={10}>
                      <Text>→</Text>
                      Italian Marble
                    </Group>

                    <Group gap={10}>
                      <Text>→</Text>
                      Pakistani Marble
                    </Group>

                    <Group gap={10}>
                      <Text fw={700} fz={16}>
                        →
                      </Text>
                      Granite
                    </Group>

                    <Group gap={10}>
                      <Text>→</Text>
                      Onyx
                    </Group>

                    <Group gap={10}>
                      <Text>→</Text>
                      Travertine
                    </Group>
                  </Stack>
                </Card>
                {/* ////////// */}

                <Card
                  shadow="sm"
                  radius="md"
                  // withBorder
                  p="lg"
                  style={{ backgroundColor: "#222", color: "#fff" }}
                >
                  <Title order={3} mb="sm">
                    Stay Updated
                  </Title>
                  <Text color="dimmed" size="sm" mb="md">
                    Subscribe to our newsletter for the latest product updates,
                    special offers, and design inspiration.
                  </Text>
                  <Stack gap="sm">
                    <TextInput
                      placeholder="Your email address"
                      type="email"
                      radius="md"
                      styles={{
                        input: {
                          backgroundColor: "transparent",
                          border: "1px solid #373737",
                        },
                      }}
                    />
                    <Button color="#fbbf24" radius="md">
                      Subscribe
                    </Button>
                    <Title order={4} mb="sm">
                      Follow Us
                    </Title>
                    <Group justify="space-between">
                      <ActionIcon color="blue" size="lg" radius="md">
                        <CheckIcon size={20} />
                      </ActionIcon>
                      <ActionIcon color="pink" size="lg" radius="md">
                        <CloseIcon height={20} />
                      </ActionIcon>
                      <ActionIcon color="lightblue" size="lg" radius="md">
                        <ThemeIcon size={20} />
                      </ActionIcon>
                      <ActionIcon color="blue" size="lg" radius="md">
                        <CheckIcon size={20} />
                      </ActionIcon>
                      <ActionIcon color="red" size="lg" radius="md">
                        <RadioIcon size={20} />
                      </ActionIcon>
                    </Group>
                  </Stack>
                </Card>
              </SimpleGrid>

              {/* /////////// */}

              <Divider py={"xs"} size={"xs"} color="#6a6a6aff" />

              {/* ////////////// */}

              <Card
                shadow="sm"
                radius="md"
                // withBorder
                p="lg"
                style={{
                  backgroundColor: "#222",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                <Group gap="20px" justify="center">
                  <Stack align="center" gap={6}>
                    <ThemeIcon color="yellow" size={40} radius="20px">
                      <RadioIcon size={20} />
                    </ThemeIcon>
                    <Text fw={700} size="md">
                      Best Quality
                    </Text>
                    <Text color="dimmed" size="sm">
                      2023 Award
                    </Text>
                  </Stack>

                  <Stack align="center" gap={6}>
                    <ThemeIcon color="yellow" size={40} radius="20px">
                      <CheckIcon size={24} />
                    </ThemeIcon>
                    <Text fw={700} size="md">
                      Customer Choice
                    </Text>
                    <Text color="dimmed" size="sm">
                      9 Years Running
                    </Text>
                  </Stack>

                  <Stack align="center" gap={6}>
                    <ThemeIcon color="yellow" size={40} radius="20px">
                      <CheckIcon size={24} />
                    </ThemeIcon>
                    <Text fw={700} size="md">
                      Luxury Design
                    </Text>
                    <Text color="dimmed" size="sm">
                      Excellence Award
                    </Text>
                  </Stack>

                  <Stack align="center" gap={6}>
                    <ThemeIcon color="yellow" size={40} radius="20px">
                      <CheckIcon size={24} />
                    </ThemeIcon>
                    <Text fw={700} size="md">
                      Verified Quality
                    </Text>
                    <Text color="dimmed" size="sm">
                      ISO Certified
                    </Text>
                  </Stack>
                </Group>
              </Card>

              {/* //////////// */}

              <Divider py={"xs"} size={"xs"} color="#6a6a6aff" />

              {/* ///////////////// */}

              <Stack gap={6}>
                <Text fz={16} c={"#b2b2b2ff"} ta={"center"}>
                  © 2025 Rajput Marble's & Graynite. All rights reserved.
                </Text>
                <Group justify="center">
                  <Anchor c="#b2b2b2ff" fz={14}>
                    Privacy Policy
                  </Anchor>
                  <Anchor c="#b2b2b2ff" fz={14}>
                    Terms of Service
                  </Anchor>
                  <Anchor c="#b2b2b2ff" fz={14}>
                    Sitemap
                  </Anchor>
                </Group>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </>
  );
}

export default Precautions;
