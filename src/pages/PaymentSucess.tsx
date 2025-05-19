import { useEffect, useState } from "react";
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Card,
  Center,
  Stack,
  Image,
  Box,
} from "@mantine/core";

export default function PaymentSucess() {
  return <ErrorMessageCard />;
}

function ErrorMessageCard() {
  const [showRedirectMessage, setShowRedirectMessage] = useState(false);

  useEffect(() => {
    const messageTimer = setTimeout(() => {
      setShowRedirectMessage(true);
    }, 2000); // show redirect message after 2 seconds

    const closeTimer = setTimeout(() => {
      window.close();
      // OR fallback:
      // window.location.href = "http://localhost:5173";
    }, 4000); // close after 3 seconds

    return () => {
      clearTimeout(messageTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  return (
    <Center h="100vh" bg="#f5f5f5">
      <Card h={"70%"} w={"50%"} withBorder>
        <Center h={"100%"} w={"100%"}>
          <Box>
            <Image
              h={23}
              w={120}
              src="https://ipguat.apps.net.pk/Ecommerce/Flows/img/payfast-logo.png"
            />
            <Card
              shadow="md"
              padding="xl"
              radius="md"
              withBorder
              style={{ width: 500 }}
              mt={2}
            >
              <Stack align="center" gap="md">
                {!showRedirectMessage && (
                  <Text size="xl" fw={700}>
                    Success Message
                  </Text>
                )}
                {!showRedirectMessage && (
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRTdbajs_z5rzY_YDafSrYC4ZYo8jRgJnHLw&s"
                    alt="Success Icon"
                    w={100}
                    h={100}
                  />
                )}

                {!showRedirectMessage && (
                  <Text size="md" ta="center" c="green" fw={500}>
                    Your transaction has been completed
                  </Text>
                )}

                {showRedirectMessage && (
                  <>
                  <Title order={3}>
                    Product has been purchased!
                  </Title>
                  <Text  ta="center" c="gray">
                    Redirecting you to Marbles and Granite.....
                  </Text>
                  </>

                )}
              </Stack>
            </Card>
          </Box>
        </Center>
      </Card>
    </Center>
  );
}
