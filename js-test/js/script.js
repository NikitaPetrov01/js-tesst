var answers = ['Пятнадцать', 'Шаурма', 'Пиво'];
var answer1 = prompt('Сколько ему лет?');
var score=0;
console.log(answer1);
if (answer1==answers[0]) {
    score=score+1;
};
var answer2 = prompt('Что он ест?');
console.log(answer2);
if (answer2==answers[1]) {
    score=score+1;
};
var answer3 = prompt('Что он пьёт?');
console.log(answer3);
if (answer3==answers[2]) {
    score=score+1;
};
alert ('Вы набрали ' +score+ ' балла!');





