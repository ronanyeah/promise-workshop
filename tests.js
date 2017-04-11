const { get, getJson, isString } = window.functions;

QUnit.test(
  'isString pass',
  assert => {
    const done = assert.async();

    const testString = 'hello i am a string';

    get(testString)
    .then(
      data => {
        assert.ok( data === testString, 'data is correct' );
        done();
      }
    )
    .catch(console.log);

  }
);

QUnit.test(
  'isString fail',
  assert => {
    const done = assert.async();

    isString(999)
    .then(console.log)
    .catch(
      err => {
        assert.ok( err.constructor === Error, 'err created correctly' );
        assert.ok( err.message === 'bad type: number', 'message correct' );
        done();
      }
    );

  }
);

QUnit.test(
  'get success',
  assert => {
    const done = assert.async();

    get('https://jsonplaceholder.typicode.com/posts/1')
    .then(
      data => {
        const post = JSON.parse(data);
        assert.ok( post.id === 1, 'id correct' );
        done();
      }
    )
    .catch(console.log);

  }
);

QUnit.test(
  'get 404',
  assert => {
    const done = assert.async();

    get('http://httpstat.us/404')
    .then(console.log)
    .catch(
      err => {
        assert.ok( err.constructor === Error, 'err created correctly' );
        assert.ok( err.message === 'Bad Status code: 404', 'correct error message' );
        done();
      }
    );
  }
);

QUnit.test(
  'get 401',
  assert => {
    const done = assert.async();

    get('http://httpstat.us/401')
    .then(console.log)
    .catch(
      err => {
        assert.ok( err.constructor === Error, 'err created correctly' );
        assert.ok( err.message === 'Bad Status code: 401', 'correct error message' );
        done();
      }
    );
  }
);

QUnit.test(
  'getJson success',
  assert => {
    const done = assert.async();

    getJson('https://jsonplaceholder.typicode.com/posts/2')
    .then(
      post => {
        assert.ok( post.id === 2, 'id correct' );
        done();
      }
    )
    .catch(console.log);

  }
);

QUnit.test(
  'getJson fail',
  assert => {
    const done = assert.async();

    getJson('http://httpstat.us/200')
    .then(console.log)
    .catch(
      err => {
        assert.ok( err.constructor === Error, 'err created correctly' );
        assert.ok( err.message === 'JSON failed to parse', 'correct error message' );
        done();
      }
    );
  }
);
