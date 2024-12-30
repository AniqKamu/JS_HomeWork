'number' + 3 + 3
//Результат: number33, тому що тут відбувається конкатенація, один з операндів - це рядок, то інший операнд перетворюється на рядок теж.

null + 3
//Результат: 3. null перетворюється на 0 (неявне приведення типів) коли вікористовується з оператором +. Тому вираз перетворюється на 0 + 3.

5 && "qwerty"
/* Результат: qwerty. Оператор І "&&" повертає перше хибне значення, або останнє значення, якщо жодного хибного не було знайдено.
Число 5 є "істинним" значенням, перевірка переходе до "qwerty". 
"qwerty" теж є "істинним", тому повертає рядок "qwerty". */

+'40' + +'2' + "hillel";
/* Результат: "42hillel". Оператор "+" перед рядком '40' та '2' перетворює їх на числа, тому в результаті ми маємо 40 + 2 = 42
Далі оператор "+" в виразі 42 + "hillel" виконує конкатенацію. Тобто перетворює 42 на рядок та обєднує з рядком. */

'10' - 5 === 6;
/* Результат: false. У виразі '10' - 5, оператор "-" приводить рядок '10' до числа, тому вираз має значення тепер 10 - 5 = 5.
Далі оператор строгої рівності ""==="" порівнює значення та типи, але число 5 не дорівнює числу 6. */

true + false
/* Результат: 1. Тут використовується неявне приведення типів: true = 1,  = 0. Тому вираз стає 1 + 0 = 1 */

'4px' - 3
/* Результат: NaN. Через присутність в виразі тексту '4px', 
js не може перетворити рядок на число, тому результат Not a Number, 
тому що оператор "-" вимагаэ числове значення. */

'4' - 3
/* Результат: 1. Оператор "-" перетворює рядок '4' на число, тому вираз стає 4 - 3 = 1. */

'6' + 3 ** 0;
/* Результат: '61'. Оператор "**" виконує піднесення до ступеня. Але всі числа які підносяться до нульового ступеня = 1.
Тому вираз стає '6' + 1. У цьому випадку 1 стає рядком і виконується конкатенація. */

12 / '6'
/* Результат: 2. Оператор "/" перетворює рядок '6' на число, тому вираз стає 12 / 6 = 2. */

'10' + (5 === 6);
/* Результат: '10false'. Спочатку виконуємо те що в дужках. Оператор строгої рівності "===" порівнює значення та типи. В нас 5 не дорівнює 6, тому в цьому виразі 5 === 6 буде значення false.
Оператор "+" між '10' та false, перетворює булеве значення на рядок та виконує конкатенацію. */

null == ''
/* Результат: false. Оператор нестрогої рівності "==" виконує приведення типів при порівнянні. У js null не рівний порожньому рядку ''. */

3 ** (9 / 3);
/* Результат: 27. Спочатку виконуєм те що в дужках: 9 / 3 = 3.
Потім виконується піднесення числа 3 до степеня 3. */

!!'false' == !!'true'
/* Результат: true. Тут використовується подвійне логічне НЕ "!!". 
Перший оператор "!" перетворює рядок 'false' на булеве значення.  Але в js непорожні рядки істинні, тому в результаті буде false. 
Другий оператор "!" перетворює false на true , тому вираз !!'false' дає значення true.
Аналогічно стосовно виразу !!'true'. Рядок 'true' також є непорожнім, він перетворюється на значення true. !!'true' дає значення true.
Тому вираз набуває виду true == true, оператор рівності повертає нам true. */

0 || '0' && 1
/* Результат: 1. Оператор "&&" порівнює спочатку лівий, а потім правий операнд. З ліва в нас рядок '0', він не порожній - тому істинне значення має.
1 - також істинне значення. У результаті повертається 1. Далі вираз набуває вигляду 0 || 1.
Оператор || спочатку оцінює лівий операнд. Зліва 0, а це є хибним значенням. Оператор "||" повертає перше істинне значення, а це в нас - 1. */

(+null == false) < 1;
/* Результат: false. Оператор "+" перед null перетворює його на число. Тому +0 = 0. Вираз має вигляд 0 == false.
Оператор == порівнює значення, при цьому неявно приводячи типи. В js false дорівнює 0, тому вираз 0 == 0 дає відповідь true.
Вираз набуває вигляд true < 1. Далі true перетворюється на 1 при порівнянні з числом, вираз має вигляд 1 < 1. А це не є істина. */

false && true || true
/* Результат: true. Оператор "&&" повертає перший "неістенний" операнд або останній "істинний". У нас в виразі false && true поверне false.
Далі оператор "||" повертає перший "істинний" операнд або останній, якщо всі операнди "неістинні".
Оскільки другий операнд — це true, результат буде true. */

false && (false || true);
/* Результат: false. Оператор "||" повертає перший "істинний" операнд, або останній, якщо всі операнди "не істинні". Тому в нашому виразі false || true
поверне true. Тепер вираз має вигляд false && true. 
Оператор "&&" повертає перший "неістинний" операнд, або останній, якщо всі операнди "істинні". 
Оскільки перший операнд — це false, результат буде false. */

(+null == false) < 1 ** 5;
/* Результат: false. Оператор "+" перед null перетворює його на число. Як відомо null дорівнює 0, тому +0 = 0. 
Вираз має вигляд 0 == false.
Оператор == порівнює значення, при цьому неявно приводячи типи. В js false дорівнює 0, тому вираз 0 == 0 дає відповідь true.
Вираз має вигляд true < 1 ** 5.
Першим виконується піднесення до ступеня 1 ** 5 = 1
Вираз має вигляд true < 1.
Як відомо В js true дорівнює 1. Тому вираз 1 < 1 дає результат false. */