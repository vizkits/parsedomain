"use strict";

const parseTrie = require("../lib/tries/parseTrie");

let trie;
try {
  trie = require("../build/tries/current/icann.light.json").trie;
} catch (e) {
  trie = require("../build/tries/pre/icann.light.json").trie;
}

module.exports = parseTrie(trie);
