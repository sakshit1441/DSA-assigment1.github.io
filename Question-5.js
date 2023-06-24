// Q.5 Find duplicates in an array.

function find_duplicate_in_array(arra1) {
    const object = {};
    const result = [];

    arra1.forEach(item => {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (const prop in object) {
       if(object[prop] >= 2) {
           result.push(prop);
       }
    }

    return result;

}
const arr_given=[1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]
const result=find_duplicate_in_array(arr_given)
console.log('Duplicate values in the array are :- '+result);



// Output :- 
// Duplicate values in the array are :- 4,7
