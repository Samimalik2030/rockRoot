"use client";
import {
  Stack,
  Avatar,
  FileButton,
  Center,
  Box,
  ActionIcon,
} from "@mantine/core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../http";
import IconCamera from "../../assets/icons/IconCamera";
import { useAuth } from "../../contexts/AuthContext";
export function AvatarCard() {
  const queryClient = useQueryClient();

  const { auth: user } = useAuth();

  const { mutate: changeAvatar, isPending: changingAvatar } = useMutation({
    mutationFn: (file: File) => http.users.userControllerChangeAvatar({ file }),
  });

  const handleAvatarChange = async (file: File | null) => {
    if (!file) return;
    changeAvatar(file, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["auth"] });
      },
    });
  };

  return (
    <Stack>
      <Center>
        <FileButton onChange={handleAvatarChange} accept="image/png,image/jpeg">
          {(props) => (
            <Box
              pos="relative"
              {...props}
              style={{
                cursor: "pointer",
              }}
            >
              <Avatar
                src={user?.avatar ? user.avatar.url : undefined}
                size={120}
                radius={120}
                style={{
                  "&:hover": {
                    opacity: 0.5,
                  },
                  border: `1px solid gray`,
                }}
              />
              <ActionIcon
                loading={changingAvatar}
                variant="filled"
                color="blue"
                radius="xl"
                size="md"
                pos="absolute"
                bottom={0}
                right={0}
              >
                <IconCamera />
              </ActionIcon>
            </Box>
          )}
        </FileButton>
      </Center>
    </Stack>
  );
}
