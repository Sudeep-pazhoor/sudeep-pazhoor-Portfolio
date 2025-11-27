import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

function ContactCTA({ id }) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    // Set initial states
    if (titleRef.current) gsap.set(titleRef.current, { opacity: 1, y: 0 });
    if (subtitleRef.current) gsap.set(subtitleRef.current, { opacity: 1, y: 0 });
    if (ctaRef.current) gsap.set(ctaRef.current.children, { opacity: 1, y: 0 });
    if (socialRef.current) gsap.set(socialRef.current.children, { opacity: 1, y: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });

    // Animate title
    if (titleRef.current) {
      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }

    // Animate subtitle
    if (subtitleRef.current) {
      tl.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4');
    }

    // Animate CTA buttons
    if (ctaRef.current) {
      tl.from(ctaRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1,
      }, '-=0.3');
    }

    // Animate social icons
    if (socialRef.current) {
      tl.from(socialRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.1,
      }, '-=0.2');
    }

    // Add hover animations to buttons
    const buttons = ctaRef.current?.querySelectorAll('.btn') || [];
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
      });
      button.addEventListener('mouseleave', () => {
        gsap.to(button, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    });

    // Add hover animations to social icons
    const socialIcons = socialRef.current?.querySelectorAll('a') || [];
    socialIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, { scale: 1.2, rotation: 5, duration: 0.3, ease: 'power2.out' });
      });
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
      });
    });
  }, []);

  return (
    <section ref={sectionRef} id={id} className="contact">
      <h2 ref={titleRef} className="section-title">Let's build something stunning</h2>
      <p ref={subtitleRef} className="contact-sub">Open to freelance, full-time, and collaborations.</p>
      <div ref={ctaRef} className="cta-row">
        <a href="mailto:sudeeppazhoor@gmail.com" className="btn btn-primary">
          <FaEnvelope />
          Email Me
        </a>
        <a href="/Sudeep P S - Resume.pdf" download className="btn btn-ghost">Download Resume</a>
        <a href="/Sudeep P S - Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-ghost">View Resume</a>
      </div>
      <div ref={socialRef} className="social-icons">
        <a href="https://github.com/Sudeep-Pazhoor" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/sudeep-p-s-a5a1a0253" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="tel:+918281829839" aria-label="Phone"><FaPhoneAlt /></a>
        <a href="mailto:sudeeppazhoor@gmail.com" aria-label="Email"><FaEnvelope /></a>
      </div>
    </section>
  );
}

export default ContactCTA;


