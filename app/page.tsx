import site from '../site.config.json';
import { HeroImage } from '../components/HeroImage';
import { UseCaseSlideshow } from '../components/UseCaseSlideshow';
import { ScrollReveal } from '../components/ScrollReveal';
import { StickyBar } from '../components/StickyBar';

const bp = process.env.NODE_ENV === 'production' ? '/Hash_lendos' : '';

const useCases = ['для рутины', 'для обучения', 'для поездки', 'для планирования', 'для дел'];

const plans = [
  {
    name: 'Starter',
    price: site.prices.starter,
    meta: `${site.messageLimits.starter} сообщений/мес · 1 ассистент`,
    items: ['Все каналы', 'База знаний', 'Базовая аналитика'],
    featured: false,
    cta: 'Попробовать'
  },
  {
    name: 'Pro',
    price: site.prices.pro,
    meta: `${site.messageLimits.pro} сообщений/мес · до 3 ассистентов`,
    items: ['Брендинг', 'Расширенная аналитика', 'Приоритетная поддержка'],
    featured: true,
    cta: 'Подключить Pro'
  },
  {
    name: 'Team',
    price: site.prices.enterprise,
    meta: `${site.messageLimits.enterprise} сообщений/мес · до 10 ассистентов`,
    items: ['SLA 99.9%', 'Интеграции', 'Выделенная поддержка'],
    featured: false,
    cta: 'Обсудить'
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
    text: 'Тон общения настраивается: "деловой" или "по\u2011братски".',
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
    text: 'Telegram / WhatsApp / Web — выбери нужное.',
    mockup: `${bp}/mockups/phone-onboarding.svg`
  },
  {
    n: '02',
    title: 'Задаём стиль',
    text: 'Тон, правила и сценарии — под твой вайб.',
    mockup: `${bp}/mockups/phone-settings.svg`
  },
  {
    n: '03',
    title: 'Запускаем',
    text: 'Кабанчик отвечает, ты занимаешься делами.',
    mockup: `${bp}/mockups/phone-chat.svg`
  }
];

const comparisonRows = [
  { label: 'Запуск', kabanchik: '5–10 минут', other: 'от часа до дня' },
  { label: 'Каналы', kabanchik: 'Telegram / WhatsApp / Web', other: 'обычно один канал' },
  { label: 'Тон общения', kabanchik: 'деловой или дружелюбный', other: 'ограниченный выбор' },
  { label: 'Приватность', kabanchik: 'изоляция данных', other: 'условия не всегда прозрачны' }
];


const faqItems = [
  {
    q: 'В безопасности ли мои данные?',
    a: 'Да. Каждый аккаунт изолирован. Мы не используем ваши данные для обучения моделей и не передаём их третьим лицам.'
  },
  {
    q: 'Сколько времени занимает подключение?',
    a: 'В среднем 5–10 минут. Подключаете канал, задаёте тон и правила — и Кабанчик готов к работе.'
  },
  {
    q: 'Можно ли попробовать бесплатно?',
    a: 'Да, первые 14 дней бесплатно на любом тарифе. Карта не нужна.'
  },
  {
    q: 'Какие каналы поддерживаются?',
    a: 'Telegram, WhatsApp. Подключение новых каналов — в планах.'
  },
  {
    q: 'Что если мне нужно больше сообщений?',
    a: 'Напишите нам — подберём индивидуальный лимит под ваш объём.'
  }
];

const CheckIcon = () => (
  <svg className="compare-icon check" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M5 10l3 3 7-7" />
  </svg>
);

const CrossIcon = () => (
  <svg className="compare-icon cross" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M6 6l8 8M14 6l-8 8" />
  </svg>
);

export default function Home() {
  return (
    <div className="wrap" id="top">
      <StickyBar href={site.supportTelegram} label="Запишись на демо" />

      <div className="shell">
        <header className="topbar">
          <a className="brand brand-slideshow" href="#top">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand-logo" src={`${bp}/brand-pig-closeup.jpg`} alt={site.brandName} />
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
                  Освободи до 6 часов в неделю. Кабанчик ищет нужное, помогает планировать и отвечает в трёх каналах — пока ты занимаешься важным.
                </p>
              </div>

              <div className="hero-art">
                <HeroImage
                  className="kabanchik-img"
                  src={`${bp}${site.heroImageSrc}`}
                  fallbackSrc={`${bp}/variants/3d-biz/kabanchik-3d-3.svg`}
                  alt={site.heroImageAlt}
                />
              </div>
            </div>

            <div className="hero-action">
              <a className="button primary cta-big" href={site.supportTelegram}>
                Попробовать бесплатно
              </a>
              <p className="cta-sub">Без карты. Настройка за 5 минут.</p>
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

          <ScrollReveal>
            <section id="features" className="section">
              <div className="section-head">
                <h2>
                  Почему выбирают <span className="accent">{site.brandName}а</span>?
                </h2>
                <p>&nbsp;</p>
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
          </ScrollReveal>

          <ScrollReveal>
            <section className="section split">
              <div className="split-grid">
                <div className="split-copy">
                  <h2>
                    Затащи задачи
                    <br />с ИИ на <span className="accent">изи</span>
                  </h2>
                  <p>&nbsp;</p>
                </div>

                <div className="compare" aria-label="Сравнение">
                  <div className="compare-card">
                    <table className="compare-table">
                      <thead>
                        <tr>
                          <th scope="col" />
                          <th scope="col" className="col-kabanchik">{site.brandName}</th>
                          <th scope="col">Другой ИИ‑помощник</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonRows.map((row) => (
                          <tr key={row.label}>
                            <th scope="row">{row.label}</th>
                            <td className="col-kabanchik">
                              <CheckIcon />
                              {row.kabanchik}
                            </td>
                            <td className="col-other">
                              <CrossIcon />
                              {row.other}
                            </td>
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
          </ScrollReveal>

          <ScrollReveal>
            <section className="section how">
              <div className="section-head">
                <h2>
                  Как это работает
                </h2>
              </div>
              <div className="grid steps">
                {steps.map((step) => (
                  <div key={step.n} className="card step">
                    <div className="step-n">{step.n}</div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="step-mockup"
                      src={step.mockup}
                      alt={step.title}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="section faq">
              <div className="section-head">
                <h2>Частые вопросы</h2>
              </div>
              <div className="faq-list">
                {faqItems.map((item) => (
                  <details key={item.q} className="faq-item">
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="section final-cta">
              <h2>Готов попробовать?</h2>
              <p>Настрой Кабанчика за 5 минут и освободи время для важного.</p>
              <a className="button primary cta-big" href={site.supportTelegram}>
                Начать бесплатно
              </a>
            </section>
          </ScrollReveal>
        </main>

        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-main">
              <div className="brand footer-brand">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="brand-logo" src={`${bp}/brand-pig-closeup.jpg`} alt={site.brandName} />
                {site.brandName}
              </div>
              <p className="footer-tagline">{site.brandTagline}</p>
            </div>
            <div className="footer-cols">
              <div className="footer-col">
                <h4>Продукт</h4>
                <a href="#features">Функции</a>
                <a href="#pricing">Тарифы</a>
              </div>
              <div className="footer-col">
                <h4>Поддержка</h4>
                <a href={site.supportTelegram}>Telegram</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 {site.brandName}</span>
            <div className="footer-legal">
              <a href="#">Политика конфиденциальности</a>
              <a href="#">Оферта</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
