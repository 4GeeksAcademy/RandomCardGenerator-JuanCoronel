window.onload = function() {
  console.log("hellou");

  let iconsList = [
    "bi-suit-heart-fill text-danger",
    "bi-suit-diamond-fill text-danger",
    "bi-suit-club-fill text-black",
    "bi-suit-spade-fill text-black"
  ];

  let numberRandomList = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "A",
    "K"
  ];

  let iconRandom = Math.floor(Math.random() * iconsList.length);
  let numberRandom = Math.floor(Math.random() * numberRandomList.length);

  // let topIcon1 = document.querySelectorAll("i")[0];
  // topIcon1.classList.add(iconsList[iconRandom]);
  // // console.log(">>>", topIcon1[1]);
  // // console.log(">>>", topIcon1[2]);

  // let topIcon2 = document.querySelectorAll("i")[1];
  // topIcon2.classList.add(numberRandomList[numberRandom]);
  // console.log(">>>", topIcon2[1]);
  // console.log(">>>", topIcon2[2]);

  // console.log(iconRandom);
  // console.log(numberRandom);

  document.getElementById("icon").className = iconsList[iconRandom];
  document.getElementById("icon2").className = iconsList[iconRandom];

  let centerIcon = document.getElementById("center-icon");
  centerIcon.innerHTML = numberRandomList[numberRandom];
};

document.getElementById("btnRefresh").addEventListener("click", function() {
  location.reload();
});
