"use strict";

const parseTrie = require("../lib/tries/parseTrie");

let trie;
try {
  trie = require("../build/tries/current/private.complete.json").trie;
} catch (e) {
  trie = require("../build/tries/pre/private.complete.json").trie;
}

module.exports = parseTrie(trie);
