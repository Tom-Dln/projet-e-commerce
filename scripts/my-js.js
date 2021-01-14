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

    Reseau - Fiches Produits

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
    desc: '',
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
    desc: '',
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
    desc: '',
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
    desc: '',
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
    desc: '',
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
    desc: '',
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
    desc: '',
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
    desc: '',
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
    desc: '',
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
    desc: '',
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
    desc: '',
    stock: 50,
    img1: 'medias/images/products/rack-1e-1.jpg',
    img2: 'medias/images/products/rack-1e-2.jpg',
    img3: 'medias/images/products/rack-1e-3.jpg',
    imgAlt: 'Photo de Multiprise 19" 1U Montage 8 puits'
};

/* ------------------------------------------------

    Usb - Fiches Produits

------------------------------------------------ */









let productX = {
    productId: '',
    name: '',
    priceHT: 0,
    priceTTC: 0,
    recap: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, veritatis odio.',
    desc: '',
    stock: 50,
    img1: 'medias/images/products/.jpg',
    img2: 'medias/images/products/.jpg',
    img3: 'medias/images/products/.jpg',
    imgAlt: 'Photo de '
};

let quantity = 1;


let clickdedProd;

let productCheck = false;

let productSubTotal;

let productsTotalTTC = 0;


let cartICE = [];
let cartICEstrg;

function indexAttributeProducts() {  
    if ($('title:first-of-type').text() == 'iCE - Accueil') {
        
        // Card 1
        $(`#card-1 .card-body`).attr('id', `${product1.productId}`)
        $(`#card-1 .card-title`).text(`${product1.name}`);
        $(`#card-1 .card-text`).first().text(`${product1.priceTTC}€`);
        $(`#card-1 .card-text`).last().text(`${product1.priceHT}€ HT`);
        $(`#card-1 img`).attr('src', `${product1.img1}`);
        $(`#card-1 img`).attr('alt', `${product1.imgAlt}`);
    
        // Card 2
        $(`#card-2 .card-body`).attr('id', `${product2.productId}`)
        $(`#card-2 .card-title`).text(`${product2.name}`);
        $(`#card-2 .card-text`).first().text(`${product2.priceTTC}€`);
        $(`#card-2 .card-text`).last().text(`${product2.priceHT}€ HT`);
        $(`#card-2 img`).attr('src', `${product2.img1}`);
        $(`#card-2 img`).attr('alt', `${product2.imgAlt}`);

        // Card 3
        $(`#card-3 .card-body`).attr('id', `${product3.productId}`)
        $(`#card-3 .card-title`).text(`${product3.name}`);
        $(`#card-3 .card-text`).first().text(`${product3.priceTTC}€`);
        $(`#card-3 .card-text`).last().text(`${product3.priceHT}€ HT`);
        $(`#card-3 img`).attr('src', `${product3.img1}`);
        $(`#card-3 img`).attr('alt', `${product3.imgAlt}`);

        // Card 4
        $(`#card-4 .card-body`).attr('id', `${product4.productId}`)
        $(`#card-4 .card-title`).text(`${product4.name}`);
        $(`#card-4 .card-text`).first().text(`${product4.priceTTC}€`);
        $(`#card-4 .card-text`).last().text(`${product4.priceHT}€ HT`);
        $(`#card-4 img`).attr('src', `${product4.img1}`);
        $(`#card-4 img`).attr('alt', `${product4.imgAlt}`);

        // Card 5
        $(`#card-5 .card-body`).attr('id', `${product5.productId}`)
        $(`#card-5 .card-title`).text(`${product5.name}`);
        $(`#card-5 .card-text`).first().text(`${product5.priceTTC}€`);
        $(`#card-5 .card-text`).last().text(`${product5.priceHT}€ HT`);
        $(`#card-5 img`).attr('src', `${product5.img1}`);
        $(`#card-5 img`).attr('alt', `${product5.imgAlt}`);

        // Card 6
        $(`#card-6 .card-body`).attr('id', `${product6.productId}`)
        $(`#card-6 .card-title`).text(`${product6.name}`);
        $(`#card-6 .card-text`).first().text(`${product6.priceTTC}€`);
        $(`#card-6 .card-text`).last().text(`${product6.priceHT}€ HT`);
        $(`#card-6 img`).attr('src', `${product6.img1}`);
        $(`#card-6 img`).attr('alt', `${product6.imgAlt}`);
    }
}

function indexAddProducts() {
    if ($('title:first-of-type').text() == 'iCE - Accueil') {
        $(document).on('click', '.btn-productAdd', function () {
            clickdedProd = $(this).parent().attr('id');
            console.log(`Produit cliqué : ${clickdedProd}`);
            productAdd();







                /*
                if (cartICE.product1 == undefined) {
                    product.id = 

                    cartICE.push()

                    console.log('Ok - Test');
                    console.log(cartICE.product1);
                }
                else {
                    cartICE.product1 += 1;
                    console.log(cartICE.product1);
                }*/
        });
    }
}

function productAdd() {
    /*cartRecover();*/
    for (i=0; i<cartICE.length; i++) {
        console.log(i)
        if (cartICE[i] == clickdedProd) {
            cartICE[i+1] += parseInt(quantity);
            productCheck = true
        }
    }
    if (productCheck == false) {
        cartICE[cartICE.length] = `${clickdedProd}`
        cartICE[cartICE.length] = 1
    }
    console.log(cartICE)
    productCheck = false
    cartICEstrg = JSON.stringify(cartICE);
    sessionStorage.setItem("cart", cartICEstrg);
    console.log(cartICEstrg);
    quantity = 1;

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
toastr["success"]("Votre produit a bien été ajouté au panier", "Ajouté au Panier")
}


function cartRecover() {
    cartICEstrg = sessionStorage.getItem("cart");
    if (cartICEstrg!=null) {
        cartICE = JSON.parse(cartICEstrg);
    }
    console.log(`Panier : ${cartICE}`);
}


function cartGeneration() {
    /* Fonction se déclenche si nous sommes sur la Page Panier */
    if ($('title:first-of-type').text() == 'iCE - Panier') {
        $('.product-lign').remove();
        /* Création des lignes de produits */
        for (i=0; i<cartICE.length; i++) {
            if (i%2 == 0) {
                if (cartICE[i] == 'product1') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product1.img1}" class="img-fluid" alt="${product1.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product1.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product1.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-quantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="product1"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product2') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product2.img1}" class="img-fluid" alt="${product2.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product2.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product2.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-quantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="product2"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product3') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product3.img1}" class="img-fluid" alt="${product3.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product3.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product3.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-quantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="product3"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product4') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product4.img1}" class="img-fluid" alt="${product4.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product4.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product4.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-quantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="product4"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product5') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product5.img1}" class="img-fluid" alt="${product5.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product5.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product5.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-quantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="product5"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
                if (cartICE[i] == 'product6') {
                    $('#cart-products').append(`<div class="product-lign row py-2 d-flex align-items-center"><div class="cart-photo col-3 col-lg-2"><img src="${product6.img1}" class="img-fluid" alt="${product6.imgAlt}"></div><div class="cart-name col-9 col-lg-3"><h6 class="color-text m-0">${product6.name}</h6></div><div class="cart-priceTTC d-none d-none d-lg-block col-lg-2"><p class="font-weight-bold m-0">${product6.priceTTC}</p></div><div class="col-3 d-lg-none"></div><div class="cart-quantity col-4 col-lg-2"><input type="number" class="w-75 text-center" value="${cartICE[i+1]}" product="product6"></div><div class="cart-subtotalTTC col-4 col-lg-2"><p class="font-weight-bold m-0">Sous-Total TTC</p></div><div class="cart-supp col-1 p-0"><i class="fas fa-trash-alt color-theme"></i></div></div>`);
                }
            }
        }
        cartCalculs();
    }
}


function cartCalculs() {
    if (cartICE != '') {
        productSubTotal = 0;
        productsTotalTTC = 0;
        /* Calcul des Sous-Totaux des lignes de produits */
        for (i=0; i<cartICE.length/2; i++) {
            productSubTotal = parseFloat($('.cart-priceTTC').eq(i).children('p').text()) * parseFloat($('.cart-quantity').eq(i).children('input').val());
            productsTotalTTC += productSubTotal
        
            $('.cart-subtotalTTC').eq(i).children('p').text(productSubTotal.toFixed(2))
        
            console.log(productsTotalTTC)
        }
        /* Calculs et Attributions des Totaux */
        $('#cart-totals-subTotal').text((productsTotalTTC).toFixed(2))
        $('#cart-totals-delivery').text('3.99')
        $('#cart-totals-totalsTTC').text((productsTotalTTC + 3.99).toFixed(2))
        $('#cart-totals-totalsHT').text(parseInt((((productsTotalTTC + 3.99) / 1.2) * 100 ) / 100).toFixed(2))
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
        $('#cart-totals-subTotal').text('0.00')
        $('#cart-totals-delivery').text('0.00')
        $('#cart-totals-totalsTTC').text('0.00')
        $('#cart-totals-totalsHT').text('0.00')
        $('#cart-totals button').addClass('disabled')
        

        
    }
}



function cartChange() {

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

    /*$(document).on('click', '.product-lign', function () {*/


}

function cartSupp() {
    $(document).on('click', '.cart-supp i', function () {
        console.log($(this).parent().parent().find('input').val())
        $(this).parent().parent().find('input').val('0')

        for (i=0; i<cartICE.length; i++) {
            console.log(i)
            if (cartICE[i] == $(this).parent().parent().find('input').attr('product')) {
                    cartICE.splice(i, 2);
                $(this).parent().parent().find('input').parent().parent().remove()
            }
        }

        cartICEstrg = JSON.stringify(cartICE);
        sessionStorage.setItem("cart", cartICEstrg);
        console.log(cartICEstrg);

        cartCalculs();
    });
}





function productsGeneration() {
    if ($('title:first-of-type').text() == 'iCE - Usb') {
        $('#products-show').append(`<div id="${product1.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product1.img1}" class="product-photo img-fluid" alt="${product1.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product1.name}</a></h5><p class="color-subtext">${product1.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product1.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product1.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`)
        if (product1.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product1.stock}`)
            $('.product-disponibility').last().addClass('text-success')
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`)
            $('.product-disponibility').last().addClass('text-danger')
            $('.btn-productAdd').last().addClass('disabled')
        }
        productsBg();
        $('#products-show').append(`<div id="${product11.productId}" class="product-lign row py-2 align-items-center"><div class="col-12 col-lg-3"><a href="product.html"><img src="${product11.img1}" class="product-photo img-fluid" alt="${product11.imgAlt}"></a></div><div class="col-12 col-lg-6 align-self-start mt-2"><h5 class="color-text d-inline-block"><a href="product.html">${product11.name}</a></h5><p class="color-subtext">${product11.recap}</p><p class="product-disponibility font-weight-bold"></p></div><div class="d-flex d-lg-block col-12 col-lg-3 text-center justify-content-center"><h3 class="priceTTC col-5 col-lg-12 m-0 p-0 mb-lg-1">${product11.priceTTC}</h3><h4 class="priceHT col-5 col-lg-12 m-0 p-0 mb-lg-3 pt-1 color-subtext">${product11.priceHT}</h4><button class="col-2 col-lg-4 m-0 p-0 btn-productAdd btn btn-b"><i class="fas fa-cart-plus" aria-hidden="true"></i></button></div></div>`)
        if (product11.stock > 0) {
            $('.product-disponibility').last().text(`En stock : ${product11.stock}`)
            $('.product-disponibility').last().addClass('text-success')
        }
        else {
            $('.product-disponibility').last().text(`Rupture de stock`)
            $('.product-disponibility').last().addClass('text-danger')
            $('.btn-productAdd').last().addClass('disabled')
        }
        productsBg();

    }
}



function productsBg() {
    if ($('.product-lign').last().prev().hasClass('bg-white')) {
        $('.product-lign').last().addClass('bg-inter')
    }
    else {
        $('.product-lign').last().addClass('bg-white')
    }
}






function productsAdd() {
    if ($('title:first-of-type').text() == 'iCE - Usb') {
        $(document).on('click', '.btn-productAdd', function () {
            clickdedProd = $(this).parent().parent().attr('id');
            console.log(`Produit cliqué : ${clickdedProd}`);
            if ($(this).hasClass('disabled')) {
                console.log('Pas de stocks')
            }
            else {
                productAdd();
            }
        })
    }
}

function productPage() {
    $(document).on('click', 'h5', function () {
        if (($('title:first-of-type').text() == 'iCE - Usb')  || ($('title:first-of-type').text() == 'iCE - Reseau') || ($('title:first-of-type').text() == 'iCE - Vidéo')) {
            clickdedProd = $(this).parent().parent().attr('id')
            console.log(clickdedProd)
            sessionStorage.setItem("product", clickdedProd);
        }
    })
    $(document).on('click', 'img', function () {
        if (($('title:first-of-type').text() == 'iCE - Usb')  || ($('title:first-of-type').text() == 'iCE - Reseau') || ($('title:first-of-type').text() == 'iCE - Vidéo')) {
            clickdedProd = $(this).parent().parent().parent().attr('id')
            console.log(clickdedProd)
            sessionStorage.setItem("product", clickdedProd);
        }
    })

        

        



/*
    for (i=0; i<cartICE.length; i++) {
        console.log(i)
        if (cartICE[i] == clickdedProd) {
            cartICE[i+1] += 1;
            productCheck = true
        }
    }
    if (productCheck == false) {
        cartICE[cartICE.length] = `${clickdedProd}`
        cartICE[cartICE.length] = 1
    }
    console.log(cartICE)
    productCheck = false
    cartICEstrg = JSON.stringify(cartICE);
    sessionStorage.setItem("cart", cartICEstrg);
    console.log(cartICEstrg);*/
}

function productRecover() {
    clickdedProd = sessionStorage.getItem("product");
    console.log(`Produit : ${clickdedProd}`);
}


function productpagegeneration() {
    if ($('title:first-of-type').text() == 'iCE - Produit') {
        if (clickdedProd == 'product1') {
            $('li').last().text(`${product1.name}`)
            $('#category-link').attr('href', `${product1.category}.html`)
            $('#category-link').text(`${product1.category}`)
            $('#product-page').html(`<div id="${product1.productId}" class="col-12 mb-3"> <h2 class="color-subtext">${product1.name}</h2> </div> <div class="col-12 col-lg-4 mb-4 mb-lg-0"> <div id="carouselProduct" class="carousel slide border" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="${product1.img1}" alt="${product1.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product1.img2}" alt="${product1.imgAlt}"> </div> <div class="carousel-item"> <img class="d-block w-100" src="${product1.img3}" alt="${product1.imgAlt}"> </div> </div> <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Précédant</span> </a> <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Suivant</span> </a> </div> </div> <div class="col-12 col-lg-5"> <p>${product1.desc}</p> </div> <div class="col-12 col-lg-3"> <div class="bg-inter px-3 py-3"> <p id="priceTTC" class="text-center font-weight-bold p-0 m-0">${product1.priceTTC}</p> <p id="priceHT" class="text-center font-weight-bold color-subtext">${product1.priceHT}</p> <input type="number" class="d-block w-25 w-lg-50 text-center mx-auto" value="1"> <button class="btn-productAdd btn btn-b d-block mx-auto mt-4"><i class="fas fa-cart-plus"></i> Ajouter au Panier</button> <p class="color-subtext mt-2 text-center mb-0">${product1.stock} unités en stock</p> </div> </div>`)
        }
        $(document).on('click', '.btn-productAdd', function () {
            clickdedProd = $('#product-page').children().first().attr('id')
            quantity = $('input').first().val()
            $('input').first().val('1')
            console.log(clickdedProd)
            console.log(quantity)
            productAdd();
        })
    
        $('.carousel').carousel({
            interval: 200000
        })
        $('.toast').toast('show')
    }
}






$(function() {
    console.log('Chargement JS - OK');
    cartRecover();
    cartGeneration();
    cartChange();
    cartSupp();


    indexAttributeProducts();
    indexAddProducts();


    productsGeneration();
    productsAdd();


    productPage();
    productRecover();


    productpagegeneration();
});