import bugersOnTray from './imgs/burgers-on-tray.png';


var addressContent = (function() {
    // address loaction content
    const addressDiv = document.createElement('div');
    const addressTag = document.createElement('address');
    const addressLink = document.createElement('a');
    const phoneLink = document.createElement('a');
  
    addressDiv.classList.add('address-div');

    // addess link and text
    addressLink.innerText = "1234 South Main St.\nSeattle, WA 98001\n";
    addressLink.href = "https://goo.gl/maps/8oHbAVAEj2bKyWnF8";
    addressLink.target = "_blank";
    addressTag.appendChild(addressLink);

    // phone link and text
    phoneLink.innerText = "(206) 55* - 021*";
    phoneLink.href = "tel:20655*021*";
    addressTag.appendChild(phoneLink);


    // append all elements to the address div
    addressDiv.appendChild(addressTag);
    


    return {
        getAddress: () => addressDiv,
        getPhoneLink: () => phoneLink,
    }

})();

var hoursContent = (function() {
    const hoursDiv = document.createElement('div');
    const hoursList = document.createElement('ul');
    const hoursListItem1 = document.createElement('li');
    const hoursListItem2 = document.createElement('li');
    const hoursListItem3 = document.createElement('li');

    hoursDiv.classList.add('hours-div');
    hoursListItem1.textContent = "Monday: Closed";
    hoursListItem2.innerText = "Tuesday - Friday: 11:00am - 9:00pm";
    hoursListItem3.innerText = "Saturday - Sunday: 11:00am - 10:30pm";

    hoursList.appendChild(hoursListItem1);
    hoursList.appendChild(hoursListItem2);
    hoursList.appendChild(hoursListItem3);
    hoursDiv.appendChild(hoursList);

    return {
        getHours: () => hoursDiv
    }
    
})();

var previewContent = (function() {
    // preview content
    const previewDiv = document.createElement('div');
    const previewImg = document.createElement('img');
    previewImg.src = bugersOnTray;
    previewImg.alt = "Burgers on a tray";
    previewDiv.setAttribute('id', 'preview-div');

    previewDiv.appendChild(previewImg);
    
    return {
        getPreview: () => previewDiv
    }

})();

var locationContent = (function() {

    const locationDiv = document.createElement('div');
    locationDiv.classList.add('location-page');
    locationDiv.setAttribute('id', 'main-content');

    const previewDiv = previewContent.getPreview();
    locationDiv.appendChild(previewDiv);

    const locationHeaderText = document.createElement('h1');
    locationHeaderText.classList.add('hero-text');
    locationHeaderText.textContent = 'Hours & Location: ';
    locationDiv.appendChild(locationHeaderText);
    

    const locationAddress = addressContent.getAddress();
    locationDiv.appendChild(locationAddress);

    const locationHours = hoursContent.getHours();
    locationDiv.appendChild(locationHours);

//     const menuButton = document.createElement('button');
//     menuButton.setAttribute('id', 'menuButton');

    return {
        getLocationPage: () => locationDiv
    }

})();

export const phone = addressContent.getPhoneLink();

export { locationContent };