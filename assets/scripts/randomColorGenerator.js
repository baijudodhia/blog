function getRandomColorLight() {
  color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  return color;
}
function getRandomColorDark() {
  color = "hsl(" + Math.random() * 360 + ", 100%, 25%)";
  return color;
}
function getRandomColorGradientLightPredefined() {
  const gradients = [
    "linear-gradient(to right, #efefbb, #d4d3dd);",
    "linear-gradient(to right, #efefbb, #d4d3dd);",
    "linear-gradient(to right, #efefbb, #d4d3dd);",
  ];
  return String(gradients[Math.floor(Math.random() * gradients.length)]);
}
