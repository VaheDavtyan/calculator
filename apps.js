let arr = document.querySelectorAll(".tiv1 , .tiv0 , .tiv3" )
let arrMath = ["*", "+", "/", "-" ,"%"]

for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", function () {
        let val = this.value
        if (arrMath.includes(val)) {
            let text = document.getElementById("inp").value
            let endLetter = text.slice(text.length - 1);
            if (arrMath.includes(endLetter)) {
                document.getElementById("inp").value += "";

            }
            else {
                document.getElementById("inp").value += val
            }
        }
        else {
            document.getElementById("inp").value += val
            
        }
      
    })


}
document.getElementById("ac").addEventListener("click", function () {
    document.getElementById("inp").value = "";
})
document.getElementById("bace-space").addEventListener("click", function () {
    const text = document.getElementById("inp").value;
    document.getElementById("inp").value = text.slice(0, text.length - 1)
})
document.getElementById("havasar").addEventListener("click", function () {
    const text = document.getElementById("inp").value;
    document.getElementById("inp").value = eval(text);
})