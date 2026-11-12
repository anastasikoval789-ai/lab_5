import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 py-10 px-4 sm:px-6 lg:px-8">
      <main className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200/80 transition-all">
        {/* Шапка резюме */}
        <Header />

        {/* Основні секції резюме */}
        <div className="p-6 sm:p-10 space-y-8">
          <section className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
            <Experience />
          </section>

          <section className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
            <Education />
          </section>
        </div>

        {/* Підвал резюме */}
        <Footer />
      </main>
    </div>
  );
}

export default App;