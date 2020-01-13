const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav 
const links = document.querySelectorAll('a');
for (let i = 0; i < links.length; i++) {
  links[i].classList.add(`nav-item-${i + 1}`);
  links[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
}

// Heading

const topContent = document.querySelector('h1');
topContent.textContent = siteContent["cta"]["h1"]

const getStartedBtn = document.querySelector('button');
getStartedBtn.textContent = siteContent["cta"]["button"]

const mainImg = document.querySelector('#cta-img');
mainImg.setAttribute('src', siteContent["cta"]["img-src"])

// Main Content Headings

    // feature

    document.querySelector('.main-content').getElementsByTagName('h4')[0].textContent = siteContent['main-content']['features-h4'];
    // about

    document.querySelector('.main-content').getElementsByTagName('h4')[1].textContent = siteContent['main-content']['about-h4'];
    // services

    document.querySelector('.main-content').getElementsByTagName('h4')[2].textContent = siteContent['main-content']['services-h4'];
    // product

    document.querySelector('.main-content').getElementsByTagName('h4')[3].textContent = siteContent['main-content']['product-h4'];
    // vision

    document.querySelector('.main-content').getElementsByTagName('h4')[4].textContent = siteContent['main-content']['vision-h4'];

// Main Content Info

    // feature

    document.querySelector('.main-content').getElementsByTagName('p')[0].textContent = siteContent['main-content']['features-content'];
    // about

    document.querySelector('.main-content').getElementsByTagName('p')[1].textContent = siteContent['main-content']['about-content'];
    // services

    document.querySelector('.main-content').getElementsByTagName('p')[2].textContent = siteContent['main-content']['services-content'];
    // product

    document.querySelector('.main-content').getElementsByTagName('p')[3].textContent = siteContent['main-content']['product-content'];
    // vision

    document.querySelector('.main-content').getElementsByTagName('p')[4].textContent = siteContent['main-content']['vision-content'];

    // Main Content Img

    const middleImg = document.querySelector('.middle-img');
    middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Contact Content

    // contact heading
    document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4'];

    // address
    document.querySelector('.contact').getElementsByTagName('p')[0].textContent = siteContent['contact']['address'];
    // phone

    document.querySelector('.contact').getElementsByTagName('p')[1].textContent = siteContent['contact']['phone'];
    // email

    document.querySelector('.contact').getElementsByTagName('p')[2].textContent = siteContent['contact']['email'];

// Footer Content

    document.querySelector('footer p').textContent = siteContent['footer']['copyright']