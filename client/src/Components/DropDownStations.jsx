import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const DropDownStations = (props) => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Form.Select aria-label="Default select example" onChange={props.onChange}>
                            <option>Select a weather station</option>
                            {props.arrayStations.map(function (object, index) {
                                if ( typeof props.arrayStations[0] === 'string') {
                                    return (
                                        <option key={index}>No weather stations available</option>
                                    )
                                } else {
                                    return (
                                        <option key={index} value={object.name}>{object.name}</option>
                                    )
                                }
                            })}
                        </Form.Select>
                        <br />
                        <Button variant='primary' onClick={props.onClick}>Get drought prediction</Button>
                    </Col>
                    <Col />
                </Row>
            </Container>
        </>
    )
}

export default DropDownStations;