//Task 1 Seconds Sum

function seconds(input){

    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);

    let sum = firstTime + secondTime + thirdTime;
    
    let timeInMinutes = Math.floor(sum / 60);
    let timeInSeconds = sum % 60;

    if(timeInSeconds < 10){
        console.log(`${timeInMinutes}:0${timeInSeconds}`);
    }else{
        console.log(`${timeInMinutes}:${timeInSeconds}`);
    }
}
seconds(["14", "12","10"]);


//Task 2 Bonus Points

function bonus(input) {
  let startingPoints = Number(input[0]);
  let bonusPoints = 0;

  if (startingPoints <= 20) {
    bonusPoints = 5;
  } else if (startingPoints > 100 && startingPoints <= 1000) {
    bonusPoints = startingPoints * 0.2;
  } else if (startingPoints > 1000) {
    bonusPoints = startingPoints * 0.1;
  }

  if (startingPoints % 2 == 0) {
    bonusPoints += 1;
  } else if (startingPoints % 10 == 5) {
    bonusPoints += 2;
  }

  let sum = startingPoints + bonusPoints;
  console.log(bonusPoints);
  console.log(sum);
}
bonus(["2703"]);


//Task 3 Toys' Store

function store(input) {

  let vacationPrice = Number(input[0]);
  let puzzles = Number(input[1]);
  let dolls = Number(input[2]);
  let bears = Number(input[3]);
  let minions = Number(input[4]);
  let trucks = Number(input[5]);

  let puzzlesPrice = 2.6;
  let dollsPrice = 3;
  let bearsPrice = 4.1;
  let minionsPrice = 8.2;
  let trucksPrice = 2;

  let totalSum = puzzles * puzzlesPrice + dolls * dollsPrice +bears * bearsPrice + minions * minionsPrice + trucks * trucksPrice;

  let toysSum = puzzles + dolls + bears + minions + trucks;
  if (toysSum >= 50) {
    totalSum = totalSum - totalSum * 0.25;
  }

  let rent = totalSum * 0.1;
  let profit = totalSum - rent;

  if (profit >= vacationPrice) {
    console.log(`Yes! ${(profit - vacationPrice).toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${Math.abs(profit - vacationPrice).toFixed(2)} lv needed.`);
  }
}
store(["320", "8", "2", "5", "5", "1"]);


//Task 4 Godzilla Vs Kong

function movie(input) {

  let budget = Number(input[0]);
  let actors = Number(input[1]);
  let pricePerActor = Number(input[2]);

  let decorationCost = budget * 0.1;
  let priceForActors = actors * pricePerActor;

  if (actors > 150) {
    priceForActors = priceForActors - priceForActors * 0.1;
  }

  let totalCost = decorationCost + priceForActors;

  if (budget <= totalCost) {
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${Math.abs(budget - totalCost).toFixed(2)} leva more`);
  } else {
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${(budget - totalCost).toFixed(2)} leva left.`);
  }
}
movie(["15437.62", "186", "57.99"]);


//Task 5 World Swimming Record

function swimming(input) {

  let currentRecordInSeconds = Number(input[0]);
  let distanceInMeters = Number(input[1]);
  let timeInSecondsPerMeter = Number(input[2]);

  let timeNeeded = distanceInMeters * timeInSecondsPerMeter;
  let waterResistance = Math.floor((distanceInMeters / 15) * 12.5);
  let totalTime = timeNeeded + waterResistance;

  if (currentRecordInSeconds > totalTime) {
    console.log(
      `Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
  } else {
    console.log(`No, he failed! He was ${(totalTime - currentRecordInSeconds).toFixed(2)} seconds slower.`);
  }
}
swimming(["10464", "1500", "20"]);


//Task 6 Shopping

function shopping(input){

    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let videocardsSum = videocards * 250;

    let processorPrice = videocardsSum * 0.35;
    let ramPrice = videocardsSum * 0.10;

    let totalCost = videocardsSum + processors * processorPrice + ram * ramPrice;
    
    if(videocards > processors){
        totalCost = totalCost - totalCost*0.15
    }

    if(budget >= totalCost){
        console.log(`You have ${(budget - totalCost).toFixed(2)} leva left!`);
    }else{
        console.log(`Not enough money! You need ${Math.abs(budget-totalCost).toFixed(2)} leva more`);
    }
}
shopping(["920.45", "3", "1", "1"]);


//Task 7 Lunch break

function lunch(input){

    let movieName = input[0];
    let movieLength = Number(input[1]);
    let breakLength = Number(input[2]);
    let lunchLength = 1/8 * breakLength;
    let chillingLength = 1/4 * breakLength;
    let timeNeeded = movieLength + lunchLength + chillingLength;

    if(breakLength >= timeNeeded){
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(breakLength-timeNeeded)} minutes free time.`);
    }else{
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(Math.abs(breakLength - timeNeeded))} more minutes.`);
    }
}
lunch(["Teen Wolf", "48", "60"]);

