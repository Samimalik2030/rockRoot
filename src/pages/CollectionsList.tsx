import { Button, Grid, Group, SimpleGrid, Stack, Title } from "@mantine/core";
import CollectionsCard from "../components/CollectionsCard";

export default function CollectionsList({
  isDashboard,
}: {
  isDashboard?: boolean;
}) {
  const marbleData = [
    {
      title: "Italian Marble",
      description: "Timeless elegance from Italy's finest quarries",
      popularProducts: [
        "Carrara White Marble",
        "Calacatta Gold Marble",
        "Statuario Marble",
      ],
      buttonText: "Explore Collection",
      image:
        "https://images.unsplash.com/photo-1551043047-1d2adf00f3fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hcmJsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Indian Marble",
      description: "Rich colors and patterns from India’s premium mines",
      popularProducts: [
        "Makrana Marble",
        "Ambaji Marble",
        "Rajnagar White Marble",
      ],
      buttonText: "View More",
      image:
        "https://plus.unsplash.com/premium_photo-1681414728775-7aa0607c41cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hcmJsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Turkish Marble",
      description: "Exquisite textures crafted by nature in Turkey",
      popularProducts: [
        "Mugla White Marble",
        "Burdur Beige Marble",
        "Afyon White Marble",
      ],
      buttonText: "Discover Now",
      image:
        "https://images.unsplash.com/photo-1606767041004-6b918abe92be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hcmJsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <>
      <Stack>
        {isDashboard && (
          <Group justify="space-between">
            <Title order={2}>Collections</Title>
            <Button color="yellow">Add Collection</Button>
          </Group>
        )}
        <SimpleGrid p={0} cols={3}>
          {marbleData.map((marble) => (
            <CollectionsCard
              description={marble.description}
              buttonText="Show details"
              popularProducts={marble.popularProducts}
              title={marble.title}
              image={marble.image}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
}
