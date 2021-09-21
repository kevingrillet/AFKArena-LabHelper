const contextMenuFloor = document.getElementById('context-menu-floor')
const contextMenuAllowedFactions = document.getElementById('context-menu-allowedFactions')
const contextMenuDismalLuck = document.getElementById('context-menu-dismalLuck')
const scope = document.querySelector('html')

let clicked
let contextMenu

const normalizePozition = (mouseX, mouseY, context) => {
  // ? compute what is the mouse position relative to the container element (scope)
  let {
    left: scopeOffsetX,
    top: scopeOffsetY
  } = scope.getBoundingClientRect()

  scopeOffsetX = scopeOffsetX < 0 ? 0 : scopeOffsetX
  scopeOffsetY = scopeOffsetY < 0 ? 0 : scopeOffsetY

  const scopeX = mouseX - scopeOffsetX
  const scopeY = mouseY - scopeOffsetY

  // ? check if the element will go out of bounds
  const outOfBoundsOnX =
        scopeX + context.clientWidth > scope.clientWidth

  const outOfBoundsOnY =
        scopeY + context.clientHeight > scope.clientHeight

  let normalizedX = mouseX
  let normalizedY = mouseY

  // ? normalize on X
  if (outOfBoundsOnX) {
    normalizedX =
            scopeOffsetX + scope.clientWidth - context.clientWidth
  }

  // ? normalize on Y
  if (outOfBoundsOnY) {
    normalizedY =
            scopeOffsetY + scope.clientHeight - context.clientHeight
  }

  return { normalizedX, normalizedY }
}

document.addEventListener('click', (e) => {
  // ? close the menu if the user clicks outside of it
  if (clicked !== e.target && e.target.offsetParent !== contextMenu) {
    contextMenuFloor.classList.remove('visible')
    contextMenuAllowedFactions?.classList.remove('visible')
    contextMenuDismalLuck?.classList.remove('visible')
    clicked = null
  }
})

function newClickHandeler (e) {
  e = e || window.event
  switch (e.which) {
    case 3: // Right
      e.preventDefault() // Remove default Context Menu
      // falls through
    case 1: // Left
      if (clicked !== e.target) {
        if (clicked) {
          contextMenuFloor.classList.remove('visible')
          contextMenuAllowedFactions?.classList.remove('visible')
          contextMenuDismalLuck?.classList.remove('visible')
        }
        clicked = e.target

        if (clicked.parentElement.className === 'floor') {
          contextMenu = contextMenuFloor
        } else if (clicked.parentElement.parentElement.parentElement.className === 'allowedFactions') {
          contextMenu = contextMenuAllowedFactions
        } else if (clicked.parentElement.parentElement.parentElement.className === 'dismalLuck') {
          contextMenu = contextMenuDismalLuck
        }

        const { clientX: mouseX, clientY: mouseY } = e

        const { normalizedX, normalizedY } = normalizePozition(mouseX, mouseY, contextMenu)

        contextMenu.classList.remove('visible')

        contextMenu.style.top = `${normalizedY}px`
        contextMenu.style.left = `${normalizedX}px`

        setTimeout(() => {
          contextMenu.classList.add('visible')
        })
      }
      break
    case 2: // Midle
      toogleUnknow(e.target)
      break
  }
}

function toogleUnknow (e) {
  if (e.innerHTML === '?') {
    e.innerHTML = ''
  } else {
    e.innerHTML = '?'
  }
}

function toogleAllFloor (e) {
  e.target.parentElement.querySelectorAll('span').forEach((e) => toogleUnknow(e))
}

document.querySelectorAll('.item').forEach((e) => {
  e.onclick = function (e) {
    let curElt
    switch (contextMenu) {
      case (contextMenuFloor):
        if (e.target.tagName.toLowerCase() === 'div') {
          curElt = e.target.firstElementChild
        } else {
          curElt = e.target
        }
        clicked.className = curElt.className
        if (clicked.innerHTML === '?') {
          clicked.innerHTML = ''
        }
        break
      case (contextMenuAllowedFactions):
      case (contextMenuDismalLuck):
        if (e.target.tagName.toLowerCase() === 'div') {
          curElt = e.target.firstElementChild
        } else {
          curElt = e.target
        }
        clicked.src = curElt.src
        clicked.alt = curElt.alt
        break
    }
    contextMenu.classList.remove('visible')
    contextMenu = null
    clicked = null
  }
})

document.querySelectorAll(':scope .floor h2').forEach((e) => {
  e.onclick = toogleAllFloor
})

// Replace all clicks on span
function init () {
  document.querySelectorAll(':scope .floor span').forEach((e) => {
    e.onclick = newClickHandeler // Left click
    e.onauxclick = newClickHandeler // Midle click
    e.oncontextmenu = newClickHandeler // Right click -> Context Menu
  })

  document.querySelectorAll(':scope .allowedFactions img').forEach((e) => {
    e.onclick = newClickHandeler // Left click
    e.oncontextmenu = newClickHandeler // Right click -> Context Menu
  })

  document.querySelectorAll(':scope .dismalLuck img').forEach((e) => {
    e.onclick = newClickHandeler // Left click
    e.oncontextmenu = newClickHandeler // Right click -> Context Menu
  })
}

init()

// /!\ require to observe dom because it can break ...

const callback = function (mutationsList) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      init()
    }
  }
}

const observer = new MutationObserver(callback)
observer.observe(document.querySelector('#LabPath'), { childList: true, subtree: true })
