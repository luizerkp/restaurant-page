import { header } from './headerContent.js';
import { navItemsContent } from "./headerContent.js";
import { locationContent } from "./location.js";
import { menuContent } from './menu.js';
import { aboutContent } from "./about.js";
import { contactContent } from "./contact.js";

// // contact factory function
function createContact(name, role, phone, email) {
    let contact = {
        name: name,
        role: role,
        phone: phone,
        email: email
    }
    return contact;
}

// helper function taht creates a figure eleement with an image and caption for crediting open source images
function createImgCredit(img, creditOnwerLink, creditOnwerName, creditSiteLink, creditSiteName) {
    let figure = document.createElement('figure');
    let creditOnwer = document.createElement('a');
    let hostSite = document.createElement('a');
    let figCaption = document.createElement('figcaption');

    // create links
    creditOnwer.href = creditOnwerLink;
    creditOnwer.innerText = creditOnwerName;
    hostSite.href = creditSiteLink;
    hostSite.innerText = creditSiteName;

    // create text for figcaption
    figCaption.appendChild(document.createTextNode('Photo by '));
    figCaption.appendChild(creditOnwer);
    figCaption.appendChild(document.createTextNode(' on '));
    figCaption.appendChild(hostSite);

    // append all to figure
    figure.appendChild(img);
    figure.appendChild(figCaption);

    figCaption.classList.add('img-credit');

    return figure;
}

var loadPage = (function () {
    const pages = {
        'location': locationContent.getLocationPage,
        'menu': menuContent.getMenuPage,
        'contact': contactContent.getContactPage,
        'about': aboutContent.getAboutPage,

    }

    const buildIntialContentDiv = () => {
        const intialContentDiv = document.createElement('div');
        const mainContentDiv = document.createElement('div');
        intialContentDiv.setAttribute('id', 'content');
        mainContentDiv.setAttribute('id', 'main-content');
        const headerDiv = header.getHeader();
        intialContentDiv.appendChild(headerDiv);
        intialContentDiv.appendChild(mainContentDiv);

        return intialContentDiv;
    };

    const contentDiv = buildIntialContentDiv();



    const load = (id) => {
        if (!navItemsContent.includes(id)) {
            alert("Page not found, if problem persists, please contact the developer");
            return window.location.reload();
        }
        id = id.toLowerCase();
        renderContent(id);

    }
    const renderContent = (id) => {
        const mainContent = document.querySelector('#main-content');
        mainContent.replaceWith(pages[id]());
    }

    return {
        getContentDiv: () => contentDiv,
        load: load,
    }

})();

export { loadPage, createImgCredit, createContact };