import emailjs from '@emailjs/browser';

export function sendEmail(form) {
    
    emailjs.sendForm(
        'service_ygsj30q',
        'template_y3zdz9e',
        form.current,
        'oaiiAYNgDb83qQXz3'
    )
    .then()
    .catch()
}