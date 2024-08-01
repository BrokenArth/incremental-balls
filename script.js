// Ball count element
let ballCount = document.querySelector("#ballCount");

// "Get more" button
function getMoreBalls() {
  let currentCount = parseFloat(ballCount.textContent);
  ballCount.textContent =  currentCount + 1;
};

// Tab functionality
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);

    // Remove active class from all tabs and tab contents
    tabs.forEach(t => t.classList.remove("active"));
    tabContents.forEach(tabContent => {
      tabContent.classList.remove("active");
    });

    // Add active class to the clicked tab and its content
    tab.classList.add("active");
    target.classList.add("active");
  });
});

// Balls per second
let ballsPerSecond = 0;
let baseBPS = 0;
let multiBPS = 0;
let expBPS = 0;

function recalculateBPS() {
    ballsPerSecond = (baseBPS * (1 + multiBPS)) ** (1 + expBPS);
};

function ballsPerSecondFunction() {
  let currentCount = parseFloat(ballCount.textContent);
  ballCount.textContent = (currentCount + ballsPerSecond).toFixed(2);

  let perSecondCount = document.querySelector("#perSecondCount");
  perSecondCount.textContent = ballsPerSecond.toFixed(2);
};

function ballsPerSecondLoop() {
  setInterval(ballsPerSecondFunction, 1000);
};

window.onload = function() {
  ballsPerSecondLoop();
};

// Update the balls per second display


// Upgrades
function upgrade1() {
  let currentCount = parseFloat(ballCount.textContent);
  if (currentCount >= 10) { // only allows you to buy the upgrade if you have 10 or more balls

    ballCount.textContent = currentCount - 10; // subtracts 10 balls (the cost)
    baseBPS = baseBPS + 1; // increases base BPS by 1
    recalculateBPS(); // recalculates BPS

    document.getElementById("ballUpgrade1").onclick = null; // makes it so it can only be used once
    document.getElementById("ballUpgrade1").classList.add("disabled"); // add "disabled" class to the button
  };
};

function upgrade2() {
  let currentCount = parseFloat(ballCount.textContent);
  if (currentCount >= 25) {

    ballCount.textContent = currentCount - 25;
    baseBPS = baseBPS + 0.5;
    recalculateBPS();

    document.getElementById("ballUpgrade2").onclick = null;
    document.getElementById("ballUpgrade2").classList.add("disabled");
  };
};

function upgrade3() {
  let currentCount = parseFloat(ballCount.textContent);
  if (currentCount >= 50) {

    ballCount.textContent = currentCount - 50;
    multiBPS = multiBPS + 1;
    recalculateBPS();

    document.getElementById("ballUpgrade3").onclick = null;
    document.getElementById("ballUpgrade3").classList.add("disabled");
  };
};

function upgrade4() {
  let currentCount = parseFloat(ballCount.textContent);
  if (currentCount >= 100) {

    ballCount.textContent = currentCount - 100;
    baseBPS = baseBPS + 2;
    recalculateBPS();

    document.getElementById("ballUpgrade4").onclick = null;
    document.getElementById("ballUpgrade4").classList.add("disabled");
  };
};

function upgrade5() {
  let currentCount = parseFloat(ballCount.textContent);
  if (currentCount >= 250) {

    ballCount.textContent = currentCount - 250;
    multiBPS = multiBPS + 1.5;
    recalculateBPS();

    document.getElementById("ballUpgrade5").onclick = null;
    document.getElementById("ballUpgrade5").classList.add("disabled");
  };
};

function upgrade6() {
  let currentCount = parseFloat(ballCount.textContent);
  if (currentCount >= 350) {

    ballCount.textContent = currentCount - 350;
    expBPS = expBPS + 0.1;
    recalculateBPS();

    document.getElementById("ballUpgrade6").onclick = null;
    document.getElementById("ballUpgrade6").classList.add("disabled");
  };
};

function upgrade7() {
  let currentCount = parseFloat(ballCount.textContent);
  if (currentCount >= 500) {

    ballCount.textContent = currentCount - 500;
    baseBPS = baseBPS + 2;
    recalculateBPS();

    document.getElementById("ballUpgrade7").onclick = null;
    document.getElementById("ballUpgrade7").classList.add("disabled");
  };
};

function upgrade8() {
  let currentCount = parseFloat(ballCount.textContent);
  if (currentCount >= 750) {

    ballCount.textContent = currentCount - 750;
    multiBPS = multiBPS + 1.5;
    recalculateBPS();

    document.getElementById("ballUpgrade8").onclick = null;
    document.getElementById("ballUpgrade8").classList.add("disabled");
  };
};

function upgrade9() {
  let currentCount = parseFloat(ballCount.textContent);
  if (currentCount >= 1000) {

    ballCount.textContent = currentCount - 1000;
    baseBPS = baseBPS + 3;
    recalculateBPS();

    document.getElementById("ballUpgrade9").onclick = null;
    document.getElementById("ballUpgrade9").classList.add("disabled");
  };
};

function upgrade10() {
  let currentCount = parseFloat(ballCount.textContent);
  if (currentCount >= 2500) {

    ballCount.textContent = currentCount - 2500;
    expBPS = expBPS + 0.1;
    recalculateBPS();

    document.getElementById("ballUpgrade10").onclick = null;
    document.getElementById("ballUpgrade10").classList.add("disabled");
  };
};

function upgrade11() {
  let currentCount = parseFloat(ballCount.textContent);
  if (currentCount >= 3500) {

    ballCount.textContent = currentCount - 3500;
    multiBPS = multiBPS + 2;
    recalculateBPS();

    document.getElementById("ballUpgrade11").onclick = null;
    document.getElementById("ballUpgrade11").classList.add("disabled");
  };
};

function upgrade12() {
  let currentCount = parseFloat(ballCount.textContent);
  if (currentCount >= 10000) {

    ballCount.textContent = currentCount - 10000;
    baseBPS = baseBPS + 500000;
    recalculateBPS();

    document.getElementById("ballUpgrade12").onclick = null;
    document.getElementById("ballUpgrade12").classList.add("disabled");
  };
};

// Settings

// Kill yourself
function refreshPage() {
    location.reload();
}