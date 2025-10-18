import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import LeadForm from '@/components/LeadForm';
import { FaWhatsapp, FaTelegram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('contact');

  return (
    <div className="min-h-screen bg-neutral py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-600">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <LeadForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-dark mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">{t('info.address')}</h4>
                    <p className="text-gray-600">{t('info.addressValue')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">{t('info.phone')}</h4>
                    <p className="text-gray-600">+971 XX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">{t('info.email')}</h4>
                    <p className="text-gray-600">info@alphastarproperties.ae</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">{t('info.hours')}</h4>
                    <p className="text-gray-600">{t('info.hoursValue')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-dark mb-6">Quick Contact</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
                >
                  <FaWhatsapp size={20} />
                  WhatsApp
                </a>
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  <FaTelegram size={20} />
                  Telegram
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68282967575!2d54.947650250000004!3d25.0760095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

