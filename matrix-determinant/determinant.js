const determinant = (m) => {
    // Breaking condition
    if (m.length <= 1) return Number(m.reduce((acc, val) => acc.concat(val), []));
    
    // Get the first column, the coeficients of the minors (with its sign, 1 if odd, -1 if even)
    const coef = m.map((e, i) => i % 2 == 0 ? e[0] : -e[0]);
    
    // Get the minors
    const subMatrix = m.map((e, _) => e.filter((_, i) => i != 0))
    const min = subMatrix.map((e, i) => {
        let minimum = [...subMatrix]
        minimum.splice(i, 1);
        return minimum;
    });
    
    //Get the determinants of the minors
    const det_min = min.map((e, i) => determinant(e))
    
    //Sum the determinant of the minors multiplied by its coeficient
    const det = [...det_min].reduce((acc, val, i) => Number(acc) + Number(val * coef[i]), 0);
    
    return det;
};

module.exports = determinant;