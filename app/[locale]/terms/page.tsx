export default function TermsPage({ params: { locale } }: { params: { locale: string } }) {
  const title = locale === 'ru' ? 'Условия использования' : 'Terms of Service';
  
  return (
    <div className="min-h-screen bg-neutral py-12">
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-dark mb-8">{title}</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                {locale === 'ru' ? '1. Принятие условий' : '1. Acceptance of Terms'}
              </h2>
              <p>
                {locale === 'ru'
                  ? 'Используя наш веб-сайт и услуги, вы соглашаетесь соблюдать настоящие условия использования.'
                  : 'By using our website and services, you agree to comply with these terms of service.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                {locale === 'ru' ? '2. Услуги' : '2. Services'}
              </h2>
              <p>
                {locale === 'ru'
                  ? 'Alpha Star Properties предоставляет услуги по покупке, продаже и аренде недвижимости в Дубае.'
                  : 'Alpha Star Properties provides services for buying, selling and renting real estate in Dubai.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                {locale === 'ru' ? '3. Ответственность' : '3. Liability'}
              </h2>
              <p>
                {locale === 'ru'
                  ? 'Мы стремимся предоставлять точную информацию, но не несем ответственности за возможные ошибки или упущения.'
                  : 'We strive to provide accurate information but are not liable for possible errors or omissions.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                {locale === 'ru' ? '4. Изменения условий' : '4. Changes to Terms'}
              </h2>
              <p>
                {locale === 'ru'
                  ? 'Мы оставляем за собой право изменять настоящие условия в любое время.'
                  : 'We reserve the right to modify these terms at any time.'}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

