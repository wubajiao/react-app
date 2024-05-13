/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2024-05-13 16:01:16
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-05-13 16:01:55
 */
export function getUrlParameters() {
  const currentSearch = window.location.href.split('?')[1]
  if (!currentSearch) {
    return {}
  }
  const a = currentSearch.split('&')
  if (a === '') return {}
  const b = {}
  for (const element of a) {
    const p = element.split('=', 2)
    if (p.length !== 2) continue
    b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, ' '))
  }
  return b
}
