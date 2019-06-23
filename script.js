$(".actualSite").hide();
$("#multipleItems").hide();
$("#estShip").hide();
$("#srsly").hide();
$("#moI").hide();

var productNames = [];
console.log(productNames);
var prices = [];

    
$("#continue").click(function(){
    $(".beginning").hide();
    $(".actualSite").show();
});

$("#apply").click(function(){ 
    var items = $(".inputItem").val();
    productNames.push(items);
    $(".itemUl").append("<li>" + items + "</li>");
    $("#numberOfItems").html(productNames.length);
    $("#estShip").show();
   
    var price = $(".inputPrice").val();
    price = parseInt(price);
    prices.push(price);
    var totalCost = 0;
    prices.forEach(function(cost) {
        totalCost = totalCost + cost;
    });
    
    console.log(totalCost);
    $("#totalPrices").html("$" + totalCost);
    $(".priceUl").append("<li>" + "$" + price + "</li>");
   
   
    if (productNames.length >= 10){
        $("#moI").show();
    
    }  else if (productNames.length >= 2){
        $("#srsly").show();
    }
    
    else if (prices > 99){
        $("#moI").show();
    }
});

$("#placeOrder").click(function(){
        var totalCost = 0;
    prices.forEach(function(cost) {
        totalCost = totalCost + cost;
    });
    
    alert("Your total is $" + totalCost + "." + " Thank you for your purchase! I hope you are happy with your " + productNames[0] + "!");

});