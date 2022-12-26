import { $ } from "./elements"

export const alertMessage = (text: string, type: string, lapse: number) => {
  const hifu = $("#hifu")

  const alert = document.createElement("section")
  alert.className = `alert ${type}`
  alert.innerHTML = `
    <div class="alert-content">
      <h4>${text}</h4>
      <img src="/assets/${type}.webp" /> 
    </div>
  `
  
  hifu?.appendChild(alert)

  setTimeout(() => {
    hifu?.removeChild(alert)
  }, lapse)
}