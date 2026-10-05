function getRandomColor() {
  
  const hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return { hex, rgb: `rgb(${r}, ${g}, ${b})` };
}

const color = getRandomColor();
console.log("HEX:", color.hex); // e.g., HEX: #3a86ff
console.log("RGB:", color.rgb); // e.g., RGB: rgb(58, 134, 255)