import { useInView } from '@/hooks/useInView';

export default function SectionReveal({ children, className = '', variant = 'fade', as: Tag = 'div' }) {
  const [ref, visible] = useInView();

  return (
    <Tag ref={ref} className={`reveal reveal-${variant}${visible ? ' visible' : ''} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
