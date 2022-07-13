const nums = document.querySelectorAll('.nums span'); //becomes a node list similar to an array. Allows forEach to be implemented.
const counter = document.querySelector(".counter")
const finalMessage = document.querySelector(".final")
const replay = document.querySelector("#replay")

runAnimation()

function resetDOM() {
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')
    
    nums.forEach((number) => {
        number.classList.value = ''
    })
    nums[0].classList.add('in')
}

function runAnimation() {
    nums.forEach((number, idx) => {
        const nextToLast = nums.length -1

        number.addEventListener('animationend', (e) => {
            if(e.animationName === 'goIn' && idx !== nextToLast) {
                number.classList.remove('in')
                number.classList.add('out')
            } else if (e.animationName === 'goOut' && number.nextElementSibling) {
                number.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })
    })
}

replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})