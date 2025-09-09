// src/components/WhatsAppFloat.tsx
"use client";

type Props = {
  phone?: string;   // Ej: "573001234567"
  message?: string;
};

export default function WhatsAppFloat({
  phone = "573001234567",
  message = "Hola, quiero más información sobre los programas académicos.",
}: Props) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatea por WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full shadow-lg
                 bg-[#25D366] hover:scale-105 transition"
      style={{ boxShadow: "0 10px 20px rgba(0,0,0,.15)" }}
    >
      {/* Ícono WhatsApp */}
      <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
        <path fill="white" d="M19.11 17.23c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.15-.42-2.2-1.33-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.41.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.6-1.44-.82-1.97-.22-.53-.43-.45-.6-.46l-.51-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26 0 1.33.98 2.62 1.12 2.8.14.18 1.93 2.95 4.69 4.02.65.28 1.16.45 1.56.57.65.21 1.24.18 1.71.11.52-.08 1.58-.64 1.81-1.25.22-.61.22-1.12.15-1.23-.07-.11-.24-.18-.51-.32z"/>
        <path fill="white" d="M16.02 5.33c-5.89 0-10.67 4.78-10.67 10.67 0 1.88.49 3.64 1.35 5.17L5 27l5.95-1.56c1.49.81 3.2 1.27 5.07 1.27 5.89 0 10.67-4.78 10.67-10.67S21.91 5.33 16.02 5.33zm6.19 16.86c-1.66 1.66-3.86 2.57-6.19 2.57-1.77 0-3.5-.52-4.99-1.5l-.36-.23-3.54.93.95-3.45-.24-.37c-.9-1.42-1.37-3.06-1.37-4.75 0-2.33.9-4.53 2.57-6.19 1.66-1.66 3.86-2.57 6.19-2.57 2.33 0 4.53.9 6.19 2.57 1.66 1.66 2.57 3.86 2.57 6.19s-.91 4.53-2.57 6.19z"/>
      </svg>
    </a>
  );
}
