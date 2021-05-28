function topMove(seq){
    var offset = $(".fix" +seq).offset();
    $('html, body').animate({scrollTop : offset.top}, 400);
}

function fnMove(seq){
    var offset = $(".info" + seq).offset();
    $('html, body').animate({scrollTop : offset.top}, 400);
}


let i = 0, j= 0;

const textArray = ["Hello Wolrd","반갑습니다"],
    speed = 50,
    target = document.getElementsByClassName("greeting__text__words");

function textNum(){
    j == textArray.length - 1
    ? j = 0
    : j++
}

function type(){
    i< textArray[j].length
    ?(target.innterHTML += textArray[j].charAt(i), i++ ,setTimeout(type, speed))
    : remove()
}

function remove(){
    0<=i
    ?(target.innterHTML = target.innterHTML.slice(0,i), i-- ,setTimeout(remove,speed))
    : (type(), textNum())
}

type();