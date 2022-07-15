import './css/style.css';
import './css/normalize.css';
import { footer } from './footerContent.js';
import { loadPage } from './helper.js';

var buildPageContent = (function (){
    const contentDiv = loadPage.getContentDiv();
    document.body.appendChild(contentDiv);
    loadPage.load('Location');

})();

var buildFooterContent = (function () {
    footer.buildFooter();
})();