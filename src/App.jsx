import MainSearchGroup from './components/MainSearchGroup';
import MainSection from './components/layout/MainSection';
import TitleWithSub from './ui/TextIntros/TitleWithSub';

function App() {
  return (
    <MainSection>
      <TitleWithSub
        title="Mars Rover Photos"
        subtitle="Unveiling the Enigmatic Mars Through Stunning Rover Photos"
      />
      <MainSearchGroup />
    </MainSection>
  );
}

export default App;
