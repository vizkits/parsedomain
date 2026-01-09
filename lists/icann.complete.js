"use strict";

const parseTrie = require("../lib/tries/parseTrie");

let trie;
try {
  trie = require("../build/tries/current/icann.complete.json").trie;
} catch (e) {
  trie = require("../build/tries/pre/icann.complete.json").trie;
}

module.exports = parseTrie(trie);
