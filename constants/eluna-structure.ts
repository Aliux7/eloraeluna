import type { StaticImageData } from "next/image";

import map_3BB_01 from "@/app/assets/the-design/typical-floor/2-35/01-map-3BB.webp";
import unit_3BB_01 from "@/app/assets/the-design/typical-floor/2-35/01-room-3BB.webp";

import map_2BE_02 from "@/app/assets/the-design/typical-floor/2-35/02-map-2BE.webp";
import unit_2BE_02 from "@/app/assets/the-design/typical-floor/2-35/02-room-2BE.webp";

import map_2BC_03 from "@/app/assets/the-design/typical-floor/2-35/03-map-2BC.webp";
import unit_2BC_03 from "@/app/assets/the-design/typical-floor/2-35/03-room-2BC.webp";

import map_2BC_05 from "@/app/assets/the-design/typical-floor/2-35/05-map-2BC.webp";
import unit_2BC_05 from "@/app/assets/the-design/typical-floor/2-35/05-room-2BC.webp";

import map_2BD_06 from "@/app/assets/the-design/typical-floor/2-35/06-map-2BD.webp";
import unit_2BD_06 from "@/app/assets/the-design/typical-floor/2-35/06-room-2BD.webp";

import map_3BA_07 from "@/app/assets/the-design/typical-floor/2-35/07-map-3BA.webp";
import unit_3BA_07 from "@/app/assets/the-design/typical-floor/2-35/07-room-3BA.webp";

import map_3BC_08 from "@/app/assets/the-design/typical-floor/2-35/08-map-3BC.webp";
import unit_3BC_08 from "@/app/assets/the-design/typical-floor/2-35/08-room-3BC.webp";

import map_2BA_09 from "@/app/assets/the-design/typical-floor/2-35/09-map-2BA.webp";
import unit_2BA_09 from "@/app/assets/the-design/typical-floor/2-35/09-room-2BA.webp";

import map_2BB_10 from "@/app/assets/the-design/typical-floor/2-35/10-map-2BB.webp";
import unit_2BB_10 from "@/app/assets/the-design/typical-floor/2-35/10-room-2BB.webp";

import map_2BB_11 from "@/app/assets/the-design/typical-floor/2-35/11-map-2BB.webp";
import unit_2BB_11 from "@/app/assets/the-design/typical-floor/2-35/11-room-2BB.webp";

import map_2BA_12 from "@/app/assets/the-design/typical-floor/2-35/12-map-2BA.webp";
import unit_2BA_12 from "@/app/assets/the-design/typical-floor/2-35/12-room-2BA.webp";

import map_3BA_15 from "@/app/assets/the-design/typical-floor/2-35/15-map-3BA.webp";
import unit_3BA_15 from "@/app/assets/the-design/typical-floor/2-35/15-room-3BA.webp";

export type Unit = {
  index: string;
  code: string;
  grossArea: number;
  netArea: number;
  pathMap: StaticImageData;
  pathUnit: StaticImageData;
};

export const units: Unit[] = [
  {
    index: "01",
    code: "3BB",
    grossArea: 178,
    netArea: 149,
    pathMap: map_3BB_01,
    pathUnit: unit_3BB_01,
  },
  {
    index: "02",
    code: "2BE",
    grossArea: 90,
    netArea: 75,
    pathMap: map_2BE_02,
    pathUnit: unit_2BE_02,
  },
  {
    index: "03",
    code: "2BC",
    grossArea: 122,
    netArea: 102,
    pathMap: map_2BC_03,
    pathUnit: unit_2BC_03,
  },
  {
    index: "05",
    code: "2BC",
    grossArea: 122,
    netArea: 102,
    pathMap: map_2BC_05,
    pathUnit: unit_2BC_05,
  },
  {
    index: "06",
    code: "2BD",
    grossArea: 85,
    netArea: 71,
    pathMap: map_2BD_06,
    pathUnit: unit_2BD_06,
  },
  {
    index: "07",
    code: "3BA",
    grossArea: 167,
    netArea: 140,
    pathMap: map_3BA_07,
    pathUnit: unit_3BA_07,
  },
  {
    index: "08",
    code: "3BC",
    grossArea: 183,
    netArea: 149,
    pathMap: map_3BC_08,
    pathUnit: unit_3BC_08,
  },
  {
    index: "09",
    code: "2BA",
    grossArea: 93,
    netArea: 78,
    pathMap: map_2BA_09,
    pathUnit: unit_2BA_09,
  },
  {
    index: "10",
    code: "2BB",
    grossArea: 89,
    netArea: 74,
    pathMap: map_2BB_10,
    pathUnit: unit_2BB_10,
  },
  {
    index: "11",
    code: "2BB",
    grossArea: 89,
    netArea: 74,
    pathMap: map_2BB_11,
    pathUnit: unit_2BB_11,
  },
  {
    index: "12",
    code: "2BA",
    grossArea: 89,
    netArea: 74,
    pathMap: map_2BA_12,
    pathUnit: unit_2BA_12,
  },
  {
    index: "15",
    code: "3BA",
    grossArea: 167,
    netArea: 140,
    pathMap: map_3BA_15,
    pathUnit: unit_3BA_15,
  },
];

export type StructureNode = {
  id: string;
  label: string;
  children?: StructureNode[] | Unit[];
};

export const elunaStructure: StructureNode = {
  id: "eluna",
  label: "Eluna",
  children: [
    { id: "m1", label: "M1" },
    { id: "m2", label: "M2" },
    { id: "m3-m6", label: "M3-M6" },
    {
      id: "2-35",
      label: "2-35",
      children: units,
    },
  ],
};
