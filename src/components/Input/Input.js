import React from 'react';

function Input({ handleSubmitGuess, gameStatus }) {
  const [guess, setGuess] = React.useState('');

  function handleSumbit(event) {
    event.preventDefault();
    // console.log(`guess: ${guess}`);
    handleSubmitGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper"
      onSubmit={handleSumbit}
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        disabled={gameStatus !== 'running'}
        id='guess-input'
        type='text'
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  )
}

export default Input;
