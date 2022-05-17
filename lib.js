// OCP ==> HOF
function forEach(elems, action) {
    let i;
    for(i = 0; i< elems.length; i++) {
        action(elems[i]);
    }
}

function filter(elems, predicate) {
    var result = [];
    forEach(elems, elem => {
        if(predicate(elem)) {
            result.push(elem);
        }
    });
    return result;
}