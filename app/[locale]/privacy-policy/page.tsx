export default function PrivacyPolicyPage({ params: { locale } }: { params: { locale: string } }) {
  const title = locale === 'ru' ? 'Политика конфиденциальности' : 'Privacy Policy';
  
  return (
    <div className="min-h-screen bg-neutral py-12">
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-dark mb-8">{title}</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                {locale === 'ru' ? '1. Сбор информации' : '1. Information Collection'}
              </h2>
              <p>
                {locale === 'ru'
                  ? 'Мы собираем информацию, которую вы предоставляете нам при использовании наших услуг, включая имя, email, номер телефона и другие контактные данные.'
                  : 'We collect information that you provide to us when using our services, including name, email, phone number and other contact details.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                {locale === 'ru' ? '2. Использование информации' : '2. Use of Information'}
              </h2>
              <p>
                {locale === 'ru'
                  ? 'Собранная информация используется для предоставления и улучшения наших услуг, связи с клиентами и отправки релевантных предложений.'
                  : 'The collected information is used to provide and improve our services, communicate with clients and send relevant offers.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                {locale === 'ru' ? '3. Защита данных' : '3. Data Protection'}
              </h2>
              <p>
                {locale === 'ru'
                  ? 'Мы применяем современные меры безопасности для защиты ваших персональных данных от несанкционированного доступа.'
                  : 'We implement modern security measures to protect your personal data from unauthorized access.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">
                {locale === 'ru' ? '4. Контакты' : '4. Contact'}
              </h2>
              <p>
                {locale === 'ru'
                  ? 'По вопросам конфиденциальности обращайтесь: info@alphastarproperties.ae'
                  : 'For privacy questions, contact: info@alphastarproperties.ae'}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

