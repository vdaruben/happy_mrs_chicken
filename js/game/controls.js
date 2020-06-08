var key_down = null;
var key_up = null;

function setKeyDownControl()
{
    document.addEventListener('keydown', animateChickenDown, false);
}

function removeKeyDownControl()
{
    document.removeEventListener('keydown', animateChickenDown);
}

function setKeyUpControl()
{
    document.addEventListener('keyup',checkKeyUp,false);
}

function removeKeyUpControl()
{
    document.removeEventListener('keyup', checkKeyUp);
}

function checkKeyUp(event)
{
    key_up = event.keyCode;
    if(key_down === key_up)
    {
        layEgg();
        removeKeyUpControl();
    }
}