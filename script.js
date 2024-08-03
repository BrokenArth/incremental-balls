// Ball count element
let ballCountElement = document.querySelector("#ballCount");

// Store the actual values (the displayed ones will be formatted)
let ballCount = 0;
let ballsPerSecond = 0;
let baseBPS = 0;
let multiBPS = 0;
let expBPS = 0;

// Intermediate upgrade effect stuff
let iU1_6_11 = 1; // iU1, iU6 and iU11 effects (they do the same thing)
let iU1_6_11_bought = 0; // aU2 and later stuff

let iU2 = 0;
let iU2_purchased = false;

let iU3 = 1;

let iU5 = 0;
let iU5_purchased = false;

let iU7 = 0;
let iU7_purchased = false;

let iU9 = 0;
let iU9_purchased = false;

let iU10 = 1;
let iU10_purchased = false;

// Advanced upgrade effect stuff
let aU1 = 1;

let aU3 = 0;
let aU3_purchased = false;

let aU4 = 1;

  // track number of upgrades bought
let baseUpgradesBought = 0; // base value
let upgradesBought = 0; // this is the value after upgrades are applied to it


// MILESTONE STUFF

  // track if milestones tab is unlocked 
let milestonesUnlocked = false;

  // track number of milestones unlocked
let baseMilestonesGot = 0;
let milestonesGot = 0;

  // milestone effects
let milestone1_unlocked = false;
let milestone1_triggered = false;
function milestone1_effect() {
  document.querySelector('.intermediateUpgradeButtons#intermediateUpgrade9').classList.remove('iU-hidden'); // milestone reward
  document.querySelector('.intermediateUpgradeButtons#intermediateUpgrade10').classList.remove('iU-hidden'); // milestone reward
  document.querySelector('.intermediateUpgradeButtons#intermediateUpgrade11').classList.remove('iU-hidden'); // milestone reward
  document.querySelector('.intermediateUpgradeButtons#intermediateUpgrade12').classList.remove('iU-hidden'); // milestone reward

  baseMilestonesGot += 1; // increase number of milestones achieved

  document.querySelector('.milestonesCapsule#milestoneCapsule1').classList.add('milestoneAchieved'); // add "milestoneAchieved" class to it
}

let milestone2_unlocked = false;
let milestone2_triggered = false;
function milestone2_effect() {
  document.getElementById("buyablesUpgradesTab").classList.remove("hiddenUpgradesTab");
  document.querySelector(".upgradesTabButtonsSeparator").classList.remove("inactive");

  baseMilestonesGot += 1;

  document.querySelector('.milestonesCapsule#milestoneCapsule2').classList.add('milestoneAchieved');
}

let milestone3_unlocked = false;
let milestone3_triggered = false;
function milestone3_effect() {
  ballCount += 4e9;

  baseMilestonesGot += 1;

  document.querySelector('.milestonesCapsule#milestoneCapsule3').classList.add('milestoneAchieved');
}

let milestone4_unlocked = false;
let milestone4_triggered = false;
function milestone4_effect() {
  ballCount += 8e11;

  baseMilestonesGot += 1;

  document.querySelector('.milestonesCapsule#milestoneCapsule4').classList.add('milestoneAchieved');
}

// Number formatting function
function formatNumber(num) {
  if (num < 1000) return num.toFixed(2); // Less than 1,000, show full number with two decimals
  if (num < 1e6) return (num / 1e3).toFixed(2) + "k"; // Thousands
  if (num < 1e9) return (num / 1e6).toFixed(2) + "M"; // Millions
  if (num < 1e12) return (num / 1e9).toFixed(2) + "B"; // Billions
  if (num < 1e15) return (num / 1e12).toFixed(2) + "T"; // Trillions
  if (num < 1e18) return (num / 1e15).toFixed(2) + "Qa"; // Quadrillions
  if (num < 1e21) return (num / 1e18).toFixed(2) + "Qi"; // Quintillions
  if (num < 1e24) return (num / 1e21).toFixed(2) + "Sx"; // Sextillions
  if (num < 1e27) return (num / 1e24).toFixed(2) + "Sp"; // Septillions
  if (num < 1e30) return (num / 1e27).toFixed(2) + "Oc"; // Octillions
  if (num < 1e33) return (num / 1e30).toFixed(2) + "No"; // Nonillions
  if (num < 1e36) return (num / 1e33).toFixed(2) + "Dc"; // Decillions
  // For numbers larger than 1e36:
  let [coefficient, exponent] = num.toExponential(2).split('e');
  exponent = parseInt(exponent).toString(); // Remove '+' from exponent if present
  return `${parseFloat(coefficient).toFixed(2)}e${exponent}`;
}

// "Get more" button
function getMoreBalls() {
  ballCount += 1;
  updateBallCountDisplay();
}

// Universal tab functionality
const universalTabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

universalTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);

    // Remove active class from all tabs and tab contents
    universalTabs.forEach(t => t.classList.remove("active"));
    tabContents.forEach(tabContent => {
      tabContent.classList.remove("active");
    });

    // Add active class to the clicked tab and its content
    tab.classList.add("active");
    target.classList.add("active");
  });
});

// Upgrade tabs functionality
const upgradesTabs = document.querySelectorAll("[data-upgrades-target]");
const upgradesTabContents = document.querySelectorAll("[data-upgrades-content]");

upgradesTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.upgradesTarget);

    // Remove active class from all tabs and tab contents
    upgradesTabs.forEach(t => t.classList.remove("active"));
    upgradesTabContents.forEach(tabContent => {
      tabContent.classList.remove("active");
    });

    // Add active class to the clicked tab and its content
    tab.classList.add("active");
    target.classList.add("active");
  });
});

// Update the DISPLAYED ball count
function updateBallCountDisplay() {
    ballCountElement.textContent = formatNumber(ballCount);
  }

// Update values and their displayed values
function updateValues() {

  ballCount += ballsPerSecond; // update the actual ball count
  updateBallCountDisplay(); // update the displayed ball count

  // Upgrades bought stuff
  upgradesBought = baseUpgradesBought * aU1;

  // iU2 upgrade stuff
  if (iU2_purchased) {
    iU2 = Math.floor(Math.log10(1 + ballCount));
  }

  // iU5 upgrade stuff
  if (iU5_purchased) {
    iU5 = Math.floor(Math.log10(1 + ballCount));
  }

  // iU7 upgrade stuff
  if (iU7_purchased) {
    iU7 = upgradesBought * 0.01;
  }

  // iU9 upgrade stuff
  if (iU9_purchased) {
    iU9 = upgradesBought / 4;
  }

  // iU10 upgrade stuff
  if (iU10_purchased) {
    iU10 = 1 + (milestonesGot / 2);
  }

  // au3 upgrade stuff
  if (aU3_purchased) {
    aU3 = Math.floor(2 * Math.log2(1 + multiBPS));
  }

  // MILESTONE UPDATE STUFF
    // milestones bought
  milestonesGot = baseMilestonesGot * aU4;

  if (milestonesUnlocked == true) {

    if (ballCount >= 1e6 && milestone1_triggered == false) {
      milestone1_effect();
      milestone1_triggered = true;
    }

    if (ballCount >= 2.5e8 && milestone2_triggered == false) {
      milestone2_effect();
      milestone2_triggered = true;
    }

    if (ballCount >= 1e12 && milestone3_triggered == false) {
      milestone3_effect();
      milestone3_triggered = true;
    }

    if (ballCount >= 1e15 && milestone4_triggered == false) {
      milestone4_effect();
      milestone4_triggered = true;
    }
  }

  // Recalculate BPS
  ballsPerSecond = ((((baseBPS + iU2) * iU3) * iU10) /* <- base */ * (1 + (multiBPS + iU5 + iU9 + aU3) * iU1_6_11) /* <- multi */ ) ** (1 + (expBPS + iU7)) /* <- exp */;

  let perSecondCount1 = document.querySelector(".perSecondCount-1");
  perSecondCount1.textContent = formatNumber(ballsPerSecond); // displayed value update
  
  // STATS
    // stats variables
  let statsBallsPerSecond = ballsPerSecond;
  let statsBaseBPS = ((baseBPS + iU2) * iU3) * iU10;
  let statsMultiBPS = (multiBPS + iU5 + iU9 + aU3) * iU1_6_11;
  let statsExpBPS = (expBPS + iU7);
  let statsUpgradesBought = upgradesBought;
  let statsBaseUpgradesBought = baseUpgradesBought;
  let statsMilestonesGot = milestonesGot;
  let statsBaseMilestonesGot = baseMilestonesGot;

  let perSecondCount2 = document.querySelector(".perSecondCount-2");
  perSecondCount2.textContent = formatNumber(statsBallsPerSecond); // displayed value update

  let baseCount = document.querySelector(".baseCount");
  baseCount.textContent = formatNumber(statsBaseBPS); // displayed value update

  let multiCount = document.querySelector(".multiCount");
  multiCount.textContent = formatNumber(statsMultiBPS); // displayed value update

  let expCount = document.querySelector(".expCount");
  expCount.textContent = formatNumber(statsExpBPS); // displayed value update

  let upgCount = document.querySelector(".upgCount");
  upgCount.textContent = formatNumber(statsUpgradesBought); // displayed value update

  let baseUpgCount = document.querySelector(".baseUpgCount");
  baseUpgCount.textContent = formatNumber(statsBaseUpgradesBought); // displayed value update

  let milestonesCount = document.querySelector(".milestonesCount");
  milestonesCount.textContent = formatNumber(statsMilestonesGot); // displayed value update

  let baseMilestonesCount = document.querySelector(".baseMilestonesCount");
  baseMilestonesCount.textContent = formatNumber(statsBaseMilestonesGot); // displayed value update
}

function gameLoop() {
  setInterval(updateValues, 1000);
}

window.onload = function() {
  gameLoop();
};

// BASIC UPGRADES
function upgrade1() {
  if (ballCount >= 10) {
    ballCount -= 10; // update actual ball count
    baseBPS += 1;
    baseUpgradesBought += 1;

    document.getElementById("upgrade1").onclick = null;
    document.getElementById("upgrade1").classList.add("disabled");

    updateBallCountDisplay(); // update displayed ball count
  }
}

function upgrade2() {
  if (ballCount >= 25) {
    ballCount -= 25;
    baseBPS += 0.5;
    baseUpgradesBought += 1;

    document.getElementById("upgrade2").onclick = null;
    document.getElementById("upgrade2").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function upgrade3() {
  if (ballCount >= 50) {
    ballCount -= 50;
    multiBPS += 1;
    baseUpgradesBought += 1;

    document.getElementById("upgrade3").onclick = null;
    document.getElementById("upgrade3").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function upgrade4() {
  if (ballCount >= 100) {
    ballCount -= 100;
    baseBPS += 2;
    baseUpgradesBought += 1;

    document.getElementById("upgrade4").onclick = null;
    document.getElementById("upgrade4").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function upgrade5() {
  if (ballCount >= 250) {
    ballCount -= 250;
    multiBPS += 1.5;
    baseUpgradesBought += 1;

    document.getElementById("upgrade5").onclick = null;
    document.getElementById("upgrade5").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function upgrade6() {
  if (ballCount >= 350) {
    ballCount -= 350;
    expBPS += 0.1;
    baseUpgradesBought += 1;

    document.getElementById("upgrade6").onclick = null;
    document.getElementById("upgrade6").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function upgrade7() {
  if (ballCount >= 500) {
    ballCount -= 500;
    baseBPS += 2;
    baseUpgradesBought += 1;

    document.getElementById("upgrade7").onclick = null;
    document.getElementById("upgrade7").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function upgrade8() {
  if (ballCount >= 750) {
    ballCount -= 750;
    multiBPS += 1.5;
    baseUpgradesBought += 1;

    document.getElementById("upgrade8").onclick = null;
    document.getElementById("upgrade8").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function upgrade9() {
  if (ballCount >= 1000) {
    ballCount -= 1000;
    baseBPS += 3;
    baseUpgradesBought += 1;

    document.getElementById("upgrade9").onclick = null;
    document.getElementById("upgrade9").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function upgrade10() {
  if (ballCount >= 2500) {
    ballCount -= 2500;
    expBPS += 0.1;
    baseUpgradesBought += 1;

    document.getElementById("upgrade10").onclick = null;
    document.getElementById("upgrade10").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function upgrade11() {
  if (ballCount >= 3500) {
    ballCount -= 3500;
    multiBPS += 2;
    baseUpgradesBought += 1;

    document.getElementById("upgrade11").onclick = null;
    document.getElementById("upgrade11").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function upgrade12() { // this one unlocks Intermediate Upgrades
  if (ballCount >= 10000) {
    ballCount -= 10000;
    baseUpgradesBought += 1;

    document.getElementById("upgrade12").onclick = null;
    document.getElementById("upgrade12").classList.add("disabled");

    updateBallCountDisplay();

    // Unlock Upgrades Tab Buttons
    document.querySelectorAll('.upgradesTabButtons').forEach(button => {
      button.classList.add('activeUpgradeTab');
    });
  }
}

// INTERMEDIATE UPGRADES
function intermediateUpgrade1() {
  if (ballCount >= 2500) {
    ballCount -= 2500;
    iU1_6_11 *= 1.5;
    iU1_6_11_bought += 1; // for aU2 and later stuff
    baseUpgradesBought += 1;

    document.getElementById("intermediateUpgrade1").onclick = null;
    document.getElementById("intermediateUpgrade1").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function intermediateUpgrade2() {
  if (ballCount >= 25000) {
    ballCount -= 25000;
    baseUpgradesBought += 1;

    document.getElementById("intermediateUpgrade2").onclick = null;
    document.getElementById("intermediateUpgrade2").classList.add("disabled");

    iU2_purchased = true;

    updateBallCountDisplay();
  }
}

function intermediateUpgrade3() {
  if (ballCount >= 35000) {
    ballCount -= 35000;
    iU3 *= 2;
    baseUpgradesBought += 1;

    document.getElementById("intermediateUpgrade3").onclick = null;
    document.getElementById("intermediateUpgrade3").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function intermediateUpgrade4() {
  if (ballCount >= 100000) {
    ballCount -= 100000;
    expBPS += 0.1;
    baseUpgradesBought += 1;

    document.getElementById("intermediateUpgrade4").onclick = null;
    document.getElementById("intermediateUpgrade4").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function intermediateUpgrade5() {
  if (ballCount >= 300000) {
    ballCount -= 300000;
    baseUpgradesBought += 1;

    document.getElementById("intermediateUpgrade5").onclick = null;
    document.getElementById("intermediateUpgrade5").classList.add("disabled");

    iU5_purchased = true;

    updateBallCountDisplay();
  }
}

function intermediateUpgrade6() {
  if (ballCount >= 500000) {
    ballCount -= 500000;
    iU1_6_11 *= 1.5;
    iU1_6_11_bought += 1; // for aU2 and later stuff
    baseUpgradesBought += 1;

    document.getElementById("intermediateUpgrade6").onclick = null;
    document.getElementById("intermediateUpgrade6").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function intermediateUpgrade7() {
  if (ballCount >= 750000) {
    ballCount -= 750000;
    baseUpgradesBought += 1;

    document.getElementById("intermediateUpgrade7").onclick = null;
    document.getElementById("intermediateUpgrade7").classList.add("disabled");

    iU7_purchased = true;

    updateBallCountDisplay();
  }
}

function intermediateUpgrade8() {
  if (ballCount >= 2.5e6) {
    ballCount -= 2.5e6;
    baseUpgradesBought += 1;

    document.getElementById("intermediateUpgrade8").onclick = null;
    document.getElementById("intermediateUpgrade8").classList.add("disabled");

    milestonesUnlocked = true;
    
    // Unlock Milestones tab button
    document.getElementById('milestonesTab').classList.add('activeTab');

    updateBallCountDisplay();
  }
}

function intermediateUpgrade9() {
  if (ballCount >= 1.5e6) {
    ballCount -= 1.5e6;
    baseUpgradesBought += 1;

    document.getElementById("intermediateUpgrade9").onclick = null;
    document.getElementById("intermediateUpgrade9").classList.add("disabled");

    iU9_purchased = true;

    updateBallCountDisplay();
  }
}

function intermediateUpgrade10() {
  if (ballCount >= 4e6) {
    ballCount -= 4e6;
    baseUpgradesBought += 1;

    document.getElementById("intermediateUpgrade10").onclick = null;
    document.getElementById("intermediateUpgrade10").classList.add("disabled");

    iU10_purchased = true;

    updateBallCountDisplay();
  }
}

function intermediateUpgrade11() {
  if (ballCount >= 1.2e7) {
    ballCount -= 1.2e7;
    iU1_6_11 *= 1.5;
    iU1_6_11_bought += 1; // for aU2 and later stuff
    baseUpgradesBought += 1;

    document.getElementById("intermediateUpgrade11").onclick = null;
    document.getElementById("intermediateUpgrade11").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function intermediateUpgrade12() {
  if (ballCount >= 5e7) {
    ballCount -= 5e7;
    baseUpgradesBought += 1;

    document.getElementById("advancedUpgradesTab").classList.remove("hiddenUpgradesTab")

    document.getElementById("intermediateUpgrade12").onclick = null;
    document.getElementById("intermediateUpgrade12").classList.add("disabled");

    updateBallCountDisplay();
  }
}

// ADVANCED UPGRADES
function advancedUpgrade1() {
  if (ballCount >= 1e7) {
    ballCount -= 1e7;
    aU1 *= 1.2;
    baseUpgradesBought += 1;

    document.getElementById("advancedUpgrade1").onclick = null;
    document.getElementById("advancedUpgrade1").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function advancedUpgrade2() {
  if (ballCount >= 7.5e7) {
    ballCount -= 7.5e7;
    iU1_6_11 *= 1.2 ** iU1_6_11_bought; // not really doing what the upgrade is saying but it works for now ig -[!] the effect is theoretically 1.8 now[!]-
    baseUpgradesBought += 1;

    document.getElementById("advancedUpgrade2").onclick = null;
    document.getElementById("advancedUpgrade2").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function advancedUpgrade3() {
  if (ballCount >= 6e8) {
    ballCount -= 6e8;
    baseUpgradesBought += 1;

    document.getElementById("advancedUpgrade3").onclick = null;
    document.getElementById("advancedUpgrade3").classList.add("disabled");

    aU3_purchased = true;

    updateBallCountDisplay();
  }
}

function advancedUpgrade4() {
  if (ballCount >= 1.2e9) {
    ballCount -= 1.2e9;
    aU4 *= 1.5;
    baseUpgradesBought += 1;

    document.getElementById("advancedUpgrade4").onclick = null;
    document.getElementById("advancedUpgrade4").classList.add("disabled");

    updateBallCountDisplay();
  }
}

// BUYABLE UPGRADES

  // bU1 variables
let bU1_cost = 1e7;
let bU1_count = 0;
let bU1_limit = 5;

function buyablesUpgrade1() {
  if (ballCount >= bU1_cost * (5 ** bU1_count) && bU1_count < bU1_limit) {
    ballCount -= bU1_cost * (5 ** bU1_count); // so the cost increases by 5 every time
    baseBPS += 5;
    upgradesBought += 0.2;

    // updates
    bU1_count += 1;
    document.getElementById("buyableCost1").textContent = formatNumber(bU1_cost * (5 ** bU1_count));
    document.getElementById("buyableCount1").textContent = (bU1_count).toFixed(0);

    if (bU1_count == bU1_limit) {
      document.getElementById("buyablesUpgrade1").onclick = null;
      document.getElementById("buyablesUpgrade1").classList.add("disabled");
    }

    updateBallCountDisplay();
  }
}

// Settings

// Kill yourself
function refreshPage() {
  location.reload();
}
