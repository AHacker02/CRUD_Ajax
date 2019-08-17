$(document).ready(function () {
    $('.sidenav').sidenav();
    Get();
    $('.datepicker').datepicker({
        maxDate: 0,
        container: 'body',
        dateFormat: 'yyyy-MM-dd'
    });
    $('.modal').modal();
});

function populateContact(contact) {
    var card = `
<div class="col 14 m4 s12">
    <div class="card" id="${contact.id}" >
        <div class="card-image">
            <div class="contact-name" style="height: 200px">${contact.firstName.charAt(0)}${contact.lastName.charAt(0)}</div>
                <a class="btn-floating btn-large halfway-fab waves-effect waves-light red" onclick="updateContactForm(${contact.id})" "><i class="material-icons" >edit</i></a>
            </div>
            <div class="card-content ">
                <span class="card-title activator ">${contact.firstName} ${contact.lastName}</span>
                <p>${contact.phoneNumber}</p>
            </div>
            <div class="card-reveal">
                <span id="name${contact.id}" class="card-title grey-text text-darken-4">${contact.firstName} ${contact.lastName}<i class="material-icons right">close</i></span>
                <div class="input-field col s12">
                    <input disabled value="${contact.phoneNumber}" id="phoneNumber${contact.id}" type="number" class="validate">
                    <label for="phoneNumber${contact.id}" class="active">Phone Number</label>
                </div>
                <div class="input-field col s12">
                    <input disabled id="email${contact.id}" type="email" class="validate" value="${contact.email}">
                    <label for="email${contact.id}" class="active">Email</label>
                </div>
                <div class="input-field col s12">
                    <input disabled value="${contact.dob.substring(0,contact.dob.indexOf('T'))}" id="dob${contact.id}" type="date" class="validate">
                    <label for="dob${contact.id}" class="active">Birthday</label>
                </div>
            </div>
        </div>
    </div>
`;

    $('#contact-cards').append(card);
}

function updateContactForm(id) {
    var name = document.getElementById(`name${id}`).innerText.split(" ");
    $('#Id').val(id);

    $('#first_name').val(name[0]);
    $('#first_name_label').addClass('active');

    $('#last_name').val(name[1].slice(0, -5));
    $('#last_name_label').addClass('active');

    $('#phone_number').val(document.getElementById(`phoneNumber${id}`).value);
    $('#phone_number_label').addClass('active');
    
    if (document.getElementById(`dob${id}`).value != null) {
        $('#dob').val(document.getElementById(`dob${id}`).value);
        $('#dob_label').addClass('active');
    }

    if (document.getElementById(`email${id}`).value != null) {
        $('#email').val(document.getElementById(`email${id}`).value);
        $('#email_label').addClass('active');
    }

    var button = document.getElementById('submit_button');
    button.innerText = "Update";
    button.setAttribute("onclick", "updateContact()");

    $('#contactForm').modal('open');
}

function updateContact() {
    var res = validate();
    if (res == false) {
        return false;
    }
    
    Put();
}

function addContact() {
    var res = validate();
    if (res == false) {
        return false;
    }

    Post();
}

function validate() {
    return true;
}


function deleteContact(id) {
    
}