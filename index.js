var kittens = ['Milo', 'Otis', 'Garfield']
var name = "Ralph"
function kittens() {
  return kittens
}
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
