$(document).ready(function(){
//popup
    const $popupSub = $(".popup-sub");
    const $popupClose = $(".popup-sub__close")

    setTimeout(() => {
        $popupSub.removeClass("ml-1000");
    }, 2500);
    $popupClose.on("click", function(){
        $popupSub.addClass("ml-1000");
    })
})