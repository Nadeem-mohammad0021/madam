import { useState, useCallback, useEffect, useMemo } from "react";

const noMessages = [
  "mlm maa aap no hi click karthe bolke 🤪",
  "Phir No kyu maaaa 🤦‍♂️",
  "Maaaaaaaa......... 😫",
  "Aap ki marzi madam jiiiii........ 🌸",
  "Aab no dabaketho dikhao Memsaab 😁",
];

const Sparkles = ({ count = 6 }: { count?: number }) => {
  const sparkles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 3,
        size: 8 + Math.random() * 14,
      })),
    [count]
  );

  return (
    <>
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="sparkle"
          style={{ top: s.top, left: s.left, animationDelay: `${s.delay}s`, fontSize: `${s.size}px` }}
        >
          ✦
        </span>
      ))}
    </>
  );
};

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; duration: number; size: number }[]>([]);
  useEffect(() => {
    setHearts(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 5 + Math.random() * 8,
        size: 12 + Math.random() * 20,
      }))
    );
  }, []);
  return (
    <>
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart-particle"
          style={{
            left: `${h.left}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            fontSize: `${h.size}px`,
          }}
        >
          {["💕", "💗", "💖", "🩷", "✨", "🌸", "💫"][h.id % 7]}
        </span>
      ))}
    </>
  );
};

const Confetti = () => {
  const pieces = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 3,
        color: ["#e8457e", "#f472b6", "#c084fc", "#fb923c", "#fbbf24", "#f9a8d4"][i % 6],
        size: 6 + Math.random() * 8,
      })),
    []
  );
  return (
    <>
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: p.left,
            top: "-10px",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
          }}
        />
      ))}
    </>
  );
};

const EnvelopeLetter = () => {
  const [stage, setStage] = useState<"closed" | "opening" | "open" | "letter">("closed");
  const [currentPage, setCurrentPage] = useState(0);

  const letterPages = [
    {
      title: "My Dear Ayesha... 💌🩷",
      content: [
        "Maa first tym aapku aapke name se bularum becoz i want to tell ur everything today 💭✨",
        "maa Aap sonchre valentine's day kya ye bolke but ye valentines day ke bareme nai maa i dont celebrate but ye beech mai samja ki you dont understand my feelings correctly 🥺",
        "aap \"like\" bolke samjhe but that is not like maa like ku aur love mai ye love bhi nai boltum maa <strong><em>\"ishq\" meku aapse ishq hai maa</em></strong> ❤️‍🔥",
        "aap jo bhi soncho but ek person continuously 2 long years se aapse hai with only one feeling 😔",
        "like pahele frnds, besties, etc etc bolke nai badla naa first bhi ek baat hi bola <strong>i want to marry you</strong> aab bhi wahi bolrum <strong><em>i want to marry you</em></strong> 💍",
      ],
      signature: ["💖", "🩷", "✨"],
    },
    {
      title: "",
      content: [
        "maa aap jo bhi samjho destiny ya kuch bhi but mai me efforts lagarum maa becoz one day you will realize bolke ✨",
        "but aapku like aur ishq ke beech me confuse hogaye 🥺",
        "agar mai aapse only like hi kartha tho ethne days aapse rahetha tha kya bolo maa just thing 🤍",
        "maa meku aapse ye love etc etc drama karna bolke nhi hai maa <strong>i want to mary you maa baas</strong> 💍",
        "but aap family aur destiny bolke avoid karre mlm maa avoid karre wo topic ku but aape <strong><em>mera ishq ku feelings ku avoid nai karsaktum naa maa</em></strong> 😞",
      ],
      signature: ["🌸", "💫", "🤍"],
    },
    {
      title: "",
      content: [
        "aur ek aapke face ku dhekke mai aapku nhi pasand kara i wanted you with my heart maa ❤️",
        "isliye aapke facial structure ke bareme nai soncha kuch bhi hoo i stayed 🫶",
        "aap clips lagaliye thak mai tha aapke har ek situation me mai huun maa as a supporter 🤍",
        "but wo tym i dont want to take advantage maa aapse becoz thats my nature 🙏",
        "mai ithne day kyu wait kara mlm maa just kisi ek day aap realize hothe bolke 🕊️",
        "but meku aaj open hona pada ke to tell you everything clearly maa 🫂",
      ],
      signature: ["💞", "✨", "🌷"],
    },
    {
      title: "",
      content: [
        "ek baat maa aap ek baar soncho how ? bolke <strong>i will take every responsibility maa</strong> 💪",
        "aapke jo jo khaish aa mai wo saab pure kartum maa 🌟",
        "mai aapse kuch joke nhi karrum maa mai jo boltum wo kartum maa 🤝",
        "fake hopes fake advices nhi detum maa <strong><em>i want you maa</em></strong> ❤️",
        "no destiny nothing i want the decision of <strong>Ayesha (Isha)</strong> not about family or anything maa 🥺",
      ],
      signature: ["💍", "🩷", "✨"],
    },
    {
      title: "",
      content: [
        "becoz lifelong raheneka decision hai ye decision aap lena 🤍",
        "decision aapke haat me hai maa 🫶",
        "mai aapku aaphi bolo bolke nai bolrum maa but take your time maaa think karo 🕰️",
        "force karne se ishq nhi hotha maa ye aapse hi sikha maa ❤️‍🔥",
        "take your time maa i am waiting for your reply wo jo bhi ho direct bolo maa 🤍",
        "<strong><em>Always be happy maa</em></strong> 🌸",
      ],
      signature: ["💖", "🌸", "✨"],
    },
  ];

  const totalPages = letterPages.length;
  const hasNextPage = currentPage < totalPages - 1;
  const hasPrevPage = currentPage > 0;

  const handleClick = () => {
    if (stage === "closed") {
      setStage("opening");
      setTimeout(() => setStage("open"), 800);
      setTimeout(() => setStage("letter"), 1600);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {stage !== "letter" && (
        <div
          className={`envelope-wrapper ${stage === "closed" ? "cursor-pointer hover:scale-105" : ""} w-full max-w-md mx-auto`}
          onClick={handleClick}
        >
          {/* Envelope body */}
          <div className="envelope-container">
            {/* Back of envelope */}
            <div className="envelope-back" />

            {/* Letter inside */}
            <div className={`envelope-letter-inside ${stage === "open" ? "letter-rise" : ""}`}>
              <div className="letter-lines">
                <div className="letter-line" />
                <div className="letter-line short" />
                <div className="letter-line" />
                <div className="letter-line short" />
              </div>
              <span className="text-2xl">💖</span>
            </div>

            {/* Front of envelope */}
            <div className="envelope-front" />

            {/* Flap */}
            <div className={`envelope-flap ${stage !== "closed" ? "flap-open" : ""}`} />

            {/* Seal */}
            {stage === "closed" && (
              <div className="envelope-seal animate-heart-beat">
                <svg width="22" height="20" viewBox="0 0 22 20" fill="currentColor">
                  <path d="M11 18.5l-1.5-1.36C4.4 12.36 1 9.28 1 5.5 1 2.42 3.42 0 6.5 0c1.74 0 3.41.81 4.5 2.09C12.09.81 13.76 0 15.5 0 18.58 0 21 2.42 21 5.5c0 3.78-3.4 6.86-8.55 11.54L11 18.5z" />
                </svg>
              </div>
            )}
          </div>

          {stage === "closed" && (
            <p className="text-muted-foreground text-sm mt-4 animate-pulse font-medium">
              Tap to open 💌
            </p>
          )}
        </div>
      )}

      {stage === "letter" && (
        <div className="letter-reveal w-full max-w-2xl mx-auto px-2 xs:px-3">
          <div className="letter-paper p-3 xs:p-4 sm:p-6 md:p-8">
            <div className="letter-paper-curl" />
            
            {/* Page Navigation Controls */}
            <div className="flex justify-between items-center mb-3 xs:mb-4 px-1 xs:px-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                disabled={!hasPrevPage}
                className={`px-2 xs:px-3 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm sm:text-base transition-all duration-200 ${
                  hasPrevPage 
                    ? 'bg-primary text-primary-foreground hover:scale-105 hover:shadow-lg' 
                    : 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                }`}
              >
                ← Prev
              </button>
              
              <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                {currentPage + 1}/{totalPages}
              </span>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                disabled={!hasNextPage}
                className={`px-2 xs:px-3 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm sm:text-base transition-all duration-200 ${
                  hasNextPage 
                    ? 'bg-primary text-primary-foreground hover:scale-105 hover:shadow-lg' 
                    : 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                }`}
              >
                Next →
              </button>
            </div>
            
            {/* Letter Content */}
            {letterPages[currentPage].title && (
              <p
                className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 xs:mb-4 sm:mb-5 pt-1 text-center tracking-wider"
                style={{ 
                  fontFamily: "'Playfair Display', serif", 
                  color: "#e8457e", 
                  lineHeight: "2.5rem",
                  textShadow: "3px 3px 6px rgba(232, 69, 126, 0.3)",
                  letterSpacing: "1px"
                }}
              >
                <span style={{ background: "linear-gradient(45deg, #e8457e, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {letterPages[currentPage].title.replace(/💌|🩷/g, '')}
                </span>
                <span style={{ color: "inherit" }}>
                  {letterPages[currentPage].title.match(/💌|🩷/g)?.join('') || ''}
                </span>
              </p>
            )}
            
            {letterPages[currentPage].content.map((paragraph, index) => (
              <p 
                key={index} 
                className={`text-foreground text-sm xs:text-base leading-relaxed mb-2 xs:mb-3 ${
                  index === letterPages[currentPage].content.length - 1 ? '' : ''
                }`} 
                dangerouslySetInnerHTML={{ __html: paragraph }} 
              />
            ))}
            
            <div className="mt-3 xs:mt-4 flex gap-1 xs:gap-2 sm:gap-3 text-base xs:text-lg sm:text-xl justify-center flex-wrap">
              {letterPages[currentPage].signature.map((emoji, index) => (
                <span key={index} className="animate-float text-base xs:text-lg sm:text-xl" style={{ animationDelay: `${index * 0.4}s` }}>{emoji}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Index = () => {
  const [noCount, setNoCount] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState<{ top?: string; left?: string }>({});
  const [showMessage, setShowMessage] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(false);

  const moveNoButton = useCallback(() => {
    setNoPosition({
      top: `${Math.random() * 60 + 15}%`,
      left: `${Math.random() * 60 + 15}%`,
    });
  }, []);

  const handleNo = () => {
    setShowMessage(false);
    setTimeout(() => setShowMessage(true), 50);
    if (noCount < 4) {
      setNoCount((c) => c + 1);
      moveNoButton();
    } else {
      setNoCount(5);
    }
  };

  const noHidden = noCount >= 5;

  if (showEnvelope) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden px-2 xs:px-3 sm:px-4 md:px-6">
        <FloatingHearts />
        <div className="w-full max-w-2xl px-1 xs:px-2 sm:px-3">
          <EnvelopeLetter />
        </div>
      </div>
    );
  }

  if (accepted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden px-3 xs:px-4 sm:px-6">
        <FloatingHearts />
        <Confetti />
        <div className="relative z-10 text-center animate-bounce-in w-full px-2 xs:px-4 sm:px-6">
          <div
            className="relative rounded-3xl p-6 xs:p-8 sm:p-10 md:p-16 card-glow max-w-lg mx-auto overflow-hidden"
            style={{ background: "var(--gradient-card)" }}
          >
            <Sparkles count={10} />
            <div className="text-6xl xs:text-7xl sm:text-8xl mb-4 xs:mb-6 animate-heart-beat">💖</div>
            <h1
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 xs:mb-4 tracking-wide"
              style={{ 
                fontFamily: "'Playfair Display', serif", 
                color: "#e8457e",
                textShadow: "2px 2px 4px rgba(232, 69, 126, 0.2)",
                letterSpacing: "0.5px"
              }}
            >
              Yaaay!!! 😅
            </h1>
            <p className="text-base xs:text-lg sm:text-xl text-foreground font-semibold mb-2 xs:mb-3">I knew maa aap yes dabana bolke hi plan kara! 🥰</p>
            <p className="text-sm xs:text-base text-muted-foreground mb-4 xs:mb-6">
              See the message there is some this special for you 😊 💕
            </p>

            <button
              onClick={() => setShowEnvelope(true)}
              className="secret-btn rounded-full font-bold text-primary-foreground px-6 xs:px-8 py-2 xs:py-3 text-sm xs:text-base w-full sm:w-auto"
              style={{ background: "var(--gradient-yes)" }}
            >
              🔒 Secret Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden px-3 xs:px-4 sm:px-6">
      <FloatingHearts />
      <div className="relative z-10 w-full max-w-md px-2 xs:px-4">
        <div
          className="relative rounded-3xl p-6 xs:p-8 sm:p-10 md:p-14 card-glow text-center overflow-hidden"
          style={{ background: "var(--gradient-card)" }}
        >
          <Sparkles />
          <div className="text-5xl xs:text-6xl sm:text-7xl mb-3 xs:mb-4 animate-float">💌</div>
          <h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 xs:mb-3 tracking-wide"
            style={{ 
              fontFamily: "'Playfair Display', serif", 
              color: "#e8457e",
              textShadow: "2px 2px 4px rgba(232, 69, 126, 0.2)",
              letterSpacing: "0.5px"
            }}
          >
            Madam jiiii.....
          </h1>
          <p className="text-muted-foreground mb-3 xs:mb-4 text-sm xs:text-base sm:text-lg font-medium">
            WILL YOU BE MY LIFE PARTNER? 🫣 ✨
          </p>

          {showMessage && noCount > 0 && (
            <div
              className="animate-slide-up-fade mb-3 xs:mb-4 rounded-2xl py-2 xs:py-3 px-4 xs:px-5 inline-block"
              style={{ background: "hsl(var(--secondary))" }}
            >
              <p className="text-secondary-foreground font-semibold text-xs xs:text-sm">
                {noMessages[Math.min(noCount, 5) - 1]}
              </p>
            </div>
          )}

          <div className="flex flex-col xs:flex-row items-center justify-center gap-3 xs:gap-4 mt-4 xs:mt-6">
            <div className="relative w-full xs:w-auto">
              <span className="pulse-ring" />
              <button
                onClick={() => setAccepted(true)}
                className="relative rounded-full font-bold text-primary-foreground btn-glow px-6 xs:px-8 py-2 xs:py-3 text-sm xs:text-base w-full xs:w-auto z-10"
                style={{ background: "var(--gradient-yes)" }}
              >
                Yes! 💕
              </button>
            </div>
            {!noHidden && (
              <button
                onClick={handleNo}
                className="rounded-full font-bold transition-all duration-200 px-6 xs:px-8 py-2 xs:py-3 text-sm xs:text-base hover:opacity-80 active:scale-95 w-full xs:w-auto"
                style={{
                  background: "var(--gradient-no)",
                  color: "hsl(var(--primary-foreground))",
                  ...(noCount > 0 ? { position: "fixed", ...noPosition, zIndex: 50 } : {}),
                }}
              >
                No 😢
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
