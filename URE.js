import React, { useReducer, useEffect } from 'react';

// Initial state for the reducer
const initialState = {
  text: '',
  charCount: 0,
  wordCount: 0,
  vowelCount: 0,
};

// Reducer function to handle state updates
function reducer(state, action) {
  const newText = action.text;
  switch (action.type) {
    case 'SET_TEXT':
      return {
        ...state,
        text: newText,
        charCount: newText.length,
      };
    case 'SET_WORD_COUNT':
      return {
        ...state,
        wordCount: state.text.trim().split(/\s+/).filter(Boolean).length,
      };
    case 'SET_VOWEL_COUNT':
      return {
        ...state,
        vowelCount: (state.text.match(/[aeiouAEIOU]/g) || []).length,
      };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.wordCount > 0) {
      alert(`Word Count: ${state.wordCount}`);
    }
  }, [state.wordCount]);

  useEffect(() => {
    if (state.vowelCount > 0) {
      alert(`Vowel Count: ${state.vowelCount}`);
    }
  }, [state.vowelCount]);

  const handleChange = (event) => {
    const newText = event.target.value.slice(0, 100); // Limit to 100 characters
    dispatch({ type: 'SET_TEXT', text: newText });
  };

  const handleWordCount = () => {
    dispatch({ type: 'SET_WORD_COUNT' });
  };

  const handleVowelCount = () => {
    dispatch({ type: 'SET_VOWEL_COUNT' });
  };

  return (
    <div>
      <textarea
        value={state.text}
        onChange={handleChange}
        placeholder="Enter text (max 100 characters)"
        maxLength="100"
      />
      <div>{state.charCount}/100</div>
      <button onClick={handleWordCount}>Show Word Count</button>
      <button onClick={handleVowelCount}>Show Vowel Count</button>
    </div>
  );
};

export default App;
