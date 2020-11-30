#!/bin/sh
# yarn sequelize db:migrate
# yarn typeorm migration:run
yarn typeorm migration:run -c postgres
yarn dev:server
