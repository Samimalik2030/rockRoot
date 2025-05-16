import {
  Card,
  Stack,
  Title,
  Text,
  Group,
  Button,
  CheckIcon,
  Container,
  Grid,
  ThemeIcon,
  TextInput,
  Flex,
  Select,
  Textarea,
  Radio,
  BackgroundImage,
  Box,
} from "@mantine/core";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { modals } from "@mantine/modals";
import { useForm } from "@mantine/form";
import api from "../api";

function ContactUs() {
  const form = useForm({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      type: "general",
      subject: "",
      query: "",
    },

    validate: {
      username: (value) =>
        value.trim().length > 0 ? null : "Name is required",
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      phone: (value) =>
        value.trim().length > 0 ? null : "Phone number is required",
      type: (value) => (value ? null : "Inquiry type is required"),
      subject: (value) =>
        value.trim().length > 0 ? null : "Subject is required",
      query: (value) =>
        value.trim().length > 0 ? null : "Message is required",
    },
  });
  const handleSubmit = async () => {
    const response = await api.post("/inquiry", form.values);
    if (response.data) {
      form.reset();
    }
  };
  return (
    <>
      <Navbar />
      <Card p={0} radius="md" style={{ overflow: "hidden" }}>
        <BackgroundImage
          h={300}
          src="https://images.unsplash.com/photo-1740560051533-3acef26ace95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29udGFjdCUyMCUyMHBhZ2UlMjB1aXxlbnwwfDB8MHx8fDA%3D"
          style={{ position: "relative" }}
        >
          {/* Dark overlay */}
          <Box
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1,
            }}
          />

          {/* Centered Content */}
          <Flex
            justify="center"
            align="center"
            h="100%"
            style={{ position: "relative", zIndex: 2 }}
          >
            <Card w="50%" bg="transparent" shadow="none">
              <Stack mt={20} gap={15}>
            <Title fw={700} fz={52} ta={"center"} c={"white"}>
              Get In Touch
            </Title>
            <Text color="dimmed" fz={20} ta={"center"}>
              We'd love to hear from you. Reach out for any questions or to
              start your project.
            </Text>
          </Stack>
            </Card>
          </Flex>
        </BackgroundImage>
      </Card>

      <Stack>
       
        <Container
          bg={"#f2f4f8ff"}
          w={"100vw"}
          fluid
          px={40}
          py={80}
          style={{ border: "2px solid #e2e8f0" }}
        >
          <Grid>
            <Grid.Col span={8}>
              <Card>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                  <Flex gap={30}>
                    <TextInput
                      w="50%"
                      label="Full Name"
                      placeholder="Your name"
                      mb="sm"
                      {...form.getInputProps("username")}
                    />
                    <TextInput
                      w="50%"
                      label="Email"
                      placeholder="Your email"
                      type="email"
                      mb="sm"
                      {...form.getInputProps("email")}
                    />
                  </Flex>

                  <Flex gap={30}>
                    <TextInput
                      w="50%"
                      label="Phone Number"
                      placeholder="Your phone number"
                      mb="sm"
                      {...form.getInputProps("phone")}
                    />
                    <Select
                      w="50%"
                      label="Inquiry Type"
                      placeholder="General Inquiry"
                      data={[
                        { value: "general", label: "General Inquiry" },
                        { value: "sales", label: "Sales Inquiry" },
                        { value: "support", label: "Support" },
                        { value: "other", label: "Other" },
                      ]}
                      mb="sm"
                      {...form.getInputProps("type")}
                    />
                  </Flex>

                  <TextInput
                    label="Subject"
                    placeholder="How can we help you?"
                    mb="lg"
                    {...form.getInputProps("subject")}
                  />

                  <Textarea
                    label="Message"
                    placeholder="Your Message"
                    rows={6}
                    radius={8}
                    mb={12}
                    {...form.getInputProps("query")}
                  />

                  <Button
                    fullWidth
                    color="#ff9c07"
                    radius="5"
                    h={42}
                    type="submit"
                  >
                    Send
                  </Button>
                </form>
              </Card>
            </Grid.Col>
            <Grid.Col span={4}>
              <Stack gap={30}>
                <Card shadow="sm" px={25} py={40} radius="md" withBorder>
                  <Text fw={700} fz={24} mb="md">
                    Contact Information
                  </Text>

                  <Stack gap="xs">
                    <Group align="center" gap="sm">
                      <ThemeIcon color="#e8e9eb" size={40} radius="30">
                        <CheckIcon size={16} color="#ff9900" />
                      </ThemeIcon>
                      <div>
                        <Text fw={500} fz={18}>
                          Our Location
                        </Text>
                        <Text color="dimmed" size="sm">
                          123 Marble Avenue, Gulberg III
                        </Text>
                        <Text color="dimmed" size="sm">
                          Lahore, Punjab, Pakistan
                        </Text>
                      </div>
                    </Group>

                    <Group align="center" gap="sm">
                      <ThemeIcon color="#e8e9eb" size={40} radius="30">
                        <CheckIcon size={16} color="#ff9900" />
                      </ThemeIcon>
                      <div>
                        <Text fw={500} fz={18}>
                          Phone Number
                        </Text>
                        <Text color="dimmed" size="md">
                          +92 300 123 4567
                        </Text>
                        <Text color="dimmed" size="md">
                          +92 42 3456 7890
                        </Text>
                      </div>
                    </Group>

                    <Group align="center" gap="sm">
                      <ThemeIcon color="#e8e9eb" size={40} radius="30">
                        <CheckIcon size={16} color="#ff9900" />
                      </ThemeIcon>
                      <div>
                        <Text fw={500} fz={18}>
                          Email Address
                        </Text>
                        <Text color="dimmed" size="md">
                          info@rajputmarble.pk
                        </Text>
                        <Text color="dimmed" size="md">
                          sales@rajputmarble.pk
                        </Text>
                      </div>
                    </Group>

                    <Group align="center" gap="sm">
                      <ThemeIcon color="#e8e9eb" size={40} radius="30">
                        <CheckIcon size={16} color="#ff9900" />
                      </ThemeIcon>
                      <div>
                        <Text fw={500} fz={18}>
                          Business Hours
                        </Text>
                        <Text color="dimmed" size="md">
                          Monday - Friday: 9:00 AM - 6:00 PM
                        </Text>
                        <Text color="dimmed" size="md">
                          Saturday: 9:00 AM - 4:00 PM
                        </Text>
                        <Text color="dimmed" size="md">
                          Sunday: Closed
                        </Text>
                      </div>
                    </Group>
                  </Stack>
                </Card>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </Stack>
      <Footer />
    </>
  );
}

export default ContactUs;
