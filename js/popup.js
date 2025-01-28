// Show popup when a support-item is clicked
$(document).on('click', '.support-item', function () {
    const popup = $(this).find('.popup');
    popup.show();
});

// Hide popup when close button is clicked
$(document).on('click', '.close-button', function (event) {
    // Prevent the click event from propagating to the body
    event.stopPropagation();
    
    const popup = $(this).closest('.popup');
    popup.hide();
});
