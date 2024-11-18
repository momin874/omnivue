var text = true
var logo = null
var close = true
var isDraggable = false
var prevMousePosition = null
var currentMousePosition = null

var prevYPosition = window.scrollY

const changeToLogo = () => {
    logo.classList.add('hidden')
    text = false
}
const changeToHeader = (navIcon, navbar, sidebar, header) => {
    navIcon.style.opacity = 0;
    navbar.style.opacity = 1;
    navbar.style.zIndex = 9999
    // navbar.style.pointerEvents = 'auto'
    sidebar.style.right = '-300px'
    // header.style.pointerEvents = 'auto'
    const serviceSubDropdown = document.getElementById('services-options')
    const aboutSubDropdown = document.getElementById('about-us-options')
    serviceSubDropdown.style.display = 'none'
    aboutSubDropdown.style.display = 'none'
    close = true
}
const changeToHamburger = (navIcon, navbar, header) => {
    navbar.style.opacity = 0;
    navIcon.style.opacity = 1;
    navbar.style.zIndex = -1
    // navbar.style.pointerEvents = 'none'
    navIcon.style.display = 'flex'
    // header.style.pointerEvents = 'auto'
    const serviceSubDropdown = document.getElementById('services-options')
    const aboutSubDropdown = document.getElementById('about-us-options')
    serviceSubDropdown.style.display = 'none'
    aboutSubDropdown.style.display = 'none'
    close = true
    // sidebar.style.right = '0px'
}
const addLogoScrollEvent = () => {
    logo = document.querySelector('.logo-text')
    const navIcon = document.querySelector('.nav-icon')
    const navbar = document.querySelector('.navbar')
    const header = document.querySelector('.header')
    const sidebar = document.querySelector('.sidebar')
    if (logo && navIcon && navbar && header) {
        document.addEventListener('scroll', () => {
            const y = window.scrollY
            if (y > 100 && text) {
                changeToLogo()
                changeToHamburger(navIcon, navbar, header)
            }
            else if (y < 100 && !text) {
                if (sidebar) {
                    logo.classList.remove('hidden')
                    changeToHeader(navIcon, navbar, sidebar, header)
                    text = true
                }
            }
        })
    }
}

const addMouseOverEventOnHeaderVideo = () => {
    const sections = document.querySelectorAll('.page-container > section')
    const mainVideo = document.querySelector('.bottom-video-element')
    const maxRotation = 10
    sections.forEach(section => {
        if (section && mainVideo) {
            section.addEventListener('mousemove', (e) => {
                let rect = mainVideo.getBoundingClientRect();
                const { top, bottom, left, right } = rect
                let xRotationAngle = 0
                let yRotationAngle = 0
                const box = document.querySelector('.box')
                const xPos = e.clientX - (box.offsetWidth * 2);;
                const yPos = e.clientY - (box.offsetHeight);;
                box.style.transform = `translate(${xPos}px, ${yPos}px)`;
                if (e.clientX < left && e.clientY > top && e.clientY < bottom) {
                    xRotationAngle = 0
                    yRotationAngle = -(1 - (e.clientX / left)) * maxRotation
                }
                else if (e.clientX > right && e.clientY > top && e.clientY < bottom) {
                    xRotationAngle = 0
                    yRotationAngle = (((e.clientX - right) / (window.innerWidth - right))) * maxRotation
                }
                else if (e.clientY < top && e.clientX > left && e.clientX < right) {
                    yRotationAngle = 0
                    xRotationAngle = (1 - (e.clientY / top)) * maxRotation
                }
                else if (e.clientY > bottom && e.clientX > left && e.clientX < right) {
                    yRotationAngle = 0
                    xRotationAngle = -(((e.clientY - bottom) / (window.innerHeight - bottom))) * maxRotation
                }
                else if (e.clientY < top && e.clientX < left) {
                    xRotationAngle = (1 - (e.clientY / top)) * maxRotation
                    yRotationAngle = -(1 - (e.clientX / left)) * maxRotation
                }
                else if (e.clientY < top && e.clientX > right) {
                    xRotationAngle = (1 - (e.clientY / top)) * maxRotation
                    yRotationAngle = (((e.clientX - right) / (window.innerWidth - right))) * maxRotation
                }
                else if (e.clientY > bottom && e.clientX < left) {
                    xRotationAngle = -(((e.clientY - bottom) / (window.innerHeight - bottom))) * maxRotation
                    yRotationAngle = -(1 - (e.clientX / left)) * maxRotation
                }
                else if (e.clientY > bottom && e.clientX > right) {
                    xRotationAngle = -(((e.clientY - bottom) / (window.innerHeight - bottom))) * maxRotation
                    yRotationAngle = (((e.clientX - right) / (window.innerWidth - right))) * maxRotation
                }
                else {
                    xRotationAngle = 0
                    yRotationAngle = 0
                }
                mainVideo.style.transform = `rotateX(${xRotationAngle}deg) rotateY(${yRotationAngle}deg)`
            })
        }
    })

}
const addScrollerEventOnForSliderMovement = () => {
    const root = document.documentElement;
    if (root) {
        let xStartingPosition = getComputedStyle(root).getPropertyValue('--start-x-position').trim()
        xStartingPosition = Number(xStartingPosition.slice(0, xStartingPosition.length - 2))
        let prevScrollPosition = window.scrollY
        document.addEventListener('scroll', () => {
            if (prevScrollPosition > window.scrollY) {
                xStartingPosition += prevScrollPosition - window.scrollY;
            }
            else {
                xStartingPosition -= window.scrollY - prevScrollPosition;
            }
            prevScrollPosition = window.scrollY
            prevYPosition = window.scrollY
            root.style.setProperty('--start-x-position', `${xStartingPosition / 2}px`)
        })
    }
}

const mouseDownEvent = (e) => {
    prevYPosition = window.scrollY
    isDraggable = true
    prevMousePosition = e.clientX
    const circle = document.querySelector('.circle')
    if (circle) circle.style.opacity = 0.3
}

const mouseUpEvent = (e) => {
    isDraggable = false
    currentMousePosition = e.clientX
    const circle = document.querySelector('.circle')
    if (circle) circle.style.opacity = 1

}
const mouseMoveEvent = (e) => {

    if (isDraggable) {
        const root = document.documentElement;
        if (root) {
            let xStartingPosition = getComputedStyle(root).getPropertyValue('--start-x-position').trim()
            let yStartingPosition = getComputedStyle(root).getPropertyValue('--start-y-position').trim()
            xStartingPosition = Number(xStartingPosition.slice(0, xStartingPosition.length - 2))
            yStartingPosition = Number(yStartingPosition.slice(0, yStartingPosition.length - 2))
            currentMousePosition = e.clientX
            let left = e.target.getBoundingClientRect().left
            let movement = e.clientX - left
            if (prevMousePosition > currentMousePosition) {
                movement = prevMousePosition - currentMousePosition
                xStartingPosition -= movement * 0.3
                yStartingPosition -= movement / window.innerWidth * 30
            }
            else if (prevMousePosition <= currentMousePosition) {
                movement = currentMousePosition - prevMousePosition
                xStartingPosition += movement * 0.3
                yStartingPosition += movement / window.innerWidth * 30
            }

            root.style.setProperty('--start-x-position', `${xStartingPosition}px`)
            root.style.setProperty('--start-y-position', `${yStartingPosition}px`)


        }
    }
}

const addMouseDragEvent = () => {
    const draggable = document.querySelectorAll('.draggable')
    if (draggable && draggable.length) {
        draggable.forEach(item => {
            item.addEventListener('mousedown', mouseDownEvent)
            item.addEventListener('mouseup', mouseUpEvent)
            item.addEventListener('mousemove', mouseMoveEvent)
            item.addEventListener('mouseleave', mouseUpEvent)
            item.addEventListener('contextmenu', (e) => {
                e.preventDefault
            })
        })
    }

}
const circleEvent = (e) => {
    const circle = document.querySelector('.circle')
    if (circle) {
        circle.style.opacity = 1
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        circle.style.left = `${mouseX}px`
        circle.style.top = `${mouseY}px`
    }
}
const removeCircleEvent = () => {
    const circle = document.querySelector('.circle')
    if (circle) circle.style.opacity = 0;
}
const addCircleEvent = () => {
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mousemove', circleEvent)
        sliderContainer.addEventListener('mouseleave', removeCircleEvent)
    }
}
const checkScrollerDirection = () => {
    if (prevYPosition < window.scrollY) {
        return 'left'
    }
    else if (prevYPosition > window.scrollY) {
        return 'right'
    }
    if (prevMousePosition < currentMousePosition) {
        return 'right'
    }
    else if (prevMousePosition > currentMousePosition) {
        return 'left'
    }
}

const appendThumbnailToRight = () => {
    const container = document.querySelector('.slider-container')
    const firstChild = container.firstChild
    // container.removeChild(firstChild)
    // container.append(firstChild)

}

const appendThumbnailToLeft = () => {
    const container = document.querySelector('.slider-container')
    const lastChild = container.lastElementChild

    // container.removeChild(lastChild)
    // container.prepend(lastChild)

}

const attachObserver = () => {
    const container = document.querySelector('.slider-container')
    if (container) {
        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const direction = checkScrollerDirection()
                    if (direction === 'left') {
                        appendThumbnailToRight()
                    }
                    else if (direction === 'right') {
                        appendThumbnailToLeft()
                    }
                    else {
                        // console.log(direction)
                    }
                }
            })
        }
        const observer = new IntersectionObserver(callback, {
            root: container,
            rootMargin: '0px',
            threshold: 1
        })
        Array.from(container.children).forEach(child => {
            observer.observe(child)
        })
    }
}

const addColorShadowEvent = () => {
    const canvas = document.querySelector('.canvas')
    const box = document.querySelector('.box')
    if (canvas && box) {
        canvas.addEventListener('mousemove', (e) => {
            const xPos = e.clientX - (box.offsetWidth * 2);;
            const yPos = e.clientY - (box.offsetHeight);;
            box.style.transform = `translate(${xPos}px, ${yPos}px)`;
        })
    }
}
// const addHeaderMenuEvent = () => {
//     document.querySelectorAll('.dropdown').forEach(dropdown => {
//         dropdown.addEventListener('click', function() {
//             this.querySelector('.dropdown-menu').classList.toggle('show');
//         });
//     });
// }
const addSidebarEvent = () => {
    const sidebar = document.getElementById('sidebar');
    const sidebarBtn = document.querySelector('.nav-icon');
    const header = document.querySelector('.header')
    // Open sidebar
    if (sidebar && sidebarBtn && header) {
        sidebarBtn.addEventListener('click', () => {
            // console.log(close)
            if (close) {
                sidebar.style.right = '0px';
                // header.style.pointerEvents = 'none'
                // sidebarBtn.firstElementChild.style.display = 'none'
                // sidebarBtn.lastElementChild.style.display = 'block'
                sidebarBtn.style.display = 'none'
                close = false
            }
            else{
                sidebar.style.right = '300px'
                close = true
                // header.style.pointerEvents = 'all'
            }
        });
    }
}

const addSidebarSubOptionsEvent = () => {
    const dropDownOptions = document.querySelectorAll('.sidebar > .navbar > .nav-list > .dropdown')
    let subDropdown = null
    let navbar = null
    if (dropDownOptions && dropDownOptions.length) {
        dropDownOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                if (e.target.text == 'Services') {
                    subDropdown = document.getElementById("services-options")
                    navbar = document.querySelector(".sidebar > .navbar")

                } else {
                    subDropdown = document.getElementById("about-us-options")
                    navbar = null
                }

                if (subDropdown.style.display == 'none') {
                    subDropdown.style.display = 'block'
                    if (navbar) {
                        // navbar.style.height = 'fit-content'
                    }
                }
                else {
                    subDropdown.style.display = 'none'
                    if (navbar) {
                        navbar.style.height = '100%'
                    }
                }
            })
        })
    }
}
const addSidebarCloseEvent = () => {
    const closeIcon = document.querySelector('.close')
    const navIcon = document.querySelector('.nav-icon')
    const navbar = document.querySelector('.navbar')
    const header = document.querySelector('.header')
    const sidebar = document.querySelector('.sidebar')
    if (closeIcon && navIcon && navbar && header && sidebar) {
        closeIcon.addEventListener('click', () => {
            // console.log(closeIcon)
            close = true
            sidebar.style.right = '-300px'
            changeToHamburger(navIcon, navbar, header)
            const serviceSubDropdown = document.getElementById('services-options')
            const aboutSubDropdown = document.querySelector('about-us-options')
            if (serviceSubDropdown) serviceSubDropdown.style.display = 'none'
            if (aboutSubDropdown) aboutSubDropdown.style.display = 'none'

        })
    }
}

const addInclusionImageHoverEvent = () => {
    const imgContainers = document.querySelectorAll('.inc-image-container')
    if (imgContainers && imgContainers.length) {
        imgContainers.forEach(container => {
            container.addEventListener('mouseenter', () => {
                const firstH2 = container.querySelectorAll('h2')[0]
                const spans = firstH2.querySelectorAll('h2>span')
                if (spans && spans.length) {
                    const secondH2 = container.querySelectorAll('h2')[1]; // Get the second h2
                    const secondSpan = secondH2.querySelector('span'); // Get all span elements inside the second h2
                    
                    spans.forEach(span => {
                        span.classList.add('animated-text-Y')
                    })

                    secondSpan.classList.remove('animated-desc-Y')
                    secondSpan.classList.add('animated-desc-X')                    
                    secondH2.classList.remove('off-view')

                }
            })
            container.addEventListener('mouseleave', () => {
                const spans = container.querySelectorAll('h2>span')
                const secondH2 = container.querySelectorAll('h2')[1];
                const secondSpan = secondH2.querySelector('span');
                if (spans && spans.length) {
                    secondSpan.classList.add('animated-desc-Y')
                    secondSpan.classList.remove('animated-desc-X')
                    secondH2.classList.add('off-view')
                    spans.forEach(span => {
                        span.classList.remove('animated-text-Y')
                        span.classList.add('animated-text-X')
                    })
                }
            })
        })
    }
}
const bendText = () => {
    const texts = document.querySelectorAll('.icon-text');
    let chars = null
    if (texts && texts.length) chars = Array.from(texts).map(text => text.textContent.split(''))
    else return
    texts.forEach((text, i) => {
        text.innerHTML = chars[i].map(char => `<span>${char}</span>`).join('')
    })
    texts.forEach(text => {
        const spans = text.querySelectorAll('span')
        if (spans && spans.length) {
            const charCount = spans.length
            const charPerCent = Math.abs(100 / charCount)
            for (let i = 0; i < charCount; i++) {

            }
        }
    })
}
const callPostLoadingFuction = () => {
    attachEvents()
    attachObserver()
    bendText()
}
const attachEvents = () => {
    addLogoScrollEvent()
    addMouseOverEventOnHeaderVideo()
    addScrollerEventOnForSliderMovement()
    addMouseDragEvent()
    addCircleEvent()
    // addHeaderMenuEvent()
    addSidebarEvent()
    addSidebarCloseEvent()
    addSidebarSubOptionsEvent()
    addInclusionImageHoverEvent()
}

document.addEventListener('DOMContentLoaded', callPostLoadingFuction)
