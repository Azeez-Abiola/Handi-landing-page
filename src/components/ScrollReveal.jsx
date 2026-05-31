import { useInView } from '../hooks/useInView';

const dirClass = { up: 'reveal', left: 'reveal-left', right: 'reveal-right' };

export default function ScrollReveal({ children, delay = 0, className = '', direction = 'up' }) {
  const [ref, inView] = useInView(0.12);
  const base = dirClass[direction] ?? 'reveal';

  return (
    <div
      ref={ref}
      className={`${base}${inView ? ' in-view' : ''}${className ? ` ${className}` : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
