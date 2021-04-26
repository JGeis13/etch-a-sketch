function darken(hex, amount) {
  let r = parseInt(hex.substr(1, 2), 16),
    g = parseInt(hex.substr(3, 2), 16),
    b = parseInt(hex.substr(5, 2), 16);

  console.log(r, g, b);

  let newColor = "#";

  [r, g, b].forEach((c) => {
    console.log(Math.max(0, Math.round(c - 255 * amount)));
    newColor += Math.max(0, Math.round(c - 255 * amount)).toString(16);
  });

  return;
}

function randomHex() {
  let hex = "#";

  for (let i = 0; i < 3; i++) {
    let c = Math.floor(Math.random() * 256).toString(16);
    hex += c.length < 2 ? "0" + c : c;
  }

  return hex;
}

for (let i = 0; i < 20; i++) {
  console.log(randomHex());
}
