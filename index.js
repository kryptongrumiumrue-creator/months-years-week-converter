const readline = require('readline-sync');

const months = Number(readline.question('Enter months: '));

const MONTHS_PER_YEAR = 12;
const WEEKS_PER_MONTH = 4;
const WEEKS_PER_YEAR = MONTHS_PER_YEAR * WEEKS_PER_MONTH;

const totalWeeks = Math.floor(months * WEEKS_PER_MONTH);
const years = Math.floor(totalWeeks / WEEKS_PER_YEAR);
const remainingWeeks = totalWeeks % WEEKS_PER_YEAR;

const inputUnit = months === 1 ? 'month' : 'months';
const yearsUnit = years === 1 ? 'year' : 'years';
const weeksUnit = remainingWeeks === 1 ? 'week' : 'weeks';

console.log(`\n${months} ${inputUnit} is ${years} ${yearsUnit} and ${remainingWeeks} ${weeksUnit}.`);