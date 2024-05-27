
interface IComponent {
    text: string;
}
const Component = ({ text }: IComponent) => {
    return (
        <div>
            <h1>Remote Component 1</h1>
                <span>Texto recebido do host: {text ?? ''}</span>
        </div>
    );
}
export default Component;
