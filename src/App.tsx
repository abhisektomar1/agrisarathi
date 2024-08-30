import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import PrivacyPolicy from "./components/privacyPolicy";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
		<Route path="/privacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
