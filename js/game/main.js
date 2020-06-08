var start_button = document.getElementById('start');
var playfield = document.getElementById('playfield');
var score = document.getElementById('score');
var playfield_width = 800;
var playfield_height = 600;
var chicken_count = 0;
var mother = null;

function start()
{
    hide(start_button);
    show(score);
    animateStar();
    animateSpawnMother();
    setMother();

    mother.classList.add('animate-mother');
    mother.addEventListener('webkitAnimationEnd',function(e) {
        interval_id = setInterval(animateChickenWalkCycle, 100);
    }, false);

    // clear chicken walkcycle after 1 sec and do jump animation
    setTimeout(function(){
        // clear
        clearInterval(interval_id);
        mother.src = "img/chicken.png";
        // jump animation
        interval_id = setInterval(animateChickenJumpCycle, 200);
    }, 1250);

    setTimeout(function(){
        // clear
        clearInterval(interval_id);
        mother.src = "img/chicken.png";
        // add key up layEgg event to web page
        document.addEventListener('keydown', animateChickenDown, false);
        document.addEventListener('keyup',layEgg,false);
    }, 2250);
}

function layEgg()
{
    var mother_offset_left = mother.offsetLeft;
    var mother_offset_top = mother.offsetTop;
    chicken_count++;

    animateChickenUp(mother_offset_top)
    animateLayEgg(mother_offset_top, mother_offset_left);
    setScore(chicken_count);

    setTimeout(function(){
        animateMoveMother();
    }, 500);
}

function setScore(score)
{
    var score_length = score.toString().length;
    var leading_zeros = '';
    if(score_length === 1)
    {
        leading_zeros = '00';
    }
    else if (score_length === 2)
    {
        leading_zeros = '0';
    }
    document.getElementById("score").innerHTML = leading_zeros + score;
}