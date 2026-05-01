// ------------------- NEWS DATABASE -------------------
const curatedNewsDB = [
  { id:1, title:"SAI sanctioned assistance for athletes participation in IBSF World Men's Billiards Championship", description:"Sports Authority of India backs Sourav Kothari, Pankaj Advani & coach Ashok Shandilya for Ireland event.", category:"sports", image:"https://picsum.photos/id/29/600/400", author:"Sports Bureau", date:"Apr 30, 2026", source:"The Tribune"},
  { id:2, title:"IPL 2026: 'Gill broke the back of the chase early,' says Buttler after GT's win", description:"Gujarat Titans skipper Shubman Gill masterclass leads to thrilling chase against RCB.", category:"sports", image:"https://picsum.photos/id/14/600/400", author:"Cricket Desk", date:"Apr 30, 2026", source:"Lokmat Times"},
  { id:3, title:"Trump's Controversial Pick: Dr. Nicole Saphier for Surgeon General", description:"Radiologist and Fox News contributor nominated after withdrawal of Casey Means.", category:"world", image:"https://picsum.photos/id/48/600/400", author:"International Desk", date:"Apr 30, 2026", source:"Devdiscourse"},
  { id:4, title:"Arsenal struggles deepen as Jack Talbot plays defender, Louis Zecevic John in goal", description:"Unusual circumstances hit Arsenal amid Mikel Arteta injury crisis.", category:"sports", image:"https://picsum.photos/id/42/600/400", author:"Football analyst", date:"Apr 30, 2026", source:"Times of India"},
  { id:5, title:"RPG Life Sciences bets big on API business, eyes GLP-1 entry by August-September", description:"Plans significant acquisition to scale operations and enter weight-loss therapy market.", category:"business", image:"https://picsum.photos/id/26/600/400", author:"BizToday", date:"Apr 30, 2026", source:"Economic Times"},
  { id:6, title:"India's IT is 'Information Technology', Pakistan's is 'International Terrorism': Rajnath", description:"Defence Minister asserts India's new decisive approach against terrorism.", category:"india", image:"https://picsum.photos/id/91/600/400", author:"Political Bureau", date:"Apr 30, 2026", source:"ET"},
  { id:7, title:"Auto sector pushes for trials ahead of E25 move over vehicle concerns", description:"Internal industry deliberations over ethanol-blended fuel impact.", category:"business", image:"https://picsum.photos/id/111/600/400", author:"Auto Desk", date:"Apr 30, 2026", source:"Business Standard"},
  { id:8, title:"Garden Reach Shipbuilders announces superannuation of General Manager Harish Kumar", description:"Defence PSU leadership transition effective May 1, 2026.", category:"business", image:"https://picsum.photos/id/58/600/400", author:"Defence Correspondent", date:"Apr 30, 2026", source:"scanx.trade"},
  { id:9, title:"IPL 2026 Points Table & Playoff Scenarios: Magic Number To Qualify", description:"RCB, GT, CSK chase playoffs — Mumbai Indians survival hopes.", category:"sports", image:"https://picsum.photos/id/22/600/400", author:"Cricket Stats", date:"Apr 30, 2026", source:"Financial Express"},
  { id:10, title:"Trai begins exploring spectrum allocation for wireless communication from vehicles", description:"Paving the way for autonomous cars & real-time vehicle data exchange.", category:"technology", image:"https://picsum.photos/id/0/600/400", author:"Telecom Bureau", date:"Apr 30, 2026", source:"Economic Times"},
  { id:11, title:"Tips To Stay Hydrated This Summer Season", description:"Expert advice to avoid heat strokes, fatigue & dehydration.", category:"health", image:"https://picsum.photos/id/44/600/400", author:"Wellness Team", date:"Apr 30, 2026", source:"Republic World"},
  { id:12, title:"Yamuna cruise service likely to begin soon in Delhi", description:"'Namo Yamuna' boat to offer scenic rides from May end.", category:"india", image:"https://picsum.photos/id/15/600/400", author:"Delhi Bureau", date:"Apr 30, 2026", source:"Hindustan Times"},
  { id:13, title:"'Make Pluto a planet again': NASA Administrator calls for status restoration", description:"Jared Isaacman supports Pluto's planetary status during Senate hearing.", category:"technology", image:"https://picsum.photos/id/96/600/400", author:"Science Editor", date:"Apr 30, 2026", source:"Times of India"},
  { id:14, title:"X unveils revamped AI-powered advertising platform to boost Ad business", description:"New AI tools aim to rebuild advertiser confidence.", category:"technology", image:"https://picsum.photos/id/77/600/400", author:"Tech Desk", date:"Apr 30, 2026", source:"Firstpost"},
  { id:15, title:"Mental health in focus as Himachal notifies rules to regulate coaching centres", description:"Strict penalties from ₹50,000 to ₹2 lakh for violations.", category:"india", image:"https://picsum.photos/id/30/600/400", author:"Education Correspondent", date:"Apr 30, 2026", source:"Indian Express"},
  { id:16, title:"Sri Lanka beat host Bangladesh, hit winning form ahead of T20 World Cup", description:"Sri Lanka registers comprehensive win.", category:"sports", image:"https://picsum.photos/id/121/600/400", author:"Cricket News", date:"Apr 30, 2026", source:"News18"},
  { id:17, title:"Venice Biennale Jury Resignation Sparks Art World Controversy", description:"Exclusion of Russian & Israeli artists leads to mass resignation.", category:"world", image:"https://picsum.photos/id/104/600/400", author:"Culture Desk", date:"Apr 30, 2026", source:"Devdiscourse"},
  { id:18, title:"UK terror threat level raised to 'severe' after antisemitic stabbing", description:"Home secretary raises national threat level.", category:"world", image:"https://picsum.photos/id/61/600/400", author:"Foreign Bureau", date:"Apr 30, 2026", source:"Hindustan Times"},
  { id:19, title:"PM Modi attends 11th Heads of Missions Conference, emphasises global engagement", description:"Strengthening India's strategic partnerships through trade & tech.", category:"india", image:"https://picsum.photos/id/82/600/400", author:"Diplomatic Bureau", date:"Apr 30, 2026", source:"The Tribune"},
  { id:20, title:"From $61 billion to $900 billion: Anthropic could dethrone OpenAI", description:"Fastest growing AI startup prepares for possible IPO.", category:"technology", image:"https://picsum.photos/id/76/600/400", author:"AI Insider", date:"Apr 30, 2026", source:"Economic Times"},
];

// Global state
let currentCategory = "general";
let currentView = "homepage";
let searchQuery = "";
let currentAuthor = "";

const contentDiv = document.getElementById("dynamic-content");
const mobileMenu = document.getElementById("mobileMenu");

// Helper functions
function getArticlesByCategory(category, query = "") {
  let filtered = [...curatedNewsDB];
  if (query && query.trim() !== "") {
    filtered = filtered.filter(art => 
      art.title.toLowerCase().includes(query.toLowerCase()) || 
      art.description.toLowerCase().includes(query.toLowerCase())
    );
  } else if (category && category !== "general") {
    filtered = filtered.filter(art => art.category === category);
  }
  return filtered;
}

function getTrending() { 
  return [...curatedNewsDB].sort(() => Math.random() - 0.5).slice(0, 6); 
}

function closeMobileMenu() {
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
    document.body.classList.remove('menu-open');
  }
}

// Render functions
function renderHomepage(articles) {
  const heroArticle = articles[0] || curatedNewsDB[0];
  const smallArticles = articles.slice(1, 5);
  const latestArticles = articles.slice(5, 13);
  const trendingList = getTrending();

  return `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div class="md:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
            <img src="${heroArticle.image}" class="w-full h-64 object-cover" alt="hero">
            <div class="p-5"><h2 class="text-2xl font-extrabold">${heroArticle.title}</h2><p class="text-gray-600 dark:text-gray-300 mt-2">${heroArticle.description.substring(0, 120)}...</p><button class="mt-3 text-blue-600 font-semibold read-more-btn" data-id="${heroArticle.id}">Read Full Story →</button></div>
          </div>
          <div class="space-y-4">
            ${smallArticles.map(art => `<div class="bg-white dark:bg-gray-800 rounded-xl shadow-md flex gap-3 p-2 news-card cursor-pointer"><img src="${art.image}" class="w-20 h-20 object-cover rounded-md"><div><h4 class="font-bold text-sm line-clamp-2">${art.title.substring(0, 65)}</h4><button class="text-xs text-blue-500 mt-1 read-more-btn" data-id="${art.id}">Read</button></div></div>`).join('')}
          </div>
        </div>
        <h2 class="text-2xl font-bold border-l-4 border-red-600 pl-3 my-6">📰 Latest Headlines</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${latestArticles.map(art => `<div class="news-card bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"><img src="${art.image}" class="w-full h-48 object-cover"><div class="p-4"><h3 class="text-lg font-bold">${art.title.substring(0, 75)}</h3><p class="text-gray-600 dark:text-gray-400 text-sm mt-1">${art.description.substring(0, 90)}...</p><button class="mt-2 text-blue-500 text-sm font-semibold read-more-btn" data-id="${art.id}">Continue Reading →</button></div></div>`).join('')}
        </div>
      </div>
      <div class="space-y-6">
        <div class="bg-white dark:bg-gray-800 p-5 rounded-xl shadow sticky top-24"><h3 class="font-bold text-xl flex items-center"><i class="fas fa-chart-line text-red-500 mr-2"></i>Trending Now</h3><ul class="mt-3 space-y-3">${trendingList.map((t, i) => `<li class="flex items-start gap-2 text-sm hover:text-blue-600 cursor-pointer read-more-btn" data-id="${t.id}"><span class="font-bold text-gray-400">${i + 1}.</span><span>${t.title.substring(0, 68)}</span></li>`).join('')}</ul></div>
        <div class="ad-glow p-4 rounded-xl text-center border shadow-sm"><i class="fas fa-bullhorn text-amber-600"></i> <span class="font-bold">Advertise with ReferIndia</span><div class="bg-amber-100 dark:bg-gray-700 h-32 flex items-center justify-center rounded mt-2 text-sm">📢 Premium Reach</div><p class="text-xs mt-2">Reach 5M+ readers | sales@referindia.online</p></div>
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 p-5 rounded-xl"><h3 class="font-bold text-lg">✉️ Daily Newsletter</h3><p class="text-sm">Get the biggest stories, every morning.</p><div class="flex mt-3"><input id="sidebarEmail" class="w-full p-2 text-sm border rounded-l dark:bg-gray-700" placeholder="Email"><button id="sidebarSubBtn" class="bg-blue-600 px-3 text-white rounded-r text-sm">Subscribe</button></div><p id="sideMsg" class="text-xs text-green-600 mt-1"></p></div>
      </div>
    </div>
  `;
}

function renderCategoryPage(articles, categoryName) {
  const display = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  if (articles.length === 0) return `<div class="text-center py-12 text-gray-500">No articles in ${display}. Stay tuned!</div>`;
  return `<div><div class="flex items-center gap-2 mb-6"><i class="fas fa-tag text-blue-600"></i><h1 class="text-3xl font-bold">${display} News</h1></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">${articles.map(art => `<div class="news-card bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"><img src="${art.image}" class="h-48 w-full object-cover"><div class="p-5"><h2 class="text-xl font-bold">${art.title.substring(0, 70)}</h2><p class="text-gray-500 text-sm mt-1">${art.source} • ${art.date}</p><button class="mt-3 text-blue-600 font-medium read-more-btn" data-id="${art.id}">Read more →</button></div></div>`).join('')}</div></div>`;
}

function renderSearchPage(articles, query) {
  return `<div><div class="flex items-center gap-3 mb-6"><i class="fas fa-search text-2xl text-blue-600"></i><h1 class="text-2xl font-bold">Search results: "${query}"</h1><span class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">${articles.length} stories</span></div><div class="grid gap-6">${articles.map(art => `<div class="bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col sm:flex-row overflow-hidden"><img src="${art.image}" class="sm:w-48 h-40 object-cover"><div class="p-4 flex-1"><h3 class="text-xl font-bold">${art.title}</h3><p class="text-gray-500 text-sm">${art.description.substring(0, 110)}</p><button class="mt-2 text-blue-500 read-more-btn" data-id="${art.id}">Full article →</button></div></div>`).join('')}</div></div>`;
}

function renderAuthorPage(articles, authorName) {
  return `<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md flex items-center gap-5 mb-8"><i class="fas fa-user-circle text-7xl text-gray-500"></i><div><h1 class="text-3xl font-bold">${authorName}</h1><p>Senior National Correspondent</p><p class="text-sm text-gray-500">Exclusive reports & in-depth analysis</p></div></div><h2 class="text-2xl font-bold mb-4">Stories by ${authorName}</h2><div class="grid md:grid-cols-2 gap-5">${articles.map(art => `<div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow"><h3 class="font-bold">${art.title}</h3><button class="text-blue-500 read-more-btn mt-2" data-id="${art.id}">Read</button></div>`).join('')}</div>`;
}

function showSingleArticleModal(articleId) {
  const article = curatedNewsDB.find(a => a.id == articleId);
  if (!article) return;
  const modalHtml = `
    <div id="articleModal" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[1200] p-4">
      <div class="bg-white dark:bg-gray-800 max-w-3xl w-full rounded-2xl overflow-y-auto max-h-[90vh] shadow-2xl">
        <div class="sticky top-0 bg-white dark:bg-gray-800 px-5 py-3 border-b flex justify-between font-bold"><span class="text-xl">📄 ReferIndia Exclusive</span><button id="closeModalBtn" class="text-3xl leading-5">&times;</button></div>
        <img src="${article.image}" class="w-full h-64 object-cover">
        <div class="p-6"><h1 class="text-2xl md:text-3xl font-extrabold">${article.title}</h1><div class="flex text-sm text-gray-500 gap-3 mt-2"><span>${article.author}</span><span>${article.date}</span><span>${article.source}</span></div><p class="mt-5 text-gray-700 dark:text-gray-300 leading-relaxed">${article.description} Full coverage: India's most credible newsroom brings you exclusive insights.</p><div class="mt-6 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg"><i class="fas fa-newspaper"></i> Premium journalism. Subscribe for unlimited access.</div></div>
      </div>
    </div>`;
  document.body.insertAdjacentHTML('beforeend', modalHtml);
  document.getElementById('closeModalBtn').addEventListener('click', () => document.getElementById('articleModal').remove());
}

function loadPageContent() {
  let articles = [];
  
  if (window.currentPage === 'search' && window.searchQueryText) {
    articles = getArticlesByCategory("general", window.searchQueryText);
    if (contentDiv) contentDiv.innerHTML = renderSearchPage(articles, window.searchQueryText);
  } else if (window.currentPage === 'author' && window.currentAuthor) {
    articles = curatedNewsDB.filter(a => a.author.toLowerCase().includes(window.currentAuthor.toLowerCase()));
    if (contentDiv) contentDiv.innerHTML = renderAuthorPage(articles, window.currentAuthor);
  } else if (window.currentPage === 'category' && window.currentCategory && window.currentCategory !== 'general') {
    articles = getArticlesByCategory(window.currentCategory);
    if (contentDiv) contentDiv.innerHTML = renderCategoryPage(articles, window.currentCategory);
  } else {
    articles = curatedNewsDB;
    if (contentDiv) contentDiv.innerHTML = renderHomepage(articles);
  }
  
  attachReadMoreEvents();
  attachSidebarEvents();
}

function attachReadMoreEvents() {
  document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.removeEventListener('click', readHandler);
    btn.addEventListener('click', readHandler);
  });
}

function readHandler(e) {
  const id = this.getAttribute('data-id');
  if (id) showSingleArticleModal(parseInt(id));
}

function attachSidebarEvents() {
  const sideSub = document.getElementById('sidebarSubBtn');
  if (sideSub) sideSub.onclick = () => { document.getElementById('sideMsg').innerHTML = "📩 Subscribed! Check your inbox."; };
  
  const footerSub = document.getElementById('footerSubBtn');
  if (footerSub) footerSub.onclick = () => { document.getElementById('newsletterMsg').innerHTML = "✨ You're on the list!"; };
}

// Dark Mode Function
function initDarkMode() {
  const darkModeBtn = document.getElementById('darkModeToggle');
  if (!darkModeBtn) return;
  
  const icon = darkModeBtn.querySelector('i');
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
    if (icon) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  } else {
    document.documentElement.classList.remove('dark');
    if (icon) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }
  
  darkModeBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      if (icon) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      if (icon) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      }
      localStorage.setItem('theme', 'dark');
    }
  });
}

// Search functionality
function initSearch() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && searchInput.value.trim()) {
        window.location.href = `search.html?q=${encodeURIComponent(searchInput.value.trim())}`;
      }
    });
  }
  
  const mobileSearch = document.getElementById('mobile-search');
  if (mobileSearch) {
    mobileSearch.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && mobileSearch.value.trim()) {
        window.location.href = `search.html?q=${encodeURIComponent(mobileSearch.value.trim())}`;
        closeMobileMenu();
      }
    });
  }
}

// Mobile menu toggle
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  if (menuBtn) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  document.addEventListener('click', function(event) {
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      const isClickInsideNav = event.target.closest('nav');
      const isClickOnMenuBtn = event.target.closest('#mobileMenuBtn');
      if (!isClickInsideNav && !isClickOnMenuBtn) {
        closeMobileMenu();
      }
    }
  });
  
  window.addEventListener('scroll', () => {
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      closeMobileMenu();
    }
  });
}

// Initialize all
initDarkMode();
initSearch();
initMobileMenu();