import {
  ActionIcon,
  Anchor,
  Burger,
  Button,
  Card,
  Container,
  Drawer,
  Flex,
  Group,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import IconCart from "../assets/icons/IconCart";
import IconHeart from "../assets/icons/IconHeart";
import IconUser from "../assets/icons/IconUser";
import { IUser } from "../interfaces/IUser";

const navigationLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  // { title: "Collection", href: "/collections" },
  { title: "Products", href: "/products" },
  { title: "Room Ideas", href: "/room-ideas" },

  { title: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const user: IUser | null = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null;

  const location = useLocation();
  const navigate = useNavigate();
  const [opened, { toggle, close }] = useDisclosure(false);
  const handleClick = () => {
    if (!user) {
      navigate("/sign-in");
    } else {
      navigate("/account");
    }
  };
  return (
    <>
      <Container fluid p={0}>
        <Card shadow="xl" p={"lg"}>
          <Flex
            gap="md"
            justify="space-between"
            align="center"
            direction={{ base: "row", sm: "row" }}
          >
            <Group gap="md">
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />
              <Title order={3} style={{ whiteSpace: "nowrap" }}>
                RAJPUT MARBLE'S & GRANITE
              </Title>
            </Group>

            <Group gap="md" visibleFrom="sm">
              {navigationLinks.map((nav) => (
                <Anchor
                  key={nav.href}
                  c={location.pathname === nav.href ? "yellow" : "black"}
                  fw={600}
                  onClick={() => navigate(nav.href)}
                  style={{ cursor: "pointer" }}
                >
                  {nav.title}
                </Anchor>
              ))}
            </Group>

            <Group gap="md">
              {user && user.role === "Admin" && (
                <Button
                size="sm"
                  variant="outline"
                  onClick={() => navigate("/dashboard/analytics")}
                >
                  Dashboard
                </Button>
              )}
              {user && user.role === "Customer" && (
                <ActionIcon
                  variant="transparent"
                  onClick={() => navigate("/cart")}
                >
                  <IconHeart color="black" />
                </ActionIcon>
              )}
              <ActionIcon onClick={() => handleClick()} variant="transparent">
                <IconUser color="black" />
              </ActionIcon>
              {user && user.role === "Customer" && (
                <ActionIcon
                  onClick={() => navigate("/cart")}
                  variant="transparent"
                >
                  <IconCart color="black" />
                </ActionIcon>
              )}
            </Group>
          </Flex>
        </Card>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        title="Menu"
        padding="md"
        size="sm"
        hiddenFrom="sm"
        zIndex={200}
      >
        <Flex direction="column" gap="md">
          {navigationLinks.map((nav) => (
            <Anchor
              key={nav.href}
              fw={600}
              onClick={() => {
                navigate(nav.href);
                close();
              }}
              style={{ cursor: "pointer" }}
            >
              {nav.title}
            </Anchor>
          ))}
        </Flex>
      </Drawer>
    </>
  );
}
