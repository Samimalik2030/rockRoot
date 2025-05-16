import React, { useState } from "react";
import {
  Card,
  Title,
  Text,
  SegmentedControl,
  TextInput,
  Select,
  Button,
  Group,
  Stack,
  Grid,
  CheckIcon,
  Container,
  Flex,
} from "@mantine/core";

export default function MeterialEstimator() {
  const [projectType, setProjectType] = useState("Flooring");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");

  return (
    <>
      <Container fluid bg={"red"} h={"100vh"} w={"100vw"}>
        <Flex justify={"center"} align={"center"} h={"100%"}>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            //   style={{ maxWidth: 600, margin: "auto" }}
          >
            <Stack>
              <Title order={3}>Material Estimator</Title>
              <Text size="sm" c="dimmed">
                Enter your project dimensions to calculate material requirements
              </Text>

              <SegmentedControl
                fullWidth
                value={projectType}
                onChange={setProjectType}
                data={["Flooring", "Countertop"]}
                color="orange"
                radius="md"
              />

              <Grid>
                <Grid.Col span={6}>
                  <TextInput
                    label="Length (feet)"
                    placeholder="Enter length"
                    value={length}
                    onChange={(event) => setLength(event.currentTarget.value)}
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <TextInput
                    label="Width (feet)"
                    placeholder="Enter width"
                    value={width}
                    onChange={(event) => setWidth(event.currentTarget.value)}
                  />
                </Grid.Col>
              </Grid>

              <Grid>
                <Grid.Col span={4}>
                  <Select
                    label="Material Type"
                    data={["Marble", "Granite", "Quartz"]}
                    defaultValue="Marble"
                  />
                </Grid.Col>
                <Grid.Col span={4}>
                  <Select
                    label="Quality"
                    data={["Standard", "Premium", "Luxury"]}
                    defaultValue="Premium"
                  />
                </Grid.Col>
                <Grid.Col span={4}>
                  <Select
                    label="Thickness (mm)"
                    data={["15mm", "20mm (Standard)", "30mm"]}
                    defaultValue="20mm (Standard)"
                  />
                </Grid.Col>
              </Grid>

              <Group grow mt="md">
                <Button leftSection={<CheckIcon size={18} />} color="orange">
                  Calculate
                </Button>
                <Button variant="default" color="gray">
                  Reset
                </Button>
              </Group>
            </Stack>
          </Card>
        </Flex>
      </Container>
    </>
  );
}