const backgrounds = [
  "c315fc65-7433-41af-aea9-2d13826ff8e3.jpg",
  "e01a8e2a-f8b4-453d-9536-abb43a0b8272.jpg",
  "fdae9f4b-480d-4b9d-90dd-4cdb4f17374e.jpg"
];

function getRandomBackground() {
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  return backgrounds[randomIndex];
}
