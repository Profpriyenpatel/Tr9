import React, { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
  password: '',
  errors: {
    name: '',
    email: '',
    password: '',
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'SET_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.error,
        },
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const validateField = (field, value) => {
  switch (field) {
    case 'name':
      return value.trim() === '' ? 'Name is required' : '';
    case 'email':
      return /\S+@\S+\.\S+/.test(value) ? '' : 'Email is invalid';
    case 'password':
      return value.length < 6 ? 'Password must be at least 6 characters' : '';
    default:
      return '';
  }
};

const RegistrationForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FIELD', field: name, value });

    const error = validateField(name, value);
    dispatch({ type: 'SET_ERROR', field: name, error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = Object.keys(state).reduce((acc, key) => {
      if (key !== 'errors') {
        const error = validateField(key, state[key]);
        if (error) {
          acc[key] = error;
        }
      }
      return acc;
    }, {});

    if (Object.keys(errors).length === 0) {
      alert('Form submitted successfully');
      dispatch({ type: 'RESET' });
    } else {
      dispatch({ type: 'SET_ERROR', errors });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        {state.errors.name && <span>{state.errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        {state.errors.email && <span>{state.errors.email}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        {state.errors.password && <span>{state.errors.password}</span>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
