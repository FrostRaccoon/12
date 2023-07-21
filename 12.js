/*
Задание:
 
Необходимо найти короткое видео в интернете, либо ссылку на него, 
либо можно его скачать.
https://webcode.tools/media/video.mp4
Необходимо создать видеоплеер, с кнопками play/pause, ползунком, который 
движется, когда мы просматриваем видео, по которому можно перемотать видео.
Также необходимо писать текущее время видео (должно меняться при просмотре).
Должен быть ползунок громкости видео.
*/

const videoEl = document.querySelector(`.video`);

const watchingTimeEl = document.getElementById(`waching_time`);
const allTimeEl = document.getElementById(`all_time`);

const playBtnEl = document.querySelector(`.play`);
const pauseBtnEl = document.querySelector(`.pause`);

const videoInputEl = document.getElementById(`video_time`);
const audioInputEl = document.getElementById(`volume`);

const videoTimeEl = document.querySelector(`.time`);

playBtnEl.addEventListener(`click`, () => {
  videoEl.play();
});

pauseBtnEl.addEventListener(`click`, () => {
  videoEl.pause();
});

videoEl.addEventListener(`timeupdate`, () => {
  videoInputEl.value = (videoEl.currentTime / videoEl.duration) * 100;
  watchingTimeEl.textContent = formatTime(videoEl.currentTime);
});

videoInputEl.addEventListener(`input`, () => {
  videoEl.currentTime = (videoInputEl.value / 100) * videoEl.duration;
});

audioInputEl.addEventListener(`input`, () => {
  videoEl.volume = audioInputEl.value / 100;
});

videoEl.addEventListener(`canplay`, () => {
  allTimeEl.textContent = formatTime(videoEl.duration);
});

const formatTime = (timeSec) => {
  const clearTimeSec = Math.floor(timeSec);
  const min = Math.floor(clearTimeSec / 60);
  const sec = clearTimeSec % 60;
  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
};
