/**
 * Central image registry.
 * Every visual used across the site is declared here so it can be swapped
 * later (CMS / admin) without touching any component.
 */

const ASSETS = "https://r2-pub.rork.com/projects/mwklcxkx6vawgsucwopxa/assets";

export const images = {
  logo: "/assets/neboy-logo.png",
  logoTransparent: "/assets/neboy-logo.png",
  heroGlobal: `${ASSETS}/a8e994f4-78ec-4622-81a8-e67ae187a899.png`,
  portSunset: `${ASSETS}/c5aa5aa4-39d5-48bd-b691-b883e218c158.png`,
  commodities: `${ASSETS}/5afaf1cc-4c56-4f79-b55c-ce311fa8aa40.png`,
  boardroom: `${ASSETS}/354de44d-eb22-4379-9e4c-9b741ffc6f4a.png`,
  studioCampaign: `${ASSETS}/d7b55cba-726e-49e9-aa0f-f7b51500befb.png`,
  phoneStack: `${ASSETS}/e0d35fdc-61f7-41e1-9600-c3bc1bebbd9e.png`,
  architecture: `${ASSETS}/43ceab12-5968-4b98-ad50-276bb85921e8.png`,
  warehouse: `${ASSETS}/70207bc4-cca3-4f83-a412-3ee002b90106.png`,
  projectFintech: `${ASSETS}/a009d71f-64c5-4b76-8c79-eb1f8faf90ef.png`,
  projectBrand: `${ASSETS}/b859cd9e-0d5e-492a-9649-447b3f5f26b3.png`,
  projectLogistics: `${ASSETS}/ba6fd405-8e43-4394-a024-4f02a31a4fa3.png`,
} as const;

export type ImageKey = keyof typeof images;
