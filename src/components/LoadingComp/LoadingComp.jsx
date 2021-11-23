import {Spinner} from 'react-bootstrap';

export default function LoadingComp({h,w, title="Cargando...",size}) {

    const style = {
        marginTop: h, 
        marginBottom: h,
        marginLeft: w,
        marginRight: w
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
