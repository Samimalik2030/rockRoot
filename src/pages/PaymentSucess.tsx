// src/pages/payment-cancel.tsx (or /payment-cancel.jsx)

import { Container, Title, Text, Button } from "@mantine/core";

export default function PaymentSucess() {
  return (
    <Container>
      <Title order={2}>Payment Sucess</Title>
      <Text mt="md" mb="md">
        Unfortunately, your payment could not be verified. Please try again.
      </Text>
      <Button >
        Back to Home
      </Button>
    </Container>
  );
}
