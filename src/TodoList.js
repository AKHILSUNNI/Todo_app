import React, { useState,useRef,useEffect} from "react";

function TodoList(props) {
  const [input, setInput] = useState((props.edit)? props.edit.text : "");
  const refere = useRef(null)

  useEffect(()=>{
    refere.current.focus()
  })

  const handleChange = (e) => {
    return setInput(e.target.value);
  };

  const submit = (e) => {
      e.preventDefault();
      props.onSubmit({
          id : Math.floor(Math.random()*10000),
          text : input
      })
      setInput("")
    }
  
  return (
    <form onSubmit={submit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={refere}
            className='todo-input edit'
          />
          <button onClick={submit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={refere}
          />
          <button onClick={submit} className='todo-button'>
            Create
          </button>
        </>
      )}
    </form>
  );
}

export default TodoList;
