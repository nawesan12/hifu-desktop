import { editor } from 'monaco-editor'

import { $selectCSSLibrary, $selectTheme, $settingsMenu } from "./elements"
import { updateOutput } from './utils'

export const openSettings = () => {
  $settingsMenu.classList.toggle('hidden')
}

export const changeTheme = (theme: string) => {
  editor.setTheme(theme)
  saveConfigInLocalStorage()
}

export const toggleTheme = () => {
  if($selectTheme.value === 'vs-dark') {
    changeTheme("vs-light")
    return
  }
  if ($selectTheme.value === 'vs-light') {
    changeTheme("vs-dark")
    return
  }
  return
}

export const saveConfigInLocalStorage = () => {
  localStorage.setItem('css-library', $selectCSSLibrary.value)
  localStorage.setItem('theme', $selectTheme.value)
}

export const loadConfigFromLocalStorage = () => {
  if (localStorage.getItem('css-library')) {
    $selectCSSLibrary.value = localStorage.getItem('css-library')!
    updateOutput()
  }
  if (localStorage.getItem('theme')) {
    $selectTheme.value = localStorage.getItem('theme')!
    changeTheme($selectTheme.value)
  }
}