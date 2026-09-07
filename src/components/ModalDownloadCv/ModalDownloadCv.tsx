import iFlagBrazilSVG from 'assets/icons/iFlag-Brazil.svg';
import iPdfSVG from 'assets/icons/iPdf.svg';
import iWorldMapSVG from 'assets/icons/iWorldMap.svg';
import {useTranslation} from 'react-i18next';
import {Icon} from 'components/Icon';
import {namespaces} from 'i18n';

const handlePrintDocument = (pdfPath: string) => {
  const newWindow = window.open(pdfPath, '_blank');
  if (newWindow) {
    newWindow.focus();
  }
};

export const ModalDownloadCv = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const {t} = useTranslation(namespaces.cvModal.name);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-md backdrop-saturate-150">
      <div className="w-[92%] rounded-2xl border border-white/20 bg-white/70 p-6 shadow-2xl transition-all md:w-2/3 md:max-w-xl lg:w-1/3 dark:border-slate-800/40 dark:bg-slate-900/60">
        <h2 className="mb-4 p-1 text-lg font-bold text-slate-900 dark:text-slate-50">
          {t(namespaces.cvModal.keys.titleText)}
        </h2>
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex h-56 flex-col gap-2 rounded-xl border border-white/30 bg-white/40 p-4 transition-all hover:bg-white/80 dark:border-slate-700/30 dark:bg-slate-800/20 dark:hover:bg-slate-800/60">
            <Icon icon={iFlagBrazilSVG} size={38} color="none" />
            <div className="mb-2 flex h-12 flex-col">
              <h2 className="mb-2 text-base font-bold text-slate-900 dark:text-slate-50">
                {t(namespaces.cvModal.keys.brazilFormat)}
              </h2>
            </div>
            <button
              onClick={() => handlePrintDocument('/pdf/curriculo-br.pdf')}
              className="cursor-pointer transition-transform focus:outline-none active:scale-95"
              aria-label={t(namespaces.cvModal.keys.printBrLabel)}
              data-testid="print-br-btn">
              <Icon icon={iPdfSVG} size={44} color="currentColor" />
            </button>
            <span className="text-center text-xs font-semibold text-slate-700 dark:text-slate-300">
              {t(namespaces.cvModal.keys.printBrLabel)}
            </span>
          </div>

          <div className="flex h-56 flex-col gap-2 rounded-xl border border-white/30 bg-white/40 p-4 text-center transition-all hover:bg-white/80 dark:border-slate-700/30 dark:bg-slate-800/20 dark:hover:bg-slate-800/60">
            <Icon icon={iWorldMapSVG} size={38} color="none" />
            <div className="mb-2 flex h-12 flex-col">
              <h2 className="text-start text-base font-bold text-slate-900 dark:text-slate-50">
                {t(namespaces.cvModal.keys.internationalFormat)}
              </h2>
            </div>
            <div className="flex justify-around gap-4 pt-1">
              <div className="flex flex-col items-center gap-1">
                <button
                  onClick={() => handlePrintDocument('/pdf/resume.pdf')}
                  className="cursor-pointer transition-transform focus:outline-none active:scale-95"
                  aria-label={t(namespaces.cvModal.keys.printCvLabel)}
                  data-testid="print-resume-btn">
                  <div className="flex gap-1">
                    <Icon icon={iPdfSVG} size={44} color="currentColor" />
                  </div>
                </button>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {t(namespaces.cvModal.keys.printCvLabel)}
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <button
                  onClick={() => handlePrintDocument('/pdf/cover-letter.pdf')}
                  className="cursor-pointer transition-transform focus:outline-none active:scale-95"
                  aria-label={t(namespaces.cvModal.keys.printLetterLabel)}
                  data-testid="print-letter-btn">
                  <div className="flex gap-1">
                    <Icon icon={iPdfSVG} size={44} color="currentColor" />
                  </div>
                </button>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {t(namespaces.cvModal.keys.printLetterLabel)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <button
            onClick={onClose}
            className="w-full rounded-xl border border-slate-300/40 bg-white/40 py-2.5 text-sm font-semibold text-slate-800 transition-all hover:bg-white/80 active:scale-[0.99] dark:border-slate-700/60 dark:bg-slate-800/40 dark:text-slate-200 dark:hover:bg-slate-800/80"
            data-testid="close-modal-btn">
            {t(namespaces.cvModal.keys.closeButton)}
          </button>
        </div>
      </div>
    </div>
  );
};
