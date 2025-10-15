import { useNavigate } from "react-router-dom";
import "../styles/Services.css";

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      icon: "📈",
      title: "Strateji Geliştirme",
      description: "Markanızın hedeflerine özel, kapsamlı sosyal medya stratejileri oluşturuyorum. Hedef kitle analizi, rakip analizi ve içerik takvimi ile markanızı dijital dünyada güçlendiriyorum.",
      features: [
        "Hedef kitle analizi",
        "Rakip analizi ve pazar araştırması",
        "İçerik takvimi oluşturma",
        "Platform seçimi ve optimizasyon"
      ]
    },
    {
      icon: "✍️",
      title: "İçerik Üretimi",
      description: "Hedef kitlenizle rezonans kuran, etkileyici gönderiler, hikayeler ve kampanyalar. Profesyonel görseller ve özgün metinlerle markanızın sesini yükseltin.",
      features: [
        "Görsel ve video içerik tasarımı",
        "Yaratıcı metin yazarlığı",
        "Hikaye ve reel üretimi",
        "Marka kimliğine uygun içerikler"
      ]
    },
    {
      icon: "📊",
      title: "Analiz ve Büyüme",
      description: "Veri odaklı içgörüler ve optimizasyon ile sosyal medya getirinizi maksimize ediyorum. Detaylı raporlama ve sürekli iyileştirme ile hedeflerinize ulaşın.",
      features: [
        "Performans takibi ve raporlama",
        "A/B test ve optimizasyon",
        "Takipçi büyüme stratejileri",
        "ROI analizi ve iyileştirme"
      ]
    },
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

  return (
    <div className="services-container">
      {/* Navigation */}
      <nav className="services-nav">
        <div className="services-nav-logo" onClick={() => navigate('/')}>
          <img src="/logo.png" alt="Website Logo" />
        </div>
        <div className="services-nav-menu">
          <a className="services-nav-link" onClick={() => navigate('/aboutme')}>HAKKIMDA</a>
          <a className="services-nav-link" onClick={() => navigate('/services')}>HIZMETLERIMIZ</a>
          <a className="services-nav-link" onClick={() => navigate('/blog')}>BLOG</a>
          <a className="services-nav-link" onClick={() => navigate('/contact')}>ILETISIM</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1 className="services-hero-title">Hizmetlerimiz</h1>
          <p className="services-hero-subtitle">
            Markanızı dijital dünyada bir adım öne taşıyacak profesyonel sosyal medya çözümleri
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-main-section">
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

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="services-cta-content">
          <h2 className="services-cta-title">Projenize Başlayalım</h2>
          <p className="services-cta-description">
            Markanızı dijital dünyada güçlendirmek için hemen iletişime geçin
          </p>
          <button className="services-cta-button" onClick={() => navigate('/contact')}>
            İletişime Geçin
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="services-footer">
        <div className="services-footer-content">
          <div className="services-footer-left">
            <h5 className="services-footer-name">Tuba Sarıoğlu Busun</h5>
            <p className="services-footer-role">Social Media Expert</p>
            <div className="services-footer-location">
              <span>📍</span>
              <span>Denizli, Turkey</span>
            </div>
          </div>
          <div className="services-footer-right">
            <h5 className="services-footer-heading">Benimle İletişime Geçin</h5>
            <div className="services-footer-social">
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="services-footer-social-link">
                <span>📱</span>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="services-footer-social-link">
                <span>📷</span>
              </a>
              <a href="mailto:zafer_sari_20@hotmail.com" className="services-footer-social-link">
                <span>✉️</span>
              </a>
            </div>
          </div>
        </div>
        <hr className="services-footer-divider" />
        <div className="services-footer-copyright">
          <p>&copy; {new Date().getFullYear()} Tuba Sarıoğlu Busun. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Services;
