const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v']

function findme(target, start, end) {
  const middle = Math.floor((start + end) / 2)
  console.log(middle)
  if (target === alpha[middle]) {
    return `found it at index ${middle}`
  }
  if (target < alpha[middle]) {
    return findme(target, start, middle - 1)
  }

  if (target > alpha[middle]) {
    return findme(target, middle + 1, end)
  }
}

console.log(findme('a', 0, 19))
