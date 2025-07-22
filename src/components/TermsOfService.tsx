import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Вернуться на главную
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">
            Пользовательское соглашение
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-slate max-w-none">

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Общие положения</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между Шейко Николаем Евгеньевичем (далее — Администрация сайта) и пользователем сайта https://supervisor-ai.ru.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Сайт https://supervisor-ai.ru является собственностью Администрации сайта.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Пользователем сайта является лицо, зашедшее на сайт https://supervisor-ai.ru.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Используя сайт, Пользователь соглашается с условиями настоящего Соглашения.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Если Пользователь не согласен с условиями данного Соглашения, он должен покинуть сайт.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Администрация сайта оставляет за собой право изменять данное Соглашение без предварительного уведомления Пользователя.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Права и обязанности Пользователя</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">2.1. Пользователь имеет право:</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>получать информацию, размещенную на сайте;</li>
                <li>требовать от Администрации сайта отключения обработки персональных данных;</li>
                <li>отозвать согласие на обработку персональных данных путем направления соответствующего уведомления Администрации сайта.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">2.2. Пользователь обязуется:</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>предоставлять достоверную информацию о себе;</li>
                <li>не нарушать работоспособность сайта;</li>
                <li>не совершать действий, противоречащих законодательству Российской Федерации.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Права и обязанности Администрации сайта</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">3.1. Администрация сайта имеет право:</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>изменять информацию на сайте;</li>
                <li>изменять дизайн сайта;</li>
                <li>удалять информацию, размещенную Пользователем, если она противоречит законодательству Российской Федерации;</li>
                <li>закрыть доступ Пользователю к сайту в случае нарушения условий настоящего Соглашения.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">3.2. Администрация сайта обязуется:</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>обеспечивать работоспособность сайта;</li>
                <li>не разглашать информацию, полученную от Пользователя, за исключением случаев, предусмотренных законодательством Российской Федерации;</li>
                <li>принимать меры по защите персональных данных Пользователя.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Ответственность</h2>
            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                <strong>4.1.</strong> Пользователь несет ответственность за достоверность предоставленной информации.
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong>4.2.</strong> Администрация сайта не несет ответственности за содержание информации, размещенной Пользователем.
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong>4.3.</strong> В случае возникновения форс-мажорных ситуаций Администрация сайта не несет ответственности за сохранность информации, размещенной Пользователем.
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong>4.4.</strong> Администрация сайта не несет ответственности за временные сбои и перерывы в работе сайта и вызванные ими потерю информации.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Условия действия Соглашения</h2>
            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                <strong>5.1.</strong> Данное Соглашение вступает в силу при посещении Пользователем сайта.
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong>5.2.</strong> Соглашение перестает действовать при появлении его новой версии.
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong>5.3.</strong> Администрация сайта оставляет за собой право в одностороннем порядке изменять данное соглашение по своему усмотрению.
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong>5.4.</strong> При изменении соглашения в новой редакции указывается дата последнего обновления.
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong>5.5.</strong> Новая редакция соглашения вступает в силу с момента ее размещения, если иное не предусмотрено новой редакцией соглашения.
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong>5.6.</strong> Действующая редакция соглашения находится на странице по адресу https://supervisor-ai.ru/terms-of-service.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Заключительные положения</h2>
            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                <strong>6.1.</strong> Все спорные вопросы, возникающие между Пользователем и Администрацией сайта, решаются путем переговоров.
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong>6.2.</strong> В случае невозможности разрешения спорных вопросов путем переговоров, они подлежат рассмотрению в судебном порядке в соответствии с законодательством Российской Федерации.
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong>6.3.</strong> К настоящему соглашению и отношениям между пользователем и Администрацией сайта применяется действующее законодательство Российской Федерации.
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong>6.4.</strong> Если по тем или иным причинам одно или несколько положений настоящего Соглашения будут признаны недействительными или не имеющими юридической силы, это не оказывает влияния на действительность или применимость остальных положений Соглашения.
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong>6.5.</strong> По всем вопросам, касающимся настоящего Соглашения, Пользователь может обращаться к Администрации сайта по адресу электронной почты: nickolay.sheyko@gmail.com.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
