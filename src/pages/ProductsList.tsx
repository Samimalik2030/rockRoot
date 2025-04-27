import {
  ActionIcon,
  Badge,
  Button,
  Checkbox,
  FileInput,
  Grid,
  Group,
  Modal,
  MultiSelect,
  NumberInput,
  Select,
  Stack,
  Textarea,
  TextInput,
  Title,
  Text,
  Image,
  Card,
  Box,
  LoadingOverlay,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useEffect, useState, useCallback } from "react";
import { useForm } from "@mantine/form";
import api from "../api";
import IconPencil from "../assets/icons/IconPencil";
import IconTrash from "../assets/icons/IconTrash";
import handleImageUpload from "../constants/UploadImage";
import { FileDto } from "../interfaces/IUser";
import { Product } from "../interfaces/Product";

export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [productId, setProductId] = useState<string | null>(null);
  const [image, setImage] = useState<FileDto | null>(null);

  const isMobile = useMediaQuery("(max-width: 56.25em)");
  const [opened, { open, close }] = useDisclosure();

  const form = useForm({
    initialValues: {
      name: "",
      price: 0,
      description: "",
      dimensions: "",
      thickness: "",
      finish: "",
      category: "",
      inStock: true,
      color: "",
      origin: "",
      tags: [] as string[],
    },
  });

  const fetchProducts = useCallback(async () => {
    try {
      setFetching(true);
      const { data } = await api.get("/products");
      setProducts(data || []);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setFetching(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const openModal = (product?: Product) => {
    if (product) {
      setIsUpdate(true);
      setProductId(product._id);
      form.setValues({ ...product });
      setImage(product.image);
    } else {
      form.reset();
      setImage(null);
      setIsUpdate(false);
      setProductId(null);
    }
    open();
  };

  const closeModal = () => {
    form.reset();
    setIsUpdate(false);
    setProductId(null);
    setImage(null);
    close();
  };

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      if (isUpdate && productId) {
        await api.patch(`/products/${productId}`, { ...values, image });
      } else {
        await api.post("/products", { ...values, image });
      }
      await fetchProducts();
      closeModal();
    } catch (error) {
      console.error("Error submitting product", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = async (file: File | null) => {
    if (!file) return;
    const uploaded = await handleImageUpload(file);
    setImage(uploaded);
  };

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/products/${id}`);
      await fetchProducts();
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  return (
    <>
      <Stack>
        <Group justify="space-between">
          <Title order={2}>Products</Title>
          <Button color="yellow" onClick={() => openModal()}>
            Add Product
          </Button>
        </Group>

        <Grid>
          {products.map((product) => (
            <Grid.Col span={isMobile ? 12 : 4} key={product._id}>
              <Card withBorder radius="lg" shadow="sm">
                <Group justify="space-between" mb="xs">
                  <Badge color="orange" variant="filled" radius="sm">
                    BESTSELLER
                  </Badge>
                  <Group>
                    <ActionIcon
                      variant="transparent"
                      onClick={() => openModal(product)}
                    >
                      <IconPencil color="green" />
                    </ActionIcon>
                    <ActionIcon
                      variant="transparent"
                      onClick={() => handleDelete(product._id)}
                    >
                      <IconTrash color="red" />
                    </ActionIcon>
                  </Group>
                </Group>

                <Box h={250}>
                  <Image
                    h="100%"
                    src={product.image.url}
                    alt={product.name}
                    fit="cover"
                    radius="md"
                  />
                </Box>

                <Group gap="xs" mb="xs" mt={8}>
                  <Badge color="gray" variant="light" radius="xl">
                    {product.origin}
                  </Badge>
                  <Text size="sm" fw={500}>
                    ⭐ 4.5
                  </Text>
                </Group>

                <Stack gap={2}>
                  <Text fw={600}>{product.name}</Text>
                  <Text size="sm" c="gray">
                    {product.description}
                  </Text>
                </Stack>

                <Group justify="space-between" mt="md" align="center">
                  <Text fw={600} size="lg">
                    ${product.price.toFixed(2)}{" "}
                    <Text component="span" size="sm" c="dimmed">
                      per sq ft
                    </Text>
                  </Text>
                </Group>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Stack>

      <Modal
        opened={opened}
        onClose={closeModal}
        title={isUpdate ? "Update Product" : "Add Product"}
        size="lg"
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <FileInput
              label="Image"
              placeholder="Upload image"
              onChange={handleImageChange}
              accept="image/*"
            />
            <TextInput label="Name" required {...form.getInputProps("name")} />
            <NumberInput
              label="Price"
              required
              {...form.getInputProps("price")}
            />
            <Textarea
              label="Description"
              {...form.getInputProps("description")}
            />
            <Select
              label="Dimensions"
              data={[
                "12 x 12 inches (300 x 300 mm)",
                "16 x 16 inches (400 x 400 mm)",
                "18 x 18 inches (457 x 457 mm)",
                "24 x 24 inches (600 x 600 mm)",
                "12 x 24 inches (300 x 600 mm)",
                "6 x 3 feet (1800 x 900 mm)",
                "8 x 4 feet (2400 x 1200 mm)",
                "10 x 5 feet (3000 x 1500 mm)",
                "9 x 6 feet (2700 x 1800 mm)",
              ]}
              {...form.getInputProps("dimensions")}
            />
            <Select
              label="Thickness"
              data={[
                "10 mm",
                "12 mm",
                "14 mm",
                "16 mm",
                "18 mm",
                "20 mm",
                "25 mm",
                "30 mm",
                "40 mm",
                "50 mm",
              ]}
              {...form.getInputProps("thickness")}
            />
            <Select
              label="Finish"
              data={[
                "polished",
                "honed",
                "leathered",
                "flamed",
                "brushed",
                "antique",
                "sandblasted",
                "tumbled",
                "matte",
                "mirror-like",
                "satin",
                "rough",
                "smooth",
                "high-gloss",
                "natural",
              ]}
              {...form.getInputProps("finish")}
            />
            <Select
              label="Category"
              data={[
                "Italian Marble",
                "Pakistani Marble",
                "Granite",
                "Onyx",
                "Quartz",
                "Travertine",
              ]}
              required
              {...form.getInputProps("category")}
            />
            <Checkbox
              label="In Stock"
              {...form.getInputProps("inStock", { type: "checkbox" })}
            />

            <Select
              data={[
                { value: "Italy", label: "Italy (Italian Marble)" },
                { value: "Pakistan", label: "Pakistan (Pakistani Marble)" },
                { value: "India", label: "India (Granite)" },
                { value: "Mexico", label: "Mexico (Onyx)" },
                { value: "Brazil", label: "Brazil (Quartz)" },
                { value: "Turkey", label: "Turkey (Travertine)" },
              ]}
              label="Origin"
              {...form.getInputProps("origin")}
            />
            <MultiSelect
              label="Tags"
              data={[
                "luxury",
                "floor",
                "classic",
                "warm",
                "premium",
                "interior",
              ]}
              searchable
              {...form.getInputProps("tags")}
            />
            <Button type="submit" loading={loading} fullWidth>
              {isUpdate ? "Update Product" : "Add Product"}
            </Button>
          </Stack>
        </form>
      </Modal>
    </>
  );
}
