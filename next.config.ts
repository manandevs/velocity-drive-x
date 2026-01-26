import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
        pathname: "/users/5031/screenshots/7008431/dribbble.png",
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
        pathname: "/users/329207/screenshots/6220354/bemocs_geneseo_sailing.jpg",
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
        pathname: "/users/730703/screenshots/6988911/elenidebo-thisiscolossal-theroad-forchicagodesignmuseum.jpg",
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
        pathname: "/users/1355613/screenshots/6441984/landscape_2x.jpg",
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
        pathname: "/users/63407/screenshots/5705689/dribbble_moonlight_2x.png",
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
        pathname: "/users/1361661/screenshots/6673317/music_girl.png",
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
        pathname: "/users/3178178/screenshots/7013817/the_caravan_by_patryk_wojciechowicz_2x.png",
      },
    ],
  },
};

export default nextConfig;
