import {
  Container,
  Grid,
  Card,
  Flex,
  TextInput,
  Stack,
  Group,
  Text,
  Title,
  Divider,
  Button,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { OrderSummary } from "../interfaces/OrderSummary";
import { IUser } from "../interfaces/IUser";
import api from "../api";
import { getPublicIP } from "../constants/PublicIpAdress";
import { ICart } from "../interfaces/Cart";
import { useNavigate } from "react-router-dom";
// import { modals } from "@mantine/modals";

function CheckOut() {
  const largeScreen = useMediaQuery("(min-width: 56.25em)");
  const [summary, setSummary] = useState<OrderSummary | null>(null);
  const user: IUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null;

  const [carts, setCarts] = useState<ICart[]>([]);
  const navigate = useNavigate();
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

  const getSummary = async () => {
    try {
      const { data } = await api.get(`carts/summary/${user._id}`); // <-- added slash /
      if (data) {
        setSummary(data);
      } else {
        setSummary(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCarts();
    getSummary();
  }, []);

  const form = useForm({
    initialValues: {
      address: "",
      apartment: "",
      city: "",
      state: "",
      zip: "",
      cardNumber: "",
      expiry: "",
      cvc: "",
      nameOnCard: "",
    },
  });

  const handleBuy = async () => {
    const productsName = carts.map((cart, ind) => cart.product.name);
    {
      if (summary?.total !== undefined && summary?.total !== null) {
        localStorage.setItem("totalPrice", summary.total.toString());
      }
      const response = await api.post("/orders", {
        address: { ...form.values },
        products: productsName,
        user: user._id,
        ...summary,
      });
      if (response.data) {
        navigate('/account/orders');
      }
    }
  };
  return (
    <>
      <Navbar />
      <Container
        // bg={"#f2f4f8ff"}
        w={"100vw"}
        fluid
        px={largeScreen ? 40 : 12}
        py={80}
        style={{ border: "2px solid #e2e8f0" }}
      >
        <Grid>
          <Grid.Col span={largeScreen ? 8 : 12}>
            <Card padding="lg" radius="md" bg={"transparent"} withBorder>
              {/* <form onSubmit={form.onSubmit(handlePay)}> */}
              <Stack>
                <Title fz={20} fw={700}>
                  Shipping Address
                </Title>

                <TextInput
                  label="Address"
                  placeholder="Your address"
                  {...form.getInputProps("address")}
                />

                <TextInput
                  label="Apartment, suite, etc. (optional)"
                  placeholder=""
                  {...form.getInputProps("apartment")}
                />

                <Flex
                  gap={largeScreen ? 30 : 10}
                  wrap={largeScreen ? "nowrap" : "wrap"}
                >
                  <TextInput
                    w={largeScreen ? "50%" : "100%"}
                    label="City"
                    placeholder=""
                    {...form.getInputProps("city")}
                  />
                  <TextInput
                    w={largeScreen ? "50%" : "100%"}
                    label="State"
                    placeholder=""
                    {...form.getInputProps("state")}
                  />
                  <TextInput
                    w={largeScreen ? "50%" : "100%"}
                    label="Zip Code"
                    placeholder=""
                    {...form.getInputProps("zip")}
                  />
                </Flex>

                <Divider size={1} />

                <a
                  href="http://localhost:5173/payment-form"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleBuy()}
                >
                  <Button color="dark" mt="lg">
                    Submit & Pay
                  </Button>
                </a>
              </Stack>
              {/* </form> */}
            </Card>
          </Grid.Col>
          <Grid.Col span={largeScreen ? 4 : 12}>
            <Stack gap={30}>
              <Card shadow="sm" radius="md" withBorder px={"25px"} py={"40px"}>
                <Title order={3} mb="md">
                  Order Summary
                </Title>

                <Group mb="xs" justify="space-between">
                  <Text color="dimmed" fz={18} fw={500}>
                    Subtotal
                  </Text>
                  <Text fz={16} fw={500}>
                    {summary?.subtotal}
                  </Text>
                </Group>

                <Group mb="xs" justify="space-between">
                  <Text color="dimmed" fz={18} fw={500}>
                    Shipping
                  </Text>
                  <Text fz={16} fw={500}>
                    {summary?.shipping}
                  </Text>
                </Group>

                <Group mb="md" justify="space-between">
                  <Text color="dimmed" fz={18} fw={500}>
                    Tax
                  </Text>
                  <Text fz={16} fw={500}>
                    {summary?.tax}
                  </Text>
                </Group>

                <Divider mb="md" />

                <Group mb="lg" justify="space-between">
                  <Text fw={700} fz={18}>
                    Total
                  </Text>
                  <Text fw={700} fz={18}>
                    Rs. {summary?.total}
                  </Text>
                </Group>

                <Stack></Stack>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default CheckOut;
