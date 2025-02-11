const byteSize = (str) => {
  if(typeof str !== 'string'){
    throw new Error('Input must be a string');
  }
  const blob = new Blob([str]);
  return blob.size;
};
// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
console.log(byteSize('hello world'));
console.log(byteSize('안녕하세요'));
console.log(byteSize(''));
