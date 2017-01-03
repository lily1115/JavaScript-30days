let countdown;
  const buttons = document.querySelectorAll('button')
  const timeLeft = document.querySelector('.display__time-left')
  const endTime = document.querySelector('.display__end-time')

  function timer (seconds) {
    clearInterval(countdown)
    const now = Date.now()
    const then = now + seconds * 1000
    displayLeftTime(seconds)
    displayEndTime(then)

    countdown = setInterval(() => {
      const remainsLeft = Math.round((then - Date.now()) / 1000)
      if (remainsLeft < 0) {
        clearInterval(countdown)
        return
      };
      console.log(remainsLeft)
      displayLeftTime(remainsLeft)
    }, 1000)
  }
  function displayLeftTime (seconds) {
    const second = seconds % 60
    const min = Math.floor(seconds / 60)
    timeLeft.textContent = `${min}:${second < 10 ? '0' : ''}${second}`
  }
  function displayEndTime (time) {
    const timestamp = new Date(time)
    const hour = timestamp.getHours()
    const ajustedHour = hour > 12 ? hour - 12 : hour
    const min = timestamp.getMinutes()
    endTime.textContent = `${ajustedHour}:${min < 10 ? '0' : ''}${min}`
  }
  function setTime () {
    const seconds = this.dataset.time
    console.log(seconds)
    timer(seconds)
  }
  buttons.forEach(button => button.addEventListener('click', setTime))

  document.customForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const mins = (this.minutes.value) * 60
    console.log(mins)
    timer(mins)
    this.reset()
  })