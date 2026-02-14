export const theme = {
  id: 'warm-coffee',
  name: 'Warm Coffee',
  industry: 'Cafe & Coffee',
  desc: 'Handcrafted warmth, paper textures, chalkboard menus',
  themeBg: '#F5E6CA',

  colors: [
    { name: 'Espresso', hex: '#3E2723', light: false },
    { name: 'Bean', hex: '#5D4037', light: false },
    { name: 'Latte', hex: '#F5E6CA', light: true },
    { name: 'Crema', hex: '#D7CCC8', light: true },
    { name: 'Accent', hex: '#FF7043', light: false },
    { name: 'Chalkboard', hex: '#222222', light: false },
  ],

  fonts: [
    { label: 'Display', detail: 'Pacifico / 5rem', style: { fontFamily: 'Pacifico, cursive', fontSize: 48, color: '#3E2723' }, sample: 'Warm Coffee' },
    { label: 'Heading', detail: 'Lora 700 / 3rem', style: { fontFamily: 'Lora, serif', fontSize: 32, fontWeight: 700, color: '#3E2723' }, sample: 'Signature Roasts' },
    { label: 'Subheading', detail: 'Lora 600 / 1.5rem', style: { fontFamily: 'Lora, serif', fontSize: 20, fontWeight: 600, color: '#5D4037' }, sample: 'Our Brewing Process' },
    { label: 'Body', detail: 'Nunito / 1rem', style: { fontFamily: 'Nunito', fontSize: 16, color: '#5D4037', lineHeight: 1.6 }, sample: 'Small batch roasts brewed with love. Every cup tells a story of careful sourcing and slow roasting.' },
    { label: 'Caption', detail: 'Nunito 700 / 0.75rem / uppercase', style: { fontFamily: 'Nunito', fontSize: 12, color: '#FF7043', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700 }, sample: 'Chocolate \u2022 Caramel \u2022 Honey' },
  ],

  tokens: [
    { key: 'Border Radius', value: '12px' },
    { key: 'Pill Radius', value: '30px' },
    { key: 'Shadow', value: '5px 5px 20px rgba(62,39,35,0.14)' },
    { key: 'Container Max', value: '1100px' },
    { key: 'Section Padding', value: '100px 0' },
    { key: 'Grid Gap', value: '40px' },
    { key: 'Card Padding', value: '30px' },
    { key: 'Breakpoint', value: '900px' },
    { key: 'Icons', value: 'Phosphor' },
    { key: 'Chalkboard Border', value: '15px solid #5D4037' },
  ],

  components: [
    // ── Layout & Navigation ──────────────────────────
    {
      name: 'Navigation',
      width: 520, height: 68,
      bg: 'linear-gradient(to right,rgba(62,39,35,0.85),rgba(62,39,35,0.95))',
      html: '<div style="padding:16px 24px;display:flex;justify-content:space-between;align-items:center;height:100%"><a style="font-family:Pacifico,cursive;font-size:24px;color:#fff;text-shadow:0 2px 5px rgba(0,0,0,0.3)">Warm Coffee</a><div style="display:flex;gap:24px"><a style="color:#fff;font-family:Nunito;font-weight:700;text-transform:uppercase;font-size:12px;letter-spacing:1px">Menu</a><a style="color:#fff;font-family:Nunito;font-weight:700;text-transform:uppercase;font-size:12px;letter-spacing:1px">Shop</a><a style="color:#fff;font-family:Nunito;font-weight:700;text-transform:uppercase;font-size:12px;letter-spacing:1px">About</a></div></div>',
    },
    {
      name: 'Breadcrumb',
      width: 380, height: 50,
      bg: '#F5E6CA',
      html: '<div style="font-family:Nunito;display:flex;align-items:center;gap:8px;font-size:13px"><a style="color:#FF7043;font-weight:600;cursor:pointer">Home</a><i class="ph ph-caret-right" style="font-size:10px;color:#D7CCC8"></i><a style="color:#FF7043;font-weight:600;cursor:pointer">Shop</a><i class="ph ph-caret-right" style="font-size:10px;color:#D7CCC8"></i><a style="color:#FF7043;font-weight:600;cursor:pointer">Beans</a><i class="ph ph-caret-right" style="font-size:10px;color:#D7CCC8"></i><span style="color:#5D4037">Morning Mist</span></div>',
    },
    {
      name: 'Pagination',
      width: 360, height: 60,
      bg: '#F5E6CA',
      html: '<div style="font-family:Nunito;display:flex;align-items:center;gap:6px"><a style="width:36px;height:36px;border-radius:10px;border:2px solid #D7CCC8;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#5D4037"><i class="ph ph-caret-left" style="font-size:14px"></i></a><a style="width:36px;height:36px;border-radius:10px;background:#3E2723;color:#F5E6CA;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700">1</a><a style="width:36px;height:36px;border-radius:10px;border:2px solid #D7CCC8;display:flex;align-items:center;justify-content:center;font-size:13px;color:#5D4037;font-weight:600;cursor:pointer">2</a><a style="width:36px;height:36px;border-radius:10px;border:2px solid #D7CCC8;display:flex;align-items:center;justify-content:center;font-size:13px;color:#5D4037;font-weight:600;cursor:pointer">3</a><span style="color:#D7CCC8;font-size:14px;padding:0 4px">...</span><a style="width:36px;height:36px;border-radius:10px;border:2px solid #D7CCC8;display:flex;align-items:center;justify-content:center;font-size:13px;color:#5D4037;font-weight:600;cursor:pointer">12</a><a style="width:36px;height:36px;border-radius:10px;border:2px solid #D7CCC8;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#5D4037"><i class="ph ph-caret-right" style="font-size:14px"></i></a></div>',
    },
    {
      name: 'Tabs',
      width: 360, height: 120,
      bg: '#F5E6CA',
      html: '<div style="font-family:Nunito;width:340px"><div data-tab-group style="display:flex;border-bottom:2px solid #D7CCC8;margin-bottom:16px"><button data-tab="0" style="padding:10px 20px;font-size:13px;font-weight:700;color:#3E2723;border-bottom:2px solid #3E2723;margin-bottom:-2px;background:none;border-top:0;border-left:0;border-right:0;cursor:pointer;font-family:Nunito">Hot Drinks</button><button data-tab="1" style="padding:10px 20px;font-size:13px;font-weight:600;color:#5D4037;opacity:0.6;background:none;border:0;cursor:pointer;font-family:Nunito">Cold Drinks</button><button data-tab="2" style="padding:10px 20px;font-size:13px;font-weight:600;color:#5D4037;opacity:0.6;background:none;border:0;cursor:pointer;font-family:Nunito">Pastries</button></div><div data-tab-content="0" style="font-size:14px;color:#5D4037;line-height:1.6">Our signature hot drinks, from classic espresso to seasonal specials. All beans freshly roasted in-house.</div><div data-tab-content="1" style="font-size:14px;color:#5D4037;line-height:1.6;display:none">Iced lattes, cold brews, and refreshing summer blends to beat the heat.</div><div data-tab-content="2" style="font-size:14px;color:#5D4037;line-height:1.6;display:none">Fresh croissants, muffins, and artisan pastries baked daily in our kitchen.</div></div>',
    },
    {
      name: 'Footer',
      width: 560, height: 150,
      bg: '#3E2723',
      html: '<footer style="padding:28px 32px;height:100%;color:#F5E6CA"><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:24px;text-align:center;margin-bottom:16px"><div><h4 style="font-family:Lora,serif;font-size:13px;margin:0 0 6px;color:#FF7043">Visit Us</h4><span style="opacity:0.8;font-size:12px;font-family:Nunito">123 Roast Lane</span></div><div><h4 style="font-family:Lora,serif;font-size:13px;margin:0 0 6px;color:#FF7043">Hours</h4><span style="opacity:0.8;font-size:12px;font-family:Nunito">Mon-Sun 7am-9pm</span></div><div><h4 style="font-family:Lora,serif;font-size:13px;margin:0 0 6px;color:#FF7043">Contact</h4><span style="opacity:0.8;font-size:12px;font-family:Nunito">hello@warmcoffee.com</span></div></div><div style="border-top:1px dashed rgba(255,255,255,0.15);padding-top:12px;text-align:center;font-size:11px;opacity:0.5;font-family:Nunito">\u00a9 2026 Warm Coffee</div></footer>',
    },
    // ── Buttons & Actions ────────────────────────────
    {
      name: 'Button',
      width: 420, height: 180,
      bg: '#F5E6CA',
      html: '<div style="display:flex;flex-direction:column;gap:14px;align-items:center;padding:16px;font-family:Nunito"><div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center"><a style="display:inline-block;padding:12px 32px;border-radius:30px;background:#3E2723;color:#F5E6CA;font-weight:700;text-transform:uppercase;letter-spacing:1px;font-size:13px;box-shadow:0 5px 15px rgba(62,39,35,0.35)">Primary</a><a style="display:inline-block;padding:12px 32px;border-radius:30px;border:2px solid #3E2723;color:#3E2723;font-weight:700;text-transform:uppercase;letter-spacing:1px;font-size:13px">Outline</a><a style="display:inline-block;padding:12px 32px;border-radius:30px;background:#FF7043;color:#fff;font-weight:700;text-transform:uppercase;letter-spacing:1px;font-size:13px">Accent</a></div><div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center"><a style="display:inline-block;padding:8px 20px;border-radius:30px;background:#3E2723;color:#F5E6CA;font-weight:700;font-size:12px">Small</a><a style="display:inline-block;padding:12px 32px;border-radius:30px;background:#D7CCC8;color:#3E2723;font-weight:700;text-transform:uppercase;letter-spacing:1px;font-size:13px">Ghost</a><a style="display:inline-block;padding:12px 32px;border-radius:30px;background:#3E2723;color:#F5E6CA;font-weight:700;font-size:13px;opacity:0.4">Disabled</a></div></div>',
    },
    {
      name: 'Toggle',
      width: 320, height: 120,
      bg: '#F5E6CA',
      html: '<div style="font-family:Nunito;display:flex;flex-direction:column;gap:14px;align-items:center"><div data-toggle-group style="display:inline-flex;border-radius:12px;border:2px solid #D7CCC8;overflow:hidden"><button data-toggle style="padding:10px 20px;font-size:13px;font-weight:700;background:#3E2723;color:#F5E6CA;border:none;cursor:pointer;font-family:Nunito;transition:all 0.2s"><i class="ph-fill ph-list" style="font-size:14px"></i></button><button data-toggle style="padding:10px 20px;font-size:13px;font-weight:600;background:#fff;color:#5D4037;border:none;border-left:2px solid #D7CCC8;cursor:pointer;font-family:Nunito;transition:all 0.2s"><i class="ph ph-squares-four" style="font-size:14px"></i></button></div><div data-toggle-group style="display:inline-flex;border-radius:30px;background:#fff;border:2px solid #D7CCC8;overflow:hidden"><button data-toggle style="padding:8px 20px;font-size:12px;font-weight:700;background:#3E2723;color:#F5E6CA;border:none;cursor:pointer;font-family:Nunito;border-radius:28px;transition:all 0.2s">Whole Bean</button><button data-toggle style="padding:8px 20px;font-size:12px;font-weight:600;background:transparent;color:#5D4037;border:none;cursor:pointer;font-family:Nunito;transition:all 0.2s">Ground</button><button data-toggle style="padding:8px 20px;font-size:12px;font-weight:600;background:transparent;color:#5D4037;border:none;cursor:pointer;font-family:Nunito;transition:all 0.2s">Pods</button></div></div>',
    },
    {
      name: 'Dropdown Menu',
      width: 260, height: 280,
      bg: '#F5E6CA',
      html: '<div style="font-family:Nunito;width:220px;background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(62,39,35,0.15);border:2px solid #D7CCC8;overflow:hidden"><div style="padding:10px 16px;font-size:13px;color:#3E2723;display:flex;align-items:center;gap:10px;cursor:pointer;border-bottom:1px solid #f0ebe4"><i class="ph ph-user" style="font-size:16px;color:#5D4037"></i><span style="font-weight:600">My Account</span></div><div style="padding:10px 16px;font-size:13px;color:#3E2723;display:flex;align-items:center;gap:10px;cursor:pointer;border-bottom:1px solid #f0ebe4"><i class="ph ph-shopping-bag" style="font-size:16px;color:#5D4037"></i><span>Orders</span></div><div style="padding:10px 16px;font-size:13px;color:#3E2723;display:flex;align-items:center;gap:10px;cursor:pointer;border-bottom:1px solid #f0ebe4"><i class="ph ph-heart" style="font-size:16px;color:#5D4037"></i><span>Favorites</span></div><div style="padding:10px 16px;font-size:13px;color:#3E2723;display:flex;align-items:center;gap:10px;cursor:pointer;border-bottom:1px solid #f0ebe4"><i class="ph ph-gear" style="font-size:16px;color:#5D4037"></i><span>Settings</span></div><div style="height:1px;background:#f0ebe4"></div><div style="padding:10px 16px;font-size:13px;color:#FF7043;display:flex;align-items:center;gap:10px;cursor:pointer;background:#faf6f0"><i class="ph ph-sign-out" style="font-size:16px"></i><span style="font-weight:600">Sign Out</span></div></div>',
    },
    // ── Data Display ─────────────────────────────────
    {
      name: 'Card',
      width: 300, height: 260,
      bg: '#F5E6CA',
      html: '<div style="width:260px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:5px 5px 20px rgba(62,39,35,0.1);font-family:Nunito"><div style="height:120px;background:linear-gradient(135deg,#D7CCC8,#F5E6CA);display:flex;align-items:center;justify-content:center"><i class="ph-fill ph-coffee" style="font-size:48px;color:#5D4037"></i></div><div style="padding:18px"><h3 style="font-family:Lora,serif;font-size:16px;font-weight:700;color:#3E2723;margin:0 0 6px">Morning Mist Blend</h3><p style="font-size:13px;color:#5D4037;margin:0 0 12px;line-height:1.5">Smooth chocolate notes with hints of caramel.</p><div style="display:flex;justify-content:space-between;align-items:center"><span style="font-weight:700;color:#3E2723">$18.00</span><span style="font-size:11px;color:#FF7043;font-weight:700;text-transform:uppercase">In Stock</span></div></div></div>',
    },
    {
      name: 'Table',
      width: 420, height: 220,
      bg: '#F5E6CA',
      html: '<div style="font-family:Nunito;width:380px;border-radius:12px;overflow:hidden;border:2px solid #D7CCC8"><table style="width:100%;border-collapse:collapse;font-size:13px"><thead><tr style="background:#3E2723;color:#F5E6CA"><th style="padding:12px 16px;text-align:left;font-weight:700">Blend</th><th style="padding:12px 16px;text-align:left">Origin</th><th style="padding:12px 16px;text-align:right">Price</th></tr></thead><tbody><tr style="background:#fff;border-bottom:1px solid #D7CCC8"><td style="padding:12px 16px;font-weight:600;color:#3E2723">Morning Mist</td><td style="padding:12px 16px;color:#5D4037">Colombia</td><td style="padding:12px 16px;text-align:right;font-weight:700;color:#FF7043">$18</td></tr><tr style="background:#faf6f0;border-bottom:1px solid #D7CCC8"><td style="padding:12px 16px;font-weight:600;color:#3E2723">Dark Ember</td><td style="padding:12px 16px;color:#5D4037">Ethiopia</td><td style="padding:12px 16px;text-align:right;font-weight:700;color:#FF7043">$22</td></tr><tr style="background:#fff"><td style="padding:12px 16px;font-weight:600;color:#3E2723">Velvet Dusk</td><td style="padding:12px 16px;color:#5D4037">Guatemala</td><td style="padding:12px 16px;text-align:right;font-weight:700;color:#FF7043">$20</td></tr></tbody></table></div>',
    },
    {
      name: 'Avatar',
      width: 320, height: 120,
      bg: '#F5E6CA',
      html: '<div style="font-family:Nunito;display:flex;flex-direction:column;gap:16px;align-items:center"><div style="display:flex;align-items:center;gap:12px"><div style="display:flex;align-items:center"><div style="width:40px;height:40px;border-radius:50%;background:#3E2723;color:#F5E6CA;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;border:2px solid #F5E6CA">JD</div><div style="width:40px;height:40px;border-radius:50%;background:#5D4037;color:#F5E6CA;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;border:2px solid #F5E6CA;margin-left:-12px">AK</div><div style="width:40px;height:40px;border-radius:50%;background:#FF7043;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;border:2px solid #F5E6CA;margin-left:-12px">SM</div><div style="width:40px;height:40px;border-radius:50%;background:#D7CCC8;color:#5D4037;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px;border:2px solid #F5E6CA;margin-left:-12px">+5</div></div><span style="font-size:12px;color:#5D4037">8 coffee lovers</span></div><div style="display:flex;gap:10px"><div style="width:48px;height:48px;border-radius:50%;background:#3E2723;color:#F5E6CA;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px">L</div><div style="width:40px;height:40px;border-radius:50%;background:#5D4037;color:#F5E6CA;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px">M</div><div style="width:32px;height:32px;border-radius:50%;background:#FF7043;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px">S</div></div></div>',
    },
    {
      name: 'Badge',
      width: 380, height: 70,
      bg: '#F5E6CA',
      html: '<div style="font-family:Nunito;display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:center"><span style="padding:5px 14px;border-radius:30px;background:#3E2723;color:#F5E6CA;font-size:12px;font-weight:700">Bestseller</span><span style="padding:5px 14px;border-radius:30px;background:#FF7043;color:#fff;font-size:12px;font-weight:700">New</span><span style="padding:5px 14px;border-radius:30px;border:2px solid #3E2723;color:#3E2723;font-size:12px;font-weight:700">Single Origin</span><span style="padding:5px 14px;border-radius:30px;background:#D7CCC8;color:#3E2723;font-size:12px;font-weight:700">Decaf</span><span style="padding:5px 14px;border-radius:30px;background:#5D4037;color:#F5E6CA;font-size:12px;font-weight:700">Seasonal</span></div>',
    },
    {
      name: 'Separator',
      width: 320, height: 130,
      bg: '#F5E6CA',
      html: '<div style="font-family:Nunito;width:280px;display:flex;flex-direction:column;gap:20px"><div style="height:1px;background:#D7CCC8"></div><div style="height:2px;background:linear-gradient(to right,transparent,#5D4037,transparent)"></div><div style="display:flex;align-items:center;gap:16px"><div style="flex:1;height:1px;background:#D7CCC8"></div><span style="font-size:11px;color:#5D4037;text-transform:uppercase;letter-spacing:2px;font-weight:700">or</span><div style="flex:1;height:1px;background:#D7CCC8"></div></div><div style="border-bottom:2px dashed #D7CCC8"></div></div>',
    },
    {
      name: 'Skeleton',
      width: 320, height: 240,
      bg: '#F5E6CA',
      html: '<div style="width:260px;font-family:Nunito"><div style="display:flex;gap:12px;align-items:center;margin-bottom:16px"><div style="width:40px;height:40px;border-radius:50%;background:#D7CCC8"></div><div style="flex:1"><div style="height:12px;width:60%;background:#D7CCC8;border-radius:6px;margin-bottom:8px"></div><div style="height:10px;width:40%;background:#D7CCC8;border-radius:6px"></div></div></div><div style="height:140px;background:#D7CCC8;border-radius:12px;margin-bottom:12px"></div><div style="height:12px;width:100%;background:#D7CCC8;border-radius:6px;margin-bottom:8px"></div><div style="height:12px;width:75%;background:#D7CCC8;border-radius:6px"></div></div>',
    },
    {
      name: 'Tooltip',
      width: 320, height: 130,
      bg: '#F5E6CA',
      html: '<div style="font-family:Nunito;display:flex;gap:32px;align-items:center;justify-content:center;padding:16px 10px"><div style="position:relative;display:inline-block"><div style="position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%);background:#3E2723;color:#F5E6CA;padding:8px 14px;border-radius:8px;font-size:12px;white-space:nowrap;box-shadow:0 4px 12px rgba(62,39,35,0.2)">Ethiopian single origin<div style="position:absolute;top:100%;left:50%;transform:translateX(-50%);border:5px solid transparent;border-top-color:#3E2723"></div></div><button style="padding:10px 24px;border-radius:30px;background:#3E2723;color:#F5E6CA;border:none;font-family:Nunito;font-weight:700;font-size:13px">Hover me</button></div><div style="position:relative;display:inline-block"><div style="position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%);background:#5D4037;color:#F5E6CA;padding:8px 14px;border-radius:8px;font-size:12px;white-space:nowrap;box-shadow:0 4px 12px rgba(62,39,35,0.2)">Add to favorites<div style="position:absolute;top:100%;left:50%;transform:translateX(-50%);border:5px solid transparent;border-top-color:#5D4037"></div></div><i class="ph-fill ph-heart" style="font-size:24px;color:#FF7043;cursor:pointer"></i></div></div>',
    },
    // ── Form Elements ────────────────────────────────
    {
      name: 'Input',
      width: 320, height: 130,
      bg: '#F5E6CA',
      html: '<div style="width:280px;font-family:Nunito"><label style="display:block;font-size:13px;font-weight:700;color:#3E2723;margin-bottom:6px">Email Address</label><input type="text" placeholder="hello@warmcoffee.com" style="width:100%;padding:12px 16px;border:2px solid #D7CCC8;border-radius:12px;font-family:Nunito;font-size:14px;color:#3E2723;background:#fff;outline:none;box-sizing:border-box" /><p style="font-size:12px;color:#5D4037;margin:6px 0 0;opacity:0.7">We will never share your email.</p></div>',
    },
    {
      name: 'Textarea',
      width: 320, height: 170,
      bg: '#F5E6CA',
      html: '<div style="width:280px;font-family:Nunito"><label style="display:block;font-size:13px;font-weight:700;color:#3E2723;margin-bottom:6px">Your Message</label><textarea placeholder="Tell us about your coffee experience..." style="width:100%;height:90px;padding:12px 16px;border:2px solid #D7CCC8;border-radius:12px;font-family:Nunito;font-size:14px;color:#3E2723;background:#fff;outline:none;resize:vertical;box-sizing:border-box"></textarea></div>',
    },
    {
      name: 'Select',
      width: 320, height: 110,
      bg: '#F5E6CA',
      html: '<div style="width:280px;font-family:Nunito"><label style="display:block;font-size:13px;font-weight:700;color:#3E2723;margin-bottom:6px">Brew Method</label><select style="width:100%;padding:12px 16px;border:2px solid #D7CCC8;border-radius:12px;font-family:Nunito;font-size:14px;color:#3E2723;background:#fff;appearance:none;outline:none;cursor:pointer;box-sizing:border-box"><option>Pour Over</option><option>French Press</option><option>Espresso</option><option>Cold Brew</option></select></div>',
    },
    {
      name: 'Checkbox',
      width: 280, height: 140,
      bg: '#F5E6CA',
      html: '<div style="font-family:Nunito;display:flex;flex-direction:column;gap:14px"><label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-size:14px;color:#3E2723"><input type="checkbox" checked style="width:18px;height:18px;accent-color:#3E2723;cursor:pointer">Extra shot of espresso</label><label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-size:14px;color:#3E2723"><input type="checkbox" checked style="width:18px;height:18px;accent-color:#3E2723;cursor:pointer">Oat milk</label><label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-size:14px;color:#5D4037"><input type="checkbox" style="width:18px;height:18px;accent-color:#3E2723;cursor:pointer">Whipped cream</label></div>',
    },
    {
      name: 'Radio Group',
      width: 280, height: 160,
      bg: '#F5E6CA',
      html: '<div style="font-family:Nunito;display:flex;flex-direction:column;gap:12px"><div style="font-size:13px;font-weight:700;color:#3E2723;margin-bottom:2px">Cup Size</div><label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-size:14px;color:#3E2723"><input type="radio" name="wc-cup-size" checked style="width:18px;height:18px;accent-color:#3E2723;cursor:pointer">Small (8 oz)</label><label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-size:14px;color:#3E2723"><input type="radio" name="wc-cup-size" style="width:18px;height:18px;accent-color:#3E2723;cursor:pointer">Medium (12 oz)</label><label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-size:14px;color:#3E2723"><input type="radio" name="wc-cup-size" style="width:18px;height:18px;accent-color:#3E2723;cursor:pointer">Large (16 oz)</label></div>',
    },
    {
      name: 'Switch',
      width: 300, height: 110,
      bg: '#F5E6CA',
      html: '<div style="font-family:Nunito;display:flex;flex-direction:column;gap:16px"><div style="display:flex;align-items:center;justify-content:space-between;width:260px"><span style="font-size:14px;color:#3E2723">Notifications</span><div data-switch data-on="1" style="width:44px;height:24px;border-radius:12px;background:#3E2723;padding:2px;cursor:pointer;position:relative;transition:background 0.2s"><div data-knob style="width:20px;height:20px;border-radius:50%;background:#F5E6CA;position:absolute;right:2px;top:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2);transition:all 0.2s"></div></div></div><div style="display:flex;align-items:center;justify-content:space-between;width:260px"><span style="font-size:14px;color:#3E2723">Dark roast preference</span><div data-switch data-on="0" style="width:44px;height:24px;border-radius:12px;background:#D7CCC8;padding:2px;cursor:pointer;position:relative;transition:background 0.2s"><div data-knob style="width:20px;height:20px;border-radius:50%;background:#fff;position:absolute;left:2px;top:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2);transition:all 0.2s"></div></div></div></div>',
    },
    {
      name: 'Slider',
      width: 320, height: 80,
      bg: '#F5E6CA',
      html: '<div style="font-family:Nunito;width:280px"><div style="display:flex;justify-content:space-between;margin-bottom:8px"><span style="font-size:13px;font-weight:700;color:#3E2723">Sweetness Level</span><span data-slider-value style="font-size:13px;color:#FF7043;font-weight:700">60%</span></div><input data-slider type="range" min="0" max="100" value="60" style="width:100%;accent-color:#3E2723;cursor:pointer;height:6px"></div>',
    },
    // ── Feedback & Status ────────────────────────────
    {
      name: 'Alert',
      width: 380, height: 170,
      bg: '#F5E6CA',
      html: '<div style="font-family:Nunito;display:flex;flex-direction:column;gap:10px;width:340px"><div style="padding:14px 16px;border-radius:12px;background:#fff;border-left:4px solid #FF7043;display:flex;align-items:start;gap:10px"><i class="ph-fill ph-info" style="font-size:18px;color:#FF7043;margin-top:1px"></i><div><div style="font-size:13px;font-weight:700;color:#3E2723">New blend available</div><div style="font-size:12px;color:#5D4037;margin-top:2px">Try our Ethiopian Yirgacheffe!</div></div></div><div style="padding:14px 16px;border-radius:12px;background:#fff;border-left:4px solid #4CAF50;display:flex;align-items:start;gap:10px"><i class="ph-fill ph-check-circle" style="font-size:18px;color:#4CAF50;margin-top:1px"></i><div><div style="font-size:13px;font-weight:700;color:#3E2723">Order confirmed</div><div style="font-size:12px;color:#5D4037;margin-top:2px">Your beans will be roasted fresh tomorrow.</div></div></div></div>',
    },
    {
      name: 'Toast',
      width: 380, height: 80,
      bg: '#F5E6CA',
      html: '<div style="font-family:Nunito;width:340px"><div style="padding:14px 18px;border-radius:12px;background:#3E2723;color:#F5E6CA;display:flex;align-items:center;gap:12px;box-shadow:0 10px 30px rgba(62,39,35,0.3)"><i class="ph-fill ph-check-circle" style="font-size:20px;color:#FF7043"></i><div style="flex:1"><div style="font-size:13px;font-weight:700">Added to cart</div><div style="font-size:11px;opacity:0.7;margin-top:2px">Morning Mist &middot; 250g</div></div><i class="ph ph-x" style="font-size:14px;opacity:0.5;cursor:pointer"></i></div></div>',
    },
    {
      name: 'Progress',
      width: 320, height: 120,
      bg: '#F5E6CA',
      html: '<div style="font-family:Nunito;width:280px;display:flex;flex-direction:column;gap:16px"><div><div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="font-size:13px;color:#3E2723;font-weight:600">Loyalty Points</span><span style="font-size:13px;color:#FF7043;font-weight:700">750 / 1000</span></div><div style="height:8px;background:#D7CCC8;border-radius:4px;overflow:hidden"><div style="height:100%;width:75%;background:linear-gradient(to right,#3E2723,#5D4037);border-radius:4px"></div></div></div><div><div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="font-size:13px;color:#3E2723;font-weight:600">Roast Level</span><span style="font-size:13px;color:#FF7043;font-weight:700">Dark</span></div><div style="height:8px;background:#D7CCC8;border-radius:4px;overflow:hidden"><div style="height:100%;width:90%;background:linear-gradient(to right,#FF7043,#3E2723);border-radius:4px"></div></div></div></div>',
    },
    {
      name: 'Dialog',
      width: 400, height: 220,
      bg: 'rgba(62,39,35,0.15)',
      html: '<div style="font-family:Nunito;width:340px;background:#fff;border-radius:16px;box-shadow:0 20px 60px rgba(62,39,35,0.2);overflow:hidden"><div style="padding:24px 24px 0"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><h3 style="font-family:Lora,serif;font-size:18px;font-weight:700;color:#3E2723;margin:0">Confirm Order</h3><i class="ph ph-x" style="font-size:18px;color:#5D4037;cursor:pointer;opacity:0.5"></i></div><p style="font-size:13px;color:#5D4037;line-height:1.6;margin:0">Your Morning Mist (250g) will be roasted and shipped within 24 hours.</p></div><div style="padding:20px 24px;display:flex;justify-content:flex-end;gap:10px"><button style="padding:10px 24px;border-radius:30px;border:2px solid #D7CCC8;background:#fff;color:#5D4037;font-family:Nunito;font-weight:700;font-size:13px;cursor:pointer">Cancel</button><button style="padding:10px 24px;border-radius:30px;background:#3E2723;color:#F5E6CA;border:none;font-family:Nunito;font-weight:700;font-size:13px;cursor:pointer;box-shadow:0 4px 12px rgba(62,39,35,0.3)">Confirm</button></div></div>',
    },
    // ── Content Components ────────────────────────────
    {
      name: 'Accordion',
      width: 380, height: 260,
      bg: '#F5E6CA',
      html: '<style>.wc-details summary{list-style:none}.wc-details summary::-webkit-details-marker{display:none}.wc-details[open] .wc-caret{transform:rotate(180deg)}</style><div class="font-family:Nunito" style="font-family:Nunito;width:340px;display:flex;flex-direction:column;gap:8px"><details class="wc-details" open style="background:#fff;border-radius:12px;border:2px solid #D7CCC8;overflow:hidden"><summary style="padding:14px 18px;font-size:14px;font-weight:700;color:#3E2723;cursor:pointer;display:flex;justify-content:space-between;align-items:center">How fresh is your coffee?<i class="ph ph-caret-down wc-caret" style="font-size:14px;color:#5D4037;transition:transform 0.2s"></i></summary><div style="padding:0 18px 14px;font-size:13px;color:#5D4037;line-height:1.6;border-top:1px solid #D7CCC8;padding-top:12px">We roast every batch within 24 hours of your order. Your beans are never more than 3 days old.</div></details><details class="wc-details" style="background:#fff;border-radius:12px;border:2px solid #D7CCC8;overflow:hidden"><summary style="padding:14px 18px;font-size:14px;font-weight:700;color:#3E2723;cursor:pointer;display:flex;justify-content:space-between;align-items:center">Do you offer subscriptions?<i class="ph ph-caret-down wc-caret" style="font-size:14px;color:#5D4037;transition:transform 0.2s"></i></summary><div style="padding:0 18px 14px;font-size:13px;color:#5D4037;line-height:1.6;border-top:1px solid #D7CCC8;padding-top:12px">Yes! Choose weekly, bi-weekly, or monthly delivery of freshly roasted beans.</div></details><details class="wc-details" style="background:#fff;border-radius:12px;border:2px solid #D7CCC8;overflow:hidden"><summary style="padding:14px 18px;font-size:14px;font-weight:700;color:#3E2723;cursor:pointer;display:flex;justify-content:space-between;align-items:center">Where are your beans from?<i class="ph ph-caret-down wc-caret" style="font-size:14px;color:#5D4037;transition:transform 0.2s"></i></summary><div style="padding:0 18px 14px;font-size:13px;color:#5D4037;line-height:1.6;border-top:1px solid #D7CCC8;padding-top:12px">We source from Colombia, Ethiopia, Guatemala, and Brazil — all fair-trade certified farms.</div></details></div>',
    },
    {
      name: 'Carousel',
      width: 420, height: 230,
      bg: '#F5E6CA',
      html: '<div style="font-family:Nunito;width:380px;position:relative"><button data-carousel-prev style="position:absolute;left:-6px;top:70px;z-index:2;width:32px;height:32px;border-radius:50%;background:#3E2723;color:#F5E6CA;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(62,39,35,0.3)"><i class="ph ph-caret-left" style="font-size:14px"></i></button><button data-carousel-next style="position:absolute;right:-6px;top:70px;z-index:2;width:32px;height:32px;border-radius:50%;background:#3E2723;color:#F5E6CA;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(62,39,35,0.3)"><i class="ph ph-caret-right" style="font-size:14px"></i></button><div data-carousel-track style="display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;scrollbar-width:none;-ms-overflow-style:none;padding:4px 0"><div style="min-width:170px;scroll-snap-align:start;background:#fff;border-radius:12px;border:2px solid #D7CCC8;overflow:hidden;flex-shrink:0"><div style="height:80px;background:linear-gradient(135deg,#D7CCC8,#F5E6CA);display:flex;align-items:center;justify-content:center"><i class="ph-fill ph-coffee" style="font-size:32px;color:#5D4037"></i></div><div style="padding:12px;text-align:center"><div style="font-family:Lora,serif;font-size:13px;font-weight:700;color:#3E2723">Morning Mist</div><div style="font-size:12px;color:#FF7043;font-weight:700;margin-top:4px">$18</div></div></div><div style="min-width:170px;scroll-snap-align:start;background:#fff;border-radius:12px;border:2px solid #D7CCC8;overflow:hidden;flex-shrink:0"><div style="height:80px;background:linear-gradient(135deg,#5D4037,#3E2723);display:flex;align-items:center;justify-content:center"><i class="ph-fill ph-fire" style="font-size:32px;color:#FF7043"></i></div><div style="padding:12px;text-align:center"><div style="font-family:Lora,serif;font-size:13px;font-weight:700;color:#3E2723">Dark Ember</div><div style="font-size:12px;color:#FF7043;font-weight:700;margin-top:4px">$22</div></div></div><div style="min-width:170px;scroll-snap-align:start;background:#fff;border-radius:12px;border:2px solid #D7CCC8;overflow:hidden;flex-shrink:0"><div style="height:80px;background:linear-gradient(135deg,#D7CCC8,#fff);display:flex;align-items:center;justify-content:center"><i class="ph-fill ph-leaf" style="font-size:32px;color:#5D4037"></i></div><div style="padding:12px;text-align:center"><div style="font-family:Lora,serif;font-size:13px;font-weight:700;color:#3E2723">Velvet Dusk</div><div style="font-size:12px;color:#FF7043;font-weight:700;margin-top:4px">$20</div></div></div><div style="min-width:170px;scroll-snap-align:start;background:#fff;border-radius:12px;border:2px solid #D7CCC8;overflow:hidden;flex-shrink:0"><div style="height:80px;background:linear-gradient(135deg,#FF7043,#3E2723);display:flex;align-items:center;justify-content:center"><i class="ph-fill ph-sun" style="font-size:32px;color:#F5E6CA"></i></div><div style="padding:12px;text-align:center"><div style="font-family:Lora,serif;font-size:13px;font-weight:700;color:#3E2723">Sunrise</div><div style="font-size:12px;color:#FF7043;font-weight:700;margin-top:4px">$19</div></div></div></div><div data-carousel-dots style="display:flex;justify-content:center;gap:6px;margin-top:12px"><span data-dot="0" style="width:8px;height:8px;border-radius:50%;background:#3E2723;cursor:pointer;transition:background 0.2s"></span><span data-dot="1" style="width:8px;height:8px;border-radius:50%;background:#D7CCC8;cursor:pointer;transition:background 0.2s"></span><span data-dot="2" style="width:8px;height:8px;border-radius:50%;background:#D7CCC8;cursor:pointer;transition:background 0.2s"></span><span data-dot="3" style="width:8px;height:8px;border-radius:50%;background:#D7CCC8;cursor:pointer;transition:background 0.2s"></span></div></div>',
    },
    // ── Theme-specific ───────────────────────────────
    {
      name: 'Product Card',
      width: 280, height: 320,
      bg: '#F5E6CA',
      html: '<div style="padding:16px"><div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:5px 5px 20px rgba(62,39,35,0.1)"><div style="height:140px;background:linear-gradient(135deg,#D7CCC8,#F5E6CA);display:flex;align-items:center;justify-content:center"><i class="ph-fill ph-coffee" style="font-size:56px;color:#5D4037"></i></div><div style="padding:18px;text-align:center"><span style="font-family:Lora,serif;font-size:1.15rem;font-weight:700;color:#3E2723;display:block;margin-bottom:6px">Morning Mist</span><span style="color:#FF7043;font-size:0.75rem;text-transform:uppercase;letter-spacing:1px;font-weight:700">Chocolate \u2022 Caramel</span><div style="margin-top:14px;font-family:Nunito;font-weight:700;font-size:1.1rem;color:#3E2723">$18.00</div></div></div></div>',
    },
    {
      name: 'Chalkboard Menu',
      width: 420, height: 260,
      bg: '#F5E6CA',
      html: '<div style="padding:16px"><div style="background:#222;border:12px solid #5D4037;border-radius:10px;padding:24px;color:#eee;font-family:Nunito;box-shadow:0 10px 30px rgba(0,0,0,0.3)"><h2 style="font-family:Pacifico,cursive;font-size:1.5rem;text-align:center;margin:0 0 16px;color:rgba(255,255,255,0.9);text-shadow:2px 2px 0 rgba(0,0,0,0.5)">Daily Brews</h2><div style="display:flex;align-items:baseline;margin-bottom:8px"><span style="font-weight:700;font-size:13px">Latte</span><span style="flex:1;border-bottom:2px dotted #555;margin:0 8px"></span><span style="font-weight:700;color:#FF7043;font-size:13px">$4.50</span></div><div style="display:flex;align-items:baseline;margin-bottom:8px"><span style="font-weight:700;font-size:13px">Cappuccino</span><span style="flex:1;border-bottom:2px dotted #555;margin:0 8px"></span><span style="font-weight:700;color:#FF7043;font-size:13px">$4.50</span></div><div style="display:flex;align-items:baseline"><span style="font-weight:700;font-size:13px">Flat White</span><span style="flex:1;border-bottom:2px dotted #555;margin:0 8px"></span><span style="font-weight:700;color:#FF7043;font-size:13px">$5.00</span></div></div></div>',
    },
  ],

  pages: [
    { name: 'Events', file: '/pages/warm-coffee/events.html' },
    { name: 'Gift Cards', file: '/pages/warm-coffee/gift-cards.html' },
    { name: 'Subscription', file: '/pages/warm-coffee/subscription.html' },
    { name: 'Gallery', file: '/pages/warm-coffee/gallery.html' },
    { name: 'Blog Post', file: '/pages/warm-coffee/blog-post.html' },
  ],
};
