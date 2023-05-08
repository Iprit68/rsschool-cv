const fs = require("fs");
 
// асинхронное чтение
fs.readFile("text.txt", "utf8", 
            function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
                console.log(data);  // выводим считанные данные
});