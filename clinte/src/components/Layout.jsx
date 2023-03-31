import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
const Layout = (props) => {
  return (
    <Container fluid className='mt-3'>
      <Row className='justify-content-md-center'>
        <Col xs='12' md='10' lg='8' xl='6'>
          <h3 className='mb-4 text-center'>Todo List Tracker App</h3>
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
