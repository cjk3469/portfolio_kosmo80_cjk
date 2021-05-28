function topMove(seq){
    var offset = $(".fix" +seq).offset();
    $('html, body').animate({scrollTop : offset.top}, 400);
}

function fnMove(seq){
    var offset = $(".info" + seq).offset();
    $('html, body').animate({scrollTop : offset.top}, 400);
}