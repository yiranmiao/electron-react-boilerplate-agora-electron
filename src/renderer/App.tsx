import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {createAgoraRtcEngine} from "agora-electron-sdk";
const Init = () => {
  return (
    <div>
        <button onClick={create}>createAgoraRtcEngine</button>
    </div>
  );
}
const create = () => {
 const rtcEngine = createAgoraRtcEngine();
 console.log(rtcEngine);
};
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Init />} />
      </Routes>
    </Router>
  );
}
