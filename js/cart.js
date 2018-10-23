$(document).ready(function() {
    $('.qty-change-minus').click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#qty-input').val());
        // If is not undefined
        if (quantity > 0) {
            $('#qty-input').val(quantity - 1);
        }
    });

    $('.qty-change-plus').click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#qty-input').val());
        // If is not undefined
        $('#qty-input').val(quantity + 1);
    });

    $('#exampleModalLongTitle').on('shown.bs.modal', function() {
        $('#myInput').focus();
    })


});