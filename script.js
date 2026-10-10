// Renseigner l’adresse réelle d’Elie ici pour activer l’ouverture d’un e-mail.
const ELIE_EMAIL = '';
const projectPhotos = ["IMG_0094.JPG.jpeg","IMG_1393.JPG.jpeg","IMG_1397.JPG.jpeg","IMG_1398.JPG.jpeg","IMG_1536.JPG.jpeg","IMG_1923.JPG.jpeg","IMG_1925.JPG.jpeg","IMG_1952.JPG.jpeg","IMG_1995.JPG.jpeg","IMG_2158.JPG.jpeg","IMG_2159.JPG.jpeg","IMG_2161.JPG.jpeg","IMG_2169.JPG.jpeg","IMG_3028.JPG.jpeg","IMG_3029.JPG.jpeg","IMG_3038.JPG.jpeg","IMG_3039.JPG.jpeg","IMG_3040.JPG.jpeg","IMG_3063.JPG.jpeg","IMG_3065.JPG.jpeg","IMG_3069.JPG.jpeg","IMG_3528.JPG.jpeg","IMG_3569.JPG.jpeg","IMG_3659.JPG.jpeg","IMG_3675.JPG.jpeg","IMG_3689.JPG.jpeg","IMG_4360.JPG.jpeg","IMG_7988.JPG.jpeg","IMG_7989.JPG.jpeg","IMG_8487.JPG.jpeg","IMG_8525.JPG.jpeg","IMG_8534.JPG.jpeg","IMG_8536.JPG.jpeg","IMG_8538.JPG.jpeg","IMG_8543.JPG.jpeg","IMG_8577.JPG.jpeg","IMG_8579.JPG.jpeg","IMG_8999.JPG.jpeg","IMG_9056.JPG.jpeg","IMG_9179.JPG.jpeg","WhatsApp Image 2026-10-10 at 11.55.10.jpeg","WhatsApp Image 2026-10-10 at 11.55.11 (1).jpeg","WhatsApp Image 2026-10-10 at 11.55.11 (2).jpeg","WhatsApp Image 2026-10-10 at 11.55.11.jpeg","WhatsApp Image 2026-10-10 at 11.55.12 (1).jpeg","WhatsApp Image 2026-10-10 at 11.55.12 (2).jpeg","WhatsApp Image 2026-10-10 at 11.55.12 (3).jpeg","WhatsApp Image 2026-10-10 at 11.55.12.jpeg","WhatsApp Image 2026-10-10 at 11.55.13 (1).jpeg","WhatsApp Image 2026-10-10 at 11.55.13 (2).jpeg","WhatsApp Image 2026-10-10 at 11.55.13.jpeg","WhatsApp Image 2026-10-10 at 11.55.14 (1).jpeg","WhatsApp Image 2026-10-10 at 11.55.14 (2).jpeg","WhatsApp Image 2026-10-10 at 11.55.14.jpeg","WhatsApp Image 2026-10-10 at 11.55.15 (1).jpeg","WhatsApp Image 2026-10-10 at 11.55.15.jpeg"];
const photoHeadlines = ['Votre histoire, en images.', 'Des instants à garder.', 'Une image qui vous ressemble.', 'L’émotion au premier regard.'];
const projects = projectPhotos.map((_,i) => [photoHeadlines[i % photoHeadlines.length], 'Photographie', 'Certains instants méritent plus qu’un souvenir : ils méritent une image que l’on aime revoir. Un regard, une lumière, une émotion… je cherche ce qui rend chaque histoire singulière pour en faire une photographie qui vous ressemble. Pour vos portraits, vos événements ou votre univers visuel, donnons ensemble vie à des images que vous serez fier de partager.']);
const articles = [
  ['Quand une idée devient une identité.', 'Une identité commence par une intention. Avant de choisir une couleur ou de dessiner une forme, il faut comprendre ce que le projet souhaite exprimer.', 'L’exploration permet ensuite de relier les mots aux images. La typographie, la composition et la couleur deviennent un langage commun. Cette note est un exemple éditorial à personnaliser.'],
  ['Le détail qui change tout.', 'Un espacement, une nuance, un alignement : les détails donnent à une composition sa justesse.', 'Prendre du recul, comparer et simplifier permet de rendre l’ensemble plus clair. Le travail se termine souvent par ces petites décisions qui font respirer une création. Cette note est un exemple éditorial à personnaliser.']
];
const detail = document.querySelector('#detail');
const content = document.querySelector('#detail-content');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const [title, category, description] = projects[Number(button.dataset.project)];
  content.innerHTML = `<div class="eyebrow">${category} / ${projectPhotos[Number(button.dataset.project)] ? "ELIE KOY" : "EMPLACEMENT RÉSERVÉ"}</div><h2>${title}</h2><div class="detail-art">${button.querySelector('.art').outerHTML}</div><p class="detail-text">${description}</p><div class="detail-actions"><a class="contact-button detail-contact" href="#contact">Créons vos prochaines images ↗</a><a class="social-link" href="https://www.tiktok.com/@chez.biso.communication?_r=1&_t=ZS-9AR8jqLLovM" target="_blank" rel="noopener noreferrer">Découvrir TikTok ↗</a></div>${projectPhotos[Number(button.dataset.project)] ? "" : '<p class="demo-note">Image et descriptif du projet à ajouter.</p>'}`;
  content.querySelector(".detail-contact")?.addEventListener("click", () => detail.close());
  detail.showModal();
}));
document.querySelectorAll('[data-article]').forEach(button => button.addEventListener('click', () => {
  const [title, intro, body] = articles[Number(button.dataset.article)];
  content.innerHTML = `<div class="eyebrow">JOURNAL / NOTE DE DÉMONSTRATION</div><h2>${title}</h2><p class="detail-text">${intro}</p><p class="detail-text">${body}</p>`;
  detail.showModal();
}));
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const bounds = dialog.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close(); } });
});
const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => { const open = document.querySelector('nav').classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); menu.textContent = open ? 'Fermer −' : 'Menu +'; });
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => { document.querySelector('nav').classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.textContent = 'Menu +'; }));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#contact-action').addEventListener('click', () => document.querySelector('#message').showModal());
if (ELIE_EMAIL) { document.querySelector('#contact-note').textContent = ELIE_EMAIL; document.querySelector('#contact-form button').textContent = 'Ouvrir mon e-mail ↗'; document.querySelector('#form-status').textContent = 'Votre messagerie s’ouvrira pour envoyer le message.'; }
document.querySelector('#contact-form').addEventListener('submit', async event => {
  event.preventDefault(); const data = new FormData(event.target);
  const message = `Bonjour Elie,\n\n${data.get('message')}\n\n${data.get('name')}\n${data.get('email')}`;
  if (ELIE_EMAIL) { location.href = `mailto:${ELIE_EMAIL}?subject=${encodeURIComponent('Un nouveau projet — ' + data.get('name'))}&body=${encodeURIComponent(message)}`; return; }
  location.href = 'https://wa.me/243862198601?text=' + encodeURIComponent(message);
});

const socialTabs = [...document.querySelectorAll('.social-tabs [role="tab"]')];
function selectSocialTab(tab) { socialTabs.forEach(item => { const active=item===tab; item.setAttribute('aria-selected', String(active)); item.tabIndex=active?0:-1; document.getElementById(item.getAttribute('aria-controls')).hidden=!active; }); }
socialTabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectSocialTab(tab));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%socialTabs.length;else if(event.key==='ArrowLeft')next=(index+socialTabs.length-1)%socialTabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=socialTabs.length-1;else return;event.preventDefault();selectSocialTab(socialTabs[next]);socialTabs[next].focus();});});
