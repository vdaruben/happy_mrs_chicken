function animateLayEgg(mother_offset_top, mother_offset_left)
{
    var egg = new chicken(chicken_count, 'egg', 'img/egg.png');

    var img = document.createElement('img');
    img.src = egg.img;
    img.id = egg.id;
    img.classList.add(egg.type);
    img.style.left = mother_offset_left + 35 + 'px';
    img.style.top = mother_offset_top + 50 + 'px';
    img.style.zIndex = egg.id;

    var firstChild = playfield.firstChild;
    playfield.insertBefore(img, firstChild);
}