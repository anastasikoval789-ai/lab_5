function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-8 sm:p-10 text-center sm:text-left relative overflow-hidden">
      {/* Декоративний фоновий блиск */}
      <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
        <div>
          {/* Ім'я */}
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            Вікторія Коваль
          </h1>
          
          {/* Спеціальність / Профіль */}
          <p className="text-lg font-medium text-blue-400 mb-4">
            Студентка спеціальності «Кібербезпека»
          </p>

          {/* Контактні дані */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-sm text-slate-300">
            <a 
              href="mailto:viktoriia.koval.kb.2025@lpnu.ua" 
              className="inline-flex items-center gap-1.5 bg-slate-800/80 hover:bg-slate-800 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700/60 transition-colors"
            >
              <span>📧</span> viktoriia.koval.kb.2025@lpnu.ua
            </a>
            
            <a 
              href="tel:+380981234567" 
              className="inline-flex items-center gap-1.5 bg-slate-800/80 hover:bg-slate-800 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700/60 transition-colors"
            >
              <span>📞</span> +380 (98) 123-45-67
            </a>

            <span className="inline-flex items-center gap-1.5 bg-slate-800/80 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700/60">
              <span>📍</span> м. Львів, Україна
            </span>
          </div>
        </div>

        {/* Статус / Бейдж */}
        <div className="hidden md:block shrink-0">
          <span className="inline-block bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Junior SOC / Security
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;