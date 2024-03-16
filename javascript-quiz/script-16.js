const circle = {
    radius: 15,
    area: function () {
        return Math.PI * Math.pow(this.radius, 2);
    },
    diameter() {
        return 2 * this.radius;
    },
    perimeter: () => {
        return 2 * Math.PI * this.radius; // <- can't access 'this.radius', since it is an arrow function 
    },
    perimeter2: function () {
        return 2 * Math.PI * this.radius; 
    }
}

console.log(`--- Considering circle's radius is ${circle.radius}:`); // 15
console.log("Circle's area:", circle.area()); // 706.8583470577034
console.log("Circle's diameter:", circle.diameter()); // 30
console.log("Circle's perimeter:", circle.perimeter()); // NaN
console.log("Circle's perimeter2:", circle.perimeter2()); // 94.24777960769379
