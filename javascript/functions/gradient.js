function gradient(x1, x2, y1, y2) {
    const slope = Math.abs(y2 - y1) / Math.abs(x2 - x1);
    return slope;
}

const cx1 = 90;
const cx2 = 80;
const cy1 = 240;
const cy2 = 260;

console.log(`Gradient of coordinates (${cx1}, ${cy1}) and (${cx2}, ${cy2}) is`, gradient(cx1, cx2, cy1, cy2)); // 2
