const converterPromise = (array = []) =>

  new Promise((resolve, reject) => {

    if (array.every(item => typeof item === 'string')) {
      resolve(array.map(item => item.toUpperCase()))
    } else {
      reject('Error: Not all elements are string type!')
    }
  });

export default converterPromise;
