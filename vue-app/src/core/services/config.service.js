import objectPath from "object-path";
import config from "@/core/config/config.json";

export default {
  getConfig: (path, defaultValue) => objectPath.get(config, path, defaultValue)
};
