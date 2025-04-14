let price_in_peso = 4000
let price_in_dollar = 100

if (price_in_peso*0.02 <= price_in_dollar) {
  console.log("Purchase in peso\n$" + (price_in_peso*0.02) + " or P" + price_in_peso)
} else {
  console.log("Purchase in dollar\n$" + price_in_dollar + " or P" + (price_in_dollar/0.02))
}