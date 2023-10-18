import './Alert.css';

function Alert({type, children }: AlertProps) {
    return <div className={`alert type-${type}`}>{children}</div>;
}

export default Alert;