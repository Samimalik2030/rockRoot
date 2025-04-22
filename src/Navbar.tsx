import { Box, Anchor, Flex, Card, Group, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

function Navbar() {
  const isSmallscreen = useMediaQuery("(max-width: 56.25em)");
  return (
    <>
      <Card
        h={80}
        style={{ borderBottom: "1px solid #e4e4e4" }}
        p={0}
        shadow="xl"
      >
        <Flex justify={"space-between"} align={"center"} h={"100%"}>
          <Box>
            <Anchor fw={700} fz={32} ml={55} c={"black"}>
              Rock Roots
            </Anchor>
          </Box>
          <Box
            style={{
              display: isSmallscreen ? "none" : "block",
            }}
          >
            <Flex gap={30}>
              <Anchor fw={600} fz={20} c={"#ffa600"}>
                Home
              </Anchor>
              <Anchor fw={400} fz={20} c={"black"}>
                About
              </Anchor>
              <Anchor fw={400} fz={20} c={"black"}>
                Collection
              </Anchor>
              <Anchor fw={400} fz={20} c={"black"}>
                Products
              </Anchor>
              <Anchor fw={400} fz={20} c={"black"}>
                Room Ideas
              </Anchor>
              <Anchor fw={400} fz={20} c={"black"}>
                Gallery
              </Anchor>
              <Anchor fw={400} fz={20} c={"black"}>
                Marble Care & Info
              </Anchor>
            </Flex>
          </Box>

          <Group pr={10}>
            {/* <IconUse/> */}
            <Button>Sign In</Button>
          </Group>
        </Flex>
      </Card>
    </>
  );
}

export default Navbar;
