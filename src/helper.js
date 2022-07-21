import { navItemsContent } from "./headerContent.js";
import { locationContent } from "./location.js";
import { aboutContent } from "./about.js";
import { header } from './headerContent.js';
import { contactPageContent } from "./contact.js";


var loadPage = (function() {

    const pages = {
        'location': locationContent.getLocationPage,
        // 'menu': menuContent.getMenuPageContent,
        'contact': contactPageContent.getContactPage,
        'about': aboutContent.getAboutPage,

    }

    const buildIntialContentDiv = () =>{
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

export { loadPage };