let mql = window.matchMedia("screen and (max-width: 767px)");

let tap = $('.story-tap');
let icon = $('.icon');
let center = $('.center');

let moTap = $('.mo-tap');
let moIcon = $('.mo-icon');
let moCenter = $('.mo-img-wrap');

let tapNum = 1;
let timeout = true;

let tapInterval = setInterval(tapFuncs, 3500);

function tapFuncs() {
    if(tapNum == 6) {
        tapNum = 0;
    };
    if(mql.matches) {
        moTap.removeClass('active');
        moTap.eq(tapNum).addClass('active');
        moIcon.removeClass('show');
        moIcon.eq(tapNum).addClass('show');
        moCenter.removeClass('show');
        moCenter.eq(tapNum).addClass('show');
        tapNum++;
    } else {
        tap.removeClass('active');
        tap.eq(tapNum).addClass('active');
        icon.removeClass('show');
        icon.eq(tapNum).addClass('show');
        center.removeClass('show');
        center.eq(tapNum).addClass('show');
        tapNum++;
    }
};

// pc
for (let i = 0; i < tap.length; i++) {
    tap.eq(i).on('click', function() {
        tapNum = i;
        clearInterval(tapInterval);
        tap.removeClass('active');
        tap.eq(i).addClass('active');
        icon.removeClass('show');
        icon.eq(i).addClass('show');
        center.removeClass('show');
        center.eq(i).addClass('show');

        if(timeout) {
            timeout = false;
            setTimeout(() => {
                tapInterval = setInterval(tapFuncs, 3500);
                timeout = true;
            }, 1000);
        };
    });
};

// mobile
for (let i = 0; i < moTap.length; i++) {
    moTap.eq(i).on('click', function() {
        tapNum = i;
        clearInterval(tapInterval);
        moTap.removeClass('active');
        moTap.eq(i).addClass('active');
        moIcon.removeClass('show');
        moIcon.eq(i).addClass('show');
        moCenter.removeClass('show');
        moCenter.eq(i).addClass('show');

        if(timeout) {
            timeout = false;
            setTimeout(() => {
                tapInterval = setInterval(tapFuncs, 3500);
                timeout = true;
            }, 1000);
        };
    });
};