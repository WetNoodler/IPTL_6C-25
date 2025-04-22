const colorBox = document.getElementById('colorBox');
const hexCode = document.getElementById('hexCode');

const getColor = () => {
  fetch('https://x-colors.yurace.pro/api/random')
    .then(res => res.json())
    .then(data => {
      const hex = data.hex;
      
      colorBox.style.backgroundColor = hex;
      colorBox.style.color = getContrast(hex);
      colorBox.textContent = hex;
    })
    .catch(err => {
      colorBox.textContent = "Error!";
      hexCode.textContent = "Could not fetch color.";
      console.error(err);
    });
};

const getContrast = (hex) => {
  const r = parseInt(hex.substr(1, 2), 16);
  const g = parseInt(hex.substr(3, 2), 16);
  const b = parseInt(hex.substr(5, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 125 ? '#000' : '#fff';
};

window.onload = getColor;
