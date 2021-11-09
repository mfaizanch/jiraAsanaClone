import React from 'react';
import { Col, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


interface BoardSectionProps {
  title: String
}

const BoardSection: React.FC<BoardSectionProps> = ({ title }) => {
  return (
    <Col md={3} className="d-flex flex-column p-2">
      <div className="board-section-header d-flex flex-row align-items-center">
        <h3 className="me-auto">{title}</h3>
        <div>add</div>
      </div>
      <Card>
        <Card.Body>
          this is some ticket
        </Card.Body>
      </Card>
      <Button className="add-wrapper">
        <FontAwesomeIcon icon={faPlus} style={{'padding': '2px'}}/>
        Add task
      </Button>
    </Col>
  );
}

export default BoardSection;
