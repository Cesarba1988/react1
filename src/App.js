import React,{useState} from 'react'
import Formulario from './components/Formulario'
import Agregar from './components/Agregar'
import Editar from './components/Editar'

const App = () => {
  
  //Agregar Usuarios
    const usersData = [
    
    ]
  
    const [users, setUsers] = useState(usersData)

    const addUser = (user) => {
      user.id = users.length + 1
      setUsers([...users, user])
    }

    //Eliminiar Usuarios
    const deleteUser = id => {
      setUsers(users.filter(user => user.id !== id))
    }

    //Editar Usuarios
    const [editing, setEditing] = useState(false)

   const initialFormState = { id: null, name: '', username: '' }
   const [currentUser, setCurrentUser] = useState(initialFormState)

   const editRow = user => {
    setEditing(true) 
    setCurrentUser({ id: user.id, name: user.name, user: user.username })
  }

    const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      <h1>FORMULARIO</h1>
      <div className="flex-row">
        <div className="flex-large">
        {editing ? (
          <div>
            <h2>Editar Usuario</h2>
            <Editar
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div>
          <h2>Agregar Usuario</h2>
          <Agregar addUser={addUser}/>
          </div>
        )}
       </div>
        <div className="flex-large">
          <h2>Ver Usuarios</h2>
          <Formulario users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default App
