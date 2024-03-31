const calculatePrice = (baseDistance, kmPrice, fixPrice, distance) => {
    if (distance <= baseDistance) {
        return fixPrice;
    } else {
        let totalPrice = fixPrice + (distance - baseDistance) * kmPrice;
        return totalPrice;
    }
}

module.exports = { calculatePrice };
