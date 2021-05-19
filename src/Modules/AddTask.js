import { useState } from 'react'
const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Добавте сумму')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <labe>Сумма</labe>
                <input type='text' placeholder='Добавить сумму' value={text} onChange={(e)=> setText(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <labe>День</labe>
                <input type='text' placeholder='Добавить день' value={day} onChange={(e)=> setDay(e.target.value)}></input>
            </div>
            <div className='form-control form-control-check'>
                <labe>подтвердить</labe>
                <input type='checkbox' checked={reminder}  placeholder='Type text' value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)}></input>
            </div>

            <input type="submit" value='Отправить' className='btn btn-block'></input>
        </form>
    )
}

export default AddTask
