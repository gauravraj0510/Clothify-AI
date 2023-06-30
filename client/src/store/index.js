import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./clothify.png",
  fullDecal: "./kid_pattern.png",
});

export default state;
