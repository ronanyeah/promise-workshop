# Promise Workshop

There are two ways to return a promise from a function.

1. Using the constructor:
```
const isGreaterThanTen = number => {
  return new Promise( (resolve, reject) => {
    return number > 10
      ? resolve(number)
      : reject(Error('this number is TOO SMALL'));
  });
}

isGreaterThanTen(12)
.then( /* will be called */ )
.catch( /* not called */ )
```

2. Using the resolve/reject methods:
```
const isGreaterThanTen = number => {
  return number > 10
    ? Promise.resolve(number)
    : Promise.reject(Error('this number is TOO SMALL'));
}

isGreaterThanTen(5)
.then( /* not called */ )
.catch( /* will be called */ )
```

Try to use the methods when possible, but if you are using a callback inside the function (such as with XMLHttpRequest), you will have to use the constructor.


1. Open `index.html` in your browser.
2. Finish the methods in `functions.js` to pass the tests in `tests.js`!

[Promise Docs](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)
