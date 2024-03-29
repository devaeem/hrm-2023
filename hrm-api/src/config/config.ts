import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});

const config = {
  port: process.env.PORT || 3002,
};

export default config;
