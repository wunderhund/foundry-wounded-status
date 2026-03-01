console.log("craigs-wounded-status: script file loaded");
Hooks.once('init', () => {
  console.log("loading craigs-wounded-status...");
  CONFIG.statusEffects.push({
    id: "craigs-wounded-status",
    label: "Wounded Status Effect",
    icon: "modules/craigs-wounded-status/icons/wounded.webp"
  });
  console.log(
    "confim craigs-wounded-status has been added",
    CONFIG.statusEffects.find(e => e.id === "craigs-wounded-status")
  );
});
