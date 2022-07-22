
import { createImgCredit } from "./helper.js";
import loadedFriesImgFile from "./imgs/loaded-fries.jpg";
import mozzarellaSticksImgFile from "./imgs/mozzarella-sticks.jpg";

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
    let menuItemName = document.createElement('h3');
    let menuItemPrice = document.createElement('p');
    let menuItemDescription = document.createElement('p');

    // adds classes
    menuItemDiv.classList.add('menu-item');

    // add menu item text content
    menuItemName.textContent = menuItem.name;
    menuItemPrice.textContent = menuItem.price;
    menuItemDescription.textContent = menuItem.description;

    // append menu item text info to menu item text div
    menuItemTextDiv.appendChild(menuItemName);
    menuItemTextDiv.appendChild(menuItemDescription);
    menuItemTextDiv.appendChild(menuItemPrice);

    menuItemImgDiv.appendChild(imgFigure);

    menuItemDiv.appendChild(menuItemImgDiv);
    menuItemDiv.appendChild(menuItemTextDiv);
    
    return menuItemDiv;
}


var appetizers = (function (){    

    // menu item 1
    const loadedFriesDescription = 'Fries loaded with our secret sauce, tortilla chips, chicken, pico de gallo, mexican crema and Guacamole. Topped with chopped cilantro.';
    const loadedFries = createMenuItem('Loaded Fries', '$9.00', loadedFriesDescription);
    const loadedFriesImg = createImage(loadedFriesImgFile, 'Image of plated potato fries and tortilla chips', 'menu-item-img');

    // menu item 1 img credit info and img with credit
    const loadedFriesImgCreditOwnerName = 'Taine Noble';
    const loadedFriesImgCreditOwnerLink = 'https://unsplash.com/@nottainenoble?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const loadedFriesImgCreditSiteName = 'Unsplash';
    const loadedFriesImgCreditSiteLink = 'https://unsplash.com/s/photos/loaded-fries?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'; 
    const loadedFriesImgWithCredit = createImgCredit(loadedFriesImg, loadedFriesImgCreditOwnerLink, loadedFriesImgCreditOwnerName, loadedFriesImgCreditSiteLink, loadedFriesImgCreditSiteName);

    const loadedFriesDiv = createMenuItemDiv(loadedFries, loadedFriesImgWithCredit);
    
    // menu item 2 
    const mozzarellaSticksDescription = 'Classic Mozzarella sticks great for sharing with friends. Served with a side of our secret sauce.';
    const mozzarellaSticks = createMenuItem('Mozzarella Sticks', '$7.00', mozzarellaSticksDescription, './images/mozzarellaSticks.jpg');
    const mozzarellaSticksImg = createImage(mozzarellaSticksImgFile, 'Image of mozzarela sticks on a plate', 'menu-item-img');

    // menu item 2 img credit info and img with credit
    const mozzarellaSticksImgCreditOwnerName = 'Clint Bustrillos';
    const mozzarellaSticksImgCreditOwnerLink = 'https://unsplash.com/@clintbustrillos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const mozzarellaSticksImgCreditSiteName = 'Unsplash';
    const mozzarellaSticksImgCreditSiteLink = 'https://unsplash.com/s/photos/mozzarella-sticks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const mozzarellaSticksImgWithCredit = createImgCredit(mozzarellaSticksImg, mozzarellaSticksImgCreditOwnerLink, mozzarellaSticksImgCreditOwnerName, mozzarellaSticksImgCreditSiteLink, mozzarellaSticksImgCreditSiteName);

    const mozzarellaSticksDiv = createMenuItemDiv(mozzarellaSticks, mozzarellaSticksImgWithCredit);

    // const deepFriedGreenTomatoesDescription = ``
    // const deepFriedGreenTomatoes = createMenuItem('Deep Fried Green Tomatoes', '$7.00', deepFriedGreenTomatoesDescription, './images/deepFriedGreenTomatoes.jpg');

    // const veggieTrayDescription = ``
    // const veggieTray = createMenuItem('Veggie Tray', '$7.00', veggieTrayDescription, './images/veggieTray.jpg');

    // const onionRingDescription = ``
    // const onionRing = createMenuItem('Onion Ring', '$7.00', onionRingDescription, './images/onionRing.jpg');


    // create Appetizers Div
    const appetizersDiv = document.createElement('div');
    const appetizersDivTitle = document.createElement('h2');
    appetizersDivTitle.textContent = 'Appetizers';
    appetizersDiv.classList.add('menu-section');
    appetizersDiv.id = 'appetizers';
    appetizersDiv.appendChild(loadedFriesDiv);
    appetizersDiv.appendChild(mozzarellaSticksDiv);

    return {
        getAppetizersDiv: () => appetizersDiv
    }

})();

// var mains = (function (){
    
// })();

// var desserts = (function (){

// })();

// var beverages = (function (){
    
// })();

// var sides = (function (){

// })();

var menuContent = (function (){
    const menuPageDiv = document.createElement('div');
    menuPageDiv.classList.add('menu-page');
    menuPageDiv.setAttribute('id', 'main-content');

    const menuPageHeader = document.createElement('h1');
    menuPageHeader.textContent = 'Menu';

    const appetizersDiv = appetizers.getAppetizersDiv();

    menuPageDiv.appendChild(menuPageHeader);
    menuPageDiv.appendChild(appetizersDiv);
    
    return {
        getMenuPage: () => menuPageDiv,
    }

})();

export { menuContent };