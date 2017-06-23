export const findAssignerIndex = (assigners, name) => assigners.findIndex(
  (a) => a.name === name
);

const imagePath = (name) => (`/res/idols/${name}.png`);
const newAssigner = (name, avatarPath, idolGroup, schoolYear) => ({
  name,
  avatarPath,
  idolGroup,
  schoolYear,
  affection: Math.floor(Math.random() * 100),
  quests: []
});
export const GROUPS = [
  "µ's",
  "Aqours",
  "PDP",
];
export const YEARS = [
  "First-Year",
  "Second-Year",
  "Third-Year",
];

export const defaultAssigners = [
  newAssigner("None", imagePath("None"), "", ""),
  newAssigner("Hanayo", imagePath("Hanayo"), GROUPS[0], YEARS[0]),
  newAssigner("Maki", imagePath("Maki"), GROUPS[0], YEARS[0]),
  newAssigner("Rin", imagePath("Rin"), GROUPS[0], YEARS[0]),
  newAssigner("Kotori", imagePath("Kotori"), GROUPS[0], YEARS[1]),
  newAssigner("Honoka", imagePath("Honoka"), GROUPS[0], YEARS[1]),
  newAssigner("Umi", imagePath("Umi"), GROUPS[0], YEARS[1]),
  newAssigner("Nico", imagePath("Nico"), GROUPS[0], YEARS[2]),
  newAssigner("Eli", imagePath("Eli"), GROUPS[0], YEARS[2]),
  newAssigner("Nozomi", imagePath("Nozomi"), GROUPS[1], YEARS[2]),
  newAssigner("Yoshiko", imagePath("Yoshiko"), GROUPS[1], YEARS[0]),
  newAssigner("Hanamaru", imagePath("Hanamaru"), GROUPS[1], YEARS[0]),
  newAssigner("Ruby", imagePath("Ruby"), GROUPS[1], YEARS[0]),
  newAssigner("Chika", imagePath("Chika"), GROUPS[1], YEARS[1]),
  newAssigner("You", imagePath("You"), GROUPS[1], YEARS[1]),
  newAssigner("Riko", imagePath("Riko"), GROUPS[1], YEARS[1]),
  newAssigner("Dia", imagePath("Dia"), GROUPS[1], YEARS[2]),
  newAssigner("Kanan", imagePath("Kanan"), GROUPS[1], YEARS[2]),
  newAssigner("Mari", imagePath("Mari"), GROUPS[1], YEARS[2]),
  newAssigner("Kasumi", imagePath("Kasumi"), GROUPS[2], YEARS[0]),
  newAssigner("Shizuku", imagePath("Shizuku"), GROUPS[2], YEARS[0]),
  newAssigner("Rina", imagePath("Rina"), GROUPS[2], YEARS[0]),
  newAssigner("Ayumu", imagePath("Ayumu"), GROUPS[2], YEARS[1]),
  newAssigner("Ai", imagePath("Ai"), GROUPS[2], YEARS[1]),
  newAssigner("Setsuna", imagePath("Setsuna"), GROUPS[2], YEARS[1]),
  newAssigner("Karin", imagePath("Karin"), GROUPS[2], YEARS[2]),
  newAssigner("Kanata", imagePath("Kanata"), GROUPS[2], YEARS[2]),
  newAssigner("Emma", imagePath("Emma"), GROUPS[2], YEARS[2]),
];