import { phone } from './location.js';
import { createContact } from './helper.js';

// create contact Divs
const createContactDiv = (contactInfo) => {
    // crreate contact div
    let contactDiv = document.createElement('div');
    let contactHeader = document.createElement('h3');
    let lineBreak = document.createElement('br');
    contactDiv.classList.add('contact');
    contactHeader.classList.add('contact-header');

    // create contact header
    contactHeader.textContent = contactInfo.role + ' ' + contactInfo.name + ':';

    // create email link
    let contactEmail = document.createElement('a');
    contactEmail.href = 'mailto:' + contactInfo.email + '?subject = Contact ' + contactInfo.name + '&body = Message';
    contactEmail.innerText = contactInfo.email;

    // create phone link
    let contactPhone = document.createElement('a');
    contactPhone.href = 'tel:' + contactInfo.phone;
    contactPhone.innerText = contactInfo.phone;

    contactDiv.appendChild(contactHeader);
    contactDiv.appendChild(contactEmail);
    contactDiv.appendChild(lineBreak);
    contactDiv.appendChild(contactPhone);

    return contactDiv;
}    

var reservations = (function () {
    const reservationsDiv = document.createElement('div');
    const reservationsDivHeader = document.createElement('h1');
    const reservationsDivPara = document.createElement('p');
    const line = document.createElement('hr');

    // css classes
    reservationsDivHeader.classList.add('header-text');
    reservationsDiv.classList.add('reservations-div'); 

    // email contact link
    const reservationsContactInfo = createContact('Desk', 'Reservations', phone.innerText, 'Luizersburgershack@lbgsmail.com');
    const reservationsContactDiv = createContactDiv(reservationsContactInfo);

    // header text for reservations page
    reservationsDivHeader.textContent = 'Reservations & Orders by Email or Phone';
    reservationsDivPara.innerText = 'We are open for reservations 24/7 through Email or during bussiness hours through the phone. Please call or email us for a reservation.\n\
    We strongly recommend making a reservation as our venue space is limited.';


    // append all elements to reservations div
    reservationsDiv.appendChild(reservationsDivHeader);
    reservationsDiv.appendChild(reservationsDivPara);
    reservationsDiv.appendChild(reservationsContactDiv);
    reservationsDiv.appendChild(line);
    

    return {
        getReservations: () => reservationsDiv
    }
})();

var contacts = (function () {
    const contactsDiv = document.createElement('div');
    const contactsDivHeader = document.createElement('h1');
    
    // css classes
    contactsDivHeader.classList.add('header-text');
    contactsDiv.classList.add('contacts-div');

    // header text for contacts page
    contactsDivHeader.textContent = 'Contact the Team';

    // restaurant manager contact info
    const restaurantManager = createContact('Janelle Maito', 'Restaurant Manager', '(206) 56* - 021*', 'janelledoe@lbgsmail.com');
    const headChef = createContact('Alex Berkman', 'Head Chef', '(206) 56* - 021*', 'alexthecheft@lbgsmail.com',);
    const owner = createContact('Luizer Turing', 'Owner', '(206) 56* - 021*', 'luizer@lbgsmail.com');

    const restaurantManagerDiv = createContactDiv(restaurantManager);
    const headChefDiv = createContactDiv(headChef);
    const ownerDiv = createContactDiv(owner);

    // append all elements to contacts div
    contactsDiv.appendChild(contactsDivHeader);
    contactsDiv.appendChild(restaurantManagerDiv);
    contactsDiv.appendChild(headChefDiv);
    contactsDiv.appendChild(ownerDiv);

    return {
        getManager: () => restaurantManager,
        getHeadChef: () => headChef,
        getOwner: () => owner,
        getContacts: () => contactsDiv
    }
    
})();

var contactContent = (function () {
    const contactPageDiv = document.createElement('div');

    // get the contact page content
    const reservationsDivContent = reservations.getReservations();
    const contactsDivContent = contacts.getContacts();
    

    // adds class and id to the contact page div
    contactPageDiv.classList.add('contact-page');
    contactPageDiv.setAttribute('id', 'main-content');

    // adds the contact page content to the contact page div
    contactPageDiv.appendChild(reservationsDivContent);
    contactPageDiv.appendChild(contactsDivContent);

    return {
        getContactPage: () => contactPageDiv
    }
})();

export const managerInfo = contacts.getManager();
export const headChefInfo = contacts.getHeadChef();
export const ownerInfo = contacts.getOwner();
export { contactContent };