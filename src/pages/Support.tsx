import {
  Stack,
  Card,
  Group,
  Badge,
  Title,
  Text,
  Box,
  Divider,
  Grid,
} from "@mantine/core";
import IconClock from "../assets/icons/IconClock";
import api from "../api";
import { useEffect, useState } from "react";
export interface Inquiry {
  _id: string | number;
  username: string;
  email: string;
  phone: string;
  type: string;
  subject: string;
  query: string;
  createdAt?: string;
}

export default function Support() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const getInquiries = async () => {
    const response = await api.get("inquiry");
    if (response.data) {
      setInquiries(response.data);
    }
  };
  useEffect(() => {
    getInquiries();
  }, []);

  return (
    <>
      <Stack gap="md">
        {inquiries.map((inquiry) => (
          <Card
            key={inquiry._id}
            shadow="md"
            padding="lg"
            radius="md"
            withBorder
          >
            <Group justify="apart" mb="md">
              <Title
                order={4}
                style={{
                  flex: 1,
                  minWidth: 0,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {inquiry.subject}
              </Title>
              <Badge color="orange" variant="light">
                {inquiry.type}
              </Badge>
            </Group>

            <Divider mb="md" />

            <Grid>
              <Grid.Col span={4}>
                <Stack gap={6}>
                  <Text fw={500} size="sm">
                    Name
                  </Text>
                  <Text size="sm" color="blue">
                    {inquiry.username}
                  </Text>

                  <Text fw={500} size="sm" mt="sm">
                    Email
                  </Text>
                  <Text
                    size="sm"
                    color="dimmed"
                    style={{ fontFamily: "monospace" }}
                  >
                    {inquiry.email}
                  </Text>

                  <Text fw={500} size="sm" mt="sm">
                    Phone
                  </Text>
                  <Text
                    size="sm"
                    color="dimmed"
                    style={{ fontFamily: "monospace" }}
                  >
                    {inquiry.phone}
                  </Text>
                </Stack>
              </Grid.Col>

              <Grid.Col span={8}>
                <Text fw={500} size="sm" mb={4}>
                  Message
                </Text>
                <Box
                  style={{
                    whiteSpace: "pre-wrap",
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: inquiry.query.length > 150 ? "dimmed" : undefined,
                    maxHeight: 120,
                    overflowY: "auto",
                    paddingRight: 6,
                  }}
                >
                  {inquiry.query}
                </Box>

                {inquiry.createdAt && (
                  <Group gap={4} mt="md" justify="left">
                    <IconClock size={14} color="#999" />
                    <Text
                      size="xs"
                      color="dimmed"
                      style={{ userSelect: "none" }}
                    >
                      {new Date(inquiry.createdAt).toLocaleString()}
                    </Text>
                  </Group>
                )}
              </Grid.Col>
            </Grid>
          </Card>
        ))}
      </Stack>
    </>
  );
}
