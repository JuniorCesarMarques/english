import React from "react";

export default function EnglishCourse() {
  return (
    <main className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Curso de Inglês – Do Zero ao Avançado</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">A0 – Totalmente Iniciante</h2>
        <p className="mb-2">Indicado para quem nunca teve contato com o inglês.</p>
        <ul className="list-disc list-inside">
          <li>Alfabeto e pronúncia</li>
          <li>Saudações e apresentações básicas</li>
          <li>Pronomes pessoais</li>
          <li>Verbo “to be” no presente</li>
          <li>Números, cores, dias da semana</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">A1 – Iniciante</h2>
        <p className="mb-2">Começa a se comunicar em situações cotidianas simples.</p>
        <ul className="list-disc list-inside">
          <li>Frases simples e perguntas básicas</li>
          <li>Vocabulário de casa, família, rotina</li>
          <li>Presente simples (simple present)</li>
          <li>Preposições básicas</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">A2 – Básico</h2>
        <p className="mb-2">Consegue lidar com tarefas rotineiras e compreender frases comuns.</p>
        <ul className="list-disc list-inside">
          <li>Passado simples (simple past)</li>
          <li>Pronomes possessivos</li>
          <li>Vocabulário de trabalho, transporte, alimentação</li>
          <li>Expressões de tempo e frequência</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">B1 – Intermediário</h2>
        <p className="mb-2">Já compreende textos e consegue manter conversas mais elaboradas.</p>
        <ul className="list-disc list-inside">
          <li>Present perfect</li>
          <li>Comparativos e superlativos</li>
          <li>Condicional tipo 1</li>
          <li>Vocabulário mais amplo (viagens, saúde, educação)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">B2 – Intermediário-Avançado</h2>
        <p className="mb-2">Compreende textos complexos e se expressa com mais fluência.</p>
        <ul className="list-disc list-inside">
          <li>Reported speech</li>
          <li>Condicional tipo 2 e 3</li>
          <li>Passive voice</li>
          <li>Vocabulário técnico e acadêmico</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">C1 – Avançado</h2>
        <p className="mb-2">Comunicador fluente, com vocabulário rico e estrutura gramatical consolidada.</p>
        <ul className="list-disc list-inside">
          <li>Idioms e phrasal verbs</li>
          <li>Inglês para negócios</li>
          <li>Escrita formal e acadêmica</li>
          <li>Debates e argumentação</li>
        </ul>
      </section>
    </main>
  );
}
