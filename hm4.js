function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
  }
  
  function checkTheory(count) {
      let evenCount = 0; // парні 
      let oddCount = 0;  // непарні
  
      for (let i = 0; i < count; i++) {
          const randomNum = getRandomInt(100, 1000); // Генерує рандомно число від 100 до 1000 включно
  
          if (randomNum % 2 === 0) {
              evenCount++;
          } else {
              oddCount++;
          }
      }
  
      const evenPerc = (evenCount / count) * 100; // Відсоток парних
      const oddPerc = (oddCount / count) * 100;  // Відсоток непарних
  
    
      console.log(`Кількість згенерованих чисел: ${count}`);
      console.log(`Парних чисел: ${evenCount}`);
      console.log(`Не парних чисел: ${oddCount}`);
      console.log(`Відсоток парних чисел: ${evenPerc.toFixed(2)}%`);
      console.log(`Відсоток непарних чисел: ${oddPerc.toFixed(2)}%`);
  }
  
  // Виклик функції
  checkTheory(100);
  