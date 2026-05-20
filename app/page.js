import CountdownTimer from '@/components/CountdownTimer';
import ScrollReveal from '@/components/ScrollReveal';
import PurchaseToast from '@/components/PurchaseToast';

const CHECKOUT_URL = 'https://digiplex.mymaketou.store/fr/products/sois-la-femme-quun-homme-a-peur-de-perdre/checkout';
const WHATSAPP_URL = 'https://wa.me/2290148065585';

const testimonials = [
  {
    initials: 'MA',
    name: 'Mariama A.',
    city: 'Cotonou',
    text: "J'avais peur de le perdre tout le temps. En 2 semaines, c'est lui qui m'écrit en premier maintenant. Je ne fais plus rien comme avant.",
  },
  {
    initials: 'AS',
    name: 'Aïssatou S.',
    city: 'Dakar',
    text: "Le levier 7 m'a brisée. Je faisais TOUT ce qu'il fallait pas faire. Aujourd'hui je respire, et lui me cherche.",
  },
  {
    initials: 'GK',
    name: 'Grace K.',
    city: 'Abidjan',
    text: "Je donnais sans cadre depuis 4 ans. J'ai posé une limite — calme, claire. Il a complètement changé d'attitude en une semaine.",
  },
  {
    initials: 'NM',
    name: 'Nadège M.',
    city: 'Lomé',
    text: "J'ai compris pourquoi mes relations finissaient toujours pareil. Ce n'était pas eux. C'était ma posture. Merci ELYX.",
  },
];

const leviers = [
  { n: '01', titre: 'Comprendre la psychologie masculine', desc: "La base que personne ne t'a expliquée. Pourquoi un homme ne s'attache pas comme une femme." },
  { n: '02', titre: "L'erreur silencieuse qui détruit ta valeur", desc: 'Ce que tu fais sans le savoir et qui te fait perdre du terrain chaque jour.' },
  { n: '03', titre: "L'attitude intérieure d'une femme qu'on choisit", desc: 'La stabilité intérieure est plus attirante que la beauté. On t\'explique pourquoi.' },
  { n: '04', titre: "Les comportements qui créent l'attachement", desc: "Pourquoi un homme revient là où il se sent accepté — et nulle part ailleurs." },
  { n: '05', titre: 'La communication qui rapproche au lieu de fatiguer', desc: 'Parler pour te faire respecter, pas pour convaincre.' },
  { n: '06', titre: 'Les limites : là où naissent respect et fidélité', desc: "Ce que tu tolères, tu l'enseignes. Comment poser un cadre sans drame." },
  { n: '07', titre: "Ce qui pousse un homme à s'éloigner (même s'il t'aime)", desc: "L'insécurité tue l'attraction plus vite que l'indifférence." },
  { n: '08', titre: "L'énergie féminine qui donne envie de rester", desc: 'Sois un refuge, pas un champ de bataille. Sans devenir froide.' },
  { n: '09', titre: 'Ce qui rend la fidélité naturelle', desc: 'On ne retient pas un homme avec la peur. On le garde avec la valeur.' },
  { n: '10', titre: "Devenir la femme qu'on ne remplace pas", desc: 'Tu ne changes pas l\'homme. Tu changes la dynamique.' },
];

const purchases = [
  { initials: 'DT', name: 'Djénéba T.', city: 'Ouagadougou', time: 'il y a 2 min' },
  { initials: 'AM', name: 'Aïcha M.', city: 'Dakar', time: 'il y a 6 min' },
  { initials: 'SK', name: 'Sonia K.', city: 'Abidjan', time: 'il y a 12 min' },
];


export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <ScrollReveal />

      {/* ANNOUNCE BAR */}
      <div className="bg-ink text-ivory text-center py-2 px-4 text-[11px] sm:text-xs tracking-[0.18em] uppercase relative z-10">
        <span className="text-gold-light">◆</span>
        <span className="mx-3">Offre de lancement · Prix limité</span>
        <span className="text-gold-light">◆</span>
      </div>

      {/* HERO */}
      <section id="hero" className="relative z-10 bg-gradient-to-b from-rose-50 via-ivory to-ivory pt-10 pb-16 sm:pt-16 sm:pb-24">
        {/* decorative gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-100 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3 pointer-events-none"/>
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gold-light rounded-full blur-3xl opacity-20 pointer-events-none"/>

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Texte */}
          <div className="order-2 md:order-1 animate-fade-up">
            <p className="font-script text-gold text-xl sm:text-2xl mb-3">ELYX présente</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-ink text-balance">
              Sois la femme
              <span className="block italic font-light text-rose-500 mt-1">qu'un homme</span>
              <span className="block">ne veut jamais</span>
              <span className="block italic font-light text-rose-500">perdre.</span>
            </h1>

            <div className="ornament text-center my-7 text-gold text-xs tracking-[0.3em] uppercase max-w-xs">10 leviers</div>

            <p className="text-ash text-base sm:text-lg leading-relaxed max-w-xl text-balance">
              Le guide qui t'apprend à éveiller <em>l'attachement</em>, <em>la fidélité</em> et <em>le respect</em> chez un homme — sans supplier, sans contrôler, sans te trahir.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
              <a
                href={CHECKOUT_URL}
                className="btn-shimmer group inline-flex items-center justify-center bg-ink text-ivory px-7 py-4 rounded-sm font-medium tracking-wider text-sm uppercase hover:bg-rose-500 transition-colors"
              >
                Je veux mon guide — 2 500 FCFA
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-ash">
              <span className="flex items-center gap-1.5"><span className="text-gold">◆</span> Paiement sécurisé</span>
              <span className="flex items-center gap-1.5"><span className="text-gold">◆</span> Accès immédiat</span>
              <span className="flex items-center gap-1.5"><span className="text-gold">◆</span> 100% confidentiel</span>
            </div>
          </div>

          {/* Mockup */}
          <div className="order-1 md:order-2 relative flex justify-center animate-fade-in">
            <div className="relative w-[260px] sm:w-[320px] md:w-[360px] animate-float-slow">
              <div className="absolute -inset-8 bg-gradient-to-tr from-rose-200 via-transparent to-gold-light/30 blur-2xl rounded-full"/>
              <img
                src="/imagesoislafemme1.jpg"
                alt="Couverture du guide Sois la femme qu'un homme ne veut jamais perdre"
                className="relative w-full rounded-sm shadow-2xl ring-1 ring-black/5"
              />
              <div className="absolute -top-4 -right-2 sm:-right-5 bg-rose-500 text-white flex flex-col items-center justify-center px-4 py-2 rounded-sm shadow-xl transform rotate-3 border border-rose-300">
                <span className="text-sm sm:text-base font-bold tracking-wider">2 500 FCFA</span>
                <span className="text-[9px] uppercase tracking-[0.3em] opacity-90 mt-0.5">Seulement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL STORY */}
      <section className="relative z-10 bg-ivory py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <img
                src="/Prioritairee.png"
                alt="Femme sereine et confiante"
                className="w-full rounded-sm shadow-xl ring-1 ring-black/5 object-cover aspect-[4/5]"
              />
            </div>
            <div className="reveal">
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">La posture qui change tout</p>
              <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight text-balance">
                Devenir une femme <em className="text-rose-500">stable</em>,
                <span className="block italic font-light">respectée et choisie.</span>
              </h2>
              <p className="mt-5 text-ash text-lg leading-relaxed">
                Une femme qu'on ne veut pas perdre ne supplie pas. Elle se respecte, pose ses limites calmement,
                et inspire naturellement l'engagement. C'est exactement ce que ce guide t'apprend.
              </p>
              <ul className="mt-6 space-y-3 text-ash">
                {[
                  "Stabilité émotionnelle qui apaise un homme",
                  "Communication qui rapproche sans blesser",
                  "Cadre clair qui crée respect et fidélité",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold-light mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6 items-center">
            <div className="reveal bg-rose-50 p-10 sm:p-14 rounded-sm border border-rose-100 flex flex-col justify-center h-full">
              <span className="text-gold text-4xl mb-4 font-display">"</span>
              <p className="font-display text-2xl sm:text-3xl text-ink leading-snug mb-6">
                Le vrai pouvoir d'une femme réside dans sa capacité à rester douce tout en étant impossible à manipuler.
              </p>
              <p className="text-ash text-sm uppercase tracking-[0.2em]">— ELYX</p>
            </div>
            <div className="reveal flex justify-center items-center">
              <img
                src="/proritaire.png"
                alt="Couple connecté dans le respect"
                className="w-full max-w-[540px] h-auto rounded-sm shadow-xl ring-1 ring-black/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="relative z-10 bg-ivory py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Photos Collage */}
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4 reveal">
            <img src="/utile.jpg" alt="Emotion 1" className="w-full rounded-sm shadow-md ring-1 ring-black/5 object-cover aspect-[4/5] -translate-y-4" />
            <img src="/utilee.jpg" alt="Emotion 2" className="w-full rounded-sm shadow-md ring-1 ring-black/5 object-cover aspect-[4/5] translate-y-4" />
            <img src="/utileee.jpg" alt="Emotion 3" className="w-full rounded-sm shadow-md ring-1 ring-black/5 object-cover aspect-[4/5] -translate-y-4" />
            <img src="/Utileer.jpg" alt="Emotion 4" className="w-full rounded-sm shadow-md ring-1 ring-black/5 object-cover aspect-[4/5] translate-y-4" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="reveal mb-10 text-left">
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Tu te reconnais ?</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight text-balance">
                Ces pensées qui te <em className="text-rose-500">hantent</em> en silence…
              </h2>
            </div>

            <div className="space-y-4">
              {[
                "Tu donnes tout — du temps, de l'amour, de la patience. Et tu reçois si peu en retour.",
                "Tu te demandes pourquoi certaines femmes sont choisies, respectées, jamais remplacées… et pas toi.",
                "Tu sens qu'il s'éloigne sans comprendre ce qui a changé. Tu marches sur des œufs.",
                "Tu as peur de poser tes limites, peur qu'il parte, peur d'être trop ou pas assez.",
                "Tu sais au fond de toi qu'il existe une autre façon d'aimer. Sans te perdre.",
              ].map((t, i) => (
                <div key={i} className="reveal flex gap-4 bg-white/50 backdrop-blur-sm border border-rose-100 rounded-sm p-4 hover:border-rose-200 transition-colors">
                  <span className="text-rose-400 text-xl leading-none mt-0.5">✕</span>
                  <p className="text-ash text-sm sm:text-base leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROMESSE / RÉPONSE */}
      <section className="relative z-10 bg-ink text-ivory py-20 sm:py-28">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{backgroundImage: "radial-gradient(circle at 20% 30%, #B89265 0%, transparent 50%), radial-gradient(circle at 80% 70%, #C97A66 0%, transparent 50%)"}}/>
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <p className="font-script text-gold-light text-2xl mb-4 reveal">La vérité que personne n'ose dire</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-balance reveal">
            Ce n'est pas une question <em className="text-gold-light">de chance.</em>
            <br/>
            C'est une question <em className="text-gold-light">d'information.</em>
          </h2>
          <div className="ornament my-8 text-gold text-xs tracking-[0.3em] uppercase reveal"/>
          <p className="text-cream/80 text-lg sm:text-xl leading-relaxed reveal text-balance">
            Les femmes qui souffrent le plus en amour ne sont pas celles qui n'aiment pas assez. Ce sont celles qui aiment <em>sans cadre</em>, qui se donnent <em>sans se protéger</em>, qui confondent <em>patience</em> avec <em>sacrifice</em>.
          </p>
          <p className="mt-6 text-cream/80 text-lg sm:text-xl leading-relaxed reveal text-balance">
            Personne ne t'a appris comment fonctionne réellement l'attachement chez un homme. <span className="text-gold-light italic">Ce guide le fait.</span>
          </p>
          <a
            href={CHECKOUT_URL}
            className="btn-shimmer inline-flex items-center mt-10 bg-gold hover:bg-gold-light text-ink px-8 py-4 rounded-sm font-medium tracking-wider text-sm uppercase transition-colors reveal"
          >
            Je veux cette information →
          </a>
        </div>
      </section>

      {/* CE QU'IL Y A DANS LE GUIDE — 10 LEVIERS */}
      <section className="relative z-10 bg-ivory py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Dans ce guide</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight text-balance">
              10 leviers puissants
              <span className="block italic font-light text-rose-500">qui changent tout.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5">
            {leviers.map((l) => (
              <div key={l.n} className="reveal group relative bg-white border border-cream rounded-sm p-6 sm:p-7 hover:border-gold/40 hover:shadow-lg transition-all">
                <div className="flex items-start gap-5">
                  <span className="font-display text-4xl sm:text-5xl text-rose-200 group-hover:text-gold transition-colors leading-none">{l.n}</span>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-ink leading-snug mb-2">{l.titre}</h3>
                    <p className="text-ash text-sm sm:text-base leading-relaxed">{l.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-ash italic text-sm sm:text-base reveal">
            Chaque levier = un déclic. Chaque déclic = un changement réel dans ta relation.
          </p>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="relative z-10 bg-gradient-to-b from-cream to-ivory py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Elles l'ont vécu</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight text-balance">
              Des femmes qui ont <em className="text-rose-500">osé</em> changer.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="reveal bg-white p-7 sm:p-8 rounded-sm border border-rose-100 relative">
                <div className="absolute top-6 right-7 font-display text-7xl text-rose-100 leading-none">"</div>
                <div className="text-gold-light tracking-[0.3em] text-sm mb-3">★★★★★</div>
                <p className="text-ink text-base sm:text-lg leading-relaxed mb-6 relative z-10 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-cream">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-200 to-gold flex items-center justify-center text-white font-medium text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-ink font-medium text-sm">{t.name}</p>
                    <p className="text-ash text-xs">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREUVES WHATSAPP */}
      <section className="relative z-10 bg-ivory py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12 reveal">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Preuves réelles</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight text-balance">
              Leurs messages parlent
              <span className="block italic font-light text-rose-500">d'eux-mêmes.</span>
            </h2>
          </div>
          <div className="flex justify-center reveal">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-rose-100 to-gold-light/40 blur-2xl rounded-full opacity-50"/>
              <img
                src="/whatsapp-feedback.svg"
                alt="Messages WhatsApp de clientes ELYX"
                className="relative w-full max-w-[380px] rounded-2xl shadow-2xl ring-1 ring-black/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OFFRE */}
      <section id="offer" className="relative z-10 bg-ink text-ivory py-20 sm:py-28">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{backgroundImage: "radial-gradient(circle at 50% 50%, #B89265 0%, transparent 60%)"}}/>
        <div className="relative max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <p className="font-script text-gold-light text-2xl mb-4 reveal">Offre exclusive</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-balance reveal">
            Tout ça pour seulement
            <span className="block gold-gradient italic mt-2">2 500 FCFA.</span>
          </h2>

          <p className="mt-6 text-cream/70 text-sm reveal tracking-wider uppercase">Offre de lancement — se termine dans :</p>
          <div className="mt-5 reveal">
            <CountdownTimer />
          </div>

          <div className="mt-10 bg-ivory/5 backdrop-blur-sm border border-gold/20 rounded-sm p-7 sm:p-9 text-left reveal">
            <ul className="space-y-4">
              {[
                'Guide complet — 10 leviers, 20+ pages structurées',
                'Exercices pratiques à appliquer dès ce soir',
                'Tests de valeur personnelle et rituels concrets',
                'Accès immédiat après paiement — PDF lisible partout',
                'Lecture discrète sur tous tes appareils · Accès à vie',
              ].map((it, i) => (
                <li key={i} className="flex items-start gap-3 text-cream">
                  <span className="text-gold-light mt-1">✓</span>
                  <span className="text-sm sm:text-base">{it}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={CHECKOUT_URL}
            className="btn-shimmer inline-flex items-center justify-center mt-10 bg-gold hover:bg-gold-light text-ink px-8 py-5 rounded-sm font-medium tracking-wider text-sm uppercase transition-colors w-full sm:w-auto reveal"
          >
            Je prends mon guide maintenant — 2 500 FCFA →
          </a>

          <p className="mt-6 text-cream/60 text-xs reveal">🔒 Paiement 100% sécurisé · Choisis ton moyen :</p>
          <p className="mt-3 text-cream/80 text-sm tracking-wide reveal">
            Wave · Orange Money · MTN · Moov Africa · Airtel · +20 modes
          </p>
        </div>
      </section>

      {/* DEUX CHEMINS */}
      <section className="relative z-10 bg-ivory py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Tu as deux chemins devant toi</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight text-balance">
              Quel choix feras-tu
              <span className="block italic font-light text-rose-500">aujourd'hui ?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="reveal flex flex-col bg-white border border-cream rounded-sm overflow-hidden opacity-90 transition-opacity hover:opacity-100">
              <img src="/utiler.jpg" alt="Choix 1" className="w-full h-auto" />
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-xs text-ash tracking-[0.25em] uppercase mb-3">Choix 1 — Continuer</p>
                <h3 className="font-display text-2xl text-ash mb-4">Laisser les choses comme elles sont…</h3>
                <p className="text-ash leading-relaxed">
                  Continuer à donner sans cadre. Marcher sur des œufs. Avoir peur qu'il parte. Te demander chaque jour ce que tu fais de travers. Recommencer dans la prochaine relation. Pour toujours.
                </p>
              </div>
            </div>
            <div className="reveal flex flex-col bg-gradient-to-br from-rose-50 to-ivory border-2 border-gold rounded-sm shadow-xl overflow-hidden transform md:-translate-y-4">
              <img src="/utilere.jpg" alt="Choix 2" className="w-full h-auto" />
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-xs text-gold tracking-[0.25em] uppercase mb-3">Choix 2 — Te libérer</p>
                <h3 className="font-display text-2xl text-ink mb-4">Devenir cette femme qu'on choisit.</h3>
                <p className="text-ink leading-relaxed">
                  Comprendre enfin comment fonctionne l'attachement. Poser des limites sans drame. Voir un homme s'investir parce que <em>tu apportes</em>, pas parce que tu retiens. Dès cette semaine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 bg-gradient-to-b from-ivory to-rose-50 py-20 sm:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal relative flex justify-center">
             <div className="absolute -inset-4 bg-gradient-to-tr from-rose-200 to-gold-light/20 blur-2xl rounded-full opacity-60 pointer-events-none"/>
             <div className="relative group">
                <img src="/prioritaireee.png" alt="Femme épanouie et prioritaire" className="relative w-[90%] sm:w-full max-w-[450px] h-auto rounded-sm shadow-2xl ring-1 ring-black/5" />
                
                {/* Cache-Logo ELYX (Patch en bas à droite) */}
                <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 bg-ink/90 backdrop-blur-sm pt-[2px] pb-[3px] px-3 rounded-sm shadow-md border border-gold/30">
                  <span className="font-display text-gold-light text-xs sm:text-sm tracking-[0.2em]">ELYX</span>
                </div>
             </div>
          </div>
          <div className="reveal text-left">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight text-balance">
              Chaque jour sans agir,
              <span className="block italic text-rose-500 mt-2">c'est une partie de toi qui s'éteint.</span>
            </h2>
            <p className="mt-7 text-ash text-lg leading-relaxed text-balance">
              Tu n'achètes pas un guide. Tu investis dans <em>ta valeur</em> — et dans une manière d'aimer qui ne te détruira plus jamais. Fais de toi ta propre priorité.
            </p>
            <a
              href={CHECKOUT_URL}
              className="btn-shimmer inline-flex items-center justify-center mt-10 bg-ink hover:bg-rose-500 text-ivory px-8 py-5 rounded-sm font-medium tracking-wider text-sm uppercase transition-colors"
            >
              🌸 Je me libère maintenant — 2 500 FCFA
            </a>
            <p className="mt-6 text-ash text-sm">
              Une question ? <a href={WHATSAPP_URL} className="text-rose-500 underline hover:text-rose-600">Écris-nous sur WhatsApp</a>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 bg-ink text-cream/60 py-10 text-center">
        <div className="max-w-3xl mx-auto px-5">
          <p className="font-display text-2xl text-ivory tracking-widest">ELYX</p>
          <p className="text-xs mt-2 tracking-widest uppercase">Le féminin réinventé</p>
          <p className="text-xs mt-6">Wave · Orange Money · MTN · Moov · Airtel · +20 modes</p>
          <p className="text-[11px] mt-6 opacity-70">© 2026 ELYX — Tous droits réservés · Contenu destiné aux adultes · 100% confidentiel</p>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-ink/95 backdrop-blur-md border-t border-gold/30 p-3 flex sm:hidden items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.3)] touch-none">
        <div className="text-ivory pl-2">
          <p className="text-[10px] uppercase tracking-widest text-gold-light mb-0.5">Offre spéciale</p>
          <p className="font-display text-lg leading-none">2 500 <span className="text-xs">FCFA</span></p>
        </div>
        <a
          href={CHECKOUT_URL}
          className="bg-gold hover:bg-gold-light text-ink px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors shadow-lg active:scale-95"
        >
          Je le veux →
        </a>
      </div>

      <PurchaseToast purchases={purchases} productName="Sois la femme" />
    </main>
  );
}
