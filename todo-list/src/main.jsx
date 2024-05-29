import "./assets/scss/style.scss";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

import ReactDOM from 'react-dom/client'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)