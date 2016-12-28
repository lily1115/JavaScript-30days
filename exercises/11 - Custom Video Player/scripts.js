const player = document.querySelector('.player')
  const video = player.querySelector('.viewer')
  const progress = player.querySelector('.progress')
  const progressBar = player.querySelector('.progress__filled')
  const toggle = player.querySelector('.toggle')
  const ranges = player.querySelectorAll('.player__slider')
  const skipButtons = player.querySelectorAll('[data-skip]');

 
  function togglePlay() {
    const way = video.paused ? 'play' : 'pause';
    video[way]();
  }

  function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
  }

  function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
  }

  function skip () {
    video.currentTime += parseFloat(this.dataset.skip)
    console.log(video.currentTime)
  }

  function handleChangeUpdate () {
    video[this.name] = this.value
    console.log(video[this.name])
  }
  function scrub (e) {
    const scrubTime = (e.offsetX / progress.offsetWidth ) * video.duration
    video.currentTime = scrubTime
  }
  /* Hook up the event listners */
  video.addEventListener('click', togglePlay)
  video.addEventListener('play', updateButton)
  video.addEventListener('pause', updateButton)
  video.addEventListener('timeupdate', handleProgress)

  toggle.addEventListener('click', togglePlay)
  skipButtons.forEach(btn => btn.addEventListener('click', skip))
  ranges.forEach(range => range.addEventListener('click', handleChangeUpdate));
  ranges.forEach(range => range.addEventListener('mousemove', handleChangeUpdate));

  let mousedown = false
  progress.addEventListener('click', scrub)
  progress.addEventListener('mousedown', () => mousedown = true)
  progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
  progress.addEventListener('mouseup', () => mousedown = false)