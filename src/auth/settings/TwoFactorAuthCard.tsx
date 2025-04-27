import { Button } from "@mantine/core";
import { Group, Switch, Text, TextInput, Title } from "@mantine/core";
import { Stack } from "@mantine/core";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useMutation } from "@tanstack/react-query";
import http from "../../http";
import IconLock from "../../assets/icons/IconLock";

export default function TwoFactorAuthCard() {
  const { auth } = useAuth();
  const { mutate: toggle2FA, isPending: toggling2FA } = useMutation({
    mutationFn: http.users.userControllerToggleTwoFa,
  });
  const { mutate: verify2FA, isPending: verifying2FA } = useMutation({
    mutationFn: http.users.userControllerVerifyTwoFa,
  });
  const [otpCode, setOtpCode] = useState("");
  const [show2FAVerification, setShow2FAVerification] = useState(false);

  const handle2FAToggle = async () => {
    toggle2FA({});
  };

  const handle2FAVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await verify2FA({
        email: auth?.email,
        otp: otpCode,
        type: "Two Factor Authentication",
      });
      setShow2FAVerification(false);
      setOtpCode("");
    } catch (error) {
      console.error("Failed to verify 2FA:", error);
    }
  };
  return (
    <Stack>
      <Group justify="apart">
        <div>
          <Title order={4}>Two-Factor Authentication</Title>
          <Text size="sm" color="dimmed">
            Add an extra layer of security
          </Text>
        </div>
        <IconLock size={20} />
      </Group>

      <Group flex="apart">
        <Text>2FA Status</Text>
        <Switch
          onLabel="ON"
          offLabel="OFF"
          size="md"
          onChange={handle2FAToggle}
          disabled={toggling2FA}
        />
      </Group>

      {show2FAVerification && (
        <form onSubmit={handle2FAVerify}>
          <Stack>
            <TextInput
              label="Verification Code"
              value={otpCode}
              onChange={(e) => setOtpCode(e.target.value)}
              disabled={verifying2FA}
              placeholder="Enter verification code"
            />
            <Button type="submit" loading={verifying2FA} variant="light">
              Verify Code
            </Button>
          </Stack>
        </form>
      )}
    </Stack>
  );
}
