function animateMotherStartAnimation()
{
    mother.classList.add('animate-mother');

    mother.addEventListener('webkitAnimationEnd',function(e) {
        interval_id = setInterval(animateChickenWalkCycle, 100);
    }, false);

    setTimeout(function(){
        clearInterval(interval_id);
        mother.src = "img/chicken.png";
        interval_id = setInterval(animateChickenJumpCycle, 200);
    }, 1250);

    setTimeout(function(){
        clearInterval(interval_id);
        mother.src = "img/chicken.png";
        setKeyDownControl();
    }, 2250);
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

function animateChickenDown(event)
{
    mother.src = 'img/chicken_down.png';
    removeKeyDownControl();
    key_down = event.keyCode;
    setKeyUpControl();
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

    setKeyDownControl();
}

function getMotherState()
{
    var src = mother.src;
    var n = src.lastIndexOf('/');
    return src.substring(n + 1);
}