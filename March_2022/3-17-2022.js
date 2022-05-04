// 8kyu - Hello, Name or World!!
function hello(name) {
  if (name === '' || name === undefined) {
    return `Hello, World!`;
  } else if (name) {
    let fName = name.toLowerCase();
    let firstLetter = fName[0].toUpperCase();
    let checkName = firstLetter + fName.slice(1);
    return `Hello, ${checkName}!`;
  }
}
