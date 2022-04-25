export function getHash(pos) {
  return window.location.hash
    && window.location.hash.split('#')[1].split('/')[pos];
}

export function setHash(...args) {
  window.location.hash = `#/${args.join('/')}`;
}