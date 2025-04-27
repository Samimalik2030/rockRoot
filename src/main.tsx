import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router";
import { router } from "./router";
import "@mantine/core/styles.css";

import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <ModalsProvider>
        <Notifications position="top-right" zIndex={9999} />
        <RouterProvider router={router} />
      </ModalsProvider>
    </MantineProvider>
  </StrictMode>
);
