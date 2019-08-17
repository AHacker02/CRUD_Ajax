function Get() {
    $.ajax({
        url: "https://localhost:44369/api/contacts/allcontacts",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            $.each(result, function (key, item) {
                populateContact(item);
            });
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function Post() {
    var contact = {
        Id: $('#Id').val(),
        FirstName: $('#first_name').val(),
        LastName: $('#last_name').val(),
        PhoneNumber: $('#phone_number').val(),
        ProfileImage: $('#profileImg').val(),
        Email: $('#email').val(),
        DOB: $('#dob').val()
    };
    $.ajax({
        url: "https://localhost:44369/api/contacts/addcontact",
        data: JSON.stringify(contact),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        success: function (result) {
            location.reload();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function Put() {
    var contact = {
        Id:$('#Id').val(),
        FirstName: $('#first_name').val(),
        LastName: $('#last_name').val(),
        PhoneNumber: $('#phone_number').val(),
        ProfileImage: $('#profileImg').val(),
        Email: $('#email').val(),
        DOB: $('#dob').val()
    };

    $.ajax({
        url: "https://localhost:44369/api/contacts/updatecontact",
        data: JSON.stringify(contact),
        type: "PUT",
        contentType: "application/json;charset=utf-8",
        success: function (result) {
            console.log(result);
            location.reload();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function Delete(id) {

    $.ajax({
        url: "https://localhost:44369/api/contacts/deletecontact?id=" + id,
        type: "DELETE",
        contentType: "application/json;charset=UTF-8",
        success: function (result) {
            location.reload();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });

}  