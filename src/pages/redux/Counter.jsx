import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrementWithCheckingAction, increment } from '../../config/redux/action/counterAction'

function Counter() {
    let count = useSelector(state => state.counter)
    const dispatch = useDispatch()
    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(decrementWithCheckingAction(1))}>
                -
            </button>
            {''} <span>{count.count}</span> {''}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(increment(1))}>
                +
            </button>
        </div>
    )
}

export default Counter
