import { useState } from 'react';

/* ====== TES INFOS (modifie ici facilement) ====== */
const INFO = {
  name: 'NYUIADZI YAWOGAN ABRAHAM',
  email: 'nyuiabra@gmail.com',
  phone: '+228 96 44 26 07',
  city: 'Lomé (TOGO)',
  github: 'https://github.com/abrahamnyuiadzi',
  linkedin: 'https://www.linkedin.com/in/yawogan-abraham-nyuiadzi-6a9668375',
  photo: '/photo.jpg', // mets ta photo dans le dossier "public" sous ce nom
  cv: '/cv.pdf', // mets ton CV dans le dossier "public" sous ce nom
};

const SKILLS = [
  { title: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js'] },
  { title: 'Backend', items: ['Laravel', 'MySQL'] },
  { title: 'Mobile', items: ['Flutter'] },
  { title: 'CMS', items: ['WordPress'] },
  { title: 'Design & Outils', items: ['Figma'] },
];

const PROJECTS = [
  {
    title: { fr: 'Application de vote', en: 'Voting application' },
    tags: ['Flutter', 'React.js'],
    points: {
      fr: [
        "Développement de l'application mobile avec Flutter",
        'Développement de la version web avec React.js',
        'Authentification sécurisée des utilisateurs',
        'Vote en temps réel',
        'Affichage dynamique des résultats',
      ],
      en: [
        'Mobile app built with Flutter',
        'Web version built with React.js',
        'Secure user authentication',
        'Real-time voting',
        'Dynamic display of results',
      ],
    },
  },
  {
    title: { fr: 'Application de football', en: 'Football application' },
    tags: ['Laravel', 'MySQL'],
    points: {
      fr: [
        'Interfaces avec Blade template Engine',
        'Gestion des routes, contrôleurs et modèles',
        'Base de données avec MySQL',
        'Affichage dynamique des matchs, statistiques et résultats',
      ],
      en: [
        'Interfaces with the Blade template engine',
        'Routes, controllers and models management',
        'MySQL database design',
        'Dynamic display of matches, stats and results',
      ],
    },
  },
  {
    title: { fr: 'Site Web Agence de Communication', en: 'Communication Agency Website' },
    tags: ['WordPress', 'Figma'],
    points: {
      fr: [
        'Conception complète sous WordPress',
        'Personnalisation du thème',
        'Intégration des services, portfolio et formulaire de contact',
        'Optimisation SEO et responsive design',
      ],
      en: [
        'Full website built with WordPress',
        'Custom theme',
        'Services, portfolio and contact form integration',
        'SEO optimization and responsive design',
      ],
    },
  },
];

const EDUCATION = [
  { logo: 'ADN', years: '2025 - 2026', school: 'ADN | Académie digitale Numérique',
    title: { fr: 'Certificat en développement web', en: 'Web development certificate' } },
  { logo: 'BYU', years: '2021 - 2025', school: 'BYU Pathway Worldwide | BYU',
    title: { fr: 'Bachelor en développement web', en: "Bachelor's degree in web development" } },
];

/* ====== TEXTES FR / EN ====== */
const T = {
  fr: {
    nav: ['Accueil', 'À propos', 'Compétences', 'Projets', 'Formation', 'Contact'],
    hello: 'Bonjour, je suis',
    role: 'Développeur Web & Mobile',
    intro: 'Je conçois et développe des applications web et mobiles modernes, sécurisées et responsives.',
    seeProjects: 'Voir mes projets',
    downloadCv: 'Télécharger mon CV',
    aboutTitle: 'À propos de moi',
    about1: "Développeur Web Full-Stack passionné, spécialisé dans la conception d'applications web et mobiles modernes. Titulaire d'un Bachelor en Web Development (2025) via BYU Pathway Worldwide et actuellement en phase d'être diplômé à l'Académie Digital Numérique (ADN), je développe des solutions performantes et adaptées aux besoins des utilisateurs.",
    about2: "Je combine compétences techniques solides et capacité d'analyse pour concevoir des applications dynamiques, sécurisées et responsives.",
    skillsTitle: 'Mes compétences',
    skillsSub: "Technologies et outils que j'utilise pour créer des solutions modernes et performantes.",
    projectsTitle: 'Mes projets',
    projectsSub: "Quelques projets que j'ai réalisés pour mettre en pratique mes compétences et relever de nouveaux défis.",
    seeProject: 'Voir le projet',
    eduTitle: 'Formation',
    contactTitle: 'Contactez-moi',
    contactSub: "Je suis disponible pour vos projets, vos questions ou toute opportunité professionnelle. N'hésitez pas à me contacter !",
    phone: 'Téléphone',
    location: 'Localisation',
    social: 'Réseaux sociaux',
    fName: 'Nom',
    fEmail: 'Email',
    fMsg: 'Message',
    send: 'Envoyer le message',
    cvTitle: 'Mon CV',
    cvSub: 'Téléchargez mon CV pour en savoir plus sur mon parcours, mes compétences et mes expériences.',
    quote: '« Des idées aux solutions, je développe votre avenir numérique. »',
  },
  en: {
    nav: ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'],
    hello: "Hello, I'm",
    role: 'Web & Mobile Developer',
    intro: 'I design and build modern, secure and responsive web and mobile applications.',
    seeProjects: 'See my projects',
    downloadCv: 'Download my CV',
    aboutTitle: 'About me',
    about1: "Passionate Full-Stack Web Developer specialized in building modern web and mobile applications. I hold a Bachelor's Degree in Web Development (2025) from BYU Pathway Worldwide and I am about to graduate from Académie Digital Numérique (ADN). I build efficient solutions tailored to users' needs.",
    about2: 'I combine solid technical skills with strong analytical thinking to build dynamic, secure and responsive applications.',
    skillsTitle: 'My skills',
    skillsSub: 'Technologies and tools I use to build modern and efficient solutions.',
    projectsTitle: 'My projects',
    projectsSub: 'A few projects I built to put my skills into practice and take on new challenges.',
    seeProject: 'View project',
    eduTitle: 'Education',
    contactTitle: 'Contact me',
    contactSub: "I'm available for your projects, questions or any professional opportunity. Feel free to reach out!",
    phone: 'Phone',
    location: 'Location',
    social: 'Social media',
    fName: 'Name',
    fEmail: 'Email',
    fMsg: 'Message',
    send: 'Send message',
    cvTitle: 'My CV',
    cvSub: 'Download my CV to learn more about my background, skills and experience.',
    quote: '"From ideas to solutions, I build your digital future."',
  },
};

const IDS = ['accueil', 'apropos', 'competences', 'projets', 'formation', 'contact'];

/* ====== STYLES ====== */
const css = `
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Segoe UI',system-ui,sans-serif;background:#f6f9ff;color:#14213d;line-height:1.6}
a{text-decoration:none;color:inherit}
.wrap{max-width:1100px;margin:0 auto;padding:0 20px}
section{padding:80px 0;scroll-margin-top:60px}
.navbar{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.92);backdrop-filter:blur(8px);border-bottom:1px solid #e3ebf8}
.navbar .wrap{display:flex;align-items:center;justify-content:space-between;height:64px;gap:16px}
.brand{font-weight:800;font-size:15px;letter-spacing:.3px}
.links{display:flex;gap:22px;font-size:14px}
.links a{color:#475569}
.links a:hover{color:#1c5cf2}
.lang{display:flex;border:1px solid #1c5cf2;border-radius:20px;overflow:hidden;font-size:12px}
.lang button{border:0;background:#fff;color:#1c5cf2;padding:5px 11px;cursor:pointer;font-weight:700}
.lang button.on{background:#1c5cf2;color:#fff}
.burger{display:none;border:0;background:none;font-size:26px;cursor:pointer;color:#14213d}
.hero{padding-top:70px}
.who{display:flex;align-items:center;gap:20px;margin-bottom:6px}
.hello{color:#475569;margin-bottom:6px}
h1{font-size:clamp(32px,5vw,50px);line-height:1.1;color:#0b1f4d;font-weight:800}
.role{font-size:22px;font-weight:700;margin:14px 0 8px;color:#14213d}
.intro{color:#475569;max-width:440px}
.btns{display:flex;gap:12px;flex-wrap:wrap;margin:26px 0}
.btn{display:inline-block;padding:11px 20px;border-radius:6px;font-weight:600;font-size:14px;border:1.5px solid #1c5cf2;cursor:pointer;transition:.2s}
.btn.fill{background:#1c5cf2;color:#fff}
.btn.fill:hover{background:#0f43c2}
.btn.line{background:#fff;color:#1c5cf2}
.btn.line:hover{background:#eaf1ff}
.socials{display:flex;gap:18px;font-size:14px;color:#334155}
.socials a:hover{color:#1c5cf2}
.photo{position:relative;width:100px;height:100px;flex-shrink:0;border-radius:50%;overflow:hidden;border:4px solid #fff;background:linear-gradient(160deg,#dce8ff,#f0f5ff);box-shadow:0 6px 20px rgba(28,92,242,.25);display:flex;align-items:center;justify-content:center}
.photo-icon{font-size:40px;opacity:.35}
.photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 55%}
.num{color:#1c5cf2;font-weight:700;font-size:13px}
h2{font-size:30px;color:#0b1f4d;margin:4px 0 14px;position:relative;padding-bottom:12px}
h2::after{content:'';position:absolute;left:0;bottom:0;width:40px;height:3px;background:#1c5cf2;border-radius:2px}
.sub{color:#475569;margin-bottom:30px;max-width:620px}
.about{display:grid;grid-template-columns:1.2fr 1fr;gap:40px;align-items:center}
.about p{color:#334155;margin-bottom:14px}
.about-box{background:#0b1f4d;color:#cfe0ff;border-radius:16px;padding:22px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;box-shadow:0 16px 40px rgba(11,31,77,.25)}
.about-box b{color:#7fb0ff}
.infos{display:flex;flex-wrap:wrap;gap:12px 28px;margin-top:20px;font-size:14px;color:#334155}
.card{background:#fff;border:1px solid #e3ebf8;border-radius:12px;padding:20px}
.skills{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px}
.skills h3{font-size:15px;margin-bottom:14px;color:#0b1f4d}
.chips{display:flex;flex-wrap:wrap;gap:8px}
.chips span{background:#eaf1ff;color:#1c5cf2;padding:6px 12px;border-radius:20px;font-size:13px;font-weight:600}
.projects{display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:20px}
.project{display:flex;flex-direction:column;transition:.2s}
.project:hover{transform:translateY(-4px);box-shadow:0 14px 30px rgba(28,92,242,.12)}
.project h3{font-size:18px;color:#0b1f4d;margin:10px 0}
.project ul{padding-left:18px;color:#475569;font-size:14px;margin:12px 0 18px;flex:1}
.project li{margin-bottom:4px}
.project .btn{align-self:flex-start;padding:8px 16px;font-size:13px}
.edu{display:flex;align-items:center;gap:16px;margin-bottom:16px}
.logo{width:54px;height:54px;border-radius:50%;background:#0b1f4d;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;flex-shrink:0}
.edu .grow{flex:1}
.edu strong{display:block;color:#0b1f4d}
.edu small{color:#64748b}
.edu .years{font-weight:700;font-size:14px}
.contact{display:grid;grid-template-columns:1fr 1.2fr;gap:30px}
.contact .row{margin-bottom:16px;font-size:14px}
.contact .row b{display:block;color:#0b1f4d}
.contact .row a{color:#1c5cf2}
form{display:flex;flex-direction:column;gap:12px}
input,textarea{width:100%;padding:12px;border:1px solid #cfd9ec;border-radius:6px;font:inherit;background:#fff}
input:focus,textarea:focus{outline:2px solid #bcd3ff;border-color:#1c5cf2}
textarea{min-height:120px;resize:vertical}
.cv{text-align:center}
.cv h2::after{left:50%;transform:translateX(-50%)}
.cv .sub{margin-left:auto;margin-right:auto}
.quote{text-align:center;padding:40px 20px;color:#475569;font-style:italic;border-top:1px solid #e3ebf8;background:#fff}
.quote small{display:block;margin-top:6px;font-style:normal;font-weight:700;color:#0b1f4d}
@media(max-width:820px){
  .links{display:none;position:absolute;top:64px;left:0;right:0;background:#fff;flex-direction:column;padding:16px 20px;gap:14px;border-bottom:1px solid #e3ebf8}
  .links.open{display:flex}
  .burger{display:block}
  .about,.contact{grid-template-columns:1fr}
  .photo{width:80px;height:80px}
  section{padding:56px 0}
}
`;

function App() {
  const [lang, setLang] = useState('fr');
  const [menu, setMenu] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', msg: '' });
  const t = T[lang];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Ouvre le client mail avec le message déjà rempli
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `${form.msg}\n\n${form.name} (${form.email})`;
    window.location.href = `mailto:${INFO.email}?subject=${encodeURIComponent(
      'Contact portfolio - ' + form.name
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <style>{css}</style>

      {/* ===== NAVBAR ===== */}
      <header className="navbar">
        <div className="wrap">
          <a className="brand" href="#accueil">{INFO.name}</a>
          <nav className={'links' + (menu ? ' open' : '')}>
            {IDS.map((id, i) => (
              <a key={id} href={'#' + id} onClick={() => setMenu(false)}>{t.nav[i]}</a>
            ))}
          </nav>
          <div className="lang">
            <button className={lang === 'fr' ? 'on' : ''} onClick={() => setLang('fr')}>FR</button>
            <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
          <button className="burger" onClick={() => setMenu(!menu)} aria-label="menu">☰</button>
        </div>
      </header>

      <main>
        {/* ===== ACCUEIL ===== */}
        <section id="accueil" className="wrap hero">
          <div>
            <div className="who">
              <div className="photo">
                <span className="photo-icon">👤</span>
                <img
                  src={INFO.photo}
                  alt={INFO.name}
                  onError={(e) => (e.target.style.display = 'none')}
                />
              </div>
              <div>
                <p className="hello">{t.hello}</p>
                <h1>{INFO.name}</h1>
              </div>
            </div>
            <p className="role">{t.role}</p>
            <p className="intro">{t.intro}</p>
            <div className="btns">
              <a className="btn fill" href="#projets">{t.seeProjects}</a>
              <a className="btn line" href={INFO.cv} download="CV-Nyuiadzi-Abraham.pdf" target="_blank" rel="noreferrer">⭳ {t.downloadCv}</a>
            </div>
            <div className="socials">
              <a href={INFO.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={INFO.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={'mailto:' + INFO.email}>Email</a>
            </div>
          </div>
        </section>

        {/* ===== À PROPOS ===== */}
        <section id="apropos">
          <div className="wrap about">
            <div>
              <span className="num">01</span>
              <h2>{t.aboutTitle}</h2>
              <p>{t.about1}</p>
              <p>{t.about2}</p>
              <div className="infos">
                <span>📞 {INFO.phone}</span>
                <span>✉️ {INFO.email}</span>
                <span>📍 {INFO.city}</span>
              </div>
            </div>
            <div className="about-box">
              <div><b>const</b> developer = {'{'}</div>
              <div>&nbsp;&nbsp;name: 'Abraham',</div>
              <div>&nbsp;&nbsp;role: 'Full-Stack',</div>
              <div>&nbsp;&nbsp;stack: ['React', 'Laravel', 'Flutter'],</div>
              <div>&nbsp;&nbsp;learning: true,</div>
              <div>{'};'}</div>
            </div>
          </div>
        </section>

        {/* ===== COMPÉTENCES ===== */}
        <section id="competences">
          <div className="wrap">
            <span className="num">02</span>
            <h2>{t.skillsTitle}</h2>
            <p className="sub">{t.skillsSub}</p>
            <div className="skills">
              {SKILLS.map((group) => (
                <div className="card" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="chips">
                    {group.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROJETS ===== */}
        <section id="projets">
          <div className="wrap">
            <span className="num">03</span>
            <h2>{t.projectsTitle}</h2>
            <p className="sub">{t.projectsSub}</p>
            <div className="projects">
              {PROJECTS.map((p) => (
                <article className="card project" key={p.title.fr}>
                  <div className="chips">
                    {p.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <h3>{p.title[lang]}</h3>
                  <ul>
                    {p.points[lang].map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                  <a className="btn fill" href={INFO.github} target="_blank" rel="noreferrer">
                    {t.seeProject} →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FORMATION ===== */}
        <section id="formation">
          <div className="wrap">
            <span className="num">04</span>
            <h2>{t.eduTitle}</h2>
            {EDUCATION.map((e) => (
              <div className="card edu" key={e.logo}>
                <div className="logo">{e.logo}</div>
                <div className="grow">
                  <strong>{e.title[lang]}</strong>
                  <small>{e.school}</small>
                </div>
                <span className="years">{e.years}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contact">
          <div className="wrap">
            <span className="num">05</span>
            <h2>{t.contactTitle}</h2>
            <p className="sub">{t.contactSub}</p>
            <div className="contact">
              <div>
                <div className="row"><b>Email</b>{INFO.email}</div>
                <div className="row"><b>{t.phone}</b>{INFO.phone}</div>
                <div className="row"><b>{t.location}</b>{INFO.city}</div>
                <div className="row">
                  <b>{t.social}</b>
                  <a href={INFO.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                  {' · '}
                  <a href={INFO.github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
              <form className="card" onSubmit={handleSubmit}>
                <input name="name" placeholder={t.fName} value={form.name} onChange={handleChange} required />
                <input name="email" type="email" placeholder={t.fEmail} value={form.email} onChange={handleChange} required />
                <textarea name="msg" placeholder={t.fMsg} value={form.msg} onChange={handleChange} required />
                <button className="btn fill" type="submit">{t.send}</button>
              </form>
            </div>
          </div>
        </section>

        {/* ===== CV ===== */}
        <section className="cv">
          <div className="wrap">
            <span className="num">06</span>
            <h2>{t.cvTitle}</h2>
            <p className="sub">{t.cvSub}</p>
            <a className="btn fill" href={INFO.cv} download="CV-Nyuiadzi-Abraham.pdf" target="_blank" rel="noreferrer">⭳ {t.downloadCv}</a>
          </div>
        </section>
      </main>

      <footer className="quote">
        {t.quote}
        <small>— {INFO.name}</small>
      </footer>
    </>
  );
}

export default App;