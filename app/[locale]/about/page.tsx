import { useTranslations } from 'next-intl';
import Image from 'next/image';
import TeamCard from '@/components/TeamCard';
import { HiShieldCheck, HiLightningBolt, HiStar } from 'react-icons/hi';

export const dynamic = 'force-dynamic';

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('about');
  const tHome = useTranslations('home');

  const values = [
    { icon: HiShieldCheck, title: t('values.trust') },
    { icon: HiStar, title: t('values.excellence') },
    { icon: HiLightningBolt, title: t('values.innovation') },
  ];

  const stats = [
    { value: '500+', label: tHome('about.properties') },
    { value: '1200+', label: tHome('about.clients') },
    { value: '10+', label: tHome('about.years') },
    { value: '25+', label: tHome('about.countries') },
  ];

  const teamMembers = [
    {
      name: 'Alexander Petrov',
      position: 'Managing Director',
      image: '/images/placeholders/team.svg',
      linkedin: '#',
      email: 'alexander@alphastar.ae',
    },
    {
      name: 'Marina Ivanova',
      position: 'Senior Property Consultant',
      image: '/images/placeholders/team.svg',
      linkedin: '#',
      email: 'marina@alphastar.ae',
    },
    {
      name: 'Dmitry Sokolov',
      position: 'Investment Advisor',
      image: '/images/placeholders/team.svg',
      linkedin: '#',
      email: 'dmitry@alphastar.ae',
    },
    {
      name: 'Elena Kuznetsova',
      position: 'Property Manager',
      image: '/images/placeholders/team.svg',
      linkedin: '#',
      email: 'elena@alphastar.ae',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/placeholders/hero.svg"
            alt="About Us"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('title')}</h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-dark mb-6">{t('mission.title')}</h2>
          <p className="text-xl text-gray-600 leading-relaxed">{t('mission.description')}</p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-dark text-center mb-12">{t('values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-dark">{value.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">{t('numbers.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 container-custom">
        <h2 className="text-4xl font-bold text-dark text-center mb-12">
          {tHome('team.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

