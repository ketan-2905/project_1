import Header from './Header';
import AddItem from './AddItem';
import SearchToDo from './SearchToDo';
import Content from './Content';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import apiRequest from './apiRequest';
function App() {
  // const [toDos, setToDos] = useState(JSON.parse(localStorage.getItem("ToDoList")) || [])

  const API_URL = "http://localhost:3500/items"

  const [toDos, setToDos] = useState([])

  const [newToDo , setNewToDo] = useState('')

  const [search , newSearch] = useState('')

  const [fetchError , setFetchError] = useState(null)

  const [isLoading , setIsLoading] = useState(true)

  





  useEffect(() => {
    const fetchItems = async () => {

      try{
      const fetchData = await fetch(API_URL)
      if(!fetchData.ok) throw Error("Did not resive Expected data")
      const todoItems = await fetchData.json()
      setToDos(todoItems)
      setFetchError(null)
      } catch(err){
        console.log(err +"hi there");
        
        setFetchError(err.message)
      } finally{
        setIsLoading(false)
      }
    } 

    setTimeout(fetchItems , 2000)
  }, [])

  
  const handleClick =(id) => {
    const newToDos = toDos.map((toDo) => toDo.id === id ? {...toDo , checked : !toDo.checked} : toDo)
    setToDos(newToDos)

    const myTodo = newToDos.filter((todo) => id === todo.id)

    const updateOption = {
      method : "PATCH",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({checked : myTodo[0].checked})
    }

    const requestUrl = `${API_URL}/${id}`

    apiRequest(requestUrl , updateOption)
  }

  const handleDelete =(id) => {
    const newToDos = toDos.filter((toDo) => !(toDo.id === id))
    setToDos(newToDos)

    const deleteOption = { method : "DELETE" }

    const requestUrl = `${API_URL}/${id}`

    apiRequest(requestUrl , deleteOption)
  }

  const addItem = (item) => {
    const id = toDos.length ? (parseInt(toDos[toDos.length - 1].id)+1).toString() : 1
    const newToDo = {id , item , checked : false }
    const newToDos = [...toDos , newToDo]
    setToDos(newToDos)

    const postOption = {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(newToDo)
    }

    apiRequest(API_URL , postOption)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!newToDo) return
    addItem(newToDo)
    setNewToDo('')
  }

   return (
    <div className="App">
      <Header /> 
      <AddItem 
      newToDo = {newToDo}
      setNewToDo={setNewToDo} 
      handleSubmit = {handleSubmit}
      />
      <SearchToDo
      search={search}
      newSearch={newSearch}
      />
      <main>
      {fetchError && (<p style={{'color':'red' , 'font-weight':'600'}}>{`Error: ${fetchError} `}</p>)}
      {isLoading && (<p>Loading tods items...</p>)}
      {!fetchError && !isLoading && <Content 
      toDos={toDos.filter((toDo) => (toDo.item).toLowerCase().includes(search.toLowerCase()))} 
      handleClick = {handleClick}
      handleDelete = {handleDelete}
      />}
      </main>
      <Footer
       toDos={toDos} 
      />
    </div>
   );
 }
export default App;
