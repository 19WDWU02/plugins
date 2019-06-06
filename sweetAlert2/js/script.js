console.log('js has loaded');



function password() {
  console.log('button has been triggered');

  var theirGuess = document.getElementById('number').value;
      theirGuess = parseInt(theirGuess);
      console.log(theirGuess);

  if (theirGuess === 3) {
    Swal.fire({
    type: 'info',
    title: 'Good job!',
    text: 'You guessed our number'

  })

  } else {
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'Wrong Number',
    })
  }

}
