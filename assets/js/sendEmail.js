function sendMail(contactForm) {
    emailjs.send("service_yj50kyl", "template_oc7mnpg", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
        .then(
            function (response) {
                console.log("Success!", response);
            },
            function (error) {
                console.log("Fail", error);
            }
        );
    return false;
}