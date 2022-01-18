import Donebutton from '../../components/doneButton';
import Checktask from '../../components/checkTask';

const Hooks = () => {
    return (
        <div>
            <Donebutton />
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th />
                            <th>Task</th>
                            <th>Check</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Use State</td>
                            <Checktask />
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Use Effect</td>
                            <Checktask />
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Use Callback</td>
                            <Checktask />
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Custom Hooks</td>
                            <Checktask />
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default Hooks;
