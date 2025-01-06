
// 선택적 속성
interface UseProps {
    name: string,
    age? : number
}

const PropsAtt:React.FC<UseProps> = ({name,age}) => {
    return(
        <div>
            <h1>Hello {name}</h1>
            {age && <p>My Age {age}</p>}
        </div>
    )
}
export default PropsAtt;
