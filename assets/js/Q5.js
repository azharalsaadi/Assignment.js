let size = 5;

for (let i = 1; i <= size; i++) {
    let row = '';
    for (let j = 1; j <= size; j++) {
        row = row + '* ';
    }
    console.log(row);
}