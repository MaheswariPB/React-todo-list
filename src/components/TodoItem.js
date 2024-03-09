import React, { useState } from "react";
import { Button } from "react-bootstrap";

const TodoItem = ({ text, completed, onClick, onRemove, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [isConfirming, setIsConfirming] = useState(false);

  const handleEditClick = () => {
    if (isEditing) {
      if (isConfirming) {
        // Save the edited text
        onEdit(editedText);
        setIsEditing(false);
        setIsConfirming(false);
      } else {
        // Activate confirmation step
        setIsConfirming(true);
      }
    } else {
      setIsEditing(true);
    }
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <Button onClick={handleEditClick} className="m-1">
            {isConfirming ? "Confirm" : "Save"}
          </Button>
        </div>
      ) : (
        <div>
          <span
            onClick={onClick}
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {editedText}
          </span>
          <div className="d-flex justify-content-end">
            <div>
              <Button variant="danger" onClick={onRemove} className="m-1">
                Remove
              </Button>

              <Button
                variant="primary"
                onClick={handleEditClick}
                className="m-1"
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
