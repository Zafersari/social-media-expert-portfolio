import { useNavigate } from "react-router-dom";
import "../styles/Portfolio.css";

function Portfolio() {
  const navigate = useNavigate();

  // 8 şirket için case study verileri
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

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="portfolio-nav">
        <div className="portfolio-nav-logo" onClick={() => navigate('/')}>
          <img src="logo.png" alt="Website Logo" />
        </div>
        <div className="portfolio-nav-menu">
          <a className="portfolio-nav-link" onClick={() => navigate('/services')}>HIZMETLERIMIZ</a>
          <a className="portfolio-nav-link" onClick={() => navigate('/aboutme')}>HAKKIMDA</a>
          <a className="portfolio-nav-link" onClick={() => navigate('/blog')}>BLOG</a>
          <a className="portfolio-nav-link" onClick={() => navigate('/contact')}>ILETISIM</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-content">
          <h1 className="portfolio-hero-title">Başarı Hikayeleri</h1>
          <p className="portfolio-hero-subtitle">
            Farklı sektörlerden markalarla gerçekleştirdiğim projeler ve elde edilen sonuçlar
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="case-studies-section">
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

      {/* CTA Section */}
      <section className="portfolio-cta-section">
        <h2 className="portfolio-cta-title">Sizin Markanız İçin Ne Yapabilirim?</h2>
        <p className="portfolio-cta-subtitle">
          Benzer başarı hikayelerini birlikte yazalım
        </p>
        <button className="portfolio-cta-button" onClick={() => navigate('/contact')}>
          Hemen İletişime Geçin
        </button>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="portfolio-footer-content">
          <div className="portfolio-footer-left">
            <h5 className="footer-name">Tuba Sarıoğlu Busun</h5>
            <p className="footer-role">Social Media Expert</p>
            <div className="footer-location">
              <span>📍</span>
              <span>Denizli, Turkey</span>
            </div>
          </div>
          <div className="portfolio-footer-right">
            <h5 className="footer-heading">Benimle İletişime Geçin</h5>
            <div className="footer-social">
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <span>📱</span>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <span>📷</span>
              </a>
              <a href="mailto:contact@example.com" className="footer-social-link">
                <span>✉️</span>
              </a>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Tuba Sarıoğlu Busun. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;