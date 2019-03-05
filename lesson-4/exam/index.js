
function detectInt(num){
    if (typeof(num) === "number" && !(Number.isNaN(num)) && Number.isInteger(num) && num > 0) {
        return true;
    } else {
        return false;
    }
}


function sumAllDiv(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            sum += i;
        }
    }
    // console.log(sum);
    return sum;
}

function getFriendlyNumbers(start, end) {
    let massFriend = [];
    if (detectInt(start) && detectInt(end) && start <= end) {
        for (let first = start; first < end; first++){
            for (let second = first+1; second <= end; second++) {
                if (sumAllDiv(first) == second && sumAllDiv(second) == first) {
                    massFriend.push([first, second]);
                }
            }
        }
    } else {
        // console.log("Неверные данные");
        return false;
    }
    return massFriend;
}

console.log (getFriendlyNumbers(1, 300));

module.exports = {
    firstName: 'Tatiana',
    secondName: 'Muhidaeva',
    task: getFriendlyNumbers
}