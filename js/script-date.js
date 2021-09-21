const _MS_PER_DAY = 1000 * 60 * 60 * 24
const _DATE_FIX = new Date('2021-09-18')
const _DATE_TODAY = new Date()

function dateDiffInDays (a, b) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())

  return Math.floor((utc2 - utc1) / _MS_PER_DAY)
}

const d = new Date()
d.setDate(d.getDate() - dateDiffInDays(_DATE_FIX, _DATE_TODAY) % 2)

window.addEventListener('load', function () {
  document.querySelector('#globTitle').innerHTML += ' - ' + d.toLocaleDateString()
})
