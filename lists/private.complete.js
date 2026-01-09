"use strict";

const parseTrie = require("../lib/tries/parseTrie");

const fs = require("fs");
const path = require("path");
const currentPath = path.join(__dirname, "../build/tries/current/private.complete.json");
const prePath = path.join(__dirname, "../build/tries/pre/private.complete.json");
const triePath = fs.existsSync(currentPath) ? currentPath : prePath;

module.exports = parseTrie(require(triePath).trie);
