import { BarChart3, Brain, CheckCircle, ChevronUp, FileText, Mail, Shield, Users } from 'lucide-react';
import React, { useState } from 'react';
import analysisImg from './assets/analysis.png';
import conceptualizationImg from './assets/conceptualization.png';
import transcriptImg from './assets/transcript.png';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);

      setSubmitMessage('Спасибо! Мы свяжемся с вами в ближайшее время.');
      setEmail('');
    } catch (error) {
      setSubmitMessage('Произошла ошибка. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const painPoints = [
    {
      title: "«Хороший супервизор — это дорого»",
      text: "Вопросы и сомнения по клиентам накапливаются каждый день, но на качественную супервизию нет возможности ходить чаще 1-2 раза в месяц. Часто супервизия стоит больше, чем твоя сессия"
    },
    {
      title: "«Подготовка к супервизии забирает много сил»",
      text: "Чтобы хорошо подготовиться к супервизии, на концептуализацию кейса уходит несколько часов. Если прийти без подготовки — половина супервизии тратится на пересказ кейса вместо его разбора."
    },
    {
      title: "«Страшно разбирать свои ошибки»",
      text: "Получать обратную связь от авторитетного супервизора иногда тревожно. \"Вдруг супервизор подумает, что я плохой терапевт?\""
    },
    {
      title: "\"Супервизор не видит сессию своими глазами\"",
      text: "Супервизор работает с тем, что ему рассказали — а не с самой сессией. В пересказе легко упустить важные детали: интонации, паузы, формулировки клиента, эмоциональные нюансы. Консультация строится на памяти и интерпретациях, а значит — не даёт полной картины и может быть поверхностной."
    }
  ];

  const features = [
    "Автоматическая запись и расшифровка",
    "Выводы по сессии и обратная связь",
    "Анализ динамики по нескольким сессиям",
    "Концептуализация клиента"
  ];

  const howItWorks = [
    {
      title: "Автоматическая запись и расшифровка",
      text: "Приложение само обнаруживает звонок в Zoom/Meet/Teams/Telegram и предлагает его записать. Запись идет на вашем компьютере, никакие данные не покидают его. После сессии приложение автоматически расшифровывает запись и предлагает вам структурированный отчет.",
      icon: <FileText className="w-16 h-16 text-blue-600" />,
      image: transcriptImg
    },
    {
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
      title: "Динамика по нескольким сессиям",
      text: "AI Supervisor отслеживает, как меняется состояние клиента от встречи к встрече. Выявляет паттерны: что повторяется, где происходят сдвиги, а где застой. Концептуализация клиента обновляется автоматически: глубинные убеждения, промежуточные, копинг-стратегии, поддерживающие циклы — всё складывается в единую картину сессия за сессией. Это помогает видеть не только момент, но и процесс — и принимать терапевтические решения на основе всей динамики, а не фрагмента.",
      icon: <Brain className="w-16 h-16 text-blue-600" />,
      image: conceptualizationImg
    }
  ];

  const personas = [
    {
      title: "Мы создавали его для тех, кто ведёт много клиентов и хочет не терять фокус",
      items: [
        "Легче отслеживать динамику клиентов",
        "Держать в голове цели, план терапии и последние сессии каждого клиента",
        "Помнить важные детали о клиентах",
        "Экономить часы на сбор информации к супервизиям или сертификации"
      ]
    },
    {
      title: "Хочет понимать, как работает сам",
      items: [
        "Получать структурную обратную связь по техникам и взаимодействию с клиентами",
        "Отслеживать свои навыки и точки роста",
        "Развиваться без самокритики и тревоги"
      ]
    },
    {
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
      title: "Иногда чувствует: «Я один»",
      items: [
        "Когда нет регулярной супервизии либо ее не достаточно для разбора всех кейсов",
        "Когда сложно понять, это я что-то не так делаю или случай сложный",
        "Когда нужна поддержка между сессиями, а спросить не у кого"
      ]
    }
  ];

  const faqData = [
    {
      question: "Насколько это безопасно? Где хранятся мои данные и записи сессий?",
      answer: "Мы понимаем, насколько важна конфиденциальность в вашей работе. Поэтому все аудиозаписи сессий, их транскрипты и любые данные о ваших клиентах хранятся исключительно на вашем компьютере. На наши серверы ничего из этого не передается и не сохраняется. Для анализа сессий мы используем защищенные API Yandex Cloud, при этом данные передаются для обработки в обезличенном виде (только текст транскрипта без идентификаторов клиента или терапевта) и не используются для обучения моделей Яндекса. Ваша практика остается вашей."
    },
    {
      question: "Заменит ли ваш сервис 'живого' супервизора?",
      answer: "Нет. Наш продукт — это дополнение к классической супервизии, которое работает между встречами с вашим супервизором. Живая супервизия остается незаменимой для сложных этических дилемм, личных реакций и глубокого разбора случаев. Supervisor AI — это инструмент между сессиями: он помогает быстро увидеть слабые и сильные стороны, собрать данные, отследить динамику и прийти к «живому» супервизору уже с готовой картиной. Он не заменяет человеческое участие, но снимает часть рутинной нагрузки и помогает держать фокус."
    },
    {
      question: "С какими терапевтическими модальностями работает система?",
      answer: "На данный момент Supervisor AI оптимизирован для анализа сессий в рамках Когнитивно-Поведенческой Терапии (КПТ) и схема-терапии. Мы выбрали эти модальности, так как они имеют достаточно четко определенные структуры и техники, что позволяет AI проводить более точный анализ. В будущем мы планируем расширять список поддерживаемых модальностей."
    },
    {
      question: "Требуется ли согласие клиента на запись сессий?",
      answer: "Да, безусловно. Получение информированного согласия клиента на аудио- или видеозапись сессии является обязательным этическим требованием для любого психолога. Перед использованием Supervisor AI вы должны обсудить это с клиентом и получить его явное согласие. Мы рекомендуем объяснить клиенту, что запись используется исключительно для улучшения качества терапии и вашего профессионального развития, и что данные остаются конфиденциальными."
    },
    {
      question: "Насколько точен AI-анализ?",
      answer: "Наш AI основан на современных методах обработки естественного языка и анализе паттернов коммуникации в психотерапии. Система обучена распознавать терапевтические техники, эмоциональную динамику и структурные элементы сессий на основе признанных профессиональных стандартов и методических материалов. Однако важно помнить, что это инструмент поддержки, а не истина в последней инстанции. Мы рекомендуем использовать его анализ как основу для вашей собственной профессиональной рефлексии, обсуждения с коллегами или вашим \"живым\" супервизором. Финальное решение и интерпретация всегда остаются за вами."
    },
    {
      question: "Какие методические материалы вы используете",
      answer: `Обратная связь, которую вы получаете от системы, формируется на основе валидированных шкал супервизии — CTSR (Cognitive Therapy Scale–Revised) и Schema Therapist Competency Rating Scale (STCS).

В основе алгоритмов — не «обобщённый ИИ», а тщательно отобранные материалы из современной профессиональной литературы. Мы использовали руководство по схема-терапии Джеффри Янга и труды ведущих практиков: Eckhard Roediger, Joan Farrell, Gitta Jacob, Hannie van Genderen, Christopher Hayes, Robert Brockman, а также публикации и обучающие материалы ISST.

КПТ-блок разработан на основе работ Judith Beck, Christine Padesky, Keith Dobson, Willem Kuyken, David Clark, Adrian Wells, Edna Foa, Robert Leahy и других авторов, чьи модели лежат в основе большинства программ сертификации.

Также мы опирались на специализированные источники по обучению и супервизии: Handbook of Training and Supervision in CBT, A Manual for Evidence-Based CBT Supervision и др.`
    },
    {
      question: "Что делать, если у меня очень специфический или сложный случай?",
      answer: "Supervisor AI может быть полезен и в таких ситуациях, помогая структурировать имеющуюся информацию, отследить динамику и, возможно, подсветить какие-то неочевидные моменты. Однако, для работы с особо сложными, нестандартными или кризисными случаями, требующими глубокого человеческого опыта и интуиции, консультация с опытным \"живым\" супервизором остается необходимой. Наш сервис может помочь вам лучше подготовиться к такой консультации."
    },
    {
      question: "На каких операционных системах работает приложение?",
      answer: "На данный момент мы разрабатываем приложение для Windows и macOS."
    },
    {
      question: "Какие программы для онлайн-звонков поддерживаются?",
      answer: "Приложение будет автоматически детектить и предлагать запись звонков в популярных сервисах, таких как Zoom, Google Meet, Microsoft Teams и Telegram (десктопная версия)."
    }
  ];

  const Accordion = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
      <div className="border border-slate-200 rounded-lg">
        <button onClick={onClick} className="w-full flex justify-between items-center p-5 text-left font-semibold text-slate-800 focus:outline-none">
          <span>{question}</span>
          <ChevronUp className={`w-5 h-5 text-slate-500 transform transition-transform ${isOpen ? '' : 'rotate-180'}`} />
        </button>
        {isOpen && (
          <div className="p-5 pt-0">
            <div className="text-slate-600 leading-relaxed">
              {answer.includes('\n')
                ? answer.split(/\n+/).map((paragraph, i) => (
                  <p key={i} className="mb-4 last:mb-0">{paragraph}</p>
                ))
                : answer.split(/(?<=[.?!])\s+/g).map((sentence, i) => (
                  <p key={i} className="mb-2 last:mb-0">{sentence}</p>
                ))
              }
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Section */}
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

      {/* Pain Points Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            Психологи часто сталкиваются с такими проблемами
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                  {point.title}
                </h3>
                <div className="text-slate-600 leading-relaxed">
                  {point.text.split(/(?<=[.?!])\s+/g).map((sentence, i) => (
                    <p key={i} className="mb-2 last:mb-0">{sentence}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridge Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            «Это я плохой терапевт или клиент сложный?»
          </h2>
          <div className="text-lg text-slate-600 mb-6 italic">
            {"«После сложной сессии сижу и думаю: это я что-то не так делаю или так и должно быть?»".split(/(?<=[.?!])\s+/g).map((sentence, i) => (
              <p key={i} className="mb-2 last:mb-0">{sentence}</p>
            ))}
          </div>
          <div className="text-lg text-slate-600 mb-8">
            {"Без понимания своих навыков растёт тревога, которая толкает записаться на очередную дорогую учебу и мешает уверенно поднимать цену за сессию.".split(/(?<=[.?!])\s+/g).map((sentence, i) => (
              <p key={i} className="mb-2 last:mb-0">{sentence}</p>
            ))}
          </div>
          <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-600">
            <div className="text-lg text-slate-700 leading-relaxed">
              {"Живая супервизия остается незаменимой, но теперь между встречами с супервизором вы можете получать объективную поддержку после каждой сессии — мгновенно, конфиденциально и на основе реальной записи.".split(/(?<=[.?!])\s+/g).map((sentence, i) => (
                <p key={i} className="mb-2 last:mb-0">{sentence}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            Supervisor AI – Автоматический анализ всех ваших сессий
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-4 flex-shrink-0" />
                <span className="text-lg text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
            Как это работает
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12">
            AI Supervisor — это десктопное приложение для macOS и Windows, которое работает с вашими онлайн-сессиями прямо на компьютере, не передавая данные в облако.
          </p>

          {howItWorks.map((item, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 mb-16 last:mb-0`}>
              <div className="lg:w-1/2">
                <div className="bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                  <img src={item.image} alt={item.title} className="rounded-lg shadow-md" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                  {item.title}
                </h3>
                {item.details ? (
                  <div className="space-y-4">
                    <div className="text-slate-600 leading-relaxed space-y-4">
                      {item.text.split(/(?<=[.?!])\s+/g).map((sentence, i) => (
                        <p key={i}>{sentence}</p>
                      ))}
                    </div>
                    <ul className="space-y-3">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="text-blue-600 mr-3 mt-1">•</span>
                          <span className="text-slate-600 leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-slate-200 text-slate-600 font-medium">
                      {item.conclusion.split(/(?<=[.?!])\s+/g).map((sentence, i) => (
                        <p key={i}>{sentence}</p>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    {item.text.split(/(?<=[.?!])\s+/g).map((sentence, i) => (
                      <p key={i}>{sentence}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Tools */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-900">
                  Умная папка под каждого клиента
                </h3>
              </div>
              <div className="text-slate-600 leading-relaxed">
                {"У каждого клиента — свой «профиль»: сессии, концептуализация, план терапии и заметки. Отдельная вкладка хранит цели и стратегию терапии — с возможностью отмечать прогресс. Есть и «карточка клиента» — место для важной информации, которую вы хотите держать под рукой. Всё в одном месте — не нужно листать тетради и искать прошлые заметки.".split(/(?<=[.?!])\s+/g).map((sentence, i) => (
                  <p key={i} className="mb-2 last:mb-0">{sentence}</p>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-900">
                  Дашборд ваших навыков
                </h3>
              </div>
              <div className="text-slate-600 leading-relaxed">
                {"Отдельный раздел, где собирается аналитика по вашей работе. Здесь видны ваши сильные стороны и зоны роста по ключевым навыкам. Можно отслеживать прогресс: как меняется уровень навыков со временем. Это помогает осознанно развиваться и видеть, где вы реально растёте.".split(/(?<=[.?!])\s+/g).map((sentence, i) => (
                  <p key={i} className="mb-2 last:mb-0">{sentence}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Shield className="w-12 h-12 text-teal-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Конфиденциальность
          </h2>
          <div className="space-y-4 text-lg text-slate-600">
            {"Мы не храним ваши звонки на своих серверах. Все аудиозаписи, транскрипты и данные клиентов хранятся на вашем компьютере. Для анализа сессий используются защищенные API Yandex Cloud, которые не используют ваши данные для обучения моделей.".split(/(?<=[.?!])\s+/g).map((sentence, i) => (
              <p key={i}>{sentence}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-8">
            Для кого наш продукт
          </h2>
          <p className="text-xl text-slate-600 text-center mb-12">
            Supervisor AI — для начинающих и опытных практикующих психологов, которые хотят работать качественнее и увереннее.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {personas.map((persona, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
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

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            FAQ (Часто задаваемые вопросы)
          </h2>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Accordion key={index} question={faq.question} answer={faq.answer} isOpen={openFaq === index} onClick={() => toggleFaq(index)} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-x-6 mb-4">
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
              Пользовательское соглашение
            </a>
          </div>
          <p className="text-slate-500">
            © Supervisor AI, 2025
          </p>
        </div>
      </footer>

      {/* Sticky Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <form onSubmit={handleEmailSubmit} className="flex gap-4">
            <div className="flex-grow">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите ваш email"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
            >
              <Mail className="w-5 h-5" />
              {isSubmitting ? 'Отправка...' : 'получить супервизию'}
            </button>
          </form>
          {submitMessage && (
            <div className={`mt-2 text-sm ${submitMessage.includes('Спасибо') ? 'text-green-600' : 'text-red-600'}`}>
              {submitMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
