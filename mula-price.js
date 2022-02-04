function mulaPrice(quatity) {
    let totalTaka;
    if (quatity <= 2) {
        totalTaka = quatity * 30; //if take less then 2kg then price 30 taka;
    }
    else if (quatity > 2) {
        totalTaka = quatity * 25; // if take more then 2kg then price 25 taka
    }
    return totalTaka;
}

const yourKg = 4;
console.log(mulaPrice(yourKg))