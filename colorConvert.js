function darkenHex(hex, amount) {
  let r = parseInt(hex.substr(1, 2), 16),
    g = parseInt(hex.substr(3, 2), 16),
    b = parseInt(hex.substr(5, 2), 16);

  let newColor = "#";

  [r, g, b].forEach((c) => {
    newC = Math.max(0, Math.round(c - 255 * amount)).toString(16);
    newColor += newC.length < 2 ? "0" + newC : newC;
  });

  return newColor;
}

function rgbToHex(rgb) {
  let [r, g, b] = rgb.match(/\d+/g);
  return (
    "#" +
    [+r, +g, +b]
      .map((c) => {
        c = c.toString(16);
        return c.length < 2 ? "0" + c : c;
      })
      .join("")
  );
}

function randomHex() {
  let hex = "#";

  for (let i = 0; i < 3; i++) {
    let c = Math.floor(Math.random() * 256).toString(16);
    hex += c.length < 2 ? "0" + c : c;
  }

  return hex;
}
