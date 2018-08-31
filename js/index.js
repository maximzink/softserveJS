




function calPrice(price) {
    const result = price * 1.1;
    return result;
}

const oldPrice = parseFloat(prompt('Enter price'));
const newPrice = calPrice(oldPrice);
alert(newPrice);