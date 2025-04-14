let coded_msg = "SUBO MO TO"
let arr = coded_msg.split("")
let conv_msg = ""

for(let i = 0; i < arr.length; i++) {
    conv_msg = conv_msg + arr[i] + String.fromCharCode(Math.floor(Math.random() * 93) + 33)
}

console.log(conv_msg)