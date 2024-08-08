// Store the actual values (the displayed ones will be formatted)
let tickspeed = 1000; // lower = better
let ballCount = 0;

let ballsPerSecond = 0;
let baseBPS = 0;
let baseBPSfinal = 0;
let multiBPS = 0;
let multiBPSfinal = 0;
let expBPS = 0;
let expBPSfinal = 0;

let baseXPPS = 1;
let baseXPPSfinal = 0;
let multiXPPS = 0;
let multiXPPSfinal = 0;
let expXPPS = 0;
let expXPPSfinal = 0;

// UPGRADE STUFF
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
let aU1_7 = 1;

let aU3 = 0;
let aU3_purchased = false;

let aU4_9 = 1;

let aU5 = 1;
let aU5_purchased = false;

let aU8 = 1;
let aU8_purchased = false;

let aU10 = 1;

let aU11 = 1;
let aU11_purchased = false;

// Expert upgrade effect stuff
let eU1 = 1;

let eU2 = 1;

let eU4 = 1;
let eU4_purchased = false;

let eU5 = 1;
let eU5_purchased = false;

let eU8 = 0;
let eU8_purchased = false;

let eU9 = 1;

let eU11 = 1;

// Rebuyable upgrade effect stuff
let bU4 = 1;

let bU5 = 1;

let bU6 = 1;

let bU7 = 1;

let bU8 = 1;

let bU9 = 1;

// Track number of upgrades bought
let upgradesBought = 0; // base value
let upgradesBoughtFinal = 0; // this is the value after upgrades are applied to it


// MILESTONE STUFF
// track if milestones tab is unlocked 
let milestonesUnlocked = false;

// Page functionality
const milestonesPages = document.querySelectorAll('.milestonesOuterGroup');
const milestonesLeftArrows = document.querySelectorAll('.milestonesLeftArrow');
const milestonesRightArrows = document.querySelectorAll('.milestonesRightArrow');
let milestonesCurrentPage = 0;

  // hide all pages initially except the first one
milestonesPages.forEach((page, index) => {
  if (index !== milestonesCurrentPage) {
    page.style.display = 'none';
  }
});

function milestonesShowPage(pageIndex) {
  milestonesPages.forEach((page, index) => {
    page.style.display = index === pageIndex ? 'flex' : 'none';
  });
}

milestonesLeftArrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    if (milestonesCurrentPage > 0) {
      milestonesCurrentPage--;
      milestonesShowPage(milestonesCurrentPage);
    }
  });
});

milestonesRightArrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    if (milestonesCurrentPage < milestonesPages.length - 1) {
      milestonesCurrentPage++;
      milestonesShowPage(milestonesCurrentPage);
    }
  });
});


// track number of milestones unlocked
let milestonesGot = 0;
let milestonesGotFinal = 0;

// Milestone effects
let milestone1_unlocked = false;
let milestone1_triggered = false;
function milestone1_effect() {
  document.querySelector('.intermediateUpgradeButtons#intermediateUpgrade9').classList.remove('iU-hidden'); // milestone reward
  document.querySelector('.intermediateUpgradeButtons#intermediateUpgrade10').classList.remove('iU-hidden'); // milestone reward
  document.querySelector('.intermediateUpgradeButtons#intermediateUpgrade11').classList.remove('iU-hidden'); // milestone reward
  document.querySelector('.intermediateUpgradeButtons#intermediateUpgrade12').classList.remove('iU-hidden'); // milestone reward

  milestonesGot += 1; // increase number of milestones achieved

  document.querySelector('.milestonesCapsule#milestoneCapsule1').classList.add('milestoneAchieved'); // add "milestoneAchieved" class to it
}

let milestone2_unlocked = false;
let milestone2_triggered = false;
function milestone2_effect() {
  document.getElementById("buyablesUpgradesTab").classList.remove("hiddenUpgradesTab");
  document.querySelector(".upgradesTabButtonsSeparator").classList.remove("inactive");

  milestonesGot += 1;

  document.querySelector('.milestonesCapsule#milestoneCapsule2').classList.add('milestoneAchieved');
}

let milestone3_unlocked = false;
let milestone3_triggered = false;
function milestone3_effect() {
  document.getElementById("ballIncrease").style.display = "none";

  milestonesGot += 1;

  document.querySelector('.milestonesCapsule#milestoneCapsule3').classList.add('milestoneAchieved');
}

let milestone4_unlocked = false;
let milestone4_triggered = false;
function milestone4_effect() {
  document.querySelector('.buyablesUpgradeButtons#buyablesUpgrade5').classList.remove('bU-hidden');
  document.querySelector('.buyablesUpgradeButtons#buyablesUpgrade6').classList.remove('bU-hidden');

  milestonesGot += 1;

  document.querySelector('.milestonesCapsule#milestoneCapsule4').classList.add('milestoneAchieved');
}

let milestone5_unlocked = false;
let milestone5_triggered = false;
function milestone5_effect() {
  document.querySelector('.buyablesUpgradeButtons#buyablesUpgrade7').classList.remove('bU-hidden');
  document.querySelector('.buyablesUpgradeButtons#buyablesUpgrade8').classList.remove('bU-hidden');
  document.querySelector('.buyablesUpgradeButtons#buyablesUpgrade9').classList.remove('bU-hidden');

  milestonesGot += 1;

  document.querySelector('.milestonesCapsule#milestoneCapsule5').classList.add('milestoneAchieved');
}

let milestone6_unlocked = false;
let milestone6_triggered = false;
function milestone6_effect() {
  document.getElementById('researchTab').classList.add('activeTab');

  milestonesGot += 1;

  document.querySelector('.milestonesCapsule#milestoneCapsule6').classList.add('milestoneAchieved');
}

let milestone7_unlocked = false;
let milestone7_triggered = false;
function milestone7_effect() {
  document.querySelector('.buyablesUpgradeButtons#buyablesUpgrade10').classList.remove('bU-hidden');
  document.querySelector('.buyablesUpgradeButtons#buyablesUpgrade11').classList.remove('bU-hidden');
  document.querySelector('.buyablesUpgradeButtons#buyablesUpgrade12').classList.remove('bU-hidden');

  milestonesGot += 1;

  document.querySelector('.milestonesCapsule#milestoneCapsule7').classList.add('milestoneAchieved');
}

// RESEARCH STUFF
let researchPPS = 0;
let researchXPPSfinal = 0;

// Research effect stuff
let r2 = 1;
let r2_finished = false;

let r3 = 0;
let r3_finished = false;

let r4 = 1;

let r5 = 0;
let r5_finished = false;

let r6 = 1;
let r6_finished = false;

let r8 = 1;

let r9 = 1;
let r9_finished = false;

let r12 = 1;
let r12_finished = false;

let r13 = 0;
let r13_finished = false;

let r14 = 1;
let r14_finished = false;

let r15 = 1;

// Track number of researches finished
let researchesFinished = 0;
let researchesFinishedFinal = 0;

// Page functionality
const researchPages = document.querySelectorAll('.researchOuterGroup');
const researchLeftArrows = document.querySelectorAll('.researchLeftArrow');
const researchRightArrows = document.querySelectorAll('.researchRightArrow');
let researchCurrentPage = 0;

  // hide all pages initially except the first one
researchPages.forEach((page, index) => {
  if (index !== researchCurrentPage) {
    page.style.display = 'none';
  }
});

function researchShowPage(pageIndex) {
  researchPages.forEach((page, index) => {
    page.style.display = index === pageIndex ? 'flex' : 'none';
  });
}

researchLeftArrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    if (researchCurrentPage > 0) {
      researchCurrentPage--;
      researchShowPage(researchCurrentPage);
    }
  });
});

researchRightArrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    if (researchCurrentPage < researchPages.length - 1) {
      researchCurrentPage++;
      researchShowPage(researchCurrentPage);
    }
  });
});

// Research functinality
let researchActivators = document.querySelectorAll(".researchCapsuleHead"); // the button that activates the research
researchActivators.forEach(research => {
  research.addEventListener("click", activateResearch);
});

let researchToggle = document.querySelector(".researchCapsuleToggle"); // the Active/Inactive text

// Function to activate or deactivate research
function activateResearch(event) {
  const researchHead = event.currentTarget;
  const researchCapsule = researchHead.closest(".researchCapsule");
  const researchToggle = researchCapsule.querySelector(".researchCapsuleToggle");

  // Deactivate any currently active research capsule
  document.querySelectorAll(".researchCapsule").forEach(capsule => {
    if (capsule !== researchCapsule && capsule.dataset.active === "true") {
      const toggle = capsule.querySelector(".researchCapsuleToggle");
      toggle.textContent = "Inactive";
      capsule.dataset.active = "false";

      activeCapsule.classList.remove("researchActive");
    }
  });

  // Toggle the clicked research capsule
  if (researchCapsule.dataset.active === "true") {
    researchToggle.textContent = "Inactive";
    researchCapsule.dataset.active = "false";
  } else {
    researchToggle.textContent = "Active";
    researchCapsule.dataset.active = "true";

    researchCapsule.classList.add("researchActive");
  }
}

// Limits for each research
const researchLimits = {
  researchCapsule1: 50,
  researchCapsule2: 350,
  researchCapsule3: 1500,
  researchCapsule4: 1500,
  researchCapsule5: 10000,
  researchCapsule6: 25000,
  researchCapsule7: 50000,
  researchCapsule8: 150000,
  researchCapsule9: 500000,
  researchCapsule10: 500000,
  researchCapsule11: 2.5e6,
  researchCapsule12: 5e6,
  researchCapsule13: 1e7,
  researchCapsule14: 2.5e7,
  researchCapsule15: 5e7,
  researchCapsule16: 2.5e8,
};

// Research rewards
function onResearchCompleted(researchCapsule) {

  // Research 1
  if (researchCapsule.id === "researchCapsule1") {
    document.querySelector('.expertUpgradeButtons#expertUpgrade6').classList.remove('eU-hidden');
    document.querySelector('.expertUpgradeButtons#expertUpgrade7').classList.remove('eU-hidden');
    document.querySelector('.expertUpgradeButtons#expertUpgrade8').classList.remove('eU-hidden');
    document.querySelector('.expertUpgradeButtons#expertUpgrade9').classList.remove('eU-hidden');
    document.querySelector('.expertUpgradeButtons#expertUpgrade10').classList.remove('eU-hidden');
    document.querySelector('.expertUpgradeButtons#expertUpgrade11').classList.remove('eU-hidden');
    document.querySelector('.expertUpgradeButtons#expertUpgrade12').classList.remove('eU-hidden');

    researchesFinished += 1;
  }

  // Research 2
  if (researchCapsule.id === "researchCapsule2") {
    r2_finished = true;
    researchesFinished += 1;
  }

  // Research 3
  if (researchCapsule.id === "researchCapsule3") {
    r3_finished = true;
    researchesFinished += 1;
  }

  // Research 4
  if (researchCapsule.id === "researchCapsule4") {
    r4 *= 1.02; 
    researchesFinished += 1;
  }

  // Research 5
  if (researchCapsule.id === "researchCapsule5") {
    r5_finished = true;
    researchesFinished += 1;
  }

  // Research 6
  if (researchCapsule.id === "researchCapsule6") {
    r6_finished = true;
    researchesFinished += 1;
  }

  // Research 7
  if (researchCapsule.id === "researchCapsule7") {
    tickspeed /= 1.5;
    researchesFinished += 1;

    gameLoop();
  }

  // Research 8
  if (researchCapsule.id === "researchCapsule8") {
    r8 *= 1.01; 
    researchesFinished += 1;
  }

  // Research 9
  if (researchCapsule.id === "researchCapsule9") {
    r9_finished = true;
    researchesFinished += 1;
  }

  // Research 10
  if (researchCapsule.id === "researchCapsule10") {
    expXPPS += 0.05;
    researchesFinished += 1;
  }

  // Research 11
  if (researchCapsule.id === "researchCapsule11") {
    tickspeed /= 1.5;
    researchesFinished += 1;

    gameLoop();
  }

  // Research 12
  if (researchCapsule.id === "researchCapsule12") {
    r12_finished = true;
    researchesFinished += 1;
  }

  // Research 13
  if (researchCapsule.id === "researchCapsule13") {
    r13_finished = true;
    researchesFinished += 1;
  }

  // Research 14
  if (researchCapsule.id === "researchCapsule14") {
    r14_finished = true;
    researchesFinished += 1;
  }

  // Research 15
  if (researchCapsule.id === "researchCapsule15") {
    r15 *= 2;
    researchesFinished += 1;
  }

  // Research 16
  if (researchCapsule.id === "researchCapsule16") {
    researchesFinished += 1;

    document.getElementById('prestigeTab').classList.add('activeTab');
  }

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
  document.querySelector("#ballCount").textContent = formatNumber(ballCount);
}

// Update researches
function updateResearches() {
  document.querySelectorAll(".researchCapsule").forEach(researchCapsule => {
    const progressElement = researchCapsule.querySelector(".researchProgress");
    const progressPerSecondElement = researchCapsule.querySelector(".researchProgressPerSecond");
    const researchToggle = researchCapsule.querySelector(".researchCapsuleToggle");
    const progressBarFill = researchCapsule.querySelector(".researchCapsuleProgressFill");

    // Get the research ID or any unique identifier
    const researchId = researchCapsule.id;
    const progressLimit = researchLimits[researchId] || 0;

    // store raw progress value
    let progress = parseInt(researchCapsule.dataset.progress) || 0;    

    if (researchCapsule.dataset.active === "true") { // if the research is active

      progress += researchXPPSfinal;
      progress = Math.min(progress, progressLimit); // Cap progress at limit
      researchCapsule.dataset.progress = progress; // Store the progress value

      // Update progress display
      progressElement.textContent = formatNumber(progress);
      progressPerSecondElement.textContent = formatNumber(researchXPPSfinal * (1000 / tickspeed));

      // Update progress bar width
      const progressPercentage = (progress / progressLimit) * 100;
      progressBarFill.style.width = `${progressPercentage}%`;

      // Stop the research if the progress reaches the maximum value
      if (progress >= progressLimit) {
        researchToggle.textContent = "Completed";
        researchCapsule.dataset.active = "false"; // Mark the capsule as inactive

        onResearchCompleted(researchCapsule);
        researchCapsule.classList.add("researchFinished");
        researchCapsule.classList.remove("researchActive");
      }
    } else { // if the research is inactive
      progressPerSecondElement.textContent = 0;

      researchCapsule.classList.remove("researchActive", "researchCompleted");
    }
  });
}

// Update values
function updateValues() {

  ballCount += ballsPerSecond; // update the actual ball count
  updateBallCountDisplay(); // update the displayed ball count

  updateResearches(); // update researches

  // UPGRADES UPDATE STUFF
  // upgrades bought
  upgradesBoughtFinal = upgradesBought * aU1_7 * eU5;

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
    iU7 = upgradesBoughtFinal * 0.01;
  }

  // iU9 upgrade stuff
  if (iU9_purchased) {
    iU9 = upgradesBoughtFinal / 4;
  }

  // iU10 upgrade stuff
  if (iU10_purchased) {
    iU10 = 1 + (milestonesGotFinal / 2);
  }

  // aU3 upgrade stuff
  if (aU3_purchased) {
    aU3 = Math.floor(2 * Math.log2(1 + multiBPSfinal));
  }

  // aU5 upgrade stuff
  if (aU5_purchased) {
    aU5 = 1 + (Math.sqrt(upgradesBoughtFinal) / 8);
  }

  // aU8 upgrade stuff
  if (aU8_purchased) {
    aU8 = 1 + (Math.sqrt(milestonesGotFinal) / 4);
  }

  // aU11 upgrade stuff
  if (aU11_purchased) {
    aU11 = 1 + ((upgradesBoughtFinal) ** (1/3)) / 5;
  }

  // eU4 upgrade stuff
  if (eU4_purchased) {
    eU4 = (Math.log(1 + multiBPSfinal)) ** (1/5);
  }

  // eU5 upgrade stuff
  if (eU5_purchased) {
    eU5 = (Math.log(1 + milestonesGotFinal)) ** (1/16);
  }

  // eU8 upgrade stuff
  if (eU8_purchased) {
    eU8 = researchesFinishedFinal * 0.005;
  }

  // MILESTONE UPDATE STUFF 
  // milestones achieved
  milestonesGotFinal = milestonesGot * aU4_9;

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

    if (ballCount >= 1e19 && milestone5_triggered == false) {
        milestone5_effect();
        milestone5_triggered = true;
    }

    if (ballCount >= 1e24 && milestone6_triggered == false) {
      milestone6_effect();
      milestone6_triggered = true;
    }

    if (ballCount >= 1e27 && milestone7_triggered == false) {
      milestone7_effect();
      milestone7_triggered = true;
    } 
  }

  // RESEARCH UPDATE STUFF
  // researches finished
  researchesFinishedFinal = researchesFinished;

  // r2 effect stuff
  if (r2_finished) {
    r2 = 1.4 ** (Math.floor(researchesFinishedFinal/2));
  }

  // r3 effect stuff
  if (r3_finished) {
    r3 = 3 * researchesFinishedFinal;
  }

  // r5 effect stuff
  if (r5_finished) {
    r5 = milestonesGotFinal;
  }

  // r6 effect stuff
  if (r6_finished) {
    r6 = Math.floor(1 + Math.log(Math.sqrt(ballCount)) / 50);
  }

  // r9 effect stuff
  if (r9_finished) {
    r9 = 1 + (researchesFinishedFinal * 0.001);
  }

  // r12 effect stuff
  if (r12_finished) {
    r12 = 1.06 ** (Math.floor(researchesFinishedFinal/3));
  }

  // r13 effect stuff
  if (r13_finished) {
    r13 = Math.floor(Math.log10(1+ballsPerSecond));
  }

  // r14 effect stuff
  if (r14_finished) {
    r14 = Math.floor(Math.log2(1 + milestonesGotFinal) / 3);
  }

  // Final values
  baseBPSfinal = ((baseBPS + iU2) * iU3 * iU10 * aU5 * aU11 * eU4 * bU4 * r6 * r12 * r14) ** (eU1 * bU7 * r4 * r9);
  multiBPSfinal = ((multiBPS + iU5 + iU9 + aU3) * iU1_6_11 * aU8 * bU5 * r2) ** (eU2 * bU8 * r8);
  expBPSfinal = ((expBPS + iU7 + eU8) * aU10 * bU6) ** bU9;

  baseXPPSfinal = (baseXPPS + r3 + r5 + r13) * eU11;
  multiXPPSfinal = multiXPPS * eU9 * r15;
  expXPPSfinal = expXPPS;

  // Recalculate BPS
  ballsPerSecond = (baseBPSfinal * (1 + multiBPSfinal)) ** (1 + expBPSfinal);

  // Recalculate research PPS
  researchXPPSfinal = (baseXPPSfinal * (1 + multiXPPSfinal)) ** (1 + expXPPSfinal);

  let perSecondCount1 = document.querySelector(".perSecondCount-1");
  perSecondCount1.textContent = formatNumber(ballsPerSecond * (1000 / tickspeed)); // displayed value update

  // STATS
  let perSecondCount2 = document.querySelector(".perSecondCount-2");
  perSecondCount2.textContent = formatNumber(ballsPerSecond); // displayed value update

  let baseCount = document.querySelector(".baseCount");
  baseCount.textContent = formatNumber(baseBPSfinal);

  let multiCount = document.querySelector(".multiCount");
  multiCount.textContent = formatNumber(multiBPSfinal);

  let expCount = document.querySelector(".expCount");
  expCount.textContent = formatNumber(expBPSfinal);

  let upgCount = document.querySelector(".upgCount");
  upgCount.textContent = formatNumber(upgradesBoughtFinal);

  let baseUpgCount = document.querySelector(".baseUpgCount");
  baseUpgCount.textContent = formatNumber(upgradesBought);

  let milestonesCount = document.querySelector(".milestonesCount");
  milestonesCount.textContent = formatNumber(milestonesGotFinal);

  let baseMilestonesCount = document.querySelector(".baseMilestonesCount");
  baseMilestonesCount.textContent = formatNumber(milestonesGot);

  let researchCount = document.querySelector(".researchCount");
  researchCount.textContent = formatNumber(researchesFinishedFinal);

  let baseResearchCount = document.querySelector(".baseResearchCount");
  baseResearchCount.textContent = formatNumber(researchesFinished);
}

let intervalId;

function gameLoop() {
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(updateValues, tickspeed);
}

window.onload = function() {
  gameLoop();
};

// BASIC UPGRADES
function upgrade1() {
  if (ballCount >= 10) {
    ballCount -= 10; // update actual ball count
    baseBPS += 1;
    upgradesBought += 1;

    document.getElementById("upgrade1").onclick = null;
    document.getElementById("upgrade1").classList.add("disabled");

    updateBallCountDisplay(); // update displayed ball count
  }
}

function upgrade2() {
  if (ballCount >= 25) {
    ballCount -= 25;
    baseBPS += 0.5;
    upgradesBought += 1;

    document.getElementById("upgrade2").onclick = null;
    document.getElementById("upgrade2").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function upgrade3() {
  if (ballCount >= 50) {
    ballCount -= 50;
    multiBPS += 1;
    upgradesBought += 1;

    document.getElementById("upgrade3").onclick = null;
    document.getElementById("upgrade3").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function upgrade4() {
  if (ballCount >= 100) {
    ballCount -= 100;
    baseBPS += 2;
    upgradesBought += 1;

    document.getElementById("upgrade4").onclick = null;
    document.getElementById("upgrade4").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function upgrade5() {
  if (ballCount >= 250) {
    ballCount -= 250;
    multiBPS += 1.5;
    upgradesBought += 1;

    document.getElementById("upgrade5").onclick = null;
    document.getElementById("upgrade5").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function upgrade6() {
  if (ballCount >= 350) {
    ballCount -= 350;
    expBPS += 0.1;
    upgradesBought += 1;

    document.getElementById("upgrade6").onclick = null;
    document.getElementById("upgrade6").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function upgrade7() {
  if (ballCount >= 500) {
    ballCount -= 500;
    baseBPS += 2;
    upgradesBought += 1;

    document.getElementById("upgrade7").onclick = null;
    document.getElementById("upgrade7").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function upgrade8() {
  if (ballCount >= 750) {
    ballCount -= 750;
    multiBPS += 1.5;
    upgradesBought += 1;

    document.getElementById("upgrade8").onclick = null;
    document.getElementById("upgrade8").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function upgrade9() {
  if (ballCount >= 1000) {
    ballCount -= 1000;
    baseBPS += 3;
    upgradesBought += 1;

    document.getElementById("upgrade9").onclick = null;
    document.getElementById("upgrade9").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function upgrade10() {
  if (ballCount >= 2500) {
    ballCount -= 2500;
    expBPS += 0.1;
    upgradesBought += 1;

    document.getElementById("upgrade10").onclick = null;
    document.getElementById("upgrade10").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function upgrade11() {
  if (ballCount >= 3500) {
    ballCount -= 3500;
    multiBPS += 2;
    upgradesBought += 1;

    document.getElementById("upgrade11").onclick = null;
    document.getElementById("upgrade11").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function upgrade12() { // this one unlocks Intermediate Upgrades
  if (ballCount >= 10000) {
    ballCount -= 10000;
    upgradesBought += 1;

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
    upgradesBought += 1;

    document.getElementById("intermediateUpgrade1").onclick = null;
    document.getElementById("intermediateUpgrade1").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function intermediateUpgrade2() {
  if (ballCount >= 25000) {
    ballCount -= 25000;
    upgradesBought += 1;

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
    upgradesBought += 1;

    document.getElementById("intermediateUpgrade3").onclick = null;
    document.getElementById("intermediateUpgrade3").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function intermediateUpgrade4() {
  if (ballCount >= 100000) {
    ballCount -= 100000;
    expBPS += 0.1;
    upgradesBought += 1;

    document.getElementById("intermediateUpgrade4").onclick = null;
    document.getElementById("intermediateUpgrade4").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function intermediateUpgrade5() {
  if (ballCount >= 200000) {
    ballCount -= 200000;
    upgradesBought += 1;

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
    upgradesBought += 1;

    document.getElementById("intermediateUpgrade6").onclick = null;
    document.getElementById("intermediateUpgrade6").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function intermediateUpgrade7() {
  if (ballCount >= 750000) {
    ballCount -= 750000;
    upgradesBought += 1;

    document.getElementById("intermediateUpgrade7").onclick = null;
    document.getElementById("intermediateUpgrade7").classList.add("disabled");

    iU7_purchased = true;

    updateBallCountDisplay();
  }
}

function intermediateUpgrade8() {
  if (ballCount >= 2.5e6) {
    ballCount -= 2.5e6;
    upgradesBought += 1;

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
    upgradesBought += 1;

    document.getElementById("intermediateUpgrade9").onclick = null;
    document.getElementById("intermediateUpgrade9").classList.add("disabled");

    iU9_purchased = true;

    updateBallCountDisplay();
  }
}

function intermediateUpgrade10() {
  if (ballCount >= 4e6) {
    ballCount -= 4e6;
    upgradesBought += 1;

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
    upgradesBought += 1;

    document.getElementById("intermediateUpgrade11").onclick = null;
    document.getElementById("intermediateUpgrade11").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function intermediateUpgrade12() {
  if (ballCount >= 2.5e7) {
    ballCount -= 2.5e7;
    upgradesBought += 1;

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
    aU1_7 *= 1.2;
    upgradesBought += 1;

    document.getElementById("advancedUpgrade1").onclick = null;
    document.getElementById("advancedUpgrade1").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function advancedUpgrade2() {
  if (ballCount >= 7.5e7) {
    ballCount -= 7.5e7;
    iU1_6_11 *= 1.2 ** iU1_6_11_bought;
    upgradesBought += 1;

    // updates
    document.getElementById("iU1_effect").textContent = 1.8;
    document.getElementById("iU6_effect").textContent = 1.8;
    document.getElementById("iU11_effect").textContent = 1.8;

    document.getElementById("advancedUpgrade2").onclick = null;
    document.getElementById("advancedUpgrade2").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function advancedUpgrade3() {
  if (ballCount >= 6e8) {
    ballCount -= 6e8;
    upgradesBought += 1;

    document.getElementById("advancedUpgrade3").onclick = null;
    document.getElementById("advancedUpgrade3").classList.add("disabled");

    aU3_purchased = true;

    updateBallCountDisplay();
  }
}

function advancedUpgrade4() {
  if (ballCount >= 1.2e9) {
    ballCount -= 1.2e9;
    aU4_9 *= 1.5;
    upgradesBought += 1;

    document.getElementById("advancedUpgrade4").onclick = null;
    document.getElementById("advancedUpgrade4").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function advancedUpgrade5() {
  if (ballCount >= 4e9) {
    ballCount -= 4e9;
    upgradesBought += 1;

    document.getElementById("advancedUpgrade5").onclick = null;
    document.getElementById("advancedUpgrade5").classList.add("disabled");

    aU5_purchased = true;

    updateBallCountDisplay();
  }
}

function advancedUpgrade6() {
  if (ballCount >= 3e10) {
    ballCount -= 3e10;
    expBPS += 0.1;
    upgradesBought += 1;

    document.getElementById("advancedUpgrade6").onclick = null;
    document.getElementById("advancedUpgrade6").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function advancedUpgrade7() {
  if (ballCount >= 2e11) {
    ballCount -= 2e11;
    aU1_7 *= 1.2;
    upgradesBought += 1;

    document.getElementById("advancedUpgrade7").onclick = null;
    document.getElementById("advancedUpgrade7").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function advancedUpgrade8() {
  if (ballCount >= 7.5e12) {
    ballCount -= 7.5e12;
    upgradesBought += 1;

    document.getElementById("advancedUpgrade8").onclick = null;
    document.getElementById("advancedUpgrade8").classList.add("disabled");

    aU8_purchased = true;

    updateBallCountDisplay();
  }
}

function advancedUpgrade9() {
  if (ballCount >= 5e13) {
    ballCount -= 5e13;
    aU4_9 *= 1.5;
    upgradesBought += 1;

    document.getElementById("advancedUpgrade9").onclick = null;
    document.getElementById("advancedUpgrade9").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function advancedUpgrade10() {
  if (ballCount >= 2.5e14) {
    ballCount -= 2.5e14;
    aU10 *= 1.05;
    upgradesBought += 1;

    document.getElementById("advancedUpgrade10").onclick = null;
    document.getElementById("advancedUpgrade10").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function advancedUpgrade11() {
  if (ballCount >= 5e15) {
    ballCount -= 5e15;
    upgradesBought += 1;

    document.getElementById("advancedUpgrade11").onclick = null;
    document.getElementById("advancedUpgrade11").classList.add("disabled");

    aU11_purchased = true;

    updateBallCountDisplay();
  }
}

function advancedUpgrade12() {
  if (ballCount >= 1e17) {
    ballCount -= 1e17; 
    upgradesBought += 1;

    document.getElementById("expertUpgradesTab").classList.remove("hiddenUpgradesTab")

    document.getElementById("advancedUpgrade12").onclick = null;
    document.getElementById("advancedUpgrade12").classList.add("disabled");

    updateBallCountDisplay();
  }
}

// EXPERT UPGRADES
function expertUpgrade1() {
  if (ballCount >= 5e16) {
    ballCount -= 5e16;
    eU1 *= 1.03;
    upgradesBought += 1;

    document.getElementById("expertUpgrade1").onclick = null;
    document.getElementById("expertUpgrade1").classList.add("disabled");

    updateBallCountDisplay();
  }
}

function expertUpgrade2() {
  if (ballCount >= 4e18) {
    ballCount -= 4e18;
    eU2 *= 1.03;
    upgradesBought += 1;
  
    document.getElementById("expertUpgrade2").onclick = null;
    document.getElementById("expertUpgrade2").classList.add("disabled");
  
    updateBallCountDisplay();
  }
}

function expertUpgrade3() {
  if (ballCount >= 1e21) {
    ballCount -= 1e21;
    tickspeed /= 1.5;
    upgradesBought += 1;
  
    document.getElementById("expertUpgrade3").onclick = null;
    document.getElementById("expertUpgrade3").classList.add("disabled");
  
    updateBallCountDisplay();
    gameLoop();
  }
}

function expertUpgrade4() {
  if (ballCount >= 5e21) {
    ballCount -= 5e21;
    upgradesBought += 1;
  
    document.getElementById("expertUpgrade4").onclick = null;
    document.getElementById("expertUpgrade4").classList.add("disabled");

    eU4_purchased = true;
  
    updateBallCountDisplay();
  }
}

function expertUpgrade5() {
  if (ballCount >= 8e22) {
    ballCount -= 8e22;
    upgradesBought += 1;
  
    document.getElementById("expertUpgrade5").onclick = null;
    document.getElementById("expertUpgrade5").classList.add("disabled");

    eU5_purchased = true;
  
    updateBallCountDisplay();
  }
}

function expertUpgrade6() {
  if (ballCount >= 1.5e24) {
    ballCount -= 1.5e24;
    baseXPPS += 4;
    upgradesBought += 1;
  
    document.getElementById("expertUpgrade6").onclick = null;
    document.getElementById("expertUpgrade6").classList.add("disabled");
  
    updateBallCountDisplay();
  }
}

function expertUpgrade7() {
  if (ballCount >= 2e25) {
    ballCount -= 2e25;
    multiXPPS += 1;
    upgradesBought += 1;
  
    document.getElementById("expertUpgrade7").onclick = null;
    document.getElementById("expertUpgrade7").classList.add("disabled");
  
    updateBallCountDisplay();
  }
}

function expertUpgrade8() {
  if (ballCount >= 3e26) {
    ballCount -= 3e26;
    upgradesBought += 1;
  
    document.getElementById("expertUpgrade8").onclick = null;
    document.getElementById("expertUpgrade8").classList.add("disabled");

    eU8_purchased = true;
  
    updateBallCountDisplay();
  }
}

function expertUpgrade9() {
  if (ballCount >= 1e29) {
    ballCount -= 1e29;
    eU9 *= 3;
    upgradesBought += 1;
  
    document.getElementById("expertUpgrade9").onclick = null;
    document.getElementById("expertUpgrade9").classList.add("disabled");
  
    updateBallCountDisplay();
  }
}

function expertUpgrade10() {
  if (ballCount >= 2.5e31) {
    ballCount -= 2.5e31;
    expXPPS += 0.05;
    upgradesBought += 1;
  
    document.getElementById("expertUpgrade10").onclick = null;
    document.getElementById("expertUpgrade10").classList.add("disabled");
  
    updateBallCountDisplay();
  }
}

function expertUpgrade11() {
  if (ballCount >= 3e32) {
    ballCount -= 3e32;
    eU11 *= 2.5;
    upgradesBought += 1;
  
    document.getElementById("expertUpgrade11").onclick = null;
    document.getElementById("expertUpgrade11").classList.add("disabled");
  
    updateBallCountDisplay();
  }
}

function expertUpgrade12() {
  if (ballCount >= 2.5e34) {
    ballCount -= 2.5e34; 
    upgradesBought += 1;

    document.getElementById("masterUpgradesTab").classList.remove("hiddenUpgradesTab")

    document.getElementById("expertUpgrade12").onclick = null;
    document.getElementById("expertUpgrade12").classList.add("disabled");

    updateBallCountDisplay();
  }
}

// BUYABLE UPGRADES
// bU1 variables
let bU1_cost = 1e7;
let bU1_count = 0;
let bU1_limit = 10;

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

// bU2 variables
let bU2_cost = 2e9;
let bU2_count = 0;
let bU2_limit = 20;
  
function buyablesUpgrade2() {
  if (ballCount >= bU2_cost * (2 ** bU2_count) && bU2_count < bU2_limit) {
    ballCount -= bU2_cost * (2 ** bU2_count);
    multiBPS += 5;
    upgradesBought += 0.05;
  
    // updates
    bU2_count += 1;
    document.getElementById("buyableCost2").textContent = formatNumber(bU2_cost * (2 ** bU2_count));
    document.getElementById("buyableCount2").textContent = (bU2_count).toFixed(0);
  
    if (bU2_count == bU2_limit) {
      document.getElementById("buyablesUpgrade2").onclick = null;
      document.getElementById("buyablesUpgrade2").classList.add("disabled");
    }
  
    updateBallCountDisplay();
  }
}

// bU3 variables
let bU3_cost = 1e12;
let bU3_count = 0;
let bU3_limit = 10;
  
function buyablesUpgrade3() {
  if (ballCount >= bU3_cost * (4 ** bU3_count) && bU3_count < bU3_limit) {
    ballCount -= bU3_cost * (4 ** bU3_count);
    expBPS += 0.01;
    upgradesBought += 0.1;
  
    // updates
    bU3_count += 1;
    document.getElementById("buyableCost3").textContent = formatNumber(bU3_cost * (4 ** bU3_count));
    document.getElementById("buyableCount3").textContent = (bU3_count).toFixed(0);
  
    if (bU3_count == bU3_limit) {
      document.getElementById("buyablesUpgrade3").onclick = null;
      document.getElementById("buyablesUpgrade3").classList.add("disabled");
    }
  
    updateBallCountDisplay();
  }
}

// bU4 variables
let bU4_cost = 2.7e13;
let bU4_count = 0;
let bU4_limit = 10;
  
function buyablesUpgrade4() {
  if (ballCount >= bU4_cost * (3 ** bU4_count) && bU4_count < bU4_limit) {
    ballCount -= bU4_cost * (3 ** bU4_count);
    bU4 *= 1.1;
    upgradesBought += 0.1;
  
    // updates
    bU4_count += 1;
    document.getElementById("buyableCost4").textContent = formatNumber(bU4_cost * (3 ** bU4_count));
    document.getElementById("buyableCount4").textContent = (bU4_count).toFixed(0);
  
    if (bU4_count == bU4_limit) {
      document.getElementById("buyablesUpgrade4").onclick = null;
      document.getElementById("buyablesUpgrade4").classList.add("disabled");
    }
  
    updateBallCountDisplay();
  }
}

// bU5 variables
let bU5_cost = 5e14;
let bU5_count = 0;
let bU5_limit = 10;
  
function buyablesUpgrade5() {
  if (ballCount >= bU5_cost * (4 ** bU5_count) && bU5_count < bU5_limit) {
    ballCount -= bU5_cost * (4 ** bU5_count);
    bU5 *= 1.1;
    upgradesBought += 0.1;
  
    // updates
    bU5_count += 1;
    document.getElementById("buyableCost5").textContent = formatNumber(bU5_cost * (4 ** bU5_count));
    document.getElementById("buyableCount5").textContent = (bU5_count).toFixed(0);
  
    if (bU5_count == bU5_limit) {
      document.getElementById("buyablesUpgrade5").onclick = null;
      document.getElementById("buyablesUpgrade5").classList.add("disabled");
    }
  
    updateBallCountDisplay();
  }
}

// bU6 variables
let bU6_cost = 5e15;
let bU6_count = 0;
let bU6_limit = 10;
  
function buyablesUpgrade6() {
  if (ballCount >= bU6_cost * (5 ** bU6_count) && bU6_count < bU6_limit) {
    ballCount -= bU6_cost * (5 ** bU6_count);
    bU6 *= 1.01;
    upgradesBought += 0.1;
  
    // updates
    bU6_count += 1;
    document.getElementById("buyableCost6").textContent = formatNumber(bU6_cost * (5 ** bU6_count));
    document.getElementById("buyableCount6").textContent = (bU6_count).toFixed(0);
  
    if (bU6_count == bU6_limit) {
      document.getElementById("buyablesUpgrade6").onclick = null;
      document.getElementById("buyablesUpgrade6").classList.add("disabled");
    }
  
    updateBallCountDisplay();
  }
}

// bU7 variables
let bU7_cost = 5e18;
let bU7_count = 0;
let bU7_limit = 10;
  
function buyablesUpgrade7() {
  if (ballCount >= bU7_cost * (6 ** bU7_count) && bU7_count < bU7_limit) {
    ballCount -= bU7_cost * (6 ** bU7_count);
    bU7 *= 1.01;
    upgradesBought += 0.1;
  
    // updates
    bU7_count += 1;
    document.getElementById("buyableCost7").textContent = formatNumber(bU7_cost * (6 ** bU7_count));
    document.getElementById("buyableCount7").textContent = (bU7_count).toFixed(0);
  
    if (bU7_count == bU7_limit) {
      document.getElementById("buyablesUpgrade7").onclick = null;
      document.getElementById("buyablesUpgrade7").classList.add("disabled");
    }
  
    updateBallCountDisplay();
  }
}

// bU8 variables
let bU8_cost = 1e19;
let bU8_count = 0;
let bU8_limit = 10;
  
function buyablesUpgrade8() {
  if (ballCount >= bU8_cost * (8 ** bU8_count) && bU8_count < bU8_limit) {
    ballCount -= bU8_cost * (8 ** bU8_count);
    bU8 *= 1.01;
    upgradesBought += 0.1;
  
    // updates
    bU8_count += 1;
    document.getElementById("buyableCost8").textContent = formatNumber(bU8_cost * (8 ** bU8_count));
    document.getElementById("buyableCount8").textContent = (bU8_count).toFixed(0);
  
    if (bU8_count == bU8_limit) {
      document.getElementById("buyablesUpgrade8").onclick = null;
      document.getElementById("buyablesUpgrade8").classList.add("disabled");
    }
  
    updateBallCountDisplay();
  }
}

// bU9 variables
let bU9_cost = 2.5e19;
let bU9_count = 0;
let bU9_limit = 5;
  
function buyablesUpgrade9() {
  if (ballCount >= bU9_cost * (12 ** bU9_count) && bU9_count < bU9_limit) {
    ballCount -= bU9_cost * (12 ** bU9_count);
    bU9 *= 1.01;
    upgradesBought += 0.2;
  
    // updates
    bU9_count += 1;
    document.getElementById("buyableCost9").textContent = formatNumber(bU9_cost * (12 ** bU9_count));
    document.getElementById("buyableCount9").textContent = (bU9_count).toFixed(0);
  
    if (bU9_count == bU9_limit) {
      document.getElementById("buyablesUpgrade9").onclick = null;
      document.getElementById("buyablesUpgrade9").classList.add("disabled");
    }
  
    updateBallCountDisplay();
  }
}

// bU10 variables
let bU10_cost = 2.5e26;
let bU10_count = 0;
let bU10_limit = 20;
  
function buyablesUpgrade10() {
  if (ballCount >= bU10_cost * (2 ** bU10_count) && bU10_count < bU10_limit) {
    ballCount -= bU10_cost * (2 ** bU10_count);
    baseXPPS += 5;
    upgradesBought += 0.05;
  
    // updates
    bU10_count += 1;
    document.getElementById("buyableCost10").textContent = formatNumber(bU10_cost * (2 ** bU10_count));
    document.getElementById("buyableCount10").textContent = (bU10_count).toFixed(0);
  
    if (bU10_count == bU10_limit) {
      document.getElementById("buyablesUpgrade10").onclick = null;
      document.getElementById("buyablesUpgrade10").classList.add("disabled");
    }
  
    updateBallCountDisplay();
  }
}

// bU11 variables
let bU11_cost = 5e26;
let bU11_count = 0;
let bU11_limit = 10;
  
function buyablesUpgrade11() {
  if (ballCount >= bU11_cost * (3 ** bU11_count) && bU11_count < bU11_limit) {
    ballCount -= bU11_cost * (3 ** bU11_count);
    multiXPPS += 2;
    upgradesBought += 0.1;
  
    // updates
    bU11_count += 1;
    document.getElementById("buyableCost11").textContent = formatNumber(bU11_cost * (3 ** bU11_count));
    document.getElementById("buyableCount11").textContent = (bU11_count).toFixed(0);
  
    if (bU11_count == bU11_limit) {
      document.getElementById("buyablesUpgrade11").onclick = null;
      document.getElementById("buyablesUpgrade11").classList.add("disabled");
    }
  
    updateBallCountDisplay();
  }
}

// bU12 variables
let bU12_cost = 1e27;
let bU12_count = 0;
let bU12_limit = 10;
  
function buyablesUpgrade12() {
  if (ballCount >= bU12_cost * (5 ** bU12_count) && bU12_count < bU12_limit) {
    ballCount -= bU12_cost * (5 ** bU12_count);
    expXPPS += 0.01;
    upgradesBought += 0.1;
  
    // updates
    bU12_count += 1;
    document.getElementById("buyableCost12").textContent = formatNumber(bU12_cost * (5 ** bU12_count));
    document.getElementById("buyableCount12").textContent = (bU12_count).toFixed(0);
  
    if (bU12_count == bU12_limit) {
      document.getElementById("buyablesUpgrade12").onclick = null;
      document.getElementById("buyablesUpgrade12").classList.add("disabled");
    }
  
    updateBallCountDisplay();
  }
}

// SETTINGS
// Kill yourself
function refreshPage() {
  location.reload();
}



// PRESTIGE RESET

// First reset animation
let escapeButton = document.getElementById("escapeButton");
let resetBG = document.getElementById("reset1_bg");
let slash = document.getElementById("slash");
let escapeMessage = document.getElementById("escapeMessage");

escapeButton.addEventListener("click", () => {
  resetBG.style.display = "block";
  escapeButton.disabled = true;
  escapeButton.style.pointerEvents = "none";

  setTimeout(() => { // after 1.25s
    slash.style.display = "block";
  }, 1250);

  setTimeout(() => { // after 2s
    escapeButton.style.display = "none";
    slash.style.display = "none";
    resetBG.style.backgroundColor = "black";
  }, 2000);

  setTimeout(() => { // after 3s
    escapeMessage.textContent = "There is no escape.";
    escapeMessage.classList.add('show');

    setTimeout(() => { // after 5s
      escapeMessage.classList.add('fade-out');
    }, 2000);

  }, 3000);

  setTimeout(() => { // after 10s
    //prestigeReset();
    escapeButton.style.display = "none";
    document.getElementById("prestigeTab").textContent = "Prestige";
    resetBG.style.display = "none";
    slash.style.display = "none";
    escapeMessage.style.display = "none";
  }, 10000);

});

// Reset function
  // none lol
