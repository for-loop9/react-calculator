import './button.css'

export function Button(props) {
    return (
        <button onClick={props.onClick} className={props.buttonType}>
            {props.value}
        </button>
    )
}