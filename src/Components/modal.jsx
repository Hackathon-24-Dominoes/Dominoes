import '../App.css';

function Modal({ isOpen, onClose, msg, getGreetingStory }) {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal">
            {msg.length > 0 ? 
            <div className="center_story">
                <p>{msg}</p> 
                <button className="close-button" onClick={onClose}>
                X
                </button>
            </div>
            :         
            <div className="center_story">
                <h2>Modal Content</h2>
                <p>This is an example of a modal in React.</p>
                <button onClick={getGreetingStory}>Start Game!</button>
            </div>
            }

        </div>
        <button className="close-button" onClick={onClose}>
                X
          </button>
      </div>
    );
}

export default Modal;
