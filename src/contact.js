import { phone } from "./location";

var reservations = (function () {
    const reservationsDiv = document.createElement('div');
    const reservationsEmail = document.createElement('a');
    reservationsEmail.href = "mailto:Luizersburgershack@gmail.com?subject = Reservations&body = Message";
    reservationsEmail.innerText = "Email Us to make a reservation";
    reservationsDiv.appendChild(phone);
    reservationsDiv.appendChild(reservationsEmail);
    reservationsDiv.classList.add('reservations-div');

    return {
        getReservations: () => reservationsDiv
    }
})();

var contacts = (function () {
    const contactsDiv = document.createElement('div');
    contactsDiv.classList.add('contacts-div');


    // restaurant manager contact info
    const contactsManagerEmail = document.createElement('a');
    contactsManagerEmail.href = "mailto:janelledoe@gmail.com?subject = Contact Janelle&body = Message";
    contactsManagerEmail.innerText = "Email our manager Janelle";
    const contactsManagerPhone = document.createElement('a');
    contactsManagerPhone.href = "tel:20656*021*";
    contactsManagerPhone.innerText = "Call manager Janelle";

    // head chef contact info
    const contactsHeadChefEmail = document.createElement('a');
    contactsHeadChefEmail.href = "mailto:Alexthecheft@gmail.com?subject = Contact Alex&body = Message";
    contactsHeadChefEmail.innerText = "Email our head chef Alex";
    const contactsHeadChefPhone = document.createElement('a');
    contactsHeadChefPhone.href = "tel:20657*021*";
    contactsHeadChefPhone.innerText = "Call our head chef";

    // restaurant owner contact info
    const contactsOwnerEmail = document.createElement('a');
    contactsOwnerEmail.href = "mailto:Luizer@gmail.com?subject = Contact Luis&body = Message";
    contactsOwnerEmail.innerText = "Email the owner Luizer";
    const contactsOwnerPhone = document.createElement('a');
    contactsOwnerPhone.href = "tel:20658*021*";
    contactsOwnerPhone.innerText = "Call the owner Luizer";

    contactsDiv.appendChild(contactsManagerEmail);
    contactsDiv.appendChild(contactsManagerPhone);
    contactsDiv.appendChild(contactsHeadChefEmail);
    contactsDiv.appendChild(contactsHeadChefPhone);
    contactsDiv.appendChild(contactsOwnerEmail);
    contactsDiv.appendChild(contactsOwnerPhone);
    
    return {
        getContacts: () => contactsDiv
    }
    
})();