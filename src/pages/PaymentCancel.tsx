import {
  Text,
  Card,
  Center,
  Stack,
  Image,
  Box,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function PaymentCancel() {
  const navigate = useNavigate();
  return <ErrorMessageCard />;
}

function ErrorMessageCard() {
  const [showRedirectMessage, setShowRedirectMessage] = useState(false);

  useEffect(() => {
    const messageTimer = setTimeout(() => {
      setShowRedirectMessage(true);
    }, 2000); // Show redirect message after 2 seconds

    const closeTimer = setTimeout(() => {
      window.close(); // Try to close tab
    }, 4000); // Close after 3 seconds

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
               

                {
                  !showRedirectMessage && (
                    <>
                     <Text size="xl" fw={700}>
                  Error Message
                </Text>
                    <Image
                  src="https://ipguat.apps.net.pk/Ecommerce/Flows/img/svg/error-icon.svg"
                  alt="Error Icon"
                  w={100}
                  h={100}
                />

                <Text size="md" ta="center" c="red" fw={500}>
                  Your transaction cannot be processed at this moment.
                </Text>
                    </>
                  )
                }

                {showRedirectMessage && (
                  <Text size="lg" fw={600} ta="center" c="gray">
                    Redirecting you to Marbles and Granite.....
                  </Text>
                )}
              </Stack>
            </Card>
          </Box>
        </Center>
      </Card>
    </Center>
  );
}
