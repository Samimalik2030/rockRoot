import {
  Badge,
  Button,
  Card,
  Text,
  Grid,
  Group,
  Select,
  Table,
  Stack,
  Title,
  Box,
  Flex,
  ScrollArea,
  Image,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import CalendarIcon from "../assets/calendar-check.svg";

import CalculatorIcon from "../assets/calculator.svg";
import SettingsIcon from "../assets/settings-check.svg";
import RevenueChart from "../components/RevenueChart";

const Analytics = () => {
  const isMobile = useMediaQuery("(max-width: 56.25em)");
  const data = [
    {
      tenant: "John Doe",
      propertyName: "Sunset Villa",
      propertyType: "Apartment",
      project: "Phase 1",
      pricePerDay: 120,
      days: 5,
      totalAmount: 600,
      commission: 60,
      received: 540,
      paymentDate: "2025-04-10",
      status: "Paid",
    },
    {
      tenant: "John Doe",
      propertyName: "Sunset Villa",
      propertyType: "Apartment",
      project: "Phase 1",
      pricePerDay: 120,
      days: 5,
      totalAmount: 600,
      commission: 60,
      received: 540,
      paymentDate: "2025-04-10",
      status: "Paid",
    },
    {
      tenant: "John Doe",
      propertyName: "Sunset Villa",
      propertyType: "Apartment",
      project: "Phase 1",
      pricePerDay: 120,
      days: 5,
      totalAmount: 600,
      commission: 60,
      received: 540,
      paymentDate: "2025-04-10",
      status: "Paid",
    },
    {
      tenant: "John Doe",
      propertyName: "Sunset Villa",
      propertyType: "Apartment",
      project: "Phase 1",
      pricePerDay: 120,
      days: 5,
      totalAmount: 600,
      commission: 60,
      received: 540,
      paymentDate: "2025-04-10",
      status: "Paid",
    },
    // more items...
  ];

  const rows = data.map((item, index) => (
    <Table.Tr key={index}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{item.tenant}</Table.Td>
      <Table.Td>
        {item.propertyName} ({item.propertyType})
      </Table.Td>
      <Table.Td>{item.project}</Table.Td>
      <Table.Td>${item.pricePerDay}</Table.Td>
      <Table.Td>{item.days}</Table.Td>
      <Table.Td>${item.totalAmount}</Table.Td>
      <Table.Td>${item.commission}</Table.Td>
      <Table.Td>${item.received}</Table.Td>
      <Table.Td>{item.paymentDate}</Table.Td>
      <Table.Td>
        <Badge
          color="green"
          variant="outline"
          size={isMobile ? "xs" : "lg"}
          radius="md"
        >
          {item.status}
        </Badge>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <Grid p="md">
      <Grid.Col span={12}>
        <Grid>
          <Grid.Col
            span={{
              base: 12,
              sm: 6,
              md: 6,
              lg: 4,
              xl: 3,
            }}
          >
            <Card withBorder h={115}>
              <Flex gap="xs">
                <Box>
                  <Image src={CalendarIcon} />
                </Box>
                <Stack gap={0}>
                  <Text size="sm">Total Products</Text>
                  <Text size="xs" c="dimmed">
                    Your total produsts that have been listed
                  </Text>
                  <Title order={3}>12</Title>
                </Stack>
              </Flex>
            </Card>
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              sm: 6,
              md: 6,
              lg: 4,
              xl: 3,
            }}
          >
            <Card withBorder h={115}>
              <Flex gap="xs">
                <Box>
                  <Image src={SettingsIcon} />
                </Box>
                <Stack gap={0}>
                  <Text size="sm">Total Projects</Text>
                  <Text size="xs" c="dimmed">
                    Your total projects that have been done
                  </Text>
                  <Title order={3}>06</Title>
                </Stack>
              </Flex>
            </Card>
          </Grid.Col>

          <Grid.Col
            span={{
              base: 12,
              sm: 6,
              md: 6,
              lg: 4,
              xl: 3,
            }}
          >
            <Card withBorder h={115}>
              <Flex gap="xs">
                <Box>
                  <Image src={CalculatorIcon} />
                </Box>
                <Stack gap={0}>
                  <Text size="sm">Total Collections</Text>
                  <Text size="xs" c="dimmed">
                    Your total listed collections
                  </Text>
                  <Title order={3}>05</Title>
                </Stack>
              </Flex>
            </Card>
          </Grid.Col>

          <Grid.Col
            span={{
              base: 12,
              sm: 6,
              md: 6,
              lg: 4,
              xl: 3,
            }}
          >
            <Card withBorder h={115}>
              <Flex gap="xs">
                <Box>
                  <Image src={CalendarIcon} />
                </Box>
                <Stack gap={0}>
                  <Text size="sm">Completed Orders</Text>
                  <Text size="xs" c="dimmed">
                    Count of total orders that have been completed
                  </Text>
                  <Title order={3}>10</Title>
                </Stack>
              </Flex>
            </Card>
          </Grid.Col>
        </Grid>
      </Grid.Col>

      <Grid.Col span={12}>
        <Grid>
          <Grid.Col span={isMobile ? 12 : 8}>
            <Card shadow="sm" radius="md" withBorder h={450}>
              <Group justify="space-between" mb="sm">
                <Title order={4}>Income Analytics</Title>
                <Select
                  data={["2025", "2024"]}
                  defaultValue="2025"
                  w={100}
                  size="sm"
                />
              </Group>
              <Box h={420}>
                <RevenueChart />
              </Box>
            </Card>
          </Grid.Col>

          <Grid.Col span={isMobile ? 12 : 4}>
            <Stack>
              <Card shadow="sm" radius="md" withBorder h={200}>
                <Stack gap={"xl"}>
                  <Stack>
                    <Title order={5}>My Balance</Title>
                    <Title order={3}>$123,000</Title>
                  </Stack>

                  <Stack gap={0}>
                    <Group justify="space-between">
                      <Text c="dimmed" size="sm">
                        April’s Income
                      </Text>
                      <Title order={5}>Rs.15k</Title>
                    </Group>
                    <Group justify="space-between">
                      <Text c="dimmed" size="sm">
                        Total Revenue
                      </Text>
                      <Title order={5}> Rs.315k</Title>
                    </Group>
                  </Stack>
                </Stack>
              </Card>

              <Card withBorder h={235}>

              <Flex gap="xs">
                <Box>
                  <Image height={50} w={50} src={SettingsIcon} />
                </Box>
                <Stack gap={12}>
                  <Title order={3}>Pending Orders</Title>
                  <Text size="lg" c="dimmed">
                    Your total pending projects that have to ship
                  </Text>
                  <Title order={3}>06</Title>
                </Stack>
              </Flex>
            </Card>
            </Stack>
          </Grid.Col>
        </Grid>
      </Grid.Col>

 
    </Grid>
  );
};

export default Analytics;
