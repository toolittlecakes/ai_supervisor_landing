import { BarChart3, Brain, CheckCircle, ChevronUp, FileText, Mail, Shield, Users } from 'lucide-react';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';

// --- ASSET IMPORTS ---
import analysisImg from './assets/analysis.png';
import conceptualizationImg from './assets/conceptualization.png';
import therapistDashboardImg from './assets/therapist_dashboard.png';
import transcriptImg from './assets/transcript.png';

// --- COMPONENT IMPORTS ---
import PrivacyPolicy from './components/PrivacyPolicy';

// ============================================================================
// --- DATA: Separated Content (Would be in a file like `src/data/content.ts`) ---
// ============================================================================

const content = {
  painPoints: [
    {
      id: 1,
      title: "«Хороший супервизор — это дорого»",
      text: "Вопросы и сомнения по клиентам накапливаются каждый день, но на качественную супервизию нет возможности ходить чаще 1-2 раза в месяц. Часто супервизия стоит больше, чем твоя сессия."
    },
    {
      id: 2,
      title: "«Подготовка к супервизии забирает много сил»",
      text: "Чтобы хорошо подготовиться к супервизии, на концептуализацию кейса уходит несколько часов. Если прийти без подготовки — половина супервизии тратится на пересказ кейса вместо его разбора."
    },
    {
      id: 3,
      title: "«Страшно разбирать свои ошибки»",
      text: "Получать обратную связь от авторитетного супервизора иногда тревожно. \"Вдруг супервизор подумает, что я плохой терапевт?\""
    },
    {
      id: 4,
      title: "\"Супервизор не видит сессию своими глазами\"",
      text: "Супервизор работает с тем, что ему рассказали — а не с самой сессией. В пересказе легко упустить важные детали: интонации, паузы, формулировки клиента, эмоциональные нюансы. Консультация строится на памяти и интерпретациях, а значит — не даёт полной картины и может быть поверхностной."
    }
  ],
  features: [
    { id: 1, text: "Автоматическая запись и расшифровка" },
    { id: 2, text: "Выводы по сессии и обратная связь" },
    { id: 3, text: "Анализ динамики по нескольким сессиям" },
    { id: 4, text: "Концептуализация клиента" }
  ],
  howItWorks: [
    {
      id: 1,
      title: "Автоматическая запись и расшифровка",
      text: "Приложение само обнаруживает звонок в Zoom/Meet/Teams/Telegram и предлагает его записать. Запись идет на вашем компьютере, никакие данные не покидают его. После сессии приложение автоматически расшифровывает запись и предлагает вам структурированный отчет.",
      icon: <FileText className="w-16 h-16 text-blue-600" />,
      image: transcriptImg
    },
    {
      id: 2,
      title: "Выводы по сессии и обратная связь",
      text: "Отчет по сессии включает в себя 3 блока:",
      details: [
        "О клиенте: формулировка проблемы, ключевые темы, динамика эмоций во время встречи",
        "О сессии: баланс речи терапевт/клиент, качество рабочего альянса, использованные техники, какое домашнее задание было дано и как оно связано с целями терапии",
        "О ваших навыках: фидбек по шкалам CTSR и STCS, что получилось хорошо, где есть зоны роста, и конкретные рекомендации на следующую сессию"
      ],
      conclusion: "Все это — через 5 минут после завершения встречи, пока впечатления еще свежие.",
      icon: <BarChart3 className="w-16 h-16 text-blue-600" />,
      image: analysisImg
    },
    {
      id: 3,
      title: "Динамика по нескольким сессиям",
      text: "AI Supervisor отслеживает, как меняется состояние клиента от встречи к встрече. Выявляет паттерны: что повторяется, где происходят сдвиги, а где застой. Концептуализация клиента обновляется автоматически: глубинные убеждения, промежуточные, копинг-стратегии, поддерживающие циклы — всё складывается в единую картину сессия за сессией. Это помогает видеть не только момент, но и процесс — и принимать терапевтические решения на основе всей динамики, а не фрагмента.",
      icon: <Brain className="w-16 h-16 text-blue-600" />,
      image: conceptualizationImg
    }
  ],
  personas: [
    {
      id: 1,
      title: "Мы создавали его для тех, кто ведёт много клиентов и хочет не терять фокус",
      items: [
        "Легче отслеживать динамику клиентов",
        "Держать в голове цели, план терапии и последние сессии каждого клиента",
        "Помнить важные детали о клиентах",
        "Экономить часы на сбор информации к супервизиям или сертификации"
      ]
    },
    {
      id: 2,
      title: "Хочет понимать, как работает сам",
      items: [
        "Получать структурную обратную связь по техникам и взаимодействию с клиентами",
        "Отслеживать свои навыки и точки роста",
        "Развиваться без самокритики и тревоги"
      ]
    },
    {
      id: 3,
      title: "Любит порядок, структуру и надёжную опору",
      items: [
        "Иметь понятные и точные концептуализации, обновляющиеся по мере работы",
        "Планировать терапию осознанно, а не «на ходу»",
        "Видеть динамику клиента во времени",
        "Замечать паттерны у клиента, которые ускользают в потоке",
        "Формулировать новые гипотезы о кейсе"
      ]
    },
    {
      id: 4,
      title: "Иногда чувствует: «Я один»",
      items: [
        "Когда нет регулярной супервизии либо ее не достаточно для разбора всех кейсов",
        "Когда сложно понять, это я что-то не так делаю или случай сложный",
        "Когда нужна поддержка между сессиями, а спросить не у кого"
      ]
    }
  ],
  faqData: [
    {
      id: 1,
      question: "Насколько это безопасно? Где хранятся мои данные и записи сессий?",
      answer: "Мы понимаем, насколько важна конфиденциальность в вашей работе. Поэтому все аудиозаписи сессий, их транскрипты и любые данные о ваших клиентах хранятся исключительно на вашем компьютере. На наши серверы ничего из этого не передается и не сохраняется. Для анализа сессий мы используем защищенные API Yandex Cloud, при этом данные передаются для обработки в обезличенном виде (только текст транскрипта без идентификаторов клиента или терапевта) и не используются для обучения моделей Яндекса. Ваша практика остается вашей."
    },
    {
      id: 2,
      question: "Заменит ли ваш сервис 'живого' супервизора?",
      answer: "Нет. Наш продукт — это дополнение к классической супервизии, которое работает между встречами с вашим супервизором. Живая супервизия остается незаменимой для сложных этических дилемм, личных реакций и глубокого разбора случаев. Supervisor AI — это инструмент между сессиями: он помогает быстро увидеть слабые и сильные стороны, собрать данные, отследить динамику и прийти к «живому» супервизору уже с готовой картиной. Он не заменяет человеческое участие, но снимает часть рутинной нагрузки и помогает держать фокус."
    },
    {
      id: 3,
      question: "С какими терапевтическими модальностями работает система?",
      answer: "На данный момент Supervisor AI оптимизирован для анализа сессий в рамках Когнитивно-Поведенческой Терапии (КПТ) и схема-терапии. Мы выбрали эти модальности, так как они имеют достаточно четко определенные структуры и техники, что позволяет AI проводить более точный анализ. В будущем мы планируем расширять список поддерживаемых модальностей."
    },
    {
      id: 4,
      question: "Требуется ли согласие клиента на запись сессий?",
      answer: "Да, безусловно. Получение информированного согласия клиента на аудио- или видеозапись сессии является обязательным этическим требованием для любого психолога. Перед использованием Supervisor AI вы должны обсудить это с клиентом и получить его явное согласие. Мы рекомендуем объяснить клиенту, что запись используется исключительно для улучшения качества терапии и вашего профессионального развития, и что данные остаются конфиденциальными."
    },
    {
      id: 5,
      question: "Насколько точен AI-анализ?",
      answer: "Наш AI основан на современных методах обработки естественного языка и анализе паттернов коммуникации в психотерапии. Система обучена распознавать терапевтические техники, эмоциональную динамику и структурные элементы сессий на основе признанных профессиональных стандартов и методических материалов. Однако важно помнить, что это инструмент поддержки, а не истина в последней инстанции. Мы рекомендуем использовать его анализ как основу для вашей собственной профессиональной рефлексии, обсуждения с коллегами или вашим \"живым\" супервизором. Финальное решение и интерпретация всегда остаются за вами."
    },
    {
      id: 6,
      question: "Какие методические материалы вы используете",
      answer: `Обратная связь, которую вы получаете от системы, формируется на основе валидированных шкал супервизии — CTSR (Cognitive Therapy Scale–Revised) и Schema Therapist Competency Rating Scale (STCS).\n\nВ основе алгоритмов — не «обобщённый ИИ», а тщательно отобранные материалы из современной профессиональной литературы. Мы использовали руководство по схема-терапии Джеффри Янга и труды ведущих практиков: Eckhard Roediger, Joan Farrell, Gitta Jacob, Hannie van Genderen, Christopher Hayes, Robert Brockman, а также публикации и обучающие материалы ISST.\n\nКПТ-блок разработан на основе работ Judith Beck, Christine Padesky, Keith Dobson, Willem Kuyken, David Clark, Adrian Wells, Edna Foa, Robert Leahy и других авторов, чьи модели лежат в основе большинства программ сертификации.\n\nТакже мы опирались на специализированные источники по обучению и супервизии: Handbook of Training and Supervision in CBT, A Manual for Evidence-Based CBT Supervision и др.`
    },
    {
      id: 7,
      question: "Что делать, если у меня очень специфический или сложный случай?",
      answer: "Supervisor AI может быть полезен и в таких ситуациях, помогая структурировать имеющуюся информацию, отследить динамику и, возможно, подсветить какие-то неочевидные моменты. Однако, для работы с особо сложными, нестандартными или кризисными случаями, требующими глубокого человеческого опыта и интуиции, консультация с опытным \"живым\" супервизором остается необходимой. Наш сервис может помочь вам лучше подготовиться к такой консультации."
    },
    {
      id: 8,
      question: "На каких операционных системах работает приложение?",
      answer: "На данный момент мы разрабатываем приложение для Windows и macOS."
    },
    {
      id: 9,
      question: "Какие программы для онлайн-звонков поддерживаются?",
      answer: "Приложение будет автоматически детектить и предлагать запись звонков в популярных сервисах, таких как Zoom, Google Meet, Microsoft Teams и Telegram (десктопная версия)."
    }
  ],
};


// ============================================================================
// --- UI COMPONENTS (Would be in `src/components/ui/`) ---
// ============================================================================

// --- Reusable, Accessible Accordion Component ---
interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  id: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer, isOpen, onClick, id }) => {
  const contentId = `content-${id}`;
  const buttonId = `button-${id}`;

  // Split answer into paragraphs only if newlines are present
  const answerParagraphs = answer.split(/\n\s*\n/);

  return (
    <div className="border border-slate-200 rounded-lg hover:border-slate-300 hover:shadow-sm transition-all duration-200 overflow-hidden">
      <button
        id={buttonId}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full flex justify-between items-center p-5 text-left font-semibold text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 hover:bg-slate-50 transition-colors duration-200"
      >
        <span>{question}</span>
        <ChevronUp
          className={`w-5 h-5 text-slate-500 transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-0' : 'rotate-180'}`}
          aria-hidden="true"
        />
      </button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-5 pt-0 text-slate-600 leading-relaxed">
          {answerParagraphs.map((paragraph, i) => (
            <p key={i} className={answerParagraphs.length > 1 ? 'mb-4 last:mb-0' : ''}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Reusable Image Modal Component ---
interface ImageModalProps {
  src: string | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[100] p-4 cursor-zoom-out"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <img
        src={src}
        alt="Expanded view"
        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-pointer"
        onClick={onClose}
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-5xl font-bold leading-none hover:text-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Close image view"
      >
        ×
      </button>
    </div>
  );
};


// ============================================================================
// --- CUSTOM HOOKS (Would be in `src/hooks/`) ---
// ============================================================================

type SubmissionStatus = 'idle' | 'awaiting_consent' | 'submitting' | 'success' | 'error';

const useEmailForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isConsentChecked, setConsentChecked] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (status === 'idle') {
      setMessage('');
      setError('');
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        setError('Пожалуйста, введите корректный email.');
        return;
      }
      setStatus('awaiting_consent');
      return;
    }

    if (status === 'awaiting_consent') {
      if (!isConsentChecked) return;

      setStatus('submitting');

      const scriptURL = 'https://script.google.com/macros/s/AKfycbzSAcZLgKNlM6KDPNmvbriztenTnujubbmR6j4ddDWaR4yZXCECQsPmDIue-KzH-aHd/exec';
      const formData = new FormData();
      formData.append('email', email);

      try {
        const response = await fetch(scriptURL, { method: 'POST', body: formData });
        if (response.ok) {
          setMessage('Ваш email сохранен');
          setEmail('');
          setStatus('success');
        } else {
          console.error('Error from Google Script:', await response.text());
          setMessage('Произошла ошибка. Попробуйте еще раз.');
          setStatus('error');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setMessage('Произошла ошибка. Попробуйте еще раз.');
        setStatus('error');
      }
    }
  };

  return {
    email,
    setEmail,
    status,
    setStatus,
    message,
    error,
    setError,
    handleEmailSubmit,
    isConsentChecked,
    setConsentChecked
  };
};


// ============================================================================
// --- PAGE SECTIONS (Would be in `src/components/sections/`) ---
// ============================================================================

const HeroSection = () => (
  <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-16 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
        Supervisor AI
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-8">
        Профессиональная супервизия после каждой сессии
      </h2>
      <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
        ИИ-супервизор записывает онлайн-сессию и выдает анализ клиента, саммари встречи и фидбек по навыкам — чтобы вы лучше понимали кейс и профессионально росли после каждой сессии
      </p>
    </div>
  </section>
);

const PainPointsSection = () => (
  <section className="py-16 px-4 bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
        Психологи часто сталкиваются с такими проблемами
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {content.painPoints.map((point) => (
          <div key={point.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 will-change-transform">
            <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
              {point.title}
            </h3>
            <p className="text-slate-600 leading-relaxed">{point.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BridgeSection = () => (
  <section className="py-16 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
        «Это я плохой терапевт или клиент сложный?»
      </h2>
      <p className="text-lg text-slate-600 mb-6 italic">
        «После сложной сессии сижу и думаю: это я что-то не так делаю или так и должно быть?»
      </p>
      <p className="text-lg text-slate-600 mb-8">
        Без понимания своих навыков растёт тревога, которая толкает записаться на очередную дорогую учебу и мешает уверенно поднимать цену за сессию.
      </p>
      <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-600">
        <p className="text-lg text-slate-700 leading-relaxed">
          Живая супервизия остается незаменимой, но теперь между встречами с супервизором вы можете получать объективную поддержку после каждой сессии — мгновенно, конфиденциально и на основе реальной записи.
        </p>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="py-16 px-4 bg-slate-50">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
        Supervisor AI – Автоматический анализ всех ваших сессий
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {content.features.map((feature) => (
          <div key={feature.id} className="flex items-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 will-change-transform">
            <CheckCircle className="w-6 h-6 text-teal-600 mr-4 flex-shrink-0" />
            <span className="text-lg text-slate-700">{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorksSection = () => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
            Как это работает
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12 text-center">
            AI Supervisor — это десктопное приложение для macOS и Windows, которое работает с вашими онлайн-сессиями прямо на компьютере, не передавая данные в облако.
          </p>

          {content.howItWorks.map((item, index) => (
            <div key={item.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 mb-16 last:mb-0`}>
              <div className="lg:w-1/2 flex justify-center order-2 lg:order-none">
                <button
                  onClick={() => setExpandedImage(item.image)}
                  className="focus:outline-none group transition-transform duration-300 hover:scale-105 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4"
                >
                  <img src={item.image} alt={item.title} className="rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.1)] group-hover:opacity-90 transition-opacity" />
                </button>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-none">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">{item.text}</p>
                {item.details && (
                  <ul className="space-y-3 my-4">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">•</span>
                        <span className="text-slate-600 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.conclusion && (
                  <p className="mt-4 pt-4 border-t border-slate-200 text-slate-600 font-medium">{item.conclusion}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <ImageModal src={expandedImage} onClose={() => setExpandedImage(null)} />
    </>
  );
};

const AdditionalToolsSection = () => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <>
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 will-change-transform">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-900">
                  Умная папка под каждого клиента
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                У каждого клиента — свой «профиль»: сессии, концептуализация, план терапии и заметки. Отдельная вкладка хранит цели и стратегию терапии — с возможностью отмечать прогресс. Есть и «карточка клиента» — место для важной информации, которую вы хотите держать под рукой. Всё в одном месте — не нужно листать тетради и искать прошлые заметки.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 will-change-transform">
              <div className="flex items-center mb-6">
                <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-900">
                  Дашборд ваших навыков
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Отдельный раздел, где собирается аналитика по вашей работе. Здесь видны ваши сильные стороны и зоны роста по ключевым навыкам. Можно отслеживать прогресс: как меняется уровень навыков со временем. Это помогает осознанно развиваться и видеть, где вы реально растёте.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setExpandedImage(therapistDashboardImg)}
              className="focus:outline-none group transition-transform duration-300 hover:scale-105 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4"
            >
              <img src={therapistDashboardImg} alt="Дашборд с аналитикой по навыкам терапевта" className="rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.1)] group-hover:opacity-90 transition-opacity" />
            </button>
          </div>
        </div>
      </section>
      <ImageModal src={expandedImage} onClose={() => setExpandedImage(null)} />
    </>
  );
};

const ConfidentialitySection = () => (
  <section className="py-16 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <div className="flex justify-center mb-6">
        <Shield className="w-12 h-12 text-teal-600" />
      </div>
      <h2 className="text-3xl font-bold text-slate-900 mb-8">
        Конфиденциальность
      </h2>
      <p className="text-lg text-slate-600 leading-relaxed">
        Мы не храним ваши звонки на своих серверах. Все аудиозаписи, транскрипты и данные клиентов хранятся на вашем компьютере. Для анализа сессий используются защищенные API Yandex Cloud, которые не используют ваши данные для обучения моделей.
      </p>
    </div>
  </section>
);

const AudienceSection = () => (
  <section className="py-16 px-4 bg-slate-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-8">
        Для кого наш продукт
      </h2>
      <p className="text-xl text-slate-600 text-center mb-12">
        Supervisor AI — для начинающих и опытных практикующих психологов, которые хотят работать качественнее и увереннее.
      </p>
      <div className="grid lg:grid-cols-2 gap-8">
        {content.personas.map((persona) => (
          <div key={persona.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 will-change-transform">
            <h3 className="text-xl font-bold text-slate-900 mb-6 leading-tight">
              {persona.title}
            </h3>
            <ul className="space-y-3">
              {persona.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FaqSection = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaqId(prevId => (prevId === id ? null : id));
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
          FAQ (Часто задаваемые вопросы)
        </h2>
        <div className="space-y-4">
          {content.faqData.map((faq) => (
            <Accordion
              key={faq.id}
              id={faq.id.toString()}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaqId === faq.id}
              onClick={() => toggleFaq(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const PageFooter = () => (
  <footer className="py-8 px-4 bg-slate-100 border-t border-slate-200">
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-4">
        <Link to="/privacy-policy" className="text-slate-600 hover:text-slate-900 transition-colors">
          Политика конфиденциальности
        </Link>
      </div>
      <p className="text-slate-500">
        © Supervisor AI, 2025
      </p>
    </div>
  </footer>
);

const StickyCtaBar = () => {
  const { email, setEmail, status, setStatus, message, error, setError, handleEmailSubmit, isConsentChecked, setConsentChecked } = useEmailForm();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center min-h-[6rem]">
        {status === 'success' ? (
          <div className="w-full text-center bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-center mb-3">
              <CheckCircle className="w-8 h-8 text-teal-600" />
            </div>
            <p className="text-xl text-teal-700 font-semibold">{message}</p>
          </div>
        ) : status === 'error' ? (
            <div className="w-full bg-white rounded-xl p-6 shadow-sm border border-red-200">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 text-xl">⚠</span>
                  </div>
                  <p className="text-red-700 font-medium">{message}</p>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5"
                >
                  Попробовать снова
                </button>
              </div>
            </div>
          ) : status === 'awaiting_consent' || (status === 'submitting' && isConsentChecked) ? (
            <div className="w-full bg-white rounded-xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Закрытое тестирование</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Мы уже проводим закрытое тестирование и пока не готовы принять больше новых пользователей. Можем сохранить ваш email и написать, как только снова откроем доступ.
                  </p>
                </div>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={isConsentChecked}
                      onChange={e => setConsentChecked(e.target.checked)}
                      className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2"
                    />
                    <label htmlFor="consent" className="text-slate-700 leading-relaxed cursor-pointer">
                      Я согласен на{' '}
                      <a
                        href="/privacy-policy"
                        className="text-blue-600 underline hover:text-blue-800 transition-colors font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        обработку персональных данных
                      </a>
                    </label>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="relative group">
                    <button
                      type="submit"
                      disabled={!isConsentChecked || status === 'submitting'}
                      className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-300 disabled:to-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none disabled:shadow-md min-w-[200px]"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Отправка...
                        </>
                      ) : (
                        <>
                          <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          Да, напишите мне
                        </>
                      )}
                    </button>
                    {!isConsentChecked && status !== 'submitting' && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                        Необходимо согласие на обработку данных
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                      </div>
                    )}
                  </div>
                </div>
              </form>
          </div>
        ) : (
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 w-full items-start">
            <div className="flex-grow relative w-full">
              <label htmlFor="cta-email" className="sr-only">Email</label>
              {error && <p className="text-red-600 text-sm absolute -top-6 left-0">{error}</p>}
              <input
                id="cta-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Введите ваш email"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent ${error ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'}`}
                required
                disabled={status === 'submitting'}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap w-full sm:w-auto"
            >
              <Mail className="w-5 h-5" />
              {status === 'submitting' ? 'Отправка...' : 'получить супервизию'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};


// ============================================================================
// --- MAIN APP COMPONENT ---
// ============================================================================

// Move the main landing page content to a separate component
const LandingPage = () => {
  return (
    // Add padding to the bottom to prevent content from being hidden by the sticky CTA bar
    <div className="min-h-screen bg-white pb-32">
      <HeroSection />
      <PainPointsSection />
      <BridgeSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AdditionalToolsSection />
      <ConfidentialitySection />
      <AudienceSection />
      <FaqSection />
      <PageFooter />
      <StickyCtaBar />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
