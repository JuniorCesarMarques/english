import React from "react";

export default function EnglishCoursePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-10">Grade de Curso de Inglês (A0 ao C1)</h1>

      <Section
        level="A0 – Iniciante Absoluto"
        topics={[
          "Alfabeto",
          "Saudações básicas (Hello, Goodbye...)",
          "Pronomes pessoais (I, you, he...)",
          "Números (1-100)",
          "Verbo \"to be\"",
          "Cores, dias da semana, meses",
          "Frases simples (What's your name? Where are you from?)",
        ]}
      />

      <Section
        level="A1 – Iniciante"
        topics={[
          "Presente simples",
          "Vocabulário do cotidiano (família, casa, escola)",
          "Preposições básicas (in, on, at...)",
          "Artigos definidos e indefinidos",
          "Frases afirmativas, negativas e interrogativas",
          "Conversas simples",
        ]}
      />

      <Section
        level="A2 – Básico"
        topics={[
          "Verbos modais (can, must...)",
          "There is / There are",
          "Passado simples (regular e irregular)",
          "Quantificadores (some, any, much, many)",
          "Comparativos e superlativos",
          "Diálogos em situações práticas (restaurante, compras...)",
        ]}
      />

      <Section
        level="B1 – Intermediário"
        topics={[
          "Present perfect",
          "Past continuous",
          "Condicional tipo 1",
          "Reported speech",
          "Vocabulário mais específico (trabalho, viagens...)",
          "Produção de textos simples",
        ]}
      />

      <Section
        level="B2 – Intermediário Avançado"
        topics={[
          "Condicional tipo 2",
          "Discurso indireto (avançado)",
          "Uso de phrasal verbs",
          "Vocabulário formal e informal",
          "Leitura e interpretação de textos mais complexos",
          "Debates e apresentações",
        ]}
      />

      <Section
        level="C1 – Avançado"
        topics={[
          "Condicional tipo 3",
          "Mixed conditionals",
          "Dissertações e redações",
          "Inglês acadêmico e profissional",
          "Entendimento de filmes, séries e podcasts nativos",
          "Fluência em conversas com nativos",
        ]}
      />
    </main>
  );
}

function Section({ level, topics }: { level: string; topics: string[] }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">{level}</h2>
      <ul className="list-disc pl-6 space-y-1">
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </section>
  );
}
