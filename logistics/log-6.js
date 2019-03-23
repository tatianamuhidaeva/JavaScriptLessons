function arcClock (hour, minute) {
  let degM = 6 * (minute % 60),
   degH = 30 * ((hour + (minute/60)) % 12);
   return Math.abs(degM - degH) <= 180 ? Math.abs(degM - degH)  : 360 - Math.abs(degM - degH) ; 
}

console.log(arcClock(14, 120));