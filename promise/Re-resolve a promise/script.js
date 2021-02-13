let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
});
  
promise.then(alert);

/* the output of this code is, line to : 1
the second call is ignored */