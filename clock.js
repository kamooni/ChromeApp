const clockConatinaer = document.querySelector(".js-clock");
const clockTitle = clockConatinaer.querySelector(".js-title");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  //   innerText : 문자열 그대로를 리턴
  //   innerHtml : 태그를 적용시켜서 리턴 즉 문자열을 html로 인식하여 리턴
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${
    minutes < 10 ? `0${minutes}` : minutes
  } : ${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
