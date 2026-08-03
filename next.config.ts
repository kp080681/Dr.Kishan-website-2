import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";
import { getLegacyRedirects } from "./src/lib/blogs";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  async redirects() {
    return getLegacyRedirects();
  },
};

export default nextConfig;
