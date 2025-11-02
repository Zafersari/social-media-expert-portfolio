import { useNavigate } from "react-router-dom";
import "../styles/Portfolio.css";

function Portfolio() {
  const navigate = useNavigate();

  // 8 case studies data
  const caseStudies = [
    {
      id: 1,
      companyName: "Şirket İsmi 1",
      logo: "/brands/brand1.png",
      title: "Instagram Engagement Artışı",
      metric: "+300%",
      metricLabel: "Engagement Artışı",
      description: "Hedefli içerik stratejisi ve story kampanyalarıyla etkileşim oranlarını üç katına çıkardık.",
      strategies: ["İçerik Takvimi", "Reels Kampanyası", "Hashtag Stratejisi"]
    },
    {
      id: 2,
      companyName: "Şirket İsmi 2",
      logo: "/brands/brand2.png",
      title: "Follower Büyümesi",
      metric: "+500%",
      metricLabel: "Takipçi Artışı",
      description: "Organik büyüme stratejileri ve influencer işbirlikleriyle beş kat takipçi artışı sağladık.",
      strategies: ["Organik Büyüme", "Influencer İşbirliği", "UGC Kampanyası"]
    },
    {
      id: 3,
      companyName: "Şirket İsmi 3",
      logo: "/brands/brand3.png",
      title: "Satış Dönüşüm Artışı",
      metric: "+200%",
      metricLabel: "Satış Artışı",
      description: "Hedeflenmiş sosyal medya reklamları ve kampanyalarla satışları ikiye katladık.",
      strategies: ["Meta Ads", "Retargeting", "Promo Kampanyaları"]
    },
    {
      id: 4,
      companyName: "Şirket İsmi 4",
      logo: "/brands/brand4.png",
      title: "Marka Bilinirliği Kampanyası",
      metric: "+400%",
      metricLabel: "Reach Artışı",
      description: "Viral içerikler ve stratejik paylaşımlarla marka erişimini dört katına çıkardık.",
      strategies: ["Viral İçerik", "Trend Kullanımı", "Cross-Platform"]
    },
    {
      id: 5,
      companyName: "Şirket İsmi 5",
      logo: "/brands/brand5.png",
      title: "Community Management",
      metric: "+350%",
      metricLabel: "Yorum Artışı",
      description: "Aktif topluluk yönetimi ve etkileşim stratejileriyle sadık bir takipçi kitlesi oluşturduk.",
      strategies: ["Topluluk Yönetimi", "Canlı Yayınlar", "Q&A Sessions"]
    },
    {
      id: 6,
      companyName: "Şirket İsmi 6",
      logo: "/brands/brand6.png",
      title: "E-ticaret Sosyal Medya",
      metric: "+250%",
      metricLabel: "E-ticaret Satış",
      description: "Shoppable posts ve story reklamlarıyla direkt satışları önemli ölçüde artırdık.",
      strategies: ["Shoppable Posts", "Story Ads", "Katalog Entegrasyonu"]
    },
    {
      id: 7,
      companyName: "Şirket İsmi 7",
      logo: "/brands/brand7.png",
      title: "B2B LinkedIn Stratejisi",
      metric: "+180%",
      metricLabel: "Lead Artışı",
      description: "Profesyonel içerik ve networking stratejisiyle B2B lead oluşumunu artırdık.",
      strategies: ["Thought Leadership", "LinkedIn Ads", "Networking"]
    },
    {
      id: 8,
      companyName: "Şirket İsmi 8",
      logo: "/brands/brand8.png",
      title: "Video İçerik Kampanyası",
      metric: "+450%",
      metricLabel: "Video İzlenme",
      description: "Reels ve TikTok stratejisiyle video içerik performansını dramatik şekilde artırdık.",
      strategies: ["Reels Stratejisi", "TikTok İçerikleri", "Short-Form Video"]
    }
  ];

  const stats = [
    { number: "50+", label: "Tamamlanan Proje" },
    { number: "30+", label: "Mutlu Müşteri" },
    { number: "95%", label: "Başarı Oranı" },
    { number: "5+", label: "Yıllık Deneyim" }
  ];

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="portfolio-nav">
        <div className="portfolio-nav-brand">
          <img
            src="/logo.png"
            alt="Website Logo"
            className="portfolio-nav-logo"
            onClick={() => navigate('/')}
          />
        </div>
        <div className="portfolio-nav-links">
          <a className="portfolio-nav-link" onClick={() => navigate('/')}>ANA SAYFA</a>
          <a className="portfolio-nav-link" onClick={() => navigate('/aboutme')}>HAKKIMDA</a>
          <a className="portfolio-nav-link" onClick={() => navigate('/services')}>HIZMETLERIMIZ</a>
          <a className="portfolio-nav-link" onClick={() => navigate('/blog')}>BLOG</a>
          <a className="portfolio-nav-link" onClick={() => navigate('/contact')}>ILETISIM</a>
        </div>
      </nav>

      {/* Decorative circles */}
      <div className="portfolio-decorative-circle portfolio-left-circle"></div>
      <div className="portfolio-decorative-circle portfolio-right-circle"></div>
      <div className="portfolio-decorative-circle portfolio-bottom-circle"></div>

      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-content">
          <span className="portfolio-hero-subtitle">Portfolio</span>
          <h1 className="portfolio-hero-title">
            Başarı Hikayeleri
          </h1>
          <p className="portfolio-hero-description">
            Farklı sektörlerden markalarla gerçekleştirdiğim projeler ve elde edilen sonuçlar.
            Her proje, benzersiz stratejiler ve yaratıcı çözümlerle hayata geçirildi.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="case-studies-section">
        <div className="case-studies-header">
          <span className="case-studies-label">Projelerim</span>
          <h2 className="case-studies-title">Gerçekleştirdiğim Kampanyalar</h2>
        </div>
        <div className="case-studies-grid">
          {caseStudies.map((study) => (
            <div key={study.id} className="case-study-card">
              {/* Logo */}
              <div className="case-study-logo">
                <img src={study.logo} alt={study.companyName} />
              </div>

              {/* Company Name */}
              <h3 className="case-study-company">{study.companyName}</h3>

              {/* Title */}
              <h4 className="case-study-title">{study.title}</h4>

              {/* Metric */}
              <div className="case-study-metric">
                <div className="metric-number">{study.metric}</div>
                <div className="metric-label">{study.metricLabel}</div>
              </div>

              {/* Description */}
              <p className="case-study-description">{study.description}</p>

              {/* Strategies */}
              <div className="case-study-strategies">
                {study.strategies.map((strategy, index) => (
                  <span key={index} className="strategy-tag">
                    {strategy}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="portfolio-stats-section">
        <div className="portfolio-stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="portfolio-stat-card">
              <div className="portfolio-stat-number">{stat.number}</div>
              <div className="portfolio-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta-section">
        <div className="portfolio-cta-content">
          <h2 className="portfolio-cta-title">Sizin Markanız İçin Ne Yapabilirim?</h2>
          <p className="portfolio-cta-subtitle">
            Benzer başarı hikayelerini birlikte yazalım. Projeniz için hemen iletişime geçin.
          </p>
          <button className="portfolio-cta-button" onClick={() => navigate('/contact')}>
            Hemen İletişime Geçin
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="portfolio-footer-main-content">
          {/* Left Side - About */}
          <div className="portfolio-footer-about">
            <h4 className="portfolio-footer-brand">Tuba Sarıoğlu Busun</h4>
            <p className="portfolio-footer-role">Social Media Expert & Marka Danışmanı</p>
            <p className="portfolio-footer-description">
              Markaların dijital dünyada güçlenmesine yardımcı oluyor,
              stratejik içerikler ve yaratıcı kampanyalarla fark yaratıyorum.
            </p>
            <div className="portfolio-footer-location">
              <span className="location-icon">📍</span>
              <span>Denizli, Türkiye</span>
            </div>
          </div>

          {/* Middle - Quick Links */}
          <div className="portfolio-footer-links">
            <h4 className="portfolio-footer-heading">Hızlı Linkler</h4>
            <ul className="portfolio-footer-link-list">
              <li><a onClick={() => navigate('/')}>Ana Sayfa</a></li>
              <li><a onClick={() => navigate('/aboutme')}>Hakkımda</a></li>
              <li><a onClick={() => navigate('/services')}>Hizmetlerimiz</a></li>
              <li><a onClick={() => navigate('/blog')}>Blog</a></li>
              <li><a onClick={() => navigate('/contact')}>İletişim</a></li>
            </ul>
          </div>

          {/* Right Side - Contact */}
          <div className="portfolio-footer-contact">
            <h4 className="portfolio-footer-heading">İletişim</h4>
            <div className="portfolio-footer-contact-info">
              <p className="portfolio-footer-contact-item">
                <span className="portfolio-contact-icon">📧</span>
                <a href="mailto:testoglutest05@gmail.com">testoglutest05@gmail.com</a>
              </p>
              <p className="portfolio-footer-contact-item">
                <span className="portfolio-contact-icon">📷</span>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="portfolio-footer-bottom">
          <hr className="portfolio-footer-divider" />
          <div className="portfolio-footer-bottom-content">
            <p className="portfolio-footer-copyright">
              &copy; {new Date().getFullYear()} Tuba Sarıoğlu Busun. Tüm hakları saklıdır.
            </p>
            <div className="portfolio-footer-bottom-links">
              <a href="#" className="portfolio-footer-bottom-link">Gizlilik Politikası</a>
              <span className="portfolio-footer-separator">|</span>
              <a href="#" className="portfolio-footer-bottom-link">Kullanım Şartları</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
