export function getYearsFromNowToDate(pastDate) {
    // Get the current date
    const currentDate = new Date();
    
    // Create a new date object for the past date
    const pastDateObj = new Date(pastDate);
    
    // Calculate the difference in years
    const yearsDifference = currentDate.getFullYear() - pastDateObj.getFullYear();
    
    // Check if the past date's month and day have not yet occurred this year
    const monthDiff = currentDate.getMonth() - pastDateObj.getMonth();
    const dayDiff = currentDate.getDate() - pastDateObj.getDate();
    
    // Adjust the years difference if the current date is before the past date's anniversary
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      return yearsDifference - 1;
    }
    
    return yearsDifference;
  }


  export function getYearsAndMonthsFromNowToDate(pastDate) {
    // Get the current date
    const currentDate = new Date();
    
    // Create a new date object for the past date
    const pastDateObj = new Date(pastDate);
    
    // Calculate the difference in years
    let yearsDifference = currentDate.getFullYear() - pastDateObj.getFullYear();
    
    // Calculate the difference in months
    let monthsDifference = currentDate.getMonth() - pastDateObj.getMonth();
    
    // If the current month is before the past month or it's the same month but the current day is before the past day
    if (monthsDifference < 0 || (monthsDifference === 0 && currentDate.getDate() < pastDateObj.getDate())) {
      yearsDifference--;
      monthsDifference += 12;
    }
  
    // If the current day is before the past day in the current month, subtract one month
    if (currentDate.getDate() < pastDateObj.getDate()) {
      monthsDifference--;
      const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, pastDateObj.getDate());
      monthsDifference += (lastMonth.getDate() - currentDate.getDate()) / (new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate());
    }
  
    return {
      years: yearsDifference,
      months: Math.round(monthsDifference) // rounding off the result.
    };
  }