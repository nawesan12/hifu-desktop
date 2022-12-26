export const $ = (e: string) => document.querySelector<HTMLElement>(e)

export const $html = $('#html') as HTMLElement
export const $css = $('#css') as HTMLElement
export const $js = $('#js') as HTMLElement
export const $output = $('#output') as HTMLIFrameElement

export const $logoimg = $('#img-logo') as HTMLImageElement

export const $copyButton = $('#copy-to-clipboard') as HTMLButtonElement
export const $newTabButton = $('#new-tab') as HTMLButtonElement
export const $shareButton = $('#share') as HTMLButtonElement
export const $saveButton = $('#save') as HTMLButtonElement
export const $downloadButton = $('#download') as HTMLButtonElement
export const $settingsButton = $('#settings') as HTMLButtonElement
export const $fullscreenBtn = $('.fullscreen-btn') as HTMLButtonElement

export const $settingsMenu = $('#settings-menu') as HTMLDivElement

export const $selectTheme = $('#theme') as HTMLSelectElement
export const $selectCSSLibrary = $('#css-library') as HTMLSelectElement