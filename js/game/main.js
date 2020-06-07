var start_button = document.getElementById('start');
var playfield = document.getElementById('playfield');
var playfield_width = 800;
var playfield_height = 600;
var chicken_count = 0;

function start()
{
    hide(start_button);
    show(score);

    // show star
    var star = document.getElementById('star');
    star.style.display = 'block';
    star.classList.add('rotate');

    // place mother in center of playground
    mother = new chicken('mother', 'mother', 'img/chicken.png');
    spawnMother(mother);

    // add key up layEgg event to web page
    document.addEventListener('keydown', chickenDown, false);
    document.addEventListener('keyup',layEgg,false);
}

function spawnMother(mother)
{
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

function chickenDown()
{
    mother = document.getElementById('mother');
    mother.src = 'img/chicken_down.png';
}

function layEgg()
{
    mother = document.getElementById('mother');
    var mother_offset_left = mother.offsetLeft;
    var mother_offset_top = mother.offsetTop;

    // move mother up
    var new_mother_offset_top = mother_offset_top - 30;
    mother.style.top = new_mother_offset_top + 'px';
    mother.style.marginTop = null;
    mother.src = 'img/chicken_up.png'

    // create egg object
    chicken_count++;
    var egg = new chicken(chicken_count, 'egg', 'img/egg.png');

    // create img element for egg
    var img = document.createElement('img');
    img.src = egg.img;
    img.id = egg.id;
    img.classList.add(egg.type);
    img.style.left = mother_offset_left + 35 + 'px';
    img.style.top = mother_offset_top + 50 + 'px';
    img.style.zIndex = egg.id;

    // spawn egg on the field under the mother
    var firstChild = playfield.firstChild;
    playfield.insertBefore(img, firstChild);

    // show the new score
    setScore(chicken_count);

    // timout and move mother
    setTimeout(function(){
        moveMother(mother);
    }, 500);
}

function moveMother(mother)
{
    var x = getRandomInt(-25, playfield_height - 25);
    var y = getRandomInt(0, playfield_width);

    mother.src = 'img/chicken.png';
    mother.style.top =  x + 'px';
    mother.style.marginTop = '-50px';
    mother.style.left = y + 'px';
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