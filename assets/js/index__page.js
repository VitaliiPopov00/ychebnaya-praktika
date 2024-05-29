const words = ["IT", "Тебя", "Вас", "Всех"];
let i = 0, j = 0, out = "";

function printChar() {
    out += words[i][j++];
    document.getElementById("output").innerHTML = out;
    setTimeout(printChar, j < words[i].length ? 200 : 1000);
    j >= words[i].length && (i = (i + 1) % words.length, j = 0, out = "");
}
printChar();