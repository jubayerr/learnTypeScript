// Form
const form = document.querySelector('.new-item-form') as HTMLFormElement
// Input
const type = document.querySelector('#type') as HTMLInputElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement


console.log(form.children);


form.addEventListener('submit', (e: Event) => {
e.preventDefault
console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
)
})