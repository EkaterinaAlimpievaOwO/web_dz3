const name_input = prompt('Введите ваше имя:')

function greeting(user_name){

    return (`Приветствую, ${user_name}`);

}

alert(greeting(name_input))