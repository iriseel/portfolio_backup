$(".prompt").click(open_description);

function open_description() {
    console.log("opening");
    $(".full_description").toggleClass("visibility");
}

let homepage_distance_to_top =
    window.pageYOffset +
    document.querySelector("#homepage").getBoundingClientRect().top;
