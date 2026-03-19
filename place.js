// FOOTER DATES
const year = document.getElementById("year");
const lastModified = document.getElementById("lastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

// WEATHER VALUES (STATIC)
const temp = 28; // °C
const windSpeed = 10; // km/h

// FUNCTION
function calculateWindChill(t, v) {
    return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);
}

// DISPLAY WIND CHILL
const windChillElement = document.getElementById("windchill");

if (temp <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = calculateWindChill(temp, windSpeed).toFixed(1) + " °C";
} else {
    windChillElement.textContent = "N/A";
}