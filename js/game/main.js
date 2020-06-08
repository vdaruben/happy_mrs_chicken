var start_button = document.getElementById('start');
var playfield = document.getElementById('playfield');
var playfield_width = 800;
var playfield_height = 600;
var chicken_count = 0;

function start()
{
    hide(start_button);
    show(score);

    // show star and animate
    var star = document.getElementById('star');
    star.style.display = 'block';
    star.classList.add('animate-star');
    // hide star when animation has ended
    star.addEventListener('webkitAnimationEnd',function(e) {
        star.style.display = 'none';
    }, false);

    // spawn mother with animation
    spawnMother();
    var mother = getMother();
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
    var mother = getMother();
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
        moveMother();
    }, 500);
}

function moveMother()
{
    var mother = getMother();
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