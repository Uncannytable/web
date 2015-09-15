function popup(mylink, windowname, largura, altura)
{
if (! window.focus)return true;
var href;
if (typeof(mylink) == 'string')
   href=mylink;
else
   href=mylink.href;
window.open(href, windowname, 'width='+largura+',height='+altura+',scrollbars=yes');
return false;
}

function popupform(myform, windowname, largura, altura)
{
if (! window.focus)return true;
window.open('', windowname, 'width='+largura+',height='+altura+',scrollbars=yes');
myform.target=windowname;
return true;
}
