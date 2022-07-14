import './css/style.css';
import './css/normalize.css';
import { footer } from './footerContent.js';
import { header } from './headerContent.js';
// import logo from './imgs/.png';


var buildPageContent = (function (){
    const content = document.querySelector('#content');
    footer.buildFooter();

    return {
        getContentDiv: () => content
    }
})();

var buildHeaderContent = (function () {
    const contentDiv = buildPageContent.getContentDiv();
    const headerDivContent = header.getHeader();
    contentDiv.appendChild(headerDivContent);
})();