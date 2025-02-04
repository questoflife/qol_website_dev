document.addEventListener("DOMContentLoaded", function () {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            let content = this.nextElementSibling;

            if (this.classList.contains("active")) {
                content.style.height = content.scrollHeight + "px";
                setTimeout(() => content.style.height = "0px", 10); // Collapse smoothly
            } else {
                content.style.height = content.scrollHeight + "px";
                setTimeout(() => content.style.height = "auto", 500); // Remove height restriction after animation
            }

            this.classList.toggle("active");
        });
    }
});