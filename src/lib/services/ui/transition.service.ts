import {scrollTo} from '$lib/services/ui/scroll.service'

export const show = (id, delay) => {
  const duration = 1
  const el1 =document.getElementById(id) as HTMLElement
  el1!.style.visibility = 'visible'
  el1!.style.top = '0'
  el1!.style.opacity = '1'
  el1!.style.transition = `top ${duration}s ease ${delay}s, opacity ${duration}s linear ${delay}s`
  setTimeout(()=> scrollTo(el1, 1000), (duration+delay)*1000 + 100)
}
