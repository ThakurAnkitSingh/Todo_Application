import './App.css';
import React, { useEffect, useState } from 'react'
import { Button, FormControl, Input, InputLabel } from '@mui/material'
import Todo from './component/Todo';
import { db, firebase } from './firebase';
// import firebase from './firebase';


function App() {
  // I will create an array state which will store all the todos
  const [todos, setTodos] = useState([]);
  // input state will give the what the user is typing in input element
  const [input, setInput] = useState('');
  // value={input} it will give the input bar as string 

  // syntax useEffect(function , dependencies)
  // if you give any dependies like input is changing continuous so it will run one after one but we want to run only ones when our app loads or reloads and then we need to listen our database and fetch new todos as they get added or removed and i will give only [] so that it will runs only once
  // it is the collection of todos in DB and snapshot is any change made in db it will give the snapshot

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data().todo)
      // now todo is an object of id and todo so have to also change in todo list text = todo
      setTodos(snapshot.docs.map(doc =>  ({ id: doc.id, todo: doc.data().todo})))
    })
  },[])
  
  const addTodo = (event) => {
    event.preventDefault(); // it will not refresh the form
    db.collection('todos').add({
      todo: input, 
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos, input])
    setInput(''); // it will adapt their original form after adding 
  }

  return (
    <div className="App">
      <h1>TODO APPLICATION</h1>

      <form>

        <FormControl>
          <InputLabel>👍 ADD TODO</InputLabel>
          <Input value={input} onChange={(event) => { setInput(event.target.value) }} />
        </FormControl>

        <Button type='submit' disabled={!input} onClick={addTodo} variant="contained" color="error">
          Add Todo
        </Button>
      </form>
      <ul>
       
        {todos.map(todo => (
          // In this we are sending props(attribute) text so that we can pass the properties to another. 
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
