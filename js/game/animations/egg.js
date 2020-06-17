function animateLayEgg(chicken_offset_top, chicken_offset_left)
{
    var egg = new animal(egg_count, 'egg', 'img/egg.png');

    var img = document.createElement('img');
    img.src = egg.img;
    img.id = egg.id;
    img.classList.add(egg.type);
    img.style.left = chicken_offset_left + 35 + 'px';
    img.style.top = chicken_offset_top + 50 + 'px';
    img.style.zIndex = egg.id;

    var firstChild = playfield.firstChild;
    playfield.insertBefore(img, firstChild);
}