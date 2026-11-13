import { useState } from 'react'


function App() {
  const [task, setTask] = useState('');
  const [list, setList] = useState(['React seekhna', 'Practice karna']);

  
  function addTask() {
    if (task === '') return;
    setList([...list, task]);
    setTask('');
  }

  
  function deleteTask(indexToDelete) {
    const updatedList = list.filter((item, index) => index !== indexToDelete);
    setList(updatedList);
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px' }}>
      <h1>My To-Do List</h1>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <input 
          type="text" 
          value={task}
          placeholder="Naya kaam likhein..."
          onChange={(e) => setTask(e.target.value)}
          style={{ flex: 1, padding: '8px' }}
        />
        <button onClick={addTask} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Add
        </button>
      </div>


      <ul style={{ listStyle: 'none', padding: 0 }}>
        {list.map((item, index) => (
          <li 
            key={index} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '8px',
              marginBottom: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          >
            <span>{item}</span>
         
            <button 
              onClick={() => deleteTask(index)}
              style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
