"use client";

import { Group, PasswordInput, Title, Stack, Button } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import { notifications } from "@mantine/notifications";
import { ChangePasswordDto } from "../../http/Api";
import http from "../../http";
import IconLock from "../../assets/icons/IconLock";
import { useMutation } from "@tanstack/react-query";

interface ExtendedChangePasswordDto extends ChangePasswordDto {
  confirmNewPassword: string;
}

export default function PasswordCard() {
  const { mutate: changePassword, isPending: changingPassword } = useMutation({
    mutationFn: (data: ChangePasswordDto) =>
      http.users.userControllerChangePassword(data)
  });

  // Define validation schema
  const schema = yup.object<ExtendedChangePasswordDto>({
    oldPassword: yup.string().required("Current password is required"),
    newPassword: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .notOneOf(
        [yup.ref("oldPassword")],
        "New password must be different from current password"
      )
      .required("New password is required"),
    confirmNewPassword: yup
      .string()
      .oneOf([yup.ref("newPassword")], "Passwords must match")
      .required("Please confirm your new password")
  });

  const form = useForm<ExtendedChangePasswordDto>({
    initialValues: {
      oldPassowrd: "",
      newPassword: "",
      confirmNewPassword: ""
    },
    validate: yupResolver(schema)
  });

  const handlePasswordSubmit = async (values: ExtendedChangePasswordDto) => {
    changePassword(values, {
      onSuccess: () => {
        form.reset();

        notifications.show({
          title: "Success",
          message: "Password changed successfully",
          color: "green"
        });
      }
    });
  };

  return (
    <form onSubmit={form.onSubmit(handlePasswordSubmit)}>
      <Stack>
        <Group justify="apart">
          <Title order={4}>Password Settings</Title>
          <IconLock />
        </Group>

        <PasswordInput
          label="Current Password"
          placeholder="Enter your current password"
          {...form.getInputProps("oldPassowrd")}
          disabled={changingPassword}
          leftSection={<IconLock />}
          required
        />

        <PasswordInput
          label="New Password"
          placeholder="Enter your new password"
          {...form.getInputProps("newPassword")}
          disabled={changingPassword}
          leftSection={<IconLock />}
          required
        />

        <PasswordInput
          label="Confirm New Password"
          placeholder="Confirm your new password"
          {...form.getInputProps("confirmNewPassword")}
          disabled={changingPassword}
          leftSection={<IconLock />}
          required
        />

        <Button
          type="submit"
          loading={changingPassword}
          variant="light"
          fullWidth
        >
          Change Password
        </Button>
      </Stack>
    </form>
  );
}
