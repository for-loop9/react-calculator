import './app.css'
import { Button } from './button'
import { useState } from 'react'

export default function App() {
    const [stack, setStack] = useState([0, 0])
    const [operator, setOperator] = useState('+')
    const [output, setOutput] = useState('0')

    function operateButton(current, operator) {
        if (isValid()) {
            operate(operator)
            setOperator(current)
        }
    }

    function isValid() {
        return !(stack.toString() === [0, 0].toString())
    }

    function clear() {
        setStack([0, 0])
        setOperator('+')
        setOutput(0)
    }

    function addValue(value) {
        let n = Number(stack[1].toString() + value)
        setOutput(n)
        setStack([stack[0], n])
    }

    function operate(operator) {
        let operandCopy = stack[0]
        
        switch (operator) {
            case '+':
                operandCopy += stack[1]
                break;
    
            case '-':
                operandCopy -= stack[1]
                break;
            
            case '*':
                operandCopy *= stack[1]
                break;

            case '/':
                operandCopy /= stack[1]
                break;

            default:
                break;
        }

        setOutput(operandCopy)
        setStack([operandCopy, 0])
    }
    
    return (
        <div>
            <footer style={{color: 'white', fontFamily: 'Consolas'}}>{`stack = [${stack[0]}, ${stack[1]}]`}</footer>
            <div>
                <h1>Calculator</h1>
            </div>
            <div id='number-field'>
            <input type='text' id='number-field' value={output} readOnly={true}></input>
            </div>
            <div className='buttons'>
                <div className='button-grid'>
                    <Button value='7' buttonType='number-operand' onClick={() => addValue(7)}/>
                    <Button value='8' buttonType='number-operand' onClick={() => addValue(8)}/>
                    <Button value='9' buttonType='number-operand' onClick={() => addValue(9)}/>
                    <Button value='C' buttonType='operation-button' onClick={clear}/>
                    <Button value='4' buttonType='number-operand' onClick={() => addValue(4)}/>
                    <Button value='5' buttonType='number-operand' onClick={() => addValue(5)}/>
                    <Button value='6' buttonType='number-operand' onClick={() => addValue(6)}/>
                    <Button value='+' buttonType='operation-button' onClick={() => { operateButton('+', operator) }}/>
                    <Button value='1' buttonType='number-operand' onClick={() => addValue(1)}/>
                    <Button value='2' buttonType='number-operand' onClick={() => addValue(2)}/>
                    <Button value='3' buttonType='number-operand' onClick={() => addValue(3)}/>
                    <Button value='-' buttonType='operation-button' onClick={() => { operateButton('-', operator) }}/>
                    <Button value='0' buttonType='number-operand' onClick={() => addValue(0)}/>
                    <Button value='.' buttonType='number-operand' onClick={() => {}}/>
                    <Button value='=' buttonType='operation-button' onClick={() => { operateButton('+', operator) }}/>
                    <Button value='x' buttonType='operation-button' onClick={() => { operateButton('*', operator) }}/>
                    <Button value='/' buttonType='operation-button' onClick={() => { operateButton('/', operator) }}/>
                </div>
            </div>
        </div>
    )
}
