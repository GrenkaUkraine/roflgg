document.addEventListener('DOMContentLoaded', function() {
    const ggElement = document.getElementById("gg");
    const titleElement = document.querySelector('.title');

    const ukraineElement = document.getElementById("ukraine");
    const anthem = document.getElementById("ukraine-anthem");

    ggElement.addEventListener('click', function() {
        titleElement.classList.toggle('rainbow');
    });

    ukraineElement.addEventListener('click', function() {
        document.body.classList.toggle('ukraine');
        if (document.body.classList.contains('ukraine')) {
            anthem.play();
        } else {
            anthem.pause();
            anthem.currentTime = 0;
        }
    });
});
