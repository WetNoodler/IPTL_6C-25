let coded_msg = `SUU#B!Oo 5M^OD BToO)`
let arr = coded_msg.split("")
let conv_msg = ""

for(let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    conv_msg = conv_msg + arr[i]
  }
}

console.log("Recieved message: " + coded_msg + "\nDecoded message: " + conv_msg)