function* countLaptopSales() {
    const saleList = [11, 15, 17];
    for (let i = 0; i < saleList.length; i++) {
        yield saleList[i];        
    }
}

const laptopStore = countLaptopSales();

console.log("[1] laptopStore.next() :", laptopStore.next()); // { value: 11, done: false }
console.log("[2] laptopStore.next() :", laptopStore.next()); // { value: 15, done: false }
console.log("[3] laptopStore.next() :", laptopStore.next()); // { value: 17, done: false }
console.log("[4] laptopStore.next() :", laptopStore.next()); // { value: undefined, done: false }
console.log("[5] laptopStore.next() :", laptopStore.next()); // { value: undefined, done: false }
