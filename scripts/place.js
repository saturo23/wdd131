/// ✅ Wind chill calculation function (Celsius)
function calculateWindChill(t, v) {
  return 13.12 + 0.6215*t - 11.37*Math.pow(v,0.16) + 0.3965*t*Math.pow(v,0.16);
}

// ✅ Read values
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
const chill = document.getElementById("chill");

// ✅ Only calculate if conditions are valid
if (temp <= 10 && wind > 4.8) {
  chill.textContent = calculateWindChill(temp, wind).toFixed(1) + " °C";
} else {
  chill.textContent = "N/A";
}

// ✅ Footer info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;
