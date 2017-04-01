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

function makeSmall (className) {
	var elements = document.querySelectorAll(className)
	elements.forEach( (ele) => {
		ele.className += '-small'
	})
}

function makeExtraSmall (className) {
	var elements = document.querySelectorAll(className)
	elements.forEach( (ele) => {
		ele.className += '-extra-small'
	})
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
  document.title = x
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
	var banner = document.querySelector('.banner-container')
	var brandText = document.querySelector('.brand-text-container')
	var titleText = document.querySelector('.banner-title-container')
	var mobile =	navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i)
	if ((x < 980 && y < 700) || mobile) {
		banner.style.backgroundImage = 'url(' + 'https://github.com/macnube/founders-coders/blob/master/public/images/BannerSimple.png?raw=true' + ')'
		banner.style.backgroundPosition = 'center'
		banner.style.backgroundSize = '250px 200px'
	} else if (x < 980) {
		banner.style.backgroundImage = 'url(' + 'https://github.com/macnube/founders-coders/blob/master/public/images/BannerSimple.png?raw=true' + ')'
		banner.style.backgroundPosition = 'center'
	}
	if (x < 950 || mobile) {
		makeSmall('.work-entry')
		makeSmall('.work-text-container')
		makeSmall('.work-text-container-right')
		makeSmall('.work-image-container')
		makeSmall('.work-image-container-left')
		makeSmall('.atdaa-image')
		makeSmall('.work-highlight')
		makeSmall('.about-image')
		makeSmall('.about-image-container')
		titleText.style.fontSize = '10px'
		brandText.style.display = 'none'
		if (x < 600 || mobile) {
			makeExtraSmall('.chromebook-image')
			makeExtraSmall('.labview-image')
			makeExtraSmall('.metaswitch-image')
		} else {
			makeSmall('.chromebook-image')
			makeSmall('.labview-image')
			makeSmall('.metaswitch-image')
		}
	}

});


