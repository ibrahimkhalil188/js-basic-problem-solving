function untilitiesBill(unit) {
    let totalTaka;
    if (unit <= 100) {
        totalTaka = unit * 5; //for first 100 unit 5 taka per unit
    }
    else if (unit <= 200 && unit > 100) {
        const forFirst100Unit = 5 * 100; //for first 100 unit 5 taka per unit
        const forSecond100Unit = (unit - 100) * 6;//for second 100 unit 6 taka per unit
        totalTaka = forFirst100Unit + forSecond100Unit;
    }
    else if (unit > 200) {
        const forFirst100Unit = 5 * 100; //for first 100 unit 5 taka per unit
        const forSecond100Unit = 100 * 6;//for second 100 unit 6 taka per unit
        const forNextUnit = (unit - 200) * 7;//for last remaining unit 7 taka per unit
        totalTaka = forFirst100Unit + forSecond100Unit + forNextUnit;
    }
    return totalTaka;
}

const unit = untilitiesBill(300)
console.log(unit)