// scripts/place.js
// - Sets current year
// - Shows last modified date
// - Calculates and displays wind chill using a single-line calculateWindChill function
// - Only computes/charts wind chill when conditions are met (T <= 10°C and wind > 4.8 km/h)

document.addEventListener('DOMContentLoaded', () => {
  // Update current year in footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Update last modified date using document.lastModified
  const lastEl = document.getElementById('last-modified');
  if (lastEl) {
    const lm = document.lastModified ? new Date(document.lastModified) : null;
    lastEl.textContent = lm ? lm.toLocaleString() : document.lastModified || 'Unknown';
  }

  // Static values for weather section (assignment requires static values now)
  const tempEl = document.getElementById('temp');
  const windEl = document.getElementById('wind');
  const wcEl = document.getElementById('windchill');

  // Parse displayed static values (these match the page's visible content)
  const T = tempEl ? parseFloat(tempEl.textContent) : 8;    // temp in °C
  const v = windEl ? parseFloat(windEl.textContent) : 20;   // wind speed in km/h

  // Single-line wind chill function (metric formula)
  // Formula used: 13.12 + 0.6215*T - 11.37*v**0.16 + 0.3965*T*v**0.16
  function calculateWindChill(tempC, windKmh) {
    return 13.12 + 0.6215*tempC - 11.37*Math.pow(windKmh, 0.16) + 0.3965*tempC*Math.pow(windKmh, 0.16);
  }

  // Viable wind chill conditions for Metric units:
  // Temperature <= 10 °C and wind speed > 4.8 km/h
  if (T <= 10 && v > 4.8) {
    const wc = calculateWindChill(T, v);
    // Round to one decimal place for display
    if (wcEl) wcEl.textContent = `${wc.toFixed(1)} °C`;
  } else {
    if (wcEl) wcEl.textContent = 'N/A';
  }
});
