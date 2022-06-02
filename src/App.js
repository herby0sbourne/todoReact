import React from 'react';
import TodoApp from './components/TodoApp';
import Todos from './components/TodosContainer';

function App() {
  return (
    <div className="heading-background">
      <div className="container">
        <TodoApp />
        <Todos />
      </div>
    </div>
  );
}

export default App;
