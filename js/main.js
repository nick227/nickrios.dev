/* Font Face Observer v2.1.0 - © Bram Stein. License: BSD-3-Clause */(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function t(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function u(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";"}function z(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function A(a,b){function c(){var a=k;z(a)&&a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);z(a)};function B(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var C=null,D=null,E=null,F=null;function G(){if(null===D)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);D=!!a&&603>parseInt(a[1],10)}else D=!1;return D}function J(){null===F&&(F=!!document.fonts);return F}
function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}E=""!==a.style.font}return E}function L(a,b){return[a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}
B.prototype.load=function(a,b){var c=this,k=a||"BESbswy",r=0,n=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=n?b(Error(""+n+"ms timeout exceeded")):document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},b)}e()}),N=new Promise(function(a,c){r=setTimeout(function(){c(Error(""+n+"ms timeout exceeded"))},n)});Promise.race([N,M]).then(function(){clearTimeout(r);a(c)},
b)}else m(function(){function v(){var b;if(b=-1!=f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===C&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),C=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=C&&(f==w&&g==w&&h==w||f==x&&g==x&&h==x||f==y&&g==y&&h==y)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(r),a(c))}function I(){if((new Date).getTime()-H>=n)d.parentNode&&d.parentNode.removeChild(d),b(Error(""+
n+"ms timeout exceeded"));else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,g=p.a.offsetWidth,h=q.a.offsetWidth,v();r=setTimeout(I,50)}}var e=new t(k),p=new t(k),q=new t(k),f=-1,g=-1,h=-1,w=-1,x=-1,y=-1,d=document.createElement("div");d.dir="ltr";u(e,L(c,"sans-serif"));u(p,L(c,"serif"));u(q,L(c,"monospace"));d.appendChild(e.a);d.appendChild(p.a);d.appendChild(q.a);document.body.appendChild(d);w=e.a.offsetWidth;x=p.a.offsetWidth;y=q.a.offsetWidth;I();A(e,function(a){f=a;v()});u(e,
L(c,'"'+c.family+'",sans-serif'));A(p,function(a){g=a;v()});u(p,L(c,'"'+c.family+'",serif'));A(q,function(a){h=a;v()});u(q,L(c,'"'+c.family+'",monospace'))})})};"object"===typeof module?module.exports=B:(window.FontFaceObserver=B,window.FontFaceObserver.prototype.load=B.prototype.load);}());


if (window.Element && !Element.prototype.closest) {
    Element.prototype.closest =
        function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i,
                el = this
            do {
                i = matches.length
                while (--i >= 0 && matches.item(i) !== el) {}
            } while ((i < 0) && (el = el.parentElement))
            return el
        }
}

function loadPreloader() {
    var elm = document.querySelector('.preloader')
    var fontA = new FontFaceObserver('Montserrat');
    var state = 0
    var delay = 0
    if (getCookie()) {
        fontA.load().then(function () {
            setTimeout(function(){
                elm.remove()

            }, 30)
        });
        return false;
    } else {
        delay = 2300
        setCookie()
    }

    var timer = setInterval(function() {
        state = state ? 0 : 1
        if (state) {
            elm.querySelector('p').classList.add('hidden')
        } else {
            elm.querySelector('p').classList.remove('hidden')
        }
    }, 300)

    window.setTimeout(function() {
        clearInterval(timer)
        elm.querySelector('p').classList.add('hidden')
        elm.querySelector('img').classList.add('preloader-spin')
        elm.classList.add('preloader-fade-out')
        setTimeout(function(){elm.remove()}, 800)
    }, delay)
}


function truncateLists() {
    var items = document.querySelectorAll('.list-truncate li')
    for (var i = 0, length1 = items.length; i < length1; i++) {
        addTitle(items[i])
        truncateItem(items[i])
    }
}

function addTitle(item) {
    item.setAttribute('title', item.innerHTML)
}

function truncateItem(item) {
    var maxLen = 20
    item.innerHTML = item.innerHTML.substring(0, Math.min(maxLen, item.innerHTML.length)) + (item.innerHTML.length > maxLen ? '...' : '')
}

function loadModal() {
    var closeBtn = document.querySelector('.btn-close')
    closeBtn.onclick = closeModal
    var openBtns = document.querySelectorAll('.btn-modal')
    for (var i = 0, length1 = openBtns.length; i < length1; i++) {
        openBtns[i].onclick = openModal
    }
    loadModalNav()
}

function openModal(e) {
    e.preventDefault()
    var contentSelector = this.getAttribute('data-content')
    var modal = document.querySelector('.modal')
    if(modal.getAttribute('data-current-content')){
        modal.querySelector('.' + modal.getAttribute('data-current-content')).classList.add('hidden')

    }
    modal.setAttribute('data-current-content', contentSelector)
    modal.querySelector('.' + contentSelector).classList.remove('hidden')
    modal.classList.add('fadeUp')
    modal.classList.remove('hidden')
}

function loadMobileNav() {
    document.querySelector('.mobile-nav').onclick = function() {
        this.querySelector('ul').classList.toggle('hidden')
    }
}

function closeModal() {
    var modal = document.querySelector('.modal')
    var contentSelector = modal.getAttribute('data-current-content')
    modal.querySelector('.content.' + contentSelector).classList.add('hidden')
    modal.classList.remove('fadeUp')
    modal.classList.add('fadeOut')
    setTimeout(function() {
        modal.classList.add('hidden')
        modal.classList.remove('fadeOut')
    }, 1000)
}

function loadModalNav() {
    var prevElm = document.querySelector('.modal-nav .prev').onclick = toggleModal
    var nextElm = document.querySelector('.modal-nav .next').onclick = toggleModal
}

function toggleModal() {
    var modal = document.querySelector('.modal')
    var steps = ['experience', 'services', 'media', 'pricing', 'contact']
    var currentStep = document.querySelector('.modal').getAttribute('data-current-content')
    var newStep = this.classList.contains('next') ? (steps.indexOf(currentStep) + 1 > steps.length - 1 ? 0 : steps.indexOf(currentStep) + 1) : (steps.indexOf(currentStep) - 1 > 0 ? steps.indexOf(currentStep) - 1 : steps.length - 1)

    var contentSelector = modal.getAttribute('data-current-content')
    modal.querySelector('.content.' + contentSelector).classList.add('hidden')
    modal.querySelector('.content.' + steps[newStep]).classList.remove('hidden')
    modal.setAttribute('data-current-content', steps[newStep])

}

function getStyle(element, property) {
    return window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(property) : element.style[property.replace(/-([a-z])/g, function(g) { return g[1].toUpperCase() })]
}

function loadSectionToggle() {
    var btns = document.querySelectorAll('.toggle-section')
    for (var i = 0, length1 = btns.length; i < length1; i++) {
        btns[i].onclick = handleSectionToggle
    }
}

function handleSectionToggle(e) {
    e.preventDefault()
    var parentElm = this.closest('.clients')
    //parentElm.querySelector('.content-section').classList.add('fadeOut')
    if (!parentElm.getAttribute('data-status')) {
        var bgColor = getStyle(parentElm, 'background-color')
        var animElm = document.createElement('div')
        animElm.style.backgroundColor = bgColor
        animElm.classList.add('anim-elm', 'animated', 'slideRightAnim')
        parentElm.querySelector('.content-section').appendChild(animElm)
    }
    setTimeout(function() {
        if (!parentElm.getAttribute('data-status')) {
            parentElm.querySelector('.page-one').classList.add('hidden')
            parentElm.querySelector('.page-two').classList.remove('hidden')
            parentElm.setAttribute('data-status', true)
        } else {
            parentElm.querySelector('.page-one').classList.remove('hidden')
            parentElm.querySelector('.page-two').classList.add('hidden')
            parentElm.removeAttribute('data-status')
        }
        setTimeout(function() {
            animElm.remove()
        }, 2000)

    }, 200)
}

function loadMediaCarousel() {
    var thumbs = document.querySelectorAll('.media .carousel .masonry img')
    for (var i = 0, length1 = thumbs.length; i < length1; i++) {
        thumbs[i].onclick = updateCarousel
    }
}

function updateCarousel() {
    clearCarouselThumbs()
    this.classList.add('selected')
    var displayImg = document.querySelector('.media .carousel .display-section img')
    var displayParagraph = document.querySelector('.media .carousel .display-section p')
    displayImg.setAttribute('src', this.getAttribute('src'))
    displayParagraph.innerHTML = this.getAttribute('title')
}

function clearCarouselThumbs() {
    var thumbs = document.querySelectorAll('.media .carousel img')
    for (var i = 0, length1 = thumbs.length; i < length1; i++) {
        thumbs[i].classList.remove('selected')
    }

}


function loadSlider() {
    var flkty = new Flickity('.slider', {
        cellAlign: 'center',
        contain: true,
        wrapAround: true,
        autoPlay: 3530,
        pageDots: false,
        arrowShape: 'M 5,25 L 30,50 L 35,45 L 15,25  L 35,5 L 30,0 Z'
    })
}

function loadParallax() {
    var rellax = new Rellax('.rellax', {
        center: true
    })
    var fadeUpOnScrollElm = document.querySelectorAll('.fadeUpOnScroll')
    for (var i = 0, length1 = fadeUpOnScrollElm.length; i < length1; i++) {
        attachFadeUpOnScrollElm(fadeUpOnScrollElm[i])
    }
}

function loadForms() {
    var forms = document.querySelectorAll('form')
    for (var i = 0, length1 = forms.length; i < length1; i++) {
        forms[i].addEventListener("submit", function(e) {
            e.preventDefault()
            var payload = {}
            var form = this;
            payload.name = this.querySelector('input[name="name"]').value
            payload.phone = this.querySelector('input[name="phone"]').value
            payload.email = this.querySelector('input[name="email"]').value
            payload.design = this.querySelector('input[name="design"]').checked
            payload.website = this.querySelector('input[name="website"]').checked
            payload.marketing = this.querySelector('input[name="marketing"]').checked
            payload.media = this.querySelector('input[name="media"]').checked
            payload.message = this.querySelector('textarea').value
            fetch("includes/message.php", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }).then(response => {
                if (response.status !== 200) {
                    alert('Error: ' + response.status);
                } else {
                    form.querySelector('button').classList.add('bg-green')
                    form.querySelector('button').innerHTML = 'MESSAGE SENT!!!'
                    form.reset();
                }
            });


        })
    }
}

function attachFadeUpOnScrollElm(fadeUpOnScrollElm) {
    var loaded = false
    if (isInViewport(fadeUpOnScrollElm) && !loaded) {
        loaded = true
        fadeUpOnScrollElm.classList.add('fadeIn')
    }
    window.addEventListener('scroll', function(event) {
        if (isInViewport(fadeUpOnScrollElm) && !loaded) {
            loaded = true
            fadeUpOnScrollElm.classList.add('fadeIn')
        }
        if (!isInViewport(fadeUpOnScrollElm) && loaded) {
            loaded = false
            fadeUpOnScrollElm.classList.remove('fadeIn')

        }
    }, false)

}

function isInViewport(elem) {
    var bounding = elem.getBoundingClientRect()
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

function getCookie() {
    return document.cookie.indexOf("nickrios.dev") > -1
}

function setCookie() {
    document.cookie = "nickrios.dev"
}
window.addEventListener('DOMContentLoaded', (event) => {
    loadPreloader()
    loadParallax()
    loadModal()
    truncateLists()
    loadMediaCarousel()
    loadSectionToggle()
    loadMobileNav()
    loadForms()
    loadSlider()
});