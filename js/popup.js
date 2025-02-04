// Show popup when a support-item is clicked
$(document).on('click', '.grid-item-button', function () {
    const popup = $(this).find('.popup');
    popup.show();
});

$(document).on('click', '.more-info-button', function () {
    const popup = $(this).closest('.values-hover-content').siblings('.popup');
    popup.show();
});

// Hide popup when close button is clicked
$(document).on('click', '.close-button', function (event) {
    // Prevent the click event from propagating to the body
    event.stopPropagation();
    
    const popup = $(this).closest('.popup');
    popup.hide();
});
