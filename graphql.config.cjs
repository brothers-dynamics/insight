const kitqlConfig = require('@kitql/all-in/cjs.cjs');

const scalars = {
  Date: '../helpers/scalarTypes#CodegenDate',
  DateTime: 'Date'
};

/** @type {import('@kitql/all-in').KitQLProjects} */
const config = {
  projects: {
    init: kitqlConfig({
      scalars
      // projectLocation: './packages/init' // if you are in a mono-repo
    })
  }
};

module.exports = config;
