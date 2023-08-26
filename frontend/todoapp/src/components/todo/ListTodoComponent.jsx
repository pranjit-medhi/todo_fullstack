export default function ListTodoComponent()
{
    const todos = [
        { id:1, description:" Abc"},      
        { id:2, description:" Abc"},
    ]
    return(
        <div className="container">
                <table className="table">
                    <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is Done?</th>
                                <th>Target Date</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        {/*
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td> <button className="btn btn-warning" 
                                                        onClick={() => deleteTodo(todo.id)}>Delete</button> </td>
                                        <td> <button className="btn btn-success" 
                                                        onClick={() => updateTodo(todo.id)}>Update</button> </td> */}
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
        </div>
    )
}
