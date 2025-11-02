import { useNavigate } from "react-router-dom";
import "../styles/AboutMe.css";

function AboutMe() {
  const navigate = useNavigate();

  const expertiseAreas = [
    {
      icon: "📱",
      title: "Sosyal Medya Stratejisi",
      description: "Marka hedeflerine uygun, kapsamlı ve etkili sosyal medya stratejileri geliştiriyorum. Her platformun kendine özgü dinamiklerini kullanarak maksimum etki yaratıyorum."
    },
    {
      icon: "✍️",
      title: "İçerik Yaratıcılığı",
      description: "Hedef kitleyle rezonans kuran, özgün ve etkileyici içerikler üretiyorum. Görsel ve metin uyumunu mükemmelleştirerek markanızın sesini yükseltiyorum."
    },
    {
      icon: "📊",
      title: "Veri Analizi",
      description: "Performans metriklerini analiz ederek sürekli iyileştirme sağlıyorum. Veri odaklı kararlarla markanızın ROI'sini maksimize ediyorum."
    }
  ];

  const coreValues = [
    {
      icon: "🎯",
      title: "Hedef Odaklılık",
      description: "Her kampanyada net hedefler belirliyor ve sonuç odaklı çalışıyorum. Başarı ölçülebilir ve şeffaf olmalıdır."
    },
    {
      icon: "💡",
      title: "Yaratıcılık",
      description: "Standartların ötesinde düşünerek, markanızı öne çıkaracak özgün fikirler üretiyorum. Her proje benzersizdir."
    },
    {
      icon: "🤝",
      title: "İşbirliği",
      description: "Müşterilerimle güçlü ortaklıklar kurarak, birlikte başarıya ulaşıyoruz. İletişim ve şeffaflık önceliğimdir."
    },
    {
      icon: "📈",
      title: "Sürekli Gelişim",
      description: "Dijital dünyada değişim kaçınılmazdır. Sürekli öğreniyor, yenilikleri takip ediyor ve uygulamaya geçiriyorum."
    }
  ];

  const journeyTimeline = [
    {
      year: "2024",
      title: "Bağımsız Danışman",
      description: "Kendi ajansımı kurarak, markalara özel stratejiler geliştirmeye başladım. 30+ marka ile çalışarak başarı hikayeleri yazdım."
    },
    {
      year: "2022",
      title: "Sosyal Medya Uzmanı",
      description: "Büyük ölçekli projelerde liderlik yaptım. E-ticaret ve kurumsal markaların dijital varlığını güçlendirdim."
    },
    {
      year: "2020",
      title: "İçerik Stratejisti",
      description: "Dijital pazarlama ajansında içerik stratejileri geliştirdim. Marka hikayelerini güçlü anlatılara dönüştürdüm."
    },
    {
      year: "2019",
      title: "Kariyere Başlangıç",
      description: "Dijital pazarlama dünyasına adım attım. Sosyal medyanın gücünü keşfederek bu alanda uzmanlaşmaya karar verdim."
    }
  ];

  return (
    <div className="aboutme-container">
      {/* Navigation */}
      <nav className="aboutme-nav">
        <div className="aboutme-nav-brand">
          <img src="/logo.png" alt="TSB Logo" className="aboutme-nav-logo" onClick={() => navigate('/')} />
        </div>
        <div className="aboutme-nav-links">
          <a className="aboutme-nav-link" onClick={() => navigate('/')}>ANA SAYFA</a>
          <a className="aboutme-nav-link" onClick={() => navigate('/services')}>HIZMETLERIMIZ</a>
          <a className="aboutme-nav-link" onClick={() => navigate('/blog')}>BLOG</a>
          <a className="aboutme-nav-link" onClick={() => navigate('/contact')}>ILETISIM</a>
        </div>
      </nav>

      {/* Decorative circles */}
      <div className="aboutme-decorative-circle aboutme-left-circle"></div>
      <div className="aboutme-decorative-circle aboutme-right-circle"></div>

      {/* Hero Section */}
      <section className="aboutme-hero">
        <div className="aboutme-hero-content">
          <span className="aboutme-hero-subtitle">Hakkımda</span>
          <h1 className="aboutme-hero-title">
            Dijital Dünyada Hikayeler Yaratıyorum
          </h1>
          <p className="aboutme-hero-description">
            Sosyal medya stratejisti ve marka danışmanı olarak, markaların dijital dünyada
            güçlenmesine yardımcı oluyorum. Yaratıcı içerikler ve veri odaklı stratejilerle,
            hedef kitlenizle anlamlı bağlar kurmanızı sağlıyorum.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="aboutme-story-section">
        <div className="aboutme-story-container">
          <div className="aboutme-story-image">
            <img src="/tuba_abla_3.jpg" alt="Tuba Sarıoğlu Busun" />
          </div>
          <div className="aboutme-story-content">
            <span className="aboutme-story-label">Benim Hikayem</span>
            <h2 className="aboutme-story-title">
              Tutkuyla Başlayan Bir Yolculuk
            </h2>
            <p className="aboutme-story-text">
              5 yılı aşkın süredir sosyal medya dünyasında aktif olarak çalışıyorum.
              Kariyerime dijital pazarlama alanında başlayarak, zamanla sosyal medya
              stratejisi ve marka danışmanlığı konularında uzmanlaştım.
            </p>
            <p className="aboutme-story-text">
              50'den fazla marka ile çalışarak, onların dijital hikayelerini yazmalarına
              yardımcı oldum. Her proje benim için yeni bir öğrenme fırsatı ve yaratıcı
              bir serüven. Markaların sadece takipçi sayısını değil, hedef kitleleriyle
              gerçek bağlar kurmasını sağlamayı hedefliyorum.
            </p>
            <p className="aboutme-story-text">
              Veri analizi ile yaratıcılığı birleştirerek, hem ölçülebilir sonuçlar hem de
              unutulmaz deneyimler yaratıyorum. Çünkü inanıyorum ki en başarılı stratejiler,
              hem kalbe hem de akla hitap edenlerdir.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="aboutme-expertise-section">
        <div className="aboutme-expertise-header">
          <span className="aboutme-expertise-label">Uzmanlık Alanlarım</span>
          <h2 className="aboutme-expertise-title">
            Nelerde İyiyim?
          </h2>
        </div>
        <div className="aboutme-expertise-grid">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="aboutme-expertise-card">
              <div className="aboutme-expertise-icon">{area.icon}</div>
              <h3 className="aboutme-expertise-card-title">{area.title}</h3>
              <p className="aboutme-expertise-card-description">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="aboutme-values-section">
        <div className="aboutme-values-header">
          <span className="aboutme-values-label">Değerlerim</span>
          <h2 className="aboutme-values-title">
            Çalışma Prensiplerim
          </h2>
        </div>
        <div className="aboutme-values-grid">
          {coreValues.map((value, index) => (
            <div key={index} className="aboutme-value-item">
              <div className="aboutme-value-icon">{value.icon}</div>
              <h3 className="aboutme-value-title">{value.title}</h3>
              <p className="aboutme-value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="aboutme-journey-section">
        <div className="aboutme-journey-header">
          <span className="aboutme-journey-label">Kariyerim</span>
          <h2 className="aboutme-journey-title">
            Profesyonel Yolculuğum
          </h2>
        </div>
        <div className="aboutme-timeline">
          {journeyTimeline.map((item, index) => (
            <div key={index} className="aboutme-timeline-item">
              <div className="aboutme-timeline-content-left">
                <div className="aboutme-timeline-year">{item.year}</div>
              </div>
              <div className="aboutme-timeline-dot"></div>
              <div className="aboutme-timeline-content-right">
                <div className="aboutme-timeline-year">{item.year}</div>
                <h3 className="aboutme-timeline-title">{item.title}</h3>
                <p className="aboutme-timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="aboutme-cta-section">
        <div className="aboutme-cta-content">
          <h2 className="aboutme-cta-title">
            Birlikte Çalışmaya Hazır mısınız?
          </h2>
          <p className="aboutme-cta-description">
            Markanızı dijital dünyada bir adım öne taşımak için benimle iletişime geçin.
            Başarılı bir işbirliğinin ilk adımını birlikte atalım.
          </p>
          <div className="aboutme-cta-buttons">
            <button className="aboutme-cta-btn-primary" onClick={() => navigate('/contact')}>
              İletişime Geçin
            </button>
            <button className="aboutme-cta-btn-secondary" onClick={() => navigate('/services')}>
              Hizmetlerimi Keşfedin
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="aboutme-footer">
        <div className="aboutme-footer-main-content">
          {/* Left Side - About */}
          <div className="aboutme-footer-about">
            <h4 className="aboutme-footer-brand">Tuba Sarıoğlu Busun</h4>
            <p className="aboutme-footer-role">Social Media Expert & Marka Danışmanı</p>
            <p className="aboutme-footer-description">
              Markaların dijital dünyada güçlenmesine yardımcı oluyor,
              stratejik içerikler ve yaratıcı kampanyalarla fark yaratıyorum.
            </p>
            <div className="aboutme-footer-location">
              <span className="location-icon">📍</span>
              <span>Denizli, Türkiye</span>
            </div>
          </div>

          {/* Middle - Quick Links */}
          <div className="aboutme-footer-links">
            <h4 className="aboutme-footer-heading">Hızlı Linkler</h4>
            <ul className="aboutme-footer-link-list">
              <li><a onClick={() => navigate('/')}>Ana Sayfa</a></li>
              <li><a onClick={() => navigate('/aboutme')}>Hakkımda</a></li>
              <li><a onClick={() => navigate('/services')}>Hizmetlerimiz</a></li>
              <li><a onClick={() => navigate('/blog')}>Blog</a></li>
              <li><a onClick={() => navigate('/contact')}>İletişim</a></li>
            </ul>
          </div>

          {/* Right Side - Contact */}
          <div className="aboutme-footer-contact">
            <h4 className="aboutme-footer-heading">İletişim</h4>
            <div className="aboutme-footer-contact-info">
              <p className="aboutme-footer-contact-item">
                <span className="aboutme-contact-icon">📧</span>
                <a href="mailto:testoglutest05@gmail.com">testoglutest05@gmail.com</a>
              </p>
              <p className="aboutme-footer-contact-item">
                <span className="aboutme-contact-icon">📷</span>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="aboutme-footer-bottom">
          <hr className="aboutme-footer-divider" />
          <div className="aboutme-footer-bottom-content">
            <p className="aboutme-footer-copyright">
              &copy; {new Date().getFullYear()} Tuba Sarıoğlu Busun. Tüm hakları saklıdır.
            </p>
            <div className="aboutme-footer-bottom-links">
              <a href="#" className="aboutme-footer-bottom-link">Gizlilik Politikası</a>
              <span className="aboutme-footer-separator">|</span>
              <a href="#" className="aboutme-footer-bottom-link">Kullanım Şartları</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutMe;
