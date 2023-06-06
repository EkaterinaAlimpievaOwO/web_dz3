const temperature_c = parseFloat(prompt('Введите температуру по цельсию:'));


alert(`Цельсий: ${temperature_c}, Фаренгейт: ${c_to_f(temperature_c)}`);


function c_to_f(temperature_C) {

    return Number(((temperature_c * 9/5) + 32).toFixed(2));

}