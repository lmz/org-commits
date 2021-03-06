#!/usr/bin/env node

require('babel-polyfill');
var OrgCommits = require('../dist/org-commits').OrgCommits;

// setup cli params and config
var yargs = require('yargs');
var argv = yargs
    .usage('Display commit messages across all repositories for an organization.\nUsage: $0')
    .options(require('../dist/options'))
    .argv;

if (argv.help) {
    yargs.showHelp();
    process.exit();
}

// execute
var orgCommits = new OrgCommits(argv);
orgCommits.run();
