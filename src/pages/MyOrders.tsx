import {
  Avatar,
  Card,
  CheckIcon,
  Divider,
  Grid,
  NavLink,
  Stack,
  Text,
  Flex,
  Container,
  Title,
  Group,
  Button,
  Badge,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { modals } from "@mantine/modals";
import Navbar from "../components/Navbar";
import WhyChooseUs from "../components/WhyChooseUs";
import { Footer } from "../components/Footer";

function MyOrders() {
   const navigate = useNavigate()
   const openLogoutModal = () => {
     modals.openConfirmModal({
       title: "Confirm Logout",
       centered: true,
       children: <p>Are you sure you want to logout?</p>,
       labels: { confirm: "Logout", cancel: "Cancel" },
       confirmProps: { color: "red" },
       onConfirm: () => {
         localStorage.removeItem("token");
         localStorage.removeItem("user");
         navigate("/sign-in");
         window.location.reload();
       },
     });
   };
 


  return (
    <>
      <Navbar />
      <Container
        bg={"#f2f4f8ff"}
        w={"100vw"}
        h={"100vh"}
        fluid
        px={40}
        py={80}
        style={{ border: "2px solid #e2e8f0" }}
      >
        <Grid>
          <Grid.Col span={3}>
            <Card
              withBorder
              radius="md"
              shadow="sm"
              p="lg"
              w={280}
              style={{ border: "2px solid #e2e8f0" }}
            >
              <Stack gap="xs">
                {/* Profile Header */}
                <Flex align="center" gap={20}>
                  <Avatar
                    src="https://placehold.co/48x48"
                    size="lg"
                    radius="xl"
                  />
                  <Text fw={600} fz={22}>
                    User
                  </Text>
                </Flex>

                {/* Navigation Links */}
                <Stack gap={2} mt="sm">
                  <NavLink label="Orders" leftSection={<CheckIcon />} active />
                  <NavLink label="Wishlist" leftSection={<CheckIcon />} />
                  <NavLink label="Profile" leftSection={<CheckIcon />} />
                  <NavLink
                    label="Payment Methods"
                    leftSection={<CheckIcon />}
                  />
                  <NavLink label="Settings" leftSection={<CheckIcon />} />
                </Stack>

                <Divider my="sm" />

                {/* Sign Out */}
                <NavLink
                  fz={18}
                  fw={500}
                  c={"#f06471"}
                  label="Sign Out"
                  leftSection={<CheckIcon />}
                  color="red"
                  variant="light"
                  onClick={() => openLogoutModal()}
                />
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col span={9}>
            <Card>
              <Stack>
                <Stack gap={5}>
                  <Title fz={24} fw={600}>
                    My Orders
                  </Title>
                  <Text>View and track your orders</Text>
                </Stack>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Flex justify={"space-between"} align={"center"}>
                    <Stack gap={0}>
                      <Group
                        //   position= "apart"
                        mb="xs"
                      >
                        <Text fw={500}>ORD-12345</Text>
                        <Badge color="#dcfce7" c={"green"}>
                          Delivered
                        </Badge>
                      </Group>

                      <Text color="dimmed" size="sm">
                        March 15, 2023
                      </Text>
                    </Stack>
                    <Text fw={500}>$599.99</Text>
                  </Flex>

                  <Divider my="sm" />
                  <Stack gap={8}>
                    <Flex justify={"space-between"}>
                      <Text>Carrara White Marble x 2</Text>
                      <Text color="dimmed" size="md">
                        $259.98
                      </Text>
                    </Flex>
                    <Flex justify={"space-between"}>
                      <Text>Black Galaxy Granite x 1</Text>
                      <Text color="dimmed" fz={16}>
                        $89.99
                      </Text>
                    </Flex>
                    <Group justify="end" mt={5}>
                      <Button
                        bg={"transparent"}
                        c={"black"}
                        style={{ border: "1px solid #e6e9e9ff" }}
                      >
                        View Details
                      </Button>
                    </Group>
                  </Stack>
                </Card>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Flex justify={"space-between"} align={"center"}>
                    <Stack gap={0}>
                      <Group
                        //   position= "apart"
                        mb="xs"
                      >
                        <Text fw={500}>ORD-12346</Text>
                        <Badge color="#dbeafe" c={"#1e5dcb"}>
                          Processing
                        </Badge>
                      </Group>

                      <Text color="dimmed" size="sm">
                        February 28, 2023
                      </Text>
                    </Stack>
                    <Text fw={500}>$249.99</Text>
                  </Flex>

                  <Divider my="sm" />
                  <Stack gap={8}>
                    <Flex justify={"space-between"}>
                      <Text>Calacatta Gold Marble × 1</Text>
                      <Text color="dimmed" size="md">
                        $249.99
                      </Text>
                    </Flex>

                    <Group justify="end" mt={5}>
                      <Button
                        bg={"transparent"}
                        c={"black"}
                        style={{ border: "1px solid #e6e9e9ff" }}
                      >
                        View Details
                      </Button>
                    </Group>
                  </Stack>
                </Card>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
      <WhyChooseUs />
      <Footer />
    </>
  );

};

export default MyOrders;