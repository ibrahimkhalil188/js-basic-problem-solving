function untilitiesBill(unit) {
    let totalTaka;
    if (unit <= 100) {
        totalTaka = unit * 5;
    }
    else if (unit <= 200 && unit > 100) {
        const forFirst100Unit = 5 * 100;
        const forSecond100Unit = (unit - 100) * 6;
        totalTaka = forFirst100Unit + forSecond100Unit;
    }
    else if (unit > 200) {
        const forFirst100Unit = 5 * 100;
        const forSecond100Unit = 100 * 6;
        const forNextUnit = (unit - 200) * 7;
        totalTaka = forFirst100Unit + forSecond100Unit + forNextUnit;
    }
    return totalTaka;
}

const unit = untilitiesBill(300)
console.log(unit)