let todoList = [];
function add() {
  for (let i = 0; i < 1; i++) {
    let cv = prompt("Nhap cong vc muon them");
    todoList.push(cv);
  }
}
function disPlay() {
  if (todoList.length === 0) {
    alert("Mang rong!");
  } else {
    for (let i = 0; i < todoList.length; i++) {
      alert(todoList[i]);
    }
  }
}
function edit() {
  let hehe = prompt("Nhap cong viec can sua : ");
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i] === hehe) {
      let haha = prompt("Sua Thanh Gi: ");
      todoList[i] = haha;
    }
  }
}
function remove() {
  let hoho = prompt("Nhap cong viec muon xoa ");
  for (let i = todoList.length - 1; i >= 0; i--) {
    if (todoList[i] === hoho) {
      todoList.splice(i, 1);
    }
  }
}
let chon;
do {
  chon = prompt("Nhap : ");
  switch (chon) {
    case "add":
      add();
      break;
    case "show":
      disPlay();
      break;
    case "edit":
      edit();
      break;
    case "remove":
      remove();
      break;
    case "exit":
      alert("Thoát thành công!");
      break;
    default:
      alert("Nhập sai");
      break;
  }
} while (chon !== "exit");
