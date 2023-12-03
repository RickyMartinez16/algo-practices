var findContentChildren = function(g, s) {
    // Sort the arrays in ascending order
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let kids = 0;

    for (let i = 0; i < greed.length; i++) {
        let j = 0;
        while (j < s.length && s[j] < g[i]) {
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