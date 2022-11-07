
function time(){
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const hourText = document.getElementById('hours');
    const minText = document.getElementById('minutes');
    const secText = document.getElementById('seconds');
    
    hourText.innerText = hour;
    minText.innerText = minutes;
    secText.innerText = seconds;

    setInterval(() => {
        time();
    }, 1000);
}
const bodyTag = document.querySelector('body').addEventListener('load', time());

