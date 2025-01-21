var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        <email:"dmitro.porohov@yahoo.com>"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
];

var arrStr = JSON.stringify(arr);

arrStr = arrStr.replace(/[<>]/g, "");


var emailPattern = /\b[\w\.]+@([\w-]+\.)+[\w-]{2,4}\b/g;;


var normEmails = arrStr.match(emailPattern) || [];

console.log(normEmails);