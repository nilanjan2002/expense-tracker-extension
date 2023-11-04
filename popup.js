$(document).ready(function(){
    var amount = 0;
    $("#btn").click(function(){
        amount+=10;
        const priceTag = document.createElement('h3');
        priceTag.textContent = amount + "$";
        priceTag.setAttribute("class","badge badge-success p-2");
        $(".budget h3").replaceWith(priceTag);
    })
})