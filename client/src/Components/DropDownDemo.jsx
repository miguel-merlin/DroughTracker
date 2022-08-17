import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const DropDownDemo = (props) => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Form.Select aria-label="Default select example" onChange={props.onChange}>
                            <option>{props.firstMessage}</option>
                            {props.array.map(function (object, index) {
                                return (
                                    <option key={index} value={object}>{object}</option>
                                )
                            })}
                        </Form.Select>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DropDownDemo;