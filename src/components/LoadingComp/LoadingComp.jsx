import {Spinner} from 'react-bootstrap';

export default function LoadingComp({my,mx, title="Cargando...",size}) {

    const style = {
        marginTop: my, 
        marginBottom: my,
        marginLeft: mx,
        marginRight: mx
    }

    return (
            <div  className="d-inline-flex" style={style}>
                <Spinner size={size} className="pt-2" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner>
                <span className="px-1">{title}</span>
            </div>
    )
}
