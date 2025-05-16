import {
  Box,
  Button,
  Card,
  Text,
  Center,
  Flex,
  Stack,
  TextInput,
  Title,
  Image,
  Container,
  Group,
  PasswordInput,
  Anchor,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api";
import Logo from "../assets/Logo";

const SignIn = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width: 56.25em)");
  const [loading, setLoading] = useState<boolean>(false);

  const validateSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: yupResolver(validateSchema),
  });

  async function handleSubmit() {
    try {
      setLoading(true);
      const response = await api.post("/auth/sign-in", form.values);
      setLoading(false);

      if (!response) return;
      if (!response.data) return;
      if (!response.data.user) return;

      if (response.data) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        if (response.data.user.role === "Customer") {
          navigate("/");
        } else if (response.data.user.role === "Admin") {
          navigate("/dashboard/analytics");
        }
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
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
                Don't have an account?
              </Text>
              <Button
                fw={600}
                fz={16}
                style={{ border: "1px solid #2A8C82" }}
                bg={"transparent"}
                c={"#2A8C82"}
                w={151}
                h={41}
                onClick={() => navigate("/sign-up")}
              >
                Sign Up
              </Button>
            </Flex>
            <Center h={"100%"}>
              <Card w={"80%"} bg={"transparent"}>
                <Flex justify={"center"}>
                  <Logo />
                </Flex>
                <Stack gap={8}>
                  <Title fw={600} fz={25} ta={"center"}>
                    Sign <span style={{ color: "#2A8C82" }}>In</span>
                  </Title>
                  <Text ta={"center"} fw={400} fz={21}>
                    Sign in if you have an account
                  </Text>
                </Stack>
                <form onSubmit={form.onSubmit(() => handleSubmit())}>
                  <Stack gap={13} mt={7}>
                    <TextInput
                      fw={300}
                      fz={9}
                      c={"#6d7572"}
                      label="Your Email"
                      placeholder="Enter Your Email"
                      size="md"
                      w={"100%"}
                      radius={16}
                      {...form.getInputProps("email")}
                    />
                    <PasswordInput
                      fw={300}
                      fz={9}
                      c={"#6d7572"}
                      label=" Password"
                      placeholder="Enter Your Password"
                      size="md"
                      w={"100%"}
                      radius={16}
                      {...form.getInputProps("password")}
                    />
                    <Group justify="end">
                      <Anchor onClick={() => navigate("/forgot-password")}>
                        Forgot Password?
                      </Anchor>
                    </Group>

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
                      Sign In
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
export default SignIn;
