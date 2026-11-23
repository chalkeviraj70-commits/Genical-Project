
$(document).ready(function () {

    $(".out").click(function (e) {

        e.preventDefault();

        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("email");

        window.location.href = "index.html";

    });

});
