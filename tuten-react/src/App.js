import { useReducer } from 'react'
import { authReducer } from './context/reducer/AuthReducer';
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './context/AuthContext';

const init = () =>{
  return JSON.parse(localStorage.getItem('state')) || {logged: false}
}
function App() {
  const [state, dispatch] = useReducer(authReducer, {}, init)
  return (
    <AuthContext.Provider value={{state, dispatch}}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;
