// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteUser} = props
  const {id, title} = todoDetails

  const clickHandler = () => {
    deleteUser(id)
  }

  return (
    <li className="todo-item">
      <p className="des">{title}</p>
      <button className="button" type="button" onClick={clickHandler}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
