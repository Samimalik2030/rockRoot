import {
  Box,
  Button,
  Card,
  Text,
  Center,
  Flex,
  Stack,
  Title,
  Image,
  Container,
  PinInput,
  Group,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";

import { useMediaQuery } from "@mantine/hooks";
import { useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";
import api from "../api";
import Logo from "../assets/Logo";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [loading, setLoading] = useState<boolean>(false);
  const isSmallScreen = useMediaQuery("(max-width: 56.25em)");
  const validateSchema = yup.object({
    otp: yup
      .string()
      .matches(/^\d{6}$/, "OTP must be a 6-digit number")
      .required("OTP is required"),
  });

  const form = useForm({
    initialValues: {
      otp: "",
      type:"Forgot Password"
    },
    validate: yupResolver(validateSchema),
  });
  async function handleSubmit() {
    try {
      setLoading(true);

      const response = await api.post("/auth/verify-otp", {
        ...form.values,
        email: state.email,
      });
      setLoading(false);

      if (response.data) {
        navigate("/reset-password", {
          state: {
            email: state.email,
            otp: form.values.otp,
          },
        });
      }
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <>
      <Container fluid h={"100vh"} w={"100vw"} p={10}>
        <Flex>
          <Card
            p={6}
            w={"50%"}
            h={"98vh"}
            display={isSmallScreen ? "none" : "block"}
          >
            <Image
              radius={20}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={
                "https://images.unsplash.com/photo-1659354116227-bbfde3fbd73f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hcmJsZSUyMHJvb21zfGVufDB8MXwwfHx8MA%3D%3D"
               

              }
            />
          </Card>

          <Card
            style={{
              background: "linear-gradient(to bottom, #eaffd1ff, #edfffd)",
              overflow: "auto",
            }}
            w={isSmallScreen ? "100%" : "50%"}
            h={"98vh"}
            radius={20}
          >
            <Flex justify={"end"} align={"center"} gap={15} px={20}>
              <Text fw={400} fz={16}>
                Remeber account?
              </Text>
              <Button
                fw={600}
                fz={16}
                style={{ border: "1px solid #2A8C82" }}
                bg={"transparent"}
                c={"#2A8C82"}
                w={151}
                h={41}
                onClick={() => navigate("/sign-in")}
              >
                Sign In
              </Button>
            </Flex>
            <Center h={"100%"}>
              <Card w={"80%"} bg={"transparent"}>
                <Flex justify={"center"}>
                  <Logo/>
                </Flex>

                <Stack gap={8}>
                  <Title fw={600} fz={25} ta={"center"}>
                    Forgot <span style={{ color: "#2A8C82" }}>Password</span>
                  </Title>
                  <Text ta={"center"} fw={400} fz={21}>
                    Enter otp to recover your account
                  </Text>
                </Stack>
                <form onSubmit={form.onSubmit(() => handleSubmit())}>
                  <Stack gap={13} mt={7}>
                    <Flex w={"100%"} justify="center">
                      <PinInput
                        length={6}
                        size="md"
                        radius={16}
                        {...form.getInputProps("otp")}
                      />
                    </Flex>

                    <Button
                      fw={600}
                      fz={16}
                      w={"100%"}
                      mt={7}
                      h={42}
                      radius={16}
                      bg={"#2A8C82"}
                      type="submit"
                      loading={loading}
                    >
                      Next
                    </Button>
                  </Stack>
                </form>
              </Card>
            </Center>
          </Card>
        </Flex>
      </Container>
    </>
  );
};
export default VerifyOtp;
