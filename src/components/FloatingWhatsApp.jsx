export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919034727679"   // 👈 अपना number डालो
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-4 z-50"
    >
      {/* <div className="bg-green-500 p-4 rounded-full shadow-lg relative animate-bounce hover:scale-110 transition"> */}
        
        {/* Notification Badge */}
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
          
        </span>

        {/* Icon */}
        <span className="text-white text-2xl"><a href="https://wa.me/919034727679" target="_blank"
   class="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg animate-bounce flex items-center justify-center">

  {/* <!-- WhatsApp SVG Icon --> */}
  <svg xmlns="http://www.w3.org/2000/svg" 
       class="h-6 w-6" 
       fill="currentColor" 
       viewBox="0 0 24 24">
    <path d="M20.52 3.48A11.83 11.83 0 0012.04 0C5.49 0 .13 5.36.13 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.31-1.65a11.91 11.91 0 005.73 1.46h.01c6.55 0 11.91-5.36 11.91-11.91 0-3.18-1.24-6.17-3.44-8.42zM12.05 21.2c-1.78 0-3.53-.47-5.06-1.36l-.36-.21-3.75.98 1-3.65-.23-.37a9.15 9.15 0 01-1.4-4.89c0-5.08 4.13-9.21 9.22-9.21 2.46 0 4.77.96 6.51 2.7a9.18 9.18 0 012.69 6.52c0 5.08-4.13 9.21-9.22 9.21zm5.14-6.85c-.28-.14-1.67-.83-1.93-.92-.26-.1-.45-.14-.64.14-.19.28-.73.92-.9 1.11-.17.19-.34.21-.62.07-.28-.14-1.2-.44-2.29-1.41-.85-.75-1.42-1.67-1.59-1.95-.17-.28-.02-.43.13-.57.13-.13.28-.34.42-.5.14-.17.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.1-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.28-1 1-1 2.44s1.03 2.83 1.17 3.03c.14.19 2.01 3.07 4.88 4.3.68.29 1.21.46 1.62.59.68.22 1.29.19 1.78.12.54-.08 1.67-.68 1.9-1.34.23-.66.23-1.22.16-1.34-.06-.12-.25-.19-.53-.33z"/>
  </svg>

</a></span>
      {/* </div> */}
    </a>
  );
}