import { Box, Card, Container, Stack,Title ,Text, SimpleGrid} from "@mantine/core";


export default function MyWishlist(){
    const products = [
        {
          id: "1",
          name: "Carrara White Marble",
          price: 25,
          description: "Elegant white marble with grey veins.",
          dimensions: "60x30 inches",
          thickness: "2 cm",
          finish: "Polished",
          category: "White Marble",
          image: "https://example.com/image1.jpg",
          inStock: true,
          color: "White",
          origin: "Italy",
          tags: ["luxury", "floor", "classic"],
        },
        {
          id: "2",
          name: "Emperador Dark Marble",
          price: 30,
          description: "Deep brown marble with fine veins.",
          dimensions: "48x24 inches",
          thickness: "1.8 cm",
          finish: "Honed",
          category: "Brown Marble",
          image: "https://example.com/emperador1.jpg",
          inStock: true,
          color: "Brown",
          origin: "Spain",
          tags: ["warm", "premium", "interior"],
        },
        {
          id: "3",
          name: "Black Galaxy Granite",
          price: 28,
          description: "Black granite with golden specks.",
          dimensions: "72x36 inches",
          thickness: "2.5 cm",
          finish: "Polished",
          category: "Black Granite",
          image: "https://example.com/blackgalaxy.jpg",
          inStock: false,
          color: "Black",
          origin: "India",
          tags: ["modern", "flooring", "luxury"],
        },
      ];
    return(
        <>
        <Container fluid>
            <Stack>
                <Box>
                <Title order={2}>Wishlist</Title>
                <Text>
                    Items You have saved for later
                </Text>
                </Box>
                 
            </Stack>
        </Container>
        </>
    )
}