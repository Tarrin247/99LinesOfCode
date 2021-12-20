let furFriends = ['Bo', 'Lilly', 'Grace', 'Marley', 'Macey'];
// Created an array of Fur Friends instead of regular friends 


// For each Fur Friend logged entire song 99 Lines of Code
// Defined i as furryFriends to keep from getting undefined error
for(let furryFriends = 0; furryFriends < furFriends.length; furryFriends ++) {

    for(let j = 99; j > 0; j --) {
        
        if (j > 2) {
            console.log(j + ' lines of code in the file, ' + j + ' lines of code ' + furFriends[furryFriends] + ' strikes one out, clears it all out,' + ' ' +  + (j - 1) + ' lines of code in the file. ');
        }
         else if (j == 2) {
            console.log(j + ' lines of code in the file, ' + j + ' lines of code ' + furFriends[furryFriends] + ' strikes one out, clears it all out,' + ' ' + (j - 1) + ' line of code in the file.');
        }
        else {
            console.log(j + ' line of code in the file, ' + j + ' line of code ' + furFriends[furryFriends] + ' strikes one out, clears it all out,' + ' ' + (j - 1) + ' lines of code in the file.');
        };


    };



};





