function getElementWidth(content, padding, border) {
  return content + padding * 2 + border * 2;
}

getElementWidth(50, 8, 4);
getElementWidth(60, 12, 8.5);
getElementWidth(200, 0, 0);

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
