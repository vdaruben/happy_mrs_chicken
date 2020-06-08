var hide = function hide(e)
{
    e.style.display = 'none';
};

var show = function show(e)
{
    e.style.display = 'block';
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMother()
{
    return document.getElementById('mother');
}

function getMotherState()
{
    var src = mother.src;
    var n = src.lastIndexOf('/');
    return src.substring(n + 1);
}