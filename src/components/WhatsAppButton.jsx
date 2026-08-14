import { buildWhatsAppLink, generalEnquiryMessage } from "@/utils/whatsapp";
import { WhatsAppIcon } from "@/components/icons";

/**
 * Floating WhatsApp button shown on every page. The number and message are
 * configured centrally in `src/data/siteConfig.js` and `src/utils/whatsapp.js`.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink(generalEnquiryMessage())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-green-500" />
      </span>
    </a>
  );
}
