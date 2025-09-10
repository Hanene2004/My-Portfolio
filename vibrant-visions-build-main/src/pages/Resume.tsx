const Resume = () => {
  return (
    <main className="mx-auto max-w-4xl p-6 print:p-0 print:max-w-none print:w-[210mm] print:bg-white">
      <header className="mb-6 print:mb-2">
        <h1 className="text-3xl font-bold">Hanene Ghabbara</h1>
        <p className="text-sm text-muted-foreground">Computer Science Student • Web & AI Enthusiast</p>
      </header>
      <section className="grid md:grid-cols-2 gap-6 print:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Java, PHP, Python, TypeScript</li>
            <li>React, Angular, Laravel</li>
            <li>MySQL, Database Design</li>
            <li>UI/UX, Responsive Design</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Education</h2>
          <p className="text-sm">Bachelor's in IT — Isetta University</p>
          <p className="text-sm">Bachelor's degree in Experimental Science — Mourouj 1, Ben Arous High School</p>
        </div>
      </section>
      <section className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Projects</h2>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>currency_converter — Python Tkinter desktop app for currency conversion</li>
          <li>TechStore — React/TS front-end for tech e-commerce</li>
          <li>Mutamad.tn — Admin dashboard for Tunisian merchants</li>
        </ul>
      </section>
      <footer className="mt-6 text-xs text-muted-foreground print:hidden">
        Print this page (Ctrl/Cmd + P) for a clean PDF.
      </footer>
    </main>
  );
};

export default Resume;


