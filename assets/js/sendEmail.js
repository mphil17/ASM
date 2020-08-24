function sendMail(contactForm){
    emailjs.send("gmail", "absolutesm", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "from_email": contactForm.email.value,
        "project_request": contactForm.message.value,
        "company": contactForm.business.value

    })
    .then(
        function(response) {
            console.log("Success!", response)
        },
        function(error) {
            console.log("Fail!", error)
        }
    )
    return false;
}