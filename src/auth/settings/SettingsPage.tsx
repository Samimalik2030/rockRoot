import { SimpleGrid } from "@mantine/core";
import { PersonalSettings } from "./PersonalSettings";

const SettingsPage = () => {
  return (
    <SimpleGrid
      cols={{ base: 1, md: 2 }}
      spacing="sm"
      styles={{
        root: {
          "& > div": {
            height: "calc(100vh - 120px)",
            overflowY: "auto"
          }
        }
      }}
    >
      <PersonalSettings />
    </SimpleGrid>
  );
};

export default SettingsPage;
