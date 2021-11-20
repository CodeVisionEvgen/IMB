let Btn = document.getElementById('calc'),
    res,
    low,
    spanRes = document.getElementById('result');
    


Btn.onclick = (first => {
    let 
    Massa = document.getElementById('funt-Human').value,
    Rost = document.getElementById('height-Human').value,
    resF = Massa / Math.pow(Rost,2),
    res = resF * 10000;
    low;

    if (res < 18.5) {
        low = "Мало веса.";
    } 
    else if (res < 25) {
        low = "Норма.";
    }
    else if (res < 30) {
        low = "Пора худеть."
    }   else if (res < 40) {
        low = "Огромный избыток жира."
    }
     else {
        low = "Невозможно."
    }
    spanRes.innerHTML = "ИМТ: "+(res).toFixed(1) +" " + low;
    return [low, res];
})

