import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/redux-store/appStore';
function App() {
  return (
    <div>
    <Provider store={appStore}>
      <div className="overflow-y-scroll no-scrollbar">
      <Body/>
      </div>
    </Provider>
    </div>
  );
}

export default App;
