import SectionWrapper from "../components/ui/SectionWrapper";
import { legalNotices } from "../constants/legalNotices";
import { useLanguage } from "../contexts/LanguageContext";

export default function LegalNotice() {
  const { language } = useLanguage();

  return (
    <SectionWrapper id={"legal-notices"} className="relative z-10 pt-16 overflow-y-auto text-cosmic-white bg-background-dark/75 p-4 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">{legalNotices[language].title}</h1>
      {legalNotices[language].content.map((c, i) => (
        <div id={`ln-c${i}`} key={i} className="my-4">
          {c.title && (
            <h2 className="text-lg font-semibold mb-2">{c.title}</h2>
          )}
          {c.content.map((e, j) => (
            typeof e === "string" ? (
              <p key={`ln-c${i}${j}`} className="mb-3 text-gray-300">{e}</p>
            ) : (
              <ul key={`ln-c${i}${j}`}>
                {e.map((l, k) => (
                  <li key={`ln-c${i}${j}${k}`} className="text-gray-400">{l}</li>
                ))}
              </ul>
            )
          ))}
        </div>
      ))}
    </SectionWrapper>
  );
}
