Purpose: get the determinant of a NxN matrix. The `determinant` function receives a matrix written as an array where each element corresponds to a row, i.e. `[ [a, b, c], [d, e, f], [g, h, i] ] ` meaning:
````
|a b c|  
|d e f|  
|g h i|  
````
The function takes the minors from the first column and calculates its determinant by recursively calculating the determinant of the minors of the first column. This process is repeated until a 1x1 minor matrix is reached. Check the function comments for a clearer scope.

Run the tests using `npm test` or `yarn test`.

This was coded to solve https://www.codewars.com/kata/52a382ee44408cea2500074c
