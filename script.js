const ENDPOINT_URL = "https://script.google.com/macros/s/AKfycbzX21-wB1of0V2Qpe97KGWMQHQYysLK-lg0zbk6fopGC_zYYfDXVmZtKGfZecZ7Qc0A/exec";

function getCheckbox(id) {
  return document.getElementById(id).checked ? "TRUE" : "FALSE";
}

function getSelect(id) {
  return document.getElementById(id).value;
}

async function submitVote() {
  const status = document.getElementById("statusMsg");
  const btn = document.getElementById("submitBtn");

  status.textContent = "Submitting...";
  btn.disabled = true;
  btn.style.opacity = "0.5";

  const data = {
    // NEW FIELDS
    scoutName: document.getElementById("scoutName").value.trim(),
    aboutScout: document.getElementById("aboutScout").value.trim(),

    expeditionType: getSelect("expeditionType"),
    grappleMode: getCheckbox("grappleMode"),
    kickMode: getCheckbox("kickMode"),
    fogRises: getSelect("fogRises"),
    hungerRate: getSelect("hungerRate"),
    fallDamage: getSelect("fallDamage"),
    otherDamage: getSelect("otherDamage"),
    coldAtNight: getSelect("coldAtNight"),
    itemWeight: getSelect("itemWeight"),
    flaresAtPeak: getSelect("flaresAtPeak"),
    climbingStamina: getSelect("climbingStamina"),

    airlineFood: getCheckbox("airlineFood"),
    antidote: getCheckbox("antidote"),
    bandages: getCheckbox("bandages"),
    chainLauncher: getCheckbox("chainLauncher"),
    piton: getCheckbox("piton"),
    energyDrink: getCheckbox("energyDrink"),
    firstAidKit: getCheckbox("firstAidKit"),
    checkpointFlag: getCheckbox("checkpointFlag"),
    flare: getCheckbox("flare"),
    granolaBar: getCheckbox("granolaBar"),
    meatPack: getCheckbox("meatPack"),
    lantern: getCheckbox("lantern"),
    bigLollipop: getCheckbox("bigLollipop"),
    piratesCompass: getCheckbox("piratesCompass"),
    portableStove: getCheckbox("portableStove"),
    ropeCannon: getCheckbox("ropeCannon"),
    ropeSpool: getCheckbox("ropeSpool"),
    scoutCookies: getCheckbox("scoutCookies"),
    sportsDrink: getCheckbox("sportsDrink"),
    trailMix: getCheckbox("trailMix"),
    blowgun: getCheckbox("blowgun"),
    parasol: getCheckbox("parasol"),
    rescueClaw: getCheckbox("rescueClaw"),
    sunscreen: getCheckbox("sunscreen"),
    balloon: getCheckbox("balloon"),
    scoutCannon: getCheckbox("scoutCannon"),
    balloonBunch: getCheckbox("balloonBunch"),
    fortifiedMilk: getCheckbox("fortifiedMilk"),

    jellyfish: getCheckbox("jellyfish"),
    urchins: getCheckbox("urchins"),
    sporeBombs: getCheckbox("sporeBombs"),
    bees: getCheckbox("bees"),
    rain: getCheckbox("rain"),
    zombies: getCheckbox("zombies"),
    beetles: getCheckbox("beetles"),
    spiders: getCheckbox("spiders"),
    mandrake: getCheckbox("mandrake"),
    sporeClouds: getCheckbox("sporeClouds"),
    wind: getCheckbox("wind"),
    geysers: getCheckbox("geysers"),
    flashBulbs: getCheckbox("flashBulbs"),
    blizzards: getCheckbox("blizzards"),
    tornadoes: getCheckbox("tornadoes"),
    cactusThorns: getCheckbox("cactusThorns"),
    dynamite: getCheckbox("dynamite"),
    tumbleweeds: getCheckbox("tumbleweeds"),
    antlions: getCheckbox("antlions"),
    blazingSun: getCheckbox("blazingSun"),
    scorpions: getCheckbox("scorpions"),
