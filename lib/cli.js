#!/usr/bin/env node

import { roll } from "./roll.js";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const roll_res = roll(args.sides || 6, args.dice || 2, args.rolls || 1);

console.log(JSON.stringify(roll_res));
