import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import { IAppProps } from './App/shared/models/IAppProps';
import configureStore from './App/shared/redux/store/Store';
import getAllCharacters from './App/shared/redux/actions/CharacterActions';

/**
 * Create a root component that receives the store via props
 * and wraps the App component with Provider, giving props to containers
 */
const Root: React.FC<IAppProps> = (props: IAppProps) => {
  const { store } = props;

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

/**
 * Generate the store
 */
const store = configureStore();

/**
 * Dispatch by default
 */
store.dispatch(getAllCharacters());

/**
 * Render the app
 */
ReactDOM.render(<Root store={store} />, document.getElementById('root') as HTMLElement);

/**
 * TODO: boilerplate code (create-react-app)
 */
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
