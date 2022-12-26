import { $ } from "./elements"

export default (lapse: number) => {
  const hifu = $("#hifu")
  const loadingScreen = $(".loading-screen") as HTMLDivElement
  const loadingScreenImg = $(".loading-screen-img") as HTMLImageElement
  const random: number = new Date().getTime()

  loadingScreenImg.src = `https://avatars.dicebear.com/api/big-smile/${random}.svg`

  setTimeout(() => {
    hifu?.removeChild(loadingScreen)      
  }, lapse)
}