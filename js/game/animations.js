function animateChickenWalkCycle()
{
    var mother = getMother();
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
    var mother = getMother();
    var mother_offset_left = mother.offsetLeft;
    var mother_offset_top = mother.offsetTop;
    var state = getMotherState();

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
    var mother = getMother();
    mother.src = 'img/chicken_down.png';
}
