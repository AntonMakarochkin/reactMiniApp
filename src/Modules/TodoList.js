import Button from './Button'
const TodoList = ({title, onAdd, showAdd}) => {
  
    return (
        <div>
              <h1>{title}</h1>
                <Button onClick={onAdd} title={showAdd ? 'Закрыть' : 'Добавить сумму'} color={showAdd ? 'red' : 'green'}
                
                />
        </div>
      
    )
}

TodoList.defaultProps = {
    title: 'Сколько я потратил денег',
}


export default TodoList