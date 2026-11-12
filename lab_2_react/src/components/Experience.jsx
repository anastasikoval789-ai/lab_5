function Experience() {
  return (
    <section>
      {/* Заголовок секції з іконкою та підкресленням */}
      <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-200">
        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
          💼
        </div>
        <h2 className="text-2xl font-bold text-slate-800">
          Досвід роботи
        </h2>
      </div>

      {/* Список досвіду */}
      <div className="space-y-6">
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Junior Frontend Developer
              </h3>
              <p className="text-blue-600 font-medium text-sm">
                IT Solutions
              </p>
            </div>
            {/* Часова мітка */}
            <span className="self-start sm:self-center bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">
              2025 — Дотепер
            </span>
          </div>

          {/* Опис та обов'язки */}
          <ul className="list-disc list-inside text-slate-600 text-sm space-y-1.5 leading-relaxed">
            <li>Розробка семантичної веб-розмітки та стилізація компонентів.</li>
            <li>Адаптація інтерфейсів під мобільні пристрої та планшети.</li>
            <li>Командна робота та контроль версій з використанням Git.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;