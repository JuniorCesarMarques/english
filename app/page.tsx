import React from 'react';

const EnglishCourseLevels = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Grade de Curso de Inglês (A0 ao C1)</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold">A0 – Iniciante Absoluto</h2>
          <ul className="list-disc list-inside">
            <li>Alfabeto</li>
            <li>Saudações básicas (Hello, Goodbye...)</li>
            <li>Pronomes pessoais (I, you, he...)</li>
            <li>Números (1-100)</li>
            <li>Verbo "to be"</li>
            <li>Cores, dias da semana, meses</li>
            <li>Frases simples (What's your name? Where are you from?)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">A1 – Iniciante</h2>
          <ul className="list-disc list-inside">
            <li>Presente simples</li>
            <li>Vocabulário do cotidiano (família, casa, escola)</li>
            <li>Preposições básicas (in, on, at...)</li>
            <li>Artigos definidos e indefinidos</li>
            <li>Frases afirmativas, negativas e interrogativas</li>
            <li>Conversas simples</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">A2 – Básico</h2>
          <ul className="list-disc list-inside">
            <li>Verbos modais (can, must...)</li>
            <li>There is / There are</li>
            <li>Passado simples (regular e irregular)</li>
            <li>Quantificadores (some, any, much, many)</li>
            <li>Comparativos e superlativos</li>
            <li>Diálogos em situações práticas (restaurante, compras...)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">B1 – Intermediário</h2>
          <ul className="list-disc list-inside">
            <li>Present perfect</li>
            <li>Past continuous</li>
            <li>Condicional tipo 1</li>
            <li>Reported speech</li>
            <li>Vocabulário mais específico (trabalho, viagens...)</li>
            <li>Produção de textos simples</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">B2 – Intermediário Avançado</h2>
          <ul className="list-disc list-inside">
            <li>Condicional tipo 2</li>
            <li>Discurso indireto (avançado)</li>
            <li>Uso de phrasal verbs</li>
            <li>Vocabulário formal e informal</li>
            <li>Leitura e interpretação de textos mais complexos</li>
            <li>Debates e apresentações</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">C1 – Avançado</h2>
          <ul className="list-disc list-inside">
            <li>Condicional tipo 3</li>
            <li>Mixed conditionals</li>
            <li>Dissertações e redações</li>
            <li>Inglês acadêmico e profissional</li>
            <li>Entendimento de filmes, séries e podcasts nativos</li>
            <li>Fluência em conversas com nativos</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default EnglishCourseLevels;
