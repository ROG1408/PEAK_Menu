function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Votes");

    const row = [
      new Date(),

      // NEW FIELDS (added at the end of the sheet)
      data.scoutName,
      data.aboutScout,

      data.expeditionType,
      data.grappleMode,
      data.kickMode,
      data.fogRises,
      data.hungerRate,
      data.fallDamage,
      data.otherDamage,
      data.coldAtNight,
      data.itemWeight,
      data.flaresAtPeak,
      data.climbingStamina,

      data.airlineFood,
      data.antidote,
      data.bandages,
      data.chainLauncher,
      data.piton,
      data.energyDrink,
      data.firstAidKit,
      data.checkpointFlag,
      data.flare,
      data.granolaBar,
      data.meatPack,
      data.lantern,
      data.bigLollipop,
      data.piratesCompass,
      data.portableStove,
      data.ropeCannon,
      data.ropeSpool,
      data.scoutCookies,
      data.sportsDrink,
      data.trailMix,
      data.blowgun,
      data.parasol,
      data.rescueClaw,
      data.sunscreen,
      data.balloon,
      data.scoutCannon,
      data.balloonBunch,
      data.fortifiedMilk,

      data.jellyfish,
      data.urchins,
      data.sporeBombs,
      data.bees,
      data.rain,
      data.zombies,
      data.beetles,
      data.spiders,
      data.mandrake,
      data.sporeClouds,
      data.wind,
      data.geysers,
      data.flashBulbs,
      data.blizzards,
      data.tornadoes,
      data.cactusThorns,
      data.dynamite,
      data.tumbleweeds,
      data.antlions,
      data.blazingSun,
      data.scorpions,
      data.lavaRises,
      data.scoutmaster,
      data.antiRopeSpool,
      data.bugleOfFriendship,
      data.cureAll,
      data.cursedSkull,
      data.faerieLantern,
      data.pandorasLunchbox,
      data.antiRopeCannon,
      data.scoutEffigy,
      data.scoutmastersBugle,
      data.bookOfBones
    ];

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "OK" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "ERROR", message: err }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
