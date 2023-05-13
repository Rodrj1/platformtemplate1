import { About, Footer, Header, Presentation, Roadmap } from './components';

function App() {
  return (
    <div className="bg-slate-900 h-screen max-h-screen max-w-full overflow-x-hidden">
      <main className="bg-gradient-to-tr from-pink-950/20 to-pink-900/10 min-h-screen">
        <Header />

        <Presentation />

        <About />

        <Roadmap />
        
        <Footer />
      </main>
    </div>
  );
}

export default App;
