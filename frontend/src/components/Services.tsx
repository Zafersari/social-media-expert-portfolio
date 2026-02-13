import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Services.css";

interface Service {
  id?: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

function Services() {
  const navigate = useNavigate();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  // Backend'den gelen hizmetlere eklenecek features (API'de yok)
  const featuresMap: Record<string, string[]> = {
    'Strategy Development': [
      "Hedef kitle analizi",
      "Rakip analizi ve pazar araştırması",
      "İçerik takvimi oluşturma",
      "Platform seçimi ve optimizasyon"
    ],
    'Content Creation': [
      "Görsel ve video içerik tasarımı",
      "Yaratıcı metin yazarlığı",
      "Hikaye ve reel üretimi",
      "Marka kimliğine uygun içerikler"
    ],
    'Analytics & Growth': [
      "Performans takibi ve raporlama",
      "A/B test ve optimizasyon",
      "Takipçi büyüme stratejileri",
      "ROI analizi ve iyileştirme"
    ],
  };

  // Türkçe başlık eşlemesi
  const titleMap: Record<string, string> = {
    'Strategy Development': 'Strateji Geliştirme',
    'Content Creation': 'İçerik Üretimi',
    'Analytics & Growth': 'Analiz ve Büyüme',
  };

  // Sadece frontend'de bulunan ek hizmetler
  const extraServices: Service[] = [
    {
      icon: "🎯",
      title: "Reklam Kampanyaları",
      description: "Facebook, Instagram ve diğer platformlarda etkili reklam kampanyaları oluşturup yönetiyorum. Hedef odaklı kampanyalarla bütçenizi en verimli şekilde kullanın.",
      features: [
        "Facebook & Instagram Ads yönetimi",
        "Hedef kitle segmentasyonu",
        "Bütçe optimizasyonu",
        "Kampanya performans takibi"
      ]
    },
    {
      icon: "👥",
      title: "Topluluk Yönetimi",
      description: "Markanızın sosyal medya topluluğunu aktif ve etkileşimli tutuyorum. Müşteri ilişkilerini güçlendirerek sadık bir takipçi kitlesi oluşturuyorum.",
      features: [
        "Yorum ve mesaj yönetimi",
        "Takipçi etkileşimi artırma",
        "Kriz yönetimi",
        "İtibar yönetimi"
      ]
    },
    {
      icon: "🎨",
      title: "Marka Danışmanlığı",
      description: "Dijital dünyada güçlü bir marka kimliği oluşturmanıza yardımcı oluyorum. Marka değerlerinizi sosyal medyada en etkili şekilde yansıtın.",
      features: [
        "Marka kimliği geliştirme",
        "Görsel dil oluşturma",
        "Ses tonu belirleme",
        "Dijital marka stratejisi"
      ]
    }
  ];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services');
        if (response.ok) {
          const apiServices = await response.json();
          // API'den gelen servislere features ve Türkçe başlık ekle
          const enriched = apiServices.map((s: { title: string; description: string; icon: string }) => ({
            ...s,
            title: titleMap[s.title] || s.title,
            features: featuresMap[s.title] || [],
          }));
          setServices([...enriched, ...extraServices]);
        } else {
          // API başarısızsa fallback olarak sadece extra servisleri göster
          setServices(extraServices);
        }
      } catch {
        setServices(extraServices);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const processSteps = [
    {
      number: "1",
      title: "Keşif & Analiz",
      description: "Markanızı, hedeflerinizi ve mevcut durumunuzu derinlemesine analiz ediyorum."
    },
    {
      number: "2",
      title: "Strateji Oluşturma",
      description: "Size özel, detaylı bir sosyal medya stratejisi ve yol haritası çıkarıyorum."
    },
    {
      number: "3",
      title: "Uygulama",
      description: "Planlanan stratejileri hayata geçiriyor, içerikler üretiyorum."
    },
    {
      number: "4",
      title: "Optimizasyon",
      description: "Sürekli veri analizi ile performansı ölçüyor ve iyileştirmeler yapıyorum."
    }
  ];

  if (loading) {
    return <div className="services-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', color: '#fff' }}>Yükleniyor...</div>;
  }

  return (
    <div className="services-container">
      {/* Navigation */}
      <nav className="services-nav">
        <div className="services-nav-brand">
          <img
            src="/logo.png"
            alt="Website Logo"
            className="services-nav-logo"
            onClick={() => navigate('/')}
          />
        </div>
        <div className="services-nav-links">
          <a className="services-nav-link" onClick={() => navigate('/')}>ANA SAYFA</a>
          <a className="services-nav-link" onClick={() => navigate('/aboutme')}>HAKKIMDA</a>
          <a className="services-nav-link" onClick={() => navigate('/blog')}>BLOG</a>
          <a className="services-nav-link" onClick={() => navigate('/contact')}>ILETISIM</a>
        </div>
      </nav>

      {/* Decorative circles */}
      <div className="services-decorative-circle services-left-circle"></div>
      <div className="services-decorative-circle services-right-circle"></div>
      <div className="services-decorative-circle services-bottom-circle"></div>

      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <span className="services-hero-subtitle">Hizmetlerimiz</span>
          <h1 className="services-hero-title">
            Markanızı Dijital Dünyada Güçlendirin
          </h1>
          <p className="services-hero-description">
            Profesyonel sosyal medya çözümleri ile markanızı bir adım öne taşıyacak,
            hedef kitlenizle güçlü bağlar kurmanızı sağlayacak hizmetler sunuyorum.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-main-section">
        <div className="services-section-header">
          <span className="services-section-label">Neler Sunuyorum</span>
          <h2 className="services-section-title">Profesyonel Hizmetler</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-detail-card">
              <div className="service-detail-icon">{service.icon}</div>
              <h3 className="service-detail-title">{service.title}</h3>
              <p className="service-detail-description">{service.description}</p>
              <ul className="service-features-list">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="service-feature-item">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="services-process-section">
        <div className="services-process-header">
          <span className="services-process-label">Nasıl Çalışıyoruz</span>
          <h2 className="services-process-title">Çalışma Süreci</h2>
        </div>
        <div className="services-process-grid">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-number">{step.number}</div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="services-cta-content">
          <h2 className="services-cta-title">Projenize Başlayalım</h2>
          <p className="services-cta-description">
            Markanızı dijital dünyada güçlendirmek için hemen iletişime geçin.
            Birlikte başarı hikayenizi yazalım.
          </p>
          <button className="services-cta-button" onClick={() => navigate('/contact')}>
            İletişime Geçin
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="services-footer">
        <div className="services-footer-main-content">
          {/* Left Side - About */}
          <div className="services-footer-about">
            <h4 className="services-footer-brand">Tuba Sarıoğlu Busun</h4>
            <p className="services-footer-role">Social Media Expert & Marka Danışmanı</p>
            <p className="services-footer-description">
              Markaların dijital dünyada güçlenmesine yardımcı oluyor,
              stratejik içerikler ve yaratıcı kampanyalarla fark yaratıyorum.
            </p>
            <div className="services-footer-location">
              <span className="location-icon">📍</span>
              <span>Denizli, Türkiye</span>
            </div>
          </div>

          {/* Middle - Quick Links */}
          <div className="services-footer-links">
            <h4 className="services-footer-heading">Hızlı Linkler</h4>
            <ul className="services-footer-link-list">
              <li><a onClick={() => navigate('/')}>Ana Sayfa</a></li>
              <li><a onClick={() => navigate('/aboutme')}>Hakkımda</a></li>
              <li><a onClick={() => navigate('/services')}>Hizmetlerimiz</a></li>
              <li><a onClick={() => navigate('/blog')}>Blog</a></li>
              <li><a onClick={() => navigate('/contact')}>İletişim</a></li>
            </ul>
          </div>

          {/* Right Side - Contact */}
          <div className="services-footer-contact">
            <h4 className="services-footer-heading">İletişim</h4>
            <div className="services-footer-contact-info">
              <p className="services-footer-contact-item">
                <span className="services-contact-icon">📧</span>
                <a href="mailto:testoglutest05@gmail.com">testoglutest05@gmail.com</a>
              </p>
              <p className="services-footer-contact-item">
                <span className="services-contact-icon">📷</span>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="services-footer-bottom">
          <hr className="services-footer-divider" />
          <div className="services-footer-bottom-content">
            <p className="services-footer-copyright">
              &copy; {new Date().getFullYear()} Tuba Sarıoğlu Busun. Tüm hakları saklıdır.
            </p>
            <div className="services-footer-bottom-links">
              <a href="#" className="services-footer-bottom-link">Gizlilik Politikası</a>
              <span className="services-footer-separator">|</span>
              <a href="#" className="services-footer-bottom-link">Kullanım Şartları</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Services;
