import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const TodoList = (props) => {
  const {todoList, setNewTodo, updateTodo, deleteTodo,completeTodo} = props;
  return (
    <ListGroup as="ul">
      <h4>
        Tasks To Be Done: {todoList.length}{" "}
        {todoList.length === 1 ? "task" : "tasks"}
      </h4>
      <Button variant="outline-danger" onClick={completeTodo}>Complete All Task</Button>
      <br></br>
      {todoList.map((val) => {
        return (
          <ListGroup.Item
            className="d-flex justify-content-between align-items-center"
            as="li"
            key={val.id}
          >
            {val.todo}
            <div className="d-flex justify-content-center">
              <Form
                onSubmit={(event) => {
                  event.preventDefault();
                  updateTodo(val.id);
                }}
              >
                <InputGroup>
                  <FormControl
                    placeholder="Edit todo"
                    onChange={(event) => {
                      setNewTodo(event.target.value);
                    }}
                  />
                  <Button
                    variant="outline-primary"
                    onClick={() => updateTodo(val.id)}
                  >
                    Update
                  </Button>
                </InputGroup>
              </Form>
              <Button
                style={{ marginLeft: 10 }}
                variant="outline-danger"
                onClick={() => deleteTodo(val.id)}
              >
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default TodoList;
