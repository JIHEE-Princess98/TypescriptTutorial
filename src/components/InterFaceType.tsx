interface ButtonProps {
    text: number,
    onClick?: () => void,
}

export const InterFaceType:React.FC<ButtonProps> = ({text, onClick}) => {
    return(
        <div>
            {text}
            <button onClick={onClick}>증가</button>
        </div>

    )
}
