'use strict';

const path = require(`path`);
const Sequelize = require(`sequelize`);

(async () => {
  const sequelize = new Sequelize(`library`, `academy`, `123456`, {
    host: `localhost`,
    dialect: `postgres`,
  });

  const Reader = sequelize.import(path.join(__dirname, `./models/reader`));
  const result = await Reader.findAll({
      order: [
          [`birthDate`, `DESC`]
      ],
      raw: true,
  });

  console.log(result);
  sequelize.close();
})();
