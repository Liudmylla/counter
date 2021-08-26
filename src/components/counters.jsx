import React, { useState } from 'react';
import Counter from './counter';

const Counters = () => {
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
        newC[index].value ? newC[index].value-- : newC[index].value = 0
        setCounters(newC)
    }

    const handleIncrement = (counterId) => {
        const newC = [...counters]
        const index = newC.findIndex(item => item.id === counterId)
        newC[index].value++
        setCounters(newC)

    }

    return (
        <div>
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={handleReset}
            >Reset</button>
            {counters.map((counter) => (
                <Counter
                    key={counter.id}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    //id={counter.id}
                    //value={counter.value}
                    //name={counter.name}
                    {...counter}
                />


            ))}
        </div>
    );
}

export default Counters;