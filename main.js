// hide all unecessary 
$(".parent").each(function()
{
    if($(this).children(".child").length == 0)
    {
        $(this).hide();
    }
});

