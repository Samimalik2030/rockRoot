import {
  Card,
  Stack,
  Flex,
  Group,
  Badge,
  Divider,
  Button,
  Text,
  Title,
  Box,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { IUser } from "../interfaces/IUser";
import api from "../api";
import { Order } from "../interfaces/OrderSummary";

export default function MyOrders() {
  const user: IUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null;

  const [orders, setOrders] = useState<Order[]>([]);
  const getMyOrders = async () => {
    const response = await api.get(`/orders/${user._id}`);
    if (response.data) {
      setOrders(response.data);
    }
  };
  useEffect(() => {
    getMyOrders();
  });
  return (
    <>
      <Card>
        <Stack>
          <Stack gap={5}>
            <Title fz={24} fw={600}>
              My Orders
            </Title>
            <Text>View and track your orders</Text>
          </Stack>
          {orders.map((order, ind) => (
            <>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Flex justify={"space-between"} align={"center"}>
                  <Stack gap={0}>
                    <Group
                      //   position= "apart"
                      mb="xs"
                    >
                      <Text fw={500}>ORD-{order.code}</Text>
                      <Badge color="#dbeafe" c={"#1e5dcb"}>
                        {order.status}
                      </Badge>
                    </Group>
                    <Box>
                      <Text>Products:</Text>
                      <Text>{order.products.map((p)=>p)}</Text>

                    </Box>
                    <Text c="dimmed" size="sm">
                      {new Date(order.createdAt).toLocaleString()}
                    </Text>
                  </Stack>
                  <Text fw={500}>Rs.{order.total}</Text>
                </Flex>

                <Divider my="sm" />
              </Card>
            </>
          ))}
        </Stack>
      </Card>
    </>
  );
}
