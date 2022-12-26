import { initialValues } from './constants'
import { htmlEditor, cssEditor, jsEditor } from "./main"
import { $output, $selectCSSLibrary } from "./elements"
import { alertMessage } from "./alerts"

export const generateRandomLogoForMenu = (e: HTMLImageElement) => {
  const random = new Date().getTime()
  e.src = `https://avatars.dicebear.com/api/miniavs/${random}.svg`  
  
  const randomToSixLengthHex = () => {
    return Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
  }

  e.style.border = `2px solid #${randomToSixLengthHex()}`
}

const outputHead = () => {
  const library = $selectCSSLibrary.value

  const selectedLibrary = () => {
    if(!library) {
      return ''
    }
    if(library === 'bootstrap') {
      return `
        <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" crossorigin="anonymous">
        <script src="/bootstrap/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
      `
    }
    if(library === 'bulma') {
      return `<link rel="stylesheet" href="/bulma/css/bulma.min.css" crossorigin="anonymous">`
    }
    if(library === 'materialize') {
      return `
        <link rel="stylesheet" href="/materialize/css/materialize.min.css" crossorigin="anonymous">
        <script src="/materialize/js/materialize.min.js" crossorigin="anonymous"></script>
      `
    }
    return
  }
  
  return `
    <head>
      <meta charset="utf-8" />
      <title>Your Hifu result!</title>
      <link rel="icon" type="image/webp" href="/thunder.webp" />
      ${selectedLibrary()}
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <style>${cssEditor.getValue()}</style>
    </head>
  `
}

export const generateOutput = () => {
  return `
  <!DOCTYPE html>
  <html>
    ${outputHead()}
    <body>
      ${htmlEditor.getValue()}
      <script>${jsEditor.getValue()}</script>
    </body></html>`
}

export const updateOutput = () => {
  $output.srcdoc = generateOutput()
}

export const copyToClipboard = () => {
  navigator.clipboard.writeText($output.srcdoc)
  alertMessage('Copied to clipboard', 'success', 2500)
}

export const resultToFullScreen = () => {
  $output.requestFullscreen()
}

export const newWindow = () => {
  const newWindow = window.open()
  newWindow?.document.write(generateOutput())
  newWindow?.document.close()
  alertMessage('Project opened in a new tab!', 'success', 2500)
}

export const saveInLocalStorage = () => {
  localStorage.setItem('html', htmlEditor.getValue())
  localStorage.setItem('css', cssEditor.getValue())
  localStorage.setItem('js', jsEditor.getValue())
  alertMessage('Project saved in local storage!', 'success', 2500)
}

export const loadFromLocalStorage = () => {
  const html = localStorage.getItem('html')
  const css = localStorage.getItem('css')
  const js = localStorage.getItem('js')

  if(html || css || js) {
    htmlEditor.setValue(html? html : initialValues.html)
    cssEditor.setValue(css? css : initialValues.css)
    jsEditor.setValue(js? js : initialValues.js)
    updateOutput()
    setTimeout(() => {
      alertMessage('Project loaded from local storage!', 'success', 2500)
    }, 2000)
    return
  }

  return
}

export const readConfigFromLocalStorage = () => {
  const cssLibrary = localStorage.getItem('css-library')
  const theme = localStorage.getItem('theme')

  if (cssLibrary) {
    const $selectCSSLibrary = document.querySelector<HTMLSelectElement>('#css-library')
    $selectCSSLibrary!.value = cssLibrary
  }

  if (theme) {
    const $selectTheme = document.querySelector<HTMLSelectElement>('#theme')
    $selectTheme!.value = theme
  }
}

export const shareToCoda = () => {
  const dataToSend = {
    html: htmlEditor.getValue(),
    css: cssEditor.getValue(),
    js: cssEditor.getValue(),
    authorId: "" 
  }

  fetch("https://coda.vercel.app/api/code/upload", {
    method: "POST",
    body: JSON.stringify(dataToSend)    
  })
}