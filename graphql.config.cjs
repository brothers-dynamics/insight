// I have to make it better one day!
const kitqlConfig = require('@kitql/all-in/cjs.cjs');

const scalars = {
  Date: '../helpers/scalarTypes#CodegenDate',
  DateTime: 'Date'
};

const customConfig = kitqlConfig({
  scalars
});

/** @type {import('@kitql/all-in').KitQLProjects} */
const config = {
  projects: {
    init: customConfig
  }
};

module.exports = config;
