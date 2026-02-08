import site from '../site.config.json';
import { HeroImage } from '../components/HeroImage';
import { UseCaseSlideshow } from '../components/UseCaseSlideshow';

const useCases = ['для рутины', 'для обучения', 'для поездки', 'для планирования', 'для дел'];

const plans = [
  {
    name: 'Starter',
    price: site.prices.starter,
    meta: `${site.messageLimits.starter} сообщений/мес · 1 ассистент`,
    items: ['Все каналы', 'База знаний', 'Базовая аналитика'],
    featured: false
  },
  {
    name: 'Pro',
    price: site.prices.pro,
    meta: `${site.messageLimits.pro} сообщений/мес · до 3 ассистентов`,
    items: ['Брендинг', 'Расширенная аналитика', 'Приоритетная поддержка'],
    featured: true
  },
  {
    name: 'Team',
    price: site.prices.enterprise,
    meta: `${site.messageLimits.enterprise} сообщений/мес · до 10 ассистентов`,
    items: ['SLA 99.9%', 'Интеграции', 'Выделенная поддержка'],
    featured: false
  }
];

const showFeaturesLink = site.ui?.showFeatures ?? false;
const showPricingLink = site.ui?.showPricing ?? false;
const showContactLink = site.ui?.showContactLinks ?? false;
const showHeroNav = showFeaturesLink || showPricingLink || showContactLink;

const reasons = [
  {
    title: 'Быстрый старт',
    text: 'Настройка за 5 минут. Без боли.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 14l5-9 4 4 5-2-2 5 4 4-9 5-2-5-5-2z" />
        <path d="M9 17l-4 3" />
      </svg>
    )
  },
  {
    title: 'Запоминает переписку',
    text: 'Помнит, что Саня должен тебе сотку.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3c-4.4 0-8 3.6-8 8 0 3.5 2.2 6.4 5.3 7.6L9 21h6l-.3-2.4C17.8 17.4 20 14.5 20 11c0-4.4-3.6-8-8-8z" />
        <path d="M9 10h6M9 13h6" />
      </svg>
    )
  },
  {
    title: 'Вежливый, но не скучный',
    text: 'Тон общения настраивается: “деловой” или “по‑братски”.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 6h14v10a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V6z" />
        <path d="M8 12h8" />
      </svg>
    )
  },
  {
    title: 'Приватность',
    text: 'Изоляция данных и контроль доступа. Спокойно.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l7 3v6c0 4.5-3 7.9-7 9-4-1.1-7-4.5-7-9V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    )
  }
];

const steps = [
  {
    n: '01',
    title: 'Подключаем канал',
    text: 'Telegram / WhatsApp / Web — выбери нужное.'
  },
  {
    n: '02',
    title: 'Задаём стиль',
    text: 'Тон, правила и сценарии — под твой вайб.'
  },
  {
    n: '03',
    title: 'Запускаем',
    text: 'Кабанчик отвечает, ты занимаешься делами.'
  }
];

const comparisonRows = [
  { label: 'Запуск', kabanchik: '5–10 минут', other: 'от часа до дня' },
  { label: 'Каналы', kabanchik: 'Telegram / WhatsApp / Web', other: 'обычно один канал' },
  { label: 'Тон общения', kabanchik: 'деловой или дружелюбный', other: 'ограниченный выбор' },
  { label: 'Приватность', kabanchik: 'изоляция данных', other: 'условия не всегда прозрачны' }
];

export default function Home() {
  return (
    <div className="wrap" id="top">
      <div className="shell">
        <header className="topbar">
          <a className="brand brand-slideshow" href="#top">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand-logo" src="/brand-pig-closeup.jpg" alt={site.brandName} />
            <UseCaseSlideshow brandName={site.brandName} useCases={useCases} intervalMs={1100} />
          </a>
        </header>

        <main className="content">
          <section className="hero">
            <div className="hero-grid">
              <div className="hero-copy">
                <h1>
                  {site.brandName} —
                  <br />
                  твой <span className="accent">ИИ‑помощник</span>
                </h1>
                <p>
                  Берёт на себя переписку, помогает с заявками и отвечает в каналах. Настрой один раз —
                  и живи спокойно.
                </p>
              </div>

              <div className="hero-art">
                <HeroImage
                  className="kabanchik-img"
                  src={site.heroImageSrc}
                  fallbackSrc="/variants/3d-biz/kabanchik-3d-3.svg"
                  alt={site.heroImageAlt}
                />
              </div>
            </div>

            <div className="hero-action">
              <a className="button primary cta-big" href={site.supportTelegram}>
                Запишись на демо
              </a>
              {showHeroNav ? (
                <div className="hero-nav" aria-label="Навигация">
                  {showFeaturesLink ? (
                    <a className="button small ghost" href="#features">
                      Функции
                    </a>
                  ) : null}
                  {showPricingLink ? (
                    <a className="button small ghost" href="#pricing">
                      Тарифы
                    </a>
                  ) : null}
                  {showContactLink ? (
                    <a className="button small ghost" href={site.supportTelegram}>
                      Контакт
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </section>

          <section id="features" className="section">
            <div className="section-head">
              <h2>
                Почему выбирают <span className="accent">{site.brandName}</span>?
              </h2>
              <p>Потому что он реально помогает, а не “просто чатик”.</p>
            </div>
            <div className="grid reasons">
              {reasons.map((item) => (
                <div key={item.title} className="card reason">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section split">
            <div className="split-grid">
              <div className="split-copy">
                <h2>
                  Затащи задачи
                  <br />с ИИ на <span className="accent">изи</span>
                </h2>
                <p>Включаем, настраиваем тон, подключаем каналы — и всё работает.</p>
              </div>

              <div className="compare" aria-label="Сравнение">
                <div className="compare-card">
                  <table className="compare-table">
                    <thead>
                      <tr>
                        <th scope="col" />
                        <th scope="col">{site.brandName}</th>
                        <th scope="col">Другой ИИ‑помощник</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row) => (
                        <tr key={row.label}>
                          <th scope="row">{row.label}</th>
                          <td>{row.kabanchik}</td>
                          <td>{row.other}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="compare-note">*Сравнение обобщённое</div>
                </div>
                <div className="float float-a" aria-hidden="true" />
                <div className="float float-b" aria-hidden="true" />
              </div>
            </div>
          </section>

          <section className="section how">
            <div className="section-head">
              <h2>
                Как это работает, <span className="accent">бро</span>
              </h2>
            </div>
            <div className="grid steps">
              {steps.map((step) => (
                <div key={step.n} className="card step">
                  <div className="step-n">{step.n}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="pricing" className="section pricing">
            <div className="section-head row">
              <div>
                <h2>Тарифы</h2>
                <p>Тестовые цены. Подстроим под твой объём.</p>
              </div>
              <div className="mini-cta">
                <a className="button small primary" href={site.supportTelegram}>
                  Хочу цену
                </a>
              </div>
            </div>

            <div className="grid pricing-grid">
              {plans.map((plan) => (
                <div key={plan.name} className={`card plan ${plan.featured ? 'featured' : ''}`}>
                  <div className="plan-top">
                    <h3>{plan.name}</h3>
                    <div className="price">
                      <span>{plan.price}</span>
                      <small>₽/мес</small>
                    </div>
                    <div className="meta">{plan.meta}</div>
                  </div>
                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a className="button primary" href={site.supportTelegram}>
                    Начать
                  </a>
                </div>
              ))}
            </div>

            <div className="fine">
              Нужен другой лимит? <a href={site.supportTelegram}>Пиши в Telegram</a>.
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer-inner">
            <div className="brand footer-brand">
              <span className="brand-mark" aria-hidden="true" />
              {site.brandName}
            </div>
            {showHeroNav ? (
              <div className="footer-links">
                {showFeaturesLink ? <a href="#features">Функции</a> : null}
                {showPricingLink ? <a href="#pricing">Тарифы</a> : null}
                {showContactLink ? <a href={site.supportTelegram}>Контакт</a> : null}
              </div>
            ) : null}
          </div>
        </footer>
      </div>
    </div>
  );
}
