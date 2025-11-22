let text = "hello world";
let count = 0;

for (let i = 0; i < text.length; i++) {
    let letter = text[i].toLowerCase();
    if (letter === 'a' || letter === 'e' || letter === 'i' || 
        letter === 'o' || letter === 'u') {
        count++;
    }
}
console.log(count);