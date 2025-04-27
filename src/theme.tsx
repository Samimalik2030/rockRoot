import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "yellow",
  colors: {
    yellow: [
      "#fffbea", // 0
      "#fff3c4", // 1
      "#fce588", // 2
      "#fadb5f", // 3
      "#f7c948", // 4
      "#f0b429", // 5 (primary shade)
      "#de911d", // 6
      "#cb6e17", // 7
      "#b44d12", // 8
      "#8d2b0b", // 9
    ],
  },
  defaultRadius: "md",
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  components: {
    Button: {
      defaultProps: {
        size: "md",
      },
    },
    TextInput: {
      defaultProps: {
        size: "md",
      },
    },
    Select: {
      defaultProps: {
        size: "md",
      },
    },
    Stack: {
      defaultProps: {
        gap: "md",
      },
    },
    Group: {
      defaultProps: {
        gap: "md",
      },
    },
    Card: {
      defaultProps: {
        padding: "md",
        radius: "md",
        withBorder: true,
        shadow: "lg",
      },
    },
  },
});
