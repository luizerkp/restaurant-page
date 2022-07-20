import './css/style.css';
import './css/normalize.css';
import { footer } from './footerContent.js';
import { loadPage } from './helper.js';

var buildPageContent = (function (){
    const contentDiv = loadPage.getContentDiv();
    document.body.appendChild(contentDiv);
    loadPage.load('Location');

    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            loadPage.load(e.target.id);
        }
        );
    });

})();

var buildFooterContent = (function () {
    footer.buildFooter();
})();