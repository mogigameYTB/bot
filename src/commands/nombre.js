const { Command } = require("sheweny");

module.exports = class TirageCommand extends Command {
  constructor(client) {
    super(client, {
      name: "tirage",
      description: "choisit un nombre aléatoir",
      type: "SLASH_COMMAND",
      category: "Misc",
      cooldown: 1,
      options: [
         {
           name: "nombre",
           description: "Nombre ",
           type: "NUMBER",
           required: true
         }
      ],
    });
  }

  async execute(interaction) {
    const nombre = interaction.options.getNumber("nombre");
     const result = Math.floor(Math.random() * nombre+1);
      interaction.reply({
        content: `Nombre au hasard entre 1 et ${nombre} => ${result} :-)`,
      });
      console.log("quelqu'un veut jouer au loto ?")
  }
};
