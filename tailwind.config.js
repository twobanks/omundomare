
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-white': '#FFFFFF',
        'brand-bg': '#F9FAFB', // Um branco "off-white" (gray-50) para fundos de seção
        'brand-text': '#1F2937', // (gray-800) Cor principal do texto
        'brand-text-muted': '#4B5563', // (gray-600) Cor de texto secundária
        'brand-lilac': '#8B5CF6', // (violet-500) Nosso lilás principal
        'brand-lilac-light': '#EDE9FE', // (violet-100) Um fundo lilás bem claro
        'brand-yellow': '#FACC15', // (yellow-400) Nosso amarelo para CTAs
        'brand-yellow-dark': '#EAB308', // (yellow-500) Para o "hover" do botão
      },
      fontFamily: {
        serif: ['var(--font-roboto)', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config