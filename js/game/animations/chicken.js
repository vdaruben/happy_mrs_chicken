function animateChickenStartAnimation()
{
    chicken.classList.add('animate-chicken');

    chicken.addEventListener('webkitAnimationEnd',function(e) {
        interval_id = setInterval(animateChickenWalkCycle, 100);
    }, false);

    setTimeout(function(){
        clearInterval(interval_id);
        chicken.src = "img/chicken.png";
        interval_id = setInterval(animateChickenJumpCycle, 200);
    }, 1250);

    setTimeout(function(){
        clearInterval(interval_id);
        chicken.src = "img/chicken.png";
        setKeyDownControl();
    }, 2250);
}

function animateChickenWalkCycle()
{
    var state = getChickenState();

    if(state === "chicken.png" || state === "chicken_left_foot_up.png" )
    {
        chicken.src = "img/chicken_right_foot_up.png";
    }
    else if(state === "chicken_right_foot_up.png")
    {
        chicken.src = "img/chicken_left_foot_up.png";
    }
}

function animateChickenJumpCycle()
{
    var state = getChickenState();
    var chicken_offset_top = chicken.offsetTop;

    if(state === "chicken.png")
    {
        var new_chicken_offset_top = chicken_offset_top - 30;
        chicken.style.top = new_chicken_offset_top + 'px';
        chicken.style.marginTop = null;
        chicken.src = 'img/chicken_up.png'
    }
    else if(state === "chicken_up.png")
    {
        chicken.style.top = '50%';
        chicken.style.marginTop = '-50px';
        chicken.src = "img/chicken.png";
        play_audio("sound/chicken_clucking.mp3");
    }
}

function animateChickenDown(event)
{
    chicken.src = 'img/chicken_down.png';
    removeKeyDownControl();
    key_down = event.keyCode;
    setKeyUpControl();
    play_audio("sound/fart.mp3");

}

function animateChickenUp(chicken_offset_top)
{
    var new_chicken_offset_top = chicken_offset_top - 30;
    chicken.style.top = new_chicken_offset_top + 'px';
    chicken.style.marginTop = null;
    chicken.src = 'img/chicken_up.png'
    play_audio("sound/chicken_clucking.mp3");
}

function animateMoveChicken()
{
    var x = getRandomInt(-25, playfield_height - 25);
    var y = getRandomInt(0, playfield_width);

    chicken.src = 'img/chicken.png';
    chicken.style.top =  x + 'px';
    chicken.style.marginTop = '-50px';
    chicken.style.left = y + 'px';

    setKeyDownControl();
}

function getChickenState()
{
    var src = chicken.src;
    var n = src.lastIndexOf('/');
    return src.substring(n + 1);
}