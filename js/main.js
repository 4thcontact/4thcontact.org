function onTouchStart(e){var o=e.targetTouches[0];elem.style.backgroundImage="-webkit-radial-gradient("+o.pageX+"px "+o.pageY+"px, circle cover, rgba(0,0,0,0.2) 5%, rgba(0,0,0,1) 25%)"}function onMoseMove(e){elem.style.backgroundImage="-webkit-radial-gradient("+e.pageX+"px "+e.pageY+"px, circle cover, rgba(0,0,0,0.2) 5%, rgba(0,0,0,1) 25%)"}var elem=document.getElementById("spotlight"),canTouch=!!("ontouchstart"in window);canTouch?(document.body.addEventListener("touchmove",onTouchStart,!1),document.body.addEventListener("touchstart",onTouchStart,!1)):document.body.addEventListener("mousemove",onMoseMove,!1);
