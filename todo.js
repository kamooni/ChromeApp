const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode.parentNode;
  const delLiId = parseInt(li.id);
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== delLiId;
  });
  //   여기서 toDos는 원래 const여서 cleanToDos로 바꿀수 없었다
  //   그래서 toDos를 let으로 변경해주었다.
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function paintToDo(text) {
  // createElement : js에서 html 태그요소들 생성
  const li = document.createElement("li");
  const div = document.createElement("div");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  //xx.appendChild => xx'Elements 요소 안에 다음을 넣겠다.
  div.appendChild(delBtn);
  div.appendChild(span);
  li.appendChild(div);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  //  여기서 push와 localStorage에 저장하는 함수 순서 바뀌면안됨
  //  자바 스크립트는 local storage에 있는 모든 데이터를 string으로 저장하려고함
  //  따라서 위에서 setItem으로 저장할때 object toDoObj를 string으로 바꿔줘야함
  //  ==>   JSON.stringfy()사용
  //  ==> JSON (Javascript Object Notation)
  toDos.push(toDoObj);
  saveToDos();
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
