import { waLink } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a href={waLink("Hi IronPulse! I have a question.")} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110">
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M12 2C6.5 2 2 6.1 2 11.2c0 2.6 1.2 5 3.2 6.6L4 22l4.5-2.1c1.1.3 2.3.5 3.5.5 5.5 0 10-4.100 10-9.200S17.500 2 12 2Zm-3.200 5.500c.2 0 .4 0 .6.400l.8 1.900c.1.200 0 .400-.1.600l-.500.600c.8 1.500 2 2.600 3.500 3.300l.700-.800c.2-.2.400-.2.600-.1l1.800.900c.2.100.3.200.3.400 0 .6-.5 1.300-1.200 1.600-.8.300-1.900.2-3.500-.6-2-1-3.600-2.700-4.400-4.700-.4-1-.2-2 .6-2.800.2-.2.500-.3.800-.3Z" />
      </svg>
    </a>
  );
}
