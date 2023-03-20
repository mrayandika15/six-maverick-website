import { extendTheme } from "@chakra-ui/react";
import config from "./config";
import styles from "./global";

export const theme = extendTheme({
  config,
  styles,
});
