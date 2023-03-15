const clock = document.querySelector('#clock')
let decorator = false
setInterval(() => {
    const date = new Date()
    let hour = 24 - date.getHours()
    let minutes = 59 - date.getMinutes()
    if (hour.toString().length == 1) hour = `0${hour.toString()}`
    if (hour.toString().length == 0) hour = `00`
    if (minutes.toString().length == 1) minutes = `0${minutes.toString()}`
    if (minutes.toString().length == 0) minutes = `00`
    if (decorator) clock.textContent = `${hour}:${minutes}`
    else clock.textContent = `${hour} ${minutes}`
    decorator = !decorator
}, 1000)

