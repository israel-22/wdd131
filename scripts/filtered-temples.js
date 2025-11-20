
document.getElementById("currentYear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
  `Last modification: ${document.lastModified}`;


const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuButton.textContent = menuButton.textContent === "☰" ? "✖" : "☰";
});


//Array to hold temple data
const temples =[
  {
    templeName: "Aba Nigeria",
    location:" Aba, Nigeria" ,
    dedicated: "2005 ,August, 7" ,
    area: 11500,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName:" Manti Utah",
    location:" Manti, Utah" ,
    dedicated:" 1888, May, 21" , 
    area: 74792,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: " Payson Utah",
    location: " Payson, Utah",
    dedicated: " 2015, June, 7" ,
    area: 96630,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: " Yigo Guam",
    location: " Yigo, Guam",
    dedicated:" 2020, May, 2" ,
    area: 6861,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: " Washington D.C.",
    location: " Kensington, Maryland",
    dedicated:" 1974, November, 19" ,
    area: 156558,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: " Lima Peru",
    location: " Lima, Peru",
    dedicated:" 1986, November, 10" ,
    area: "9600",
   imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: " Mexico City Mexico",
    location: " Mexico City, Mexico",
    dedicated:" 1983, December, 2" ,
    area: 116642,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Quito Ecuador",
    location: "Quito, Ecuador",
    dedicated: "2022, November, 20",
    area: 36000,
    imageUrl: "https://images.squarespace-cdn.com/content/v1/5ebf2dcaafacfd347de238f1/88d42b48-d121-4c79-b6e0-19144e14b8f3/quito-ecuador-temple-31202.jpg"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California",
    dedicated: "1993, April, 25",
    area: 72000,
    imageUrl: "https://es.thechurchnews.com/resizer/v2/MAJJEDMI2XQ7CZC7JEX6CQT5YQ.jpg?auth=e45bcf2857ce108460eded6996c5b4818b412ed32dd1105d2c47305957d640ba&focal=1134%2C728&width=800&height=598"
  },
  {
    templeName: " Guayaquil Ecuador",
    location: " Guayaquil, Ecuador",
    dedicated:" 1999, August, 1" ,
    area: 40736,
    imageUrl:"https://upload.wikimedia.org/wikipedia/commons/c/cb/LDS_Temple_Ecuador.jpg"
  },
 
];

// rendered function

function renderTemples(list) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  list.forEach( t=>{
    const figure = document.createElement("figure");

    figure.innerHTML= `<img loading="lazy" src="${t.imageUrl}" alt="${t.templeName}">
    <figcaption>
    <h3>${t.templeName}</h3>
    <p> <strong>Location:</strong> ${t.location}</p>   
    <p> <strong>Dedication:</strong> ${t.dedicated}</p>  
    <p> <strong>Area</strong> ${t.area}</p>  
    `;

    gallery.appendChild(figure);
  });

 
}

renderTemples(temples);

//filtering function

document.getElementById("home").addEventListener("click", () => {
  document.getElementById("current-filter").textContent= "home";
  renderTemples(temples);
});

document.getElementById("old").addEventListener("click", () => {
  document.getElementById("current-filter").textContent= "Old Temples";
  renderTemples(temples.filter(t=>parseInt(t.dedicated)<1900));
});

document.getElementById("new").addEventListener("click", () => {
  document.getElementById("current-filter").textContent= "New Temples";
  renderTemples(temples.filter(t=>parseInt(t.dedicated)>2000));
});

document.getElementById("large").addEventListener("click", () => {
  document.getElementById("current-filter").textContent= "Large Temples";
  renderTemples(temples.filter(t=>t.area>90000));
});

document.getElementById("small").addEventListener("click", () => {
  document.getElementById("current-filter").textContent = "Small Temples";
  renderTemples(temples.filter(t => t.area < 10000));
});