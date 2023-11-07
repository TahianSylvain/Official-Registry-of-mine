// clickEvent changeEvent
type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, 
        id: number) => void
}

export const Button = (props: ButtonProps) => {
    return <button onClick={event => props.handleClick(event, 1)}>
            click
        </button>
}

//------------------------------------------------------

type InputProps = {
    value: string
    handleChange: 
        (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => console.log(event)
    return <input type="text" value={props.value} 
        onChange={props.handleChange}/>
}