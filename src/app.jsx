import React, { useState } from 'react';
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
  const initialState = [
    { value: 0, id: 1, name: 'Spoon' },
    { value: 4, id: 2, name: 'Fork' },
    { value: 0, id: 3, name: 'Plate' },
    { value: 0, id: 4, name: 'Minimalist' },
    { value: 0, id: 5, name: 'Different' },

  ]
  const [counters, setCounters] = useState(initialState)
  const handleDelete = (counterId) => {
    const newCounters = counters.filter(c => c.id !== counterId)
    setCounters(newCounters)
  }

  const handleReset = () => setCounters(initialState)

  const handleDecrement = (counterId) => {
    const newC = [...counters]
    const index = newC.findIndex(item => item.id === counterId)
    //newC[index].value ? newC[index].value-- : newC[index].value = 0
    newC[index].value--
    setCounters(newC)
  }

  const handleIncrement = (counterId) => {
    const newC = [...counters]
    const index = newC.findIndex(item => item.id === counterId)
    newC[index].value++
    setCounters(newC)

  }
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar
          totalItems={counters.reduce((a, c) => a + c.value, 0)}

        />
        <Counters
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          counters={counters}

        />
      </main>
    </div>
  );
}

export default App;
