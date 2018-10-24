// instantiate variables

// make functions

// run code
// document ready
$(function(){
	$(".js-addtocart").on("click",function(e){
		console.log("honk")
		var cart_amount = $(".cart-value span").html();
		$(".cart-value span").html(++cart_amount);
	})


	$(".change-amount").on("input",function(e){
		var amount = $(this).val();
		var price = +$(this).next().html();
		var newtotal = amount * price;
		$(this).next().next().html(newtotal.toFixed(2));
		var totaltotal = 0;
		$(".total").each(function(){
			totaltotal += +$(this).html();
		})
		$(".total-total").html(totaltotal.toFixed(2));
	})
})