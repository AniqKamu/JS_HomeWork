function pow (x, y) {
    //початкове значення
    let result = 1;
    //якщо ступінь відємна, треба поділити, замість множення
    if (y < 0) {
        for (let i = 0; i < -y; i++) {
            result /= x;
        }
    } else {
        for (let i = 0; i < y; i ++) {
            result *= x; //якщо ступінь не відємний, то ми множемо х на результат (залежно від значення у)
        }
    }
    return result;
};
console.log (pow (2, 0));
