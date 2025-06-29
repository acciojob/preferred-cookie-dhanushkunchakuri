function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (let cook of cookies) {
    let [key, value] = cook.trim().split("=");
    if (name === key) return value;
  }
  return null;
}

window.addEventListener("DOMContentLoaded", () => {
  let fontsize = getCookie("fontsize");
  let fontcolor = getCookie("fontcolor");

  if (fontsize) {
    document.documentElement.style.setProperty("--fontsize", fontsize + "px");
    document.getElementById("fontsize").value = fontsize;
  }

  if (fontcolor) {
    document.documentElement.style.setProperty("--fontcolor", fontcolor);
    document.getElementById("fontcolor").value = fontcolor;
  }
});

document.getElementById("preferences-form").addEventListener("submit", (e) => {
  e.preventDefault();

  let fontsizee = document.getElementById("fontsize").value;
  let fontcolorr = document.getElementById("fontcolor").value;

  document.cookie = `fontsize=${fontsizee}`;
  document.cookie = `fontcolor=${fontcolorr}`;

  document.documentElement.style.setProperty("--fontsize", fontsizee + "px");
  document.documentElement.style.setProperty("--fontcolor", fontcolorr);
});
