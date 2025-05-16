// src/pages/payment-cancel.tsx (or /payment-cancel.jsx)

import { Container, Title, Text, Button, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function PaymentCancel() {
  const navigate = useNavigate()
  return (
    <Container fluid>
      <Navbar/>
      <Title order={2} ta={'center'} mt={12}>Payment Failed</Title>
      <Text mt="md" mb="md" ta={'center'}>
        Unfortunately, your payment could not be verified. Please try again.
      </Text>
      <Group justify="center">
        <Button onClick={()=>navigate('/')}>
        Back to Home
      </Button>
      </Group>
    </Container>
  );
}
