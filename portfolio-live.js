// Le contenu éditable est publié dans portfolio.json.
fetch('portfolio.json', {cache:'no-store'}).then(r=>{if(!r.ok)throw Error('Contenu indisponible');return r.json();}).then(data=>{
  const safeURL=(value)=>{try{const u=new URL(value);return u.protocol==='https:'?u.href:'#';}catch{return '#';}};
  const phone=String(data.phone).replace(/\D/g,'');
  document.querySelectorAll('a[href^="tel:"]').forEach(a=>{a.href='tel:+'+phone;if(a.classList.contains('phone-number')||a.textContent.includes('+243'))a.textContent='+'+phone;});
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach(a=>a.href='https://wa.me/'+phone);
  document.querySelectorAll('a[href*="whatsapp.com/channel/"]').forEach(a=>a.href=safeURL(data.channel));
  document.querySelectorAll('a[href*="tiktok.com/"]').forEach(a=>a.href=safeURL(data.tiktok));
  document.querySelector('#contact-form').addEventListener('submit',event=>{event.preventDefault();event.stopImmediatePropagation();const f=new FormData(event.target);location.href='https://wa.me/'+phone+'?text='+encodeURIComponent('Bonjour Elie,\n\n'+f.get('message')+'\n\n'+f.get('name')+'\n'+f.get('email'));},true);
  const gallery=document.querySelector('.projects');gallery.replaceChildren();
  data.projects.forEach((project,index)=>{
    if(!project.image||/^(?:https?:|data:|\/|.*\.\.)/i.test(project.image))return;
    const button=document.createElement('button');button.className='project';button.dataset.project=index;button.setAttribute('aria-label','Voir '+project.title);
    const art=document.createElement('div');art.className='art project-photo';const img=document.createElement('img');img.src=project.image;img.alt=project.title;img.loading='lazy';img.decoding='async';art.append(img);
    const caption=document.createElement('div');caption.className='project-caption';const title=document.createElement('span');title.textContent=project.title;const author=document.createElement('small');author.textContent='Elie Koy';caption.append(title,author);button.append(art,caption);gallery.append(button);
    button.addEventListener('click',()=>{const body=document.querySelector('#detail-content');body.replaceChildren();const heading=document.createElement('h2');heading.textContent=project.title;const photo=document.createElement('div');photo.className='detail-art';photo.append(art.cloneNode(true));photo.querySelector('img').loading='eager';const text=document.createElement('p');text.className='detail-text';text.textContent=project.description;const action=document.createElement('a');action.className='contact-button';action.href='https://wa.me/'+phone;action.target='_blank';action.rel='noopener noreferrer';action.textContent='Créons vos prochaines images ↗';body.append(heading,photo,text,action);document.querySelector('#detail').showModal();});
  });
}).catch(()=>{/* La galerie HTML reste disponible si la connexion échoue. */});
