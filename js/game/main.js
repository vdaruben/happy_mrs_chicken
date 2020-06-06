var start_button = document.getElementById('start');
var playfield = document.getElementById('playfield');
var playfield_width = 800;
var playfield_height = 600;
var chicken_count = 0;

function start()
{
    hide(start_button);
    show(score);

    // place mother in center of playground
    mother = new chicken('mother', 'mother', 'img/chicken.png');
    spawnMother(mother);

    // add key up layEgg event to web page
    document.addEventListener('keyup',layEgg,false);
}

function spawnMother(mother)
{
    var id = mother.id;
    var type = mother.type;
    var src = mother.img;

    var img = document.createElement('img');
    img.src = String(src);
    img.id = id;
    img.class = type;
    img.style.position = 'relative';
    img.style.height = '100px';
    img.style.width= 'auto';
    img.style.top = '50%';
    img.style.left = '50%';
    img.style.marginTop = '-50px';
    img.style.marginLeft = '-50px';

    playfield.appendChild(img);
}

function layEgg()
{
    // move mother up
    mother = document.getElementById('mother');
    var old_top_position = mother.offsetTop;
    var rect = mother.getBoundingClientRect();

    var new_top_postion = old_top_position - 30;
    mother.style.top = new_top_postion + 'px';
    mother.style.marginTop = null;

    // create egg object
    chicken_count++;
    var egg = new chicken(chicken_count, 'egg', 'img/egg.png');

    // create img element for egg
    var img = document.createElement('img');
    img.src = egg.img;
    img.id = egg.id;
    img.class = egg.type;
    img.style.position = 'fixed';
    img.style.height = '50px';
    img.style.width = 'auto';
    img.style.left = rect.left + 33 + 'px';
    img.style.top = rect.top + 50 + 'px';

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