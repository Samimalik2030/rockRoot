import {
    Container,
    Title,
    Text,
    SimpleGrid,
    Card,
    Group,
    Divider,
    Box,
    rem,
    useMantineTheme,
    Stack,
  } from '@mantine/core';
import IconStar from '../assets/icons/IconStar';
import IconCheck from '../assets/icons/IconCheck';
import IconArtboard from '../assets/icons/IconArtboard';
import IconSend from '../assets/icons/IconSend';

  
  const features = [
    {
      icon: IconStar,
      title: 'Premium Quality',
      description:
        'We source only the finest marble and granite from around the world and within Pakistan',
    },
    {
      icon: IconCheck,
      title: 'Expert Craftsmanship',
      description:
        'Our skilled artisans bring decades of experience to every project we undertake',
    },
    {
      icon: IconArtboard,
      title: 'Competitive Pricing',
      description:
        'We offer the best value without compromising on quality or service',
    },
    {
      icon: IconSend,
      title: 'Lifetime Support',
      description:
        'We stand behind our products with maintenance advice and after-sales service',
    },
  ];
  
  export default function WhyChooseUs() {
    const theme = useMantineTheme();
  
    return (
      <Box bg={theme.colors.dark[7]} c="white" py={80}>
        <Container>
          <Stack align="center" gap="xs">
            <Text size="sm" c={theme.colors.orange[5]} fw={600}>
              OUR ADVANTAGES
            </Text>
            <Title order={2} fw={700} ta="center">
              Why Choose Rajput Marble&apos;s
            </Title>
            <Divider
              size="sm"
              color={theme.colors.orange[5]}
              w={56}
              h={rem(3)}
         
            />
            <Text size="lg" c="dimmed" ta="center" mt="sm" mb="xl">
              Experience the difference of working with Punjab&apos;s premier marble and granite supplier
            </Text>
          </Stack>
  
          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
            {features.map((feature, index) => (
              <Card
                key={index}
                shadow="md"
                radius="md"
                padding="lg"
                withBorder
                bg={theme.colors.dark[6]}
              >
                <Group justify="center" mb="md">
                  <feature.icon size={36}  color={theme.colors.orange[5]} />
                </Group>
                <Text fw={700} size="lg" ta="center" mb="xs" c={'white'}>
                  {feature.title}
                </Text>
                <Text size="sm" ta="center" c="dimmed">
                  {feature.description}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
  