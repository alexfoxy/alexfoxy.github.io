// var lastKnownScrollY = 0;
// var currentScrollY = 0;
// var ticking = false;
// var idOfHeader = 'navcontainer';
// var eleHeader = null;
// const classes = {
//   pinned: 'pin',
//   unpinned: 'unpin',
// };
// function onScroll() {
//   currentScrollY = window.pageYOffset;
//   if (currentScrollY < lastKnownScrollY) {
//     pin();
//   } else if (currentScrollY > lastKnownScrollY) {
//     unpin();
//   }
//   lastKnownScrollY = currentScrollY;
// }
// function pin() {
//   if (eleHeader.classList.contains(classes.unpinned)) {
//     eleHeader.classList.remove(classes.unpinned);
//     eleHeader.classList.add(classes.pinned);
//   }
// }
// function unpin() {
//   if (eleHeader.classList.contains(classes.pinned) || !eleHeader.classList.contains(classes.unpinned)) {
//     eleHeader.classList.remove(classes.pinned);
//     eleHeader.classList.add(classes.unpinned);
//   }
// }

function selectNav(hash) {
    var anchorlinks = document.querySelectorAll('a[href^="#"]')
 
    for (var item of anchorlinks) { 
        const hashval = item.getAttribute('href')
        if(hash === hashval) {
            item.classList.add("selected")
        } else {
            item.classList.remove("selected")
        }
    }
}

function setUpAnchorLinks() {
    var anchorlinks = document.querySelectorAll('a[href^="#"]')
 
    for (var item of anchorlinks) { 
        item.addEventListener('click', function(e) {
            var hashval = e.target.getAttribute('href')
            var target = document.querySelector(hashval)
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
            history.pushState(null, null, hashval)
            e.preventDefault()
        })
    }
}

function setUpExpandButtons() {
    var expandButtons = document.querySelectorAll('.expandButton')
 
    for (var button of expandButtons) { 
        button.addEventListener('click', function(e) {
            const b = e.target
            var list = b.previousElementSibling

            list.classList.toggle("visible")

            b.innerHTML = list.classList.contains("visible") ? "- less" : "+ more"
        })
    }
}


window.gen_mail_to_link = function(lhs,rhs,subject) {
    document.write("<a id=contactMe href=\"mailto");
    document.write(":" + lhs + "@");
    document.write(rhs + "?subject=" + subject + "\">Email me<\/a>");
}


var positionData = {
    block1: function(el, y) {
      const o = everpolate.linear(y, [0,50,400], [1,1,0])
      if(o <= 0) {
        el.style.opacity = 0
        return
      }

      el.style.opacity = o
      el.style.transform = `translateX(${ everpolate.linear(y, [0,400], [0,200]) }px)`
    },
    block2: function(el, y) {
      const o = everpolate.linear(y, [0,50,400], [1,1,0])
      if(o <= 0) {
        el.style.opacity = 0
        return
      }

      el.style.opacity = o
      el.style.transform = `translateY(${ everpolate.linear(y, [0,400], [0,-200]) }px)`
    },
    block3: function(el, y) {
      const o = everpolate.linear(y, [0,50,400], [1,1,0])
      if(o <= 0) {
        el.style.opacity = 0
        return
      }

      el.style.opacity = o
      el.style.transform = `translateX(${ everpolate.linear(y, [0,400], [0,-200]) }px)`
    },
    block4: function(el, y) {
      const o = everpolate.linear(y, [0,50,400], [1,1,0])
      if(o <= 0) {
        el.style.opacity = 0
        return
      }

      el.style.opacity = o
      el.style.transform = `scale(${ everpolate.linear(y, [0,400], [1,0.5]) })`
    },
    krft1: function(el, y) {
      const triggerEl = document.getElementById("krft")
      const offsetTop = triggerEl.offsetTop

      const a = [0,offsetTop-300,offsetTop-100,offsetTop+200,offsetTop+300]

      const o = everpolate.linear(y, a, [0,0,1,1,0])
      if(o <= 0) {
        el.style.opacity = 0
        return
      }

      el.style.opacity = o

      const p = [0,offsetTop-300,offsetTop+300]
      el.style.transform = `translateY(${ everpolate.linear(y, p, [100,100,-100]) }px)`
    },
    chillscape1: function(el, y) {
      const triggerEl = document.getElementById("chillscape")
      const offsetTop = triggerEl.offsetTop

      const a = [0,offsetTop-300,offsetTop-100,offsetTop+200,offsetTop+300]

      const o = everpolate.linear(y, a, [0,0,1,1,0])
      if(o <= 0) {
        el.style.opacity = 0
        return
      }

      el.style.opacity = o

      const p = [0,offsetTop-300,offsetTop+300]
      el.style.transform = `
        translateX(${ everpolate.linear(y, p, [0,0,100]) }px) 
        translateY(${ everpolate.linear(y, p, [250,250,-300]) }px)
      `
    },
    noiz1: function(el, y) {
      const triggerEl = document.getElementById("noiz")
      const offsetTop = triggerEl.offsetTop

      const a = [0,offsetTop-300,offsetTop-100,offsetTop+200,offsetTop+300]

      const o = everpolate.linear(y, a, [0,0,1,1,0])
      if(o <= 0) {
        el.style.opacity = 0
        return
      }

      el.style.opacity = o

      const p = [0,offsetTop-300,offsetTop+300]
      el.style.transform = `
        translateX(${ everpolate.linear(y, p, [0,0,50]) }px) 
        translateY(${ everpolate.linear(y, p, [250,250,-300]) }px)
      `
    },
    noiz2: function(el, y) {
      const triggerEl = document.getElementById("noiz")
      const offsetTop = triggerEl.offsetTop

      const a = [0,offsetTop-300,offsetTop-100,offsetTop+200,offsetTop+300]

      const o = everpolate.linear(y, a, [0,0,1,1,0])
      if(o <= 0) {
        el.style.opacity = 0
        return
      }

      el.style.opacity = o

      const p = [0,offsetTop-300,offsetTop+300]
      el.style.transform = `
        translateX(${ everpolate.linear(y, p, [-150,-20,0]) }px) 
        translateY(${ everpolate.linear(y, p, [250,250,-300]) }px)
      `
    }

}

const els = {

}

function updateObjs(y) {
    for(var o in positionData) {
      els[o] = els[o] || document.getElementById(o)
      var fn = positionData[o]
      fn(els[o], y)
    }
}


window.onload = function() {
    const ratio = window.innerWidth/window.innerHeight
    const isMobile = ratio<0.75

    if(isMobile) {
        document.body.classList.add("mobile")
    }

    document.body.classList.add("loaded")

    setUpExpandButtons()
    setUpAnchorLinks()
    
    document.addEventListener('scroll', function(x) {
        if(!isMobile) updateObjs(window.scrollY)
    }, false)

    if(!isMobile) updateObjs(window.scrollY)

  
    // let projectsEl = document.getElementById("projects").getBoundingClientRect()
    // let contactEl = document.getElementById("contact").getBoundingClientRect()

    // document.addEventListener('scroll', function(x) {
    //     for(var o in positionData) {
    //       var el = document.getElementById(o)
    //       var fn = positionData[o]
    //       fn(el, window.scrollY)
    //     }

    //     if(window.scrollY > (contactEl.top - (window.innerHeight/2))) {
    //         selectNav("#contact")
    //     } else if(window.scrollY > (projectsEl.top - (window.innerHeight/2))) {
    //         selectNav("#projects")
    //     } else {
    //         selectNav("#me")
    //     }
    // }, false);

}