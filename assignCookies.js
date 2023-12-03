var findContentChildren = function(g, s) {
    // Sort the arrays in ascending order
    let greedyKids = g.sort((a, b) => a - b);
    let cookies = s.sort((a, b) => a - b);

    let happyKids = 0;

    for (let i = 0; i < greedyKids.length; i++) {
        let j = 0;
        while (j < cookies.length && cookies[j] < greedyKids[i]) {
            // Skip cookies that are too small for the current child
            j++;
        }

        if (j < s.length) {
            // Assign the smallest available cookie to the current child
            kids++;
            s.splice(j, 1); // Remove the assigned cookie from the array
        } else {
            // No more cookies available for the current child
            break;
        }
    }

    return kids;
};