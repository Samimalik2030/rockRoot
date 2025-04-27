import { Card, Text, Flex, Title, Stack } from "@mantine/core";

function StatsCard({ value, label }:{value:any,label:any}) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack gap={10}>
        <Title fz={28} fw={700} c="orange" ta={"center"}>
          {value}
        </Title>
        <Text color="dimmed" size="md">
          {label}
        </Text>
      </Stack>
    </Card>
  );
}

function StatsGrid() {
  const statsData = [
    { value: "18+", label: "Years of Experience" },
    { value: "5,000+", label: "Projects Completed" },
    { value: "200+", label: "Stone Varieties" },
    { value: "98%", label: "Customer Satisfaction" },
  ];

  return (
    <Flex gap="md" direction="row" justify={"center"}>
      {statsData.map((stat) => (
        <StatsCard key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </Flex>
  );
}

export default StatsGrid;
