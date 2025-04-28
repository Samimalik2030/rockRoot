import {
  Button,
  Card,
  Container,
  Grid,
  Group,
  NumberInput,
  Stack,
  Image,
  Text,
  Title,
  Divider,
  TextInput,
  Box,
} from "@mantine/core";
import IconTrash from "../assets/icons/IconTrash";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import api from "../api";
import { IUser } from "../interfaces/IUser";
import { ICart } from "../interfaces/Cart";

export default function Cart() {
  const user: IUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null;
  const [carts, setCarts] = useState<ICart[]>([]);
  const [quantity, setQuantity] = useState(10);

  const getCarts = async () => {
    try {
      const { data } = await api.get(`carts/${user._id}`);
      if (data) {
        setCarts(data);
      } else {
        setCarts([]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCarts();
  }, []);

  const handleDeleteCart = async (cartId: string) => {
    try {
    const {data} =  await api.delete(`carts/${cartId}`);
    if(data){
      getCarts()
    }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <Container fluid>
        <Grid w={"100%"} px={50}>
          <Grid.Col span={8} p={"lg"}>
            <Title order={2}>Your Cart</Title>

            <Box
              mt={40}
              h={600}
              style={{
                overflowY: "auto",
              }}
            >
              <Card withBorder radius="md" p="md" mx="auto">
                <Title order={4}>Shopping Cart ({carts.length}items)</Title>
                {carts.map((cart, ind) => (
                  <>
                    <Card h={200}>
                      <Group align="flex-start" gap="md">
                        <Image
                          src={cart.product.image.url} // replace with marble image URL
                          alt="Carrara White Marble"
                          radius="md"
                          w={100}
                          h={100}
                          fit="cover"
                        />

                        <Stack gap={4} flex={1}>
                          <Text fw={600} size="lg">
                            {cart.product.name}
                          </Text>
                          <Text size="sm" c="dimmed">
                            Size: {cart.product.dimensions}
                          </Text>
                          <Text size="sm" c="dimmed">
                            Thickness: {cart.product.thickness}
                          </Text>
                          <Text size="sm" c="dimmed">
                            Finish: {cart.product.finish}
                          </Text>
                          <Text size="sm" c="dimmed">
                            quantity: {cart.quantity}
                          </Text>

                          {/* <Group mt="sm" gap="xs">
                            <Button
                              variant="default"
                              size="compact-sm"
                              onClick={() =>
                                setQuantity((q) => Math.max(1, q - 1))
                              }
                            >
                              -
                            </Button>
                            <NumberInput
                              value={cart.quantity}
                              onChange={(val) => setQuantity(Number(val))}
                              min={1}
                              hideControls
                              w={60}
                              styles={{ input: { textAlign: "center" } }}
                            />
                            <Button
                              variant="default"
                              size="compact-sm"
                              onClick={() => setQuantity((q) => q + 1)}
                            >
                              +
                            </Button>
                          </Group> */}
                        </Stack>

                        <Stack align="flex-end" gap="xs">
                          <Text fw={600} size="lg">
                            ${(cart.product.price).toFixed(2)}
                          </Text>
                          <Text size="sm" c="dimmed">
                            $129.99 per sq ft
                          </Text>
                          <Button
                            variant="subtle"
                            color="red"
                            leftSection={<IconTrash size={16} />}
                            size="xs"
                            mt="auto"
                            onClick={()=>handleDeleteCart(cart._id)}
                          >
                            Remove
                          </Button>
                        </Stack>
                      </Group>
                    </Card>
                  </>
                ))}
              </Card>
            </Box>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card
              shadow="sm"
              radius="md"
              withBorder
              px={"25px"}
              py={"40px"}
              mt={90}
            >
              <Title order={3} mb="md">
                Order Summary
              </Title>

              <Group mb="xs" justify="space-between">
                <Text color="dimmed" fz={18} fw={500}>
                  Subtotal
                </Text>
                <Text fz={16} fw={500}>
                  $2649.75
                </Text>
              </Group>

              <Group mb="xs" justify="space-between">
                <Text color="dimmed" fz={18} fw={500}>
                  Shipping
                </Text>
                <Text fz={16} fw={500}>
                  $4.99
                </Text>
              </Group>

              <Group mb="md" justify="space-between">
                <Text color="dimmed" fz={18} fw={500}>
                  Tax
                </Text>
                <Text fz={16} fw={500}>
                  $211.98
                </Text>
              </Group>

              <Divider mb="md" />

              <Group mb="lg" justify="space-between">
                <Text fw={700} fz={18}>
                  Total
                </Text>
                <Text fw={700} fz={18}>
                  $2866.72
                </Text>
              </Group>

              <Stack>
                <Button fullWidth color="orange" radius={6} c={"black"} h={42}>
                  Proceed to Checkout →
                </Button>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
      <Box>
        <Footer />
      </Box>
    </>
  );
}
