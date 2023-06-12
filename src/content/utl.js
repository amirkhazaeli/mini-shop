function formatNumber (num) {
  return Number(num.toFixed(3)).toLocaleString() + " تومان"
}
export default formatNumber;