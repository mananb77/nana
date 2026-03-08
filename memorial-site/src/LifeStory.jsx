import { useEffect, useState, useRef, useCallback, createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import './LifeStory.css';
import hiContent from './lifeStoryHindi';
import translitMap from './lifeStoryTranslit';

const LangContext = createContext('en');

function PullQuote({ hindi, english, lang: langProp }) {
  const langCtx = useContext(LangContext);
  const lang = langProp || langCtx;
  const displayHindi = lang === 'en-tr' ? (translitMap[hindi] || hindi) : hindi;
  return (
    <div className="ls-pullquote">
      <p className={`ls-pullquote-hindi${lang === 'en-tr' ? ' ls-pullquote-translit' : ''}`}>{displayHindi}</p>
      {lang !== 'hi' && english && <p className="ls-pullquote-english">{english}</p>}
    </div>
  );
}

function ChapterDivider() {
  return (
    <div className="ls-divider">
      <span className="ls-divider-dot" />
    </div>
  );
}

function H({ children }) {
  const lang = useContext(LangContext);
  if (lang === 'en-tr') {
    const text = typeof children === 'string' ? children : '';
    const translit = translitMap[text];
    if (translit) {
      return <span className="ls-hindi ls-hindi-translit">{translit}</span>;
    }
  }
  return <span className="ls-hindi">{children}</span>;
}

function Para({ children, hi, lang }) {
  if (lang === 'hi' && hi) {
    return <p className="ls-para ls-para-hindi">{hi}</p>;
  }
  return <p className="ls-para">{children}</p>;
}

function LifeStory() {
  const [progress, setProgress] = useState(0);
  const [showLinks, setShowLinks] = useState(false);
  const [lang, setLang] = useState('en');
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  const toggleLang = useCallback(() => {
    // Find the paragraph nearest to viewport center
    const paras = contentRef.current?.querySelectorAll('.ls-para, .ls-chapter-number');
    if (!paras?.length) { setLang(l => l === 'en' ? 'en-tr' : l === 'en-tr' ? 'hi' : 'en'); return; }
    const viewCenter = window.scrollY + window.innerHeight / 2;
    let closest = paras[0];
    let closestDist = Infinity;
    paras.forEach(p => {
      const dist = Math.abs(p.getBoundingClientRect().top + window.scrollY - viewCenter);
      if (dist < closestDist) { closestDist = dist; closest = p; }
    });
    const offsetBefore = closest.getBoundingClientRect().top;
    setLang(l => l === 'en' ? 'en-tr' : l === 'en-tr' ? 'hi' : 'en');
    requestAnimationFrame(() => {
      const offsetAfter = closest.getBoundingClientRect().top;
      window.scrollBy(0, offsetAfter - offsetBefore);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      if (heroRef.current) {
        const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
        setShowLinks(scrollTop > heroBottom - 80);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LangContext.Provider value={lang}>
    <div>
      <div className="ls-progress" style={{ width: `${progress}%` }} />

      <nav className="ls-nav">
        <div className="ls-nav-inner">
          <Link to="/" className="ls-nav-back">&larr; Memorial</Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button className={`ls-lang-toggle${lang === 'hi' ? ' ls-lang-toggle-en' : ''}`} onClick={toggleLang}>
              {lang === 'en' ? 'Aa \u2192 \u0905' : lang === 'en-tr' ? '\u0939\u093F\u0902\u0926\u0940' : 'English'}
            </button>
            <span className={`ls-nav-title${lang === 'en-tr' ? ' ls-hindi-translit' : ''}`}>{lang === 'en-tr' ? 'Jeevan Kahani' : '\u091C\u0940\u0935\u0928 \u0915\u0939\u093E\u0928\u0940'}</span>
          </div>
        </div>
        <div className={`ls-nav-links ${showLinks ? 'ls-nav-links-visible' : ''}`}>
          <a href="https://youtu.be/Xd5GJCP_Imk?si=FH3-Zq1sNYO8K-st" target="_blank" rel="noopener noreferrer">
            &#9654; Lifestory Video
          </a>
          <Link to="/">Memorial Home</Link>
        </div>
      </nav>

      <header className="ls-hero" ref={heroRef}>
        <p className="ls-hero-label">{lang === 'hi' ? hiContent.hero.label : 'His Life Story'}</p>
        <h1>{lang === 'hi' ? hiContent.hero.title : 'An Engineer\u2019s Journey Through Independent India'}</h1>
        {lang !== 'hi' && <p className={`ls-hero-hindi${lang === 'en-tr' ? ' ls-hindi-translit' : ''}`}>{lang === 'en-tr' ? translitMap['\u0938\u091F\u0940\u0915\u0924\u093E, \u0938\u0947\u0935\u093E \u0914\u0930 \u0938\u093F\u0926\u094D\u0927\u093E\u0902\u0924 \u0915\u0940 \u092F\u093E\u0924\u094D\u0930\u093E'] : '\u0938\u091F\u0940\u0915\u0924\u093E, \u0938\u0947\u0935\u093E \u0914\u0930 \u0938\u093F\u0926\u094D\u0927\u093E\u0902\u0924 \u0915\u0940 \u092F\u093E\u0924\u094D\u0930\u093E'}</p>}
        <p className="ls-hero-meta">{lang === 'hi' ? hiContent.hero.meta : 'A narrative compiled from family recordings, January 2023'}</p>
      </header>

      <div className="ls-content" ref={contentRef}>

        {/* Chapter 1 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch1.number : 'Chapter One'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch1.title : 'The College Years at BITS Pilani (1958\u20131959)'}</h2>

          <Para lang={lang} hi={hiContent.ch1.paras[0]}>
            In the late 1950s, a young man from Rajasthan arrived at the Birla Institute of Technology and Science in Pilani, a campus that would shape not only his career but his entire philosophy of precision and purpose. The campus was an oasis of order in the desert landscape: a prominent clock tower rose above two main buildings, and a central green lawn stretched between them, meticulously maintained despite the arid climate. It was here, surrounded by earnest young men who had come from across India to study engineering, that he would spend some of the most formative years of his life.
          </Para>

          <Para lang={lang} hi={hiContent.ch1.paras[1]}>
            National pride ran deep at BITS Pilani. On January 26th and August 15th, the entire campus would assemble for parades, the students marching in formation under the Rajasthan sun. These were not perfunctory affairs. India was barely a decade old as an independent nation, and the young engineers understood that they were being trained to build the country&rsquo;s future. He completed his engineering degree in 1959, emerging from a program that emphasized not just theory but rigorous practical education.
          </Para>

          <Para lang={lang} hi={hiContent.ch1.paras[2]}>
            The training school at BITS was legendary in its thoroughness. Students worked on lathes, milling machines, and other heavy equipment, wearing compulsory overalls as they learned the feel of metal under their hands. This wasn&rsquo;t abstract knowledge gained from textbooks alone. Every student had to understand the machines from the ground up, to know what a properly turned piece of metal felt like, to recognize when a tolerance was off by even a fraction of a millimeter. This hands-on foundation would prove invaluable throughout his career.
          </Para>

          <Para lang={lang} hi={hiContent.ch1.paras[3]}>
            Before BITS, he had also studied at Maharaja College, where the principal was a mathematician known equally for his strictness and his humor. This principal had a particular gift for the last period of the day, when students&rsquo; attention would naturally wane. Rather than lecturing sternly, he would teach through engagement and wit, drawing students into mathematical problems through sheer force of personality. It was an early lesson in leadership: that rigor and warmth are not opposites, but complements. The best teachers, like the best engineers, understood that human engagement was as important as technical precision.
          </Para>
        </section>

        <PullQuote
          hindi="&ldquo;\u091C\u0939\u093E\u0901 \u0915\u0949\u0930\u094D\u0928\u0930\u094D\u0938 \u0915\u091F \u0915\u093F\u090F, \u0935\u094B \u092B\u0947\u0932 \u0915\u0930\u0947\u0917\u093E \u0939\u0940 \u0915\u0930\u0947\u0917\u093E\u0964&rdquo;"
          english="&ldquo;Wherever corners are cut, it will fail &mdash; it definitely will fail.&rdquo;"
          lang={lang}
        />

        <ChapterDivider />

        {/* Chapter 2 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch2.number : 'Chapter Two'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch2.title : 'Hostel Life and Brotherhood'}</h2>

          <Para lang={lang} hi={hiContent.ch2.paras[0]}>
            The hostel at BITS housed 144 students, young men from every corner of India thrown together in conditions that were spartan by any measure. Each room measured roughly eight by eight feet, the walls made of wire mesh that provided ventilation but precious little privacy. The furniture consisted of a wooden cot, a <H>takht</H>, with no mattress &mdash; just a <H>dari</H>, a thin cotton floor covering, spread over the hard wooden surface. And then there were the bed bugs, constant companions that no amount of cleaning could entirely eliminate.
          </Para>

          <Para lang={lang} hi={hiContent.ch2.paras[1]}>
            Yet these cramped quarters produced a brotherhood that would last a lifetime. The common room served as the social heart of the hostel, equipped with carrom boards, chess sets, and a table tennis table. Students would gather there between study sessions, the clack of carrom pieces and the ping of table tennis balls providing a rhythmic backdrop to intense conversations about engineering, politics, and life. Bridge, however, was notably absent from the common room &mdash; not because it wasn&rsquo;t popular, but because playing it there attracted far too many unsolicited advisors. Every passerby fancied himself a bridge expert, making focused play impossible.
          </Para>

          <Para lang={lang} hi={hiContent.ch2.paras[2]}>
            Care packages from home were events of communal celebration. When a student received a parcel of home-cooked food &mdash; <H>namkeen</H>, sweets, pickles &mdash; it was shared among the group without question. This was the unwritten code of the hostel: what one had, all had. The practice built bonds that no individual achievement could replicate, forging friendships across regional and linguistic lines.
          </Para>

          <Para lang={lang} hi={hiContent.ch2.paras[3]}>
            The appetites of these young men became the stuff of legend. The hostel produced champion eaters whose feats were recounted with the same reverence as academic achievements. The record stood at thirty <H>aloo parathas</H> consumed in a single sitting, a feat that required not just hunger but genuine athletic commitment. On average, each student could put away half a kilogram of potatoes per meal without difficulty. These were growing men doing physical labor in the training school by day, and their bodies demanded fuel in quantities that would astonish later generations.
          </Para>
        </section>

        <PullQuote
          hindi="&ldquo;\u091C\u092C \u092D\u0940 \u0939\u092E \u0905\u091A\u094D\u091B\u093E \u0916\u093E\u0928\u093E \u0916\u093E\u0924\u0947 \u0939\u0948\u0902, \u091C\u093C\u093F\u0902\u0926\u0917\u0940 \u092D\u0930 \u092F\u093E\u0926 \u0930\u0939\u0924\u093E \u0939\u0948\u0964&rdquo;"
          english="&ldquo;Whenever we eat good food, we remember it for the rest of our lives.&rdquo;"
          lang={lang}
        />

        <ChapterDivider />

        {/* Chapter 3 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch3.number : 'Chapter Three'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch3.title : 'The Mess Hall: A Study in Logistics and Appetite'}</h2>

          <Para lang={lang} hi={hiContent.ch3.paras[0]}>
            The mess hall at BITS Pilani was an operation of military precision. Three hundred students needed to be fed in thirty minutes flat, and the system that evolved to accomplish this was a marvel of logistical engineering. Long wooden tables stretched the length of the hall, each seating fifteen to sixteen students. The thalis were pressed metal with compartments, functional rather than elegant, designed for speed and durability rather than aesthetics. Every meal was a coordinated exercise in mass feeding.
          </Para>

          <Para lang={lang} hi={hiContent.ch3.paras[1]}>
            The centerpiece of the kitchen was a massive <H>tawa</H>, four feet in diameter, dedicated to the production of rotis. The roti-making operation was a three-person assembly line of remarkable efficiency: one man rolled the dough into perfect circles, the second placed them on the scorching hot surface, and the third flipped them at precisely the right moment using a cloth dipped in ghee. The rhythm was hypnotic &mdash; roll, place, flip &mdash; and the output was prodigious. It had to be. Students routinely consumed fifteen to twenty rotis per meal, and the kitchen crew never fell behind.
          </Para>

          <Para lang={lang} hi={hiContent.ch3.paras[2]}>
            Sunday brought special treats that the students anticipated all week. The most celebrated were the <H>besan laddoos</H>, enormous spheres of sweetened gram flour three inches in diameter, affectionately nicknamed <H>&ldquo;brahmachari laddoos&rdquo;</H> &mdash; bachelor&rsquo;s laddoos &mdash; in honor of their size and the unmarried status of their eager consumers. These laddoos were dense, rich, and deeply satisfying, each one a meal in itself.
          </Para>

          <Para lang={lang} hi={hiContent.ch3.paras[3]}>
            The students&rsquo; sense of humor found expression even at mealtimes. One legendary prank involved mangoes. During mango season, the students would carefully eat their fruit and stack the empty pits on display. The competition escalated until one memorable day, a student arranged 101 empty mango pits in a triumphant pyramid on the table, a monument to appetite and competitive spirit that was talked about long after the mangoes themselves had been forgotten.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 4 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch4.number : 'Chapter Four'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch4.title : 'Sports and Physical Training'}</h2>

          <Para lang={lang} hi={hiContent.ch4.paras[0]}>
            Sports were not optional at BITS Pilani &mdash; they were mandatory, part of the institution&rsquo;s belief that an engineer needed a strong body to match a sharp mind. Growing up, he had played hockey and cricket at home, as most Indian boys did, chasing balls through dusty lanes and improvising wickets from whatever was at hand. These childhood games had given him coordination and competitive spirit, but college would demand more structured athleticism.
          </Para>

          <Para lang={lang} hi={hiContent.ch4.paras[1]}>
            At Maharaja College, he tried out for the hockey team but didn&rsquo;t make the cut. Rather than dwelling on the disappointment, he pivoted to volleyball &mdash; a decision that would reveal a hidden talent. His volleyball serve became legendary on campus, delivered with such force and precision that it could literally knock an opponent off their feet. The power came not just from his arm but from an understanding of angles and timing, an engineer&rsquo;s instinct applied to sport. He played with the same philosophy he would later bring to his professional work: maximum efficiency, no wasted motion.
          </Para>

          <Para lang={lang} hi={hiContent.ch4.paras[2]}>
            One of the most extraordinary moments in his college sporting life came when Major Dhyan Chand, the greatest hockey player in Indian history, visited the campus to coach students. This was the man who had led India to Olympic gold, whose stick control was so masterful that opposing teams had once demanded his stick be checked for magnets. To have Dhyan Chand himself demonstrating technique on their own grounds was an experience that transcended sport &mdash; it was a brush with living legend, a connection to India&rsquo;s finest sporting tradition.
          </Para>

          <Para lang={lang} hi={hiContent.ch4.paras[3]}>
            Cricket, which would later dominate Indian sporting culture, was not yet the national obsession it would become. In those days, hockey still held pride of place, and cricket was simply one game among many. The evenings were dedicated to ACC programs &mdash; structured physical training sessions that complemented the sports activities. Between the mandatory athletics, the training school&rsquo;s physical demands, and the long walks across campus, the students at BITS developed the stamina and discipline that would serve them through decades of demanding professional work.
          </Para>
        </section>

        <PullQuote
          hindi="&ldquo;\u091C\u0939\u093E\u0901 \u092A\u0930 \u092D\u0940 \u0938\u094D\u091F\u094D\u0930\u0947\u0938 \u0906\u0924\u093E \u0939\u0948, \u0935\u0939\u093E\u0901 \u092A\u0947 \u092A\u094D\u0930\u0949\u092C\u094D\u0932\u092E \u0906\u090F\u0917\u0940\u0964&rdquo;"
          english="&ldquo;Wherever there is stress, there will be problems.&rdquo;"
          lang={lang}
        />

        <ChapterDivider />

        {/* Chapter 5 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch5.number : 'Chapter Five'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch5.title : 'Beginning a Career at BHEL'}</h2>

          <Para lang={lang} hi={hiContent.ch5.paras[0]}>
            Upon graduating in 1959, he joined Bharat Heavy Electricals Limited at their Bhopal facility, known then simply as BHL. This was one of the great industrial enterprises of newly independent India, a company tasked with nothing less than building the heavy electrical infrastructure that the nation desperately needed. The training programs were rigorous, designed to transform bright young graduates into practical engineers who could handle the massive scale of India&rsquo;s industrial ambitions. From his first day, it was clear that the standards at BHEL would match or exceed anything he had encountered at BITS.
          </Para>

          <Para lang={lang} hi={hiContent.ch5.paras[1]}>
            For the first two years, he lived in the company hostel, where he served as mess manager &mdash; a role that gave him his first taste of administrative responsibility. The kitchen operated on a scale that dwarfed even the BITS mess hall. One detail fascinated him: the wood fire in the kitchen never went out. It burned continuously, day and night, meal after meal, so that matches were literally never needed. Someone had lit that fire at some indeterminate point in the past, and the cooks simply maintained it, feeding it fuel in a perpetual cycle. It was a small thing, but it spoke to the continuity and efficiency that characterized industrial India.
          </Para>

          <Para lang={lang} hi={hiContent.ch5.paras[2]}>
            After the hostel, he moved into a small one-room apartment, the first space he could call his own. The bachelor engineers quickly organized themselves for survival. A group of them hired a shared cook, and in the absence of proper furniture, they sat on upside-down oil drums while eating their meals. It was uncomfortable, improvised, and oddly companionable &mdash; young engineers perched on industrial containers, discussing the day&rsquo;s work over dal and rice.
          </Para>

          <Para lang={lang} hi={hiContent.ch5.paras[3]}>
            The system worked well until their cook abruptly left. The engineers, brilliant with machines but helpless in the kitchen, attempted to make <H>khichdi</H>, the simplest possible Indian meal. The result was a disaster so thorough that it became an instant legend among the group. Fortunately, the cook returned at 11 PM that same night, finding all his employers deeply absorbed in a bridge game rather than mourning their culinary catastrophe. One story captured the bachelor spirit perfectly: someone declared the world was about to end, and the entire group immediately agreed that the only sensible response was to have a magnificent feast. <H>&ldquo;\u0920\u0940\u0915 \u0939\u0948, \u0916\u093C\u0924\u094D\u092E \u0939\u094B \u091C\u093E\u090F\u0964 \u0906\u091C \u0905\u091A\u094D\u091B\u093E \u0916\u093E\u0928\u093E \u0916\u093E\u0924\u0947 \u0939\u0948\u0902\u0964&rdquo;</H> Fine, let it end. Today we eat well.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 6 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch6.number : 'Chapter Six'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch6.title : 'The Arjun Tank Project'}</h2>

          <Para lang={lang} hi={hiContent.ch6.paras[0]}>
            The most significant project of his career was his role as coordinator for the assembly of the Arjun Main Battle Tank at BHEL. This was India&rsquo;s ambitious attempt to design and build an indigenous main battle tank, a project of enormous national importance and staggering technical complexity. The scope was breathtaking: 10,000 individual drawings, every single one of which had to be examined for materials specifications, inspection requirements, and testing protocols. Nothing could be assumed, nothing glossed over.
          </Para>

          <Para lang={lang} hi={hiContent.ch6.paras[1]}>
            The tank comprised approximately 100 sub-assemblies, each containing between ten and twenty-five individual parts. Components ranged from precision pieces weighing as little as 50 grams to massive steel plates sourced from the Rourkela Steel Plant. The logistics of procurement alone were formidable: tracking thousands of components from dozens of suppliers, ensuring each met specification, coordinating delivery schedules so that assembly could proceed without delays. Two complete prototypes were assembled under his coordination.
          </Para>

          <Para lang={lang} hi={hiContent.ch6.paras[2]}>
            His meticulous approach uncovered serious design flaws that might otherwise have reached the battlefield. He discovered instances where the wrong nuts and bolts had been specified, where three entirely different components had been designed for what was essentially the same application, and where track locking mechanisms didn&rsquo;t function as intended. <H>&ldquo;\u0938\u093E\u0939\u092C \u092F\u0947 \u0926\u0947\u0916\u093F\u090F &mdash; \u0907\u0938\u092E\u0947\u0902 \u0915\u0941\u091B \u092A\u094D\u0930\u0949\u092C\u094D\u0932\u092E \u0939\u0948\u0964&rdquo;</H> Sir, please see &mdash; there seems to be some problem in this. This was his characteristic approach: respectful but unflinching, always bringing problems forward rather than hoping they would resolve themselves.
          </Para>

          <Para lang={lang} hi={hiContent.ch6.paras[3]}>
            Weight was a constant concern. Excessive thickness tolerances across thousands of components meant that the overall weight of the tank crept steadily upward, affecting mobility and performance. He raised fundamental questions about operational viability: at 70 degrees Celsius, the temperature that could be reached in the Rajasthan desert where the tank would operate, how would the driver function? How would the crew survive and fight effectively? Much of the specification was classified, but his professional obligation to quality never wavered regardless of security constraints. He understood that 80 percent of the total cost lay in materials, making every specification decision a matter of both engineering integrity and fiscal responsibility.
          </Para>
        </section>

        <PullQuote
          hindi="&ldquo;\u0938\u093E\u0939\u092C \u092F\u0947 \u0926\u0947\u0916\u093F\u090F &mdash; \u0907\u0938\u092E\u0947\u0902 \u0915\u0941\u091B \u092A\u094D\u0930\u0949\u092C\u094D\u0932\u092E \u0939\u0948\u0964&rdquo;"
          english="&ldquo;Sir, please see &mdash; there seems to be some problem in this.&rdquo;"
          lang={lang}
        />

        <ChapterDivider />

        {/* Chapter 7 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch7.number : 'Chapter Seven'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch7.title : 'Traction Control Systems and Railway Engineering'}</h2>

          <Para lang={lang} hi={hiContent.ch7.paras[0]}>
            Mumbai&rsquo;s suburban railway system is the lifeline of a city of millions. Every day, packed trains carry commuters across the sprawling metropolis, and the traction systems that power those trains became another major focus of his career at BHEL. The typical configuration involved three coaches, with four traction motors mounted underneath, providing the enormous torque needed to accelerate heavily loaded trains from station to station at frequent intervals.
          </Para>

          <Para lang={lang} hi={hiContent.ch7.paras[1]}>
            Behind the driver&rsquo;s cabin sat the high-voltage control room, a space filled with electrical switching equipment that managed the flow of power to the traction motors. The safety systems were ingeniously designed: switches would automatically cut off if the control room was opened, preventing accidental electrocution. Every component was built with failsafe mechanisms, because in a system carrying millions of passengers daily, there was no margin for error.
          </Para>

          <Para lang={lang} hi={hiContent.ch7.paras[2]}>
            This was an era before CNC machines and digital processors. The switching systems were entirely mechanical, relying on precisely machined contacts and springs to handle high-voltage electrical loads thousands of times per day. The reliability requirements were extraordinary. The railways insisted on type testing: mechanical endurance tests that ran from one million to four thousand cycles, ensuring that every component could withstand years of punishing service before requiring replacement.
          </Para>

          <Para lang={lang} hi={hiContent.ch7.paras[3]}>
            His familiarity with these systems became so deep and intimate that he could diagnose problems over the telephone. A maintenance engineer in Mumbai could describe the symptoms, and he would identify the likely cause without needing to see the equipment. This wasn&rsquo;t magic &mdash; it was the product of years spent understanding every component, every interaction, every failure mode. He carried the entire system in his head, a living schematic that no computer of that era could match.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 8 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch8.number : 'Chapter Eight'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch8.title : 'The Hazira Oil Pipeline and Cathodic Protection'}</h2>

          <Para lang={lang} hi={hiContent.ch8.paras[0]}>
            The Hazira pipeline project took him into an entirely different domain of engineering: cathodic protection, the science of preventing metal corrosion in underground and underwater pipelines. The pipeline stretched from Gujarat to Uttar Pradesh, carrying oil and gas across hundreds of kilometers of varied terrain. Protecting this critical infrastructure from the relentless chemical attack of soil and moisture required a sophisticated understanding of electrochemistry that went far beyond traditional mechanical engineering.
          </Para>

          <Para lang={lang} hi={hiContent.ch8.paras[1]}>
            The principle was elegant in its simplicity but demanding in its execution. Both metal and earth possess electrical potential, and when a metal pipeline is buried in the ground, the difference in potential drives a current that gradually dissolves the metal &mdash; corrosion. Cathodic protection works by introducing sacrificial anodes that redirect this destructive current, essentially offering themselves up for corrosion instead of the pipeline. Getting the placement, material selection, and electrical calculations right was critical: too little protection and the pipeline would corrode; too much and you wasted resources and risked other problems.
          </Para>

          <Para lang={lang} hi={hiContent.ch8.paras[2]}>
            The project required him to travel to the Gujarat coast, where his first boat ride out to the offshore jetty proved to be an intimidating experience. This was a man accustomed to solid ground, to lathes and milling machines and the firm floors of factory buildings. The open sea was a different environment entirely, and the journey to the jetty tested his resolve in ways that no engineering problem ever had.
          </Para>

          <Para lang={lang} hi={hiContent.ch8.paras[3]}>
            What made this project particularly challenging was the breadth of knowledge it demanded. A single engineer had to understand electrochemistry, corrosion science, electrical engineering, materials science, and the practical realities of field conditions. The textbook solutions often needed modification when confronted with actual soil conditions, water tables, and the unpredictable chemistry of real-world environments. It was a project that rewarded exactly the kind of broad, practical education that BITS Pilani had provided decades earlier.
          </Para>
        </section>

        <PullQuote
          hindi="&ldquo;\u0938\u0930\u094D\u091F\u0947\u0928 \u0915\u0902\u092A\u094B\u0928\u0947\u0902\u091F\u094D\u0938, \u0926 \u091F\u0949\u0932\u0930\u0947\u0902\u0938 \u0935\u093E\u0938 \u0905\u092A \u091F\u0942 0.1 \u092E\u093F\u0932\u0940\u092E\u0940\u091F\u0930\u0964&rdquo;"
          english="&ldquo;On certain components, the tolerance was up to 0.1 millimeter.&rdquo;"
          lang={lang}
        />

        <ChapterDivider />

        {/* Chapter 9 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch9.number : 'Chapter Nine'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch9.title : 'International Experience in the United Kingdom'}</h2>

          <Para lang={lang} hi={hiContent.ch9.paras[0]}>
            His work on traction control systems took him to the United Kingdom for a six-month assignment, an experience that broadened his perspective on engineering practice and international collaboration. The purpose was to study British approaches to traction control technology, to understand different standards and methodologies, and to bring this knowledge back to enhance BHEL&rsquo;s own capabilities. It was a recognition of his expertise that he was selected for this posting.
          </Para>

          <Para lang={lang} hi={hiContent.ch9.paras[1]}>
            The experience was mixed in the way that international collaborations often are. Some of his British counterparts were excellent collaborators, open and generous with their knowledge, willing to engage in the detailed technical discussions that he valued most. Others were less forthcoming, not entirely prepared to share their expertise with engineers from what they may have still regarded as a developing nation. He navigated these dynamics with characteristic professionalism, extracting maximum value from every interaction regardless of the reception.
          </Para>

          <Para lang={lang} hi={hiContent.ch9.paras[2]}>
            One of the unexpected pleasures of the UK assignment was reconnecting with people he had met during earlier inspection visits. Over the years, as BHEL had procured equipment from British manufacturers, he had built relationships with engineers and quality inspectors on the other side. Now, being in England for an extended period allowed these professional acquaintances to deepen into genuine friendships, adding a personal dimension to what was primarily a technical mission.
          </Para>

          <Para lang={lang} hi={hiContent.ch9.paras[3]}>
            Overall, the experience was positive and enriching. Exposure to different approaches to the same engineering challenges gave him a broader toolkit and a more nuanced understanding of international standards. He returned to India not just with technical knowledge but with a deeper appreciation for the global community of engineers who, despite different languages and cultures, shared a common commitment to precision and quality.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 10 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch10.number : 'Chapter Ten'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch10.title : 'Engineering Philosophy and Problem-Solving'}</h2>

          <Para lang={lang} hi={hiContent.ch10.paras[0]}>
            His engineering philosophy was built on an unshakeable foundation: attention to detail. When he reviewed the 10,000 drawings for the Arjun tank, he didn&rsquo;t skim &mdash; he analyzed. Every drawing was examined for material specifications, dimensional tolerances, surface finishes, heat treatment requirements, and inspection criteria. This wasn&rsquo;t bureaucratic diligence; it was the conviction that every detail matters, that a tank or a train or a pipeline is only as strong as its weakest component. <H>&ldquo;\u091C\u0939\u093E\u0901 \u0915\u0949\u0930\u094D\u0928\u0930\u094D\u0938 \u0915\u091F \u0915\u093F\u090F, \u0935\u094B \u092B\u0947\u0932 \u0915\u0930\u0947\u0917\u093E \u0939\u0940 \u0915\u0930\u0947\u0917\u093E\u0964&rdquo;</H> Wherever corners are cut, it will fail.
          </Para>

          <Para lang={lang} hi={hiContent.ch10.paras[1]}>
            The hands-on experience he gained on lathes and milling machines at BITS gave him something that no amount of theoretical study could provide: an intuitive understanding of what was physically possible and what was merely theoretically desirable. When a drawing specified a tolerance, he could feel in his hands whether that tolerance was achievable with the available equipment. When a designer called for a particular surface finish, he knew from personal experience what that finish looked and felt like. This practical foundation made him a more effective engineer and a more credible reviewer.
          </Para>

          <Para lang={lang} hi={hiContent.ch10.paras[2]}>
            He believed in questioning everything, especially assumptions that others took for granted. On the Arjun project, he raised uncomfortable questions about desert operations: how would the tank function at 70 degrees Celsius? How would vibration affect the electronic systems? What were the realistic failure modes in combat conditions? These were not questions designed to obstruct progress but to ensure that the final product would actually work when it mattered most.
          </Para>

          <Para lang={lang} hi={hiContent.ch10.paras[3]}>
            He also believed deeply in learning from others&rsquo; mistakes. He would cite the example of English train manufacturers who had used riveted frames for their coaches, only to discover that the riveted joints created stress concentrations that led to fatigue failures. The lesson was clear: welded frames distributed stress more evenly and lasted longer. <H>&ldquo;\u091C\u0939\u093E\u0901 \u092A\u0930 \u092D\u0940 \u0938\u094D\u091F\u094D\u0930\u0947\u0938 \u0906\u0924\u093E \u0939\u0948, \u0935\u0939\u093E\u0901 \u092A\u0947 \u092A\u094D\u0930\u0949\u092C\u094D\u0932\u092E \u0906\u090F\u0917\u0940\u0964&rdquo;</H> Wherever there is stress, there will be problems. Do it right the first time, maintain professional standards, and never compromise on quality regardless of pressure or convenience.
          </Para>
        </section>

        <PullQuote
          hindi="&ldquo;70 \u0921\u093F\u0917\u094D\u0930\u0940 \u091F\u0947\u092E\u094D\u092A\u0930\u0947\u091A\u0930 \u0915\u0947 \u090A\u092A\u0930 \u0909\u0938\u0915\u093E \u091C\u094B \u0921\u094D\u0930\u093E\u0907\u0935\u0930 \u0939\u0948 \u0935\u094B \u0915\u0948\u0938\u0947 \u091A\u0932\u093E\u090F\u0917\u093E?&rdquo;"
          english="&ldquo;At 70 degrees, how will the driver operate it?&rdquo;"
          lang={lang}
        />

        <ChapterDivider />

        {/* Chapter 11 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch11.number : 'Chapter Eleven'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch11.title : 'Life After BITS: Comparing Generations'}</h2>

          <Para lang={lang} hi={hiContent.ch11.paras[0]}>
            In his later years, he took great interest in his grandchildren&rsquo;s college preparation and education, drawing constant comparisons between his era and theirs. The basics, he observed, hadn&rsquo;t changed as much as people assumed. The fundamental structure of a hostel room &mdash; a cot, a desk, a shared bathroom down the hall &mdash; remained remarkably consistent across decades, whether at BITS in 1958 or at colleges in the 2010s. Young people still had to learn to live away from home, still had to negotiate shared spaces, still had to balance freedom with responsibility.
          </Para>

          <Para lang={lang} hi={hiContent.ch11.paras[1]}>
            He would tell stories of his own improvised furniture with a mixture of pride and amusement. His terrible cot at one posting had been supplemented by removing a cabinet door, placing it on bricks, and using it as a makeshift bed extension. During his bachelor days in Pune, he lived in a room measuring ten by twelve feet and, by his own cheerful admission, didn&rsquo;t clean it for six months. These weren&rsquo;t stories of hardship &mdash; they were stories of resourcefulness, of young men who cared more about their work than their surroundings.
          </Para>

          <Para lang={lang} hi={hiContent.ch11.paras[2]}>
            Food experiences, he noted, were universal across generations. Whether it was his cohort consuming thirty parathas or his grandchildren discovering late-night instant noodles, the relationship between young people and food followed eternal patterns. The details changed &mdash; besan laddoos gave way to pizza, the mess hall was supplemented by food delivery apps &mdash; but the fundamental dynamic of perpetual hunger and communal eating remained constant.
          </Para>

          <Para lang={lang} hi={hiContent.ch11.paras[3]}>
            When shown photographs of the modern BITS campus, he immediately recognized the clock tower and the basic layout, even as he marveled at the new buildings and facilities. Some things endured: clock towers seemed to be universal across Indian campuses, anchoring points of architectural identity that connected generations. He took quiet satisfaction in the continuity, in knowing that the institution that had formed him continued to form new engineers, carrying forward a tradition of excellence even as the world around it transformed beyond recognition.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 12 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch12.number : 'Chapter Twelve'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch12.title : 'Legacy of an Engineer'}</h2>

          <Para lang={lang} hi={hiContent.ch12.paras[0]}>
            His career at BHEL spanned the critical decades when independent India was building its industrial infrastructure from the ground up. He was part of a generation of engineers who didn&rsquo;t just design and build &mdash; they created the very capability to design and build. When he arrived at BHEL in 1959, India was importing most of its heavy electrical equipment. By the time his career reached its zenith, the country was assembling battle tanks, manufacturing traction systems for its railways, and protecting its oil pipelines with indigenous engineering expertise.
          </Para>

          <Para lang={lang} hi={hiContent.ch12.paras[1]}>
            The Arjun tank, despite its well-documented challenges and delays, represented something profound: a nation&rsquo;s determination to develop its own defense capabilities rather than remaining dependent on foreign suppliers. His role in identifying design flaws during the prototype phase was exactly the kind of unglamorous, meticulous work that separates successful engineering from catastrophic failure. Every wrong nut and bolt he caught, every weight discrepancy he flagged, every operational question he raised made the final product more viable.
          </Para>

          <Para lang={lang} hi={hiContent.ch12.paras[2]}>
            The traction control systems he helped develop kept Mumbai&rsquo;s suburban trains running, carrying millions of commuters daily through one of the world&rsquo;s most demanding urban transit environments. The cathodic protection systems he engineered safeguarded pipelines that carried the energy resources India needed for its economic development. These were not abstract achievements &mdash; they were the literal infrastructure of a nation&rsquo;s daily life and security.
          </Para>

          <Para lang={lang} hi={hiContent.ch12.paras[3]}>
            His approach throughout was consistent: thorough, ethical, practical, and uncompromising on quality. He belonged to a generation that built with limited resources, without computers or email or instant communication, relying instead on deep knowledge, careful calculation, and the kind of hands-on understanding that comes only from years of working directly with materials and machines. From the wooden cots at BITS Pilani to the assembly floors where Arjun tank prototypes took shape, his journey traced the arc of India&rsquo;s own industrial coming of age. Their legacy continues in every train that runs, every pipeline that holds, every piece of infrastructure we use without thinking about the engineers who made it possible.
          </Para>
        </section>

        <PullQuote
          hindi="&ldquo;\u0920\u0940\u0915 \u0939\u0948, \u0916\u093C\u0924\u094D\u092E \u0939\u094B \u091C\u093E\u090F\u0964 \u0906\u091C \u0905\u091A\u094D\u091B\u093E \u0916\u093E\u0928\u093E \u0916\u093E\u0924\u0947 \u0939\u0948\u0902\u0964&rdquo;"
          english="&ldquo;Fine, let it end. Today we eat well.&rdquo;"
          lang={lang}
        />

        {/* Closing */}
        <div className="ls-closing">
          <p className={`ls-closing-om${lang === 'en-tr' ? ' ls-hindi-translit' : ''}`}>{lang === 'en-tr' ? 'Om Shanti Shanti Shanti' : '\u0950 \u0936\u093E\u0928\u094D\u0924\u093F \u0936\u093E\u0928\u094D\u0924\u093F \u0936\u093E\u0928\u094D\u0924\u093F'}</p>
          <p className="ls-closing-meta">
            {lang === 'hi' ? hiContent.closing.meta : 'This narrative was compiled from a single recorded conversation. We invite family members to share additional memories and stories.'}
          </p>
          <p className="ls-closing-meta" style={{ marginTop: '1rem' }}>
            {lang === 'hi' ? hiContent.closing.legacy : 'He didn\u2019t just live 84 years. He built India\u2019s defense infrastructure, powered its trains, protected its pipelines, and taught a generation that precision is integrity.'}
          </p>
          <p className="ls-closing-meta" style={{ marginTop: '0.5rem' }}>
            {lang === 'hi' ? '\u0909\u0928\u094D\u0939\u094B\u0902\u0928\u0947 \u0938\u093F\u0930\u094D\u092B\u093C 84 \u0938\u093E\u0932 \u0928\u0939\u0940\u0902 \u091C\u093F\u090F\u0964 \u0909\u0928\u094D\u0939\u094B\u0902\u0928\u0947 \u092D\u093E\u0930\u0924 \u0915\u093E \u0930\u0915\u094D\u0937\u093E \u0922\u093E\u0902\u091A\u093E \u092C\u0928\u093E\u092F\u093E, \u0909\u0938\u0915\u0940 \u091F\u094D\u0930\u0947\u0928\u0947\u0902 \u091A\u0932\u093E\u0908\u0902, \u0909\u0938\u0915\u0940 \u092A\u093E\u0907\u092A\u0932\u093E\u0907\u0928\u094B\u0902 \u0915\u0940 \u0938\u0941\u0930\u0915\u094D\u0937\u093E \u0915\u0940, \u0914\u0930 \u090F\u0915 \u092A\u0940\u0922\u093C\u0940 \u0915\u094B \u0938\u093F\u0916\u093E\u092F\u093E \u0915\u093F \u0938\u091F\u0940\u0915\u0924\u093E \u0939\u0940 \u0908\u092E\u093E\u0928\u0926\u093E\u0930\u0940 \u0939\u0948\u0964' : ''}
          </p>
          <p className="ls-closing-meta" style={{ marginTop: '1rem' }}>
            Born 1936 &bull; Engineer, BHEL &bull; Father &bull; Grandfather
            <br />
            1936 &ndash; 2021
          </p>
          <p className={`ls-closing-om${lang === 'en-tr' ? ' ls-hindi-translit' : ''}`} style={{ marginTop: '1.5rem', fontSize: '1.2rem' }}>
            {lang === 'en-tr' ? 'Om Shanti Shanti Shanti' : '\u0950 \u0936\u093E\u0928\u094D\u0924\u093F \u0936\u093E\u0928\u094D\u0924\u093F \u0936\u093E\u0928\u094D\u0924\u093F'}
          </p>
          <div className="ls-links">
            <a
              href="https://youtu.be/Xd5GJCP_Imk?si=FH3-Zq1sNYO8K-st"
              target="_blank"
              rel="noopener noreferrer"
              className="ls-back-home"
            >
              &#9654;&ensp;Watch the conversation that inspired this narrative
            </a>
          </div>
          <Link to="/" className="ls-back-home">&larr; Return to Memorial</Link>
        </div>

      </div>

      <footer className="ls-footer">
        <div className="ls-footer-inner">
          <div className="ls-footer-links">
            <Link to="/" className="ls-footer-link">Memorial Home</Link>
            <Link to="/memories" className="ls-footer-link">Share a Memory</Link>
            <a
              href={`https://wa.me/?text=${encodeURIComponent('In loving memory of Umakant Bhargava (1936\u20132021). An engineer who built India\u2019s defense infrastructure, powered its trains, and protected its pipelines.\n\nhttps://mananb77.github.io/nana/')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ls-footer-link"
            >
              Share on WhatsApp
            </a>
          </div>
          <p className="ls-footer-family">The Bhargava Family</p>
          <p className="ls-footer-family-hindi">{lang === 'en-tr' ? 'Bhargav Parivar' : '\u092D\u093E\u0930\u094D\u0917\u0935 \u092A\u0930\u093F\u0935\u093E\u0930'}</p>
        </div>
      </footer>
    </div>
    </LangContext.Provider>
  );
}

export default LifeStory;
