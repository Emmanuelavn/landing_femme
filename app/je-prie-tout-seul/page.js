import CountdownTimer from '@/components/CountdownTimer';
import ScrollReveal from '@/components/ScrollReveal';

const CHECKOUT_URL = 'https://digiplex.mymaketou.store/fr/products/je-prie-tout-seul/checkout';
const WHATSAPP_URL = 'https://wa.me/2290148065585';

const prayerThemes = [
  {
    title: 'Merci Jesus pour cette journee',
    description:
      "Apprendre a finir la journee avec un coeur reconnaissant, meme pour les petites choses.",
    verse: '1 Thessaloniciens 5:18',
  },
  {
    title: 'Jesus, veille sur moi cette nuit',
    description:
      "Aider l'enfant a dormir en paix, sans peur, avec la certitude d'etre protege.",
    verse: 'Psaume 4:9',
  },
  {
    title: 'Pardon Jesus',
    description:
      "Lui apprendre a reconnaitre ses erreurs, demander pardon et s'endormir le coeur leger.",
    verse: '1 Jean 1:9',
  },
  {
    title: 'Benis ma famille Jesus',
    description:
      "Faire grandir l'amour de la famille et le reflexe de confier sa maison a Dieu.",
    verse: 'Josue 24:15',
  },
  {
    title: 'Jesus, tu es mon ami',
    description:
      "Ancrer tres tot une relation simple, directe et affectueuse avec Jesus.",
    verse: 'Jean 15:15',
  },
  {
    title: 'Jesus, donne-moi un coeur joyeux',
    description:
      "Mettre des mots sur la tristesse, la solitude ou les larmes, puis les remettre a Dieu.",
    verse: 'Nehemie 8:10',
  },
];

const benefits = [
  "30 prieres du soir, ecrites pour les enfants de 4 a 12 ans",
  "Des mots simples pour dire merci, demander pardon, vaincre la peur et dormir en paix",
  "Des versets bibliques courts pour enraciner la priere dans la Parole",
  "Un guide d'utilisation clair pour les parents selon l'age de l'enfant",
  'Une routine douce qui aide l enfant a prier seul, sans pression ni confusion',
];

const parentNeeds = [
  "Tu veux transmettre la foi a ton enfant, mais tu ne sais pas toujours quels mots lui donner.",
  "Le coucher est parfois bruyant, tendu ou expeditif, alors que tu voudrais finir la journee dans la paix.",
  "Ton enfant a parfois peur la nuit, fait des cauchemars, ou s'endort avec le coeur agite.",
  "Tu veux qu'il apprenne a parler a Jesus lui-meme, pas seulement a repeter une formule vide.",
  "Tu cherches un support chretien simple, beau et deja pret a utiliser chaque soir.",
];

const steps = [
  {
    number: '01',
    title: 'Installer un rendez-vous avec Dieu',
    description:
      "Le livre transforme le coucher en moment attendu: calme, rassurant et facile a repeter chaque soir.",
  },
  {
    number: '02',
    title: 'Mettre des mots sur ce que l enfant vit',
    description:
      "Gratitude, peur, joie, pardon, famille, protection: chaque priere part du quotidien reel de l'enfant.",
  },
  {
    number: '03',
    title: 'L amener vers l autonomie spirituelle',
    description:
      "Le but du livre n'est pas seulement que tu pries avec lui, mais qu'il apprenne peu a peu a prier tout seul.",
  },
  {
    number: '04',
    title: 'Ancrer la paix avant le sommeil',
    description:
      "L'enfant ne ferme pas seulement les yeux. Il depose sa journee, ses emotions et sa nuit entre les mains de Dieu.",
  },
];

const gains = [
  {
    title: 'Un coucher paisible',
    text: "Moins de stress, plus de calme. Le soir devient un moment attendu.",
  },
  {
    title: 'Des mots simples',
    text: "Ton enfant exprime ce qu'il vit avec des phrases qu'il comprend.",
  },
  {
    title: 'Une foi vivante',
    text: "Il apprend à parler à Jésus avec confiance, pas seulement à réciter.",
  },
  {
    title: 'Une routine douce',
    text: '5 à 7 minutes suffisent pour finir la journée dans la paix.',
  },
];

const previews = [
  {
    title: 'Merci Jésus',
    text: 'Des mots simples pour cultiver la gratitude, même les jours difficiles.',
  },
  {
    title: 'Pardon & guérison',
    text: "Aider l'enfant à déposer ses erreurs et s'endormir le cœur léger.",
  },
  {
    title: 'Paix & protection',
    text: 'Chasser la peur du soir et remettre la nuit entre les mains de Dieu.',
  },
];

const testimonials = [
  {
    name: 'Esther K.',
    city: 'Porto-Novo',
    text: "Depuis qu'on utilise le livre, le coucher est devenu doux. Mon fils prie seul et s'endort apaisé.",
  },
  {
    name: 'Mariam A.',
    city: 'Abidjan',
    text: "Les mots sont simples et beaux. Ma fille a arrêté d'avoir peur la nuit. C'est un vrai rituel.",
  },
  {
    name: 'Solange D.',
    city: 'Lomé',
    text: "On finit la journée dans la paix. Même quand je suis fatiguée, le livre nous guide pas à pas.",
  },
];

export const metadata = {
  title: 'Je prie tout seul - 30 prieres du soir pour enfants',
  description:
    "Une landing pour le livre chretien 'Je prie tout seul' : 30 prieres du soir pour aider les enfants de 4 a 12 ans a parler a Jesus avec leurs propres mots.",
  openGraph: {
    title: 'Je prie tout seul',
    description:
      "30 prieres du soir pour enfants de 4 a 12 ans. Un livre pour apprendre a ton enfant a prier seul, dans la paix.",
    type: 'website',
  },
};

export default function JePrieToutSeulPage() {
  return (
    <main className="theme-prie relative overflow-x-hidden bg-[#1A103C] text-[#FAF7F0]">
      <ScrollReveal />

      <div className="bg-[#161239] text-[#FAF7F0] text-center py-2 px-4 text-[11px] sm:text-xs tracking-[0.18em] uppercase relative z-10">
        <span className="text-[#FCD34D]">◆</span>
        <span className="mx-3">Rituel du soir chrétien · accès immédiat</span>
        <span className="text-[#FCD34D]">◆</span>
      </div>

      <section
        id="hero"
        className="relative z-10 overflow-hidden bg-[linear-gradient(180deg,#1A103C_0%,#1E1B4B_50%,#1A103C_100%)] pt-12 pb-16 sm:pt-20 sm:pb-24"
      >
        <div className="absolute -top-24 left-0 h-[420px] w-[420px] rounded-full bg-[#FCD34D]/15 blur-3xl pointer-events-none" />
        <div className="absolute right-0 top-10 h-[480px] w-[480px] rounded-full bg-[#8B5CF6]/20 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(252,211,77,0.10),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.14),transparent_50%)]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1 animate-fade-up">
            <div className="mb-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.28em]">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[#FAF7F0]">PDF immédiat</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-[#FAF7F0]">4 à 12 ans</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-[#FAF7F0]">Rituel du soir</span>
            </div>
            <p className="font-script text-[#FCD34D] text-xl sm:text-2xl mb-3">Le rituel du soir qui apaise</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-[#FAF7F0] text-balance">
              Apprends à ton enfant
              <span className="block italic font-light text-[#FCD34D] mt-1">à parler à Jésus</span>
              <span className="block">avec ses propres mots,</span>
              <span className="block italic font-light text-[#FCD34D]">dès ce soir.</span>
            </h1>

            <div className="ornament text-center my-7 text-[#FCD34D] text-xs tracking-[0.3em] uppercase max-w-xs">
              30 prieres du soir
            </div>

            <p className="max-w-xl text-balance text-base leading-relaxed text-[#E7E1D6] sm:text-lg">
              <em>Je prie tout seul</em> aide les enfants de 4 à 12 ans à terminer leur journée dans la paix, la foi et la
              confiance grâce à des prières simples qu'ils peuvent comprendre, aimer et refaire seuls.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
              <a
                href={CHECKOUT_URL}
                className="btn-shimmer group inline-flex items-center justify-center rounded-sm bg-[#10B981] px-7 py-4 text-sm font-medium uppercase tracking-wider text-[#0B1E16] transition-colors hover:bg-[#0EA371]"
              >
                Je veux ce rituel — 2 500 FCFA
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#E7E1D6]">
              <span className="flex items-center gap-1.5"><span className="text-[#FCD34D]">✝︎</span> PDF immédiat</span>
              <span className="flex items-center gap-1.5"><span className="text-[#FCD34D]">☾</span> Lecture sur téléphone</span>
              <span className="flex items-center gap-1.5"><span className="text-[#FCD34D]">✨</span> Utilisable dès ce soir</span>
            </div>
          </div>

          <div className="order-1 md:order-2 relative flex justify-center animate-fade-in">
            <div className="relative w-[270px] sm:w-[330px] md:w-[390px] animate-float-slow">
              <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-[#FCD34D]/30 via-transparent to-[#8B5CF6]/20 blur-2xl" />
              <img
                src="/je-prie-cover.png"
                alt="Couverture du livre Je prie tout seul"
                className="relative w-full rounded-[24px] shadow-2xl ring-1 ring-white/10"
              />
              <div className="absolute -right-3 top-5 rounded-sm bg-white/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#1A103C] shadow-lg">
                4 à 12 ans
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GAINS */}
      <section className="relative z-10 bg-ivory py-16 sm:py-22">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12 reveal">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Dès ce soir</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight text-balance">
              Ce que tu gagnes
              <span className="block italic font-light text-rose-500">immédiatement.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {gains.map((g) => (
              <div key={g.title} className="reveal rounded-sm border border-rose-100 bg-white p-6 shadow-sm">
                <h3 className="font-display text-xl text-ink mb-2">{g.title}</h3>
                <p className="text-ash text-sm leading-relaxed">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-ivory py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center reveal">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Ce que beaucoup de parents ressentent</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight text-balance">
            Tu veux lui transmettre la foi,
            <em className="text-rose-500"> mais pas seulement en theorie.</em>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto px-5 sm:px-8 mt-14 space-y-5">
          {parentNeeds.map((item, index) => (
            <div
              key={index}
              className="reveal flex gap-4 rounded-sm border border-rose-100 bg-white/60 p-5 backdrop-blur-sm transition-colors hover:border-rose-200"
            >
              <span className="text-rose-400 text-xl leading-none mt-0.5">✦</span>
              <p className="text-ash text-base sm:text-lg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 bg-ivory py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12 reveal">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Preuves reelles</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight text-balance">
              Leurs messages parlent
              <span className="block italic font-light text-rose-500">d'eux-memes.</span>
            </h2>
          </div>
          <div className="flex justify-center reveal">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-rose-100 to-gold-light/40 blur-2xl rounded-full opacity-50" />
              <img
                src="/extracted-je-prie/X4.png"
                alt="Messages WhatsApp de parents"
                className="relative w-full max-w-[420px] rounded-2xl shadow-2xl ring-1 ring-black/5"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-ink text-ivory py-20 sm:py-28">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, #B89265 0%, transparent 50%), radial-gradient(circle at 80% 70%, #C97A66 0%, transparent 50%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <p className="font-script text-gold-light text-2xl mb-4 reveal">Un petit livre, un grand apaisement</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-balance reveal">
            Le but n est pas seulement
            <em className="text-gold-light"> qu il récite.</em>
            <br />
            Le but est
            <em className="text-gold-light"> qu il apprenne à prier seul.</em>
          </h2>
          <div className="ornament my-8 text-gold text-xs tracking-[0.3em] uppercase reveal" />
          <p className="text-cream/80 text-lg sm:text-xl leading-relaxed reveal text-balance">
            Ce livre aide ton enfant à déposer sa journée, dire merci, demander pardon, confier sa famille, remettre ses
            peurs à Dieu et s'endormir dans la paix.
          </p>
          <p className="mt-6 text-cream/80 text-lg sm:text-xl leading-relaxed reveal text-balance">
            Toi, tu lui ouvres le chemin. Puis, soir après soir, il apprend à parler à Jésus avec simplicité, confiance et
            joie.
          </p>
          <a
            href={CHECKOUT_URL}
            className="btn-shimmer inline-flex items-center mt-10 rounded-sm bg-gold px-8 py-4 text-sm font-medium uppercase tracking-wider text-ink transition-colors hover:bg-gold-light reveal"
          >
            Je veux lui offrir ce rituel →
          </a>
        </div>
      </section>

      {/* MINI PREVIEW */}
      <section className="relative z-10 bg-gradient-to-b from-ivory to-cream py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Un aperçu du contenu</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight text-balance">
              Des prières qui parlent
              <span className="block italic font-light text-rose-500">au quotidien.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {previews.map((p) => (
              <div key={p.title} className="reveal rounded-sm border border-rose-100 bg-white p-7">
                <p className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Extrait</p>
                <h3 className="font-display text-2xl text-ink mb-3 leading-tight">{p.title}</h3>
                <p className="text-ash text-base leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-ivory py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Ce que le livre apporte</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight text-balance">
              Une routine du soir
              <span className="block italic font-light text-rose-500">simple, douce et spirituelle.</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className="reveal group relative rounded-sm border border-cream bg-white p-6 sm:p-7 transition-all hover:border-gold/40 hover:shadow-lg"
              >
                <div className="flex items-start gap-5">
                  <span className="font-display text-4xl sm:text-5xl text-rose-200 group-hover:text-gold transition-colors leading-none">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-ink leading-snug mb-2">{step.title}</h3>
                    <p className="text-ash text-sm sm:text-base leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-gradient-to-b from-cream to-ivory py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Dans les pages du livre</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight text-balance">
              Des prieres pour les besoins
              <span className="block italic font-light text-rose-500">reels de l enfant.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {prayerThemes.map((theme) => (
              <div key={theme.title} className="reveal relative rounded-sm border border-rose-100 bg-white p-7 sm:p-8">
                <p className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Exemple de priere</p>
                <h3 className="font-display text-2xl text-ink mb-3 leading-tight">{theme.title}</h3>
                <p className="text-ash text-base leading-relaxed">{theme.description}</p>
                <div className="mt-5 border-t border-cream pt-4 text-xs uppercase tracking-[0.18em] text-ash">
                  Verse clé : <span className="text-rose-500">{theme.verse}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREUVES & AMBIANCE */}
      <section className="relative z-10 bg-ivory py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Preuves réelles</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight text-balance">
              Des parents qui ont
              <span className="block italic font-light text-rose-500">retrouvé la paix du soir.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
            <div className="reveal flex justify-center">
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-gold-light/30 to-rose-100/60 blur-2xl" />
                <img
                  src="/extracted-je-prie/X4.png"
                  alt="Intérieur apaisant pour le rituel du soir"
                  className="relative w-full max-w-[340px] rounded-2xl shadow-2xl ring-1 ring-black/5"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {testimonials.map((t, i) => (
                <div key={i} className="reveal rounded-sm border border-rose-100 bg-white p-6 shadow-sm">
                  <div className="text-gold-light tracking-[0.3em] text-xs mb-2">★★★★★</div>
                  <p className="text-ink leading-relaxed mb-4">“{t.text}”</p>
                  <div className="text-xs text-ash">
                    {t.name} · {t.city}
                  </div>
                </div>
              ))}
              <div className="reveal rounded-sm border border-rose-100 bg-white p-6 shadow-sm sm:col-span-2">
                <div className="text-xs uppercase tracking-[0.24em] text-gold mb-3">Messages WhatsApp</div>
                <img
                  src="/whatsapp-feedback-elyx.svg"
                  alt="Retours WhatsApp de parents"
                  className="w-full rounded-xl ring-1 ring-black/5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-ivory py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12 reveal">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Ce que tu reçois</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight text-balance">
              Un support deja pret
              <span className="block italic font-light text-rose-500">a utiliser des ce soir.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
            <div className="reveal flex justify-center">
              <img
                src="/je-prie-cover.png"
                alt="Livre Je prie tout seul"
                className="w-full max-w-[300px] rounded-[24px] shadow-2xl ring-1 ring-black/5"
              />
            </div>
            <div className="reveal rounded-sm border border-rose-100 bg-white p-7 sm:p-9">
              <ul className="space-y-4">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-ink">
                    <span className="mt-1 text-gold-light">✓</span>
                    <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ash leading-relaxed">
                Le PDF contient aussi un mot aux parents, des conseils d'utilisation par tranche d'age et une methode simple
                pour aider l'enfant a gagner en autonomie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="offer" className="relative z-10 bg-ink text-ivory py-20 sm:py-28">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #B89265 0%, transparent 60%)' }}
        />
        <div className="relative max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <p className="font-script text-gold-light text-2xl mb-4 reveal">Offre du moment</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-balance reveal">
            Offre a ton enfant
            <span className="block gold-gradient italic mt-2">un coucher plus paisible.</span>
          </h2>

          <p className="mt-6 text-cream/70 text-sm reveal tracking-wider uppercase">Tarif de lancement - se termine dans :</p>
          <div className="mt-5 reveal">
            <CountdownTimer />
          </div>

          <div className="mt-10 rounded-sm border border-gold/20 bg-ivory/5 p-7 text-left backdrop-blur-sm sm:p-9 reveal">
            <div className="mb-7 text-center">
              <p className="text-sm uppercase tracking-[0.22em] text-gold-light">Aujourd hui</p>
              <p className="font-display text-5xl text-gold mt-2">2 500 FCFA</p>
              <p className="mt-2 text-sm text-cream/70">Acces immediat - PDF lisible sur tous tes appareils</p>
            </div>

            <ul className="space-y-4">
              {[
                'Le livre complet "Je prie tout seul"',
                '30 prieres du soir pour enfants de 4 a 12 ans',
                "Des versets bibliques associes a chaque priere",
                "Des conseils pratiques pour les parents selon l'age de l'enfant",
                'Acces a vie apres paiement',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-cream">
                  <span className="mt-1 text-gold-light">✓</span>
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={CHECKOUT_URL}
            className="btn-shimmer inline-flex items-center justify-center mt-10 w-full rounded-sm bg-gold px-8 py-5 text-sm font-medium uppercase tracking-wider text-ink transition-colors hover:bg-gold-light sm:w-auto reveal"
          >
            Je prends le livre maintenant - 2 500 FCFA →
          </a>

          <p className="mt-6 text-cream/60 text-xs reveal">Paiement securise · Envoi immediat · Utilisable ce soir</p>
        </div>
      </section>

      <section className="relative z-10 bg-ivory py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Deux chemins</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight text-balance">
              Quel coucher veux-tu
              <span className="block italic font-light text-rose-500">installer a la maison ?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="reveal rounded-sm border border-cream bg-white p-8 opacity-75">
              <p className="text-xs text-ash tracking-[0.25em] uppercase mb-3">Choix 1 - Continuer comme avant</p>
              <h3 className="font-display text-2xl text-ash mb-4">Finir la journee dans la fatigue.</h3>
              <p className="text-ash leading-relaxed">
                Improviser chaque soir, courir vers le sommeil, calmer les peurs a la derniere minute, et remettre a plus tard
                l'apprentissage de la priere personnelle.
              </p>
            </div>

            <div className="reveal rounded-sm border-2 border-gold bg-gradient-to-br from-rose-50 to-ivory p-8 shadow-xl">
              <p className="text-xs text-gold tracking-[0.25em] uppercase mb-3">Choix 2 - Installer un vrai rituel</p>
              <h3 className="font-display text-2xl text-ink mb-4">L aider a dormir en paix avec Dieu.</h3>
              <p className="text-ink leading-relaxed">
                Lui donner des mots simples, l'encourager a parler a Jesus chaque soir, et voir naitre peu a peu une autonomie
                spirituelle concrete dans sa propre chambre.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-gradient-to-b from-ivory to-rose-50 py-20 sm:py-28">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight text-balance reveal">
            Ce soir peut devenir
            <span className="block italic text-rose-500 mt-2">le debut d une belle habitude.</span>
          </h2>
          <p className="mt-7 text-ash text-lg leading-relaxed reveal text-balance">
            Tu n'achetes pas seulement un PDF. Tu installes un moment de paix, de foi et de proximite avec Jesus dans la vie de
            ton enfant.
          </p>
          <a
            href={CHECKOUT_URL}
            className="btn-shimmer inline-flex items-center justify-center mt-10 rounded-sm bg-ink px-8 py-5 text-sm font-medium uppercase tracking-wider text-ivory transition-colors hover:bg-rose-500 reveal"
          >
            Je lui offre ce livre maintenant →
          </a>
          <p className="mt-6 text-ash text-sm reveal">
            Une question ?{' '}
            <a href={WHATSAPP_URL} className="text-rose-500 underline hover:text-rose-600">
              Ecris-nous sur WhatsApp
            </a>
          </p>
        </div>
      </section>

      <footer className="relative z-10 bg-ink text-cream/60 py-10 text-center">
        <div className="max-w-3xl mx-auto px-5">
          <p className="font-display text-2xl text-ivory tracking-widest">ELYX</p>
          <p className="text-xs mt-2 tracking-widest uppercase">Ressources utiles pour la famille</p>
          <p className="text-[11px] mt-6 opacity-70">© 2026 ELYX - Tous droits reserves</p>
        </div>
      </footer>

      <div id="sticky-cta" className="sticky-cta flex items-center justify-between gap-3">
        <div className="text-ivory">
          <p className="text-xs opacity-70 leading-none">Je prie tout seul</p>
          <p className="font-display text-lg leading-tight">2 500 <span className="text-xs">FCFA</span></p>
        </div>
        <a
          href={CHECKOUT_URL}
          className="flex-shrink-0 rounded-sm bg-gold px-5 py-3 text-xs font-medium uppercase tracking-wider text-ink transition-colors hover:bg-gold-light"
        >
          Je le veux →
        </a>
      </div>
    </main>
  );
}
