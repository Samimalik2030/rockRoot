import {
  Grid,
  Group,
  Badge,
  ActionIcon,
  rem,
  Stack,
  Text,
  Image,
  Card,
  Container,
  Button,
  CheckIcon,
  SegmentedControl,
  Select,
  TextInput,
  Title,
  NumberInput,
  Box,
  Paper,
} from "@mantine/core";
import IconHeart from "../assets/icons/IconHeart";
import IconStar from "../assets/icons/IconStar";
import { useLocation, useNavigate } from "react-router-dom";
import { Product } from "../interfaces/Product";
import Navbar from "../components/Navbar";
import { useForm } from "@mantine/form";
import api from "../api";
import { useState } from "react";
import IconArrowLeft from "../assets/icons/IconArrowLeft";
interface CostSummary {
  estimatedPrice: number;
  estimatedProducts: number;
  area: number;
  productArea: number;
  products: number;
}
export function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate()
  const product: Product = location.state.product;
  const [summary, setSummary] = useState<CostSummary | undefined>(undefined);
  const form = useForm({
    initialValues: {
      length: 0,
      width: 0,
    },
  });

  const handleSubmit = async () => {
    const response = await api.post("/products/estimate", {
      ...form.values,
      id: product._id,
    });
    if (response.data) {
      setSummary(response.data);
    }
  };
  return (
    <>
      <Navbar />

      <Container fluid px={"xl"}>
        <ActionIcon variant="subtle" mt={12} onClick={()=>navigate(-1)}>
          <IconArrowLeft/>
        </ActionIcon>
        <Grid w={"100%"}>
          <Grid.Col
            span={{
              base: 12,
              sm: 12,
              xs: 12,
              md: 4,
              lg: 4,
              xl: 4,
            }}
          >
            <Card withBorder mt={12}>
              {/* Product Image */}
              <div
                style={{
                  height: rem(250),
                  borderRadius: rem(12),
                  backgroundColor: "#f1f5f9",
                  marginBottom: rem(16),
                  position: "relative",
                  overflow: "hidden", // Important to clip the button inside the div
                }}
              >
                <Image
                  src={product?.image?.url}
                  alt="Image"
                  fit="cover"
                  radius="md"
                  height={250}
                  fallbackSrc="https://via.placeholder.com/260x150?text=Marble"
                />
              </div>

              {/* Country and Rating */}
              <Group gap="xs" mb="xs">
                <Badge color="gray" variant="light" radius="xl">
                  Pakistan
                </Badge>
                <Group gap={4}>
                  <IconStar size={16} color="#fbbf24" fill="#fbbf24" />
                  <Text size="sm" fw={500}>
                    4.3
                  </Text>
                </Group>
              </Group>

              {/* Title & Description */}
              <Stack gap={2}>
                <Text fw={600}>{product.name}</Text>
                <Text size="sm" c="gray">
                  {product.description}
                </Text>
              </Stack>

              {/* Price & Details */}
              <Group justify="space-between" mt="md" align="center">
                <Text fw={600} size="lg">
                  Rs.{product.price.toFixed(2)}{" "}
               
                </Text>
              </Group>
            </Card>
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              sm: 12,
              xs: 12,
              md: 8,
              lg: 8,
              xl: 8,
            }}
          >
            <Card shadow="sm" padding="lg" radius="md" withBorder mt={12}>
              <Stack>
                <Title order={3}>Material Estimator</Title>
                <Text size="sm" c="dimmed">
                  Enter your project dimensions to calculate material
                  requirements
                </Text>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                  <Grid>
                    <Grid.Col span={6}>
                      <NumberInput
                        hideControls
                        label="Length (feet)"
                        placeholder="Enter length"
                        {...form.getInputProps("length")}
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <NumberInput
                        label="Width (feet)"
                        placeholder="Enter width"
                        hideControls
                        {...form.getInputProps("width")}
                      />
                    </Grid.Col>
                  </Grid>

                  <Group grow mt="md">
                    <Button
                      leftSection={<CheckIcon size={18} />}
                      color="orange"
                      type="submit"
                    >
                      Calculate
                    </Button>
                    <Button
                      variant="default"
                      color="gray"
                      onClick={() => {
                        form.reset(), setSummary(undefined);
                      }}
                    >
                      Reset
                    </Button>
                  </Group>
                </form>
              </Stack>
            </Card>

            <Card withBorder mt={12} shadow="xl">
              <Group justify="center">
                <Paper shadow="xl" p={"xl"}>
                  <Stack>
                    <Title order={3}>Material Estimated Cost</Title>
                    {summary ? (
                      <Text size="sm" c="dimmed">
                        Here is the brief detail of estimated values
                      </Text>
                    ) : (
                      <Text size="sm" c="dimmed">
                        Here will be the details of your Estimation
                      </Text>
                    )}
                    {summary && (
                      <>
                        <Group>
                          <Box>
                            <Title order={6} c={"dimmed"}>
                              Your coverd area in inches
                            </Title>
                            <Text>{summary?.area} inches</Text>
                          </Box>
                          <Box>
                            <Title order={6} c={"dimmed"}>
                              Coverd area of product in inches
                            </Title>
                            <Text>{summary?.productArea} inches</Text>
                          </Box>
                        </Group>
                        <Group>
                          <Box>
                            <Title order={6} c={"dimmed"}>
                              Total Products that will be used in your Area
                            </Title>
                            <Text>{summary?.estimatedProducts}</Text>
                          </Box>
                        </Group>
                        <Box>
                          <Title order={4} ta={"center"}>
                            Total Estimated Cost
                          </Title>
                          <Title ta={"center"} order={6}>
                            Rs.{summary?.estimatedPrice}
                          </Title>
                        </Box>
                      </>
                    )}
                  </Stack>
                </Paper>
              </Group>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
