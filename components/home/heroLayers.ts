export type HeroLayerState = {
  struct: boolean;
  wall: boolean;
  hvac: boolean;
  water: boolean;
  elec: boolean;
  clash: boolean;
  label: string;
};

export const heroLayerSets: HeroLayerState[] = [
  {
    struct: true,
    wall: true,
    hvac: true,
    water: true,
    elec: true,
    clash: true,
    label: "ALL LAYERS ACTIVE",
  },
  {
    struct: true,
    wall: false,
    hvac: true,
    water: false,
    elec: false,
    clash: true,
    label: "HVAC CLASH MODE",
  },
  {
    struct: true,
    wall: true,
    hvac: false,
    water: true,
    elec: false,
    clash: false,
    label: "MEP WATER ROUTING",
  },
  {
    struct: true,
    wall: false,
    hvac: false,
    water: false,
    elec: true,
    clash: false,
    label: "ELECTRICAL LAYOUT",
  },
  {
    struct: true,
    wall: true,
    hvac: true,
    water: true,
    elec: true,
    clash: true,
    label: "FULL BIM OVERLAY",
  },
];

