import './css/style.css';
import './css/normalize.css';
import { footer } from './footerContent.js';
// import logo from './imgs/.png';


var buildContent = (function (){
    const content = document.querySelector('#content');
    footer.buildFooter();

    return {
        getContentDiv: () => content
    }


})();

var header = (function () {
    const rightP = document.createElement('p');
    rightP.textContent = "This is the right div";

    const leftP = document.createElement('p');
    leftP.textContent = "This is the right div";

    const headerDiv = document.createElement('header');
    headerDiv.setAttribute('id', 'header');
    const contentDiv = buildContent.getContentDiv();

    const headerLeftDiv = document.createElement('div');
    headerLeftDiv.setAttribute('id', 'header-left');
    // const myLogo = document.createElement('img');
    // myLogo.src = logo;
    headerLeftDiv.appendChild(leftP);

    const headerRightDiv = document.createElement('div');
    headerRightDiv.setAttribute('id', 'header-right');
    headerRightDiv.appendChild(rightP);

    headerDiv.append(headerLeftDiv, headerRightDiv);



    contentDiv.appendChild(headerDiv);
})();