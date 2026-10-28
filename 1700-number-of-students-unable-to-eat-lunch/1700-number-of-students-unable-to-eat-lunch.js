/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let count = [0,0]

    for (const s of students) count[s]++;

    for (const sw of sandwiches){
        if(count[sw]=== 0) break;
        count[sw]--;
    }
    return count[0] + count[1];
};