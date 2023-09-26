import { CursorStyles } from "../styles/Cursor.styles"

const Cursor = ({ cursorPosition, clicked }) => {
  
    return (
      <CursorStyles.Cursor
      style={{
        left: cursorPosition.left - 10,
        top: cursorPosition.top - 10,
        transform: `scale(${clicked.scale})`,
        background: `${clicked.backGround}`,
        filter: clicked.filter
      }}
      
    >
      
      </CursorStyles.Cursor>
    );
  };

export default Cursor