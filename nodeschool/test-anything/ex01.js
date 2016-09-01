const emotify_func_path = process.argv[2];
const str = process.argv[3];

const emotify = require(emotify_func_path);
console.log(emotify(str));
