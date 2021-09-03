import React from 'react'

const TodoList = (props) => {
    const { data } = props

    return (
        <div>
            <ul className="list-group">
                {data.length === 0 && (
                    <li className="list-group-item text-center">No data.</li>
                )}
                {data.map((todo, index) => (
                    <li className="list-group-item text-center" key={index}>
                        {todo}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
