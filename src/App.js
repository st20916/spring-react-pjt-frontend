// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './router/Main'; // Main 컴포넌트 import

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/:userId" element={<Main />} /> {/* 파라미터 설정 */}
            </Routes>
        </Router>
    );
}

export default App;