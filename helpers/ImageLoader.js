export default function imageLoader({ src, width, quality }) {
  return `https://www.kowncapital.com/${src}?w=${width}&q=${quality || 75}`;
}
