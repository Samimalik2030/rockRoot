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
import { useCallback, useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import api from "../api";
import IconPencil from "../assets/icons/IconPencil";
import IconTrash from "../assets/icons/IconTrash";
import handleImageUpload from "../constants/UploadImage";
import { FileDto } from "../interfaces/IUser";
import { Product } from "../interfaces/Product";
import { Project } from "../interfaces/Project";

export default function ProjectList() {
  const [loading, setLoading] = useState(false);
  const [projectId, setProjectId] = useState<string | null>(null);
  const isMobile = useMediaQuery("(max-width: 56.25em)");
  const [isUpdate, setIsUpdate] = useState(false);

  const [projects, setProjects] = useState<Project[]>([]);

  const [image, setImage] = useState<FileDto | null>(null);

  const [opened, { open, close }] = useDisclosure();
  const form = useForm({
    initialValues: {
      location: "",
      author: "",
      title: "",
      description: "",
      materials: [] as string[],
      isFeatured: false,
    },
  });

  const fetchProjects = useCallback(async () => {
    try {
      const { data } = await api.get("/projects");
      setProjects(data || []);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleOpenModal = (project: any = null) => {
    console.log(project, "project");

    if (project) {
      setIsUpdate(true);
      setProjectId(project._id);
      form.setValues({
        location: project.location,
        author: project.author,
        title: project.title,
        description: project.description,
        materials: project.materials,
        isFeatured: project.isFeatured || false,
      });
    } else {
      form.reset();
      setImage(null);
    }

    open();
  };

  const handleCloseModal = () => {
    form.reset();
    setIsUpdate(false);
    setImage(null);
    close();
  };

  
  const openModal = (project?: Project) => {
    if (project) {
      setProjectId(project._id);
      setIsUpdate(true)
      form.setValues({
        ...project,
      });
      setImage(project.image);
    } else {
      form.reset();
      setImage(null);
      setIsUpdate(false);
      setProjectId(null);
    }
    open();
  };

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      if (isUpdate && projectId) {
        await api.patch(`/projects/${projectId}`, { ...values, image });
      } else {
        await api.post("/projects", { ...values, image });

      }
      await fetchProjects();
      closeModal();
    } catch (error) {
      console.error("Error submitting product", error);
    } finally {
      setLoading(false);
    }
  };

  async function handleFileInputChange(file: File | null) {
    if (!file) return;
    const uploaded = await handleImageUpload(file);
    setImage(uploaded);
  }

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/projects/${id}`);
      await fetchProjects();
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  const closeModal = () => {
    form.reset();
    setIsUpdate(false);
    setProjectId(null);
    setImage(null);
    close();
  };

  return (
    <>
      <Stack>
        <Group justify="space-between">
          <Title order={2}>Products</Title>
          <Button color="yellow" onClick={() => handleOpenModal()}>
            Add Project
          </Button>
        </Group>

        <Grid>
          {projects.map((room, index) => (
            <Grid.Col span={isMobile ? 12 : 4}>
              <Card key={index} radius="md" withBorder p={0}>
                <Box pos="relative">
                  <Image
                    src={room.image.url}
                    alt={room.title}
                    height={260}
                    fit="cover"
                    fallbackSrc="https://via.placeholder.com/400x260?text=Project"
                  />

                  <Group
               
                    style={{ position: "absolute", top: 12, right: 12 }}
                  >
                    <ActionIcon
                   
                      variant="filled"
                      onClick={() => openModal(room)}
                      
                    >
                      <IconPencil color=" white" />
                    </ActionIcon>
                    <ActionIcon
                    color="red"
                      variant="filled"
                      onClick={() => handleDelete(room._id)}
                    >
                      <IconTrash color="white" />
                    </ActionIcon>
                  </Group>
                </Box>

                <Box p="md">
                  <Group justify="space-between" mb={4}>
                    <Badge color="gray" variant="light">
                      {room.location}
                    </Badge>
                    <Text size="sm" fw={500}>
                      By {room.author}
                    </Text>
                  </Group>

                  <Stack gap={2} mb="xs">
                    <Text fw={600}>{room.title}</Text>
                    <Text size="sm" c="gray">
                      {room.description}
                    </Text>
                  </Stack>

                  <Stack gap={4}>
                    <Text size="sm" fw={500} c="orange">
                      Materials Used:
                    </Text>
                    <Group gap="xs" wrap="wrap">
                      {room.materials?.map((mat) => (
                        <Badge
                          key={mat}
                          color="gray"
                          variant="light"
                          radius="xl"
                        >
                          {mat}
                        </Badge>
                      ))}
                    </Group>
                  </Stack>
                </Box>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Stack>

      <Modal
        opened={opened}
        onClose={handleCloseModal}
        title={"Add Project"}
        size="lg"
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <FileInput
              label="Image"
              placeholder="Upload image"
              onChange={handleFileInputChange}
              accept="image/*"
            />

            <TextInput
              label="Location"
              placeholder="Enter the project location"
              {...form.getInputProps("location")}
            />

            <TextInput
              label="Author"
              placeholder="Enter the author's name"
              {...form.getInputProps("author")}
            />

            <TextInput
              label="Title"
              placeholder="Enter the project title"
              {...form.getInputProps("title")}
            />

            <Textarea
              label="Description"
              placeholder="Enter a short description"
              {...form.getInputProps("description")}
            />

            <MultiSelect
              label="Materials Used"
              data={["Wood", "Glass", "Concrete", "Steel"]}
              placeholder="Select materials"
              {...form.getInputProps("materials")}
            />

            <Checkbox
              label="Featured"
              {...form.getInputProps("isFeatured", { type: "checkbox" })}
            />

            <Button type="submit" loading={loading} fullWidth>
              {isUpdate ? "Update" : "  Add Project"}
            </Button>
          </Stack>
        </form>
      </Modal>
    </>
  );
}
