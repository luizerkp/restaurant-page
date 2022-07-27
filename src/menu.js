
import { createImgCredit } from "./helper.js";
import loadedFriesImgFile from "./imgs/loaded-fries.jpg";
import mozzarellaSticksImgFile from "./imgs/mozzarella-sticks.jpg";
import deepFriedchickenBitesImgFile from "./imgs/deep-fried-chicken-bites.jpg";
import elCapitanImgFile from "./imgs/el-capitan.jpg";
import elPolloLocoImgFile from "./imgs/el-pollo-loco.jpg";
import elNoPanImgFile from "./imgs/el-no-pan.jpg";
import mtBrownStoneImgFile from "./imgs/mt-brown-stone.jpg";
import layeredCookieCrubleImgFile from "./imgs/layered-cookie-crumble.jpg";
import theBizNeesImgFile from "./imgs/the-biznees.jpg";
import sodaImgFile from "./imgs/soda.jpg";
import juiceImgFile from "./imgs/juice.jpg";
import smoothiesImgFile from "./imgs/smoothies.jpg";
import friesImgFile from "./imgs/fries.jpg";
import slawImgFile from "./imgs/slaw.jpg";
import saladImgFile from "./imgs/salad.jpg";
import onionRingsImgFile from "./imgs/onion-rings.jpg";


function createMenuItem (name, price, description) {
    let menuItem = {
        name: name,
        price: price,
        description: description
    }
    return menuItem;
}

function createImage (imgFile, alt, className) {
    let img = document.createElement('img');
    img.src = imgFile;
    img.alt = alt;
    img.classList.add(className);
    return img;
}

function createMenuItemDiv (menuItem, imgFigure) {
    // create elements
    let menuItemDiv = document.createElement('div');
    let menuItemImgDiv = document.createElement('div');
    let menuItemTextDiv = document.createElement('div');
    let menuItemTextDescriptionDiv = document.createElement('div');
    let menuItemTextPriceDiv = document.createElement('div');
    let menuItemName = document.createElement('h3');
    let menuItemPrice = document.createElement('h3');
    let menuItemDescription = document.createElement('p');

    // adds classes
    menuItemDiv.classList.add('menu-item');
    menuItemTextDiv.classList.add('menu-item-text-div');
    menuItemTextDescriptionDiv.classList.add('menu-item-text-description');
    menuItemTextPriceDiv.classList.add('menu-item-text-price');
    menuItemImgDiv.classList.add('menu-item-img-div');

    // add menu item text content
    menuItemName.textContent = menuItem.name;
    menuItemPrice.textContent = menuItem.price;
    menuItemDescription.textContent = menuItem.description;

    // append menu item text info to menu item text div
    menuItemTextDescriptionDiv.appendChild(menuItemName);
    menuItemTextDescriptionDiv.appendChild(menuItemDescription);
    menuItemTextPriceDiv.appendChild(menuItemPrice);
    menuItemTextDiv.appendChild(menuItemTextDescriptionDiv);
    menuItemTextDiv.appendChild(menuItemTextPriceDiv);
    

    menuItemImgDiv.appendChild(imgFigure);

    menuItemDiv.appendChild(menuItemImgDiv);
    menuItemDiv.appendChild(menuItemTextDiv);
    
    return menuItemDiv;
}


var appetizers = (function (){    
    // Appetizer menu item 1
    const loadedFriesDescription = 'Fries loaded with our secret sauce, tortilla chips, chicken, pico de gallo, mexican crema and Guacamole. Topped with chopped cilantro.';
    const loadedFries = createMenuItem('Loaded Fries', '$9.99', loadedFriesDescription);
    const loadedFriesImg = createImage(loadedFriesImgFile, 'Image of plated potato fries and tortilla chips', 'menu-item-img');

    // Appetizer menu item 1 img credit info and img with credit
    const loadedFriesImgCreditOwnerName = 'Taine Noble';
    const loadedFriesImgCreditOwnerLink = 'https://unsplash.com/@nottainenoble?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const loadedFriesImgCreditSiteName = 'Unsplash';
    const loadedFriesImgCreditSiteLink = 'https://unsplash.com/s/photos/loaded-fries?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'; 
    const loadedFriesImgWithCredit = createImgCredit(loadedFriesImg, loadedFriesImgCreditOwnerLink, loadedFriesImgCreditOwnerName, loadedFriesImgCreditSiteLink, loadedFriesImgCreditSiteName);

    const loadedFriesDiv = createMenuItemDiv(loadedFries, loadedFriesImgWithCredit);
    
    // Appetizer menu item 2 
    const mozzarellaSticksDescription = 'Classic Mozzarella sticks great for sharing with friends. Served with a side of our secret sauce.';
    const mozzarellaSticks = createMenuItem('Mozzarella Sticks', '$7.99', mozzarellaSticksDescription);
    const mozzarellaSticksImg = createImage(mozzarellaSticksImgFile, 'Image of mozzarela sticks on a plate', 'menu-item-img');

    // Appetizer menu item 2 img credit info and img with credit
    const mozzarellaSticksImgCreditOwnerName = 'Clint Bustrillos';
    const mozzarellaSticksImgCreditOwnerLink = 'https://unsplash.com/@clintbustrillos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const mozzarellaSticksImgCreditSiteName = 'Unsplash';
    const mozzarellaSticksImgCreditSiteLink = 'https://unsplash.com/s/photos/mozzarella-sticks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const mozzarellaSticksImgWithCredit = createImgCredit(mozzarellaSticksImg, mozzarellaSticksImgCreditOwnerLink, mozzarellaSticksImgCreditOwnerName, mozzarellaSticksImgCreditSiteLink, mozzarellaSticksImgCreditSiteName);

    // Appetizer menu item 2 final div
    const mozzarellaSticksDiv = createMenuItemDiv(mozzarellaSticks, mozzarellaSticksImgWithCredit);

    // Appetizer Appetizer menu item 3
    const deepFriedChickenBitesDescription = `These are one our signature appetizers, fried white or dark meat cut in smaller pieces and served with your choice of our secret sauce, ranch or blue cheese.`;
    const deepFriedchickenBites = createMenuItem('Deep Fried Chicken Bites', '$9.99', deepFriedChickenBitesDescription);
    const deepFriedChickenBitesImg = createImage(deepFriedchickenBitesImgFile, 'Image of small deep fried chicken pieces', 'menu-item-img');

    // Appetizer menu item 3 img credit info and img with credit
    const deepFriedChickenBitesImgCreditOwnerName = 'Ke Vin';
    const deepFriedChickenBitesImgCreditOwnerLink = 'https://unsplash.com/@cactuspix?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const deepFriedChickenBitesImgCreditSiteName = 'Unsplash';
    const deepFriedChickenBitesImgCreditSiteLink = 'https://unsplash.com/s/photos/fried-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const deepFriedChickenBitesImgWithCredit = createImgCredit(deepFriedChickenBitesImg, deepFriedChickenBitesImgCreditOwnerLink, deepFriedChickenBitesImgCreditOwnerName, deepFriedChickenBitesImgCreditSiteLink, deepFriedChickenBitesImgCreditSiteName);

    // Appetizer menu item 3 final div
    const deepFriedChickenBitesDiv = createMenuItemDiv(deepFriedchickenBites, deepFriedChickenBitesImgWithCredit);

    // create Appetizers Div
    const appetizersDiv = document.createElement('div');
    appetizersDiv.classList.add('menu-section');
    appetizersDiv.id = 'appetizers';

    // append all menu items to Appetizers Div
    appetizersDiv.appendChild(loadedFriesDiv);
    appetizersDiv.appendChild(mozzarellaSticksDiv);
    appetizersDiv.appendChild(deepFriedChickenBitesDiv);

    return {
        getAppetizersDiv: () => appetizersDiv
    }
})();

var mains = (function (){
    // Main menu item 1
    const elCapitanDescription = `El Capitan is our world famous Burger. It is made with 100% American Wagyu beef and seasoned with our secret blend\
    of spices that will have your taste buds buzzing with flavor. Served with a side of our secret sauce, your choice of side dish and non-alcoholic\
    beverage. Build it how you like it! or go all the way with letuce, tomato, pickles, onions, bacon, cheddar cheese & a fried egg to top it off.`;
    const elCapitan = createMenuItem('El Capitan', '$17.99', elCapitanDescription);
    const elCapitanImg = createImage(elCapitanImgFile, 'Image of a burger', 'menu-item-img');

    // Main menu item 1 img credit info and img with credit
    const elCapitanImgCreditOwnerName = 'amirali mirha...';
    const elCapitanImgCreditOwnerLink = 'https://unsplash.com/@amir_v_ali?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const elCapitanImgCreditSiteName = 'Unsplash';
    const elCapitanImgCreditSiteLink = 'https://unsplash.com/s/photos/wagyu-bacon-cheeseburger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const elCapitanImgWithCredit = createImgCredit(elCapitanImg, elCapitanImgCreditOwnerLink, elCapitanImgCreditOwnerName, elCapitanImgCreditSiteLink, elCapitanImgCreditSiteName);

    // Main menu item 1 final div
    const elCapitanDiv = createMenuItemDiv(elCapitan, elCapitanImgWithCredit);

    // Main menu item 2
    const elPolloLocoDescription = `El Pollo Loco is our signature chicken sandwich. It is so good it will have you drooling for more. Served with a side of our secret sauce, your choice of side dish and non-alcoholic\
    beverage. Build it how you like it! or go 'loco' with our house slaw blend, a pickle, our secret sauce. and your choice of cheese: cheddar, swiss, or provolone.`;
    const elPolloLoco = createMenuItem('El Pollo Loco', '$14.99', elPolloLocoDescription);
    const elPolloLocoImg = createImage(elPolloLocoImgFile, 'Image of a chicken', 'menu-item-img');

    // Main menu item 2 img credit info and img with credit
    const elPolloLocoImgCreditOwnerName = 'Jennifer Burk';
    const elPolloLocoImgCreditOwnerLink = 'https://unsplash.com/@jenandjoon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const elPolloLocoImgCreditSiteName = 'Unsplash';
    const elPolloLocoImgCreditSiteLink = 'https://unsplash.com/s/photos/chicken-sandwich?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';

    // Main menu item 2 img with credit
    const elPolloLocoImgWithCredit = createImgCredit(elPolloLocoImg, elPolloLocoImgCreditOwnerLink, elPolloLocoImgCreditOwnerName, elPolloLocoImgCreditSiteLink, elPolloLocoImgCreditSiteName);

    // Main menu item 2 final div
    const elPolloLocoDiv = createMenuItemDiv(elPolloLoco, elPolloLocoImgWithCredit);

    // Main menu item 3
    const elNoPanDescription = `If you are a rebel with a devil may care attitude then try our our signature steak full of 100% wagyu goodness. This rebel's dish is a 12oz prime ribeye prefectly made for those\
    who love no following the rules. Dry-aged for 45 days for perfect flavor and served with a side of our secret sauce, your choice of side dish and non-alcoholic beverage.`;
    const elNoPan = createMenuItem('El No Pan', '$19.99', elNoPanDescription);
    const elNoPanImg = createImage(elNoPanImgFile, 'Image of a steak', 'menu-item-img');

    // Main menu item 3 img credit info and img with credit
    const elNoPanImgCreditOwnerName = 'Emerson Vieira';
    const elNoPanImgCreditOwnerLink = 'https://unsplash.com/es/@emersonvieira?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const elNoPanImgCreditSiteName = 'Unsplash';
    const elNoPanImgCreditSiteLink = 'https://unsplash.com/s/photos/wagyu-steak?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';

    // Main menu item 3 img with credit
    const elNoPanImgWithCredit = createImgCredit(elNoPanImg, elNoPanImgCreditOwnerLink, elNoPanImgCreditOwnerName, elNoPanImgCreditSiteLink, elNoPanImgCreditSiteName);

    // Main menu item 3 final div
    const elNoPanDiv = createMenuItemDiv(elNoPan, elNoPanImgWithCredit);

    const mainsDiv = document.createElement('div');
    mainsDiv.classList.add('menu-section');
    mainsDiv.id = 'mains';
    mainsDiv.appendChild(elCapitanDiv);
    mainsDiv.appendChild(elPolloLocoDiv);
    mainsDiv.appendChild(elNoPanDiv);

    return {
        getMainsDiv: () => mainsDiv
    }
})();

var desserts = (function (){
    // desserts menu item 1
    const mtBrownStoneDescription = `This tasty treat is a perfect way to end a meal. A scoop of vanilla bean ice cream on top of a decadent chocolate brownee.\
    Served with topping of caramel drizzle and a chocalate wafer roll to top it off.`;
    const mtBrownStone = createMenuItem('Mt. Brown Stone', '$11.99', mtBrownStoneDescription);
    const mtBrownStoneImg = createImage(mtBrownStoneImgFile, 'Image of a cake', 'menu-item-img');

    // desserts menu item 1 img credit info and img with credit
    const mtBrownStoneImgCreditOwnerName = 'Kobby Mendez';
    const mtBrownStoneImgCreditOwnerLink = 'https://unsplash.com/@kobbyfotos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const mtBrownStoneImgCreditSiteName = 'Unsplash';
    const mtBrownStoneImgCreditSiteLink = 'https://unsplash.com/s/photos/desserts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';

    // desserts menu item 1 img with credit
    const mtBrownStoneImgWithCredit = createImgCredit(mtBrownStoneImg, mtBrownStoneImgCreditOwnerLink, mtBrownStoneImgCreditOwnerName, mtBrownStoneImgCreditSiteLink, mtBrownStoneImgCreditSiteName);

    // desserts menu item 1 final div
    const mtBrownStoneDiv = createMenuItemDiv(mtBrownStone, mtBrownStoneImgWithCredit);

    // desserts menu item 2
    const layeredCookieCrubleDescription = `Layer upon layer of delicious goodness, this cookie crumble is a treat for the whole family.\
    It consist of layers on salted caramel ice cream, oreo cookie crumbles, vanilla bean ice cream, chocolate ice cream and more oreo cookie crumbles.\
    topped with thick chocolate syrup, whipped cream and if you didn't have enough oreo cookies then have some more. This is the perfect treat for sharing.`;
    const layeredCookieCruble = createMenuItem('Layered Cookie Crumble', '$13.99', layeredCookieCrubleDescription);
    const layeredCookieCrubleImg = createImage(layeredCookieCrubleImgFile, 'Image of a cookie', 'menu-item-img');

    // desserts menu item 2 img credit info and img with credit
    const layeredCookieCrubleImgCreditOwnerName = 'Emile Mbunzama';
    const layeredCookieCrubleImgCreditOwnerLink = 'https://unsplash.com/@emilembunzama?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const layeredCookieCrubleImgCreditSiteName = 'Unsplash';
    const layeredCookieCrubleImgCreditSiteLink = 'https://unsplash.com/s/photos/desserts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';

    // desserts menu item 2 img with credit
    const layeredCookieCrubleImgWithCredit = createImgCredit(layeredCookieCrubleImg, layeredCookieCrubleImgCreditOwnerLink, layeredCookieCrubleImgCreditOwnerName, layeredCookieCrubleImgCreditSiteLink, layeredCookieCrubleImgCreditSiteName);

    // desserts menu item 2 final div
    const layeredCookieCrubleDiv = createMenuItemDiv(layeredCookieCruble, layeredCookieCrubleImgWithCredit);

    // desserts menu item 3
    const theBizNeesDescription = `A slice of heaven, this slice of cheese cake is a perfect end to any meal.\
    It is a New York style cheesecake with caramel drizzle and shaving of premium locally sourced chocolate.\
    Simple and delicious, this is the perfect treat for any occasion.`;
    const theBizNees = createMenuItem('The Biz Nees', '$9.99', theBizNeesDescription);
    const theBizNeesImg = createImage(theBizNeesImgFile, 'Image of a cookie', 'menu-item-img');

    // desserts menu item 3 img credit info and img with credit
    const theBizNeesImgCreditOwnerName = 'Aliona Gumeniuk';
    const theBizNeesImgCreditOwnerLink = 'https://unsplash.com/@agumeniuk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const theBizNeesImgCreditSiteName = 'Unsplash';
    const theBizNeesImgCreditSiteLink = 'https://unsplash.com/s/photos/desserts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';

    // desserts menu item 3 img with credit
    const theBizNeesImgWithCredit = createImgCredit(theBizNeesImg, theBizNeesImgCreditOwnerLink, theBizNeesImgCreditOwnerName, theBizNeesImgCreditSiteLink, theBizNeesImgCreditSiteName);

    // desserts menu item 3 final div
    const theBizNeesDiv = createMenuItemDiv(theBizNees, theBizNeesImgWithCredit);

    const dessertsDiv = document.createElement('div');
    dessertsDiv.classList.add('menu-section');
    dessertsDiv.id = 'desserts';
    dessertsDiv.appendChild(mtBrownStoneDiv);
    dessertsDiv.appendChild(layeredCookieCrubleDiv);
    dessertsDiv.appendChild(theBizNeesDiv);
    
    return {
        getDessertsDiv: () => dessertsDiv
    }
})();

var beverages = (function (){
    // beverages menu item 1
    const sodaDescription = `Your choice of coke, sprite, fanta, or water.`;
    const soda = createMenuItem('Soda', '$2.99', sodaDescription);
    const sodaImg = createImage(sodaImgFile, 'Image of a glass containing soda', 'menu-item-img');

    // beverages menu item 1 img credit info and img with credit
    const sodaImgCreditOwnerName = 'Giovanna Gomes';
    const sodaImgCreditOwnerLink = 'https://unsplash.com/@giisilveira?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const sodaImgCreditSiteName = 'Unsplash';
    const sodaImgCreditSiteLink = 'https://unsplash.com/s/photos/glass-of-coke?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';

    // beverages menu item 1 img with credit
    const sodaImgWithCredit = createImgCredit(sodaImg, sodaImgCreditOwnerLink, sodaImgCreditOwnerName, sodaImgCreditSiteLink, sodaImgCreditSiteName);

    // beverages menu item 1 final div
    const sodaDiv = createMenuItemDiv(soda, sodaImgWithCredit);

    // beverages menu item 2
    const juiceDescription = `if you are looking for a fresh juice then you can choose from a variety of juices.\
    We have Lemonade, pink lemonade, orange juice, apple juice, and pineapple juice.`;
    const juice = createMenuItem('Juice', '$3.99', juiceDescription);
    const juiceImg = createImage(juiceImgFile, 'Image of a glass containing orange juice', 'menu-item-img');

    // beverages menu item 2 img credit info and img with credit
    const juiceImgCreditOwnerName = 'ABHISHEK HAJARE';
    const juiceImgCreditOwnerLink = 'https://unsplash.com/@abhishek_hajare?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const juiceImgCreditSiteName = 'Unsplash';
    const juiceImgCreditSiteLink = 'https://unsplash.com/s/photos/juice?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';

    // beverages menu item 2 img with credit
    const juiceImgWithCredit = createImgCredit(juiceImg, juiceImgCreditOwnerLink, juiceImgCreditOwnerName, juiceImgCreditSiteLink, juiceImgCreditSiteName);

    // beverages menu item 2 final div
    const juiceDiv = createMenuItemDiv(juice, juiceImgWithCredit);

    // beverages menu item 3
    const smoohtiesDescription = `If a smoothie is more your thing, then you can choose from a variety of smoothies.\
    Watermelon smoothie, mango smoothie, strawberry smoothie, and pineapple smoothie. Or you can choose from our selection of\
    of milk shakes that include vanilla, chocolate, salted caramel, and strawberry.`;
    const smoohties = createMenuItem('Smoothies', '$4.99', smoohtiesDescription);
    const smoohtiesImg = createImage(smoothiesImgFile, 'Image of a glass containing fruit smoothie', 'menu-item-img');

    // beverages menu item 3 img credit info and img with credit
    const smoohtiesImgCreditOwnerName = 'Yulia Khlebnikova';
    const smoohtiesImgCreditOwnerLink = 'https://unsplash.com/@khlebnikovayulia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const smoohtiesImgCreditSiteName = 'Unsplash';
    const smoohtiesImgCreditSiteLink = 'https://unsplash.com/s/photos/juice?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';

    // beverages menu item 3 img with credit
    const smoohtiesImgWithCredit = createImgCredit(smoohtiesImg, smoohtiesImgCreditOwnerLink, smoohtiesImgCreditOwnerName, smoohtiesImgCreditSiteLink, smoohtiesImgCreditSiteName);

    // beverages menu item 3 final div
    const smoohtiesDiv = createMenuItemDiv(smoohties, smoohtiesImgWithCredit);

    const beveragesDiv = document.createElement('div');
    beveragesDiv.classList.add('menu-section');
    beveragesDiv.id = 'beverages';
    beveragesDiv.appendChild(sodaDiv);
    beveragesDiv.appendChild(juiceDiv);
    beveragesDiv.appendChild(smoohtiesDiv);  

    return {
        getBeveragesDiv: () => beveragesDiv
    }
})();

var sides = (function (){
    // sides menu item 1
    const  friesDescription = `Fries are a staple of any meal. We have a variety of fries that are made with fresh ingredients.\
    You can choose from regular, wedges, or curly fries.`;
    const fries = createMenuItem('Fries', '$2.99', friesDescription);
    const friesImg = createImage(friesImgFile, 'Image of a plate of fries', 'menu-item-img');

    // sides menu item 1 img credit info and img with credit
    const friesImgCreditOwnerName = 'Giovanna Gomes';
    const friesImgCreditOwnerLink = 'https://unsplash.com/@giisilveira?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const friesImgCreditSiteName = 'Unsplash';
    const friesImgCreditSiteLink = 'https://unsplash.com/s/photos/fries?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';

    // sides menu item 1 img with credit
    const friesImgWithCredit = createImgCredit(friesImg, friesImgCreditOwnerLink, friesImgCreditOwnerName, friesImgCreditSiteLink, friesImgCreditSiteName);

    // sides menu item 1 final div
    const friesDiv = createMenuItemDiv(fries, friesImgWithCredit);

    // sides menu item 2
    const saladDescription = `A salad is a healthy way to eat. We have a variety of salads that are made with fresh ingredients.\
    You can choose from a variety of salads: ceasar, garden, and vegie salads.`;
    const salad = createMenuItem('Salad', '$3.99', saladDescription);
    const saladImg = createImage(saladImgFile, 'Image of a plate of salad', 'menu-item-img');

    // sides menu item 2 img credit info and img with credit
    const saladImgCreditOwnerName = 'Giovanna Gomes';
    const saladImgCreditOwnerLink = 'https://unsplash.com/@giisilveira?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const saladImgCreditSiteName = 'Unsplash';
    const saladImgCreditSiteLink = 'https://unsplash.com/s/photos/fries?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';

    // sides menu item 2 img with credit
    const saladImgWithCredit = createImgCredit(saladImg, saladImgCreditOwnerLink, saladImgCreditOwnerName, saladImgCreditSiteLink, saladImgCreditSiteName);

    // sides menu item 2 final div
    const saladDiv = createMenuItemDiv(salad, saladImgWithCredit);

    // sides menu item 3
    const slawDescription = `Try our house special slaw. This is a tasty treat to accompany your meal. Made daily from fresh ingredients.`;
    const slaw = createMenuItem('Slaw', '$3.99', slawDescription);
    const slawImg = createImage(slawImgFile, 'Image of a plate of slaw', 'menu-item-img');

    // sides menu item 3 img credit info and img with credit
    const slawImgCreditOwnerName = 'Giovanna Gomes';
    const slawImgCreditOwnerLink = 'https://unsplash.com/@giisilveira?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const slawImgCreditSiteName = 'Unsplash';
    const slawImgCreditSiteLink = 'https://unsplash.com/s/photos/fries?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';

    // sides menu item 3 img with credit
    const slawImgWithCredit = createImgCredit(slawImg, slawImgCreditOwnerLink, slawImgCreditOwnerName, slawImgCreditSiteLink, slawImgCreditSiteName);

    // sides menu item 3 final div
    const slawDiv = createMenuItemDiv(slaw, slawImgWithCredit);

    // sides menu item 4
    const onionRingDescription = `Try our onion ring. This is a tasty treat to accompany your meal. Made daily from fresh ingredients.`;
    const onionRing = createMenuItem('Onion Ring', '$3.99', onionRingDescription);
    const onionRingImg = createImage(onionRingsImgFile, 'Image of a plate of onion ring', 'menu-item-img');

    // sides menu item 4 img credit info and img with credit
    const onionRingImgCreditOwnerName = 'Giovanna Gomes';
    const onionRingImgCreditOwnerLink = 'https://unsplash.com/@giisilveira?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const onionRingImgCreditSiteName = 'Unsplash';
    const onionRingImgCreditSiteLink = 'https://unsplash.com/s/photos/fries?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';

    // sides menu item 4 img with credit
    const onionRingImgWithCredit = createImgCredit(onionRingImg, onionRingImgCreditOwnerLink, onionRingImgCreditOwnerName, onionRingImgCreditSiteLink, onionRingImgCreditSiteName);

    // sides menu item 4 final div
    const onionRingDiv = createMenuItemDiv(onionRing, onionRingImgWithCredit);

    const sidesDiv = document.createElement('div');
    sidesDiv.classList.add('menu-section');
    sidesDiv.id = 'sides';
    sidesDiv.appendChild(friesDiv);
    sidesDiv.appendChild(saladDiv);
    sidesDiv.appendChild(slawDiv);
    sidesDiv.appendChild(onionRingDiv);

    return {
        getSidesDiv: () => sidesDiv
    }
})();

var menuContent = (function (){
    const menuPageDiv = document.createElement('div');
    menuPageDiv.classList.add('menu-page');
    menuPageDiv.setAttribute('id', 'main-content');

    const menuPageHeaderDiv = document.createElement('div');
    menuPageHeaderDiv.classList.add('menu-page-header');
    const menuPageHeader = document.createElement('h1');
    menuPageHeader.textContent = 'Menu';

    const menuSelectOptions = document.createElement('select');
    menuSelectOptions.setAttribute('id', 'menu-select-options');

    const selections = {
        'Appetizers': appetizers.getAppetizersDiv(),
        'Mains': mains.getMainsDiv(),
        'Desserts': desserts.getDessertsDiv(),
        'Beverages': beverages.getBeveragesDiv(),
        'Sides': sides.getSidesDiv()
    }

    const createMenuSelectOptions = (options) => {
        options.forEach(option => {
            let optionElement = document.createElement('option');
            optionElement.textContent = option;
            optionElement.value = option;
            if (option === 'Appetizers') {
                optionElement.setAttribute('selected', 'selected');
            }
            menuSelectOptions.appendChild(optionElement);
        }
        );
    }

    const menuOptions = ['Appetizers', 'Mains', 'Desserts', 'Beverages', 'Sides'];
    createMenuSelectOptions(menuOptions);

   // Appends current menu selection to menu page div  
    menuPageHeaderDiv.appendChild(menuPageHeader);
    menuPageHeaderDiv.appendChild(menuSelectOptions);
    menuPageDiv.appendChild(menuPageHeaderDiv);
 
    // Appends current menu selection to menu page div
    menuPageDiv.appendChild(selections[menuOptions[0]]);

    menuSelectOptions.addEventListener('change', (e) => {
        let selectedMenu = selections[e.target.value];
        renderMenu(selectedMenu);
    });

    const renderMenu = (menu) => {
        const currentlySelectedMenu = document.querySelector('.menu-section');
        currentlySelectedMenu.replaceWith(menu);
    }

    return {
        getMenuPage: () => menuPageDiv,
    }
})();

export { menuContent };