import Section from '@/components/Section';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';

const SOCIALS = [
  {
    name: 'GitHub',
    url: 'https://github.com/sayneeRavi',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/athmisaynee-raveendran-968664267/',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@athmiraveendran',
  },
  {
    name: 'Email',
    url: 'mailto:athmisaynee@gmail.com',
  },
];

export default function Contact() {
  return (
    <Section id="contact" number="06" title="Contact">
      <div className="mx-auto max-w-xl text-center">
        <Reveal>
          <p className="mb-10 text-lg text-muted">
            That&apos;s my story so far. Want to be part of the next chapter?
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-12 flex flex-wrap justify-center gap-6">
            {SOCIALS.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  {...(social.url.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="font-mono text-sm text-muted transition-colors hover:text-teal"
                >
                  {social.name} ↗
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <footer className="mt-20 border-t border-hairline pt-8 text-center">
        <p className="font-mono text-xs text-muted">
          Designed & built by Athmisaynee Raveendran · © 2026
        </p>
      </footer>
    </Section>
  );
}
