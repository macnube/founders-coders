function animate(elem, style, unit, from, to, time, prop) {
    if (!elem) {
        return;
    }
    var start = new Date().getTime(),
        timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            if (prop) {
                elem[style] = (from + step * (to - from))+unit;
            } else {
                elem.style[style] = (from + step * (to - from))+unit;
            }
            if (step === 1) {
                clearInterval(timer);
            }
        }, 25);
    if (prop) {
          elem[style] = from+unit;
    } else {
          elem.style[style] = from+unit;
    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
	var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
  console.log(x)
  console.log(y)
	var skills = document.querySelector("#skills");
	var work = document.querySelector("#work");
	var about = document.querySelector("#about");
  document.querySelector('#skill-button').onclick = function() {
  	animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, skills.offsetTop, 300, true);
	}
	document.querySelector('#work-button').onclick = function() {
  	animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, work.offsetTop, 600, true);
	}
	document.querySelector('#about-button').onclick = function() {
  	animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, about.offsetTop, 800, true);
	}
	document.querySelector('.banner-more-button').onclick = function() {
  	animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, skills.offsetTop, 300, true);
	}
	if (x < 980) {
		document.querySelector('.banner-contaier').style.backgroundImage = 'url(' + 'https://github.com/macnube/founders-coders/blob/master/public/images/BannerSimple.png?raw=true' + ')'
	}
});

