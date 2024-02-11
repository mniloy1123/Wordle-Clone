import React from 'react';

function Input() {
  const [guess, setGuess] = React.useState('');

  function handleSumbit(event) {
    event.preventDefault();
    console.log(`guess: ${guess}`);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper"
      onSubmit={handleSumbit}
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
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
