import { navItemsContent } from "./headerContent.js";
import { locationContent } from "./location.js";
import { header } from './headerContent.js';


var loadPage = (function() {

    const buildIntialContentDiv = () =>{
        const intialContentDiv = document.createElement('div');
        intialContentDiv.setAttribute('id', 'content');
        const headerDiv = header.getHeader();
        intialContentDiv.appendChild(headerDiv);
        return intialContentDiv;
    };

    const contentDiv = buildIntialContentDiv();

    const load = (id) => {
        if (!navItemsContent.includes(id)) {
            alert("Page not found, if problem persists, please contact the developer");
            return window.location.reload();
        }
       if (id === "Location") {
            const locationDiv = locationContent.getLocationPage();
            contentDiv.appendChild(locationDiv);
       }

    }

    return {
        getContentDiv: () => contentDiv,
        load: load,
    }

})();

export { loadPage };