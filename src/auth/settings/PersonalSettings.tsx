"use client";
import { Paper, Stack, Title } from "@mantine/core";
import { AvatarCard } from "./AvatarCard";
import PersonalInfoCard from "./PersonalInfoCard";
import PasswordCard from "./PasswordCard";

export function PersonalSettings() {
  return (
    <Paper shadow="md" p="lg" radius="md">
      <Title order={2} mb="xl">
        Personal Settings
      </Title>
      <Stack gap="xl">
        <AvatarCard />
        <PersonalInfoCard />
        <PasswordCard />
        {/* <TwoFactorAuthCard /> */}
      </Stack>
    </Paper>
  );
}
