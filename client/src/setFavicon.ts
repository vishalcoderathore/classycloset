import logo from './assets/logo.png';

export function setFavicon() {
  const link: HTMLLinkElement | null =
    document.querySelector('link[rel="icon"]');

  if (link != null) {
    link.href = logo;
  } else {
    const newLink = document.createElement('link');
    newLink.rel = 'icon';
    newLink.type = 'image/png';
    newLink.href = logo;
    document.head.appendChild(newLink);
  }
}
