* {
  padding: 0;
  margin: 0;
}

/* Background color */
body {
  background-color: rgb(25, 25, 25);
}

/* Live balls reaction */
.secretTab {
  position: absolute;
  left: 80%;
  background-color: transparent;
  border: 4px solid rgb(26, 26, 26);
  border-radius: 12px;
  color: rgb(26, 26, 26);
  padding: 8px 16px;
  text-align: center;
  display: block;
  font-size: 16px;
  font-family: "Roboto Mono";
}

.secretTab:hover {
  border: 4px solid rgb(42, 42, 42);
  color: rgb(42, 42, 42);
}

#liveReaction {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 600px;
  height: 400px;
  margin-left: -300px;
  margin-top: -200px;
  display: none;
  flex-direction: column;
}

#liveTextContainer {
  width: 600px;
  height: 75px;
  background-color: red;  
  display: flex;
  justify-content: center;
  align-items: center;
}

#liveText {
  font-family: impact;
  font-size: 52px;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}

#liveContainer {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: black;
}

.ball {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  z-index: 0;
}

/* Center [element] horizontally */
.centerHorizontal {
  margin-left: auto;
  margin-right: auto;
  display: block; 
}

/* Center [text-element] horizontally] */
.textCenterHorizontal {
  text-align: center;
}

/* General text design */
p {
  color: rgb(82, 82, 82);
  font-family: "Roboto Mono", Arial, Helvetica, sans-serif;
  font-size: 26px;
  margin: 0px;
}

/* General button cursor animation */
button:hover {
  cursor: pointer;
}

.ballText {
  margin-top: 10px;
}

/* Ball counter design */
#ballCount {

  font-family: Arial, Helvetica, sans-serif;
  font-size: 48px;
  background: linear-gradient(to right, #0099ff, #6666ff, #ad66ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow_animation 6s ease-in-out infinite;
  background-size: 400% 100%;
}

.perSecondCount-1 {
  color: rgb(125, 125, 125);
}

/* Ball counter color animation */
@keyframes rainbow_animation {
  0%,100% {
      background-position: 0 0; 
  }

  50% {
      background-position: 100% 0;
  }
}

/* "Get more" balls button */
#ballIncrease {
  margin-top: 16px;
}

/* General button design */
.ballButtons {
    background-color: transparent;
    border: 4px solid rgb(0, 123, 255);
    border-radius: 12px;
    color: rgb(0, 123, 255);
    padding: 12px 24px;
    text-align: center;
    display: block;
    font-size: 32px;
    font-family: "Roboto Mono";
}

.ballButtons:hover {
  background-color: rgb(0, 35, 73);
}

.ballButtons:active {
  background-color: rgb(0, 18, 37);
  color: rgb(0, 66, 137);
  border: 4px solid rgb(0, 66, 137);
}

/* General disabled button design */
.disabled {
  background-color: transparent;
  border: 4px solid rgb(0, 66, 137);
  border-radius: 12px;
  color: rgb(0, 66, 137);
  padding: 12px 24px;
  margin-top: 30px;
  text-align: center;
  display: block;
  font-size: 32px;
  font-family: "Roboto Mono";
}

.disabled:hover {
  background-color: transparent;
}

.disabled:active {
  background-color: transparent;
  color: rgb(0, 66, 137);
  border: 4px solid rgb(0, 66, 137);
}

/* General tab design */
.tabs {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  height: 60px;
  justify-content: center;
  align-content: flex-start;
  column-gap: 10px;
  row-gap: 0px;
  margin-top: 40px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
}

.tabButtons {
  background-color: transparent;
  border: 4px solid rgb(0, 123, 255);
  border-radius: 12px;
  color: rgb(0, 123, 255);
  padding: 4px 8px;
  text-align: center;
  display: block;
  font-size: 32px;
  font-family: "Roboto Mono";
}

.tabButtons:hover {
  background-color: rgb(0, 35, 73);
}

.tabButtons:active {
  background-color: rgb(0, 18, 37);
  color: rgb(0, 66, 137);
  border: 4px solid rgb(0, 66, 137);
}

#milestonesTab {
  display: none;
}

/* Milestones tab design */
#milestonesTab.activeTab {
  display: block;
  background-color: transparent;
  border: 4px solid rgb(255, 183, 0);
  border-radius: 12px;
  color: rgb(255, 183, 0);
  right: 140px;
  text-align: center;
  font-size: 32px;
  font-family: "Roboto Mono";
}

#milestonesTab.activeTab:hover {
  background-color: rgb(94, 68, 0);
}

#milestonesTab.activeTab:active {
  background-color: rgb(37, 26, 0);
  color: rgb(146, 105, 0);
  border: 4px solid rgb(146, 105, 0);
}

#researchTab {
  display: none;
}

/* Research tab design */
#researchTab.activeTab {
  display: block;
  background-color: transparent;
  border: 4px solid rgb(13, 255, 0);
  border-radius: 12px;
  color: rgb(13, 255, 0);
  right: 140px;
  text-align: center;
  font-size: 32px;
  font-family: "Roboto Mono";
}

#researchTab.activeTab:hover {
  background-color: rgb(5, 100, 0);
}

#researchTab.activeTab:active {
  background-color: rgb(2, 31, 0);
  color: rgb(8, 150, 0);
  border: 4px solid rgb(8, 150, 0);
}

#prestigeTab {
  display: none;
}

/* Research tab design */
#prestigeTab.activeTab {
  display: block;
  background-color: transparent;
  border: 4px solid rgb(132, 0, 255);
  border-radius: 12px;
  color: rgb(132, 0, 255);
  right: 140px;
  text-align: center;
  font-size: 32px;
  font-family: "Roboto Mono";
}

#prestigeTab.activeTab:hover {
  background-color: rgb(53, 0, 103);
}

#prestigeTab.activeTab:active {
  background-color: rgb(22, 0, 41);
  color: rgb(77, 0, 150);
  border: 4px solid rgb(77, 0, 150);
}

/* Settings tab design */
#settingsTab {
  background-color: transparent;
  border: 4px solid rgb(153, 153, 153);
  border-radius: 12px;
  color: rgb(153, 153, 153);
  right: 140px;
  text-align: center;
  display: block;
  font-size: 32px;
  font-family: "Roboto Mono";
}

#settingsTab:hover {
  background-color: rgb(52, 52, 52)
}

#settingsTab:active {
  background-color: rgb(26, 26, 26);
  color: rgb(74, 74, 74);
  border: 4px solid rgb(74, 74, 74);
}

/* Hide all universal tab content on page load */
[data-tab-content] {
  display: none;
}

/* Show active universal tab content */
.active[data-tab-content] {
  display: block;
}

/* Tab-Content separator */
.separator1 {
  border: 2px solid rgb(69, 69, 69);
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}

/* Hide all upgrades tab content on page load */
[data-upgrades-content] {
  display: none;
}

/* Show active upgrades tab content */
.active[data-upgrades-content] {
  display: block;
}

/* Unlocking upgrades tab buttons */
  .upgradesTabButtons.upgradesTabButtonsDefault {
    display: none;
  }

  .upgradesTabButtons.upgradesTabButtonsDefault.activeUpgradeTab {
    display: block;
  }

/* Upgrade tabs that arent unlocked yet */
.upgradesTabButtons.upgradesTabButtonsDefault.hiddenUpgradesTab {
  display: none;
}

.upgrades-tabs {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  height: 60px;
  justify-content: center;
  align-content: flex-start;
  column-gap: 10px;
  row-gap: 0px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

.upgradesTabButtons {
  background-color: transparent;
  border: 4px solid rgb(0, 123, 255);
  border-radius: 12px;
  color: rgb(0, 123, 255);
  padding: 4px 8px;
  text-align: center;
  display: block;
  font-size: 32px;
  font-family: "Roboto Mono";
}

.upgradesTabButtons:hover {
  background-color: rgb(0, 35, 73);
}

.upgradesTabButtons:active {
  background-color: rgb(0, 18, 37);
  color: rgb(0, 66, 137);
  border: 4px solid rgb(0, 66, 137);
}

/* General upgrades title text design */
.upgradesTitle {
  color:rgb(164, 164, 164);
  font-size: 36px;
  margin-top: 20px;
}

/* General milestones title text design */
.milestonesTitle {
  color:rgb(164, 164, 164);
  font-size: 36px;
}

/* General settings title text design */
.settingsTitle {
  color:rgb(164, 164, 164);
  font-size: 36px;
}

/* General upgrade button design */
.upgradeButtonsGroup {
  display: flex;
  flex-wrap: wrap;
  width: 1050px;
  height: 490px;
  justify-content: center;
  align-content: flex-start;
  column-gap: 10px;
  row-gap: 0px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 4px solid rgb(108, 108, 108);
  border-radius: 12px;
}

/* Upgrade button design */
.upgradeButtons {
  background-color: transparent;
  border: 4px solid rgb(0, 123, 255);
  border-radius: 12px;
  width: 250px;
  height: 150px;
  padding: 12px 24px;
  margin: 0px;
  margin-top: 10px;
  text-align: center;
  color: rgb(0, 123, 255);
  font-size: 16px;
  font-family: "Roboto Mono";
  display: block;
}

/* Disabled upgrade button design */
.upgradeButtons.disabled {
  background-color: transparent;
  border: 4px solid rgb(0, 66, 137);
  border-radius: 12px;
  color: rgb(0, 66, 137);
}

/* Upgrade button description design */
.upgradeDescription {
  display: block;
}

/* Upgrade button cost design */
.upgradeCost {
  display: block;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
}

/* INTERMEDIATE UPGRADES */
/* General intermediate upgrade button design */
.intermediateUpgradeButtonsGroup {
  display: flex;
  flex-wrap: wrap;
  width: 1050px;
  height: 490px;
  justify-content: center;
  align-content: flex-start;
  column-gap: 10px;
  row-gap: 0px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 4px solid rgb(108, 108, 108);
  border-radius: 12px;
}

/* Hidden intermediate upgrade (not unlocked yet)*/
.intermediateUpgradeButtons.iU-hidden {
  display: none;
}

/* Intermediate upgrade button design */
.intermediateUpgradeButtons {
  display: block;
  color: rgb(0, 191, 255);
  border: 4px solid rgb(0, 191, 255);
}

.intermediateUpgradeButtons:hover {
  background-color: rgb(0, 56, 74);
}

.intermediateUpgradeButtons:active {
  background-color: rgb(0, 28, 37);
  color: rgb(0, 103, 138);
  border: 4px solid rgb(0, 103, 138);
}

/* Disabled intermediate upgrade button design */
.intermediateUpgradeButtons.disabled {
  background-color: transparent;
  color: rgb(0, 103, 138);
  border: 4px solid rgb(0, 103, 138);
}

.upgradesTabButtonsSeparator.inactive {
  display: none;
}

.upgradesTabButtonsSeparator {
  display: block;
  width: 100px;
}

/* ADVANCED UPGRADES */
/* General advanced upgrade button design */
.advancedUpgradeButtonsGroup {
  display: flex;
  flex-wrap: wrap;
  width: 1050px;
  height: 490px;
  justify-content: center;
  align-content: flex-start;
  column-gap: 10px;
  row-gap: 0px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 4px solid rgb(108, 108, 108);
  border-radius: 12px;
}

/* Advanced upgrade button design */
.advancedUpgradeButtons {
  display: block;
  color: rgb(0, 255, 204);
  border: 4px solid rgb(0, 255, 204);
}

.advancedUpgradeButtons:hover {
  background-color: rgb(0, 87, 70);
}

.advancedUpgradeButtons:active {
  background-color: rgb(0, 36, 29);
  color: rgb(0, 138, 110);
  border: 4px solid rgb(0, 138, 110);
}

/* Disabled advanced upgrade button design */
.advancedUpgradeButtons.disabled {
  background-color: transparent;
  color: rgb(0, 138, 110);
  border: 4px solid rgb(0, 138, 110);
}

/* EXPERT UPGRADES */
/* General expert upgrade button design */
.expertUpgradeButtonsGroup {
  display: flex;
  flex-wrap: wrap;
  width: 1050px;
  height: 490px;
  justify-content: center;
  align-content: flex-start;
  column-gap: 10px;
  row-gap: 0px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 4px solid rgb(108, 108, 108);
  border-radius: 12px;
}

/* Hidden expert upgrades (not unlocked yet)*/
.expertUpgradeButtons.eU-hidden {
  display: none;
}

/* Expert upgrade button design */
.expertUpgradeButtons {
  display: block;
  color: rgb(0, 255, 89);
  border: 4px solid rgb(0, 255, 89);
}

.expertUpgradeButtons:hover {
  background-color: rgb(0, 92, 32);
}

.expertUpgradeButtons:active {
  background-color: rgb(0, 43, 14);
  color: rgb(0, 145, 51);
  border: 4px solid rgb(0, 145, 51);
}

/* Disabled expert upgrade button design */
.expertUpgradeButtons.disabled {
  background-color: transparent;
  color: rgb(0, 145, 51);
  border: 4px solid rgb(0, 145, 51);
}

/* MASTER UPGRADES */
/* General master upgrade button design */
.masterUpgradeButtonsGroup {
  display: flex;
  flex-wrap: wrap;
  width: 1050px;
  height: 490px;
  justify-content: center;
  align-content: flex-start;
  column-gap: 10px;
  row-gap: 0px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 4px solid rgb(108, 108, 108);
  border-radius: 12px;
}

/* Hidden master upgrades (not unlocked yet)*/
.masterUpgradeButtons.mU-hidden {
  display: none;
}

/* Master upgrade button design */
.masterUpgradeButtons {
  display: block;
  color: rgb(153, 255, 0);
  border: 4px solid rgb(153, 255, 0);
}

.masterUpgradeButtons:hover {
  background-color: rgb(60, 100, 0);
}

.masterUpgradeButtons:active {
  background-color: rgb(24, 40, 0);
  color: rgb(85, 141, 0);
  border: 4px solid rgb(85, 141, 0);
}

/* Disabled master upgrade button design */
.masterUpgradeButtons.disabled {
  background-color: transparent;
  color: rgb(85, 141, 0);
  border: 4px solid rgb(85, 141, 0);
}

/* BUYABLES */
/* General buyable button design */
.buyablesUpgradeButtonsGroup {
  display: flex;
  flex-wrap: wrap;
  width: 1050px;
  height: 490px;
  justify-content: center;
  align-content: flex-start;
  column-gap: 10px;
  row-gap: 0px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 4px solid rgb(108, 108, 108);
  border-radius: 12px;
}

/* Hidden intermediate upgrades (not unlocked yet)*/
.buyablesUpgradeButtons.bU-hidden {
  display: none;
}

/* Buyables upgrade button design */
.buyablesUpgradeButtons {
  display: block;
  color: rgb(183, 128, 255);
  border: 4px solid rgb(183, 128, 255);
}

.buyablesUpgradeButtons:hover {
  background-color: rgb(69, 47, 97);
}

.buyablesUpgradeButtons:active {
  background-color: rgb(27, 19, 39);
  color: rgb(108, 75, 151);
  border: 4px solid rgb(108, 75, 151);
}

/* Disabled buyable upgrade button design */
.buyablesUpgradeButtons.disabled {
  background-color: transparent;
  color: rgb(108, 75, 151);
  border: 4px solid rgb(108, 75, 151);
}

/* MILESTONE STUFF */

.milestonesOuterGroup {
  display: flex;
  flex-wrap: wrap;
  width: 1700px;
  height: 640px;
  justify-content: center;
  align-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

  .milestonesArrow {
    display: flex;
    flex-wrap: wrap;
    width: 80px;
    height: 80px;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    border: 4px solid rgb(108, 108, 108);
    border-radius: 100%;
  }

  .milestoneArrow {
    font-size: 48px;
    user-select: none;
  }

  .milestonesInnerGroup {
    display: flex;
    flex-wrap: wrap;
    width: 1400px;
    height: 100%;
    justify-content: center;
    align-content: flex-start;
    align-items: center;
    column-gap: 40px;
    row-gap: 0px;
    margin-left: auto;
    margin-right: auto;
  }

.milestonesCapsuleContainer {
  display: flex;
  flex-wrap: wrap;
  width: 1500px;
  height: 500px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

/* Milestone capsule stuff */
.milestonesCapsule {
  width: 300px;
  height: 400px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  border: 4px solid rgb(108, 108, 108);
  border-radius: 24px;
}

  /* [if milestone achieved] */
.milestonesCapsule.milestoneAchieved {
  width: 300px;
  height: 400px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  border: 4px solid rgb(255, 183, 0);
  border-radius: 24px;
  box-shadow: 0px 0px 10px 0px rgb(255, 183, 0);
}

  .milestoneCapsuleTitle {
    position: relative;
    top: 5%;
    text-align: center;
    font-size: 36px;
  }

  /* [if milestone achieved] */
  .milestoneAchieved .milestoneCapsuleTitle {
    position: relative;
    top: 5%;
    text-align: center;
    font-size: 36px;
    color: rgb(255, 183, 0);
  }

  .capsuleSeparator {
    position: relative;
    top: 10%;
    width: 100%;
    border: 2px solid rgb(108, 108, 108);
  }

    /* [if milestone achieved] */
  .milestoneAchieved .capsuleSeparator {
    position: relative;
    top: 10%;
    width: 100%;
    border: 2px solid rgb(255, 183, 0);
  }

  .milestoneCapsuleFlex {
    display: flex;
    position: relative;
    top: 10%;
    width: 100%;
    height: 76%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }

    .milestoneCapsuleRewardSector {
      display: flex;
      position: relative;
      width: 90%;
      height: 100%;
      justify-content: center;
      align-items: center; 
    }
      .milestoneCapsuleReward {
        text-align: center;
        font-size: 24px;
      }

      /* [if milestone achieved] */
      .milestoneAchieved .milestoneCapsuleReward {
        text-align: center;
        font-size: 24px;
        color: rgb(255, 183, 0);
      }

    .milestoneCapsuleInnerSeparator {
      width: 70%;
      border: 2px solid rgb(45, 45, 45);
      align-self: center;
    }

    /* [if milestone achieved] */
    .milestoneAchieved .milestoneCapsuleInnerSeparator {
      width: 70%;
      border: 2px solid rgb(101, 73, 0);
      align-self: center;
    }
    
    .milestoneCapsuleRequirementSector {
      display: flex;
      position: relative;
      width: 90%;
      height: 100%;
      justify-content: center;
      align-items: center; 
    }
      .milestoneCapsuleRequirement {
        text-align: center;
        font-size: 24px;
      }

      /* [if milestone achieved] */
      .milestoneAchieved .milestoneCapsuleRequirement {
        text-align: center;
        font-size: 24px;
        color: rgb(255, 183, 0);
      }


/* RESEARCH */
.researchOuterGroup {
  display: flex;
  flex-wrap: wrap;
  width: 1400px;
  height: 640px;
  justify-content: center;
  align-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

.researchArrow {
  display: flex;
  flex-wrap: wrap;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  border: 4px solid rgb(108, 108, 108);
  border-radius: 100%;
}

.researchArrowText {
  font-size: 48px;
  user-select: none;
}

.researchInnerGroup {
  display: flex;
  flex-wrap: wrap;
  width: 1100px;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}

.researchTitle {
  color:rgb(164, 164, 164);
  font-size: 36px;
}

.researchCapsuleContainer {
  display: flex;
  width: 1060px;
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  align-items: center;
  row-gap: 40px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

.researchCapsule {
  display: flex;
  width: 1000px;
  height: 200px;
  justify-content: center;
  align-content: flex-start;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border: 4px solid rgb(108, 108, 108);
  border-radius: 12px;
}

.researchCapsuleHead {
  display: flex;
  width: 200px;
  height: 200px;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}

.researchCapsuleHead:hover {
  cursor: pointer;
}

  .researchCapsuleTitle { 
    position: relative;
    top: 5%;
    text-align: center;
    font-size: 36px;
    user-select: none;
  }

  .researchCapsuleToggle { 
    position: relative;
    top: 20%;
    text-align: center;
    font-size: 24px;
    user-select: none;
  }

.researchSeparator1 {
  height: 200px;
  border: 2px solid rgb(108, 108, 108);
}

.researchCapsuleBody {
  display: flex;
  width: 800px;
  height: 200px;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}

  .researchCapsuleDescriptionContainer {
    display: flex;
    width: 800px;
    height: 148px;
    justify-content: center;
    align-content: flex-start;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }

    .researchCapsuleDescription {
      text-align: center;
      font-size: 24px;
    }

  .researchSeparator2 {
    width: 800px;
    border: 2px solid rgb(108, 108, 108);
  }

  .researchCapsuleProgressBar {
    display: flex;
    width: 800px;
    height: 48px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgb(33, 33, 33);
    z-index: -1;
  }

  .researchCapsuleProgressFill {
    position: relative;
    height: 100%;
    background-color: #4caf50;
    width: 50%;
    transition: width 0.3s ease;
  }

    .researchCapsuleProgressNumberContainer {
      display: flex;
      width: 400px;
      height: 50px;
      justify-content: left;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
    }

      .researchCapsuleProgressNumber {
        margin-left: 10px;
      }


    .researchCapsuleProgressPerSecondContainer {
      display: flex;
      width: 400px;
      height: 50px;
      justify-content: right;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
    }

      .researchCapsuleProgressPerSecond {
        margin-right: 10px;
      }

/* Active research design */
.researchCapsule.researchActive {
  border: 4px solid rgb(10, 204, 0);
}

.researchActive .researchSeparator1 {
  border: 2px solid rgb(10, 204, 0);
}

.researchActive .researchSeparator2 {
  border: 2px solid rgb(10, 204, 0);
}

.researchActive .researchCapsuleTitle {
  color: rgb(10, 204, 0);
}

.researchActive .researchCapsuleToggle {
  color: rgb(10, 204, 0);
}

.researchActive .researchCapsuleDescription {
  color: rgb(10, 204, 0);
}

.researchActive .researchCapsuleProgressNumber {
  color: rgb(10, 204, 0);
}

.researchActive .researchCapsuleProgressPerSecond {
  color: rgb(10, 204, 0);
}


/* Finished research design */
.researchCapsule.researchFinished {
  pointer-events: none;
  border: 4px solid rgb(255, 183, 0);
  box-shadow: 0px 0px 10px 0px rgb(255, 183, 0);
}

.researchFinished .researchSeparator1 {
  border: 2px solid rgb(255, 183, 0);
}

.researchFinished .researchSeparator2 {
  border: 2px solid rgb(255, 183, 0);
}

.researchFinished .researchCapsuleTitle {
  color: rgb(255, 183, 0);
}

.researchFinished .researchCapsuleToggle {
  color: rgb(255, 183, 0);
}

.researchFinished .researchCapsuleDescription {
  color: rgb(255, 183, 0);
}

.researchFinished .researchCapsuleProgressNumber {
  color: rgb(255, 183, 0);
}

.researchFinished .researchCapsuleProgressPerSecond {
  color: rgb(255, 183, 0);
}

/* PRESTIGE */
#reset1_bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(25, 25, 25);
  z-index: 1;
  display: none;
}

.prestigeGroup {
  display: flex;
  flex-wrap: wrap;
  width: 1500px;
  height: 600px;
  justify-content: center;
  align-content: center;
  align-items: center;
  column-gap: 40px;
  row-gap: 0px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

#escapeButton {
  position: relative;
  width: 400px;
  height: 240px;
  font-family: "Roboto Mono";
  font-size: 82px;
  background-color: rgb(33, 0, 64);
  color: rgb(132, 0, 255);
  border: 4px solid rgb(132, 0, 255);
  border-radius: 12px;
  z-index: 2;
}

#escapeButton:hover {
  background-color: rgb(21, 0, 41);
  color: rgb(100, 0, 194);
  border: 4px solid rgb(132, 0, 255);
  box-shadow: 0px 0px 60px 0px rgb(40, 0, 79);
}

#slash {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 400px;
  margin-left: -10px;
  margin-top: -200px;
  background-color: rgb(25, 25, 25);
  transform: rotate(20deg);
  display: none;
}

#escapeMessage {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Roboto Mono";
  font-size: 68px;
  color: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 4;
  opacity: 0;
  transition: opacity 3s ease-out;
}

#escapeMessage.show {
  display: block;
  opacity: 1;
}

#escapeMessage.fade-out {
  opacity: 0;
}

/* SETTINGS */
.settingsGroup {
  display: flex;
  flex-wrap: wrap;
  width: 1500px;
  height: 600px;
  justify-content: center;
  align-content: flex-start;
  align-items: center;
  column-gap: 40px;
  row-gap: 0px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

.settingsButtonsGroup {
  display: flex;
  flex-wrap: wrap;
  width: 700px;
  height: 500px;
  align-content: center;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 20px;
  border: 4px solid rgb(108, 108, 108);
  border-radius: 12px;
}

.export-import {
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  height: 80px;
  margin-top: 20px;
  justify-content: center;
  align-content: center;
}

.statsGroup {
  display: flex;
  flex-wrap: wrap;
  width: 700px;
  height: 480px;
  align-content: center;
  flex-direction: column;
  row-gap: 4px;
  margin-top: 20px;
  padding-top: 20px;
  border: 4px solid rgb(108, 108, 108);
  border-radius: 12px;
}

/* General setting buttons design */
.settingButtons {
  background-color: transparent;
  border: 4px solid rgb(153, 153, 153);
  border-radius: 12px;
  color: rgb(153, 153, 153);
  padding: 12px 24px;
  text-align: center;
  display: block;
  font-size: 32px;
  font-family: "Roboto Mono";
}

.settingButtons:hover {
  background-color: rgb(52, 52, 52);
}

.settingButtons:active {
  background-color: rgb(26, 26, 26);
  color: rgb(74, 74, 74);
  border: 4px solid rgb(74, 74, 74);
}

#killYourself {
  background-color: transparent;
  border: 4px solid rgb(255, 0, 0);
  border-radius: 12px;
  color: rgb(255, 0, 0);
  padding: 12px 24px;
  text-align: center;
  display: block;
  font-size: 32px;
  font-family: "Roboto Mono";
}

#killYourself:hover {
  background-color: rgb(80, 0, 0);
}

#killYourself:active {
  background-color: rgb(45, 0, 0);
  color: rgb(135, 0, 0);
  border: 4px solid rgb(135, 0, 0);
}

.statsHighlight {
  color: rgb(125, 125, 125);
}

.endgameText {
  margin-top: 25px;
}
