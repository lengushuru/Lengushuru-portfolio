const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

const navLinks = document.querySelectorAll('.nav-item');

function linkshandler() {
  navMenu.classList.remove('show');
}
navLinks.forEach((n) => n.addEventListener('click', linkshandler));
const cards = [
  {
    class: 'portfolio',
    title_heading: 'Tonic',
    imgdiv: 'snapshot1',
    heading3: 'CANOPY',
    list1: ['CANOPY', 'Back End Dev', '2015', './images/Counter.png'],
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    deskImage: './images/portfolio2.png',
    list2: ['html', 'css', 'javaScript'],
    cardButton: 'See Project',
    cardButton1: 'https://github.com/lengushuru/Lengushuru-portfolio',
    cardButton2: 'https://lengushuru.github.io/Lengushuru-portfolio/',
  },
  {
    class: 'portfolio reverse',
    title_heading: 'Multi-Post Stories',
    imgdiv: 'snapshot2',
    heading3: 'FACEBOOK',
    list1: ['FACEBOOK', 'Full Stack Dev', '2015', './images/Counter.png'],
    paragraph: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    deskImage: './images/Snapshoot_Portfolio2.png',
    list2: ['html', 'css', 'javaScript'],
    cardButton: 'See Project',
    cardButton1: 'https://github.com/lengushuru/Lengushuru-portfolio',
    cardButton2: 'https://lengushuru.github.io/Lengushuru-portfolio/',
  },
  {
    class: 'portfolio',
    title_heading: 'Facebook 360',
    heading3: 'FACEBOOK',
    imgdiv: 'snapshot3',
    list1: ['FACEBOOK', 'Full Stack Dev', '2015', './images/Counter.png'],
    paragraph: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    deskImage: './images/Snapshoot_Portfolio3.png',
    list2: ['html', 'css', 'javaScript'],
    cardButton: 'See Project',
    cardButton1: 'https://github.com/lengushuru/Lengushuru-portfolio',
    cardButton2: 'https://lengushuru.github.io/Lengushuru-portfolio/',
  },
  {
    class: 'portfolio reverse',
    title_heading: 'Uber Navigation',
    heading3: 'Uber',
    imgdiv: 'snapshot4',
    list1: ['Uber', 'Full Stack Dev', '2015', './images/Counter.png'],
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    deskImage: './images/Snapshoot_Portfolio4.png',
    list2: ['html', 'css', 'javaScript'],
    cardButton: 'See Project',
    cardButton1: 'https://github.com/lengushuru/Lengushuru-portfolio',
    cardButton2: 'https://github.com/Loltolo-Lesapiti/loltolo-lesapiti.github.io',
  },
];

cards.forEach((card) => {
  const [li1, li2, li3, li4] = card.list1;
  const cardContainer = document.createElement('div');
  cardContainer.className = card.class;
  document.getElementById('portfolio').appendChild(cardContainer);
  const cardimg = document.createElement('div');
  cardimg.className = card.imgdiv;
  cardContainer.appendChild(cardimg);
  const cardContent = document.createElement('div');
  cardContent.className = 'portfolio-content';
  cardContainer.appendChild(cardContent);
  const subtitle = document.createElement('div');
  subtitle.className = 'title_heading';
  const titleh2 = document.createElement('h2');
  titleh2.className = 'title-heading2';
  titleh2.textContent = card.title_heading;
  subtitle.appendChild(titleh2);
  cardContent.appendChild(subtitle);

  const list = document.createElement('ul');
  list.className = 'class-content';
  cardContent.appendChild(list);
  const liItem1 = document.createElement('l1');
  liItem1.className = 'canopy';
  liItem1.textContent = li1;
  list.appendChild(liItem1);
  const liItem2 = document.createElement('l1');
  liItem2.className = 'dot';
  const dot = document.createElement('img');
  dot.src = li4;
  liItem2.appendChild(dot);
  list.appendChild(liItem2);
  const liItem3 = document.createElement('l1');
  liItem3.className = 'back-end';
  liItem3.textContent = li2;
  list.appendChild(liItem3);
  const liItem4 = document.createElement('l1');
  liItem4.className = 'dot';
  const dot1 = document.createElement('img');
  dot1.src = li4;
  liItem4.appendChild(dot1);
  list.appendChild(liItem4);
  const liItem5 = document.createElement('l1');
  liItem5.className = 'year';
  liItem5.textContent = li3;
  list.appendChild(liItem5);
  const pText = document.createElement('div');
  pText.className = 'primary-text';
  cardContent.appendChild(pText);
  const pPara = document.createElement('p');
  pPara.textContent = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';
  pText.appendChild(pPara);
  const languages = document.createElement('div');
  languages.className = 'languages';
  cardContent.appendChild(languages);
  const langList = document.createElement('ul');
  languages.appendChild(langList);

  for (let i = 0; i < card.list2.length; i += 1) {
    const list2Items = document.createElement('li');
    list2Items.className = 'lang--names';
    list2Items.textContent = card.list2[i];
    langList.appendChild(list2Items);
  }
  const cardBtn = document.createElement('div');
  cardBtn.className = 'works';
  cardContent.append(cardBtn);
  const btnLink = document.createElement('a');
  btnLink.className = 'displayModal';
  cardBtn.appendChild(btnLink);
  const btnTxt = document.createElement('p');
  btnTxt.textContent = 'See Project';
  btnLink.appendChild(btnTxt);
});

cards.forEach((card) => {
  const [,,, li4] = card.list1;
  const modal = document.createElement('div');
  modal.className = 'modal';
  document.querySelector('#portfolio').appendChild(modal);
  const content = document.createElement('div');
  content.className = 'modal-content';
  modal.appendChild(content);
  const closebtn = document.createElement('span');
  closebtn.innerHTML = '&times;';
  content.appendChild(closebtn);
  closebtn.className = 'closeModal';
  const heading2 = document.createElement('h2');
  content.appendChild(heading2);
  heading2.className = 'modalh2';
  const canopyDiv = document.createElement('div');
  canopyDiv.className = 'canopy2 canopymodal';
  content.appendChild(canopyDiv);
  const mobileImage = document.createElement('img');
  mobileImage.className = 'mobile_image enlm';
  mobileImage.src = card.deskImage;
  content.appendChild(mobileImage);
  const DeskImage = document.createElement('img');
  DeskImage.className = 'desktop_image  enl';
  DeskImage.src = card.deskImage;
  content.appendChild(DeskImage);
  const ContentDiv = document.createElement('div');
  ContentDiv.className = 'flex_content pop';
  content.appendChild(ContentDiv);
  const heading3 = document.createElement('h3');
  canopyDiv.appendChild(heading3);
  heading3.className = 'modalHeader';
  heading3.textContent = card.heading3;
  const paragraph = document.createElement('p');
  paragraph.className = 'card-content pop_paragh';
  ContentDiv.appendChild(paragraph);
  paragraph.textContent = card.paragraph;
  const list1 = document.createElement('ul');
  list1.className = 'class-content ul1_modal ';
  canopyDiv.appendChild(list1);
  const classes = ['canopy', 'back-end', 'year'];
  for (let j = 0, i = 0; j < card.list1.length - 1; j += 1, i += 1) {
    const list1Elements = document.createElement('li');
    list1Elements.className = classes[i];
    list1Elements.textContent = card.list1[j];
    list1.appendChild(list1Elements);

    if (j < card.list1.length - 2) {
      const list1items = document.createElement('l1');
      list1items.className = 'dot';
      const dotz = document.createElement('img');
      dotz.src = li4;
      list1items.appendChild(dotz);
      list1.appendChild(list1items);
    }
  }
  const languages = document.createElement('div');
  languages.className = 'languages poplang';
  ContentDiv.appendChild(languages);
  const langList = document.createElement('ul');

  languages.appendChild(langList);
  for (let i = 0; i < card.list2.length; i += 1) {
    const list2Items = document.createElement('li');
    list2Items.className = 'lang--names';
    list2Items.textContent = card.list2[i];
    langList.appendChild(list2Items);
  }
  const list2Btndiv = document.createElement('div');
  list2Btndiv.className = 'list2_btn';
  languages.appendChild(list2Btndiv);
  const btnDiv = document.createElement('div');
  btnDiv.className = 'btnDiv';
  list2Btndiv.appendChild(btnDiv);
  const liveLink = document.createElement('a');
  liveLink.href = card.cardButton1;
  const cardButton1 = document.createElement('div');
  cardButton1.className = 'see-more';
  liveLink.appendChild(cardButton1);
  const btnimg = document.createElement('img');
  btnimg.src = './images/btnIcon.svg';
  cardButton1.appendChild(btnimg);
  const btntext = document.createElement('p');
  btntext.textContent = 'See Live';
  cardButton1.appendChild(btntext);
  btnDiv.appendChild(liveLink);

  const source = document.createElement('a');
  source.href = card.cardButton2;
  const cardButton2 = document.createElement('div');
  cardButton2.className = 'see-more';
  source.appendChild(cardButton2);
  const btnimg2 = document.createElement('img');
  btnimg2.src = './images/btn.svg';
  cardButton2.appendChild(btnimg2);
  const btntext2 = document.createElement('p');
  btntext2.textContent = 'See Source';
  cardButton2.appendChild(btntext2);

  btnDiv.appendChild(source);
});
const buttons = document.querySelectorAll('.displayModal');
const detailsWindow = document.querySelector('.modal');
const closeModal = document.querySelector('.closeModal');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    detailsWindow.style.display = 'block';
  });
  closeModal.addEventListener('click', () => {
    detailsWindow.style.display = 'none';
  });
  window.onclick = (event) => {
    if (event.target === detailsWindow) {
      detailsWindow.style.display = 'none';
    }
  };
});
