// 1 - 2. Get hours for a night
const getSleepHours = day => {
  switch (day) {
    case 'sunday':
    return 8;
    break;

    case 'monday':
    return 6;
    break;

    case 'tuesday':
    return 7;
    break;

    case 'wednesday':
    return 7;
    break;

    case 'thursday':
    return 8;
    break;

    case 'friday':
    return 6;
    break;

    case 'saturday':
    return 7;
    break;

    default:
    return undefined;
  }
};

// 3. Test getSleepHours()
/*
console.log(getSleepHours('banana'));
console.log(getSleepHours('tuesday'));
console.log(getSleepHours('synday'));
console.log(getSleepHours('monday'));
console.log(getSleepHours('sunday'));
console.log(getSleepHours(''));
console.log(getSleepHours(42));
console.log(getSleepHours('wednesday'));
console.log(getSleepHours('friday'));
console.log(getSleepHours('thursday'));
console.log(getSleepHours('saturday'));
console.log(getSleepHours(true));
*/

// 4 - 5. Determine total actual for week
/*
const getActualSleepHours = () => {
  
  const sundayHours = getSleepHours('sunday');
  const mondayHours = getSleepHours('monday');
  const tuesdayHours = getSleepHours('tuesday');
  const wednesdayHours = getSleepHours('wednesday');
  const thursdayHours = getSleepHours('thursday');
  const fridayHours = getSleepHours('friday');
  const saturdayHours = getSleepHours('saturday');

  const totalHours 
  = mondayHours
  + tuesdayHours
  + wednesdayHours
  + thursdayHours
  + fridayHours
  + saturdayHours;
  return totalHours;
};
*/

// How can we do this with an implict return?
/* 
Remember that a function call is ev*valu*ated so it becomes a value like any other
*/ 
// Like this (from the hint):  
const getActualSleepHours = () =>
  getSleepHours('sunday')
  + getSleepHours('monday')
  + getSleepHours('tuesday')
  + getSleepHours('wednesday')
  + getSleepHours('thursday')
  + getSleepHours('friday')
  + getSleepHours('saturday')
  ;

// 6. Get ideal hours
const getIdealSleepHours = () => {
  const idealHoursPerNight = 7;
  return idealHoursPerNight * 7;
}
// 7. Test actual and ideal hours functions
// console.log(getActualSleepHours());
// console.log(getIdealSleepHours());

// 8 - 11. Calculate sleep debt and report
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('Congratulations, Pinocchio, you got exactly the right number of hours sleep.') } else {
      if (actualSleepHours > idealSleepHours) {
        const hoursOver = actualSleepHours - idealSleepHours;
          console.log(`You got ${actualSleepHours} hours sleep. You should have had ${idealSleepHours} sleep. You slept in by ${hoursOver} hours.\nSeriously? You wasted that many hours of your life lying in bed?`) } else {
          const hoursShort = idealSleepHours - actualSleepHours;
          console.log(`You got ${actualSleepHours} hours sleep. You should have had ${idealSleepHours} sleep. You cut yourself ${hoursShort} hours short on sleep.\nNo wonder you're cream-crackered all the time.`)
        }
      
  }
};

calculateSleepDebt();

// 12. Bonus Ball:


/*
In reality you would probably collect the values for ideal sleep hours per night and the nightly data from the user.
The week's data could be input directly or stored in an array and passed to the app as input.
These could be more useful extensions than simply rewriting the above to use literals and eliminating getSleepHours().
*/