function animateSpawnMother()
{
    var mother = new chicken('mother', 'mother', 'img/chicken.png')
    var img = document.createElement('img');

    img.src = String(mother.img);
    img.id = mother.id;
    img.classList.add(mother.type);
    img.style.top = '50%';
    img.style.left = '50%';
    img.style.marginTop = '-50px';
    img.style.marginLeft = '-50px';

    playfield.appendChild(img);
}

function animateChickenWalkCycle()
{
    var state = getMotherState();

    if(state === "chicken.png" || state === "chicken_left_foot_up.png" )
    {
        mother.src = "img/chicken_right_foot_up.png";
    }
    else if(state === "chicken_right_foot_up.png")
    {
        mother.src = "img/chicken_left_foot_up.png";
    }
}

function animateChickenJumpCycle()
{
    var state = getMotherState();
    var mother_offset_top = mother.offsetTop;

    if(state === "chicken.png")
    {
        var new_mother_offset_top = mother_offset_top - 30;
        mother.style.top = new_mother_offset_top + 'px';
        mother.style.marginTop = null;
        mother.src = 'img/chicken_up.png'
    }
    else if(state === "chicken_up.png")
    {
        mother.style.top = '50%';
        mother.style.marginTop = '-50px';
        mother.src = "img/chicken.png";
    }
}

function animateChickenDown()
{
    mother.src = 'img/chicken_down.png';
}

function animateChickenUp(mother_offset_top)
{
    var new_mother_offset_top = mother_offset_top - 30;
    mother.style.top = new_mother_offset_top + 'px';
    mother.style.marginTop = null;
    mother.src = 'img/chicken_up.png'
}

function animateMoveMother()
{
    var x = getRandomInt(-25, playfield_height - 25);
    var y = getRandomInt(0, playfield_width);

    mother.src = 'img/chicken.png';
    mother.style.top =  x + 'px';
    mother.style.marginTop = '-50px';
    mother.style.left = y + 'px';
}

function getMotherState()
{
    var src = mother.src;
    var n = src.lastIndexOf('/');
    return src.substring(n + 1);
}
