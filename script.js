// Aquí se podría agregar la funcionalidad para el control de volumen y reproducción
// y cualquier otra función dinámica adicional.

document.querySelector('.music-player button').addEventListener('click', function() {
    const iframe = document.querySelector('.music-player iframe');
    const video = iframe.contentWindow.document.querySelector('video');
    
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});
