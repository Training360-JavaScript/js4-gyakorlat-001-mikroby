const sorterPromise = (array = []) =>

new Promise((resolve, reject) => {

  if (array.every(item => typeof item === 'string')) {
    resolve(array.sort())
  } else {
    reject('Error: Not all elements are string type!')
  }
});


export default sorterPromise;
