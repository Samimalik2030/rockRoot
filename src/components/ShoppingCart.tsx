// import { Card, Group, Text, Button, Image, NumberInput, Stack } from '@mantine/core';
// import IconTrash from '../assets/icons/IconTrash';


// interface ShoppingCartItemProps {
//   image: string;
//   title: string;
//   size: string;
//   thickness: string;
//   finish: string;
//   price: number;
//   pricePerSqft: number;
//   quantity: number;
//   onQuantityChange: (quantity: number) => void;
//   onRemove: () => void;
// }

// export default function ShoppingCartItem({
//   image,
//   title,
//   size,
//   thickness,
//   finish,
//   price,
//   pricePerSqft,
//   quantity,
//   onQuantityChange,
//   onRemove,
// }: ShoppingCartItemProps) {
//   return (
//     <Card withBorder radius="md" p="md" maw={600} mx="auto">
//       <Group align="flex-start" gap="md">
//         <Image
//           src={image}
//           alt={title}
//           radius="md"
//           w={100}
//           h={100}
//           fit="cover"
//         />

//         <Stack gap={4} flex={1}>
//           <Text fw={600} size="lg">
//             {title}
//           </Text>
//           <Text size="sm" c="dimmed">
//             Size: {size}
//           </Text>
//           <Text size="sm" c="dimmed">
//             Thickness: {thickness}
//           </Text>
//           <Text size="sm" c="dimmed">
//             Finish: {finish}
//           </Text>

//           <Group mt="sm" gap="xs">
//             <Button
//               variant="default"
//               size="compact-sm"
//               onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
//             >
//               -
//             </Button>
//             <NumberInput
//               value={quantity}
//               onChange={(val) => onQuantityChange(Number(val))}
//               min={1}
//               hideControls
//               w={60}
//               styles={{ input: { textAlign: 'center' } }}
//             />
//             <Button
//               variant="default"
//               size="compact-sm"
//               onClick={() => onQuantityChange(quantity + 1)}
//             >
//               +
//             </Button>
//           </Group>
//         </Stack>

//         <Stack align="flex-end" gap="xs">
//           <Text fw={600} size="lg">
//             ${price.toFixed(2)}
//           </Text>
//           <Text size="sm" c="dimmed">
//             ${pricePerSqft?.toFixed(2)} per sq ft
//           </Text>
//           <Button
//             variant="subtle"
//             color="red"
//             leftSection={<IconTrash size={16} />}
//             size="xs"
//             mt="auto"
//             onClick={onRemove}
//           >
//             Remove
//           </Button>
//         </Stack>
//       </Group>
//     </Card>
//   );
// }
