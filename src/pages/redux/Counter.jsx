import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Donebutton from '../../components/doneButton'
import { decrementWithCheckingAction, increment } from '../../config/redux/action/counterAction'
import { taskDone } from '../../config/redux/action/taskAction'

function Counter() {
    let count = useSelector(state => state.counter)
    let task = useSelector(state => state.task)
    const dispatch = useDispatch()
    return (
        <div>
            <Donebutton  onClick={() => dispatch(taskDone(true))}/>
            <span className='mx-3'> Tugas : {(task.task).toString()} </span>
            <div className='divider'></div>
            <div className="content py-4 my-5">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(decrementWithCheckingAction(1))}>
                    -
                </button>
                {''} <span>{count.count}</span> {''}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(increment(1))}>
                    +
                </button>
            </div>
        </div>
    )
}

export default Counter
