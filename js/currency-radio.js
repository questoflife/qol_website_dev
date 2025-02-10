document.addEventListener("DOMContentLoaded", function () {
    const currencyButtons = document.querySelectorAll(".currency-buttons input");

    // Define currency symbols
    const currencySymbols = {
        "£ GBP": "£",
        "€ EUR": "€",
        "$ USD": "$"
    };

    // Donation buttons with amounts and links
    const donateButtons = {
        "donate-once-button": {
            "£ GBP": "https://buy.stripe.com/00g2bQdxq3RK6iY5kp",
            "€ EUR": "",
            "$ USD": ""
        },
        "donate-monthly-5-button": {
            "£ GBP": "",
            "€ EUR": "https://buy.stripe.com/8wMbMqfFy0Fy0YEdQT",
            "$ USD": ""
        },
        "donate-monthly-15-button": {
            "£ GBP": "",
            "€ EUR": "https://buy.stripe.com/5kA6s6gJCbkcgXC4gk",
            "$ USD": ""
        },
        "donate-monthly-30-button": {
            "£ GBP": "",
            "€ EUR": "https://buy.stripe.com/aEU3fU2SMfAsgXC5km",
            "$ USD": ""
        },
        "donate-monthly-50-button": {
            "£ GBP": "",
            "€ EUR": "https://buy.stripe.com/9AQ9Ei1OIgEw7n2aEF",
            "$ USD": ""
        },
        "donate-monthly-100-button": {
            "£ GBP": "",
            "€ EUR": "https://buy.stripe.com/dR69Ei2SMgEwfTycMM",
            "$ USD": ""
        }
    };

    function updateCurrency() {
        const selectedButton = document.querySelector(".currency-buttons input:checked");
        if (!selectedButton) return;

        const selectedCurrency = selectedButton.value; // "£ GBP", "€ EUR", "$ USD"
        const currencySymbol = currencySymbols[selectedCurrency] || ""; // Extract symbol

        // Update button texts and links
        Object.entries(donateButtons).forEach(([buttonId, links]) => {
            const button = document.getElementById(buttonId);
            if (button) {
                button.href = links[selectedCurrency] || "#";

                // Extract the donation amount from the button's ID
                const match = buttonId.match(/donate-(?:monthly-)?(\d+)/);
                if (match) {
                    const amount = match[1]; // Extracts "5", "15", etc.
                    button.innerHTML = `${currencySymbol}${amount} / Month`;
                } else {
                    button.innerHTML = `Custom Amount ${currencySymbol}`;
                }
            }
        });

        console.log("Updated currency to:", selectedCurrency);
    }

    // Run the function on page load
    updateCurrency();

    // Add event listeners for changes
    currencyButtons.forEach(button => {
        button.addEventListener("change", updateCurrency);
    });
});
