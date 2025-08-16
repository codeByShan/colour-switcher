let main = document.querySelector("#main");
let randomBtn = document.querySelector("#btnRandom");
let applyBtn = document.querySelector("#btnApply");
let input = document.querySelector(".inputColor");
let span = document.querySelector(".currentColorValue");

// Array of colors :
const colorNames = [
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blue",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgreen",
  "darkgrey",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategray",
  "darkslategrey",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dimgrey",
  "dodgerblue",
  "firebrick",
  "floralwhite",
  "forestgreen",
  "fuchsia",
  "gainsboro",
  "ghostwhite",
  "gold",
  "goldenrod",
  "gray",
  "green",
  "greenyellow",
  "grey",
  "honeydew",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgray",
  "lightgreen",
  "lightgrey",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",
  "lightslategrey",
  "lightsteelblue",
  "lightyellow",
  "lime",
  "limegreen",
  "linen",
  "magenta",
  "maroon",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "navy",
  "oldlace",
  "olive",
  "olivedrab",
  "orange",
  "orangered",
  "orchid",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",
  "peru",
  "pink",
  "plum",
  "powderblue",
  "purple",
  "rebeccapurple",
  "red",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",
  "sandybrown",
  "seagreen",
  "seashell",
  "sienna",
  "silver",
  "skyblue",
  "slateblue",
  "slategray",
  "slategrey",
  "snow",
  "springgreen",
  "steelblue",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "wheat",
  "white",
  "whitesmoke",
  "yellow",
  "yellowgreen",
];

// created a function to generate random number and working with buttons :
const generateRandomColor = () => {
  let Red = Math.floor(Math.random() * 147);
  let Blue = Math.floor(Math.random() * 254);
  let Green = Math.floor(Math.random() * 87);
  main.style.backgroundColor = `rgb(${Red}, ${Blue}, ${Green})`;
  randomBtn.style.borderColor = "white";
};

//created a function that handle changing color :
const changeColor = (color) => {
  main.style.backgroundColor = color;
};

//valid name of color :
function isValidColorName(color) {
  return colorNames.includes(color.toLowerCase());
}

randomBtn.addEventListener("click", generateRandomColor);


// -----------------------



function isValidColor(strColor) {
    // Create a dummy element to test
    let s = new Option().style;

    // First, check if it's a valid named color
    s.color = strColor;
    if (s.color !== '') return true;

    // Check HEX format (#RRGGBB or #RGB)
    if(/^#([0-9A-F]{3}){1,2}$/i.test(strColor)) return true;

    // Check RGB or RGBA format
    if(/^rgb(a)?\(\s*(\d{1,3}\s*,\s*){2,3}\d{1,3}\s*(,\s*(0|0?\.\d+|1))?\s*\)$/i.test(strColor)) return true;

    return false; // Not valid
}



// -----------------------


const handleApplyBtnClick = () => {
  let colorName = input.value.trim();

  if (colorName === "") {
    alert("Type any name of the color in the input");
    return;
  }

//   if (!isValidColorName(colorName)) {
//     alert("Invalid color name! Please type an exact CSS color name.");
//     return;
// }

if(!isValidColor(colorName)){
    alert("Invalid color ! Please type an exact CSS color code.");
    return;
  }

  changeColor(colorName);
  span.textContent = colorName;
  span.style.color = colorName;
  input.value = "";
};

applyBtn.addEventListener("click", handleApplyBtnClick);

// if(input.value === ''){
//     alert("Type the name of any color in the input");
// }else{
//     let colorName = input.value;
//     changeColor(colorName);
//     span.textContent = colorName;
//     span.style.color = colorName;
//     input.value = "";
// }
