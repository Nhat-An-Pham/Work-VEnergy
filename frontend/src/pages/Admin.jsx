import React from 'react'

const Admin = () => {

  const [projects, setProjects] = useState([]);
  const getProjects = async () => {
    try {
      const response = await fetch("http://localhost:5000/login/admin");
      const jsonData = await response.json();

      setProjects(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className='adminPage'>
      <h1>Hello Admin</h1>
      <div className='adminPage__section adminPage__section--admin'>

      </div>
      <div className='adminPage__section adminPage__section--projects'>
        {projects.map(project => (

          <div className='card__wrapper' key={project.id}>
            <div className='card__text'>
              <p>{project.projectName}</p>
            </div>
            <div className='card__btn'>
              {/* <div className='card__btn__edit'>
                <EditTodo todo={project} />
              </div> */}
              <div>
                {/* <button className='card__btn__delete'
                onClick={() => deleteTodo(todo.todo_id)}
            >
                X
            </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Admin