"use strict"

const weather = {
    Monday: 20,
    Tuesday: 22,
    Wednesday: 20,
    Thursday: 25,
    Friday: 19,
    Saturday: 21,
    Sunday: 23,

    minTemperature: () => {
        let degrees = 100;
        Object.values(weather).forEach((day) => {
            if (typeof day == "number" && day < degrees) {
                degrees = day;
            }
        });
        return console.log(`Минимальная температура ${degrees}°C`);
    },

    maxTemperature: () => {
        let degrees = 0;
        Object.values(weather).forEach((day) => {
            if (typeof day == "number" && day > degrees) {
                degrees = day;
            }
        });
        return console.log(`Максимальная температура ${degrees}°C`);
    },

    averageTemperature: () => {
        let degrees = 0;
        Object.values(weather).forEach((day) => {
            if (typeof day == "number") {
                degrees += day;
            }
        });
        degrees /= 7;
        console.log(`Средняя температура ${degrees.toFixed(0)}°C`);
        return degrees.toFixed(0);
    },

    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case "string":
                let text = Object.keys(weather);
                let final = "(";
                for (let i = 0; i < 7; i++) {
                    final = final + text[i].slice(0, 3) + "-";
                }
                final = final.slice(0, -1) + ")";
                console.log(final);
                return final;
                break;
            case "number":
                return weather.averageTemperature();
                break;
                return "anything";
        }
    },
};

weather.minTemperature();
weather.maxTemperature();
weather.averageTemperature();
String(weather);
Number(weather); 