import { AreaChartFillByValue } from "../components/cryptoGrafics";
import { TextH1 } from "../components/text";

export function Grafics() {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center px-3 pb-6 pt-20 sm:px-4">
        <TextH1
          text="Graficos Crypto"
          className="mb-6 flex text-center text-2xl font-bold text-slate-900 dark:text-slate-100 sm:mb-8 md:mb-10 md:text-3xl"
        />
        <AreaChartFillByValue />
      </div>
    </>
  );
}
