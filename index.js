(async function (seconds) {
  await new Promise(function(resolve) {
    setTimeout(function(){
      console.log('Async await');
      resolve();
    }, seconds * 1000);
  });
  console.log('after');
}(2));

