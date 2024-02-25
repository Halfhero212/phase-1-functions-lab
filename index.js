function distanceFromHqInBlocks(pickupLocation) {
    // Scuber headquarters is on 42nd street.
    return Math.abs(pickupLocation - 42);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    // One block is 264 feet long.
    return distanceFromHqInBlocks(pickupLocation) * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    // Calculate the number of blocks travelled and convert to feet.
    return Math.abs(destination - start) * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    
    if (distanceInFeet <= 400) {
      // The first 400 feet are free.
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      // Charge 2 cents per foot for distances between 400 and 2000 feet.
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      // Flat fare for distances between 2000 and 2500 feet.
      return 25;
    } else {
      // Do not allow rides over 2500 feet.
      return 'cannot travel that far';
    }
  }
  