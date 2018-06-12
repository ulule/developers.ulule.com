const updateHash = location => {
  if (window.history && window.history.replaceState) {
    if (window.location.hash === location) return

    history.replaceState({}, document.title, location)
  }
}

const updateActive = hash => {
  let element = document.querySelector(`a[href="${hash}"]`)

  if (!element || element.classList.contains('active')) return

  Array.from(document.querySelectorAll('#menu ul li.active')).forEach(current => {
    current.classList.remove('active')
    current.parentNode.classList.remove('active')
  })

  while (true) {
    let parentNode = element.parentNode
    if (!parentNode) {
      break
    }

    let nodeName = parentNode.nodeName.toLowerCase()
    if (nodeName === 'nav') {
      break
    }

    if (nodeName === 'li') {
      parentNode.classList.add('active')
    }

    element = parentNode.parentNode
  }
}

document.addEventListener('DOMContentLoaded', event => {
  const header = document.querySelector('#header > .b-nav')
  const body = document.querySelector('body')

  const handleHeader = scrollPosition => {
    if (scrollPosition === 0) {
      if (!body.classList.contains('header--fixed')) {
        body.classList.add('header--fixed')
      }
    } else {
      if (body.classList.contains('header--fixed')) {
        body.classList.remove('header--fixed')
      }
    }
  }

  handleHeader(document.documentElement.scrollTop)
  updateActive(window.location.hash)
  window.addEventListener(
    'hashchange',
    e => {
      e.preventDefault()
      updateActive(window.location.hash)
    },
    false
  )
  const elements = document.querySelectorAll('#menu ul li a')
  const mapping = Array.from(elements).map(elem => {
    const section = document.querySelector(elem.getAttribute('href'))
    return {
      position: section.offsetTop - 5,
      element: elem,
      container: section
    }
  })

  document.addEventListener('scroll', event => {
    handleHeader(document.documentElement.scrollTop)

    const scrollPosition = document.documentElement.scrollTop

    mapping.forEach((section, index) => {
      if (
        section.position < scrollPosition &&
        mapping[index + 1] &&
        mapping[index + 1].position > scrollPosition &&
        window.location.hash !== section.element.getAttribute('href')
      ) {
        keepScroll = scrollPosition
        updateHash(section.element.getAttribute('href'))
        updateActive(window.location.hash)
      }
    })
  })
})
