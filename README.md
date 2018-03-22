# A-Million-Ads-Test

## API end point

```bash
  /api/:number
```

This route takes the user input of a number and returns the nearest prime number in relation to it.

## How to run

To run the application, clone the repo and CD into the directory.
From here, run the follow command to compile and start the server.

```bash
npm run start
```

On your preferred browser, naviagate to localhost:5555/api/ and append the digit you wish to find the closest prime number to the end of the URL.

### Example input/output

```bash
http://localhost:5555/api/57483344
```

Output:
```bash
{
Nearest Prime: 57483347
}
```

## How to run tests

To run the mocha tests, clone the repo and CD into the directory.
From here, run the follow command to compile the typescript and run the tests.
```bash
npm run test
```