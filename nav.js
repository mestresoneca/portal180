(function(){
'use strict';

/* ── CSS ───────────────────────────────────────── */
var CSS = [
  ':root{--bg:#0D0F12;--bg2:#13161B;--bg3:#1A1E26;--line:#252A35;--line2:#2E3440;',
  '--ink:#F0F2F5;--ink2:#B8C0CC;--ink3:#7A8494;--red:#E8192C;--red-dark:#C01020;}',

  '.p-topbar{background:var(--bg2);border-bottom:1px solid var(--line);display:flex;',
  'align-items:center;gap:16px;padding:0 24px;height:44px;font-size:12px;color:var(--ink3);}',
  '.p-topbar-left{display:flex;align-items:center;gap:16px;flex:1;}',
  '.p-topbar-sep{width:1px;height:14px;background:var(--line2);}',
  '.p-topbar-link{color:var(--ink3);text-decoration:none;font-size:12px;transition:color .15s;}',
  '.p-topbar-link:hover{color:var(--ink);}',
  '.p-topbar-right{display:flex;align-items:center;gap:12px;}',
  '.p-date{font-family:monospace;font-size:11px;}',
  '.p-live{display:inline-flex;align-items:center;gap:6px;background:rgba(232,25,44,.12);',
  'border:1px solid rgba(232,25,44,.3);border-radius:999px;padding:4px 10px;',
  'font-size:10.5px;font-weight:500;color:#E8192C;letter-spacing:.05em;text-transform:uppercase;}',
  '.p-live-dot{width:6px;height:6px;border-radius:50%;background:#E8192C;animation:p-blink 1.4s infinite;}',
  '@keyframes p-blink{0%,100%{opacity:1}50%{opacity:.3}}',
  '.p-lang{background:transparent;border:none;color:var(--ink3);font-size:12px;cursor:pointer;font-family:inherit;}',
  '.p-btn-login{background:var(--red);color:#fff;border:none;border-radius:6px;padding:5px 14px;',
  'font-size:12px;font-weight:600;cursor:pointer;font-family:inherit;transition:background .15s;}',
  '.p-btn-login:hover{background:var(--red-dark);}',

  '.p-header{background:var(--bg2);border-bottom:1px solid var(--line);position:sticky;top:0;z-index:100;}',
  '.p-nav{display:flex;align-items:center;padding:0 24px;height:56px;max-width:1280px;margin:0 auto;}',

  '.p-logo{display:flex;align-items:center;gap:10px;margin-right:24px;flex-shrink:0;text-decoration:none;}',
  '.p-logo-icon{width:36px;height:36px;border-radius:9px;background:var(--red);',
  'display:flex;align-items:center;justify-content:center;}',
  '.p-logo-icon svg{width:22px;height:22px;}',
  '.p-logo-text{font-family:"Barlow Condensed",sans-serif;font-weight:900;font-size:24px;',
  'text-transform:uppercase;letter-spacing:.01em;line-height:1;color:var(--ink);}',
  '.p-logo-text em{font-style:normal;color:var(--red);}',
  '.p-logo-tag{font-size:9px;color:var(--ink3);letter-spacing:.06em;text-transform:uppercase;margin-top:1px;}',

  '.p-nav-links{display:flex;align-items:stretch;}',
  '.p-nav-link{display:flex;align-items:center;padding:0 12px;height:56px;font-size:13px;',
  'font-weight:600;color:var(--ink3);border-bottom:3px solid transparent;',
  'transition:color .15s,border-color .15s;white-space:nowrap;cursor:pointer;text-decoration:none;',
  'background:none;border-top:none;border-left:none;border-right:none;font-family:inherit;}',
  '.p-nav-link:hover,.p-nav-link.active{color:var(--ink);border-bottom-color:var(--red);}',
  '.p-nav-link svg{width:12px;height:12px;margin-left:4px;transition:transform .2s;}',
  '.p-dd-open > .p-nav-link svg{transform:rotate(180deg);}',

  '.p-dropdown{position:relative;}',
  '.p-dd-menu{display:none;position:absolute;top:calc(100% + 1px);left:50%;transform:translateX(-50%);',
  'background:var(--bg2);border:1px solid var(--line2);border-radius:12px;',
  'padding:10px;min-width:300px;box-shadow:0 8px 32px rgba(0,0,0,.6);z-index:200;gap:0;}',
  '.p-dd-menu.open{display:flex;}',
  '.p-dd-col{flex:1;padding:4px;}',
  '.p-dd-label{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;',
  'color:var(--ink3);padding:6px 8px 8px;display:flex;align-items:center;gap:6px;}',
  '.p-dd-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0;}',
  '.p-dd-item{display:flex;align-items:center;justify-content:space-between;padding:8px 10px;',
  'border-radius:7px;font-size:13px;font-weight:500;color:var(--ink2);text-decoration:none;',
  'transition:background .12s,color .12s;}',
  '.p-dd-item:hover{background:var(--bg3);color:var(--ink);}',
  '.p-dd-item::after{content:"\\2192";font-size:11px;color:var(--ink3);}',
  '.p-dd-divider{width:1px;background:var(--line);margin:6px 4px;}',

  '.p-search{display:flex;align-items:center;gap:8px;background:var(--bg3);',
  'border:1px solid var(--line);border-radius:8px;padding:0 12px;height:34px;margin-left:auto;flex-shrink:0;}',
  '.p-search input{background:transparent;border:none;color:var(--ink);font-size:13px;',
  'width:160px;font-family:inherit;outline:none;}',
  '.p-search input::placeholder{color:var(--ink3);}',
  '.p-search svg{width:14px;height:14px;color:var(--ink3);flex-shrink:0;}',

  '.p-hamburger{display:none;flex-direction:column;justify-content:center;gap:5px;',
  'width:38px;height:38px;background:var(--bg3);border:1px solid var(--line);',
  'border-radius:8px;cursor:pointer;padding:8px;margin-left:12px;flex-shrink:0;}',
  '.p-hamburger span{display:block;height:2px;background:var(--ink);border-radius:2px;transition:all .25s;}',
  '.p-hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}',
  '.p-hamburger.open span:nth-child(2){opacity:0;}',
  '.p-hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}',

  '.p-mob-menu{display:none;position:fixed;inset:0;top:56px;background:var(--bg2);',
  'z-index:99;overflow-y:auto;padding:16px 0 40px;border-top:1px solid var(--line);}',
  '.p-mob-menu.open{display:block;}',
  '.p-mob-menu a{display:flex;align-items:center;justify-content:space-between;',
  'padding:14px 24px;font-size:16px;font-weight:600;color:var(--ink2);',
  'border-bottom:1px solid var(--line);text-decoration:none;transition:background .12s,color .12s;}',
  '.p-mob-menu a:hover{background:var(--bg3);color:var(--ink);}',
  '.p-mob-menu a svg{width:14px;height:14px;color:var(--ink3);}',
  '.p-mob-sep{padding:14px 24px 6px;font-size:11px;font-weight:700;',
  'letter-spacing:.1em;text-transform:uppercase;color:var(--ink3);}',

  '@media(max-width:768px){',
  '.p-topbar{display:none;}',
  '.p-nav-links{display:none;}',
  '.p-search{display:none;}',
  '.p-hamburger{display:flex;}',
  '.p-nav{padding:0 16px;}',
  '}'
].join('');

/* ── HTML ──────────────────────────────────────── */
var CHV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>';
var ARR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>';
var SCH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
var DART = '<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="40" stroke="white" stroke-width="8" opacity=".25"/><circle cx="50" cy="50" r="22" fill="white" opacity=".3"/><circle cx="50" cy="50" r="9" fill="white"/><line x1="50" y1="5" x2="50" y2="41" stroke="white" stroke-width="5" stroke-linecap="round"/><polygon points="50,5 44,20 56,20" fill="white"/></svg>';

var HTML = [
  '<div class="p-topbar">',
    '<div class="p-topbar-left">',
      '<span class="p-date" id="p-date"></span>',
      '<div class="p-topbar-sep"></div>',
      '<a class="p-topbar-link" href="index.html">Início</a>',
      '<a class="p-topbar-link" href="noticias.html">Notícias</a>',
      '<a class="p-topbar-link" href="classificacoes.html">Classificações</a>',
    '</div>',
    '<div class="p-topbar-right">',
      '<div class="p-live"><span class="p-live-dot"></span>Em Direto</div>',
      '<select class="p-lang" aria-label="Idioma">',
        '<option value="pt">🇵🇹 PT</option>',
        '<option value="en">🇬🇧 EN</option>',
        '<option value="es">🇪🇸 ES</option>',
      '</select>',
      '<button class="p-btn-login">Entrar</button>',
    '</div>',
  '</div>',

  '<header class="p-header">',
    '<nav class="p-nav">',
      '<a class="p-logo" href="index.html">',
        '<div class="p-logo-icon">'+DART+'</div>',
        '<div>',
          '<div class="p-logo-text">Portal <em>180</em></div>',
          '<div class="p-logo-tag">O Portal das Setas</div>',
        '</div>',
      '</a>',
      '<div class="p-nav-links">',
        '<a class="p-nav-link" href="index.html" data-match="index">In\u00edcio</a>',
        '<a class="p-nav-link" href="noticias.html" data-match="noticias">Not\u00edcias</a>',
        '<div class="p-dropdown" id="p-dd-wrap">',
          '<button class="p-nav-link" id="p-dd-btn">Ligas '+CHV+'</button>',
          '<div class="p-dd-menu" id="p-dd-menu">',
            '<div class="p-dd-col">',
              '<div class="p-dd-label"><span class="p-dd-dot" style="background:#005C42"></span>ASZO \u2014 Zona Oeste</div>',
              '<a class="p-dd-item" href="aszo-div1.html">1\u00aa Divis\u00e3o</a>',
              '<a class="p-dd-item" href="aszo-div2.html">2\u00aa Divis\u00e3o</a>',
            '</div>',
            '<div class="p-dd-divider"></div>',
            '<div class="p-dd-col">',
              '<div class="p-dd-label"><span class="p-dd-dot" style="background:#3949AB"></span>ASL \u2014 Lisboa</div>',
              '<a class="p-dd-item" href="asl-div1.html">1\u00aa Divis\u00e3o</a>',
              '<a class="p-dd-item" href="asl-div2a.html">2\u00aa Div. A</a>',
              '<a class="p-dd-item" href="asl-div2b.html">2\u00aa Div. B</a>',
              '<a class="p-dd-item" href="asl-div1f.html">1\u00aa Div. Feminina</a>',
            '</div>',
          '</div>',
        '</div>',
        '<a class="p-nav-link" href="classificacoes.html" data-match="classificacoes">Classifica\u00e7\u00f5es</a>',
        '<a class="p-nav-link" href="noticias.html?cat=Jogadores" data-match="jogadores">Jogadores</a>',
        '<a class="p-nav-link" href="videos.html" data-match="videos">V\u00eddeos</a>',
      '</div>',
      '<div class="p-search">'+SCH+'<input type="text" placeholder="Pesquisar..."></div>',
      '<button class="p-hamburger" id="p-ham"><span></span><span></span><span></span></button>',
    '</nav>',
  '</header>',

  '<div class="p-mob-menu" id="p-mob">',
    '<a href="index.html"><span>In\u00edcio</span>'+ARR+'</a>',
    '<a href="noticias.html"><span>Not\u00edcias</span>'+ARR+'</a>',
    '<div class="p-mob-sep">Ligas</div>',
    '<a href="aszo-div1.html"><span>ASZO \u2014 1\u00aa Divis\u00e3o</span>'+ARR+'</a>',
    '<a href="aszo-div2.html"><span>ASZO \u2014 2\u00aa Divis\u00e3o</span>'+ARR+'</a>',
    '<a href="asl-div1.html"><span>ASL \u2014 1\u00aa Divis\u00e3o</span>'+ARR+'</a>',
    '<a href="asl-div2a.html"><span>ASL \u2014 2\u00aa Div. A</span>'+ARR+'</a>',
    '<a href="asl-div2b.html"><span>ASL \u2014 2\u00aa Div. B</span>'+ARR+'</a>',
    '<a href="asl-div1f.html"><span>ASL \u2014 1\u00aa Div. Feminina</span>'+ARR+'</a>',
    '<div class="p-mob-sep">Outras p\u00e1ginas</div>',
    '<a href="classificacoes.html"><span>Classifica\u00e7\u00f5es</span>'+ARR+'</a>',
  '</div>'
].join('');

/* ── INIT ──────────────────────────────────────── */
function init(){
  // Inject CSS
  var s = document.createElement('style');
  s.textContent = CSS;
  document.head.appendChild(s);

  // Inject HTML
  document.body.insertAdjacentHTML('afterbegin', HTML);



  // Only show topbar on homepage
  var isHome = window.location.pathname === '/' || 
               window.location.pathname.endsWith('index.html') ||
               window.location.pathname.endsWith('/');
  var topbarEl = document.querySelector('.p-topbar');
  if(topbarEl && !isHome) topbarEl.style.display = 'none';

  // Base SEO metatags (if not already set by page)
  function setMeta(name, content, prop){
    if(!content) return;
    var el = document.querySelector(prop ? '[property="'+name+'"]' : '[name="'+name+'"]');
    if(!el){
      el = document.createElement('meta');
      if(prop) el.setAttribute('property', name);
      else el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  var pageTitle = document.title || 'Portal 180';
  var pageDesc = 'Portal 180 — O portal de referência sobre setas em Portugal. Notícias, classificações, resultados e muito mais.';
  var pageUrl = window.location.href;
  var pageImg = 'https://portal180.pages.dev/og-default.png';

  setMeta('description', pageDesc, false);
  setMeta('robots', 'index, follow', false);
  setMeta('og:type', 'website', true);
  setMeta('og:site_name', 'Portal 180', true);
  setMeta('og:title', pageTitle, true);
  setMeta('og:description', pageDesc, true);
  setMeta('og:url', pageUrl, true);
  setMeta('og:image', pageImg, true);
  setMeta('twitter:card', 'summary_large_image', false);
  setMeta('twitter:title', pageTitle, false);
  setMeta('twitter:description', pageDesc, false);
  setMeta('twitter:image', pageImg, false);

  // Canonical URL
  if(!document.querySelector('link[rel="canonical"]')){
    var can = document.createElement('link');
    can.rel = 'canonical';
    can.href = pageUrl;
    document.head.appendChild(can);
  }

  // Date
  var now = new Date();
  var days = ['Domingo','Segunda-feira','Ter\u00e7a-feira','Quarta-feira','Quinta-feira','Sexta-feira','S\u00e1bado'];
  var months = ['Janeiro','Fevereiro','Mar\u00e7o','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  var d = document.getElementById('p-date');
  if(d) d.textContent = days[now.getDay()]+', '+now.getDate()+' de '+months[now.getMonth()]+' de '+now.getFullYear();

  // Active nav link
  var path = window.location.pathname;
  var file = path.split('/').pop() || 'index.html';
  document.querySelectorAll('.p-nav-link[data-match]').forEach(function(a){
    if(file.indexOf(a.getAttribute('data-match')) !== -1) a.classList.add('active');
  });
  if(file === '' || file === 'index.html'){
    var home = document.querySelector('.p-nav-link[data-match="index"]');
    if(home) home.classList.add('active');
  }

  // Dropdown
  var ddBtn = document.getElementById('p-dd-btn');
  var ddMenu = document.getElementById('p-dd-menu');
  var ddWrap = document.getElementById('p-dd-wrap');
  if(ddBtn && ddMenu){
    ddBtn.addEventListener('click', function(e){
      e.stopPropagation();
      ddMenu.classList.toggle('open');
      ddWrap.classList.toggle('p-dd-open');
    });
    document.addEventListener('click', function(){
      ddMenu.classList.remove('open');
      ddWrap.classList.remove('p-dd-open');
    });
    ddMenu.addEventListener('click', function(e){ e.stopPropagation(); });
  }

  // Hamburger
  var ham = document.getElementById('p-ham');
  var mob = document.getElementById('p-mob');
  if(ham && mob){
    ham.addEventListener('click', function(){
      ham.classList.toggle('open');
      mob.classList.toggle('open');
      document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : '';
    });
    mob.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        ham.classList.remove('open');
        mob.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

})();
