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
    spawnMother();
    setMother();
    animateMotherStartAnimation();
}

function spawnMother()
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