import { BarChart3, BrainCircuit, CheckCircle, ChevronUp, ClipboardList, Mail, Play, Shield, Star, TrendingUp, User, Zap } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// --- ASSET IMPORTS ---
import analysisImg from './assets/analysis.png';
import callRecordPromptPanel from './assets/call_record_prompt_panel.svg';
import recordingVideo from './assets/compressed_recording.mp4';
import conceptualizationImg from './assets/conceptualization.png';
import { default as marinaAvatar, default as olgaAvatar } from './assets/nicole_avatar.png';
import { default as nicoleAvatar, default as polinaAvatar } from './assets/nicole_avatar_small.png';
import { default as alexeyAvatar, default as nikolayAvatar } from './assets/nikolay_avatar.png';
import privacyExplanationImg from './assets/privacy_explanation.png';
import therapistDashboardImg from './assets/therapist_dashboard.png';
import transcriptImg from './assets/transcript.png';

// --- COMPONENT IMPORTS ---
import PrivacyPolicy from './components/PrivacyPolicy';

// ============================================================================
// --- TYPES (Would be in `src/types.ts`) ---
// ============================================================================

interface PainPoint {
  id: number;
  title: string;
  text: string;
}

interface HowItWorksItem {
  id: number;
  title: string;
  text: string;
  image: string;
  details?: string[];
  conclusion?: string;
  features?: { text: string; icon: string }[];
}

interface Persona {
  id: number;
  title: string;
  items: string[];
}

interface Faq {
  id: number;
  question: string;
  answer: string;
}

interface Creator {
  name: string;
  description: string;
  avatar: string;
}

interface ResearchMember {
  name: string;
  description: string;
  avatar: string;
}

interface AdditionalTools {
  analytics: {
    title: string;
    description: string;
  };
}


interface Content {
  painPoints: PainPoint[];
  howItWorks: HowItWorksItem[];
  personas: Persona[];
  additionalTools: AdditionalTools;
  faqData: Faq[];
  creators: Creator[];
  researchGroup: ResearchMember[];
}

// ============================================================================
// --- DATA: Separated Content (Would be in a file like `src/data/content.ts`) ---
// ============================================================================

const content: Content = {
  painPoints: [
    {
      id: 1,
      title: "Застревание в тупике",
      text: "Иногда после сессии сложно понять, куда двигаться дальше: что с клиентом происходит, как строить стратегию, за что хвататься."
    },
    {
      id: 2,
      title: "Сложно собрать картину",
      text: "Когда много клиентов, детали теряются. Трудно заметить паттерны, понять динамику и связать отдельные сессии в единую историю."
    },
    {
      id: 3,
      title: "Сомнения в своих реакциях",
      text: "Не всегда понятно, почему клиент вызывает определенные чувства, как это влияет на терапию и что делать с этими чувствами."
    },
    {
      id: 4,
      title: "Супервизия — раз в месяц, а вопросов больше",
      text: "Многое не попадает на разбор. Нужен инструмент, который помогает разбирать случаи между встречами."
    }
  ],
  howItWorks: [
    {
      id: 1,
      title: "Автоматическая запись и расшифровка",
      text: "Приложение само обнаруживает звонок в Zoom/Meet/Teams/Telegram, автоматически записывает и расшифровывает сессию",
      image: transcriptImg
    },
    {
      id: 2,
      title: "Структурированный отчёт",
      text: "Через несколько минут вы получаете структурированный отчёт, в котором 3 блока:",
      details: [
        "О клиенте: Ключевые темы и эмоции клиента, динамика состояний, активные схемы и режимы — чтобы лучше понять, что с ним происходит и что важно для следующей сессии.",
        "О сессии: Основные техники, баланс участия, динамика альянса, важные поворотные моменты и рекомендации по следующему шагу в терапии.",
        "О терапевте: Анализ сильных сторон, зон роста и того, как ваши собственные схемы и режимы могут влиять на работу с клиентом."
      ],
      image: analysisImg
    },
    {
      id: 3,
      title: "Динамика по нескольким сессиям",
      text: "AI Supervisor помогает видеть не только момент, но и процесс — и принимать терапевтические решения на основе всей динамики, а не фрагмента.",
      features: [
        { text: "Отслеживает, как меняется состояние клиента от встречи к встрече", icon: "TrendingUp" },
        { text: "Выявляет паттерны: что повторяется, где происходят сдвиги, а где застой", icon: "Zap" },
        { text: "Автоматически обновляет концептуализацию, формируя единую картину", icon: "BrainCircuit" }
      ],
      image: conceptualizationImg
    }
  ],
  personas: [
    {
      id: 1,
      title: "Тех, кто хочет видеть всю картину терапии",
      items: [
        "Вся динамика клиента в одном месте — ключевые темы, изменения и паттерны",
        "Легко отслеживать процесс, даже если работа длится годами",
        "Помогает заметить то, что обычно теряется в потоке сессий"
      ]
    },
    {
      id: 2,
      title: "Тех, кто работает с высокой нагрузкой",
      items: [
        "Сохраняет детали каждой сессии, чтобы не держать всё в голове",
        "Можно быстро вернуться к нужному моменту и восстановить контекст",
        "Экономит часы на подготовке к супервизиям и работе с кейсами"
      ]
    },
    {
      id: 3,
      title: "Тех, кто хочет глубже разбирать сложные случаи",
      items: [
        "Помогает выйти из терапевтических тупиков",
        "Даёт глубокий анализ сессии, который можно принести на супервизию",
        "Поддерживает между супервизиями — помогает заметить то, что сложно увидеть в моменте и сформулировать новые гипотезы"
      ]
    },
    {
      id: 4,
      title: "Тех, кто хочет расти как терапевт",
      items: [
        "Получать честный и структурированный фидбек",
        "Видеть свои сильные стороны и зоны роста",
        "Повышать эффективность своей работы"
      ]
    }
  ],
  additionalTools: {
    analytics: {
      title: "Аналитика ваших навыков",
      description: "Отдельный раздел, где собирается аналитика по вашей работе. Здесь видны ваши сильные стороны и зоны роста по ключевым навыкам. Можно отслеживать прогресс и видеть, где вы реально растёте."
    }
  },
  faqData: [
    {
      id: 1,
      question: "Насколько это безопасно? Где хранятся мои данные и записи сессий?",
      answer: "Безопасность данных — наш главный приоритет. Аудиозаписи сессий никогда не покидают ваш компьютер. Приложение обрабатывает их локально: делает транскрибацию, а затем анонимизирует текст, удаляя все личные данные. Только после этого полностью обезличенный и зашифрованный текст отправляется на наши серверы для анализа. Подробную схему обработки данных вы можете найти выше, в разделе «Конфиденциальность»."
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
      answer: "Приложение будет автоматически обнаруживать и предлагать запись звонков в популярных сервисах, таких как Zoom, Google Meet, Microsoft Teams и Telegram (десктопная версия)."
    }
  ],
  creators: [
    {
      name: 'Николь Шахбазян',
      description: `Психолог, опыт работы 6-лет (КПТ, схема-терапия), молекулярный биолог, автор телеграм-канала <a href="https://t.me/tibiolog" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">“Ты ж биолог”</a>`,
      avatar: nicoleAvatar,
    },
    {
      name: 'Николай Шейко',
      description: `ИИ-разработчик c 6 годами опыта в компаниях РФ и США. Внедряет ИИ в бизнесы в РФ, Европе и Сингапуре. Автор канала <a href="https://t.me/oestick" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">"AI и грабли"</a>`,
      avatar: nikolayAvatar,
    },
  ],
  researchGroup: [
    {
      name: 'Николаева Марина',
      description: 'Психолог, Супервизор. Опыт работы 19 лет',
      avatar: marinaAvatar,
    },
    {
      name: 'Полина Семенова',
      description: 'Детский психолог, педагог-психолог высшей категории. Опыт работы 12 лет',
      avatar: polinaAvatar,
    },
    {
      name: 'Алексей Волков',
      description: 'Клинический, семейный психолог, сексолог. Опыт работы более 20 лет',
      avatar: alexeyAvatar,
    },
    {
      name: 'Матвеева Ольга',
      description: 'Психолог, обучающий личный терапевт. Опыт работы 5 лет',
      avatar: olgaAvatar,
    },
  ],
};


// ============================================================================
// --- UI COMPONENTS (Would be in `src/components/ui/`) ---
// ============================================================================

const detailIcons: { [key: string]: React.ReactElement } = {
  User: <User className="w-6 h-6 text-blue-700" />,
  ClipboardList: <ClipboardList className="w-6 h-6 text-teal-700" />,
  Star: <Star className="w-6 h-6 text-amber-600" />,
  TrendingUp: <TrendingUp className="w-7 h-7 text-blue-600" />,
  Zap: <Zap className="w-7 h-7 text-blue-600" />,
  BrainCircuit: <BrainCircuit className="w-7 h-7 text-blue-600" />,
};

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
        <div
          className="p-5 pt-0 text-slate-600 leading-relaxed cursor-pointer"
          onClick={onClick}
        >
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

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

const useEmailForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Пожалуйста, введите корректный email.');
      return;
    }

    setStatus('submitting');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzSAcZLgKNlM6KDPNmvbriztenTnujubbmR6j4ddDWaR4yZXCECQsPmDIue-KzH-aHd/exec';
    const formData = new FormData();
    formData.append('email', email);

    try {
      const response = await fetch(scriptURL, { method: 'POST', body: formData });
      if (response.ok) {
        setMessage('E-mail сохранен! Сейчас мы закрыли доступ, чтобы подготовиться к следующей волне тестирования. Мы вам напишем, как только снова его откроем.');
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
  };
};


// ============================================================================
// --- PAGE SECTIONS (Would be in `src/components/sections/`) ---
// ============================================================================

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Supervisor AI
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-8">
          ИИ-помощник для терапевтов между супервизиями
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
          Когда в работе с клиентом наступает тупик или хочется свежего взгляда, Supervisor AI помогает увидеть больше: анализирует сессию, подсвечивает важные паттерны, помогает структурировать кейс и находить новые идеи для движения вперёд.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg max-w-2xl mx-auto mb-12 flex items-center gap-3">
          <span className="text-2xl">💡</span>
          <p className="text-slate-700 text-sm italic">
            Supervisor AI не заменяет живую супервизию, а помогает между встречами.
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-5xl cursor-pointer" onClick={togglePlay}>
          <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-400 to-teal-400 opacity-25 blur-2xl"></div>
          <video
            ref={videoRef}
            src={recordingVideo}
            autoPlay
            loop
            muted
            playsInline
            className="relative rounded-lg shadow-2xl"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg pointer-events-none">
              <Play className="w-24 h-24 text-white fill-white drop-shadow-lg" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const PainPointsSection = () => (
  <section className="py-16 px-4 bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
        Когда сложно понять, что делать дальше
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



const HowItWorksSection = () => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
            Как работает Supervisor AI
          </h2>

          <div className="space-y-24">
            {content.howItWorks.map((item) => (
              <div key={item.id} className="text-center">

                {item.id === 1 && (
                  <img src={callRecordPromptPanel} alt="Call Record Prompt" className="max-w-xs mx-auto mb-8 -mt-8 [filter:drop-shadow(0_4px_8px_rgba(0,0,0,0.35))]" />
                )}

                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-12 max-w-3xl mx-auto">{item.text}</p>

                {item.details && (
                  <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {item.details.map((detail, detailIndex) => {
                      const [title, ...rest] = detail.split(':');
                      const description = rest.join(':').trim();
                      const iconKey = Object.keys(detailIcons)[detailIndex];
                      return (
                        <div key={detailIndex} className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-slate-200 shadow-sm h-full hover:shadow-md transition-shadow duration-300">
                          <div className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-opacity-10 ${detailIndex === 0 ? 'bg-blue-500' : detailIndex === 1 ? 'bg-teal-500' : 'bg-amber-500'
                            }`}>
                            {detailIcons[iconKey]}
                          </div>
                          <h4 className="font-bold text-slate-800 text-lg mb-2">{title}</h4>
                          <p className="text-slate-600 leading-relaxed text-sm flex-grow">{description}</p>
                        </div>
                      )
                    })}
                  </div>
                )}

                {item.features && (
                  <div className="grid md:grid-cols-3 gap-x-8 gap-y-6 max-w-5xl mx-auto">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-left gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          {detailIcons[feature.icon]}
                        </div>
                        <div>
                          <p className="text-slate-700 font-medium leading-relaxed text-lg">{feature.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-12">
                  <button
                    onClick={() => setExpandedImage(item.image)}
                    className="focus:outline-none group transition-transform duration-300 hover:scale-105 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 inline-block"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`
                        w-full rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.1)] group-hover:opacity-90 transition-all
                        mx-auto
                        ${item.id === 1 ? 'max-w-[29rem]' : item.id === 2 ? 'max-w-[50rem]' : 'max-w-4xl'}
                      `}
                    />
                  </button>
                </div>

                {item.conclusion && (
                  <div className="mt-12 inline-flex items-center gap-4 bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg max-w-2xl mx-auto text-left shadow-sm">
                    <Zap className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <p className="text-blue-800 font-semibold leading-relaxed text-lg">{item.conclusion}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
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
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-200">
            <div className="flex flex-col items-center mb-6">
              <BarChart3 className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="text-2xl font-bold text-slate-900">
                {content.additionalTools.analytics.title}
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              {content.additionalTools.analytics.description}
            </p>
            <button
              onClick={() => setExpandedImage(therapistDashboardImg)}
              className="focus:outline-none group transition-transform duration-300 hover:scale-105 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4"
            >
              <img src={therapistDashboardImg} alt="Панель с аналитикой по навыкам терапевта" className="w-full rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.1)] group-hover:opacity-90 transition-opacity" />
            </button>
          </div>
        </div>
      </section>
      <ImageModal src={expandedImage} onClose={() => setExpandedImage(null)} />
    </>
  );
};

const CreatorsSection = () => (
  <section className="py-16 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
        Создатели
      </h2>
      <p className="text-xl text-slate-600 text-center mb-12">
        За этим проектом стоят два человека
      </p>
      <div className="grid md:grid-cols-2 gap-10">
        {content.creators.map((creator, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={creator.avatar}
              alt={creator.name}
              className="w-32 h-32 rounded-full mb-6 object-cover shadow-lg"
            />
            <h3 className="text-xl font-bold text-slate-900 mb-2">{creator.name}</h3>
            <p
              className="text-slate-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: creator.description }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ConfidentialitySection = () => (
  <section className="py-20 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex justify-center items-center mb-6 bg-teal-100 p-3 rounded-full">
          <Shield className="w-10 h-10 text-teal-700" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Конфиденциальность
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Мы разработали Supervisor AI так, чтобы исходные данные <strong>никогда</strong> не покидали ваш компьютер. Транскрибация происходит на вашем устройстве, что позволяет не сохранять аудио (биометрические данные) и анонимизировать текст транскрипта <strong>до</strong> передачи на сервер.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mb-12 transition-transform duration-300 ease-in-out hover:scale-[1.02]">
        <img src={privacyExplanationImg} alt="Инфографика: схема обработки и защиты данных" className="w-full rounded-2xl shadow-md border border-slate-200" />
      </div>

      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-slate-600">
          Мы используем AES-256 — тот же стандарт шифрования, что применяют банки и медицинские учреждения. Все данные хранятся на территории РФ и обработка соответствует требованиям ФЗ-152.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Original Text */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 will-change-transform">
          <h3 className="text-lg font-bold text-slate-800 mb-4 text-center">Исходный текст</h3>
          <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">
            ...и получается, опять не сплю вторую ночь. Ну, завтра же дедлайн по проекту <span className="bg-slate-200 rounded px-1">Альтаир-Групп</span>. Ну а <span className="bg-slate-200 rounded px-1">Михаил Андреевич</span> вчера на совещании явно дал понять на ком ответственность. Напрягаюсь, что со мной будет так же самое, что со <span className="bg-slate-200 rounded px-1">Светой</span>, другим аналитиком. И в итоге вместо работы просто залипаю в ютуб чтобы отвлечься...
          </p>
        </div>

        {/* Anonymized Text */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 will-change-transform">
          <h3 className="text-lg font-bold text-slate-800 mb-4 text-center">Анонимизированный</h3>
          <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">
            ...и получается, опять не сплю вторую ночь. Ну, завтра же дедлайн по проекту <span className="bg-slate-200 rounded px-1">[НАЗВАНИЕ_КОМПАНИИ]</span>. Ну а <span className="bg-slate-200 rounded px-1">[ИМЯ_1]</span> вчера на совещании явно дал понять на ком ответственность. Напрягаюсь, что со мной будет так же самое, что со <span className="bg-slate-200 rounded px-1">[ИМЯ_2]</span>, другим аналитиком. И в итоге вместо работы просто залипаю в ютуб чтобы отвлечься...
          </p>
        </div>

        {/* Encrypted Text */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <h3 className="text-lg font-bold text-slate-800 mb-4 text-center">Зашифрованный</h3>
          <p className="text-sm text-slate-600 break-all leading-relaxed">
            X5z@2sF8gH1vN4bS9jK3lM6cR7wY0pDqE2fA9gV5hL1jB8kS3lO6mN4cR7xZ0pDqE2fA9gV5hL1jB8kS3lO6mN4cR7xZ0pDqE2fA9gV5hL1jB8kS3lO6mN4cR7xZ0pDqE2fA9gV5hL1jB8kS3lO6mN4cR7xZ0pDqE2fA9gV5hL1jB8kS3lO6mN4cR7xZ0pDqE2fA9gV5hL1jB8kS3lO6mN4cR7xZ0pDqE2fA9gV5hL1jB8kS3lO6mN4cR7xZ0pDqE2fA9gV5hL1jB8kS3lO6m
          </p>
        </div>
      </div>

      <div className="mt-12 max-w-3xl mx-auto text-center space-y-4">
        <p className="text-lg text-slate-700 font-medium">
          Таким образом, ни наша команда, ни искусственный интеллект, ни кто-либо еще не имеет доступа к исходной информации. Ваша работа и данные ваших клиентов находятся под защитой.
        </p>
      </div>
    </div>
  </section>
);

const AudienceSection = () => (
  <section className="py-16 px-4 bg-slate-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
        Supervisor AI — для практикующих психологов, которым важно расти
      </h2>
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
  const { email, setEmail, status, setStatus, message, error, setError, handleEmailSubmit } = useEmailForm();

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
        ) : (
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 w-full items-start">
            <div className="flex-grow w-full">
              <div className="relative">
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
              {email && (
                <p className="text-xs text-slate-500 italic mt-2">
                  Нажимая кнопку «Получить ранний доступ», я даю согласие на обработку персональных данных и подтверждаю свое ознакомление с <Link to="/privacy-policy" className="underline hover:text-slate-700">политикой конфиденциальности</Link>
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap w-full sm:w-auto"
            >
              <Mail className="w-5 h-5" />
              {status === 'submitting' ? 'Отправка...' : 'Получить ранний доступ'}
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
      <HowItWorksSection />
      <AdditionalToolsSection />
      <AudienceSection />
      <CreatorsSection />
      <ConfidentialitySection />
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
