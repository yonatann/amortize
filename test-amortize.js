const amortize = require('./index');
const moment = require('moment');

const firstPayment = moment('2020-03-01');
const referenceDate = moment('2020-02-19 09:50:11');

const exactOffset = firstPayment.diff(referenceDate, 'days', true);
let loanStartOffset = Math.floor(exactOffset);
let daysInMonth = moment(referenceDate).daysInMonth();
let offsetRatio = loanStartOffset / daysInMonth;

console.log(`exact offset: ${exactOffset}, start offset: ${loanStartOffset}, days in month: ${daysInMonth}, offsetRatio: ${offsetRatio}`);

const res = amortize({
    amount: 15000,
    rate: 7.2,
    totalTerm: 36,
    amortizeTerm: 1,
    partialMonthOffset:  offsetRatio
});

console.log(res);
