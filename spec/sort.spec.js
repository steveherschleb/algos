var test =  [34, 203, 3, 746, 200, 984, 198, 764, 9];
var data = require('./data');
var result;


var dataBase = data.slice(0); 
console.time('Base')
dataBase.sort();
console.timeEnd('Base');
console.log('result:', sort.isSorted(dataBase));

var dataQuick = data.slice(0); 
console.time('Quick')
result = sort.quick(dataQuick);
console.timeEnd('Quick');
console.log('result:', sort.isSorted(result));

var dataQuick2 = data.slice(0); 
console.time('Quick2')
sort.quick3(dataQuick2);
console.timeEnd('Quick2');
console.log('result:', sort.isSorted(dataQuick2));

console.time('Merge')
result = sort.merge(data);
console.timeEnd('Merge');
console.log('result:', sort.isSorted(result));

var data1 = data.slice(0); 
console.time('Bubble')
result = sort.bubble(data1);
console.timeEnd('Bubble');
console.log('result:', sort.isSorted(result));


var data2 = data.slice(0);
console.time('Insertion');
result = sort.insertion(data2);
console.timeEnd('Insertion');
console.log('result:', sort.isSorted(result));


var data3 = data.slice(0);
console.time('Selection');
result = sort.selection(data3);
console.timeEnd('Selection');
console.log('result:', sort.isSorted(result));
