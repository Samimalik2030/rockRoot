import { Card, Stack, Flex, Group, Badge, Divider, Button,Text,Title} from "@mantine/core";


export default function MyOrders(){
    return(
        <>
          <Card>
              <Stack>
                <Stack gap={5}>
                  <Title fz={24} fw={600}>
                    My Orders
                  </Title>
                  <Text>View and track your orders</Text>
                </Stack>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Flex justify={"space-between"} align={"center"}>
                    <Stack gap={0}>
                      <Group
                        //   position= "apart"
                        mb="xs"
                      >
                        <Text fw={500}>ORD-12345</Text>
                        <Badge color="#dcfce7" c={"green"}>
                          Delivered
                        </Badge>
                      </Group>

                      <Text color="dimmed" size="sm">
                        March 15, 2023
                      </Text>
                    </Stack>
                    <Text fw={500}>$599.99</Text>
                  </Flex>

                  <Divider my="sm" />
                  <Stack gap={8}>
                    <Flex justify={"space-between"}>
                      <Text>Carrara White Marble x 2</Text>
                      <Text color="dimmed" size="md">
                        $259.98
                      </Text>
                    </Flex>
                    <Flex justify={"space-between"}>
                      <Text>Black Galaxy Granite x 1</Text>
                      <Text color="dimmed" fz={16}>
                        $89.99
                      </Text>
                    </Flex>
                    <Group justify="end" mt={5}>
                      <Button
                        bg={"transparent"}
                        c={"black"}
                        style={{ border: "1px solid #e6e9e9ff" }}
                      >
                        View Details
                      </Button>
                    </Group>
                  </Stack>
                </Card>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Flex justify={"space-between"} align={"center"}>
                    <Stack gap={0}>
                      <Group
                        //   position= "apart"
                        mb="xs"
                      >
                        <Text fw={500}>ORD-12346</Text>
                        <Badge color="#dbeafe" c={"#1e5dcb"}>
                          Processing
                        </Badge>
                      </Group>

                      <Text color="dimmed" size="sm">
                        February 28, 2023
                      </Text>
                    </Stack>
                    <Text fw={500}>$249.99</Text>
                  </Flex>

                  <Divider my="sm" />
                  <Stack gap={8}>
                    <Flex justify={"space-between"}>
                      <Text>Calacatta Gold Marble × 1</Text>
                      <Text color="dimmed" size="md">
                        $249.99
                      </Text>
                    </Flex>

                    <Group justify="end" mt={5}>
                      <Button
                        bg={"transparent"}
                        c={"black"}
                        style={{ border: "1px solid #e6e9e9ff" }}
                      >
                        View Details
                      </Button>
                    </Group>
                  </Stack>
                </Card>
              </Stack>
            </Card>

        </>
    )
}