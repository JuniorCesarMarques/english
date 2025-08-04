export default function Home() {
  const levels = [
    {
      title: "Nível 0: Pré-Iniciante (A0)",
      duration: "1 mês",
      goal: "Entender o básico do básico: sons, alfabeto, estrutura da frase.",
      topics: [
        "Alfabeto em inglês",
        "Saudações básicas",
        "Números (1–100)",
        "Dias da semana, meses e cores",
        "Verbos básicos: to be, to have",
        "Artigos: a, an, the",
        "Pronomes pessoais",
        "Palavras essenciais: yes, no, please, thank you"
      ],
    },
    {
      title: "Nível 1: Iniciante (A1)",
      duration: "2 a 3 meses",
      goal: "Falar e entender frases simples e cotidianas.",
      topics: [
        "Verbo to be no presente",
        "Presente simples",
        "Verbos comuns: go, eat, like",
        "Perguntas com Do / Does",
        "Vocabulário básico: comida, família, casa",
        "Frases de sobrevivência",
        "Preposições básicas",
        "Plural, contáveis e incontáveis"
      ],
    },
    {
      title: "Nível 2: Pré-Intermediário (A2)",
      duration: "2 a 3 meses",
      goal: "Ter conversas simples e entender mais do dia a dia.",
      topics: [
        "Passado simples",
        "Futuro com going to / will",
        "Comparativos e superlativos",
        "Modais básicos: can, should",
        "Vocabulário do cotidiano",
        "Expressões úteis do dia a dia"
      ],
    },
    {
      title: "Nível 3: Intermediário (B1)",
      duration: "3 a 4 meses",
      goal: "Conversar com fluência básica e ler textos com mais profundidade.",
      topics: [
        "Presente perfeito",
        "Condicional",
        "Conjunções",
        "Voz passiva",
        "Phrasal verbs comuns",
        "Listening com séries simples"
      ],
    },
    {
      title: "Nível 4: Intermediário Avançado (B2)",
      duration: "3 a 4 meses",
      goal: "Conversar com confiança e debater opiniões.",
      topics: [
        "Reported speech",
        "Gerúndio vs infinitivo",
        "Expressar opiniões",
        "Phrasal verbs complexos",
        "Vocabulário de negócios e cultura",
        "Escrita argumentativa"
      ],
    },
    {
      title: "Nível 5: Avançado (C1–C2)",
      duration: "6+ meses",
      goal: "Ser fluente e entender nativos em ritmo natural.",
      topics: [
        "Inglês acadêmico e profissional",
        "Entonação, humor, ironia",
        "Expressões idiomáticas",
        "Storytelling e debate",
        "Vocabulário técnico",
        "Redação de textos complexos"
      ],
    },
  ];

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📘 Grade de Inglês — Do Zero ao Avançado</h1>

      {levels.map((level, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow p-5 mb-6 border border-gray-200"
        >
          <h2 className="text-xl font-semibold text-blue-700 mb-1">{level.title}</h2>
          <p className="text-sm text-gray-500 mb-2">⏳ Duração sugerida: {level.duration}</p>
          <p className="mb-3 text-gray-700">{level.goal}</p>
          <ul className="list-disc pl-6 text-gray-800">
            {level.topics.map((topic, i) => (
              <li key={i} className="mb-1">{topic}</li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
