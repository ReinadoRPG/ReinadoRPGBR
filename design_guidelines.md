# Design Guidelines - Servidor Minecraft RPG Medieval

## Design Approach
**Medieval RPG Theme** - Dark, immersive fantasy aesthetic inspired by medieval fantasy games with gothic typography, parchment textures, and stone/wood elements.

## Core Visual Identity

### Typography
- **Headings**: Gothic/Medieval-style font (e.g., "Cinzel" or "MedievalSharp" from Google Fonts) for titles and section headers
- **Body Text**: Clean, readable serif font (e.g., "Crimson Text") for rules, commands, and descriptions
- **Navigation**: Bold medieval font for menu items
- **Sizes**: Large imposing headings (3xl-5xl), medium body text (base-lg) for readability

### Layout System
**Spacing**: Use Tailwind units of 4, 6, 8, and 12 for consistent medieval-themed spacing
- Sections: py-12 to py-16 for vertical rhythm
- Cards/containers: p-6 to p-8
- Gaps between elements: gap-4 to gap-6

## Page Structure

### 1. Página Principal (Home)
- **Full-page background**: User-provided background.png as immersive backdrop with dark overlay for text readability
- **Hero Section**: Centered server branding with server name in large gothic typography
- **Status Display**: Prominent card showing server online status and player count from API (https://api.mcsrvstat.us/2/sd-br7.blazebr.com:25575)
  - Display: "Servidor Online" with green indicator or "Servidor Offline" with red indicator
  - Show: "Jogadores Online: [número]/[máximo]"
- **Call-to-Action Buttons**: Two prominent buttons with blurred backgrounds
  - Discord button linking to: https://discord.gg/5jvwssAV9t
  - WhatsApp Group button linking to: https://chat.whatsapp.com/EyBu39XdT7LEYKy4OXibOp
- **Navigation**: Medieval-styled menu bar with links to Loja, Regras, Comandos

### 2. Loja (Shop Page)
- **Grid Layout**: Display shop items in cards with parchment/stone texture backgrounds
- **Item Cards**: Each item shows:
  - Item name (e.g., "Desbanimento")
  - Price (e.g., "R$ 15.00")
  - Description
  - "Comprar" button with medieval styling
- **Purchase Flow**: Clicking "Comprar" opens WhatsApp with pre-filled message to 14998199235:
  - Format: "Olá! Gostaria de comprar os seguintes itens: [Nome do Item] - R$ [Preço] Total: R$ [Preço Total]"
- **Shopping Cart**: Allow multiple item selection before checkout

### 3. Regras e Termos (Rules Page)
- **Parchment-style sections**: Each rule category in distinct card with medieval border
- **5 Rule Sections**:
  1. Respeito Mútuo - friendly environment rules
  2. Jogo Limpo (Sem Cheats) - no hacks/mods policy
  3. Regras de PvP - nighttime combat rules
  4. Exploração de Bugs - bug reporting with rewards
  5. Denúncias e Alertas - Discord ticket system with link
- **Typography hierarchy**: Large section numbers in decorative medieval style, clear readable body text
- **Discord Link**: Prominent call-out for ticket system

### 4. Comandos (Commands Page)
- **Two-column layout** (desktop) / single column (mobile)
- **Command cards**: Display all 30+ commands from provided file
- **Format per command**:
  - Command syntax in monospace font with medieval background
  - Description below in readable font
- **Categories** (group visually):
  - Autenticação (/register, /login)
  - Navegação (/spawn, /rtp, /warp, /home)
  - Social (/g, /tell, /afk)
  - Economia (/balance, /pay, /sell)
  - Clãs (/clan commands)
  - Outros (/bendinggui, /skin, /discord)

## Component Library

### Navigation
- Medieval-themed top navigation bar with stone/wood texture
- Logo/server name on left
- Menu items: Home, Loja, Regras, Comandos
- Mobile: Hamburger menu with medieval icon

### Buttons
- Primary (CTA): Large buttons with medieval border, gold/bronze accent, blurred background when over images
- Secondary (Shop): Stone/wood texture buttons with hover lift effect
- All buttons include icon where appropriate (Discord icon, WhatsApp icon, shopping cart)

### Cards
- Parchment/aged paper texture for content cards
- Stone border frames for important sections
- Drop shadow for depth
- Consistent padding (p-6 to p-8)

### Status Indicators
- Server online: Green gem/crystal icon with glow
- Server offline: Red gem/crystal icon dimmed
- Player count: Medieval counter display with decorative frame

### Links
- Discord link: Include Discord logo, medieval button styling
- WhatsApp links: Include WhatsApp icon, green accent matching brand
- Hover states: Subtle glow effect

## Images
- **Hero Background**: User-provided background.png as full-page immersive backdrop across entire site
- **Decorative Elements**: Medieval corner ornaments, dividers between sections
- **Icons**: Use Font Awesome for Discord, WhatsApp, shopping cart icons
- **Textures**: Parchment, stone, wood textures for cards and backgrounds

## Responsive Design
- Desktop: Multi-column layouts for commands and shop items (2-3 columns)
- Tablet: 2-column layouts
- Mobile: Single column, stacked navigation, full-width cards
- Maintain readability of medieval fonts at all sizes

## Special Interactions
- WhatsApp purchase integration: Generate formatted message with item details
- API polling: Update server status every 30-60 seconds
- Smooth scroll between sections
- Minimal animations - focus on fast loading with medieval aesthetic

## Performance Optimization
- Compress background.png for web
- Use CDN for fonts and icons
- Lazy load command list if extensive
- Cache API responses briefly
- Minimize decorative elements that slow loading