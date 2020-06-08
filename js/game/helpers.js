function hide(e)
{
    e.style.display = 'none';
}

function show(e)
{
    e.style.display = 'block';
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setChicken()
{
    chicken = document.getElementById('chicken');
}