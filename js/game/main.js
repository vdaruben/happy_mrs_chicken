var start_button = document.getElementById('start');
var playfield = document.getElementById('playfield');
var score = document.getElementById('score');
var playfield_width = 800;
var playfield_height = 600;
var egg_count = 0;
var chicken = null;

function start()
{
    hide(start_button);
    playBackgroundSong();
    show(score);
    animateStar();
    spawnChicken();
    setChicken();
    animateChickenStartAnimation();
}

function spawnChicken()
{
    var chicken = new animal('chicken', 'chicken', 'img/chicken.png')
    var img = document.createElement('img');

    img.src = String(chicken.img);
    img.id = chicken.id;
    img.classList.add(chicken.type);
    img.style.top = '50%';
    img.style.left = '50%';
    img.style.marginTop = '-50px';
    img.style.marginLeft = '-50px';

    playfield.appendChild(img);
}

function layEgg()
{
    var chicken_offset_left = chicken.offsetLeft;
    var chicken_offset_top = chicken.offsetTop;
    egg_count++;

    animateChickenUp(chicken_offset_top)
    animateLayEgg(chicken_offset_top, chicken_offset_left);
    setScore(egg_count);

    setTimeout(function(){
        animateMoveChicken();
    }, 250);
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