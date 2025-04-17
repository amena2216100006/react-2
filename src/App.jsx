import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'
import Users from './Users'
import Friends from './Friends'
import Posts from './Posts'

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=>res.json())

// const fetchFriends = async() =>{
//   const res = await fetch ("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// }

const fetchPosts = async() => {
  const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

function App() {
  // const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();
  function handleClick(){
    alert('I am clicked!')
  }

  const handleClick3 = () =>{alert('clicked 3')}
  const handleAdd5 = (num) =>{
    const newNum = num+5;
    alert(newNum);
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      <Batsman></Batsman>
      <Counter></Counter>

      <Suspense fallback={<h2>Posts are coming......</h2>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
      <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>friends are coming for treat.....</h3>}>
        <Friends friendsPromise= {friendsPromise}></Friends>
      </Suspense> */}
      <button onClick={ ()=> handleAdd5(0)} >click to add 5</button>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick3}>Click me3</button>
      <button onClick={() =>alert('click4')}>Click me4</button>
      <button onClick={function handleClick2(){
        alert('I am clicked2')
      }}>clicke2</button>
    </>
  )
}

export default App
