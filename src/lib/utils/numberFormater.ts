export const formatDigits = (num: number) => num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

export const setDate = o => {
  let c = 0
  const s = JSON.stringify(Object.values(o).sort())
  for (let i=0; i<s.length; i++) c += (s.charCodeAt(i) * (i+1))
  o.date = Math.floor(new Date().getTime()/100000)*100000 + (c & 99999)
}

export const toStringInMillions = (num:number):string => {
  if (num > 1e12) {
    return `${toMin3Digits(num / 1e12)} trillion`
  } else if (num > 1e9) {
    return `${toMin3Digits(num / 1e9)} billion`
  } else if (num > 1e6) {
    return `${toMin3Digits(num / 1e6)} million`
  } else if (num > 1e3) {
    return `${toMin3Digits(num / 1e3)} thousand`
  }
  return `${toMin3Digits(num)}`
}

export const toMin3Digits = (num:number): number => {
  if (!num) return 0
  const numDecimals = Math.max(2 - Math.floor(Math.log10(num)), 0)
  return parseFloat(num.toFixed(numDecimals))
}

export const toFixLengthString = (num: number, len: number): string => {
  const str = (num||0).toLocaleString()
  const missing = len = str.length
  return str + '                     '.slice(0, missing)
}