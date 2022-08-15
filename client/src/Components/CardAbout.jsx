import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const CardAbout = (props) => {

    //To change sizing of card inside the Card tag style={{width: '18rem', height: '18rem'}}

    return (
        <>
            <Container>
                <Card bg='light'>
                    <Card.Header as={'h5'}>{props.title}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {props.text}
                        </Card.Text>
                        <Button variant="primary" as={Link} to="/Demo">Try it!</Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default CardAbout;