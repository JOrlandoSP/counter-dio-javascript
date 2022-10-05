let numberEl = document.getElementById("currentNumber")
let increaseEl = document.getElementById("increaseBtn")
let decreaseEl = document.getElementById("decreaseBtn")

let counter = 0

increaseEl.addEventListener("click", () => {
	counter += 1;
	setter()
})

decreaseEl.addEventListener("click", () => {
	counter -= 1; 
	setter()	
})

function setter() {
	numberEl.innerHTML = counter;
}
