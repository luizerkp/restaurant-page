import logoImg from './imgs/logo.png';

var navMenu = (function (){
    const headerRightDivContent = document.createElement('div');
    const navItems = ['Location', 'Menu', 'About', 'Deals'];
    
    headerRightDivContent.setAttribute('id', 'header-right');

    const buildNavMenu = (items) => {    
        const nav = document.createElement('nav');
        nav.setAttribute('id', 'nav-div');

        const ul = document.createElement('ul');
        ul.setAttribute('id', 'nav-list');

        items.forEach(item => {
            let li = document.createElement('li');
            li.classList.add('nav-item');
            li.setAttribute('id', item);
            li.textContent = item;
            ul.appendChild(li);
        });
        nav.appendChild(ul);
        return nav;
    }

    const navMenuContent = buildNavMenu(navItems);

    headerRightDivContent.appendChild(navMenuContent);

    const getNavMenu = () => headerRightDivContent;

    return {
        getNavMenu : getNavMenu
    };
})();

var logo = (function () {
    const headerLeftDivContent = document.createElement('div');

    const myLogo = document.createElement('img');
    myLogo.src = logoImg;

    headerLeftDivContent.setAttribute('id', 'header-left');
    headerLeftDivContent.appendChild(myLogo);
    const getLogo = () => headerLeftDivContent;

    return {
        getLogo : getLogo
    }
})();

var header = (function () {
    const headerDiv = document.createElement('header');
    headerDiv.setAttribute('id', 'header');

    // builds the logo on the left side of the header
    const headerLeftDiv = logo.getLogo();

    // builds the nav menu on the left side of the header
    const headerRightDiv = navMenu.getNavMenu();

    headerDiv.append(headerLeftDiv, headerRightDiv);
    
    const getHeader = () => headerDiv;

    return {
        getHeader : getHeader
    }
})();

export { header };