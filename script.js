// 1. ANIMACIONES AOS
const script = document.createElement('script');
script.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
script.onload = () => { AOS.init(); };
document.head.appendChild(script);

// 2. CARRUSEL
let slideIndex = { 'carousel-bench': 0, 'carousel-table': 0, 'carousel-scooter': 0 };

function moveSlide(id, step) {
  const container = document.getElementById(id);
  const images = container.getElementsByTagName('img');
  const total = images.length;
  slideIndex[id] += step;
  if (slideIndex[id] >= total) slideIndex[id] = 0;
  if (slideIndex[id] < 0) slideIndex[id] = total - 1;
  container.style.transform = `translateX(-${slideIndex[id] * 100}%)`;
}

// 3. CALCULADORA
function calculateProfit() {
  const input = document.getElementById('benchInput');
  const amountSpan = document.getElementById('profitAmount');
  const profitPerBench = 500; 
  if(input.value > 0) {
    const total = input.value * profitPerBench;
    amountSpan.innerText = total.toLocaleString('eu-ES'); 
    document.getElementById('resultBox').style.display = 'block';
  } else {
    alert("Zenbaki bat sartu mesedez / Introduce un número / Please enter a number");
  }
}

// 4. TRADUCCIÓN COMPLETA
const translations = {
  eu: {
    heroTitle: "Eguzkitik jaio eta denengana iristen den energia",
    heroSubtitle: "Usurbilgo LHko ikasleek sortutako proiektu berritzailea",
    ctaBtn: "Ezagutu Proiektua",
    aboutTitle: "Nor gara?",
    aboutText: "Elektrizitate adarreko heziketa zikloko ikasle gazte batzuk gara eta klaseko proiektu batekin abiatu dugu hau. Gure helburu nagusia eguzki-energia publikoki erabiltzea eta banatzea da.",
    // Roadmap
    roadmapTitle: "Proiektuaren Egoera",
    rm1Title: "Ideia eta Diseinua", rm1Desc: "Planifikazioa eta diseinu teknikoak amaituta.", rm1Badge: "Egina",
    rm2Title: "Prototipoa", rm2Desc: "Lehen unitate funtzionala eraikitzen Usurbil LHn.", rm2Badge: "Prozesuan",
    rm3Title: "App Garapena", rm3Desc: "APN aplikazioaren bertsio Beta eta ordainketa sistema.", rm3Badge: "Egiteke",
    rm4Title: "Hedapena Gipuzkoan", rm4Desc: "Lehen instalazioak probintziako udalerrietan.", rm4Badge: "Egiteke",
    // Products
    productsTitle: "Gure Produktuak",
    titleBench: "EKI Seat", descBench: "Eguzki-energiaz elikatutako banku adimenduna. Kargatu zure gailuak modu jasangarrian.",
    titleTable: "KALEA Work", descTable: "Lanerako edo aisialdirako mahai perfektua. Itzala, energia eta konexioa leku berean.",
    titleScooter: "HIRI Go", descScooter: "Patinete eta bizikleta elektrikoentzako aparkaleku eta karga gunea.",
    // App
    appTitle: "APN App: Konektatu eta Irabazi",
    appDesc: "Gure eredua bakarra da. APN aplikazioaren bidez, erabiltzaileek harpidetza ordaintzen dute. Irabaziak Udalarekin partekatzen ditugu.",
    appBadge: "Laster", appFeat1: "Revenue Share (Irabaziak partekatu)", appFeat2: "App Harpidetza", appFeat3: "Komunitatea Sortu", appBtn: "Deskargatu (Beta)",
    // Calculadora
    calcTitle: "Kalkulatu zure Udalaren Irabaziak", calcSubtitle: "Zenbat EKI Seat jarriko zenituzke zure herrian?",
    calcBtn: "Kalkulatu", yearText: "Urtean", calcNote: "*Estimazioa: %50eko banaketa Udalarentzat.",
    // Servicios
    serviceTitle: "Gure Zerbitzuak", maintTitle: "Instalazioen Mantentzea", maintDesc: "Gure talde teknikoak zure instalazioak egoera ezin hobean mantentzen ditu.", maintBtn: "Eskatu Aurrekontua",
    // Blog
    blogTitle: "Gure Filosofia", blogTag1: "Komunitatea", art1Title: "Eguzkia: Elkartzeko aitzakia", art1Text: "Gure helburua eguzki-energiaren inguruan komunitate bat sortzea da.",
    blogTag2: "Garapena", art2Title: "Ideiatik Errealitatera", art2Text: "Une honetan, APN fase kontzeptualean dago. Hurrengo pausoa: prototipoa eraikitzea.",
    // Team & Footer
    teamTitle: "Gure Taldea", roleMarkel: "Liderra / Protagonista", roleAnder: "Bitartekaria", roleDennis: "Teknikaria", roleLander: "Ekintzailea",
    partnersText: "Laguntzaileak:", contactTitle: "Kontaktua"
  },
  es: {
    heroTitle: "La energía que nace del sol y llega a todos",
    heroSubtitle: "Un proyecto innovador creado por estudiantes de FP de Usurbil",
    ctaBtn: "Conoce el Proyecto",
    aboutTitle: "¿Quiénes somos?",
    aboutText: "Somos un grupo de jóvenes estudiantes del ciclo formativo de electricidad y hemos lanzado esto como un proyecto de clase. Nuestro objetivo principal es utilizar y repartir la energía solar públicamente.",
    // Roadmap
    roadmapTitle: "Estado del Proyecto",
    rm1Title: "Idea y Diseño", rm1Desc: "Planificación y diseños técnicos finalizados.", rm1Badge: "Hecho",
    rm2Title: "Prototipo", rm2Desc: "Construyendo la primera unidad funcional en Usurbil LH.", rm2Badge: "En Proceso",
    rm3Title: "Desarrollo App", rm3Desc: "Versión Beta de la App APN y sistema de pagos.", rm3Badge: "Pendiente",
    rm4Title: "Expansión Gipuzkoa", rm4Desc: "Primeras instalaciones en municipios de la provincia.", rm4Badge: "Pendiente",
    // Products
    productsTitle: "Nuestros Productos",
    titleBench: "EKI Seat", descBench: "Banco inteligente solar. Carga tus dispositivos de forma sostenible.",
    titleTable: "KALEA Work", descTable: "La mesa perfecta para trabajo u ocio. Sombra, energía y conexión.",
    titleScooter: "HIRI Go", descScooter: "Punto de carga y parking para patinetes eléctricos y bicicletas.",
    // App
    appTitle: "App APN: Conecta y Gana",
    appDesc: "Nuestro modelo es único. Mediante la App APN, los usuarios pagan una suscripción. Compartimos ingresos con el Ayuntamiento.",
    appBadge: "Próximamente", appFeat1: "Revenue Share (Ganancias compartidas)", appFeat2: "Suscripción App", appFeat3: "Crear Comunidad", appBtn: "Descargar (Beta)",
    // Calculadora
    calcTitle: "Calcula los Beneficios Municipales", calcSubtitle: "¿Cuántos EKI Seat pondrías en tu municipio?",
    calcBtn: "Calcular", yearText: "Año", calcNote: "*Estimación: 50% de reparto para el Ayuntamiento.",
    // Servicios
    serviceTitle: "Nuestros Servicios", maintTitle: "Mantenimiento Integral", maintDesc: "Nuestro equipo técnico mantiene tus instalaciones en perfecto estado.", maintBtn: "Pedir Presupuesto",
    // Blog
    blogTitle: "Nuestra Filosofía", blogTag1: "Comunidad", art1Title: "El sol: excusa para unirnos", art1Text: "Nuestro objetivo es crear una comunidad en torno a la energía solar.",
    blogTag2: "Desarrollo", art2Title: "De la Idea a la Realidad", art2Text: "Actualmente en fase conceptual. Siguiente paso: construir el prototipo.",
    // Team & Footer
    teamTitle: "Nuestro Equipo", roleMarkel: "Líder / Protagonista", roleAnder: "Mediador", roleDennis: "Técnico", roleLander: "Emprendedor",
    partnersText: "Colaboran:", contactTitle: "Contacto"
  },
  en: {
    heroTitle: "Energy born from the sun reaching everyone",
    heroSubtitle: "An innovative project by vocational students from Usurbil",
    ctaBtn: "Discover Project",
    aboutTitle: "About Us",
    aboutText: "We are a group of young electrical engineering students who launched this as a class project. Our main goal is to harness and distribute solar energy publicly.",
    // Roadmap
    roadmapTitle: "Project Status",
    rm1Title: "Idea & Design", rm1Desc: "Planning and technical designs completed.", rm1Badge: "Done",
    rm2Title: "Prototype", rm2Desc: "Building the first functional unit at Usurbil LH.", rm2Badge: "In Process",
    rm3Title: "App Development", rm3Desc: "APN App Beta version and payment system.", rm3Badge: "To Do",
    rm4Title: "Gipuzkoa Expansion", rm4Desc: "First installations in provincial municipalities.", rm4Badge: "To Do",
    // Products
    productsTitle: "Our Products",
    titleBench: "EKI Seat", descBench: "Smart solar bench. Charge your devices sustainably on the street.",
    titleTable: "KALEA Work", descTable: "Perfect table for work or leisure. Shade, energy, and connection.",
    titleScooter: "HIRI Go", descScooter: "Charging point and parking for electric scooters and bikes.",
    // App
    appTitle: "APN App: Connect & Earn",
    appDesc: "Our model is unique. Users pay a subscription via APN App. We share revenue with the City Council.",
    appBadge: "Coming Soon", appFeat1: "Revenue Share", appFeat2: "App Subscription", appFeat3: "Build Community", appBtn: "Download (Beta)",
    // Calculadora
    calcTitle: "Calculate City Revenue", calcSubtitle: "How many EKI Seats would you install?",
    calcBtn: "Calculate", yearText: "Year", calcNote: "*Estimate: 50% revenue share for City Council.",
    // Servicios
    serviceTitle: "Our Services", maintTitle: "Facility Maintenance", maintDesc: "Our technical team keeps your facilities in perfect condition.", maintBtn: "Get a Quote",
    // Blog
    blogTitle: "Our Philosophy", blogTag1: "Community", art1Title: "Sun: An excuse to unite", art1Text: "Our goal is to build a community around solar energy.",
    blogTag2: "Development", art2Title: "From Idea to Reality", art2Text: "Currently in conceptual phase. Next step: building the prototype.",
    // Team & Footer
    teamTitle: "Our Team", roleMarkel: "Leader / Protagonist", roleAnder: "Mediator", roleDennis: "Technician", roleLander: "Entrepreneur",
    partnersText: "Partners:", contactTitle: "Contact"
  }
};

function setLang(lang) {
  // Traducir IDs simples (conversión directa de camelCase a kebab-case para el ID)
  const ids = [
    'heroTitle', 'heroSubtitle', 'ctaBtn', 'aboutTitle', 'aboutText',
    'roadmapTitle', 'rm1Title', 'rm1Desc', 'rm1Badge', 'rm2Title', 'rm2Desc', 'rm2Badge',
    'rm3Title', 'rm3Desc', 'rm3Badge', 'rm4Title', 'rm4Desc', 'rm4Badge',
    'productsTitle', 'titleBench', 'descBench', 'titleTable', 'descTable', 'titleScooter', 'descScooter',
    'appTitle', 'appDesc', 'appBadge', 'appFeat1', 'appFeat2', 'appFeat3', 'appBtn',
    'calcTitle', 'calcSubtitle', 'calcBtn', 'yearText', 'calcNote',
    'serviceTitle', 'maintTitle', 'maintDesc', 'maintBtn',
    'blogTitle', 'blogTag1', 'art1Title', 'art1Text', 'blogTag2', 'art2Title', 'art2Text',
    'teamTitle', 'roleMarkel', 'roleAnder', 'roleDennis', 'roleLander', 'partnersText', 'contactTitle'
  ];

  ids.forEach(id => {
    // Convierte camelCase (rm1Title) a kebab-case (rm1-title) para buscar el ID en HTML
    // NOTA: Para números como rm1, el regex original podía fallar, así que usaremos reemplazo directo para este caso.
    let htmlId = id.replace(/([A-Z])/g, "-$1").toLowerCase(); 
    
    const element = document.getElementById(htmlId);
    if(element) element.innerText = translations[lang][id];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}