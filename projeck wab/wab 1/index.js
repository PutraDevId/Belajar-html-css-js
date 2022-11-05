const kdwResistor = {
    coklat: "1",
    merah: "2",
    oren: "3",
    kuning: "4",
    hijau: "5",
    biru: "6",
    ungu: "7",
    abu: "8",
    putih: "9"
};

const g3Resistor = {
    coklat: "0",
    merah: "00",
    oren: "000",
    kuning: "0000",
    hijau: "00000",
    biru: "000000",
    ungu: "0000000",
    abu: "00000000",
    putih: "000000000"
};

const gelang1 = document.getElementsByClassName("gelang No 1");
gelang1[0].style.color = "blue";

for (i = 0; i < g3Resistor; i++) {
    print("0");
}