// date formatte 예시)2020-11-12
// DateSelect.vue 같은 함수 사용 변경시 같이 변경할것

export function getFormatDate (date) {
  let temp = new Date(date)
  let year = temp.getFullYear()
  let month = temp.getMonth() + 1
  month = month > 9 ? month : `0${month}`
  let day = temp.getDate()
  day = day > 9 ? day : `0${day}`
  return `${year}-${month}-${day}`
}

export function filterSortNo (list) {
  return list.slice().sort((a, b) => (a.noticeId < b.noticeId ? 1 : -1))
}

// 폰번호 나누기
export function phoneNum (num) {
  num = num.replace(/[-]/g, '')
  let cellPhone = {}
  cellPhone.first = num.substr(0, 3)
  cellPhone.sec = num.substr(3, 4)
  cellPhone.third = num.substr(7)
  return cellPhone
}

// 숫자3자리 comma
export function numberWithCommas (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function floatNumberWithCommas (x) {
  var parts = x.toString().split('.')
  return (
    parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
    (parts[1] ? '.' + parts[1] : '')
  )
}

// 숫자 문자열에서 문자열 제거 ######
export function stripCharFromNum (value, dec) {
  var result = ''
  for (var i = 0; i < value.length; i++) {
    var chr = value.charAt(i)
    switch (chr) {
      case '-':
        if (i === 0) result += '-'
        break
      case '.':
        if (dec && result.indexOf('.') < 0) result += '.'
        break
      default:
        if ('1234567890'.indexOf(chr) > -1) result += chr
    }
  }
  return result
}

export function stripComma (num) {
  // 콤마(,) 제거 #######
  return num.replace(/,/g, '')
}

// 숫자만
export function blockNotNumber (event) {
  let e = window.event || event
  if (window.event) {
    if (e.keyCode < 48 || e.keyCode > 57) {
      console.log('e.returnValue', e.returnValue)
      e.returnValue = false
    }
  } else {
    if (e.which !== 8 && (e.which < 48 || e.which > 57)) {
      e.preventDefault() // 8 : Back Space
    }
  }
}

export function zeroNumberFormat (num) {
  let zeroDel = /(^0+)/
  return num.toString().replace(zeroDel, '')
}
