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
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { modals } from "@mantine/modals";
import Navbar from "../components/Navbar";
import WhyChooseUs from "../components/WhyChooseUs";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { IUser } from "../interfaces/IUser";

function MyAccount() {
  const navigate = useNavigate();
  const location = useLocation();
  const user: IUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null;
  const currentPath = location.pathname;
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

  const isAdmin = user.role === "Admin";

  return (
    <>
      <Navbar />
      <Container
        bg={"#f2f4f8ff"}
        w={"100vw"}
        fluid
        px={40}
        py={80}
        style={{ border: "2px solid #e2e8f0" }}
      >
        <Grid>
          <Grid.Col
            span={{
              base: 12,
              xs: 12,
              sm: 3,
              md: 3,
              lg: 3,
              xl: 3,
            }}
          >
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
                    {user.fullName}
                  </Text>
                </Flex>

                {/* Navigation Links */}
                <Stack gap={2} mt="sm">
                  <NavLink
                    label="Orders"
                    leftSection={<CheckIcon />}
                    active={currentPath.includes("/account/orders")}
                    onClick={() => navigate("/account/orders")}
                  />

                  {!isAdmin && (
                    <NavLink
                      label="Wishlist"
                      leftSection={<CheckIcon />}
                      active={currentPath.includes("/account/wishlist")}
                      onClick={() => navigate("/account/wishlist")}
                    />
                  )}

                  <NavLink
                    label="Settings"
                    leftSection={<CheckIcon />}
                    active={currentPath.includes("/account/settings")}
                    onClick={() => navigate("/account/settings")}
                  />
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
          <Grid.Col
            span={{
              base: 12,
              xs: 12,
              sm: 9,
              md: 9,
              lg: 9,
              xl: 9,
            }}
          >
            <Outlet />
          </Grid.Col>
        </Grid>
      </Container>
      <WhyChooseUs />
      <Footer />
    </>
  );
}

export default MyAccount;
