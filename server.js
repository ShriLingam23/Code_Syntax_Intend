var Prism = require('prismjs');
var loadLanguages = require('prismjs/components/');
loadLanguages(['java']);
const prettier = require("prettier");
var fs = require('fs');

// // The code snippet you want to highlight, as a string
// var code = "= ['hi', 'there', 'reader!'].join \" \"";

// // Returns a highlighted HTML string
// var html = Prism.highlight(code, Prism.languages.haml, 'haml');
// console.log(html)


var options = {
    config: './prettier.config.js'
}

const text = fs.readFileSync("E:\\SLIIT\\3rd - Third Year\\Semester 2\\Software Project Management\\Assignment 2\\ctc1.txt").toString();
console.log(text)

prettier.resolveConfig("E:\\SLIIT\\3rd - Third Year\\Semester 2\\Software Project Management\\Assignment 2\\ctc1.txt").then(options => {
    // const formatted = prettier.format(text, options);
    // console.log(formatted)

    //Syntax highlighting
    var html = Prism.highlight(text, Prism.languages.java, 'java');
    console.log(html)
});

// var newData=prettier.format(text, { semi: false, parser: "babel" });
// console.log(newData)
