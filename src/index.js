import './css/style.css';
import './css/normalize.css';
import githubLogo from './imgs/GitHubMarkSmall.png';


// adds footer content to the page
var footer = (function() {
    const footerDiv = document.createElement('div');
    footerDiv.classList.add('footer');
    const footerPara_1 = document.createElement('p');
    const footerPara_2 = document.createElement('p');
    const a = document.createElement('a');
    a.href = "https://github.com/luizerkp";
    const myGithubLogo = document.createElement('img');
    myGithubLogo.src= githubLogo
    a.appendChild(myGithubLogo)
    a.setAttribute('id', 'github-logo');
    const date = new Date().getFullYear();
    footerPara_1.textContent = `Copyright © ${date} Luis Tamarez`
    footerPara_2.textContent = "All Rights Reserved";
    footerDiv.appendChild(footerPara_1);
    footerDiv.appendChild(a);
    footerDiv.appendChild(footerPara_2);

    const buildFooter = () => {
        return footerDiv;
    }

    return {
        buildFooter: buildFooter
    }
    
})();

var buildContent = (function (){
    // const content = document.querySelector('#content');
    document.body.appendChild(footer.buildFooter());
})();