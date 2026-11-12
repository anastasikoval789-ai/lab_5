function Education() {
  return (
    <section>
      {/* Заголовок секції з іконкою та підкресленням */}
      <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-200">
        <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
          🎓
        </div>
        <h2 className="text-2xl font-bold text-slate-800">
          Освіта
        </h2>
      </div>

      {/* Картка освіти */}
      <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Національний університет «Львівська політехніка»
            </h3>
            <p className="text-indigo-600 font-medium text-sm mt-0.5">
              Інститут комп'ютерних технологій, автоматики та метрології (ІКТА)
            </p>
          </div>
          {/* Бейдж періоду навчання */}
          <span className="self-start sm:self-center bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-100/80">
            2025 – 2029
          </span>
        </div>

        {/* Деталі навчання */}
        <div className="mt-3 pt-3 border-t border-slate-100 text-slate-600 text-sm flex items-center gap-2">
          <span className="font-semibold text-slate-700">Спеціальність:</span>
          <span className="bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md font-medium text-xs">
            125 Кібербезпека (Бакалаврат)
          </span>
        </div>
      </div>
    </section>
  );
}

export default Education;