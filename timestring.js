// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example


// Return '12:01:00'.


// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45


function timeConversion(s) {
    //get the AM/PM
    const meridian = s.slice(-2); // Extract AM/PM
    //get the time
    const timeWithoutMeridian = s.slice(0, -2); // Extract time without AM/PM
    //split at the colons into an array
    const timeParts = timeWithoutMeridian.split(":"); // Split hours, minutes, and seconds

    let hours = parseInt(timeParts[0], 10); // Convert hours to integer
    //minutes stays the same
    const minutes = timeParts[1];
    const seconds = timeParts[2];

    if (meridian === "PM" && hours !== 12) {
        hours += 12; // Add 12 hours for PM except 12:00:00PM
    } else if (meridian === "AM" && hours === 12) {
        hours = 0; // Convert 12:00:00AM to 00:00:00
    }

    return `${hours.toString().padStart(2, "0")}:${minutes}:${seconds}`;
}

// Example input
const time12Hour = "07:05:45PM";

// Convert and print the time in 24-hour format
console.log(timeConversion(time12Hour)); // Output: "19:05:45"
s