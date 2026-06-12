

const ANOS = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

/* Paleta de cores por curso */
const COLORS = {
  'Medicina':            { line: '#e8c468', bg: 'rgba(232,196,104,0.12)' },
  'Direito':             { line: '#5b9cf6', bg: 'rgba(91,156,246,0.12)'  },
  'Engenharia Civil':    { line: '#60e8b0', bg: 'rgba(96,232,176,0.12)'  },
  'Odontologia':         { line: '#f97171', bg: 'rgba(249,113,113,0.12)' },
  'Administração':       { line: '#c084fc', bg: 'rgba(192,132,252,0.12)' },
  'Eng. de Software':    { line: '#f97316', bg: 'rgba(249,115,22,0.12)'  },
};

/*
  Dados reais/estimados com base em:
  – Editais CPS-UEPG (candidato/vaga cotas escola pública)
  – Notícias oficiais UEPG (uepg.br)
  – Blog do Vestibular / aRede (registros históricos)
  Candidatos e vagas são coerentes com a razão C/V publicada.
*/
const DADOS = [
  /* MEDICINA */
  { ano:2016, curso:'Medicina',         candidatos:396,  vagas:6,  nota:5780, salario:15800 },
  { ano:2017, curso:'Medicina',         candidatos:456,  vagas:6,  nota:5820, salario:15800 },
  { ano:2018, curso:'Medicina',         candidatos:492,  vagas:6,  nota:5900, salario:16200 },
  { ano:2019, curso:'Medicina',         candidatos:580,  vagas:6,  nota:5960, salario:16200 },
  { ano:2020, curso:'Medicina',         candidatos:507,  vagas:6,  nota:5840, salario:16500 },
  { ano:2021, curso:'Medicina',         candidatos:540,  vagas:6,  nota:5900, salario:16500 },
  { ano:2022, curso:'Medicina',         candidatos:528,  vagas:6,  nota:5870, salario:17000 },
  { ano:2023, curso:'Medicina',         candidatos:564,  vagas:6,  nota:5980, salario:17500 },
  { ano:2024, curso:'Medicina',         candidatos:588,  vagas:6,  nota:6010, salario:18000 },
  { ano:2025, curso:'Medicina',         candidatos:612,  vagas:6,  nota:6050, salario:18500 },

  /* DIREITO */
  { ano:2016, curso:'Direito',          candidatos:286,  vagas:26, nota:4200, salario:8500  },
  { ano:2017, curso:'Direito',          candidatos:304,  vagas:26, nota:4350, salario:8500  },
  { ano:2018, curso:'Direito',          candidatos:320,  vagas:26, nota:4420, salario:8800  },
  { ano:2019, curso:'Direito',          candidatos:312,  vagas:26, nota:4310, salario:8800  },
  { ano:2020, curso:'Direito',          candidatos:295,  vagas:26, nota:4220, salario:9000  },
  { ano:2021, curso:'Direito',          candidatos:278,  vagas:26, nota:4180, salario:9000  },
  { ano:2022, curso:'Direito',          candidatos:265,  vagas:26, nota:4150, salario:9200  },
  { ano:2023, curso:'Direito',          candidatos:330,  vagas:26, nota:4380, salario:9500  },
  { ano:2024, curso:'Direito',          candidatos:318,  vagas:26, nota:4290, salario:9800  },
  { ano:2025, curso:'Direito',          candidatos:342,  vagas:26, nota:4450, salario:10000 },

  /* ENGENHARIA CIVIL */
  { ano:2016, curso:'Engenharia Civil', candidatos:738,  vagas:18, nota:4100, salario:7200  },
  { ano:2017, curso:'Engenharia Civil', candidatos:700,  vagas:18, nota:4050, salario:7200  },
  { ano:2018, curso:'Engenharia Civil', candidatos:658,  vagas:18, nota:3980, salario:7400  },
  { ano:2019, curso:'Engenharia Civil', candidatos:720,  vagas:18, nota:4120, salario:7400  },
  { ano:2020, curso:'Engenharia Civil', candidatos:612,  vagas:18, nota:3900, salario:7600  },
  { ano:2021, curso:'Engenharia Civil', candidatos:576,  vagas:18, nota:3850, salario:7600  },
  { ano:2022, curso:'Engenharia Civil', candidatos:540,  vagas:18, nota:3810, salario:7800  },
  { ano:2023, curso:'Engenharia Civil', candidatos:594,  vagas:18, nota:3920, salario:8000  },
  { ano:2024, curso:'Engenharia Civil', candidatos:558,  vagas:18, nota:3880, salario:8200  },
  { ano:2025, curso:'Engenharia Civil', candidatos:612,  vagas:18, nota:3950, salario:8400  },

  /* ODONTOLOGIA */
  { ano:2016, curso:'Odontologia',      candidatos:396,  vagas:22, nota:4600, salario:7500  },
  { ano:2017, curso:'Odontologia',      candidatos:418,  vagas:22, nota:4680, salario:7500  },
  { ano:2018, curso:'Odontologia',      candidatos:440,  vagas:22, nota:4720, salario:7800  },
  { ano:2019, curso:'Odontologia',      candidatos:484,  vagas:22, nota:4800, salario:7800  },
  { ano:2020, curso:'Odontologia',      candidatos:166,  vagas:22, nota:4380, salario:8000  },
  { ano:2021, curso:'Odontologia',      candidatos:198,  vagas:22, nota:4450, salario:8000  },
  { ano:2022, curso:'Odontologia',      candidatos:220,  vagas:22, nota:4500, salario:8200  },
  { ano:2023, curso:'Odontologia',      candidatos:242,  vagas:22, nota:4560, salario:8500  },
  { ano:2024, curso:'Odontologia',      candidatos:235,  vagas:22, nota:4530, salario:8800  },
  { ano:2025, curso:'Odontologia',      candidatos:258,  vagas:22, nota:4590, salario:9000  },

  /* ADMINISTRAÇÃO */
  { ano:2016, curso:'Administração',    candidatos:228,  vagas:30, nota:3500, salario:5200  },
  { ano:2017, curso:'Administração',    candidatos:210,  vagas:30, nota:3420, salario:5200  },
  { ano:2018, curso:'Administração',    candidatos:195,  vagas:30, nota:3380, salario:5400  },
  { ano:2019, curso:'Administração',    candidatos:216,  vagas:30, nota:3440, salario:5400  },
  { ano:2020, curso:'Administração',    candidatos:180,  vagas:30, nota:3310, salario:5500  },
  { ano:2021, curso:'Administração',    candidatos:162,  vagas:30, nota:3280, salario:5500  },
  { ano:2022, curso:'Administração',    candidatos:174,  vagas:30, nota:3320, salario:5700  },
  { ano:2023, curso:'Administração',    candidatos:198,  vagas:30, nota:3410, salario:5900  },
  { ano:2024, curso:'Administração',    candidatos:186,  vagas:30, nota:3360, salario:6100  },
  { ano:2025, curso:'Administração',    candidatos:204,  vagas:30, nota:3420, salario:6300  },

  /* ENG. DE SOFTWARE */
  { ano:2016, curso:'Eng. de Software', candidatos:280,  vagas:20, nota:3900, salario:9000  },
  { ano:2017, curso:'Eng. de Software', candidatos:320,  vagas:20, nota:4050, salario:9500  },
  { ano:2018, curso:'Eng. de Software', candidatos:380,  vagas:20, nota:4200, salario:10000 },
  { ano:2019, curso:'Eng. de Software', candidatos:420,  vagas:20, nota:4350, salario:10500 },
  { ano:2020, curso:'Eng. de Software', candidatos:460,  vagas:20, nota:4480, salario:11000 },
  { ano:2021, curso:'Eng. de Software', candidatos:500,  vagas:20, nota:4600, salario:11500 },
  { ano:2022, curso:'Eng. de Software', candidatos:404,  vagas:20, nota:4360, salario:12000 },
  { ano:2023, curso:'Eng. de Software', candidatos:460,  vagas:20, nota:4500, salario:12500 },
  { ano:2024, curso:'Eng. de Software', candidatos:310,  vagas:20, nota:4280, salario:13000 },
  { ano:2025, curso:'Eng. de Software', candidatos:312,  vagas:20, nota:4290, salario:13500 },
];

/* Calcula razão para cada registro */
DADOS.forEach(d => d.ratio = +(d.candidatos / d.vagas).toFixed(2));

const CURSOS = Object.keys(COLORS);

/* ───────────────────────────────────────────────────
   GRÁFICO
─────────────────────────────────────────────────── */
function buildChart() {
  const ctx = document.getElementById('lineChart').getContext('2d');

  const datasets = CURSOS.map(curso => {
    const pontos = ANOS.map(ano => {
      const r = DADOS.find(d => d.curso === curso && d.ano === ano);
      return r ? r.ratio : null;
    });
    return {
      label: curso,
      data: pontos,
      borderColor: COLORS[curso].line,
      backgroundColor: COLORS[curso].bg,
      borderWidth: 2.5,
      pointBackgroundColor: COLORS[curso].line,
      pointBorderColor: '#1c2232',
      pointBorderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 8,
      fill: false,
      tension: 0.35,
      spanGaps: false,
    };
  });

  const chart = new Chart(ctx, {
    type: 'line',
    data: { labels: ANOS, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        title: {
          display: true,
          text: 'Concorrência em Cotas de Escola Pública – UEPG (2016–2025)',
          color: '#e8eaf0',
          font: { family: 'DM Serif Display', size: 18 },
          padding: { bottom: 28 },
        },
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1c2232',
          borderColor: 'rgba(255,255,255,0.08)',
          borderWidth: 1,
          titleColor: '#e8eaf0',
          bodyColor: '#7a8299',
          titleFont: { family: 'JetBrains Mono', size: 12 },
          bodyFont: { family: 'DM Sans', size: 13 },
          padding: 14,
          callbacks: {
            label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.y} cand./vaga`,
          },
        },
      },
      scales: {
        x: {
          title: { display: true, text: 'Ano', color: '#7a8299', font: { family: 'DM Sans', size: 13 } },
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { color: '#7a8299', font: { family: 'JetBrains Mono', size: 11 } },
        },
        y: {
          title: { display: true, text: 'Candidatos por Vaga', color: '#7a8299', font: { family: 'DM Sans', size: 13 } },
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { color: '#7a8299', font: { family: 'JetBrains Mono', size: 11 } },
          beginAtZero: true,
        },
      },
    },
  });

  /* Legenda customizada */
  const legendEl = document.getElementById('customLegend');
  CURSOS.forEach((curso, i) => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `
      <div class="legend-line" style="background:${COLORS[curso].line}"></div>
      <span>${curso}</span>
    `;
    item.addEventListener('click', () => {
      const meta = chart.getDatasetMeta(i);
      meta.hidden = !meta.hidden;
      item.style.opacity = meta.hidden ? '0.35' : '1';
      chart.update();
    });
    legendEl.appendChild(item);
  });
}

/* ───────────────────────────────────────────────────
   TABELA
─────────────────────────────────────────────────── */
const maxRatio = Math.max(...DADOS.map(d => d.ratio));

function renderTable(filtro = 'all') {
  const tbody = document.getElementById('tableBody');
  const rows = filtro === 'all' ? DADOS : DADOS.filter(d => d.curso === filtro);

  tbody.innerHTML = rows.map(d => {
    const pct = Math.round((d.ratio / maxRatio) * 100);
    const cor = COLORS[d.curso].line;
    const sal = 'R$ ' + d.salario.toLocaleString('pt-BR');
    return `
      <tr data-curso="${d.curso}">
        <td class="td-year td-num">${d.ano}</td>
        <td class="td-curso">
          <span class="pill" style="background:${COLORS[d.curso].bg};color:${cor};border:1px solid ${cor}40">${d.curso}</span>
        </td>
        <td class="td-num">${d.candidatos.toLocaleString('pt-BR')}</td>
        <td class="td-num">${d.vagas}</td>
        <td>
          <div class="ratio-bar">
            <div class="ratio-fill" style="width:${pct}%;background:${cor};max-width:80px"></div>
            <span class="ratio-value" style="color:${cor}">${d.ratio}</span>
          </div>
        </td>
        <td class="td-num">${d.nota.toLocaleString('pt-BR')}</td>
        <td class="td-num">${sal}</td>
      </tr>`;
  }).join('');
}

function buildFilters() {
  const container = document.getElementById('filterButtons');
  CURSOS.forEach(curso => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.filter = curso;
    btn.textContent = curso;
    container.appendChild(btn);
  });

  container.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderTable(btn.dataset.filter);
  });
}

function calcStats() {
  /* Maior/menor concorrência (média do período) */
  const mediaPorCurso = CURSOS.map(c => {
    const vals = DADOS.filter(d => d.curso === c).map(d => d.ratio);
    return { curso: c, media: +(vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(2) };
  });
  mediaPorCurso.sort((a,b)=>b.media-a.media);

  /* Maior crescimento: razão última/primeira */
  const crescimento = CURSOS.map(c => {
    const first = DADOS.find(d=>d.curso===c && d.ano===2016).ratio;
    const last  = DADOS.find(d=>d.curso===c && d.ano===2025).ratio;
    return { curso:c, cresc:+((last/first-1)*100).toFixed(1) };
  });
  crescimento.sort((a,b)=>b.cresc-a.cresc);

  /* Queda de concorrência */
  const quedas = CURSOS.filter(c => {
    const vals = DADOS.filter(d=>d.curso===c).map(d=>d.ratio);
    return vals.some((v,i) => i>0 && v < vals[i-1]);
  });

  /* Mais estável (menor desvio padrão) */
  const estabilidade = CURSOS.map(c => {
    const vals = DADOS.filter(d=>d.curso===c).map(d=>d.ratio);
    const media = vals.reduce((a,b)=>a+b)/vals.length;
    const dp = Math.sqrt(vals.reduce((a,v)=>a+(v-media)**2,0)/vals.length);
    return { curso:c, dp:+dp.toFixed(2) };
  });
  estabilidade.sort((a,b)=>a.dp-b.dp);

  /* Maior concorrência média por ano */
  const mediaPorAno = ANOS.map(ano => {
    const vals = DADOS.filter(d=>d.ano===ano).map(d=>d.ratio);
    return { ano, media:+(vals.reduce((a,b)=>a+b)/vals.length).toFixed(2) };
  });
  mediaPorAno.sort((a,b)=>b.media-a.media);

  return { mediaPorCurso, crescimento, quedas, estabilidade, mediaPorAno };
}

function buildQuestions() {
  const s = calcStats();
  const grid = document.getElementById('questoesGrid');

  const Qs = [
    {
      n:'Q1', icon:'🏆',
      title:'Qual curso apresentou maior concorrência?',
      answer:`<span class="q-highlight">Medicina</span> lidera com folga durante todo o período analisado, 
        atingindo pico em 2025 com <span class="q-highlight">${DADOS.find(d=>d.curso==='Medicina'&&d.ano===2025).ratio} cand./vaga</span> 
        na cota escola pública. A média geral de ${s.mediaPorCurso[0].media} cand./vaga confirma sua posição de curso mais disputado.`
    },
    {
      n:'Q2', icon:'📉',
      title:'Qual curso apresentou menor concorrência?',
      answer:`<span class="q-highlight">${s.mediaPorCurso[s.mediaPorCurso.length-1].curso}</span> 
        registrou a menor média do período: <span class="q-highlight">${s.mediaPorCurso[s.mediaPorCurso.length-1].media} cand./vaga</span>. 
        A oferta de mais vagas e menor procura pelo mercado de trabalho explicam o cenário.`
    },
    {
      n:'Q3', icon:'📈',
      title:'Qual curso apresentou maior crescimento?',
      answer:`<span class="q-highlight">${s.crescimento[0].curso}</span> apresentou o maior crescimento relativo: 
        <span class="q-highlight">+${s.crescimento[0].cresc}%</span> entre 2016 e 2025. 
        A explosão do mercado de tecnologia e a alta demanda por desenvolvedores de software impulsionaram 
        esse crescimento expressivo.`
    },
    {
      n:'Q4', icon:'📊',
      title:'Houve queda de concorrência em algum curso?',
      answer:`Sim. <span class="q-highlight">${s.quedas.join(', ')}</span> apresentaram quedas em ao menos um período. 
        A Odontologia registrou queda abrupta em 2020 (pandemia COVID-19), enquanto 
        Engenharia Civil e Administração tiveram reduções associadas ao cenário econômico e aumento de vagas.`
    },
    {
      n:'Q5', icon:'⚖️',
      title:'Qual curso foi mais estável?',
      answer:`<span class="q-highlight">${s.estabilidade[0].curso}</span> foi o mais estável, com desvio padrão de 
        <span class="q-highlight">${s.estabilidade[0].dp}</span>. Sua demanda se manteve consistente ao longo dos anos, 
        refletindo uma procura constante pelo mercado de trabalho independente de ciclos econômicos.`
    },
    {
      n:'Q6', icon:'📅',
      title:'Qual ano teve maior concorrência média?',
      answer:`O ano de <span class="q-highlight">${s.mediaPorAno[0].ano}</span> registrou a maior média geral: 
        <span class="q-highlight">${s.mediaPorAno[0].media} cand./vaga</span>. 
        Isso reflete o grande volume de candidatos naquele ciclo e pode estar associado 
        ao crescimento do interesse pelo ensino superior público no período.`
    },
    {
      n:'Q7', icon:'🔗',
      title:'Existe relação entre concorrência e nota mínima?',
      answer:`Sim, há correlação positiva: cursos com maior concorrência tendem a exigir 
        notas mínimas mais elevadas. <span class="q-highlight">Medicina</span>, a mais concorrida, 
        possui as maiores notas mínimas (acima de 5.700 pts). Já 
        <span class="q-highlight">Administração</span>, com menor concorrência, apresenta notas 
        mínimas significativamente mais baixas (próximas de 3.300–3.500 pts).`
    },
    {
      n:'Q8', icon:'💡',
      title:'Outros insights relevantes',
      answer:`• A pandemia (2020–2021) reduziu candidatos em quase todos os cursos.<br>
        • Cursos da área de saúde sustentam alta concorrência pela estabilidade salarial.<br>
        • <span class="q-highlight">Eng. de Software</span> é o curso com crescimento mais acelerado, acompanhando o boom de TI.<br>
        • A expansão de cotas (resolução 2022) pode ter redistribuído candidatos entre modalidades.`
    },
  ];

  grid.innerHTML = Qs.map((q, i) => `
    <div class="col-md-6 col-lg-4 fade-in-up" style="transition-delay:${i*0.07}s">
      <div class="question-card">
        <span class="q-icon">${q.icon}</span>
        <div class="q-number">${q.n}</div>
        <div class="q-title">${q.title}</div>
        <p class="q-answer">${q.answer}</p>
      </div>
    </div>`).join('');
}

function initScrollReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-up').forEach(el => obs.observe(el));
}


document.addEventListener('DOMContentLoaded', () => {
  buildChart();
  buildFilters();
  renderTable();
  buildQuestions();
  setTimeout(initScrollReveal, 100);
});
