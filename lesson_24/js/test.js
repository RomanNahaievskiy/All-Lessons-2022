function test(i = 'Немає даних для перевірки') {
    console.log(`test : ${i} type : ${typeof i} length : ${i.length} `);
}
function log(i = 'Немає даних для перевірки') {
    console.log(i);
}
function numTask(numUserinput) {
    return console.log(`*** \tЗавдання # ${numUserinput}\t***`);
}