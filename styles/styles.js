const R = 5;
const PI = 3.1415;
const totalArea = PI * R * R;
const minSpace = 0.8;

let week = 2;
let plants = 20;
// let plantspace = 0.8
let plantsByWeek = plants * (2 ** week)
let plantsAreaByWeek = plantsByWeek * 0.8

console.log(plantsByWeek)
console.log(plantsAreaByWeek)

if (plantsAreaByWeek >= totalArea * 0.8) {
    console.log(`Prune the plants due to ${plantsAreaByWeek} is more than 80% of ${totalArea}`);
} else if (plantsAreaByWeek > totalArea * 0.5 && plantsAreaByWeek < totalArea * 0.8) {
    console.log(`Monitor the plants due to ${plantsAreaByWeek} is less than 80% and more than 50% ${totalArea}`);
} else (plantsAreaByWeek <= totalArea * 0.5);
    console.log(`Plant more plants due to ${plantsAreaByWeek} is less than 80% and more than 50% ${totalArea}`);

