const text = document.getElementById('text');
const tries = document.getElementById('tries');
let total = 0;
let choiceA;
let choiceB;

function rng() {
    return Math.floor(Math.random() * 101);
}

function startUp() {
    total = 0;
    test();
}

function test() {
    fetch('https://rps101.pythonanywhere.com/api/v1/objects/all')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.clear();
        console.log(data);
        text.textContent = data[rng()];

        if (text.textContent != "Woman") {
            tries.style.color = "#fff";
            total++;
            tries.textContent = total;
            test();
        } else {
            tries.style.color = "lime";
        }
            
        // for(let x of data){
        //     text.textContent += x + '\n';
        // }
    })
}