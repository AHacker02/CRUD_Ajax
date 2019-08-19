//Array of material colours
var Colors = [
    '#F44336',
    '#FFEBEE',
    '#FFCDD2',
    '#EF9A9A',
    '#E57373',
    '#EF5350',
    '#E53935',
    '#D32F2F',
    '#C62828',
    '#B71C1C',
    '#FF8A80',
    '#FF5252',
    '#FF1744',
    '#D50000',
    '#FCE4EC',
    '#F8BBD0',
    '#F48FB1',
    '#F06292',
    '#EC407A',
    '#E91E63',
    '#D81B60',
    '#C2185B',
    '#AD1457',
    '#880E4F',
    '#FF80AB',
    '#FF4081',
    '#F50057',
    '#C51162',
    '#F3E5F5',
    '#E1BEE7',
    '#CE93D8',
    '#BA68C8',
    '#AB47BC',
    '#9C27B0',
    '#8E24AA',
    '#7B1FA2',
    '#6A1B9A',
    '#4A148C',
    '#EA80FC',
    '#E040FB',
    '#D500F9',
    '#AA00FF',
    '#EDE7F6',
    '#D1C4E9',
    '#B39DDB',
    '#9575CD',
    '#7E57C2',
    '#673AB7',
    '#5E35B1',
    '#512DA8',
    '#4527A0',
    '#311B92',
    '#B388FF',
    '#7C4DFF',
    '#651FFF',
    '#6200EA',
    '#E8EAF6',
    '#C5CAE9',
    '#9FA8DA',
    '#7986CB',
    '#5C6BC0',
    '#3F51B5',
    '#3949AB',
    '#303F9F',
    '#283593',
    '#1A237E',
    '#8C9EFF',
    '#536DFE',
    '#3D5AFE',
    '#304FFE',
    '#E3F2FD',
    '#BBDEFB',
    '#90CAF9',
    '#64B5F6',
    '#42A5F5',
    '#2196F3',
    '#1E88E5',
    '#1976D2',
    '#1565C0',
    '#0D47A1',
    '#82B1FF',
    '#448AFF',
    '#2979FF',
    '#2962FF',
    '#E1F5FE',
    '#B3E5FC',
    '#81D4FA',
    '#4FC3F7',
    '#29B6F6',
    '#03A9F4',
    '#039BE5',
    '#0288D1',
    '#0277BD',
    '#01579B',
    '#80D8FF',
    '#40C4FF',
    '#00B0FF',
    '#0091EA',
    '#E0F7FA',
    '#B2EBF2',
    '#80DEEA',
    '#4DD0E1',
    '#26C6DA',
    '#00BCD4',
    '#00ACC1',
    '#0097A7',
    '#00838F',
    '#006064',
    '#84FFFF',
    '#18FFFF',
    '#00E5FF',
    '#00B8D4',
    '#E0F2F1',
    '#B2DFDB',
    '#80CBC4',
    '#4DB6AC',
    '#26A69A',
    '#009688',
    '#00897B',
    '#00796B',
    '#00695C',
    '#004D40',
    '#A7FFEB',
    '#64FFDA',
    '#1DE9B6',
    '#00BFA5',
    '#E8F5E9',
    '#C8E6C9',
    '#A5D6A7',
    '#81C784',
    '#66BB6A',
    '#4CAF50',
    '#43A047',
    '#388E3C',
    '#2E7D32',
    '#1B5E20',
    '#B9F6CA',
    '#69F0AE',
    '#00E676',
    '#00C853',
    '#F1F8E9',
    '#DCEDC8',
    '#C5E1A5',
    '#AED581',
    '#9CCC65',
    '#8BC34A',
    '#7CB342',
    '#689F38',
    '#558B2F',
    '#33691E',
    '#CCFF90',
    '#B2FF59',
    '#76FF03',
    '#64DD17',
    '#F9FBE7',
    '#F0F4C3',
    '#E6EE9C',
    '#DCE775',
    '#D4E157',
    '#CDDC39',
    '#C0CA33',
    '#AFB42B',
    '#9E9D24',
    '#827717',
    '#F4FF81',
    '#EEFF41',
    '#C6FF00',
    '#AEEA00',
    '#FFFDE7',
    '#FFF9C4',
    '#FFF59D',
    '#FFF176',
    '#FFEE58',
    '#FFEB3B',
    '#FDD835',
    '#FBC02D',
    '#F9A825',
    '#F57F17',
    '#FFFF8D',
    '#FFFF00',
    '#FFEA00',
    '#FFD600',
    '#FFF8E1',
    '#FFECB3',
    '#FFE082',
    '#FFD54F',
    '#FFCA28',
    '#FFC107',
    '#FFB300',
    '#FFA000',
    '#FF8F00',
    '#FF6F00',
    '#FFE57F',
    '#FFD740',
    '#FFC400',
    '#FFAB00',
    '#FFF3E0',
    '#FFE0B2',
    '#FFCC80',
    '#FFB74D',
    '#FFA726',
    '#FF9800',
    '#FB8C00',
    '#F57C00',
    '#EF6C00',
    '#E65100',
    '#FFD180',
    '#FFAB40',
    '#FF9100',
    '#FF6D00',
    '#FBE9E7',
    '#FFCCBC',
    '#FFAB91',
    '#FF8A65',
    '#FF7043',
    '#FF5722',
    '#F4511E',
    '#E64A19',
    '#D84315',
    '#BF360C',
    '#FF9E80',
    '#FF6E40',
    '#FF3D00',
    '#DD2C00',
    '#EFEBE9',
    '#D7CCC8',
    '#BCAAA4',
    '#A1887F',
    '#8D6E63',
    '#795548',
    '#6D4C41',
    '#5D4037',
    '#4E342E',
    '#3E2723',
    '#FAFAFA',
    '#F5F5F5',
    '#EEEEEE',
    '#E0E0E0',
    '#BDBDBD',
    '#9E9E9E',
    '#757575',
    '#616161',
    '#424242',
    '#212121',
    '#ECEFF1',
    '#CFD8DC',
    '#B0BEC5',
    '#90A4AE',
    '#78909C',
    '#607D8B',
    '#546E7A',
    '#455A64',
    '#37474F',
    '#263238',
    '#000000',
];

//Initialize components on document ready
$(document).ready(function () {
    $('.sidenav').sidenav();
    Get();
    $('.datepicker').datepicker();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    $('.modal').modal();
});

//Append contact card to the div
function populateContact(contact) {
    var card = `
<div class="col 14 m4 s12">
    <div class="card" id="${contact.id}" >
        <div class="card-image">
            <div class="contact-name" style="height: 200px; background:${Colors[Math.floor(Math.random() * Colors.length)]}">${contact.firstName.charAt(0)}${contact.lastName.charAt(0)}</div>
                <a class="btn-floating btn-large halfway-fab waves-effect waves-light red" onclick="updateContactForm(${contact.id})" "><i class="material-icons" >edit</i></a>
                <div class="topleft"><button class="fill" onclick="Delete(${contact.id})"><i class="material-icons" >delete_outline</i></button></div>
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
                    <label for="dob${contact.id}" data-error="working" class="active">Birthday</label>
                </div>
            </div>
        </div>
    </div>
`;

    $('#contact-cards').append(card);
}

//Populate contact form with contact data
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

//Validate update form and call PUT
function updateContact() {
    debugger;
    var res = validate();
    if (res == false) {
        return false;
    }
    
    Put();
}

//Validate add contact form and call POST
function addContact() {
    debugger;
    var res = validate();
    if (res == false) {
        return false;
    }

    Post();
}

//Validation
function validate() {
    var isValid = true;
    var phoneNumber = /[0-9-()+]{3,20}/;
    var email =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm;

    if ($('#first_name').val().trim() == "") {
        $('#first_name').addClass('invalid');
        isValid = false;
    }
    else {
        $('#first_name').addClass('valid');
    }

    if ($('#last_name').val().trim() == "") {
        $('#last_name').addClass('invalid');
        isValid = false;
    }
    else {
        $('#last_name').addClass('valid');
    }

    if ($('#phone_number').val().trim() == "" || !$('#phone_number').val().match(phoneNumber)) {
        $('#phone_number').addClass('invalid');
        isValid = false;
    }
    else {
        $('#phone_number').addClass('valid');
    }

    if (!$('#email').val().match(email)) {
        $('#email').addClass('invalid');
        isValid = false;
    }
    else {
        $('#email').addClass('valid');
    }

    //if (!$('#dob').val().match(email)) {
    //    $('#dob').addClass('invalid');
    //    isValid = false;
    //}
    //else {
    //    $('#dob').addClass('valid');
    //}

    return isValid;
}
