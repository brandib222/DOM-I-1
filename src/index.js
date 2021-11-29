const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "mocks/img/logo.png",
    "cta-img": "mocks/img/cta.png",
    "accent-img": "mocks/img/accent.png",
  },
};
// select all of the navs
const siteNav1 = document.querySelector('nav');
const links = document.querySelectorAll('nav a');

// select elements of the top
const siteTitle = document.querySelector('.cta h1');
const siteButton = document.querySelector('.cta button');

// select elements of the feature section
const featuresHeader = document.querySelector('h4:nth-of-type(1)');
const featuresContent = document.querySelector('p:nth-of-type(1)');

// select elements of the about section
const aboutHeader = document.querySelector('h4:nth-of-type(2)');
const aboutContent = document.querySelector('p:nth-of-type(2)');

// select elements of services section
const servicesHeader = document.querySelector('h4:nth-of-type(3)');
const servicesContent = document.querySelector('p:nth-of-type(3)');

// select elements of the product section
const productHeader = document.querySelector('h4:nth-of-type(4)');
const productContent = document.querySelector('p:nth-of-type(4)');

// select elements of vision section
const visionHeader = document.querySelector('h4:nth-of-type(5)');
const visionContent = document.querySelector('p:nth-of-type(5)');

// select elements of contact section
const contactHeader = document.querySelector('h4:nth-of-type(6)');
const contactAddress = document.querySelector('p:nth-of-type(7)');
const contactPhone = document.querySelector('p:nth-of-type(8)');
const contactEmail = document.querySelector('p:nth-of-type(9)')

// select all elements of footer section
const siteFooter = document.querySelector('footer');

// select all elements of image section
const logoImg = document.querySelector('.logo-img');
const ctaImg = document.querySelector('.cta-img');
const accentImg = document.querySelector('.accent-img');

// append some stuff ???
//document.querySelector('h4').appendChild(featuresHeader);

// update the text content for top part
siteTitle.textContent = 'DOM Is Awesome';
siteButton.textContent = 'Get Started';

// update text content for features
featuresHeader.textContent = 'Features';
featuresContent.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//update content for about
aboutHeader.textContent = 'About';
aboutContent.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//update content for services

//update content for product

//update content for vision

//update content for contact

siteFooter.textContent = 'Copyright Great Idea! 2021';


console.log('project wired!')
