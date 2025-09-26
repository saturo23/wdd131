// Placeholder image in case a temple image is missing
const placeholderImage = "images/temple-placeholder.jpg"; // make sure you have this in your images folder

// Array of Temple Objects
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-utah/400x250/salt-lake-temple-lds-807951-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-lds-749270-wallpaper.jpg"
  },
  {
    templeName: "Durban South Africa",
    location: "Durban, South Africa",
    dedicated: "2020, February, 16",
    area: 19860,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/400x250/durban-south-africa-temple-exterior.jpg"
  }
];

// Select container
const container = document.getElementById("temple-cards");

// Function to create a temple card
function createTempleCard(temple) {
  return `
    <div class="card">
      <img src="${temple.imageUrl || placeholderImage}" alt="${temple.templeName}" loading="lazy">
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    </div>
  `;
}

// Render temples
function displayTemples(filteredTemples) {
  container.innerHTML = filteredTemples.map(createTempleCard).join("");
}

// Filter buttons
document.getElementById("home").addEventListener("click", () => displayTemples(temples));
document.getElementById("old").addEventListener("click", () => {
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
});
document.getElementById("new").addEventListener("click", () => {
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
});
document.getElementById("large").addEventListener("click", () => {
  displayTemples(temples.filter(t => t.area > 90000));
});
document.getElementById("small").addEventListener("click", () => {
  displayTemples(temples.filter(t => t.area < 10000));
});

// Initial load
displayTemples(temples);

// Footer dynamic year + last modified with your name and happy emoji
const footer = document.querySelector("footer");
const currentYear = new Date().getFullYear();
const lastMod = document.lastModified;
footer.innerHTML = `
  <p>&copy; ${currentYear} 🌍 Mduduzi Mashanda</p>
  <p>Last Modified: ${lastMod} </p>
`;
