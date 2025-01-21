var text = "Wonderful Joyful Happiness Time Task Apple";
var regex = /\b[^Aa\s]{6,}\b/g;

var matches = text.match(regex);
console.log(matches);
