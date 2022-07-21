import { managerInfo, headChefInfo, ownerInfo } from "./contact.js";
import managerStockImg from "./imgs/manager-stock.jpg";
import headChefStockImg from "./imgs/headChef-stock.jpg";
import ownerStockImg from "./imgs/owner-stock.jpg";


var createBioDivHelpers = (function () {
    const buildBioContent = (personInfo, imgContent) => {
        let bioDiv = document.createElement('div');
        let bioImgDiv = document.createElement('div');
        let biontextDiv = document.createElement('div');
        let bioHeader = document.createElement('h3');
        let bioPara = document.createElement('p');

        bioDiv.classList.add('bio-div');
        // bioImgDiv.classList.add('bio-img-div');
        bioHeader.classList.add('bio-header');
        bioPara.classList.add('bio-para');
        biontextDiv.classList.add('bio-text-div');
    

        bioHeader.textContent = 'About the ' + personInfo.role + ' ' + personInfo.name + ':';
        bioPara.textContent = personInfo.bio;

        // append image and credit to bio div
        bioImgDiv.appendChild(imgContent);

        // append text to bio div
        biontextDiv.appendChild(bioHeader);
        biontextDiv.appendChild(bioPara);

        // append all to bio div
        bioDiv.appendChild(bioImgDiv);
        bioDiv.appendChild(biontextDiv);

        return bioDiv;     
    }

    const createImgCredit = (img, creditOnwerLink, creditOnwerName, creditSiteLink, creditSiteName) => {
        let figure = document.createElement('figure');
        let creditOnwer = document.createElement('a');
        let hostSite = document.createElement('a');
        let figCaption = document.createElement('figcaption');

        img.classList.add('bio-img');
        
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

    return {
        buildBioContent : buildBioContent,
        createImgCredit : createImgCredit
    }

})();

var ownerDivContent = (function () {
    // image of restaurant owner obtained from unsplash
    const ownerImg = document.createElement('img');
    ownerImg.src = ownerStockImg;
    ownerImg.alt = 'Man wearing a business suit sitting on a couch while reading a book';

    // img credit info
    const ownerImgCreditOwnerName = 'Paul White';
    const ownerImgCreditOwnerLink =  'https://unsplash.com/@paulwhiteplaytowin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const ownerImgCreditSiteName = 'Unsplash';
    const ownerImgCreditSiteLink = 'https://unsplash.com/s/photos/entrepeneur?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';

    // create img with credit
    const ownerImgWithCredit = createBioDivHelpers.createImgCredit(ownerImg, ownerImgCreditOwnerLink, ownerImgCreditOwnerName, ownerImgCreditSiteLink, ownerImgCreditSiteName);

    // Owner's bio
    ownerInfo.bio = `Luizer Turing is an entrepeneur and owner of the restaurant. He is passionate about food, Luizer's\
    Burger Shack is what you get when you a passion for great American food and the drive for excellence. Luizer is\
    an avid reader and loves to share his knowledge with his guests. Luizer is a graduate of the University of\
    Texas at Austin with a B.S. in Business Administration. His main goal when starting his restaurant is to\
    provide the best quality food and service to the people of the world. To Luizer burger aren't just burgers,\
    they are also a way to share his love of food with the world. His mission is to make sure that everyone is\
    happy and that everyone is able to enjoy the food that Luizer's Burger Shack has to offer.`;

    // create bio div
    const ownerBioDiv = createBioDivHelpers.buildBioContent(ownerInfo, ownerImgWithCredit);

    return {
        getOwnerBioDiv : () => ownerBioDiv
    }
    
})();

var managerDivContent = (function () {
    // image of the restaurant manager obatined from unsplash
    const managerImg = document.createElement('img');
    managerImg.src = managerStockImg;
    managerImg.alt = 'Photo of black woman in bussiness casual clothes';

    // img credit info
    const managerImgCreditOwnerName = 'Christina @ wocintechchat.com';
    const managerImgCreditOwnerLink = 'https://unsplash.com/@wocintechchat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const managerImgCreditHostingSiteName = 'Unsplash';
    const managerImgCreditHostingSiteLink = 'https://unsplash.com/s/photos/manager?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';

    // create img with credit
    const imgWithCredit = createBioDivHelpers.createImgCredit(managerImg, managerImgCreditOwnerLink, managerImgCreditOwnerName, managerImgCreditHostingSiteLink, managerImgCreditHostingSiteName);

    managerInfo.bio = `Jannelle Maito, has an extensive track record in the resaturant industry with over 15 years\
    of experience. She has spearheaded the development of Luizer's Burgershack from it's humble beginnings to\
    its major success, featuring as Seattle's "Best eateries and Hiddem gems" for 6 consecutive years. Jannelle has\
    has a passion for ensuring that each experiece at Luizer's is a uniquely flavorfilled and fun experience, whether\ 
    this your first visit or 100th. She is a dedicated to customer satisfaction and is always ready to help you with\
    any questions or concerns. To her fellow team, she is a great friend, a great helper, and mentor and is alway ready\
    to provide those under her care with the best tools necessary to acchieve excellence.`;
    
    const managerBioDiv = createBioDivHelpers.buildBioContent(managerInfo, imgWithCredit);

    return {
        getManagerBioDiv : () => managerBioDiv
    }
})();

var headChefDivContent = (function () {
    // image of the restaurant manager obatined from unsplash
    const headChefImg = document.createElement('img');
    headChefImg.src = headChefStockImg;
    headChefImg.alt = 'Photo of chef in a restaurant kitchen';

    // img credit info
    const headChefImgCreditOwnerName = 'Louis Hansel';
    const headChefImgCreditOwnerLink = 'https://unsplash.com/@louishansel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    const headChefImgCreditHostingSiteName = 'Unsplash';
    const headChefImgCreditHostingSiteLink = 'https://unsplash.com/s/photos/entrepeneur?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';

    // create img with credit
    const imgWithCredit = createBioDivHelpers.createImgCredit(headChefImg, headChefImgCreditOwnerLink, headChefImgCreditOwnerName, headChefImgCreditHostingSiteLink, headChefImgCreditHostingSiteName);

    headChefInfo.bio = `Alex Berkman is a master chef with a passion for great food. He is a graduate of the of\
    The Culinary Institute of America and has been a chef for over 10 years. He is a passionate about food and\
    is always looking to improve his skills and knowledge. Alex is a great team player and is always ready to\
    help you with any questions or concerns. To Alex, food is a passion and he is always looking to provide\
    food that is unique and flavorful. Her has developed the art of creating a delicious burger to the pointn\
    that it is a must-have experience for anyone visiting Seattle. Locals and visitors alike will love the\
    food that Alex has to offer.`;

    const headChefBioDiv = createBioDivHelpers.buildBioContent(headChefInfo, imgWithCredit);

    return {
        getHeadChefBioDiv : () => headChefBioDiv
    }
})();

var aboutContent = (function () {
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about-page');
    aboutDiv.setAttribute('id', 'main-content');
    const line = document.createElement('hr');

    const introPara = document.createElement('p');
    introPara.setAttribute('id', 'intro-para');
    introPara.textContent = `Luizer's Burger Shack is a restaurant that specializes in American comfort food.\
    We are a gourmet burger restaurant that has been serving the Seattle area since 2010. When it comes to our\
    food, we are always looking for new ways to improve our cuisine. Our ultimate goal\
    is to provide the best quality food. Any good chef will tell you that quality ingredients make quality food, this\
    has always been our motto. So what are you waiting for? Come join us and see what Luizer's has to offer!`;

    const ownerBio = ownerDivContent.getOwnerBioDiv();
    const managerBio = managerDivContent.getManagerBioDiv();
    const headChefBio = headChefDivContent.getHeadChefBioDiv();


    aboutDiv.appendChild(introPara);
    aboutDiv.appendChild(line);
    aboutDiv.appendChild(ownerBio);
    aboutDiv.appendChild(managerBio);
    aboutDiv.appendChild(headChefBio);


    return {
        getAboutPage : () => aboutDiv
    }

})();

export { aboutContent };

