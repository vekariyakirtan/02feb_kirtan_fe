let nav = document.querySelector(".navigation-wrap");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
}

let navbar = document.querySelectorAll('.nav-link');
let navcollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function (a) {
    a.addEventListener("click", function () {
        navcollapse.classList.remove("show");
    })
})


document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 150, 245, 3000);
    counter("count2", 100, 200, 2500);
    counter("count3", 50, 99, 3000);
    counter("count4", 50, 99, 3000);
    counter("count5", 50, 136, 3000);
    counter("count6", 50, 99, 3000);
});



$('.accordion-button').click(function () {
    if ($(this).find('i').hasClass('fa-caret-down')) {
        $(this).find('i').addClass('fa-caret-right');
        $(this).find('i').removeClass('fa-caret-down');
    }
    else {
        $(this).find('i').removeClass('fa-caret-right');
        $(this).find('i').addClass('fa-caret-down');
    }
}); 