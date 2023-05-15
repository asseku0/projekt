import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const options =[
    {value: "sala1", label: "sala1"},
    {value: "sala2", label: "sala2"},
    {value: "sala3", label: "sala3"},
  ];

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <div>
            <input
                placeholder='Add a todo'
                value={input}
                onChange={handleChange}
                name='text'
                className='todo-input'
                ref={inputRef}
            />
            <button onClick={handleSubmit} className='todo-button'>
                Add todo
            </button>
            <Select className='todo-select' options={options}/>
        </div>
      )}
    </form>
  );
}

export default TodoForm;
