import logo from './logo.svg';

import Hamburgermenu from './Hamburgermenu';
import Main from './Main';
import Footer from './Footer';
import ImageGallery from './ImageGallery';

function App() {
  return (
    <div>
      <header>
        <Hamburgermenu/>
        <Main/>
        <ImageGallery/>
        <Footer/> 
        {/* <Header/>
        <Routes>
          <Route path='/services' element={<Services/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/> 
          <Route path='/about' element={<About/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/contact' element={<Contact/>}/> 
        </Routes> */}
      </header>
    </div>
  );
}

export default App;
