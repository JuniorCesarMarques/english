import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const levels = [
  {
    level: 'A0 – Iniciante Absoluto',
    goal: 'Familiarização com o idioma, sons, vocabulário essencial, estrutura básica.',
    content: [
      'Alfabeto e pronúncia',
      'Números (0–100)',
      'Saudações e despedidas',
      'Apresentações: nome, idade, nacionalidade',
      'Verbo “to be”',
      'Pronomes pessoais',
      'Cores, dias da semana, meses',
      'Vocabulário: família, escola, objetos, partes do corpo'
    ]
  },
  {
    level: 'A1 – Iniciante',
    goal: 'Compreender e usar frases simples em contextos do cotidiano.',
    content: [
      'Artigos definidos/indefinidos',
      'Verbos básicos: like, want, have, go, need',
      'Presente simples',
      'Preposições de lugar e tempo',
      'Plural dos substantivos',
      'Perguntas com do/does',
      'Vocabulário: comida, roupas, transporte, clima',
      'Expressões úteis: horas, direções'
    ]
  },
  {
    level: 'A2 – Pré-intermediário',
    goal: 'Interagir em situações simples e compreender frases mais longas.',
    content: [
      'There is / There are',
      'Can / Could / Should',
      'Comparativos e superlativos',
      'Present continuous',
      'Future com “going to”',
      'Passado simples',
      'Quantifiers: some, any, much, many',
      'Expressões de frequência'
    ]
  },
  {
    level: 'B1 – Intermediário',
    goal: 'Comunicar-se com confiança em temas do dia a dia e profissionais.',
    content: [
      'Present perfect',
      'Past continuous',
      'Will vs Going to',
      'Modal verbs',
      'First conditional',
      'Gerúndio e infinitivo',
      'Phrasal verbs básicos',
      'Vocabulário: trabalho, tecnologia, notícias'
    ]
  },
  {
    level: 'B2 – Intermediário Avançado',
    goal: 'Usar o inglês com flexibilidade em contextos acadêmicos e profissionais.',
    content: [
      'Passive voice',
      'Reported speech',
      'Second conditional',
      'Relative clauses',
      'Phrasal verbs avançados',
      'Linking words',
      'Dissertações curtas',
      'Vocabulário: política, cultura, economia'
    ]
  },
  {
    level: 'C1 – Avançado',
    goal: 'Compreender e produzir textos complexos e falar fluentemente com naturalidade.',
    content: [
      'Third conditional',
      'Mixed conditionals',
      'Inversões',
      'Collocations e idioms',
      'Nuances verbais e de tom',
      'Expressões formais/informais',
      'Ensaios e relatórios',
      'Vocabulário técnico e acadêmico'
    ]
  }
];

export default function EnglishCourseLevels() {
  return (
    <div className="p-4 grid gap-6 max-w-4xl mx-auto">
      {levels.map(({ level, goal, content }) => (
        <Card key={level}>
          <CardContent className="p-4">
            <h2 className="text-xl font-bold mb-2">{level}</h2>
            <p className="text-sm mb-2 text-muted-foreground">🎯 {goal}</p>
            <ul className="list-disc list-inside text-sm">
              {content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
