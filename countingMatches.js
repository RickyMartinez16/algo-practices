// You are given an integer n, the number of teams in a tournament that has strange rules:

// If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, 
//and n / 2 teams advance to the next round.
// If the current number of teams is odd, one team randomly advances in the tournament, 
//and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
// Return the number of matches played in the tournament until a winner is decided.

 

// Example 1:

// Input: n = 7
// Output: 6
// Explanation: Details of the tournament: 
// - 1st Round: Teams = 7, Matches = 3, and 4 teams advance.
// - 2nd Round: Teams = 4, Matches = 2, and 2 teams advance.
// - 3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
// Total number of matches = 3 + 2 + 1 = 6.
// Example 2:

// Input: n = 14
// Output: 13
// Explanation: Details of the tournament:
// - 1st Round: Teams = 14, Matches = 7, and 7 teams advance.
// - 2nd Round: Teams = 7, Matches = 3, and 4 teams advance.
// - 3rd Round: Teams = 4, Matches = 2, and 2 teams advance.
// - 4th Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
// Total number of matches = 7 + 3 + 2 + 1 = 13.




var numberOfMatches = function(teams) {
    //keep track of how many matches there will be
    let matches = 0;

    //while math.floor rounds down to nearest int. while teams / 2 rounded down is greater than 0
    //need to round down when teams is odd
    while(Math.floor(teams/2) > 0){
        //check if teams is even. if so 
        if(teams % 2 === 0){
            //assign teams to now equal teams / 2
            teams = teams / 2;
            //add to the matches total
            matches += teams
        } else {
            //if teams is odd
            //add to matches total
            matches += (teams - 1) / 2
            //assign to teams
            teams = (teams - 1) / 2 + 1
        }
    }
    return matches
};