import Header from '../header/Header'
import Lista from '../lista/Lista'
import {Container, Row} from "react-bootstrap";

export default function Grilla() {
    return (
        <Container>
            <Row>
                <Header/>
            </Row>
            <Row>
                <Container>
                    <Lista/>
                </Container>
            </Row>
        </Container>
    );
}