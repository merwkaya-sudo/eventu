import React from 'react';
import { 
  Header, 
  Hero, 
  EventList, 
  CategorySection, 
  BlogSection, 
  Footer 
} from './components';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <Hero />
      <main>
        <EventList />
        <CategorySection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;