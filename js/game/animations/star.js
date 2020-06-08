function animateStar()
{
    var star = document.getElementById('star');
    show(star);
    star.classList.add('animate-star');
    star.addEventListener('webkitAnimationEnd',function(e) {
        hide(star);
    }, false);
}