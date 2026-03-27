// TEMPLE ARRAY (with working images)
const temples = [
  {
    name: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "http://t2.gstatic.com/images?q=tbn:ANd9GcRhBegq6v3CzppU1U_2sDxqbEw0N4eY1QJPl2YgG83HLgyTyjfJ"
  },
  {
    name: "Manti Utah",
    location: "Manti, Utah, USA",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "http://t1.gstatic.com/images?q=tbn:ANd9GcQ4tUTA7gRGNw_4bnkfIJQQJaKfS0sQIg4RXYbpAjWvyS36VhaP"
  },
  {
    name: "Payson Utah",
    location: "Payson, Utah, USA",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "http://t2.gstatic.com/images?q=tbn:ANd9GcTG63Y77em7reO0aTdAofkeFPu6UW_a89CQuL0mvsGn0WQ4Ykou"
  },
  {
    name: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "http://t2.gstatic.com/images?q=tbn:ANd9GcQ6nJUftOP7e1Zgpzh2RnV2u_7ZQU-5bTLu3GXsHQi6drSx6dE6"
  },
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "http://t0.gstatic.com/images?q=tbn:ANd9GcRv0lnrdh3NRftVdIMZ2234Nvvq-3T-PGZ3JYHHTn1yakIrc9Gp"
  },
  {
    name: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "http://t2.gstatic.com/images?q=tbn:ANd9GcSirZHwyMlKrrim_RbzXgvVrK7Ip1-bbE_aApFMu9Z41yzQWJOf"
  },
  {
    name: "Los Angeles Temple",
    location: "Los Angeles, California, USA",
    dedicated: "1956, March, 11",
    area: 190614,
    imageUrl: "http://t0.gstatic.com/images?q=tbn:ANd9GcR7ZrxqC9u4FkjiTdEF6x02BafEH9KagX4fsaLXmZkL2PW7NZUI"
  },
  {
    name: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44000,
    imageUrl: "http://t1.gstatic.com/images?q=tbn:ANd9GcR4jPqNJ3-YblL-tUDKdfrpO3TMBHd_5krLKJqgTKGMNXJ41lDl"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41000,
    imageUrl: "http://t3.gstatic.com/images?q=tbn:ANd9GcRdvwcneCY6W4uxrmNIgktr-BMUwUARxbP5_6Lc4nL35Q7RWksj"
  }
];

// DISPLAY FUNCTION (creates temple cards dynamically)
function displayTemples(templesList) {
  const container = document.getElementById("temple-container");
  container.innerHTML = ""; // Clear previous content

  templesList.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${temple.name}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy" style="width:100%; height:auto;">
    `;

    container.appendChild(card);
  });
}

// FILTER FUNCTION
function filterTemples(type) {
  let filtered;
  switch (type) {
    case "old":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      break;
    case "new":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }
  displayTemples(filtered);
}

// FOOTER
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

// INITIAL LOAD
displayTemples(temples);