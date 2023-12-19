
function message() {
    Email.send({
        SecureToken: "0e58d7f2-15c2-4a84-8e33-68b250828908",
        To: 'nraghav304@gmail.com',
        From: document.getElementById("email").value,
        Subject: "obicule website",
        Body: "name: " + document.getElementById("name").value +
            "<br> email: " + document.getElementById("email").value +
            "<br> number: " + document.getElementById("number").value +
            "<br> address: " + document.getElementById("address").value
    }).then(
        message => {
            swal("send successfully" , "thank you for contacting us","success")
        }
        // alert("Message sent successfully")
    );
}

