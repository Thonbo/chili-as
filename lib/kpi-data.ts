export interface KPIItem {
  label: string;
  value: string;
  sub: string;
  numeric?: number; // if provided, count-up animation is used
  status: "green" | "yellow" | "red" | "neutral";
}

export const kpiData: KPIItem[] = [
  {
    label: "Månedlig indkomst",
    value: "EKSISTERER",
    sub: "Bekræftet. Kilde: Netto lønsseddel.",
    status: "green",
  },
  {
    label: "Månedlig opsparing",
    value: "OMSTRIDT",
    sub: "Analytikere anbefaler yderligere undersøgelse.",
    status: "red",
  },
  {
    label: "Bil-fond fremgang",
    value: "OPTIMISTISK",
    sub: "Følelsesmæssigt stærk. Numerisk uklar.",
    status: "yellow",
  },
  {
    label: "Skin-inventar",
    value: "SUND",
    sub: "Uforklarligt og imponerende robust.",
    status: "green",
  },
  {
    label: "Kontostabilitet",
    value: "KRITISK",
    sub: "Analysebureauer nedgraderer løbende.",
    status: "red",
  },
  {
    label: "Outfit-budget",
    value: "ACCELERERENDE",
    sub: "Ny strategisk vækstzone identificeret.",
    status: "yellow",
  },
];

export const transportKPI: KPIItem[] = [
  {
    label: "Scootere erhvervet",
    value: "5",
    numeric: 5,
    sub: "Bekræftet af far. Ikke konservativt.",
    status: "neutral",
  },
  {
    label: "Scootere bibeholdt",
    value: "0",
    numeric: 0,
    sub: "Strategisk restrukturering gennemført.",
    status: "red",
  },
  {
    label: "Dirt bike færdiggørelse",
    value: "12%",
    numeric: 12,
    sub: "Fremgang forventet. Tidslinje åben.",
    status: "yellow",
  },
  {
    label: "KuKirin G4 status",
    value: "AKTIV",
    sub: "Eneste tilbageværende aktiv i flåden.",
    status: "green",
  },
];

export const cs2KPI: KPIItem[] = [
  {
    label: "Skin-portefølje",
    value: "OVERVEJET",
    sub: "Investeret med præcision. Ingen budget-bekymringer.",
    status: "green",
  },
  {
    label: "Hardware setup",
    value: "RTX 5070",
    sub: "Logitech Pro. Frames vinder argumenter.",
    status: "green",
  },
  {
    label: "Broderskab-gap",
    value: "MARKANT",
    sub: "Storebror spiller på signifikant højere niveau.",
    status: "red",
  },
];
