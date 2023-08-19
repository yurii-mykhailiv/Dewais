import UserPage from './Pages/UserPage/UserPage';
import MainLayout from './shared/layout/MainLayout';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <UserPage/>
      </MainLayout>
    </div>
  );
}

export default App;
