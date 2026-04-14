const ENDPOINT_URL = "https://script.google.com/macros/s/AKfycbzX21-wB1of0V2Qpe97KGWMQHQYysLK-lg0zbk6fopGC_zYYfDXVmZtKGfZecZ7Qc0A/exec";

function getCheckbox(id) {
  return document.getElementById(id).checked ? "TRUE" : "FALSE";
}

function getSelect(id) {
  return document.getElementById(id).value;
}

async function submitVote() {
  const status = document.getElementById("statusMsg");
  status.textContent = "Submitting...";

  const data = {
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
    lavaRises: getCheckbox("lavaRises"),
    scoutmaster: getCheckbox("scoutmaster"),
    antiRopeSpool: getCheckbox("antiRopeSpool"),
    bugleOfFriendship: getCheckbox("bugleOfFriendship"),
    cureAll: getCheckbox("cureAll"),
    cursedSkull: getCheckbox("cursedSkull"),
    faerieLantern: getCheckbox("faerieLantern"),
    pandorasLunchbox: getCheckbox("pandorasLunchbox"),
    antiRopeCannon: getCheckbox("antiRopeCannon"),
    scoutEffigy: getCheckbox("scoutEffigy"),
    scoutmastersBugle: getCheckbox("scoutmastersBugle"),
    bookOfBones: getCheckbox("bookOfBones")
  };

  try {
    const res = await fetch(ENDPOINT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    // With no-cors we can't read the response, so just assume success
    status.textContent = "Vote submitted!";
  } catch (err) {
    console.error(err);
    status.textContent = "Error submitting vote.";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submitBtn").addEventListener("click", submitVote);
});
