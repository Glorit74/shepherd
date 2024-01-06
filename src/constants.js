const menu = [
  { id: 1, label: "kihajtás, behajtás", active: true },
  { id: 2, label: "jelölés", active: false },
  { id: 3, label: "legeltetés", active: true },
  { id: 4, label: "juhfejés", active: false },
  { id: 5, label: "terelés", active: false },
  { id: 6, label: "juhnyírás", active: false },
  { id: 7, label: "sózás", active: false },
  { id: 8, label: "betörés", active: false },
  { id: 9, label: "gyógyítás", active: false },
  { id: 10, label: "takarmányozás", active: false },
  { id: 11, label: "etetés", active: false },
];

const COLORS = {
  white: "hsl(0deg 0% 100%)",
  buttonBg: "hsl(0 0% 10% / 0.2)",
  buttonBgHover: "hsl(0 0% 30% / 0.5)",
  primary: "hsl(240deg 80% 60%)",
  gray50: "hsl(0deg 0% 95%)",
  gray300: "hsl(0deg 0% 75%)",
  gray500: "hsl(0deg 0% 50%)",
  gray700: "hsl(0deg 0% 40%)",
  black: "hsl(0deg 0% 0%)",
  transparentGray15: "hsl(0deg 0% 50% / 0.15)",
  transparentGray35: "hsl(0deg 0% 50% / 0.35)",
};

export { menu, COLORS };
