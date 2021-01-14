/* ------------------------------------------------

    Projet - Ecommerce
    Tom Delaunay
    La Manu - 2020/2021

------------------------------------------------ */

/* ------------------------------------------------

    Ce fichier sert à faire fonctionner
    la partie Javascript du site.

------------------------------------------------ */

/* ------------------------------------------------

    Réseau - Fiches Produits

------------------------------------------------ */

let product1 = {
    productId: 'product1',
    category: 'Reseau',
    name: 'Câble RJ45 (Croisé) 2m CAT5E Blindage FTP - Bleu',
    priceHT: 5.83,
    priceTTC: 6.99,
    recap: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, veritatis odio.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie congue erat, et ullamcorper quam pulvinar vel. Nullam vitae elit sed dolor placerat tempus porta ac diam. Donec iaculis turpis commodo aliquet varius. Proin vel molestie quam, id venenatis tellus. Sed laoreet, dolor ac egestas convallis, ante erat vestibulum lorem, id porta nisi ante sit amet turpis.',
    stock: 50,
    img1: 'medias/images/products/rj45-bleu-1.jpg',
    img2: 'medias/images/products/rj45-bleu-2.jpg',
    img3: 'medias/images/products/rj45-bleu-3.jpg',
    imgAlt: 'Photo de Câble RJ45 (Croisé) 2m CAT5E Blindage FTP - Bleu'
};

let product2 = {
    productId: 'product2',
    category: 'Reseau',
    name: 'Câble RJ45 (Croisé) 5m CAT5E Blindage FTP - Rose',
    priceHT: 10.82,
    priceTTC: 12.99,
    recap: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, veritatis odio.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie congue erat, et ullamcorper quam pulvinar vel. Nullam vitae elit sed dolor placerat tempus porta ac diam. Donec iaculis turpis commodo aliquet varius. Proin vel molestie quam, id venenatis tellus. Sed laoreet, dolor ac egestas convallis, ante erat vestibulum lorem, id porta nisi ante sit amet turpis.',
    stock: 50,
    img1: 'medias/images/products/rj45-rose-1.jpg',
    img2: 'medias/images/products/rj45-rose-2.jpg',
    img3: 'medias/images/products/rj45-rose-3.jpg',
    imgAlt: 'Photo de Câble RJ45 (Croisé) 5m CAT5E Blindage FTP - Rose'
};

let product3 = {
    productId: 'product3',
    category: 'Reseau',
    name: 'Câble RJ45 (Croisé) 10m CAT5E Blindage FTP - Orange',
    priceHT: 17.49,
    priceTTC: 20.99,
    recap: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, veritatis odio.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie congue erat, et ullamcorper quam pulvinar vel. Nullam vitae elit sed dolor placerat tempus porta ac diam. Donec iaculis turpis commodo aliquet varius. Proin vel molestie quam, id venenatis tellus. Sed laoreet, dolor ac egestas convallis, ante erat vestibulum lorem, id porta nisi ante sit amet turpis.',
    stock: 50,
    img1: 'medias/images/products/rj45-orange-1.jpg',
    img2: 'medias/images/products/rj45-orange-2.jpg',
    img3: 'medias/images/products/rj45-orange-3.jpg',
    imgAlt: 'Photo de Câble RJ45 (Croisé) 10m CAT5E Blindage FTP - Orange'
};

let product4 = {
    productId: 'product4',
    category: 'Reseau',
    name: 'Câble RJ45 (Croisé) 50m CAT5E Blindage FTP - Vert',
    priceHT: 64.99,
    priceTTC: 77.99,
    recap: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, veritatis odio.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie congue erat, et ullamcorper quam pulvinar vel. Nullam vitae elit sed dolor placerat tempus porta ac diam. Donec iaculis turpis commodo aliquet varius. Proin vel molestie quam, id venenatis tellus. Sed laoreet, dolor ac egestas convallis, ante erat vestibulum lorem, id porta nisi ante sit amet turpis.',
    stock: 50,
    img1: 'medias/images/products/rj45-vert-1.jpg',
    img2: 'medias/images/products/rj45-vert-2.jpg',
    img3: 'medias/images/products/rj45-vert-3.jpg',
    imgAlt: 'Photo de Câble RJ45 (Croisé) 50m CAT5E Blindage FTP - Vert'
};

let product5 = {
    productId: 'product5',
    category: 'Reseau',
    name: 'Câble RJ45 (Croisé) 20m CAT5E Blindage FTP - Violet',
    priceHT: 34.16,
    priceTTC: 40.99,
    recap: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, veritatis odio.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie congue erat, et ullamcorper quam pulvinar vel. Nullam vitae elit sed dolor placerat tempus porta ac diam. Donec iaculis turpis commodo aliquet varius. Proin vel molestie quam, id venenatis tellus. Sed laoreet, dolor ac egestas convallis, ante erat vestibulum lorem, id porta nisi ante sit amet turpis.',
    stock: 50,
    img1: 'medias/images/products/rj45-violet-1.jpg',
    img2: 'medias/images/products/rj45-violet-2.jpg',
    img3: 'medias/images/products/rj45-violet-3.jpg',
    imgAlt: 'Photo de Câble RJ45 (Croisé) 20m CAT5E Blindage FTP - Violet'
};

let product6 = {
    productId: 'product6',
    category: 'Reseau',
    name: 'Câble RJ45 (Croisé) 1m CAT5E Blindage FTP - Jaune',
    priceHT: 3.33,
    priceTTC: 3.99,
    recap: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, veritatis odio.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie congue erat, et ullamcorper quam pulvinar vel. Nullam vitae elit sed dolor placerat tempus porta ac diam. Donec iaculis turpis commodo aliquet varius. Proin vel molestie quam, id venenatis tellus. Sed laoreet, dolor ac egestas convallis, ante erat vestibulum lorem, id porta nisi ante sit amet turpis.',
    stock: 50,
    img1: 'medias/images/products/rj45-jaune-1.jpg',
    img2: 'medias/images/products/rj45-jaune-2.jpg',
    img3: 'medias/images/products/rj45-jaune-3.jpg',
    imgAlt: 'Photo de Câble RJ45 (Croisé) 1m CAT5E Blindage FTP - Jaune'
};

let product7 = {
    productId: 'product7',
    category: 'Reseau',
    name: 'Meuble rack 19" 12 unités Noir',
    priceHT: 111.66,
    priceTTC: 133.99,
    recap: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, veritatis odio.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie congue erat, et ullamcorper quam pulvinar vel. Nullam vitae elit sed dolor placerat tempus porta ac diam. Donec iaculis turpis commodo aliquet varius. Proin vel molestie quam, id venenatis tellus. Sed laoreet, dolor ac egestas convallis, ante erat vestibulum lorem, id porta nisi ante sit amet turpis.',
    stock: 50,
    img1: 'medias/images/products/rack-12-1.jpg',
    img2: 'medias/images/products/rack-12-2.jpg',
    img3: 'medias/images/products/rack-12-3.jpg',
    imgAlt: 'Photo de Meuble rack 19" 12 unités Noir'
};

let product8 = {
    productId: 'product8',
    category: 'Reseau',
    name: 'Meuble rack 19" 15 unités Noir',
    priceHT: 152.49,
    priceTTC: 182.99,
    recap: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, veritatis odio.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie congue erat, et ullamcorper quam pulvinar vel. Nullam vitae elit sed dolor placerat tempus porta ac diam. Donec iaculis turpis commodo aliquet varius. Proin vel molestie quam, id venenatis tellus. Sed laoreet, dolor ac egestas convallis, ante erat vestibulum lorem, id porta nisi ante sit amet turpis.',
    stock: 50,
    img1: 'medias/images/products/rack-15-1.jpg',
    img2: 'medias/images/products/rack-15-2.jpg',
    img3: 'medias/images/products/rack-15-3.jpg',
    imgAlt: 'Photo de Meuble rack 19" 15 unités Noir'
};

let product9 = {
    productId: 'product9',
    category: 'Reseau',
    name: 'TP-Link TL-SG1016D Switch 16 Ports',
    priceHT: 48.14,
    priceTTC: 57.77,
    recap: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, veritatis odio.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie congue erat, et ullamcorper quam pulvinar vel. Nullam vitae elit sed dolor placerat tempus porta ac diam. Donec iaculis turpis commodo aliquet varius. Proin vel molestie quam, id venenatis tellus. Sed laoreet, dolor ac egestas convallis, ante erat vestibulum lorem, id porta nisi ante sit amet turpis.',
    stock: 50,
    img1: 'medias/images/products/switch-16-1.jpg',
    img2: 'medias/images/products/switch-16-2.jpg',
    img3: 'medias/images/products/switch-16-3.jpg',
    imgAlt: 'Photo de TP-Link TL-SG1016D Switch 16 Ports'
};

let product10 = {
    productId: 'product10',
    category: 'Reseau',
    name: 'TP-Link TL-SG1024 Switch 24 Ports',
    priceHT: 76.57,
    priceTTC: 91.88,
    recap: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, veritatis odio.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie congue erat, et ullamcorper quam pulvinar vel. Nullam vitae elit sed dolor placerat tempus porta ac diam. Donec iaculis turpis commodo aliquet varius. Proin vel molestie quam, id venenatis tellus. Sed laoreet, dolor ac egestas convallis, ante erat vestibulum lorem, id porta nisi ante sit amet turpis.',
    stock: 50,
    img1: 'medias/images/products/switch-24-1.jpg',
    img2: 'medias/images/products/switch-24-2.jpg',
    img3: 'medias/images/products/switch-24-3.jpg',
    imgAlt: 'Photo de TP-Link TL-SG1024 Switch 24 Ports'
};

let product11 = {
    productId: 'product11',
    category: 'Reseau',
    name: 'Étagère 19" 1U Montage 250 mm Noir',
    priceHT: 14.99,
    priceTTC: 17.99,
    recap: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, veritatis odio.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie congue erat, et ullamcorper quam pulvinar vel. Nullam vitae elit sed dolor placerat tempus porta ac diam. Donec iaculis turpis commodo aliquet varius. Proin vel molestie quam, id venenatis tellus. Sed laoreet, dolor ac egestas convallis, ante erat vestibulum lorem, id porta nisi ante sit amet turpis.',
    stock: 50,
    img1: 'medias/images/products/rack-1u-1.jpg',
    img2: 'medias/images/products/rack-1u-2.jpg',
    img3: 'medias/images/products/rack-1u-3.jpg',
    imgAlt: 'Photo de Étagère 19" 1U Montage 250 mm Noir'
};

let product12 = {
    productId: 'product12',
    category: 'Reseau',
    name: 'Multiprise 19" 1U Montage 8 puits',
    priceHT: 18.06,
    priceTTC: 21.67,
    recap: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, veritatis odio.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie congue erat, et ullamcorper quam pulvinar vel. Nullam vitae elit sed dolor placerat tempus porta ac diam. Donec iaculis turpis commodo aliquet varius. Proin vel molestie quam, id venenatis tellus. Sed laoreet, dolor ac egestas convallis, ante erat vestibulum lorem, id porta nisi ante sit amet turpis.',
    stock: 50,
    img1: 'medias/images/products/rack-1e-1.jpg',
    img2: 'medias/images/products/rack-1e-2.jpg',
    img3: 'medias/images/products/rack-1e-3.jpg',
    imgAlt: 'Photo de Multiprise 19" 1U Montage 8 puits'
};



/* ------------------------------------------------

    Usb - Fiches Produits

------------------------------------------------ */

let product13 = {
    productId: 'product13',
    category: 'Usb',
    name: 'Rallonge USB 3.0 Type A 1m',
    priceHT: 6.66,
    priceTTC: 7.99,
    recap: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, veritatis odio.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie congue erat, et ullamcorper quam pulvinar vel. Nullam vitae elit sed dolor placerat tempus porta ac diam. Donec iaculis turpis commodo aliquet varius. Proin vel molestie quam, id venenatis tellus. Sed laoreet, dolor ac egestas convallis, ante erat vestibulum lorem, id porta nisi ante sit amet turpis.',
    stock: 50,
    img1: 'medias/images/products/usb-a-rallonge-1.jpg',
    img2: 'medias/images/products/usb-a-rallonge-2.jpg',
    img3: 'medias/images/products/usb-a-rallonge-3.jpg',
    imgAlt: 'Photo de Rallonge USB 3.0 Type A 1m'
};

let product14 = {
    productId: 'product14',
    category: 'Usb',
    name: 'Clé USB 1To 3.0',
    priceHT: 23.32,
    priceTTC: 27.99,
    recap: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, veritatis odio.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie congue erat, et ullamcorper quam pulvinar vel. Nullam vitae elit sed dolor placerat tempus porta ac diam. Donec iaculis turpis commodo aliquet varius. Proin vel molestie quam, id venenatis tellus. Sed laoreet, dolor ac egestas convallis, ante erat vestibulum lorem, id porta nisi ante sit amet turpis.',
    stock: 50,
    img1: 'medias/images/products/usb-cle-1.jpg',
    img2: 'medias/images/products/usb-cle-2.jpg',
    img3: 'medias/images/products/usb-cle-3.jpg',
    imgAlt: 'Photo de Clé USB 1To 3.0'
};

let product15 = {
    productId: 'product15',
    category: 'Usb',
    name: 'Hub USB 3.0 4 Ports SuperSpeed',
    priceHT: 12.03,
    priceTTC: 14.44,
    recap: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, veritatis odio.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie congue erat, et ullamcorper quam pulvinar vel. Nullam vitae elit sed dolor placerat tempus porta ac diam. Donec iaculis turpis commodo aliquet varius. Proin vel molestie quam, id venenatis tellus. Sed laoreet, dolor ac egestas convallis, ante erat vestibulum lorem, id porta nisi ante sit amet turpis.',
    stock: 50,
    img1: 'medias/images/products/usb-hub-1.jpg',
    img2: 'medias/images/products/usb-hub-2.jpg',
    img3: 'medias/images/products/usb-hub-3.jpg',
    imgAlt: 'Photo de Hub USB 3.0 4 Ports SuperSpeed'
};

let product16 = {
    productId: 'product16',
    category: 'Usb',
    name: 'Adaptateur USB C vers USB 3.0',
    priceHT: 4.99,
    priceTTC: 5.99,
    recap: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, veritatis odio.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie congue erat, et ullamcorper quam pulvinar vel. Nullam vitae elit sed dolor placerat tempus porta ac diam. Donec iaculis turpis commodo aliquet varius. Proin vel molestie quam, id venenatis tellus. Sed laoreet, dolor ac egestas convallis, ante erat vestibulum lorem, id porta nisi ante sit amet turpis.',
    stock: 50,
    img1: 'medias/images/products/usb-adaptateur-1.jpg',
    img2: 'medias/images/products/usb-adaptateur-2.jpg',
    img3: 'medias/images/products/usb-adaptateur-3.jpg',
    imgAlt: 'Photo de Adaptateur USB C vers USB 3.0'
};

let product17 = {
    productId: 'product17',
    category: 'Usb',
    name: 'USB 2.0 A Mâle vers USB B Mâle 3m',
    priceHT: 7.46,
    priceTTC: 8.95,
    recap: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, veritatis odio.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie congue erat, et ullamcorper quam pulvinar vel. Nullam vitae elit sed dolor placerat tempus porta ac diam. Donec iaculis turpis commodo aliquet varius. Proin vel molestie quam, id venenatis tellus. Sed laoreet, dolor ac egestas convallis, ante erat vestibulum lorem, id porta nisi ante sit amet turpis.',
    stock: 50,
    img1: 'medias/images/products/usb-a-cable-1.jpg',
    img2: 'medias/images/products/usb-a-cable-2.jpg',
    img3: 'medias/images/products/usb-a-cable-3.jpg',
    imgAlt: 'Photo de USB 2.0 A Mâle vers USB B Mâle 3m'
};



/* ------------------------------------------------

    Vidéo - Fiches Produits

------------------------------------------------ */

let product18 = {
    productId: 'product18',
    category: 'Video',
    name: 'Câble HDMI Nylon 4K 2m',
    priceHT: 7.46,
    priceTTC: 8.95,
    recap: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, veritatis odio.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie congue erat, et ullamcorper quam pulvinar vel. Nullam vitae elit sed dolor placerat tempus porta ac diam. Donec iaculis turpis commodo aliquet varius. Proin vel molestie quam, id venenatis tellus. Sed laoreet, dolor ac egestas convallis, ante erat vestibulum lorem, id porta nisi ante sit amet turpis.',
    stock: 50,
    img1: 'medias/images/products/video-hdmi-cable-1.jpg',
    img2: 'medias/images/products/video-hdmi-cable-2.jpg',
    img3: 'medias/images/products/video-hdmi-cable-3.jpg',
    imgAlt: 'Photo de Câble HDMI Nylon 4K 2m'
};

let product19 = {
    productId: 'product19',
    category: 'Video',
    name: 'Câble VGA vers VGA de Moniteur 1.8m',
    priceHT: 5.74,
    priceTTC: 6.89,
    recap: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, veritatis odio.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie congue erat, et ullamcorper quam pulvinar vel. Nullam vitae elit sed dolor placerat tempus porta ac diam. Donec iaculis turpis commodo aliquet varius. Proin vel molestie quam, id venenatis tellus. Sed laoreet, dolor ac egestas convallis, ante erat vestibulum lorem, id porta nisi ante sit amet turpis.',
    stock: 50,
    img1: 'medias/images/products/video-vga-cable-1.jpg',
    img2: 'medias/images/products/video-vga-cable-2.jpg',
    img3: 'medias/images/products/video-vga-cable-3.jpg',
    imgAlt: 'Photo de Câble VGA vers VGA de Moniteur 1.8m'
};

let product20 = {
    productId: 'product20',
    category: 'Video',
    name: 'Convertisseur HDMI vers VGA 1080p',
    priceHT: 6.58,
    priceTTC: 7.89,
    recap: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, veritatis odio.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie congue erat, et ullamcorper quam pulvinar vel. Nullam vitae elit sed dolor placerat tempus porta ac diam. Donec iaculis turpis commodo aliquet varius. Proin vel molestie quam, id venenatis tellus. Sed laoreet, dolor ac egestas convallis, ante erat vestibulum lorem, id porta nisi ante sit amet turpis.',
    stock: 50,
    img1: 'medias/images/products/video-convertisseur-cable-1.jpg',
    img2: 'medias/images/products/video-convertisseur-cable-2.jpg',
    img3: 'medias/images/products/video-convertisseur-cable-3.jpg',
    imgAlt: 'Photo de Convertisseur HDMI vers VGA 1080p'
};

let product21 = {
    productId: 'product21',
    category: 'Video',
    name: 'Hub USB C - Multisupports',
    priceHT: 12.41,
    priceTTC: 14.89,
    recap: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, veritatis odio.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie congue erat, et ullamcorper quam pulvinar vel. Nullam vitae elit sed dolor placerat tempus porta ac diam. Donec iaculis turpis commodo aliquet varius. Proin vel molestie quam, id venenatis tellus. Sed laoreet, dolor ac egestas convallis, ante erat vestibulum lorem, id porta nisi ante sit amet turpis.',
    stock: 50,
    img1: 'medias/images/products/video-hub-1.jpg',
    img2: 'medias/images/products/video-hub-2.jpg',
    img3: 'medias/images/products/video-hub-3.jpg',
    imgAlt: 'Photo de Hub USB C - Multisupports'
};



/* ------------------------------------------------

    Variables de Traitement

------------------------------------------------ */

/* Ajouts au Panier */

let productToAddQuantity = 1;
let productToAddClicked;
let productToAddCheck = false;

/* Panier Calculs */

let productsSubTotal;
let productsTotalTTC = 0;

/* Panier Final */

let cartICE = [];
let cartICEstrg;



/* ------------------------------------------------

    Déclarations des Fonctions

------------------------------------------------ */

/* ------------------------------------------------

    - Page Index -
    Attribution des Produits aux Card

------------------------------------------------ */

function indexProductsAttribute() {  
    if ($('title:first-of-type').text() == 'iCE - Accueil') {
        // Card 1
        $(`#card-1 .card-body`).attr('id', `${product1.productId}`);
        $(`#card-1 .card-title`).text(`${product1.name}`);
        $(`#card-1 .card-text`).first().text(`${product1.priceTTC}€`);
        $(`#card-1 .card-text`).last().text(`${product1.priceHT}€ HT`);
        $(`#card-1 img`).attr('src', `${product1.img1}`);
        $(`#card-1 img`).attr('alt', `${product1.imgAlt}`);
        // Card 2
        $(`#card-2 .card-body`).attr('id', `${product2.productId}`);
        $(`#card-2 .card-title`).text(`${product2.name}`);
        $(`#card-2 .card-text`).first().text(`${product2.priceTTC}€`);
        $(`#card-2 .card-text`).last().text(`${product2.priceHT}€ HT`);
        $(`#card-2 img`).attr('src', `${product2.img1}`);
        $(`#card-2 img`).attr('alt', `${product2.imgAlt}`);
        // Card 3
        $(`#card-3 .card-body`).attr('id', `${product3.productId}`);
        $(`#card-3 .card-title`).text(`${product3.name}`);
        $(`#card-3 .card-text`).first().text(`${product3.priceTTC}€`);
        $(`#card-3 .card-text`).last().text(`${product3.priceHT}€ HT`);
        $(`#card-3 img`).attr('src', `${product3.img1}`);
        $(`#card-3 img`).attr('alt', `${product3.imgAlt}`);
        // Card 4
        $(`#card-4 .card-body`).attr('id', `${product4.productId}`);
        $(`#card-4 .card-title`).text(`${product4.name}`);
        $(`#card-4 .card-text`).first().text(`${product4.priceTTC}€`);
        $(`#card-4 .card-text`).last().text(`${product4.priceHT}€ HT`);
        $(`#card-4 img`).attr('src', `${product4.img1}`);
        $(`#card-4 img`).attr('alt', `${product4.imgAlt}`);
        // Card 5
        $(`#card-5 .card-body`).attr('id', `${product5.productId}`);
        $(`#card-5 .card-title`).text(`${product5.name}`);
        $(`#card-5 .card-text`).first().text(`${product5.priceTTC}€`);
        $(`#card-5 .card-text`).last().text(`${product5.priceHT}€ HT`);
        $(`#card-5 img`).attr('src', `${product5.img1}`);
        $(`#card-5 img`).attr('alt', `${product5.imgAlt}`);
        // Card 6
        $(`#card-6 .card-body`).attr('id', `${product6.productId}`);
        $(`#card-6 .card-title`).text(`${product6.name}`);
        $(`#card-6 .card-text`).first().text(`${product6.priceTTC}€`);
        $(`#card-6 .card-text`).last().text(`${product6.priceHT}€ HT`);
        $(`#card-6 img`).attr('src', `${product6.img1}`);
        $(`#card-6 img`).attr('alt', `${product6.imgAlt}`);
    }
}



/* ------------------------------------------------

    - Page Index -
    Récupération de l'ID du Produit

------------------------------------------------ */

function indexAddProduct() {
    if ($('title:first-of-type').text() == 'iCE - Accueil') {
        $(document).on('click', '.btn-productAdd', function () {
            productToAddClicked = $(this).parent().attr('id');
            console.log(`Produit cliqué : ${productToAddClicked}`);
            cartAdd();
        });
    }
}



/* ------------------------------------------------

    - Page Cart -
    Génération/Remplissage du Panier en HTML

------------------------------------------------ */

function cartGeneration() {
    if ($('title:first-of-type').text() == 'iCE - Panier') {
        $('.product-lign').remove();
        for (i=0; i<cartICE.length; i++) {
            if (i%2 == 0) {
                if (cartICE[i] == 'product1') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product1.img1}" class="img-fluid" alt="${product1.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product1.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product1.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-productToAddQuantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="${product1.productId}"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product2') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product2.img1}" class="img-fluid" alt="${product2.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product2.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product2.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-productToAddQuantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="${product2.productId}"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product3') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product3.img1}" class="img-fluid" alt="${product3.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product3.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product3.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-productToAddQuantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="${product3.productId}"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product4') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product4.img1}" class="img-fluid" alt="${product4.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product4.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product4.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-productToAddQuantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="${product4.productId}"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product5') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product5.img1}" class="img-fluid" alt="${product5.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product5.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product5.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-productToAddQuantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="${product5.productId}"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product6') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product6.img1}" class="img-fluid" alt="${product6.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product6.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product6.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-productToAddQuantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="${product6.productId}"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product7') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product7.img1}" class="img-fluid" alt="${product7.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product7.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product7.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-productToAddQuantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="${product7.productId}"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product8') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product8.img1}" class="img-fluid" alt="${product8.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product8.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product8.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-productToAddQuantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="${product8.productId}"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product9') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product9.img1}" class="img-fluid" alt="${product9.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product9.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product9.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-productToAddQuantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="${product9.productId}"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product10') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product10.img1}" class="img-fluid" alt="${product10.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product10.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product10.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-productToAddQuantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="${product10.productId}"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product11') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product11.img1}" class="img-fluid" alt="${product11.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product11.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product11.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-productToAddQuantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="${product11.productId}"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product12') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product12.img1}" class="img-fluid" alt="${product12.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product12.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product12.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-productToAddQuantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="${product12.productId}"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product13') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product13.img1}" class="img-fluid" alt="${product13.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product13.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product13.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-productToAddQuantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="${product13.productId}"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product14') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product14.img1}" class="img-fluid" alt="${product14.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product14.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product14.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-productToAddQuantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="${product14.productId}"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product15') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product15.img1}" class="img-fluid" alt="${product15.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product15.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product15.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-productToAddQuantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="${product15.productId}"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product16') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product16.img1}" class="img-fluid" alt="${product16.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product16.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product16.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-productToAddQuantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="${product16.productId}"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product17') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product17.img1}" class="img-fluid" alt="${product17.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product17.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product17.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-productToAddQuantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="${product17.productId}"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product18') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product18.img1}" class="img-fluid" alt="${product18.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product18.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product18.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-productToAddQuantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="${product18.productId}"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product19') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product19.img1}" class="img-fluid" alt="${product19.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product19.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product19.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-productToAddQuantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="${product19.productId}"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product20') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product20.img1}" class="img-fluid" alt="${product20.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product20.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product20.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-productToAddQuantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="${product20.productId}"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product21') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product21.img1}" class="img-fluid" alt="${product21.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product21.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product21.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-productToAddQuantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="${product21.productId}"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
            }
        }
        cartCalculs();
    }
}



/* ------------------------------------------------

    - Page Liste Produits -
    Génération/Remplissage des Listes en HTML

------------------------------------------------ */

function listProductsGeneration() {
    /* Page de Listes Produits Réseau */
    if ($('title:first-of-type').text() == 'iCE - Reseau') {
        $('#products-show').append(`<div id="${product1.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product1.img1}" class="product-photo img-fluid" alt="${product1.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product1.name}</a></h5><p class="color-subtext">${product1.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product1.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product1.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`);
        if (product1.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product1.stock}`);
            $('.product-disponibility').last().addClass('text-success');
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`);
            $('.product-disponibility').last().addClass('text-danger');
            $('.btn-productAdd').last().addClass('disabled');
        }
        listProductsBackground();
        $('#products-show').append(`<div id="${product2.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product2.img1}" class="product-photo img-fluid" alt="${product2.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product2.name}</a></h5><p class="color-subtext">${product2.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product2.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product2.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`);
        if (product2.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product2.stock}`);
            $('.product-disponibility').last().addClass('text-success');
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`);
            $('.product-disponibility').last().addClass('text-danger');
            $('.btn-productAdd').last().addClass('disabled');
        }
        listProductsBackground();
        $('#products-show').append(`<div id="${product3.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product3.img1}" class="product-photo img-fluid" alt="${product3.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product3.name}</a></h5><p class="color-subtext">${product3.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product3.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product3.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`);
        if (product3.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product3.stock}`);
            $('.product-disponibility').last().addClass('text-success');
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`);
            $('.product-disponibility').last().addClass('text-danger');
            $('.btn-productAdd').last().addClass('disabled');
        }
        listProductsBackground();
        $('#products-show').append(`<div id="${product4.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product4.img1}" class="product-photo img-fluid" alt="${product4.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product4.name}</a></h5><p class="color-subtext">${product4.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product4.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product4.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`);
        if (product4.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product4.stock}`);
            $('.product-disponibility').last().addClass('text-success');
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`);
            $('.product-disponibility').last().addClass('text-danger');
            $('.btn-productAdd').last().addClass('disabled');
        }
        listProductsBackground();
        $('#products-show').append(`<div id="${product5.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product5.img1}" class="product-photo img-fluid" alt="${product5.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product5.name}</a></h5><p class="color-subtext">${product5.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product5.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product5.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`);
        if (product5.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product5.stock}`);
            $('.product-disponibility').last().addClass('text-success');
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`);
            $('.product-disponibility').last().addClass('text-danger');
            $('.btn-productAdd').last().addClass('disabled');
        }
        listProductsBackground();
        $('#products-show').append(`<div id="${product6.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product6.img1}" class="product-photo img-fluid" alt="${product6.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product6.name}</a></h5><p class="color-subtext">${product6.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product6.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product6.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`);
        if (product6.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product6.stock}`);
            $('.product-disponibility').last().addClass('text-success');
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`);
            $('.product-disponibility').last().addClass('text-danger');
            $('.btn-productAdd').last().addClass('disabled');
        }
        listProductsBackground();
        $('#products-show').append(`<div id="${product7.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product7.img1}" class="product-photo img-fluid" alt="${product7.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product7.name}</a></h5><p class="color-subtext">${product7.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product7.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product7.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`);
        if (product7.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product7.stock}`);
            $('.product-disponibility').last().addClass('text-success');
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`);
            $('.product-disponibility').last().addClass('text-danger');
            $('.btn-productAdd').last().addClass('disabled');
        }
        listProductsBackground();
        $('#products-show').append(`<div id="${product8.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product8.img1}" class="product-photo img-fluid" alt="${product8.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product8.name}</a></h5><p class="color-subtext">${product8.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product8.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product8.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`);
        if (product8.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product8.stock}`);
            $('.product-disponibility').last().addClass('text-success');
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`);
            $('.product-disponibility').last().addClass('text-danger');
            $('.btn-productAdd').last().addClass('disabled');
        }
        listProductsBackground();
        $('#products-show').append(`<div id="${product9.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product9.img1}" class="product-photo img-fluid" alt="${product9.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product9.name}</a></h5><p class="color-subtext">${product9.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product9.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product9.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`);
        if (product9.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product9.stock}`);
            $('.product-disponibility').last().addClass('text-success');
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`);
            $('.product-disponibility').last().addClass('text-danger');
            $('.btn-productAdd').last().addClass('disabled');
        }
        listProductsBackground();
        $('#products-show').append(`<div id="${product10.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product10.img1}" class="product-photo img-fluid" alt="${product10.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product10.name}</a></h5><p class="color-subtext">${product10.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product10.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product10.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`);
        if (product10.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product10.stock}`);
            $('.product-disponibility').last().addClass('text-success');
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`);
            $('.product-disponibility').last().addClass('text-danger');
            $('.btn-productAdd').last().addClass('disabled');
        }
        listProductsBackground();
        $('#products-show').append(`<div id="${product11.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product11.img1}" class="product-photo img-fluid" alt="${product11.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product11.name}</a></h5><p class="color-subtext">${product11.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product11.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product11.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`);
        if (product11.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product11.stock}`);
            $('.product-disponibility').last().addClass('text-success');
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`);
            $('.product-disponibility').last().addClass('text-danger');
            $('.btn-productAdd').last().addClass('disabled');
        }
        listProductsBackground();
        $('#products-show').append(`<div id="${product12.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product12.img1}" class="product-photo img-fluid" alt="${product12.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product12.name}</a></h5><p class="color-subtext">${product12.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product12.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product12.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`);
        if (product12.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product12.stock}`);
            $('.product-disponibility').last().addClass('text-success');
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`);
            $('.product-disponibility').last().addClass('text-danger');
            $('.btn-productAdd').last().addClass('disabled');
        }
        listProductsBackground();
    }
    /* Page de Listes Produits Usb */
    if ($('title:first-of-type').text() == 'iCE - Usb') {
        $('#products-show').append(`<div id="${product13.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product13.img1}" class="product-photo img-fluid" alt="${product13.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product13.name}</a></h5><p class="color-subtext">${product13.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product13.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product13.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`);
        if (product13.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product13.stock}`);
            $('.product-disponibility').last().addClass('text-success');
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`);
            $('.product-disponibility').last().addClass('text-danger');
            $('.btn-productAdd').last().addClass('disabled');
        }
        listProductsBackground();
        $('#products-show').append(`<div id="${product14.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product14.img1}" class="product-photo img-fluid" alt="${product14.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product14.name}</a></h5><p class="color-subtext">${product14.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product14.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product14.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`);
        if (product14.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product14.stock}`);
            $('.product-disponibility').last().addClass('text-success');
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`);
            $('.product-disponibility').last().addClass('text-danger');
            $('.btn-productAdd').last().addClass('disabled');
        }
        listProductsBackground();
        $('#products-show').append(`<div id="${product15.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product15.img1}" class="product-photo img-fluid" alt="${product15.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product15.name}</a></h5><p class="color-subtext">${product15.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product15.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product15.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`);
        if (product15.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product15.stock}`);
            $('.product-disponibility').last().addClass('text-success');
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`);
            $('.product-disponibility').last().addClass('text-danger');
            $('.btn-productAdd').last().addClass('disabled');
        }
        listProductsBackground();
        $('#products-show').append(`<div id="${product16.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product16.img1}" class="product-photo img-fluid" alt="${product16.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product16.name}</a></h5><p class="color-subtext">${product16.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product16.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product16.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`);
        if (product16.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product16.stock}`);
            $('.product-disponibility').last().addClass('text-success');
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`);
            $('.product-disponibility').last().addClass('text-danger');
            $('.btn-productAdd').last().addClass('disabled');
        }
        listProductsBackground();
        $('#products-show').append(`<div id="${product17.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product17.img1}" class="product-photo img-fluid" alt="${product17.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product17.name}</a></h5><p class="color-subtext">${product17.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product17.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product17.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`);
        if (product17.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product17.stock}`);
            $('.product-disponibility').last().addClass('text-success');
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`);
            $('.product-disponibility').last().addClass('text-danger');
            $('.btn-productAdd').last().addClass('disabled');
        }
        listProductsBackground();
    }
    /* Page de Listes Produits Usb */
    if ($('title:first-of-type').text() == 'iCE - Usb') {
        $('#products-show').append(`<div id="${product18.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product18.img1}" class="product-photo img-fluid" alt="${product18.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product18.name}</a></h5><p class="color-subtext">${product18.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product18.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product18.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`);
        if (product18.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product18.stock}`);
            $('.product-disponibility').last().addClass('text-success');
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`);
            $('.product-disponibility').last().addClass('text-danger');
            $('.btn-productAdd').last().addClass('disabled');
        }
        listProductsBackground();
        $('#products-show').append(`<div id="${product19.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product19.img1}" class="product-photo img-fluid" alt="${product19.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product19.name}</a></h5><p class="color-subtext">${product19.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product19.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product19.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`);
        if (product19.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product19.stock}`);
            $('.product-disponibility').last().addClass('text-success');
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`);
            $('.product-disponibility').last().addClass('text-danger');
            $('.btn-productAdd').last().addClass('disabled');
        }
        listProductsBackground();
        $('#products-show').append(`<div id="${product20.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product20.img1}" class="product-photo img-fluid" alt="${product20.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product20.name}</a></h5><p class="color-subtext">${product20.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product20.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product20.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`);
        if (product20.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product20.stock}`);
            $('.product-disponibility').last().addClass('text-success');
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`);
            $('.product-disponibility').last().addClass('text-danger');
            $('.btn-productAdd').last().addClass('disabled');
        }
        listProductsBackground();
        $('#products-show').append(`<div id="${product21.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product21.img1}" class="product-photo img-fluid" alt="${product21.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product21.name}</a></h5><p class="color-subtext">${product21.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product21.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product21.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`);
        if (product21.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product21.stock}`);
            $('.product-disponibility').last().addClass('text-success');
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`);
            $('.product-disponibility').last().addClass('text-danger');
            $('.btn-productAdd').last().addClass('disabled');
        }
        listProductsBackground();
    }
}



/* ------------------------------------------------

    - Page Liste Produits -
    Génération Background des Listes en HTML

------------------------------------------------ */

function listProductsBackground() {
    if ($('.product-lign').last().prev().hasClass('bg-white')) {
        $('.product-lign').last().addClass('bg-inter')
    }
    else {
        $('.product-lign').last().addClass('bg-white')
    }
}



/* ------------------------------------------------

    - Page Liste Produits -
    Récupération de l'ID du Produit

------------------------------------------------ */

function listProductsAddProduct() {
    if ($('title:first-of-type').text() == 'iCE - Usb') {
        $(document).on('click', '.btn-productAdd', function () {
            productToAddClicked = $(this).parent().parent().attr('id');
            console.log(`Produit cliqué : ${productToAddClicked}`);
            if ($(this).hasClass('disabled')) {
                console.log('Pas de stocks');
            }
            else {
                cartAdd();
            }
        })
    }
}



/* ------------------------------------------------

    - Page Liste Produits -
    Enregistrement de l'ID du Produit pour
    générer sa Page Fiche Produit

------------------------------------------------ */

function listProductsToProductPage() {
    $(document).on('click', 'h5', function () {
        if (($('title:first-of-type').text() == 'iCE - Usb')  || ($('title:first-of-type').text() == 'iCE - Reseau') || ($('title:first-of-type').text() == 'iCE - Video')) {
            productToAddClicked = $(this).parent().parent().attr('id')
            console.log(productToAddClicked)
            sessionStorage.setItem("product", productToAddClicked);
        }
    })
    $(document).on('click', 'img', function () {
        if (($('title:first-of-type').text() == 'iCE - Usb')  || ($('title:first-of-type').text() == 'iCE - Reseau') || ($('title:first-of-type').text() == 'iCE - Video')) {
            productToAddClicked = $(this).parent().parent().parent().attr('id')
            console.log(productToAddClicked)
            sessionStorage.setItem("product", productToAddClicked);
        }
    })
}



/* ------------------------------------------------

    - Page Fiche Produit -
    Récupération de l'ID du Produit pour
    générer sa Page Fiche Produit

------------------------------------------------ */

function productPageRecover() {
    productToAddClicked = sessionStorage.getItem("product");
    console.log(`Produit : ${productToAddClicked}`);
}



/* ------------------------------------------------

    - Page Fiche Produit -
    Génération de la Page Fiche Produit

------------------------------------------------ */

function productPageGeneration() {
    if ($('title:first-of-type').text() == 'iCE - Produit') {
        if (productToAddClicked == 'product1') {
            $('li').last().text(`${product1.name}`)
            $('#category-link').attr('href', `${product1.category}.html`)
            $('#category-link').text(`${product1.category}`)
            $('#product-page').html(`<div id="${product1.productId}" class="col-12 mb-3"> <h2 class="color-subtext">${product1.name}</h2> </div> <div class="col-12 col-lg-4 mb-4 mb-lg-0"> <div id="carouselProduct" class="carousel slide border" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="${product1.img1}" alt="${product1.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product1.img2}" alt="${product1.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product1.img3}" alt="${product1.imgAlt}"> </div> </div> <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Précédant</span> </a> <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Suivant</span> </a> </div> </div> <div class="col-12 col-lg-5"> <p>${product1.desc}</p> </div> <div class="col-12 col-lg-3"> <div class="bg-inter px-3 py-3"> <p id="priceTTC" class="text-center font-weight-bold p-0 m-0">${product1.priceTTC}</p> <p id="priceHT" class="text-center font-weight-bold color-subtext">${product1.priceHT}</p> <input type="number" class="d-block w-25 w-lg-50 text-center mx-auto" value="1"> <button class="btn-productAdd btn btn-b d-block mx-auto mt-4"><i class="fas fa-cart-plus"></i> Ajouter au Panier</button> <p class="color-subtext mt-2 text-center mb-0">${product1.stock} unités en stock</p> </div> </div>`)
        }
        if (productToAddClicked == 'product2') {
            $('li').last().text(`${product2.name}`)
            $('#category-link').attr('href', `${product2.category}.html`)
            $('#category-link').text(`${product2.category}`)
            $('#product-page').html(`<div id="${product2.productId}" class="col-12 mb-3"> <h2 class="color-subtext">${product2.name}</h2> </div> <div class="col-12 col-lg-4 mb-4 mb-lg-0"> <div id="carouselProduct" class="carousel slide border" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="${product2.img1}" alt="${product2.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product2.img2}" alt="${product2.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product2.img3}" alt="${product2.imgAlt}"> </div> </div> <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Précédant</span> </a> <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Suivant</span> </a> </div> </div> <div class="col-12 col-lg-5"> <p>${product2.desc}</p> </div> <div class="col-12 col-lg-3"> <div class="bg-inter px-3 py-3"> <p id="priceTTC" class="text-center font-weight-bold p-0 m-0">${product2.priceTTC}</p> <p id="priceHT" class="text-center font-weight-bold color-subtext">${product2.priceHT}</p> <input type="number" class="d-block w-25 w-lg-50 text-center mx-auto" value="1"> <button class="btn-productAdd btn btn-b d-block mx-auto mt-4"><i class="fas fa-cart-plus"></i> Ajouter au Panier</button> <p class="color-subtext mt-2 text-center mb-0">${product2.stock} unités en stock</p> </div> </div>`)
        }
        if (productToAddClicked == 'product3') {
            $('li').last().text(`${product3.name}`)
            $('#category-link').attr('href', `${product3.category}.html`)
            $('#category-link').text(`${product3.category}`)
            $('#product-page').html(`<div id="${product3.productId}" class="col-12 mb-3"> <h2 class="color-subtext">${product3.name}</h2> </div> <div class="col-12 col-lg-4 mb-4 mb-lg-0"> <div id="carouselProduct" class="carousel slide border" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="${product3.img1}" alt="${product3.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product3.img2}" alt="${product3.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product3.img3}" alt="${product3.imgAlt}"> </div> </div> <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Précédant</span> </a> <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Suivant</span> </a> </div> </div> <div class="col-12 col-lg-5"> <p>${product3.desc}</p> </div> <div class="col-12 col-lg-3"> <div class="bg-inter px-3 py-3"> <p id="priceTTC" class="text-center font-weight-bold p-0 m-0">${product3.priceTTC}</p> <p id="priceHT" class="text-center font-weight-bold color-subtext">${product3.priceHT}</p> <input type="number" class="d-block w-25 w-lg-50 text-center mx-auto" value="1"> <button class="btn-productAdd btn btn-b d-block mx-auto mt-4"><i class="fas fa-cart-plus"></i> Ajouter au Panier</button> <p class="color-subtext mt-2 text-center mb-0">${product3.stock} unités en stock</p> </div> </div>`)
        }
        if (productToAddClicked == 'product4') {
            $('li').last().text(`${product4.name}`)
            $('#category-link').attr('href', `${product4.category}.html`)
            $('#category-link').text(`${product4.category}`)
            $('#product-page').html(`<div id="${product4.productId}" class="col-12 mb-3"> <h2 class="color-subtext">${product4.name}</h2> </div> <div class="col-12 col-lg-4 mb-4 mb-lg-0"> <div id="carouselProduct" class="carousel slide border" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="${product4.img1}" alt="${product4.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product4.img2}" alt="${product4.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product4.img3}" alt="${product4.imgAlt}"> </div> </div> <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Précédant</span> </a> <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Suivant</span> </a> </div> </div> <div class="col-12 col-lg-5"> <p>${product4.desc}</p> </div> <div class="col-12 col-lg-3"> <div class="bg-inter px-3 py-3"> <p id="priceTTC" class="text-center font-weight-bold p-0 m-0">${product4.priceTTC}</p> <p id="priceHT" class="text-center font-weight-bold color-subtext">${product4.priceHT}</p> <input type="number" class="d-block w-25 w-lg-50 text-center mx-auto" value="1"> <button class="btn-productAdd btn btn-b d-block mx-auto mt-4"><i class="fas fa-cart-plus"></i> Ajouter au Panier</button> <p class="color-subtext mt-2 text-center mb-0">${product4.stock} unités en stock</p> </div> </div>`)
        }
        if (productToAddClicked == 'product5') {
            $('li').last().text(`${product5.name}`)
            $('#category-link').attr('href', `${product5.category}.html`)
            $('#category-link').text(`${product5.category}`)
            $('#product-page').html(`<div id="${product5.productId}" class="col-12 mb-3"> <h2 class="color-subtext">${product5.name}</h2> </div> <div class="col-12 col-lg-4 mb-4 mb-lg-0"> <div id="carouselProduct" class="carousel slide border" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="${product5.img1}" alt="${product5.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product5.img2}" alt="${product5.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product5.img3}" alt="${product5.imgAlt}"> </div> </div> <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Précédant</span> </a> <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Suivant</span> </a> </div> </div> <div class="col-12 col-lg-5"> <p>${product5.desc}</p> </div> <div class="col-12 col-lg-3"> <div class="bg-inter px-3 py-3"> <p id="priceTTC" class="text-center font-weight-bold p-0 m-0">${product5.priceTTC}</p> <p id="priceHT" class="text-center font-weight-bold color-subtext">${product5.priceHT}</p> <input type="number" class="d-block w-25 w-lg-50 text-center mx-auto" value="1"> <button class="btn-productAdd btn btn-b d-block mx-auto mt-4"><i class="fas fa-cart-plus"></i> Ajouter au Panier</button> <p class="color-subtext mt-2 text-center mb-0">${product5.stock} unités en stock</p> </div> </div>`)
        }
        if (productToAddClicked == 'product6') {
            $('li').last().text(`${product6.name}`)
            $('#category-link').attr('href', `${product6.category}.html`)
            $('#category-link').text(`${product6.category}`)
            $('#product-page').html(`<div id="${product6.productId}" class="col-12 mb-3"> <h2 class="color-subtext">${product6.name}</h2> </div> <div class="col-12 col-lg-4 mb-4 mb-lg-0"> <div id="carouselProduct" class="carousel slide border" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="${product6.img1}" alt="${product6.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product6.img2}" alt="${product6.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product6.img3}" alt="${product6.imgAlt}"> </div> </div> <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Précédant</span> </a> <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Suivant</span> </a> </div> </div> <div class="col-12 col-lg-5"> <p>${product6.desc}</p> </div> <div class="col-12 col-lg-3"> <div class="bg-inter px-3 py-3"> <p id="priceTTC" class="text-center font-weight-bold p-0 m-0">${product6.priceTTC}</p> <p id="priceHT" class="text-center font-weight-bold color-subtext">${product6.priceHT}</p> <input type="number" class="d-block w-25 w-lg-50 text-center mx-auto" value="1"> <button class="btn-productAdd btn btn-b d-block mx-auto mt-4"><i class="fas fa-cart-plus"></i> Ajouter au Panier</button> <p class="color-subtext mt-2 text-center mb-0">${product6.stock} unités en stock</p> </div> </div>`)
        }
        if (productToAddClicked == 'product7') {
            $('li').last().text(`${product7.name}`)
            $('#category-link').attr('href', `${product7.category}.html`)
            $('#category-link').text(`${product7.category}`)
            $('#product-page').html(`<div id="${product7.productId}" class="col-12 mb-3"> <h2 class="color-subtext">${product7.name}</h2> </div> <div class="col-12 col-lg-4 mb-4 mb-lg-0"> <div id="carouselProduct" class="carousel slide border" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="${product7.img1}" alt="${product7.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product7.img2}" alt="${product7.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product7.img3}" alt="${product7.imgAlt}"> </div> </div> <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Précédant</span> </a> <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Suivant</span> </a> </div> </div> <div class="col-12 col-lg-5"> <p>${product7.desc}</p> </div> <div class="col-12 col-lg-3"> <div class="bg-inter px-3 py-3"> <p id="priceTTC" class="text-center font-weight-bold p-0 m-0">${product7.priceTTC}</p> <p id="priceHT" class="text-center font-weight-bold color-subtext">${product7.priceHT}</p> <input type="number" class="d-block w-25 w-lg-50 text-center mx-auto" value="1"> <button class="btn-productAdd btn btn-b d-block mx-auto mt-4"><i class="fas fa-cart-plus"></i> Ajouter au Panier</button> <p class="color-subtext mt-2 text-center mb-0">${product7.stock} unités en stock</p> </div> </div>`)
        }
        if (productToAddClicked == 'product8') {
            $('li').last().text(`${product8.name}`)
            $('#category-link').attr('href', `${product8.category}.html`)
            $('#category-link').text(`${product8.category}`)
            $('#product-page').html(`<div id="${product8.productId}" class="col-12 mb-3"> <h2 class="color-subtext">${product8.name}</h2> </div> <div class="col-12 col-lg-4 mb-4 mb-lg-0"> <div id="carouselProduct" class="carousel slide border" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="${product8.img1}" alt="${product8.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product8.img2}" alt="${product8.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product8.img3}" alt="${product8.imgAlt}"> </div> </div> <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Précédant</span> </a> <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Suivant</span> </a> </div> </div> <div class="col-12 col-lg-5"> <p>${product8.desc}</p> </div> <div class="col-12 col-lg-3"> <div class="bg-inter px-3 py-3"> <p id="priceTTC" class="text-center font-weight-bold p-0 m-0">${product8.priceTTC}</p> <p id="priceHT" class="text-center font-weight-bold color-subtext">${product8.priceHT}</p> <input type="number" class="d-block w-25 w-lg-50 text-center mx-auto" value="1"> <button class="btn-productAdd btn btn-b d-block mx-auto mt-4"><i class="fas fa-cart-plus"></i> Ajouter au Panier</button> <p class="color-subtext mt-2 text-center mb-0">${product8.stock} unités en stock</p> </div> </div>`)
        }
        if (productToAddClicked == 'product9') {
            $('li').last().text(`${product9.name}`)
            $('#category-link').attr('href', `${product9.category}.html`)
            $('#category-link').text(`${product9.category}`)
            $('#product-page').html(`<div id="${product9.productId}" class="col-12 mb-3"> <h2 class="color-subtext">${product9.name}</h2> </div> <div class="col-12 col-lg-4 mb-4 mb-lg-0"> <div id="carouselProduct" class="carousel slide border" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="${product9.img1}" alt="${product9.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product9.img2}" alt="${product9.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product9.img3}" alt="${product9.imgAlt}"> </div> </div> <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Précédant</span> </a> <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Suivant</span> </a> </div> </div> <div class="col-12 col-lg-5"> <p>${product9.desc}</p> </div> <div class="col-12 col-lg-3"> <div class="bg-inter px-3 py-3"> <p id="priceTTC" class="text-center font-weight-bold p-0 m-0">${product9.priceTTC}</p> <p id="priceHT" class="text-center font-weight-bold color-subtext">${product9.priceHT}</p> <input type="number" class="d-block w-25 w-lg-50 text-center mx-auto" value="1"> <button class="btn-productAdd btn btn-b d-block mx-auto mt-4"><i class="fas fa-cart-plus"></i> Ajouter au Panier</button> <p class="color-subtext mt-2 text-center mb-0">${product9.stock} unités en stock</p> </div> </div>`)
        }
        if (productToAddClicked == 'product10') {
            $('li').last().text(`${product10.name}`)
            $('#category-link').attr('href', `${product10.category}.html`)
            $('#category-link').text(`${product10.category}`)
            $('#product-page').html(`<div id="${product10.productId}" class="col-12 mb-3"> <h2 class="color-subtext">${product10.name}</h2> </div> <div class="col-12 col-lg-4 mb-4 mb-lg-0"> <div id="carouselProduct" class="carousel slide border" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="${product10.img1}" alt="${product10.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product10.img2}" alt="${product10.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product10.img3}" alt="${product10.imgAlt}"> </div> </div> <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Précédant</span> </a> <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Suivant</span> </a> </div> </div> <div class="col-12 col-lg-5"> <p>${product10.desc}</p> </div> <div class="col-12 col-lg-3"> <div class="bg-inter px-3 py-3"> <p id="priceTTC" class="text-center font-weight-bold p-0 m-0">${product10.priceTTC}</p> <p id="priceHT" class="text-center font-weight-bold color-subtext">${product10.priceHT}</p> <input type="number" class="d-block w-25 w-lg-50 text-center mx-auto" value="1"> <button class="btn-productAdd btn btn-b d-block mx-auto mt-4"><i class="fas fa-cart-plus"></i> Ajouter au Panier</button> <p class="color-subtext mt-2 text-center mb-0">${product10.stock} unités en stock</p> </div> </div>`)
        }
        if (productToAddClicked == 'product11') {
            $('li').last().text(`${product11.name}`)
            $('#category-link').attr('href', `${product11.category}.html`)
            $('#category-link').text(`${product11.category}`)
            $('#product-page').html(`<div id="${product11.productId}" class="col-12 mb-3"> <h2 class="color-subtext">${product11.name}</h2> </div> <div class="col-12 col-lg-4 mb-4 mb-lg-0"> <div id="carouselProduct" class="carousel slide border" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="${product11.img1}" alt="${product11.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product11.img2}" alt="${product11.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product11.img3}" alt="${product11.imgAlt}"> </div> </div> <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Précédant</span> </a> <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Suivant</span> </a> </div> </div> <div class="col-12 col-lg-5"> <p>${product11.desc}</p> </div> <div class="col-12 col-lg-3"> <div class="bg-inter px-3 py-3"> <p id="priceTTC" class="text-center font-weight-bold p-0 m-0">${product11.priceTTC}</p> <p id="priceHT" class="text-center font-weight-bold color-subtext">${product11.priceHT}</p> <input type="number" class="d-block w-25 w-lg-50 text-center mx-auto" value="1"> <button class="btn-productAdd btn btn-b d-block mx-auto mt-4"><i class="fas fa-cart-plus"></i> Ajouter au Panier</button> <p class="color-subtext mt-2 text-center mb-0">${product11.stock} unités en stock</p> </div> </div>`)
        }
        if (productToAddClicked == 'product12') {
            $('li').last().text(`${product12.name}`)
            $('#category-link').attr('href', `${product12.category}.html`)
            $('#category-link').text(`${product12.category}`)
            $('#product-page').html(`<div id="${product12.productId}" class="col-12 mb-3"> <h2 class="color-subtext">${product12.name}</h2> </div> <div class="col-12 col-lg-4 mb-4 mb-lg-0"> <div id="carouselProduct" class="carousel slide border" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="${product12.img1}" alt="${product12.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product12.img2}" alt="${product12.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product12.img3}" alt="${product12.imgAlt}"> </div> </div> <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Précédant</span> </a> <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Suivant</span> </a> </div> </div> <div class="col-12 col-lg-5"> <p>${product12.desc}</p> </div> <div class="col-12 col-lg-3"> <div class="bg-inter px-3 py-3"> <p id="priceTTC" class="text-center font-weight-bold p-0 m-0">${product12.priceTTC}</p> <p id="priceHT" class="text-center font-weight-bold color-subtext">${product12.priceHT}</p> <input type="number" class="d-block w-25 w-lg-50 text-center mx-auto" value="1"> <button class="btn-productAdd btn btn-b d-block mx-auto mt-4"><i class="fas fa-cart-plus"></i> Ajouter au Panier</button> <p class="color-subtext mt-2 text-center mb-0">${product12.stock} unités en stock</p> </div> </div>`)
        }
        if (productToAddClicked == 'product13') {
            $('li').last().text(`${product13.name}`)
            $('#category-link').attr('href', `${product13.category}.html`)
            $('#category-link').text(`${product13.category}`)
            $('#product-page').html(`<div id="${product13.productId}" class="col-12 mb-3"> <h2 class="color-subtext">${product13.name}</h2> </div> <div class="col-12 col-lg-4 mb-4 mb-lg-0"> <div id="carouselProduct" class="carousel slide border" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="${product13.img1}" alt="${product13.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product13.img2}" alt="${product13.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product13.img3}" alt="${product13.imgAlt}"> </div> </div> <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Précédant</span> </a> <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Suivant</span> </a> </div> </div> <div class="col-12 col-lg-5"> <p>${product13.desc}</p> </div> <div class="col-12 col-lg-3"> <div class="bg-inter px-3 py-3"> <p id="priceTTC" class="text-center font-weight-bold p-0 m-0">${product13.priceTTC}</p> <p id="priceHT" class="text-center font-weight-bold color-subtext">${product13.priceHT}</p> <input type="number" class="d-block w-25 w-lg-50 text-center mx-auto" value="1"> <button class="btn-productAdd btn btn-b d-block mx-auto mt-4"><i class="fas fa-cart-plus"></i> Ajouter au Panier</button> <p class="color-subtext mt-2 text-center mb-0">${product13.stock} unités en stock</p> </div> </div>`)
        }
        if (productToAddClicked == 'product14') {
            $('li').last().text(`${product14.name}`)
            $('#category-link').attr('href', `${product14.category}.html`)
            $('#category-link').text(`${product14.category}`)
            $('#product-page').html(`<div id="${product14.productId}" class="col-12 mb-3"> <h2 class="color-subtext">${product14.name}</h2> </div> <div class="col-12 col-lg-4 mb-4 mb-lg-0"> <div id="carouselProduct" class="carousel slide border" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="${product14.img1}" alt="${product14.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product14.img2}" alt="${product14.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product14.img3}" alt="${product14.imgAlt}"> </div> </div> <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Précédant</span> </a> <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Suivant</span> </a> </div> </div> <div class="col-12 col-lg-5"> <p>${product14.desc}</p> </div> <div class="col-12 col-lg-3"> <div class="bg-inter px-3 py-3"> <p id="priceTTC" class="text-center font-weight-bold p-0 m-0">${product14.priceTTC}</p> <p id="priceHT" class="text-center font-weight-bold color-subtext">${product14.priceHT}</p> <input type="number" class="d-block w-25 w-lg-50 text-center mx-auto" value="1"> <button class="btn-productAdd btn btn-b d-block mx-auto mt-4"><i class="fas fa-cart-plus"></i> Ajouter au Panier</button> <p class="color-subtext mt-2 text-center mb-0">${product14.stock} unités en stock</p> </div> </div>`)
        }
        if (productToAddClicked == 'product15') {
            $('li').last().text(`${product15.name}`)
            $('#category-link').attr('href', `${product15.category}.html`)
            $('#category-link').text(`${product15.category}`)
            $('#product-page').html(`<div id="${product15.productId}" class="col-12 mb-3"> <h2 class="color-subtext">${product15.name}</h2> </div> <div class="col-12 col-lg-4 mb-4 mb-lg-0"> <div id="carouselProduct" class="carousel slide border" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="${product15.img1}" alt="${product15.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product15.img2}" alt="${product15.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product15.img3}" alt="${product15.imgAlt}"> </div> </div> <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Précédant</span> </a> <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Suivant</span> </a> </div> </div> <div class="col-12 col-lg-5"> <p>${product15.desc}</p> </div> <div class="col-12 col-lg-3"> <div class="bg-inter px-3 py-3"> <p id="priceTTC" class="text-center font-weight-bold p-0 m-0">${product15.priceTTC}</p> <p id="priceHT" class="text-center font-weight-bold color-subtext">${product15.priceHT}</p> <input type="number" class="d-block w-25 w-lg-50 text-center mx-auto" value="1"> <button class="btn-productAdd btn btn-b d-block mx-auto mt-4"><i class="fas fa-cart-plus"></i> Ajouter au Panier</button> <p class="color-subtext mt-2 text-center mb-0">${product15.stock} unités en stock</p> </div> </div>`)
        }
        if (productToAddClicked == 'product16') {
            $('li').last().text(`${product16.name}`)
            $('#category-link').attr('href', `${product16.category}.html`)
            $('#category-link').text(`${product16.category}`)
            $('#product-page').html(`<div id="${product16.productId}" class="col-12 mb-3"> <h2 class="color-subtext">${product16.name}</h2> </div> <div class="col-12 col-lg-4 mb-4 mb-lg-0"> <div id="carouselProduct" class="carousel slide border" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="${product16.img1}" alt="${product16.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product16.img2}" alt="${product16.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product16.img3}" alt="${product16.imgAlt}"> </div> </div> <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Précédant</span> </a> <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Suivant</span> </a> </div> </div> <div class="col-12 col-lg-5"> <p>${product16.desc}</p> </div> <div class="col-12 col-lg-3"> <div class="bg-inter px-3 py-3"> <p id="priceTTC" class="text-center font-weight-bold p-0 m-0">${product16.priceTTC}</p> <p id="priceHT" class="text-center font-weight-bold color-subtext">${product16.priceHT}</p> <input type="number" class="d-block w-25 w-lg-50 text-center mx-auto" value="1"> <button class="btn-productAdd btn btn-b d-block mx-auto mt-4"><i class="fas fa-cart-plus"></i> Ajouter au Panier</button> <p class="color-subtext mt-2 text-center mb-0">${product16.stock} unités en stock</p> </div> </div>`)
        }
        if (productToAddClicked == 'product17') {
            $('li').last().text(`${product17.name}`)
            $('#category-link').attr('href', `${product17.category}.html`)
            $('#category-link').text(`${product17.category}`)
            $('#product-page').html(`<div id="${product17.productId}" class="col-12 mb-3"> <h2 class="color-subtext">${product17.name}</h2> </div> <div class="col-12 col-lg-4 mb-4 mb-lg-0"> <div id="carouselProduct" class="carousel slide border" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="${product17.img1}" alt="${product17.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product17.img2}" alt="${product17.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product17.img3}" alt="${product17.imgAlt}"> </div> </div> <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Précédant</span> </a> <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Suivant</span> </a> </div> </div> <div class="col-12 col-lg-5"> <p>${product17.desc}</p> </div> <div class="col-12 col-lg-3"> <div class="bg-inter px-3 py-3"> <p id="priceTTC" class="text-center font-weight-bold p-0 m-0">${product17.priceTTC}</p> <p id="priceHT" class="text-center font-weight-bold color-subtext">${product17.priceHT}</p> <input type="number" class="d-block w-25 w-lg-50 text-center mx-auto" value="1"> <button class="btn-productAdd btn btn-b d-block mx-auto mt-4"><i class="fas fa-cart-plus"></i> Ajouter au Panier</button> <p class="color-subtext mt-2 text-center mb-0">${product17.stock} unités en stock</p> </div> </div>`)
        }
        if (productToAddClicked == 'product18') {
            $('li').last().text(`${product18.name}`)
            $('#category-link').attr('href', `${product18.category}.html`)
            $('#category-link').text(`${product18.category}`)
            $('#product-page').html(`<div id="${product18.productId}" class="col-12 mb-3"> <h2 class="color-subtext">${product18.name}</h2> </div> <div class="col-12 col-lg-4 mb-4 mb-lg-0"> <div id="carouselProduct" class="carousel slide border" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="${product18.img1}" alt="${product18.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product18.img2}" alt="${product18.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product18.img3}" alt="${product18.imgAlt}"> </div> </div> <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Précédant</span> </a> <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Suivant</span> </a> </div> </div> <div class="col-12 col-lg-5"> <p>${product18.desc}</p> </div> <div class="col-12 col-lg-3"> <div class="bg-inter px-3 py-3"> <p id="priceTTC" class="text-center font-weight-bold p-0 m-0">${product18.priceTTC}</p> <p id="priceHT" class="text-center font-weight-bold color-subtext">${product18.priceHT}</p> <input type="number" class="d-block w-25 w-lg-50 text-center mx-auto" value="1"> <button class="btn-productAdd btn btn-b d-block mx-auto mt-4"><i class="fas fa-cart-plus"></i> Ajouter au Panier</button> <p class="color-subtext mt-2 text-center mb-0">${product18.stock} unités en stock</p> </div> </div>`)
        }
        if (productToAddClicked == 'product19') {
            $('li').last().text(`${product19.name}`)
            $('#category-link').attr('href', `${product19.category}.html`)
            $('#category-link').text(`${product19.category}`)
            $('#product-page').html(`<div id="${product19.productId}" class="col-12 mb-3"> <h2 class="color-subtext">${product19.name}</h2> </div> <div class="col-12 col-lg-4 mb-4 mb-lg-0"> <div id="carouselProduct" class="carousel slide border" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="${product19.img1}" alt="${product19.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product19.img2}" alt="${product19.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product19.img3}" alt="${product19.imgAlt}"> </div> </div> <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Précédant</span> </a> <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Suivant</span> </a> </div> </div> <div class="col-12 col-lg-5"> <p>${product19.desc}</p> </div> <div class="col-12 col-lg-3"> <div class="bg-inter px-3 py-3"> <p id="priceTTC" class="text-center font-weight-bold p-0 m-0">${product19.priceTTC}</p> <p id="priceHT" class="text-center font-weight-bold color-subtext">${product19.priceHT}</p> <input type="number" class="d-block w-25 w-lg-50 text-center mx-auto" value="1"> <button class="btn-productAdd btn btn-b d-block mx-auto mt-4"><i class="fas fa-cart-plus"></i> Ajouter au Panier</button> <p class="color-subtext mt-2 text-center mb-0">${product19.stock} unités en stock</p> </div> </div>`)
        }
        if (productToAddClicked == 'product20') {
            $('li').last().text(`${product20.name}`)
            $('#category-link').attr('href', `${product20.category}.html`)
            $('#category-link').text(`${product20.category}`)
            $('#product-page').html(`<div id="${product20.productId}" class="col-12 mb-3"> <h2 class="color-subtext">${product20.name}</h2> </div> <div class="col-12 col-lg-4 mb-4 mb-lg-0"> <div id="carouselProduct" class="carousel slide border" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="${product20.img1}" alt="${product20.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product20.img2}" alt="${product20.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product20.img3}" alt="${product20.imgAlt}"> </div> </div> <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Précédant</span> </a> <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Suivant</span> </a> </div> </div> <div class="col-12 col-lg-5"> <p>${product20.desc}</p> </div> <div class="col-12 col-lg-3"> <div class="bg-inter px-3 py-3"> <p id="priceTTC" class="text-center font-weight-bold p-0 m-0">${product20.priceTTC}</p> <p id="priceHT" class="text-center font-weight-bold color-subtext">${product20.priceHT}</p> <input type="number" class="d-block w-25 w-lg-50 text-center mx-auto" value="1"> <button class="btn-productAdd btn btn-b d-block mx-auto mt-4"><i class="fas fa-cart-plus"></i> Ajouter au Panier</button> <p class="color-subtext mt-2 text-center mb-0">${product20.stock} unités en stock</p> </div> </div>`)
        }
        if (productToAddClicked == 'product21') {
            $('li').last().text(`${product21.name}`)
            $('#category-link').attr('href', `${product21.category}.html`)
            $('#category-link').text(`${product21.category}`)
            $('#product-page').html(`<div id="${product21.productId}" class="col-12 mb-3"> <h2 class="color-subtext">${product21.name}</h2> </div> <div class="col-12 col-lg-4 mb-4 mb-lg-0"> <div id="carouselProduct" class="carousel slide border" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="${product21.img1}" alt="${product21.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product21.img2}" alt="${product21.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product21.img3}" alt="${product21.imgAlt}"> </div> </div> <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Précédant</span> </a> <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Suivant</span> </a> </div> </div> <div class="col-12 col-lg-5"> <p>${product21.desc}</p> </div> <div class="col-12 col-lg-3"> <div class="bg-inter px-3 py-3"> <p id="priceTTC" class="text-center font-weight-bold p-0 m-0">${product21.priceTTC}</p> <p id="priceHT" class="text-center font-weight-bold color-subtext">${product21.priceHT}</p> <input type="number" class="d-block w-25 w-lg-50 text-center mx-auto" value="1"> <button class="btn-productAdd btn btn-b d-block mx-auto mt-4"><i class="fas fa-cart-plus"></i> Ajouter au Panier</button> <p class="color-subtext mt-2 text-center mb-0">${product21.stock} unités en stock</p> </div> </div>`)
        }
        $(document).on('click', '.btn-productAdd', function () {
            productToAddClicked = $('#product-page').children().first().attr('id')
            productToAddQuantity = $('input').first().val()
            $('input').first().val('1')
            console.log(productToAddClicked)
            console.log(productToAddQuantity)
            cartAdd();
        })
        /* Modifications Slider Images Page Fiche Produit */
        $('.carousel').carousel({
            interval: 200000
        })
    }
}



/* ------------------------------------------------

    - Fonction Globale -
    Ajout au Panier Global d'un Produit

------------------------------------------------ */

function cartAdd() {
    for (i=0; i<cartICE.length; i++) {
        console.log(i);
        if (cartICE[i] == productToAddClicked) {
            cartICE[i+1] += parseInt(productToAddQuantity);
            productToAddCheck = true;
        }
    }
    if (productToAddCheck == false) {
        cartICE[cartICE.length] = `${productToAddClicked}`;
        cartICE[cartICE.length] = 1;
    }
    console.log(cartICE);
    productToAddCheck = false;
    cartICEstrg = JSON.stringify(cartICE);
    sessionStorage.setItem("cart", cartICEstrg);
    console.log(cartICEstrg);
    productToAddQuantity = 1;
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    toastr["success"]("Votre produit a bien été ajouté au panier", "Ajouté au Panier");
}



/* ------------------------------------------------

    - Fonction Globale -
    Récupération du Panier Global

------------------------------------------------ */

function cartRecover() {
    cartICEstrg = sessionStorage.getItem("cart");
    if (cartICEstrg != null) {
        cartICE = JSON.parse(cartICEstrg);
    }
    console.log(`Panier : ${cartICE}`);
}



/* ------------------------------------------------

    - Fonction Globale -
    Mise en forme et Calculs du Panier Global

------------------------------------------------ */

function cartCalculs() {
    if ($('title:first-of-type').text() == 'iCE - Panier') {
        if (cartICE != '') {
            productsSubTotal = 0;
            productsTotalTTC = 0;
            /* Calcul des Sous-Totaux des lignes de produits */
            for (i=0; i<cartICE.length/2; i++) {
                productsSubTotal = parseFloat($('.cart-priceTTC').eq(i).children('p').text()) * parseFloat($('.cart-productToAddQuantity').eq(i).children('input').val());
                productsTotalTTC += productsSubTotal;
                $('.cart-subtotalTTC').eq(i).children('p').text(productsSubTotal.toFixed(2));
                console.log(productsTotalTTC);
            }
            /* Calculs et Attributions des Totaux */
            $('#cart-totals-subTotal').text((productsTotalTTC).toFixed(2));
            $('#cart-totals-delivery').text('3.99');
            $('#cart-totals-totalsTTC').text((productsTotalTTC + 3.99).toFixed(2));
            $('#cart-totals-totalsHT').text(parseInt((((productsTotalTTC + 3.99) / 1.2) * 100 ) / 100).toFixed(2));
            /* Modification background des lignes de produits */
            for (i=1; i<cartICE.length/2+1; i++) {
                if (i%2 == 0) {
                    $('#cart-products').children().eq(i).removeClass('bg-inter');
                    $('#cart-products').children().eq(i).addClass('bg-white');
                }
                if (i%2 != 0) {
                    $('#cart-products').children().eq(i).removeClass('bg-white');
                    $('#cart-products').children().eq(i).addClass('bg-inter');
                }
            }
        }
        else {
            $('#cart-products').append('<div class="product-none row py-5 d-flex align-items-center bg-inter font-weight-bold color-theme"><div class="col-12"><p class="m-0">Aucun produit dans le Panier :(</p></div></div>');
            $('#cart-totals-subTotal').text('0.00');
            $('#cart-totals-delivery').text('0.00');
            $('#cart-totals-totalsTTC').text('0.00');
            $('#cart-totals-totalsHT').text('0.00');
            $('#cart-totals button').addClass('disabled');
        }
    }
}



/* ------------------------------------------------

    - Fonction Globale -
    Changement de Quantité du Panier Global

------------------------------------------------ */

function cartChangeQuantity() {
    $('.product-lign input').on('change', function(){
        console.log($(this).val())
        console.log($(this).attr('product'))
        for (i=0; i<cartICE.length; i++) {
            console.log(i)
            if (cartICE[i] == $(this).attr('product')) {
                cartICE[i+1] = $(this).val();
                if (cartICE[i+1] <= 0) {
                    cartICE.splice(i, 2);
                    $(this).parent().parent().remove()
                }
            }
        }
        cartICEstrg = JSON.stringify(cartICE);
        sessionStorage.setItem("cart", cartICEstrg);
        console.log(cartICEstrg);
        cartCalculs();
        /*window.location.reload()*/
    });
}



/* ------------------------------------------------

    - Fonction Globale -
    Suppression Produit du Panier Global

------------------------------------------------ */

function cartSuppression() {
    $(document).on('click', '.cart-supp i', function () {
        console.log($(this).parent().parent().find('input').val());
        $(this).parent().parent().find('input').val('0');
        for (i=0; i<cartICE.length; i++) {
            console.log(i);
            if (cartICE[i] == $(this).parent().parent().find('input').attr('product')) {
                    cartICE.splice(i, 2);
                $(this).parent().parent().find('input').parent().parent().remove();
            }
        }
        cartICEstrg = JSON.stringify(cartICE);
        sessionStorage.setItem("cart", cartICEstrg);
        console.log(cartICEstrg);
        cartCalculs();
    });
}



/* ------------------------------------------------

    - Fonction jQuery -

------------------------------------------------ */

$(function() {
    console.log('Chargement JS - OK');
    /* Initialisations Données */
    cartRecover();
    productPageRecover();

    /* Génération Page Index */
    
    indexProductsAttribute();
    indexAddProduct();

    /* Génération Page Panier */

    cartGeneration();
    cartChangeQuantity();
    cartSuppression();

    /* Génération Page Liste Produits */


    listProductsGeneration();
    listProductsAddProduct();
    listProductsToProductPage();
    
    /* Génération Page Fiche Produit */

    productPageGeneration();
});