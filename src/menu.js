
import { createImgCredit } from "./helper.js";
import loadedFriesImgFile from "./imgs/loaded-fries.jpg";
import mozzarellaSticksImgFile from "./imgs/mozzarella-sticks.jpg";
import deepFriedchickenBitesImgFile from "./imgs/deep-fried-chicken-bites.jpg";
import elCapitanImgFile from "./imgs/el-capitan.jpg";
import elPolloLocoImgFile from "./imgs/el-pollo-loco.jpg";
import elNoPanImgFile from "./imgs/el-no-pan.jpg";

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
    const tempDiv = document.createElement('div');
    tempDiv.classList.add('menu-section');
    tempDiv.textContent = 'temprary placeholder for desserts';

    return {
        getDessertsDiv: () => tempDiv
    }

})();

var beverages = (function (){
    const tempDiv = document.createElement('div');
    tempDiv.classList.add('menu-section');
    tempDiv.textContent = 'temprary placeholder for beverages';

    return {
        getBeveragesDiv: () => tempDiv
    }
})();

var sides = (function (){
    const tempDiv = document.createElement('div');
    tempDiv.classList.add('menu-section');
    tempDiv.textContent = 'temprary placeholder for sides';


    return {
        getSidesDiv: () => tempDiv
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