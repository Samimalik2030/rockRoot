// PaymentForm.tsx
import React, { useState } from "react";
import {
  Card,
  Text,
  TextInput,
  Select,
  Button,
  Grid,
  Group,
  Title,
  Divider,
  Stack,
  Image,
  Container,
  NumberInput,
} from "@mantine/core";
import IconBuildingBank from "../assets/icons/IconBuildingBank";
import IconCreditCardPay from "../assets/icons/IconCreditCardPay";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";

export default function PaymentForm() {
  const totalPrice = localStorage.getItem("totalPrice");
  const [active, setActive] = useState(1);
  const form = useForm({
    initialValues: {
      // Card
      cardNumber: "",
      cvv: "",
      expMonth: "",
      expYear: "",

      // Bank
      selectedBank: "",
      bankAccount: "",
      bankCnic: "",

      // Wallet
      walletName: "",
      walletNumber: "",
      walletCnic: "",

      // Raast
      raastId: "",
    },
  });
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/payment-sucess");
  };
  return (
    <Container fluid px={90} py={12}>
      <Image
        h={23}
        w={120}
        src="https://ipguat.apps.net.pk/Ecommerce/Flows/img/payfast-logo.png"
      />
      <Grid gutter="lg" justify="center" align="flex-start" p="md">
        <Grid.Col span={7}>
          <Card shadow="sm" radius="md" withBorder>
            <Group grow mb="sm">
              <Button
                leftSection={<IconBuildingBank />}
                variant={active === 2 ? "filled" : "outline"}
                onClick={() => setActive(2)}
              >
                BANK ACCOUNT
              </Button>
              <Button
                leftSection={<IconCreditCardPay size={16} />}
                variant={active === 1 ? "filled" : "outline"}
                color="blue"
                onClick={() => setActive(1)}
              >
                CARD PAYMENT
              </Button>
              <Button
                onClick={() => setActive(3)}
                variant={active === 3 ? "filled" : "outline"}
              >
                WALLET & OTHERS
              </Button>
              <Button
                variant={active === 4 ? "filled" : "outline"}
                onClick={() => setActive(4)}
              >
                RAAST
              </Button>
            </Group>
            <form onSubmit={form.onSubmit(handleSubmit)}>
              {/* Card */}
              {active === 1 && (
                <>
                  <TextInput
                    label="Card Number"
                    placeholder="1234 5678 9012 3456"
                    radius="md"
                    mb="md"
                    rightSection={<IconCreditCardPay />}
                    required
                    {...form.getInputProps("cardNumber")}
                  />
                  <Group grow mb="md">
                    <TextInput
                      label="CVV Code"
                      placeholder="123"
                      radius="md"
                      required
                      {...form.getInputProps("cvv")}
                    />
                    <Select
                      label="Exp. Month"
                      placeholder="Month"
                      data={Array.from({ length: 12 }, (_, i) =>
                        `${i + 1}`.padStart(2, "0")
                      )}
                      radius="md"
                      required
                      {...form.getInputProps("expMonth")}
                    />
                    <Select
                      label="Exp. Year"
                      placeholder="Year"
                      data={Array.from({ length: 10 }, (_, i) => `${2025 + i}`)}
                      radius="md"
                      required
                      {...form.getInputProps("expYear")}
                    />
                  </Group>
                </>
              )}

              {/* Bank */}
              {active === 2 && (
                <>
                  <Select
                    label="Select Bank"
                    placeholder="Please Select Bank"
                    searchable
                    data={[
                      "Habib Bank Limited (HBL)",
                      "United Bank Limited (UBL)",
                      "National Bank of Pakistan (NBP)",
                      "MCB Bank Limited",
                      "Allied Bank Limited (ABL)",
                      "Bank Alfalah",
                      "Faysal Bank",
                      "Meezan Bank",
                      "Standard Chartered Bank Pakistan",
                      "Askari Bank",
                      "Bank Islami Pakistan",
                    ]}
                    rightSection={<IconCreditCardPay />}
                    required
                    {...form.getInputProps("selectedBank")}
                  />
                  <NumberInput
                    label="Account Number"
                    placeholder="1234567890123456"
                    radius="md"
                    mb="md"
                    required
                    {...form.getInputProps("bankAccount")}
                  />
                  <NumberInput
                    label="CNIC Number"
                    placeholder="1234567890123"
                    radius="md"
                    mb="md"
                    required
                    {...form.getInputProps("bankCnic")}
                  />
                </>
              )}

              {/* Wallet */}
              {active === 3 && (
                <>
                  <Select
                    label="Wallet Name"
                    placeholder="Please Select Wallet"
                    searchable
                    data={[
                      "Easypaisa",
                      "JazzCash",
                      "UPaisa",
                      "NayaPay",
                      "SadaPay",
                      "CMPECC Wallet",
                      "HBL Konnect",
                      "UBL Omni",
                    ]}
                    rightSection={<IconCreditCardPay />}
                    required
                    {...form.getInputProps("walletName")}
                  />
                  <NumberInput
                    label="Wallet Number"
                    placeholder="03123456789"
                    radius="md"
                    mb="md"
                    {...form.getInputProps("walletNumber")}
                  />
                  <NumberInput
                    label="CNIC Number"
                    placeholder="1234567890123"
                    radius="md"
                    mb="md"
                    required
                    {...form.getInputProps("walletCnic")}
                  />
                </>
              )}

              {/* Raast */}
              {active === 4 && (
                <>
                  <TextInput
                    label="Raast ID / IBAN"
                    placeholder="PK12ABCD1234567890123456"
                    radius="md"
                    mb="md"
                    required
                    {...form.getInputProps("raastId")}
                  />
                </>
              )}

              <Button
                fullWidth
                type="submit"
                size="md"
                color="indigo"
                radius="md"
              >
                MAKE PAYMENT PKR {totalPrice}
              </Button>

              <Text size="xs" color="red" mt="md">
                Disclaimer: Paypak customer: Please ensure PayPak card is
                activated for e-commerce. Please call your bank for further
                details.
              </Text>
              <Text size="xs" color="red" fw={700}>
                Attention! Please DO NOT press Back or Refresh this page! Your
                payment is being processed securely
              </Text>
            </form>
          </Card>
        </Grid.Col>

        <Grid.Col span={3}>
          <Card shadow="sm" radius="md" withBorder>
            <Title order={4} mb="sm">
              Payment Information
            </Title>
            <Stack gap="xs">
              <Text>Date: 2025-05-18</Text>
              <Text>Order Number: ITEM-AZI3</Text>
              <Text>Store Name: DEMO MERCHANT</Text>
              <Text>Amount: PKR {totalPrice}</Text>
              <Divider my="sm" />
              <Text>Summary: Test Transaction</Text>
              <Group grow mt="sm">
                <Button
                  variant="outline"
                  color="red"
                  onClick={() => navigate("/payment-failure")}
                >
                  CANCEL PAYMENT
                </Button>
              </Group>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
