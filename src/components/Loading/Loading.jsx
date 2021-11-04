import {Spinner} from 'react-bootstrap';

export default function Loading() {

    const style = {
        marginTop: '20vh', 
        marginBottom: '20vh',
    }

    return (
            <div style={style}>
                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
    )
}
