import { extendTheme } from "@chakra-ui/react";
import config from "./config";
import styles from "./global";
import fonts from "./foundations/fonts";
import Button from "./components/Button";
import breakpoints from "./breakpoints";

export const theme = extendTheme({
  config,
  styles,
  fonts,
  breakpoints,
  components: {
    Button,
  },
});
