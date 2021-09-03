import React from 'react'
import TodoList from './components/TodoList'

const App = () => {
    const [todo, setTodo] = React.useState([])
    const [value, setValue] = React.useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (value === '') {
            alert('The field is required.')
            return
        }
        setTodo([...todo, value])
        setValue('')
    }

    return (
        <div className="container">
            <h1 className="text-center p-5">Basic Todo App</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <TodoList data={todo} />
                    <hr />
                    <div>
                        <form onSubmit={onSubmit} className="mt-3 row">
                            <div className="col-md-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={handleChange}
                                    value={value}
                                />
                            </div>
                            <div className="col-md-4">
                                <button
                                    type="submit"
                                    className="btn btn-primary mb-2"
                                    style={{ width: '100%' }}
                                >
                                    ADD
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
