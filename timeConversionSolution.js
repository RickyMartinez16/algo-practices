//sample input : "07:05:45PM"

function timeConversion(s) {
    // Write your code here
    const ampm = s.slice(-2);  //find out if its AM or PM by slicing the AM or PM into its own variable
    const hour = Number(s.slice(0, 2)); // find the hour by slicing it and converting the string into a number
    let time = s.slice(0, -2);   //get the time variable by slicing off the AM/PM
    
    if(ampm === "AM"){    //if ampm var === AM then check the hour var
        if(hour === 12){    // if the hour var is 12 
            return  time.replace(s.slice(0, 2), "00");   // return the time var but replace the beginning of the time (hour) with 00 for military time
        }
        return time  //return the new miliatry time
    } else if (ampm === "PM"){   //else if check if ampm var === PM
        if(hour !== 12){     //if the hour does NOT equal 12
            return time.replace(s.slice(0, 2), String(hour + 12));   //replace the beginning of the time var (hour) with hour + 12 and converting it back to string
        }
        return time  //return the time var
    }
    return "not valid"  //not valid am or pm
} 

//output 19:05:45