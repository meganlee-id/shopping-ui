$(document).ready(function() {
    // update subtotal by clicking on minus sign
    $('.qty-change-minus').click(function(e) {
        // update quantity
        e.preventDefault(); // stop acting like a button
        var quantity = Math.max(0, parseInt($(this).next().val()) - 1);
        $(this).next().val(quantity);
        var price = parseFloat($(this).parent().prev().find("span.unit-price-text").html());
        var newtotal = quantity * price;
        // update item subtotal
        updateItemSubtotal.call(this, newtotal);
        // update cart total price
        updateCartTotal();
    });

    // update subtotal by clicking on plus sign
    $('.qty-change-plus').click(function(e) {
        // update quantity
        e.preventDefault(); // stop acting like a button
        var quantity = parseInt($(this).prev().val()) + 1;
        $(this).prev().val(quantity);
        var price = parseFloat($(this).parent().prev().find("span.unit-price-text").html());
        var newtotal = quantity * price;
        // update item subtotal
        updateItemSubtotal.call(this, newtotal);
        // update cart total price
        updateCartTotal();
    });

    // update subtotal by type into input box
    $(".qty-text").on("input",function(e){
        // update item subtotal
        var quantity = $(this).val();
        var price = parseFloat($(this).parent().prev().find("span.unit-price-text").html());
        var newtotal = quantity * price;
        // $(this).parent().next().find("span.subtotal-price-text").html(newtotal.toFixed(2));
        updateItemSubtotal.call(this, newtotal);
        // update cart total price
        updateCartTotal();
    })
});

// update item subtotal
function updateItemSubtotal(amount) {
    $(this).parent().next().find("span.subtotal-price-text").html(amount.toFixed(2));
}

// update cart totals
function updateCartTotal() {
    var cartTotal = 0;
    $(".subtotal-price-text").each(function(){
        cartTotal += parseFloat($(this).html());
    })
    var estimatedTax = cartTotal * 0.07;
    var total = cartTotal + estimatedTax;
    $("#checkout-subtotal").html(cartTotal.toFixed(2));
    $("#checkout-tax").html(estimatedTax.toFixed(2));
    $("#checkout-total").html(total.toFixed(2));
}
