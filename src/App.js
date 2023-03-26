import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.scss';
import { Editor } from './components/Editor';
import { Previewer } from './components/Previewer';

const TEXT = 'TEXT';

const updateText = (text) => {
  return {
    type: TEXT,
    text
  }
};

const textReducer = (state = '', action) => {
  switch (action.type) {
    case TEXT:
      return [
        action.text
      ];
    default:
      return state;
  }
};

// React-Redux:
const mapStateToProps = (state) => {
  return { text: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewText: (newText) => {
       dispatch(updateText(newText))
    }
  }
};

const ConnectedPreviewer = connect(mapStateToProps, null)(Previewer);
const ConnectedEditor = connect(null, mapDispatchToProps)(Editor);
const store = createStore(textReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ConnectedEditor></ConnectedEditor>
        <ConnectedPreviewer></ConnectedPreviewer>
      </Provider>
    </div>
  );
}

export default App;
