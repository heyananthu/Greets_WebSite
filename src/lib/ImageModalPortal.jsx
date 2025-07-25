import ReactDOM from 'react-dom';

export default function ImageModalPortal({ children }) {
  return ReactDOM.createPortal(children, document.body);
}
