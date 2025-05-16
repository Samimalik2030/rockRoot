import React, { useEffect, useState } from "react";
import {
  AppShell,
  Avatar,
  Box,
  Flex,
  Group,
  NavLink,
  Stack,
  Title,
  Text,
  Anchor,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import IconBriefcase from "../assets/icons/IconBriefcase";
import IconBrandMasterCard from "../assets/icons/IconBrandMasterCard";
import IconSettings from "../assets/icons/IconSettings";
import IconArrowRight from "../assets/icons/IconArrowRight";
import { modals } from "@mantine/modals";
import IconCart from "../assets/icons/IconCart";
import IconCards from "../assets/icons/IconCards";
import IconWallet from "../assets/icons/IconWallet";
import IconUserQuestion from "../assets/icons/IconUserQuestion";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(true);

  const [opened, { toggle }] = useDisclosure();

  const mechanicRoutes = [
    {
      label: "Analytics",
      link: "/dashboard/analytics",
      icon: (
        <IconBriefcase
          color={
            location.pathname === "/dashboard/analytics" ? "white" : "black"
          }
        />
      ),
    },
    {
      label: "Products",
      link: "/dashboard/products",
      icon: (
        <IconWallet
          color={
            location.pathname === "/dashboard/products" ? "white" : "black"
          }
        />
      ),
    },

    {
      label: "Projects",
      link: "/dashboard/projects",
      icon: (
        <IconCards
          color={
            location.pathname === "/dashboard/projects" ? "white" : "black"
          }
        />
      ),
    },
    {
      label: "Support",
      link: "/dashboard/support",
      icon: (
        <IconUserQuestion
          color={
            location.pathname === "/dashboard/support" ? "white" : "black"
          }
        />
      ),
    },
  ];
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null;

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

  console.log(user, "user");

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Flex justify={"space-between"} align={"center"} px={"lg"}>
          <Group
            gap={0}
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <Title
              order={5}
              style={{
                fontFamily: "cursive",
                cursor: "pointer",
              }}
            >
              RAJPUT MARBLE'S & GRANITE
            </Title>
          </Group>
          <Flex gap={"xl"} align={"center"}>
            <Flex gap={8} align={"center"}>
              <Avatar h={50} w={50} src={user?.profileImage?.url} />
              <Box>
                <Text fz={14} truncate w={100} lh={1}>
                  {user?.fullName}
                </Text>
                <Text truncate w={100} fz={12} lh={1}>
                  {user?.email}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar
        p="md"
        style={{
          borderRadius: "20px",
        }}
      >
        <Flex direction={"column"} h={"100%"} justify={"space-between"}>
          <Stack gap={"xs"}>
            {mechanicRoutes.map((route) => (
              <NavLink
                key={route.link}
                label={route.label}
                leftSection={route.icon}
                active={location.pathname === route.link}
                onClick={() => navigate(route.link)}
                style={{
                  backgroundColor:
                    location.pathname === route.link
                      ? "#f59f00"
                      : "transparent",
                  color: location.pathname === route.link ? "white" : "black",
                  borderRadius: "10px",
                }}
              />
            ))}
          </Stack>

          <Flex
            gap={0}
            style={{
              cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#f0f0f0")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
            onClick={openLogoutModal}
          >
            <Avatar src={user?.profileImage?.url} />
            <Group gap={0} justify="space-between" w={"100%"}>
              <NavLink
                w={80}
                label="LogOut"
                style={{
                  fontWeight: 600,
                }}
              />
              <IconArrowRight />
            </Group>
          </Flex>
        </Flex>
      </AppShell.Navbar>

      <AppShell.Main bg={"#f4f5f7"}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default Dashboard;
