// types
import { DefaultConfigProps } from "@/types/config";

export const drawerWidth = 260;

// ==============================|| THEME CONFIG  ||============================== //

const config: DefaultConfigProps = {
  defaultPath: "/",
  fontFamily: "'Roboto', sans-serif",
  miniDrawer: false,
  container: true,
  themeDirection: "ltr",
  title: "V2NET",
  title_split: " - ",
  background_url: "https://unsplash.com/random",
  description: "V2NET，您的网络冲浪助手",
  logo: "",
  api: "https://api.nkz.io",
  languages: ["en-US","zh-CN","zh-TW"],
  emojiEndpoint: "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/{{code}}.png",
  startYear: 2021
};

export default config;
