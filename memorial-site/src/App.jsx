import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

function Divider() {
  return (
    <div className="divider">
      <span className="divider-symbol">&#9753;</span>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-title">
          In Loving Memory<span>श्रद्धांजलि</span>
        </div>
        <button
          className={`nav-hamburger ${menuOpen ? 'nav-hamburger-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          <li><a href="#bio" onClick={closeMenu}>His Life</a></li>
          <li><a href="#family" onClick={closeMenu}>Family</a></li>
          <li><a href="#journey" onClick={closeMenu}>Journey</a></li>
          <li><a href="#wisdom" onClick={closeMenu}>Wisdom</a></li>
          <li><a href="#career" onClick={closeMenu}>Career</a></li>
          <li><a href="#values" onClick={closeMenu}>Values</a></li>
          <li><a href="#gallery" onClick={closeMenu}>Photos</a></li>
          <li><Link to="/memories" style={{ color: 'var(--gold)' }} onClick={closeMenu}>Memories</Link></li>
          <li><Link to="/lifestory" style={{ color: 'var(--gold)' }} onClick={closeMenu}>His Story</Link></li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-prayer fade-in">
          ॐ शान्ति शान्ति शान्ति
        </p>

        <div className="hero-photo-container fade-in">
          <img
            src={`${import.meta.env.BASE_URL}photos/IMG_2012.JPG`}
            alt="Umakant Bhargava"
          />
        </div>

        <h1 className="hero-name-hindi fade-in">उमाकांत भार्गव</h1>
        <p className="hero-name-english fade-in">Umakant Bhargava</p>
        <p className="hero-years fade-in">November 3, 1936 &ndash; April 28, 2021</p>
        <p className="hero-subtitle fade-in">
          Father, Engineer, Teacher, Pillar &mdash; The Strongest Man We Knew
        </p>

        <div className="hero-quote fade-in">
          <p className="hero-quote-hindi">
            &ldquo;जहाँ कॉर्नर्स कट किए, वो फेल करेगा ही करेगा&rdquo;
          </p>
          <p className="hero-quote-english">
            &ldquo;Wherever corners are cut, it will fail &mdash; it definitely will fail.&rdquo;
          </p>
        </div>

        <div className="hero-links fade-in">
          <Link to="/lifestory" className="hero-link hero-link-primary">
            Read His Life Story
          </Link>
          <a href="https://youtu.be/Xd5GJCP_Imk?si=FH3-Zq1sNYO8K-st" target="_blank" rel="noopener noreferrer" className="hero-link">
            &#9654; Watch Life Story Video
          </a>
          <a href="https://docs.google.com/presentation/d/1zLZF1dDYK6uexpDtZE9mHDfzbDHb1cDCgwQRI0yI_X0/edit" target="_blank" rel="noopener noreferrer" className="hero-link">
            Life Story Slides
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent('In loving memory of Umakant Bhargava (1936–2021). A life of precision, integrity, and quiet strength.\n\nhttps://mananb77.github.io/nana/')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link"
          >
            Share on WhatsApp
          </a>
          <Link to="/memories" className="hero-link">
            Leave a Memory
          </Link>
        </div>

        <a href="#bio" className="hero-scroll-hint fade-in" aria-label="Scroll down">
          <span className="hero-scroll-chevron">&#8964;</span>
        </a>
      </div>
    </section>
  );
}

function Bio() {
  const cards = [
    { label: 'Father', hindi: 'पिता' },
    { label: 'Engineer', hindi: 'इंजीनियर' },
    { label: 'Teacher', hindi: 'शिक्षक' },
    { label: 'Athlete', hindi: 'खिलाड़ी' },
  ];

  const personalityCards = [
    {
      label: 'Loving Father',
      hindi: 'प्यारे पिता',
      desc: 'Raised his family with quiet devotion. Not a man of many words, but every action showed how deeply he cared.',
    },
    {
      label: 'Teacher to Everyone',
      hindi: 'सबके शिक्षक',
      desc: 'Taught through doing, not lecturing. Whether it was engineering, health, or life — he led by example and everyone around him learned.',
    },
    {
      label: 'Mentally Strongest',
      hindi: 'सबसे मज़बूत मन',
      desc: 'The most mentally strong person in any room. Unshakeable resolve, calm under pressure, never rattled by anything life threw at him.',
    },
    {
      label: 'Discipline & Health',
      hindi: 'अनुशासन और स्वास्थ्य',
      desc: 'Daily exercise was non-negotiable. He believed taking care of your health was the foundation of everything — maintain a strong routine and always follow it.',
    },
    {
      label: 'Engineer',
      hindi: 'इंजीनियर',
      desc: 'Built India\'s defense and industrial infrastructure at BHEL Bhopal. Precision down to 0.1mm. No cutting corners — ever.',
    },
    {
      label: 'Athlete',
      hindi: 'खिलाड़ी',
      desc: 'Played sports every evening without fail. Volleyball, hockey, cricket — sports were never optional. His volleyball serve could knock someone out. Physical fitness was a way of life.',
    },
    {
      label: 'Meticulous Record-Keeper',
      hindi: 'सावधानीपूर्वक अभिलेखकर्ता',
      desc: 'Maintained a handwritten family tree with every birth date, birth time, and marriage date. Kept a complete phone book of contacts, all by hand. Precision extended from the factory floor to the family diary.',
    },
    {
      label: 'Quiet Introvert',
      hindi: 'शांत अंतर्मुखी',
      desc: 'An introverted man who let his actions speak. He didn\'t seek attention or fill rooms with words — but his quiet presence was the most reassuring force in any room.',
    },
    {
      label: 'Sharp Memory & Focus',
      hindi: 'तीक्ष्ण स्मृति और एकाग्रता',
      desc: 'Super intelligent with an amazing memory. He planned and calculated everything. Once focused, he never lost his train of thought — a mind as precise as the machines he built.',
    },
    {
      label: 'Lover of Simple Pleasures',
      hindi: 'सादगी के प्रेमी',
      desc: 'He loved moong dal, gardens, museums, and exploring new places. Adventure was always welcome. The simplest things brought him the greatest joy.',
    },
  ];

  return (
    <section className="bio" id="bio">
      <div className="section-inner">
        <h2 className="section-title fade-in">Who He Was</h2>
        <p className="section-title-hindi fade-in">वो कौन थे</p>

        <p className="bio-text fade-in">
          He was an engineer, and then a father &mdash; and he carried both roles
          with equal dedication for the rest of his life. A man who didn&rsquo;t say
          much but showed everything through what he did. He woke up early, exercised
          daily, and never broke his routine &mdash; because he believed the body
          and the mind had to be kept strong, always. He was the most mentally
          resilient person his family ever knew. Nothing shook him. He taught
          everyone around him not through speeches but through living: how to stay
          disciplined, how to face problems head-on, how to never take shortcuts.
          Born in Mount Abu, Rajasthan, a BITS Pilani graduate in Electrical Engineering (1959)
          who spent his career at BHEL Bhopal building India&rsquo;s infrastructure, he brought
          the same precision and integrity to his family that he brought to his work.
        </p>

        <p className="bio-text bio-text-hindi fade-in">
          माउंट आबू, राजस्थान में जन्मे, वे पहले इंजीनियर बने, फिर पिता &mdash; और दोनों भूमिकाएँ उन्होंने
          जीवन भर पूरी निष्ठा से निभाईं। एक ऐसे व्यक्ति जो ज़्यादा
          बोलते नहीं थे, लेकिन अपने हर काम से सब कुछ दिखाते थे। सुबह जल्दी
          उठते, रोज़ व्यायाम करते, और अपनी दिनचर्या कभी नहीं तोड़ते &mdash;
          क्योंकि उनका मानना था कि शरीर और मन दोनों को हमेशा मज़बूत रखना
          चाहिए। वे परिवार के सबसे मानसिक रूप से मज़बूत व्यक्ति थे। कुछ भी
          उन्हें हिला नहीं सकता था। उन्होंने सबको भाषणों से नहीं बल्कि जीकर
          सिखाया: अनुशासित कैसे रहें, समस्याओं का सामना कैसे करें, शॉर्टकट
          कभी न लें।
        </p>

        <div className="bio-nicknames fade-in">
          <span className="bio-nickname-label">Known As</span>
          {[
            { name: 'Bhargava Saab', context: 'at work' },
            { name: 'Papa', context: 'by daughters' },
            { name: 'Nana', context: 'by grandkids' },
            { name: 'U.K.', context: 'initials' },
            { name: 'Omi', context: 'childhood name' },
          ].map((n) => (
            <span className="bio-nickname-tag" key={n.name}>
              {n.name} <span className="bio-nickname-context">{n.context}</span>
            </span>
          ))}
        </div>

        <div className="bio-cards fade-in">
          {cards.map((card) => (
            <div className="bio-card" key={card.label}>
              <span className="bio-card-label">{card.label}</span>
              <span className="bio-card-hindi">{card.hindi}</span>
            </div>
          ))}
        </div>

        <div className="bio-personality-cards fade-in">
          {personalityCards.map((card) => (
            <div className="bio-personality-card" key={card.label}>
              <span className="bio-personality-label">{card.label}</span>
              <span className="bio-personality-hindi">{card.hindi}</span>
              <p className="bio-personality-desc">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="bio-cta fade-in">
          <Link to="/lifestory" className="bio-cta-link">
            Read His Full Life Story
            <span className="bio-cta-hindi">उनकी पूरी जीवन कहानी पढ़ें</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FamilyTree() {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="family-tree" id="family">
      <div className="section-inner">
        <h2 className="section-title fade-in">Our Family</h2>
        <p className="section-title-hindi fade-in">हमारा परिवार</p>

        <div className="ft fade-in">
          {/* Generation 1: Nana & Nani */}
          <div className="ft-gen ft-gen-center">
            <div className="ft-node ft-node-highlight">
              <span className="ft-name">Umakant Bhargava</span>
              <span className="ft-name-hindi">उमाकांत भार्गव</span>
              <span className="ft-years">1936 &ndash; 2021</span>
            </div>
            <span className="ft-amp">&amp;</span>
            <div className="ft-node ft-node-highlight">
              <span className="ft-name">Krishna Bhargava</span>
              <span className="ft-name-hindi">कृष्णा भार्गव</span>
              <span className="ft-years">1940 &ndash; 2021</span>
            </div>
          </div>

          <div className="ft-connector" />

          {/* Generation 2 & 3: Daughters, spouses, grandchildren */}
          <div className="ft-branches">
            {/* Branch 1: Anshu & Ravi */}
            <div className="ft-branch">
              <div className="ft-couple">
                <div className="ft-node">
                  <span className="ft-name">Anshu</span>
                  <span className="ft-name-hindi">अंशु</span>
                </div>
                <span className="ft-amp">&amp;</span>
                <div className="ft-node">
                  <span className="ft-name">Ravi Bhargava</span>
                  <span className="ft-name-hindi">रवि भार्गव</span>
                </div>
              </div>
              <div className="ft-connector ft-connector-sm" />
              <div className="ft-grandchildren">
                <div className="ft-leaf">
                  <span className="ft-name">Ankita</span>
                  <span className="ft-name-hindi">अंकिता</span>
                </div>
                <div className="ft-leaf">
                  <span className="ft-name">Rishabh</span>
                  <span className="ft-name-hindi">ऋषभ</span>
                </div>
              </div>
            </div>

            {/* Branch 2: Aparna & Harsh */}
            <div className="ft-branch">
              <div className="ft-couple">
                <div className="ft-node">
                  <span className="ft-name">Aparna &ldquo;Bebu&rdquo;</span>
                  <span className="ft-name-hindi">अपर्णा &ldquo;बेबू&rdquo;</span>
                </div>
                <span className="ft-amp">&amp;</span>
                <div className="ft-node">
                  <span className="ft-name">Harsh</span>
                  <span className="ft-name-hindi">हर्ष</span>
                </div>
              </div>
              <div className="ft-connector ft-connector-sm" />
              <div className="ft-grandchildren">
                <div className="ft-leaf">
                  <span className="ft-name">Naman</span>
                  <span className="ft-name-hindi">नमन</span>
                </div>
                <div className="ft-leaf">
                  <span className="ft-name">Manan</span>
                  <span className="ft-name-hindi">मनन</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ft-artifacts fade-in">
          <img
            className="ft-artifact-image"
            src={`${base}photos/Nana-Family-Tree-Handwritten.jpg`}
            alt="Nana's handwritten family tree from his BHEL diary, January 1995"
          />
          <p className="ft-artifact-caption">
            He recorded every birth date, birth time, and marriage date by hand in his BHEL diary
          </p>
          <div className="ft-artifact-links">
            <a
              href="https://drive.google.com/file/d/10yweuik17f-Zn6e6QwfKYJ00ZiECCuVC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ft-artifact-link"
            >
              View Full Family Tree
            </a>
            <a
              href="https://drive.google.com/file/d/1Vw7D6h5XPx5yqQ04gDReqJ677D72JF0u/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ft-artifact-link"
            >
              View His Phone Book
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndiaMap() {
  const cities = [
    { name: 'Mount Abu', x: 295, y: 365, primary: true },
    { name: 'Jaipur', x: 358, y: 330, primary: true },
    { name: 'Pilani', x: 370, y: 300 },
    { name: 'Bhopal', x: 420, y: 420, primary: true },
    { name: 'Hyderabad', x: 430, y: 540 },
    { name: 'Mumbai', x: 340, y: 510, primary: true },
    { name: 'Pune', x: 360, y: 530 },
    { name: 'Ankleshwar', x: 325, y: 440 },
    { name: 'Hazaribagh', x: 540, y: 390 },
  ];

  return (
    <div className="india-map-container fade-in">
      <svg viewBox="0 0 1024 1024" className="india-map" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(0,1024) scale(0.1,-0.1)">
          <path
            d="M4040 10225 c-14 -8 -40 -14 -58 -15 -64 0 -119 -22 -173 -66 -57
-47 -124 -77 -199 -89 -25 -4 -89 -29 -142 -56 l-97 -49 -17 -56 c-9 -33 -30
-71 -49 -92 -31 -34 -35 -36 -121 -42 -71 -5 -104 -13 -158 -38 -83 -39 -130
-40 -211 -7 -33 14 -91 30 -130 36 -38 6 -86 19 -106 29 -46 24 -69 26 -152
16 -65 -8 -68 -10 -82 -43 -21 -50 -19 -76 10 -103 16 -15 25 -35 25 -54 0
-17 7 -40 15 -50 22 -30 18 -58 -12 -82 -27 -21 -27 -24 -16 -65 10 -38 9 -50
-8 -88 -10 -24 -19 -51 -19 -60 0 -9 28 -44 63 -77 101 -97 102 -98 156 -95
54 2 47 11 67 -89 5 -26 12 -32 57 -44 29 -8 69 -17 90 -21 43 -7 49 -28 18
-66 -15 -19 -30 -24 -84 -27 -62 -4 -67 -6 -95 -42 -17 -20 -45 -43 -63 -50
l-32 -13 5 -123 c5 -137 -1 -162 -49 -196 -17 -13 -61 -60 -97 -106 -50 -63
-66 -90 -66 -115 0 -57 -9 -71 -56 -91 -58 -24 -107 -86 -205 -257 -77 -134
-85 -141 -164 -154 -64 -11 -92 -30 -110 -78 -10 -27 -34 -58 -60 -80 -54 -45
-101 -127 -110 -190 -4 -26 -12 -50 -17 -53 -5 -3 -30 2 -54 11 -31 12 -58 15
-87 11 -23 -4 -83 -9 -134 -12 l-92 -6 -3 49 c-3 47 -4 48 -38 51 -54 4 -102
-41 -136 -128 -25 -64 -34 -75 -96 -121 -37 -28 -68 -57 -68 -63 0 -7 -9 -21
-21 -32 -12 -10 -30 -31 -40 -46 -25 -35 -12 -72 33 -91 18 -8 44 -26 58 -41
21 -23 30 -26 61 -21 31 5 39 3 52 -16 17 -24 14 -65 -9 -111 -24 -47 -17 -87
27 -160 l41 -68 54 0 c53 0 54 0 54 -30 0 -16 11 -64 25 -107 14 -43 25 -94
25 -114 0 -28 6 -39 25 -49 22 -12 24 -18 19 -49 -3 -20 -15 -44 -26 -54 -17
-14 -19 -22 -11 -39 7 -16 5 -30 -6 -50 -14 -24 -23 -28 -58 -28 -36 0 -44 4
-48 23 -6 22 -7 22 -100 13 -78 -8 -96 -13 -101 -28 -9 -28 -70 -24 -118 10
-41 28 -41 28 -281 35 l-50 2 -3 -46 c-3 -43 -5 -47 -34 -53 -17 -3 -49 -6
-73 -6 -46 0 -82 -27 -72 -55 8 -20 122 -20 157 0 32 18 40 18 40 1 0 -8 -17
-20 -37 -27 -21 -6 -44 -16 -50 -22 -24 -18 -14 -76 27 -157 35 -69 44 -80 66
-80 15 0 48 -16 73 -35 56 -40 109 -54 211 -53 69 1 78 3 107 31 28 26 37 29
77 25 25 -3 49 -1 55 5 7 7 12 5 17 -7 10 -27 -46 -107 -104 -147 -38 -27 -65
-38 -106 -42 -31 -3 -66 -13 -78 -21 -35 -25 -95 -20 -130 9 -16 14 -35 25
-42 25 -18 0 -36 -21 -36 -42 0 -25 74 -143 125 -198 22 -25 57 -70 78 -100
20 -30 95 -123 166 -206 116 -135 134 -152 168 -157 26 -5 45 -2 62 9 17 12
37 15 73 11 41 -5 61 -1 126 27 42 19 87 37 99 40 12 4 31 18 42 32 13 16 29
24 51 24 38 0 69 32 70 73 0 19 12 38 40 63 47 43 51 76 20 147 l-21 46 27 63
c24 59 38 77 57 78 4 0 7 -6 7 -12 0 -28 17 -40 37 -30 11 6 25 7 33 2 11 -7
7 -15 -19 -39 -28 -26 -32 -36 -26 -59 3 -15 7 -43 9 -62 1 -19 8 -46 15 -59
11 -20 19 -23 49 -18 21 3 45 8 56 13 14 5 17 3 14 -7 -5 -14 -26 -23 -80 -34
-21 -4 -34 -18 -53 -55 -31 -62 -32 -87 -1 -101 21 -10 25 -20 31 -83 3 -39
13 -82 22 -94 18 -29 11 -62 -22 -114 -14 -20 -29 -56 -35 -80 -21 -93 -3
-256 34 -296 18 -20 17 -22 -9 -57 -27 -34 -27 -36 -10 -55 10 -11 31 -20 47
-20 25 0 28 -4 28 -31 0 -16 -9 -47 -19 -67 -39 -76 -41 -97 -15 -136 20 -29
23 -40 14 -56 -9 -17 -7 -28 9 -54 15 -24 21 -50 21 -95 0 -54 4 -68 35 -113
35 -50 40 -76 15 -70 -7 1 -9 -4 -6 -15 19 -62 27 -127 36 -272 l10 -164 75
-115 c59 -90 75 -122 75 -151 0 -28 9 -48 40 -85 22 -26 40 -59 40 -71 0 -15
11 -32 30 -45 38 -27 86 -128 95 -200 4 -30 18 -74 31 -97 18 -31 24 -57 24
-100 0 -32 5 -76 10 -98 6 -22 15 -74 20 -115 7 -49 22 -99 44 -145 19 -38 41
-95 50 -125 11 -37 48 -101 116 -199 55 -79 100 -148 100 -154 0 -5 15 -44 34
-87 19 -42 37 -99 41 -126 10 -74 25 -114 62 -169 20 -30 33 -62 33 -81 0 -25
12 -42 59 -87 70 -67 104 -142 56 -124 -8 4 -15 18 -15 32 0 20 -5 25 -25 25
-25 0 -33 -14 -15 -25 6 -3 10 -35 10 -71 0 -57 4 -71 31 -110 17 -25 42 -73
56 -107 31 -77 123 -175 207 -220 33 -18 68 -45 80 -64 27 -42 49 -41 97 2 22
19 49 35 61 35 13 0 43 23 80 61 53 56 58 65 58 107 0 34 8 60 32 99 36 59 58
71 161 83 41 5 76 15 87 25 21 19 72 15 122 -11 43 -22 68 -18 68 11 0 21 -8
27 -66 45 -36 11 -72 20 -80 20 -16 0 -34 31 -34 58 0 10 15 39 33 63 44 57
107 171 107 192 0 13 10 16 53 16 28 -1 59 0 67 0 8 1 27 -1 42 -5 24 -5 29
-2 44 30 15 31 16 44 6 98 -9 44 -9 89 -3 147 8 77 7 88 -13 125 -27 52 -29
193 -4 241 9 17 19 48 23 69 5 26 15 41 32 49 26 12 61 73 99 174 19 50 24 83
24 153 0 88 0 89 -34 117 -18 15 -39 38 -45 51 -15 28 -7 114 16 187 19 58 18
121 -2 170 -18 41 -19 137 -4 203 6 26 27 83 46 128 39 87 60 106 136 119 l39
6 -7 75 c-5 50 -4 74 3 74 20 0 42 -44 42 -85 0 -46 14 -65 45 -65 28 0 46 21
84 96 44 86 46 88 146 79 l85 -7 64 52 c64 50 116 104 116 120 0 4 -13 13 -30
20 -20 8 -30 19 -30 34 0 34 56 104 90 111 16 3 39 14 52 24 13 10 57 35 98
55 113 56 136 75 189 151 53 76 137 153 189 174 22 9 50 39 87 92 31 43 74 92
98 111 53 41 54 42 62 96 4 27 20 61 42 90 31 41 43 49 92 60 62 14 95 37 73
51 -7 4 -24 6 -38 3 -19 -3 -24 0 -24 15 0 48 80 74 118 40 24 -22 54 -21 100
2 20 10 53 22 72 26 77 16 119 49 194 148 25 34 36 59 36 83 0 28 6 38 30 52
37 21 38 45 4 77 l-27 25 13 92 c10 79 17 100 46 139 35 48 59 59 131 59 47 0
148 62 169 103 10 17 20 74 24 132 8 89 13 108 39 150 16 26 39 54 49 61 18
12 20 11 24 -10 6 -27 -5 -50 -38 -86 -30 -32 -45 -156 -24 -195 8 -16 11 -43
7 -79 -6 -62 8 -83 31 -48 8 12 25 22 38 22 18 0 23 6 26 31 4 39 29 59 52 40
11 -9 16 -30 16 -62 0 -52 19 -67 39 -31 7 12 22 17 53 17 36 0 43 3 46 21 2
16 -5 23 -30 30 -27 8 -34 15 -36 42 -3 28 0 32 21 32 23 0 24 3 20 53 -2 28
-9 74 -14 101 -5 27 -7 76 -3 108 l7 58 -32 0 c-34 0 -35 2 -32 71 2 40 0 46
-23 57 -15 6 -26 20 -26 31 0 10 -12 45 -27 77 -24 52 -25 62 -15 101 7 24 12
72 12 106 l0 63 -55 27 c-31 15 -68 27 -84 27 -48 0 -81 71 -46 100 8 7 15 23
15 36 0 20 5 24 29 24 34 0 48 15 53 55 l3 30 66 -3 c50 -2 69 1 79 13 11 13
9 20 -14 44 -15 15 -30 41 -35 57 -6 25 -13 29 -49 32 -29 2 -43 8 -47 21 -11
36 -53 71 -84 71 -40 0 -45 12 -21 52 11 18 20 41 20 50 0 9 18 29 40 45 42
30 51 63 29 105 -6 11 -8 22 -5 25 10 10 92 -27 116 -52 28 -30 70 -34 70 -6
0 35 46 14 66 -31 21 -46 67 -88 97 -88 11 0 31 10 44 22 14 13 27 18 33 12 5
-5 21 -65 35 -134 24 -118 28 -127 62 -156 30 -27 49 -33 122 -44 87 -12 420
-9 513 5 43 6 51 4 108 -35 l61 -41 -29 -34 c-22 -24 -31 -48 -36 -88 -7 -51
-11 -59 -74 -119 -37 -35 -85 -72 -107 -82 -46 -21 -92 -72 -105 -115 -6 -23
-3 -36 16 -65 20 -29 24 -47 24 -106 0 -86 12 -115 40 -100 11 6 20 20 20 30
0 31 18 24 25 -10 7 -32 30 -39 66 -20 16 9 19 22 19 77 0 64 1 67 40 104 26
25 40 47 40 64 0 23 3 25 50 25 61 0 65 -5 86 -142 9 -57 31 -143 49 -193 18
-49 40 -116 49 -148 10 -35 24 -60 34 -64 9 -4 34 -17 56 -31 44 -27 62 -19
47 20 -8 21 -5 32 14 58 22 30 23 34 9 72 -8 24 -14 78 -14 130 0 78 3 92 20
106 11 10 24 38 29 65 5 26 17 57 27 68 21 23 26 120 10 173 -8 27 -7 29 14
23 13 -3 36 1 53 9 28 15 30 14 56 -10 23 -22 31 -24 56 -17 68 20 67 19 60
80 -6 52 -3 61 35 136 23 44 58 97 77 119 33 36 35 42 30 89 -5 35 -14 59 -32
77 -40 41 -33 69 27 110 29 19 60 49 69 65 26 44 40 148 33 245 -6 106 6 137
53 132 26 -3 36 3 58 32 15 20 36 36 47 36 13 0 24 11 31 29 6 17 21 32 33 35
12 3 46 32 75 63 53 57 55 58 91 49 31 -8 41 -6 58 9 19 17 25 18 53 6 46 -19
94 -25 101 -12 4 6 -13 33 -38 59 -26 27 -46 56 -46 64 0 9 21 33 48 54 75 60
81 71 79 141 -1 59 -3 63 -27 68 -15 3 -42 5 -61 4 -19 -1 -52 7 -76 19 -53
27 -85 28 -108 2 -10 -11 -26 -20 -37 -20 -15 0 -18 8 -18 57 0 50 4 61 31 89
l30 31 -38 32 c-25 21 -46 31 -60 28 -13 -2 -29 3 -40 15 -18 20 -11 34 21 40
37 6 26 23 -29 46 -76 31 -104 28 -158 -13 -29 -22 -57 -35 -76 -35 -23 0 -31
-5 -31 -18 0 -11 -8 -26 -17 -35 -25 -21 -118 -5 -153 28 -45 42 -76 41 -98
-2 -7 -12 -32 -29 -56 -38 -34 -13 -45 -23 -50 -45 -4 -22 -12 -29 -32 -32
-20 -2 -30 -11 -38 -33 -23 -62 -35 -75 -72 -75 -70 0 -154 -52 -154 -96 0
-45 -20 -69 -70 -87 -27 -10 -60 -30 -73 -45 -14 -15 -38 -42 -53 -59 -25 -28
-39 -34 -104 -44 -49 -7 -82 -18 -96 -31 -19 -17 -29 -18 -65 -11 -38 7 -44
12 -47 36 -3 21 -11 29 -41 37 -21 6 -44 17 -51 25 -15 18 -36 19 -47 2 -4 -7
-20 -20 -35 -29 -23 -15 -28 -15 -38 -3 -16 19 -60 19 -96 0 -27 -14 -29 -13
-33 3 -4 22 -31 52 -46 52 -7 0 -20 9 -29 19 -30 33 -79 35 -132 7 -26 -14
-69 -30 -96 -37 -44 -12 -52 -19 -78 -65 -19 -33 -30 -66 -30 -90 0 -36 -5
-43 -67 -91 -86 -66 -96 -61 -92 51 2 58 -1 87 -11 104 -17 26 -55 29 -86 8
-11 -8 -43 -16 -69 -18 l-49 -3 -13 -65 c-7 -36 -20 -102 -29 -148 l-15 -83
25 -30 c31 -36 33 -75 6 -109 -12 -16 -20 -41 -20 -67 0 -42 0 -42 -26 -31
-20 9 -27 9 -34 -2 -5 -8 -30 -13 -68 -14 -33 -1 -67 -7 -75 -15 -20 -16 -57
-6 -75 20 -16 23 -58 25 -66 4 -7 -20 -23 -19 -92 9 -71 28 -217 51 -273 41
-39 -6 -40 -6 -49 27 -10 40 -40 48 -88 22 -33 -18 -34 -18 -58 5 -18 17 -32
22 -49 17 -18 -4 -31 2 -53 25 -86 91 -237 189 -291 189 -7 0 -27 -10 -44 -22
-26 -19 -33 -21 -62 -10 -45 16 -56 15 -101 -9 l-38 -20 -54 25 c-30 14 -70
26 -89 26 -26 0 -38 7 -55 31 -21 28 -26 30 -77 28 -53 -3 -57 -1 -110 45 -49
44 -57 47 -79 37 -42 -19 -60 -13 -120 37 -45 38 -60 58 -68 91 -10 39 -15 44
-71 66 -33 14 -73 34 -89 46 -23 17 -37 20 -76 16 -40 -5 -50 -2 -67 16 -10
12 -35 34 -54 49 l-34 28 28 21 c28 21 28 23 21 98 -6 73 -5 78 20 108 14 17
26 40 26 52 0 14 12 26 37 38 24 12 44 31 54 53 10 19 29 46 43 59 54 51 28
84 -123 156 l-62 29 2 41 c3 51 -5 65 -38 65 -15 0 -37 10 -50 22 -16 15 -42
24 -86 29 -53 6 -66 12 -91 41 -15 18 -35 49 -43 68 -31 71 -65 88 -104 49
-27 -27 -33 -20 -20 29 9 30 8 47 -3 73 -8 19 -17 53 -21 77 -5 28 -13 46 -25
50 -25 10 -68 74 -75 115 -5 23 -1 45 9 65 30 57 66 59 95 5 6 -13 30 -32 53
-44 l41 -21 71 50 c72 51 89 79 70 120 -4 10 -12 35 -18 56 -10 37 -15 41 -59
52 -56 14 -87 38 -87 67 0 12 -10 32 -22 45 -19 19 -23 34 -22 79 2 49 5 57
35 83 25 20 49 29 87 33 30 3 56 8 58 10 3 2 11 37 18 76 16 81 36 111 76 111
30 0 80 34 80 55 0 7 16 44 35 81 19 37 35 81 35 98 0 17 9 45 20 61 26 39 26
75 1 75 -10 0 -38 -7 -61 -15 -23 -8 -44 -15 -45 -15 -1 0 -8 13 -15 29 -8 21
-21 32 -43 37 -43 9 -67 32 -67 64 0 15 -6 33 -14 39 -23 19 -79 23 -106 6z"
            fill="var(--sky-blue)"
            fillOpacity="0.15"
            stroke="var(--sky-blue-deep)"
            strokeWidth="8"
            strokeOpacity="0.4"
          />
        </g>

        <polyline
          points={cities.map(c => `${c.x},${c.y}`).join(' ')}
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeDasharray="6,4"
          opacity="0.5"
        />

        {cities.map((city) => (
          <g key={city.name}>
            {city.primary && (
              <circle
                cx={city.x}
                cy={city.y}
                r="14"
                fill="none"
                stroke={city.name === 'Bhopal' ? 'var(--gold)' : 'var(--sky-blue-deep)'}
                strokeWidth="1"
                opacity="0.3"
              />
            )}
            <circle
              cx={city.x}
              cy={city.y}
              r={city.primary ? 6 : 4}
              fill={city.name === 'Bhopal' ? 'var(--gold)' : (city.name === 'Jaipur' || city.name === 'Mount Abu') ? 'var(--sky-blue-deep)' : 'var(--navy)'}
              opacity={city.primary ? 1 : 0.7}
            />
            <text
              x={city.x + (city.name === 'Bhopal' ? 16 : city.name === 'Mount Abu' ? -16 : 0)}
              y={city.y + (city.name === 'Mount Abu' ? 22 : -12)}
              textAnchor="middle"
              className="india-map-label"
              fill="var(--navy)"
              fontSize={city.primary ? '22' : '18'}
              fontWeight={city.primary ? '600' : '400'}
            >
              {city.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function Timeline() {
  const stops = [
    {
      years: '1936',
      city: 'Born — Mount Abu, Rajasthan',
      desc: 'November 3rd, 1936. Born in Mount Abu into a family that would shape a generation of Indian engineers. Moved to Jaipur mid-5th grade, lived near Hawa Mahal.',
      hindi: '3 नवंबर, 1936। माउंट आबू में जन्म, एक ऐसे परिवार में जिसने भारतीय इंजीनियरों की एक पीढ़ी को आकार दिया। पाँचवीं कक्षा के बीच में जयपुर चले गए, हवा महल के पास रहे।',
    },
    {
      years: '1951–1955',
      city: 'Maharaja College, Jaipur',
      desc: 'Education at Maharaja College with 4,000 students. Sports, mathematics, volleyball. The Principal\'s legendary calculus class — he taught math through humor and engagement.',
      hindi: 'महाराजा कॉलेज में शिक्षा, 4,000 छात्रों के साथ। खेलकूद, गणित, वॉलीबॉल। प्रधानाचार्य की प्रसिद्ध कैलकुलस कक्षा — हास्य और जुड़ाव के माध्यम से गणित पढ़ाते थे।',
    },
    {
      years: '1955–1959',
      city: 'BITS Pilani',
      desc: 'Electrical Engineering degree at Birla Institute of Technology and Science. Hostel life with 144 students, hands-on training on lathes and milling machines, mandatory sports every evening, lifelong friendships. Professors followed a self-discovery teaching philosophy — "I will not tell you that this is like this" — expecting students to figure things out themselves. The Central Research Institute opened in his 3rd year.',
      hindi: 'बिर्ला इंस्टीट्यूट ऑफ टेक्नोलॉजी एंड साइंस में इलेक्ट्रिकल इंजीनियरिंग की डिग्री। 144 छात्रों के साथ हॉस्टल जीवन, लेथ और मिलिंग मशीनों पर प्रशिक्षण, अनिवार्य खेल, आजीवन मित्रता। तीसरे वर्ष में सेंट्रल रिसर्च इंस्टीट्यूट खुला।',
    },
    {
      years: '1959+',
      city: 'BHEL, Bhopal',
      desc: 'Joined Bharat Heavy Electricals Limited. Training, early career in India\'s flagship public sector enterprise manufacturing power plant equipment and heavy machinery.',
      hindi: 'भारत हेवी इलेक्ट्रिकल्स लिमिटेड में शामिल हुए। भारत के प्रमुख सार्वजनिक क्षेत्र के उपक्रम में प्रशिक्षण और प्रारंभिक करियर।',
    },
    {
      years: 'Various',
      city: 'Field Assignments',
      desc: 'Hyderabad, Ankleshwar, Hazaribagh, UP, Pune, Ooty — cathodic protection, pipeline work, traction systems across India.',
      hindi: 'हैदराबाद, अंकलेश्वर, हज़ारीबाग, यूपी, पुणे, ऊटी — कैथोडिक प्रोटेक्शन, पाइपलाइन कार्य, पूरे भारत में ट्रैक्शन सिस्टम।',
    },
    {
      years: '1980s',
      city: 'Arjun Battle Tank',
      desc: 'Assembly coordinator for India\'s indigenous tank. Reviewed 10,000 drawings, coordinated 7,000–8,000 parts, assembled 2 prototypes. Identified critical design flaws.',
      hindi: 'भारत के स्वदेशी टैंक के असेंबली समन्वयक। 10,000 ड्रॉइंग की समीक्षा, 7,000-8,000 पुर्जों का समन्वय, 2 प्रोटोटाइप असेंबल किए। महत्वपूर्ण डिज़ाइन दोषों की पहचान।',
    },
    {
      years: '~4 months',
      city: 'United Kingdom',
      desc: 'International experience working on traction control systems. Exposure to different engineering approaches and international best practices.',
      hindi: 'ट्रैक्शन कंट्रोल सिस्टम पर काम करते हुए अंतर्राष्ट्रीय अनुभव। विभिन्न इंजीनियरिंग दृष्टिकोण और अंतर्राष्ट्रीय सर्वोत्तम प्रथाओं से परिचय।',
    },
    {
      years: 'Post-career',
      city: 'Retirement',
      desc: 'Retired from BHEL. Continued sharing wisdom, stories, and engineering principles with family and the next generation.',
      hindi: 'भेल से सेवानिवृत्त। परिवार और अगली पीढ़ी के साथ ज्ञान, कहानियाँ और इंजीनियरिंग सिद्धांत साझा करते रहे।',
    },
    {
      years: 'April 28, 2021',
      city: 'Passed Away',
      desc: 'Left us at the age of 84, leaving behind a legacy of precision, integrity, and service to the nation.',
      hindi: '84 वर्ष की आयु में हमें छोड़ गए, सटीकता, ईमानदारी और राष्ट्र सेवा की विरासत छोड़कर।',
    },
  ];

  return (
    <section className="timeline" id="journey">
      <div className="section-inner">
        <h2 className="section-title fade-in">His Journey</h2>
        <p className="section-title-hindi fade-in">उनकी यात्रा</p>

        <IndiaMap />

        <div className="timeline-container">
          {stops.map((stop, i) => (
            <div className="timeline-item fade-in" key={i}>
              <div className="timeline-dot" />
              <div className="timeline-years">{stop.years}</div>
              <h3 className="timeline-city">{stop.city}</h3>
              <p className="timeline-desc">{stop.desc}</p>
              <p className="timeline-desc-hindi">{stop.hindi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quotes() {
  const quotes = [
    {
      hindi: '"बातें कम, खाना ज़्यादा।"',
      english: '"Talk less, eat more."',
      context: 'What he always told the grandkids at every meal',
    },
    {
      hindi: '"ठीक है, ख़त्म हो जाए। आज अच्छा खाना खाते हैं।"',
      english: '"Fine, let it end. Today we eat well."',
      context: 'When the world was predicted to end — his response',
    },
    {
      hindi: '"जहाँ कॉर्नर्स कट किए, वो फेल करेगा ही करेगा।"',
      english: '"Wherever corners are cut, it will fail — it definitely will fail."',
      context: 'On engineering and life — no shortcuts',
    },
    {
      hindi: '"जहाँ पर भी स्ट्रेस आता है, वहाँ पे प्रॉब्लम आएगी।"',
      english: '"Wherever there is stress, there will be problems."',
      context: 'On forced components and forced decisions — true for machines, true for people',
    },
    {
      hindi: '"जब भी हम अच्छा खाना खाते हैं, ज़िंदगी भर याद रहता है।"',
      english: '"Whenever we eat good food, we remember it for the rest of our lives."',
      context: 'On the lasting power of shared meals',
    },
    {
      hindi: '"साहब ये देखिए — इसमें कुछ प्रॉब्लम है।"',
      english: '"Sir, please see — there seems to be some problem in this."',
      context: 'On professional communication — question diplomatically, never accuse',
    },
    {
      hindi: '"70 डिग्री टेम्परेचर के ऊपर उसका जो ड्राइवर है वो कैसे चलाएगा?"',
      english: '"At 70 degrees, how will the driver operate it?"',
      context: 'On asking the questions nobody else thought to ask',
    },
    {
      hindi: '"देखिए कंपोनेंट अगर अच्छा बना हुआ होगा तो उसके ऊपर पेंटिंग भी अच्छी दिखेगी।"',
      english: '"If a component is made well, the painting on it will also look good."',
      context: 'On quality at the foundation — get the base right and everything else follows',
    },
    {
      hindi: '"नानी जो यात्रा कर रही हैं वो उनकी है। हम बस अपना हिस्सा कर सकते हैं।"',
      english: '"The journey Nani is going through is hers. We can only do our part."',
      context: 'On compassion and acceptance — spoken about Nani\'s health journey',
    },
  ];

  return (
    <section className="quotes" id="wisdom">
      <div className="section-inner">
        <h2 className="section-title fade-in">In His Own Words</h2>
        <p className="section-title-hindi fade-in">उनकी अपनी ज़ुबानी</p>

        <div className="quotes-grid">
          {quotes.map((q, i) => (
            <div className="quote-card fade-in" key={i}>
              <p className="quote-hindi">{q.hindi}</p>
              <p className="quote-english">{q.english}</p>
              <p className="quote-context">{q.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Career() {
  const projects = [
    {
      title: 'Arjun Battle Tank',
      hindi: 'अर्जुन युद्ध टैंक',
      desc: 'Coordinated assembly of India\'s indigenous tank at BHEL Bhopal. Reviewed 10,000 drawings, managed 7,000–8,000 parts across 100 sub-assemblies, and assembled 2 prototypes. Identified critical design flaws: loose bolts, missing track locks, excessive steel thickness, and three different components designed for the same application.',
    },
    {
      title: 'Traction Control Systems',
      hindi: 'ट्रैक्शन कंट्रोल सिस्टम',
      desc: 'Powered Mumbai\'s suburban trains. High-voltage precision control systems with mechanical switching. Conducted forced-type testing of every item — 1 million+ cycle mechanical tests to ensure reliability for millions of daily commuters.',
    },
    {
      title: 'Cathodic Protection',
      hindi: 'कैथोडिक प्रोटेक्शन',
      desc: 'Protected oil pipelines from Hazira (Gujarat) to UP. Prevented corrosion through electrochemistry — installing anodes to redirect current flow away from pipelines. Took a boat to the jetty at Ankleshwar for the first time to oversee pipeline installation.',
    },
  ];

  return (
    <section className="kitchen" id="career">
      <div className="section-inner">
        <h2 className="section-title fade-in">His Engineering Legacy</h2>
        <p className="section-title-hindi fade-in">उनकी इंजीनियरिंग विरासत</p>

        <p className="kitchen-text fade-in">
          His career at Bharat Heavy Electricals Limited spanned critical decades
          in India&rsquo;s industrial development. From defense systems to railway
          infrastructure to pipeline protection, his work touched multiple sectors
          of India&rsquo;s growing industrial base. He worked without modern
          computers, without CNC machines, without email &mdash; but with deep
          technical knowledge, practical skills, and an uncompromising dedication
          to quality.
        </p>

        <div className="kitchen-cards fade-in">
          {projects.map((project) => (
            <div className="kitchen-card" key={project.title}>
              <h3 className="kitchen-card-title">{project.title}</h3>
              <span className="kitchen-card-hindi">{project.hindi}</span>
              <p className="kitchen-card-desc">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stories() {
  const stories = [
    {
      title: 'The Mango Pit Prank',
      hindi: 'आम की गुठली का मज़ाक',
      desc: 'Ate the mangoes, then blew air into 10–12 mango pits to inflate them like little balloons and left them arranged outside. When people rushed to grab what looked like fresh mangoes, they discovered the deception. It became a legendary campus joke.',
    },
    {
      title: 'The End-of-World Feast',
      hindi: 'दुनिया के अंत का भोज',
      desc: 'When a prophecy circulated that the world was going to end, the response was pragmatic: "Fine, let it end. But today, let\'s eat good food." They had an excellent meal. Nothing happened.',
    },
    {
      title: 'The 11 PM Cook',
      hindi: 'रात 11 बजे का रसोइया',
      desc: 'When the cook left, five bachelors attempted khichdi with disastrous results. When he returned at 11 PM, everyone was playing bridge, starving. He cooked a proper meal at midnight.',
    },
    {
      title: 'The Disappearing Snacks',
      hindi: 'गायब होते नाश्ते',
      desc: 'Hostel rooms were just 8×8ft each — two rooms on each side of a gallery hallway, divided by jali (cemented lattice) walls so you could hear the person next door. A thakhat for sleeping, an almari for books, a table, and a chair. When someone received a care package from home, coordinated raids ensured everything was shared — and finished — together.',
    },
    {
      title: 'The 30-Paratha Record',
      hindi: '30 पराठों का रिकॉर्ड',
      desc: 'Food came in pressed thalis, 15–16 people per table on benches. Rotis were made on a 4-foot diameter thava — 300 people\'s food cooked in 30 minutes. Each roti got a stamp of ghee, and everyone ate 15–20 rotis per meal. Ghee went into the dal too. One student ate 30 aloo parathas in a single sitting — a hostel record. Average potato consumption: half a kilo per person per day. And the laddoos were 3 inches across.',
    },
    {
      title: 'The Unswept Room',
      hindi: 'बिना झाड़ू का कमरा',
      desc: 'Bachelor days in Pune: a 10×12 ft room, swept once in six months. "There was simply no thought process about surroundings — the focus was entirely on work."',
    },
    {
      title: 'Gamboots & Rainy Season',
      hindi: 'गमबूट और बारिश का मौसम',
      desc: 'During monsoon, gamboots were essential for walking through the flooded BHEL campus. In the evenings, food huts would set up right in front of BHEL — a ritual everyone looked forward to.',
    },
    {
      title: 'Vishwakarma Day',
      hindi: 'विश्वकर्मा दिवस',
      desc: 'Every year at BHEL, the machines received a pooja on Vishwakarma Day — the annual tools ceremony honoring the god of craftsmen. The entire factory floor would stop to pay respect to the machines that built India.',
    },
    {
      title: 'The Monday Holiday',
      hindi: 'सोमवार की छुट्टी',
      desc: 'BHEL Training School ran 7am to 4pm with Monday off instead of Sunday. In the common room, it was table tennis alongside bridge, carrom, and chess — the competitive spirit never stopped.',
    },
    {
      title: 'Nana at Home',
      hindi: 'घर पर नाना',
      desc: 'He cooked garam pani and saac, and always fed Nani first. He managed all her medicines and medical reports. Financial planning was meticulous — BHEL paperwork, selling shares, always planned 5 years ahead. The soap bottle was never empty, every container always full. He took out the trash, tended the garden, vacuumed the house. Before lockdown, gajak packets were sent out by April 10th. He even taught many people how to order things online.',
    },
    {
      title: 'The Maruti Suzuki',
      hindi: 'मारुति सुज़ुकी',
      desc: 'His beloved car with its manual steering wheel. He cleaned the car himself — windows washed, everything spotless. And when the time came, he was the one who approved Mummy\'s driving.',
    },
  ];

  return (
    <section className="learner" id="stories">
      <div className="section-inner">
        <h2 className="section-title fade-in">Memorable Stories</h2>
        <p className="section-title-hindi fade-in">यादगार किस्से</p>

        <div className="learner-grid">
          {stories.map((story, i) => (
            <div className="learner-card fade-in" key={i}>
              <div className="learner-subject">{story.title}</div>
              <div className="learner-hindi">{story.hindi}</div>
              <div className="learner-detail">{story.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="values" id="values">
      <div className="section-inner">
        <h2 className="section-title fade-in">What He Lived By</h2>
        <p className="section-title-hindi fade-in">उनके जीवन मूल्य</p>

        <div className="values-block fade-in">
          <h3 className="values-block-title">No Cutting Corners</h3>
          <p className="values-block-title-hindi">कोई शॉर्टकट नहीं</p>
          <div className="values-quote-hindi">
            &ldquo;जहाँ कॉर्नर्स कट किए, वो फेल करेगा ही करेगा।&rdquo;
          </div>
          <p className="values-quote-english">
            Whether assembling a tank with 8,000 parts or building a career, do it right or don&rsquo;t do it at all.
          </p>
        </div>

        <div className="values-block fade-in">
          <h3 className="values-block-title">Precision</h3>
          <p className="values-block-title-hindi">सटीकता</p>
          <div className="values-quote-hindi">
            &ldquo;सर्टेन कंपोनेंट्स, द टॉलरेंस वास अप टू 0.1 मिलीमीटर।&rdquo;
          </div>
          <p className="values-quote-english">
            0.1mm tolerance matters when building something that must last. Excellence is built on attention to details others overlook.
          </p>
        </div>

        <div className="values-block fade-in">
          <h3 className="values-block-title">Question Diplomatically</h3>
          <p className="values-block-title-hindi">विनम्रता से प्रश्न करो</p>
          <div className="values-quote-hindi">
            &ldquo;साहब ये देखिए &mdash; इसमें कुछ प्रॉब्लम है।&rdquo;
          </div>
          <p className="values-quote-english">
            &ldquo;How will you manage this?&rdquo; not &ldquo;This is wrong.&rdquo; Make people discover their own mistakes.
          </p>
        </div>

        <div className="values-block fade-in">
          <h3 className="values-block-title">Stress Leads to Failure</h3>
          <p className="values-block-title-hindi">तनाव से विफलता</p>
          <div className="values-quote-hindi">
            &ldquo;जहाँ पर भी स्ट्रेस आता है, वहाँ पे प्रॉब्लम आएगी।&rdquo;
          </div>
          <p className="values-quote-english">
            Components forced into place develop stress and fail under vibration &mdash; true for machines, true for people.
          </p>
        </div>

        <div className="values-block fade-in">
          <h3 className="values-block-title">Daily Discipline &amp; Health</h3>
          <p className="values-block-title-hindi">रोज़ का अनुशासन और स्वास्थ्य</p>
          <div className="values-quote-hindi">
            &ldquo;शरीर को मज़बूत रखो &mdash; रोज़ व्यायाम करो, दिनचर्या बनाओ, और उसे कभी मत तोड़ो।&rdquo;
          </div>
          <p className="values-quote-english">
            Exercise daily. Build a routine. Never break it. Taking care of your health is the foundation of everything else in life.
          </p>
        </div>

        <div className="values-block fade-in">
          <h3 className="values-block-title">Learn by Doing</h3>
          <p className="values-block-title-hindi">करके सीखो</p>
          <div className="values-quote-hindi">
            &ldquo;लेथ, मिलिंग मशीन, ड्रिल प्रेस &mdash; हाथ से काम करके सीखा।&rdquo;
          </div>
          <p className="values-quote-english">
            At BHEL Training School, machine training was compulsory — 7am to 4pm, Mondays off. Worked on lathes, milling machines, drill presses. Every year, Vishwakarma Day honoured the machines with a pooja. Experience teaches what textbooks cannot.
          </p>
        </div>

        <div className="values-block fade-in">
          <h3 className="values-block-title">Food Brings People Together</h3>
          <p className="values-block-title-hindi">भोजन लोगों को जोड़ता है</p>
          <div className="values-quote-hindi">
            &ldquo;बातें कम, खाना ज़्यादा।&rdquo;
          </div>
          <p className="values-quote-english">
            Talk less, eat more. Half-kg potato servings, 30-paratha records, laddoos the size of cricket balls. Good food was worth remembering forever.
          </p>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const base = import.meta.env.BASE_URL;

  const sections = [
    {
      heading: 'The Early Years',
      headingHindi: 'शुरुआती दिन',
      subtitle: 'A young family in Bhopal. Nana and Nani — perfect husband and wife from the very beginning. Their model relationship became the foundation for everything that followed.',
      photos: [
        {
          src: `${base}photos/Nana Nani Daughters Small.jpg`,
          alt: 'Young Nana & Nani with their two small daughters',
          label: 'A young family — Nana & Nani with their two little daughters',
        },
      ],
    },
    {
      heading: 'Exploring the World Together',
      headingHindi: 'साथ-साथ दुनिया देखी',
      subtitle: 'They loved to travel and see the world side by side. Mountains, waterfalls, deserts — wherever the road led, they walked it together. The perfect pair on every adventure.',
      photos: [
        {
          src: `${base}photos/Nana Nani Flowers.jpg`,
          alt: 'Nana & Nani together at a mountain overlook with flowers',
          label: 'Mountains and wildflowers — exploring nature together',
        },
        {
          src: `${base}photos/Nana Nani Waterfall.jpg`,
          alt: 'Nana & Nani at a waterfall',
          label: 'Chasing waterfalls — side by side through every journey',
        },
        {
          src: `${base}photos/Nana Nani Camel Riding.jpg`,
          alt: 'Nana & Nani riding a camel in Rajasthan',
          label: 'Camel ride in Rajasthan — always up for an adventure',
        },
        {
          src: `${base}photos/Nana Nani Adventure.jpg`,
          alt: 'Nana & Nani on an outdoor adventure together',
          label: 'Wherever the road led, they walked it together',
        },
        {
          src: `${base}photos/MummyPapaPicture.jpg`,
          alt: 'Formal portrait of Nana & Nani',
          label: 'A lifetime of partnership and grace',
        },
      ],
    },
    {
      heading: 'The Family Grows',
      headingHindi: 'परिवार बढ़ता गया',
      subtitle: 'Nana and Nani raised two perfect daughters — so close, so loving, that they brought two entire families together as one. The grandchildren started arriving, and the house filled with even more love.',
      photos: [
        {
          src: `${base}photos/Nana and Aparna Family.JPG`,
          alt: 'Nana & Nani with daughter Aparna and her family',
          label: 'The family grows — Nana holding a newborn grandchild',
        },
        {
          src: `${base}photos/Nana-Naman-2.JPG`,
          alt: 'Nana sitting with young grandson Naman',
          label: 'Always present — Nana with little Naman',
        },
        {
          src: `${base}photos/DSCF0123.JPG`,
          alt: 'Nana with a gentle smile, 2003',
          label: 'That gentle smile — always warm, always steady (2003)',
        },
        {
          src: `${base}photos/Nana-Naman.JPG`,
          alt: 'Nana on the floor playing with toys with grandson Naman',
          label: 'On the floor, in the moment — playing with his grandson',
        },
      ],
    },
    {
      heading: 'The Golden Years',
      headingHindi: 'सुनहरे दिन',
      subtitle: 'Grandkids growing up, card games on the bed, Christmas mornings, lake trips. He got on the floor to play, sat at the table to teach, and showed every grandchild what unconditional love looks like.',
      photos: [
        {
          src: `${base}photos/Masti with Grandkids.JPG`,
          alt: 'Nana & Nani playing cards on bed with grandkids',
          label: 'Card games and laughter — masti with the grandkids',
        },
        {
          src: `${base}photos/Nana Nani Naman Manan.JPG`,
          alt: 'Nana & Nani with Naman and Manan by Christmas tree',
          label: 'Christmas with Naman & Manan — memories that last forever',
        },
        {
          src: `${base}photos/Nana and Grandkids.JPG`,
          alt: 'Nana with grandkids by a lake',
          label: 'Adventures with grandkids — by the lake',
        },
        {
          src: `${base}photos/Nana Flowers.JPG`,
          alt: 'Nana at a rose exhibition, 2013',
          label: 'At the rose exhibition — a man who appreciated beauty (2013)',
        },
        {
          src: `${base}photos/IMG_9435.JPG`,
          alt: 'Nana & Nani sitting together',
          label: 'Together always — the love never faded',
        },
      ],
    },
    {
      heading: 'Family Together',
      headingHindi: 'परिवार एक साथ',
      subtitle: 'Two daughters, their families, grandchildren, elders — all together because of the closeness Nana and Nani cultivated. 50 years of love celebrated with the whole family.',
      photos: [
        {
          src: `${base}photos/Bhopal Family.JPG`,
          alt: 'Large family gathering in Bhopal',
          label: 'The family he and Nani built — together in Bhopal',
        },
        {
          src: `${base}photos/DSC_0174.JPG`,
          alt: 'Extended family group photo',
          label: 'Generations united — the closeness he cultivated',
        },
        {
          src: `${base}photos/Nana Nani 50th Anniversary.JPG`,
          alt: 'Nana & Nani cutting cake at their 50th wedding anniversary',
          label: '50 years of love — anniversary celebration',
        },
        {
          src: `${base}photos/DSC_0468.JPG`,
          alt: 'Nana portrait in white shirt, 2015',
          label: 'Quiet strength and grace (2015)',
        },
      ],
    },
    {
      heading: 'The Last Chapter',
      headingHindi: 'आख़िरी अध्याय',
      subtitle: 'Still going strong. Still disciplined. Still kind. Still the most loving father and grandfather — right until the very end.',
      photos: [
        {
          src: `${base}photos/DSC_0244.JPG`,
          alt: 'Nana portrait with greenery, 2018',
          label: 'Still going strong — disciplined as ever (2018)',
        },
        {
          src: `${base}photos/Nana and Daughters.JPG`,
          alt: 'Nana with his two adult daughters',
          label: 'His greatest pride — two daughters who carry his values forward',
        },
        {
          src: `${base}photos/IMG_2012.JPG`,
          alt: 'Nana in patterned vest in the garden, 2021',
          label: '84 years of a life beautifully lived (2021)',
        },
      ],
    },
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="section-inner">
        <h2 className="section-title fade-in">Photos</h2>
        <p className="section-title-hindi fade-in">तस्वीरें</p>

        {sections.map((section, si) => (
          <div className="gallery-section fade-in" key={si}>
            <h3 className="gallery-section-title">{section.heading}</h3>
            <p className="gallery-section-title-hindi">{section.headingHindi}</p>
            <p className="gallery-section-subtitle">{section.subtitle}</p>
            <div className={`gallery-grid${section.photos.length === 1 ? ' gallery-grid-single' : ''}${section.photos.length === 2 ? ' gallery-grid-pair' : ''}`}>
              {section.photos.map((photo, pi) => (
                <div className="gallery-item" key={pi}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                  <p className="gallery-label">{photo.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="gallery-links fade-in">
          <a
            href="https://youtu.be/Xd5GJCP_Imk?si=FH3-Zq1sNYO8K-st"
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-link"
          >
            &#9654;&ensp;Watch Life Story Video
          </a>
          <Link to="/lifestory" className="gallery-link">
            &#128214;&ensp;Read His Life Story
          </Link>
        </div>
      </div>
    </section>
  );
}

function ImportantDates() {
  return (
    <section className="important-dates" id="dates">
      <div className="section-inner">
        <h2 className="section-title fade-in">Important Dates</h2>
        <p className="section-title-hindi fade-in">महत्वपूर्ण तिथियाँ</p>

        <div className="dates-grid fade-in">
          <div className="date-card">
            <div className="date-label">Passing</div>
            <div className="date-label-hindi">निधन</div>
            <div className="date-value">April 28, 2021</div>
          </div>
          <div className="date-card">
            <div className="date-label">Chautha (4th Day)</div>
            <div className="date-label-hindi">चौथा</div>
            <div className="date-value">May 1, 2021</div>
          </div>
          <div className="date-card">
            <div className="date-label">Daswan (10th Day)</div>
            <div className="date-label-hindi">दसवां</div>
            <div className="date-value">May 7, 2021</div>
          </div>
          <div className="date-card">
            <div className="date-label">Tehrvi (13th Day)</div>
            <div className="date-label-hindi">तेरहवीं</div>
            <div className="date-value">May 10, 2021</div>
          </div>
          <div className="date-card">
            <div className="date-label">Barsi (1st Anniversary)</div>
            <div className="date-label-hindi">बरसी</div>
            <div className="date-value">April 28, 2022</div>
          </div>
          <div className="date-card">
            <div className="date-label">Birthday</div>
            <div className="date-label-hindi">जन्मदिन</div>
            <div className="date-value">November 3</div>
          </div>
        </div>

        <a
          href="https://www.econdolence.com/learning-center/religion-and-culture/hinduism/hinduism-periods-of-mourning"
          target="_blank"
          rel="noopener noreferrer"
          className="dates-link fade-in"
        >
          Learn about Hindu mourning practices
        </a>
      </div>
    </section>
  );
}

function Diya() {
  const [lit, setLit] = useState(false);

  return (
    <div className="diya-container fade-in">
      <button
        className={`diya ${lit ? 'diya-lit' : ''}`}
        onClick={() => setLit(true)}
        aria-label={lit ? 'Diya is lit' : 'Light a diya'}
      >
        {lit && (
          <div className="diya-glow" />
        )}
        <div className="diya-flame-wrap">
          {lit && (
            <>
              <div className="diya-flame" />
              <div className="diya-flame-inner" />
            </>
          )}
          <div className="diya-wick" />
        </div>
        <svg viewBox="0 0 80 40" className="diya-bowl" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="40" cy="8" rx="28" ry="8" fill={lit ? '#C4A35A' : '#a89070'} />
          <path d="M12 8 Q12 36 40 36 Q68 36 68 8 Z" fill={lit ? '#b8943e' : '#96806a'} />
          <ellipse cx="40" cy="8" rx="22" ry="5" fill={lit ? '#e8c96a' : '#b8a890'} opacity="0.6" />
        </svg>
      </button>
      <p className="diya-label">
        {lit ? 'Diya lit for Nana' : 'Light a diya for Nana'}
      </p>
      <p className="diya-label-hindi">
        {lit ? 'नाना के लिए दीया जलाया' : 'नाना के लिए दीया जलाने के लिए दबाएँ'}
      </p>
    </div>
  );
}

function Closing() {
  return (
    <section className="closing" id="closing">
      <div className="closing-inner">
        <div className="fade-in">
          <div className="closing-hindi">
            &ldquo;जहाँ कॉर्नर्स कट किए, वो फेल करेगा ही करेगा।&rdquo;
          </div>
          <p className="closing-english">
            &ldquo;Wherever corners are cut, it will fail &mdash; it definitely will fail.&rdquo;
          </p>
        </div>

        <Divider />

        <p className="closing-legacy fade-in">
          He didn&rsquo;t just live 84 years. He was a father who showed love
          through action, not words. An engineer who built India&rsquo;s defense
          infrastructure and powered its trains. A teacher who taught everyone
          around him &mdash; by example, never by lecture. The mentally strongest
          person his family ever knew. A man who woke up early, exercised daily,
          and never once broke his routine. He taught us that discipline is
          freedom, that precision is integrity, and that taking care of yourself
          is how you take care of everyone else.
        </p>
        <p className="closing-legacy-hindi fade-in">
          उन्होंने सिर्फ़ 84 साल नहीं जिए। वे एक ऐसे पिता थे जिन्होंने
          शब्दों से नहीं, कर्मों से प्यार दिखाया। एक इंजीनियर जिन्होंने भारत
          का रक्षा ढांचा बनाया और उसकी ट्रेनें चलाईं। एक शिक्षक जिन्होंने
          सबको उदाहरण से सिखाया, भाषण से कभी नहीं। परिवार के सबसे मानसिक रूप
          से मज़बूत व्यक्ति। एक ऐसे इंसान जो सुबह जल्दी उठते, रोज़ व्यायाम
          करते, और अपनी दिनचर्या कभी नहीं तोड़ते थे। उन्होंने हमें सिखाया कि
          अनुशासन ही स्वतंत्रता है, सटीकता ही ईमानदारी है, और अपना ख़्याल
          रखना ही सबका ख़्याल रखना है।
        </p>

        <Diya />

        <div className="fade-in">
          <p className="closing-om">ॐ शान्ति शान्ति शान्ति</p>
          <p className="closing-shanti">Om Shanti Shanti Shanti</p>
        </div>

        <p className="closing-years fade-in">
          <span>1936</span> &mdash; <span>2021</span>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-links">
          <Link to="/lifestory" className="footer-link">His Life Story</Link>
          <Link to="/memories" className="footer-link">Share a Memory</Link>
          <a
            href={`https://wa.me/?text=${encodeURIComponent('In loving memory of Umakant Bhargava (1936–2021). A life of precision, integrity, and quiet strength.\n\nhttps://mananb77.github.io/nana/')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Share on WhatsApp
          </a>
        </div>
        <p className="footer-family">The Bhargava Family</p>
        <p className="footer-family-hindi">भार्गव परिवार</p>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`back-to-top ${visible ? 'back-to-top-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      &#9650;
    </button>
  );
}

function App() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      <Nav />
      <Hero />
      <Bio />
      <FamilyTree />
      <Timeline />
      <Quotes />
      <Career />
      <Stories />
      <Values />
      <Gallery />
      <ImportantDates />
      <Closing />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
