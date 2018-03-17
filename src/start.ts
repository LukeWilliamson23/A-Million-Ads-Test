import app from './app'

//const port = process.env.PORT || 5555
const port = 5555

app.listen(port, err => {
  if(err){
    return console.log('err');
  }

  return console.log(`Server runnign on ${port}`);
});
