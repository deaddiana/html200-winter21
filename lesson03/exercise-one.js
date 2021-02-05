let brightColors = ['orange', 'yellow', 'gray', 'red', 'chartreuse'];

brightColors.push('magenta');

brightColors.splice(2, 1);

const brightColorsList = brightColors.join(', ');

console.log(brightColors);

console.log(brightColorsList);
