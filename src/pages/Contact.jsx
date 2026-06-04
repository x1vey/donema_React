import { useState } from 'react';
import { site } from '../data/site';
import Words from '../components/Words';
import Reveal from '../components/Reveal';
import './Contact.css';

const fields = [
  { name: 'first', label: 'First name', type: 'text', half: true },
  { name: 'last', label: 'Last name', type: 'text', half: true },
  { name: 'phone', label: 'Telephone number', type: 'tel', half: true },
  { name: 'email', label: 'Email address', type: 'email', half: true },
  { name: 'message', label: 'Your message', type: 'textarea' },
];

export default function Contact() {
  const [data, setData] = useState({ first: '', last: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    // Front-end demo: build a mailto so it works without a backend.
    const body = encodeURIComponent(
      `Name: ${data.first} ${data.last}\nPhone: ${data.phone}\nEmail: ${data.email}\n\n${data.message}`
    );
    window.location.href = `mailto:${site.email}?subject=Website enquiry from ${data.first} ${data.last}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="contact-page">
      <div className="wrap contact-grid">
        {/* LEFT — info */}
        <div className="contact-info">
          <p className="section-tag"><span>✦</span> Contact</p>
          <Words as="h1" className="display contact-info__title"
            text="Let’s build something you’ll love coming home to." stagger={0.03} />
          <Reveal className="contact-info__sub" delay={0.1}>
            Give us a call or send an enquiry. We offer free consultations and site
            surveys across {site.area}, and we’ll always get back to you promptly.
          </Reveal>

          <div className="contact-info__list">
            <Reveal className="ci-item" delay={0.12}>
              <span className="ci-item__label">Call</span>
              <a href={`tel:${site.phoneRaw}`} className="ci-item__value" data-cursor="hover">{site.phone}</a>
            </Reveal>
            <Reveal className="ci-item" delay={0.18}>
              <span className="ci-item__label">Email</span>
              <a href={`mailto:${site.email}`} className="ci-item__value" data-cursor="hover">{site.email}</a>
            </Reveal>
            <Reveal className="ci-item" delay={0.24}>
              <span className="ci-item__label">Visit</span>
              <span className="ci-item__value ci-item__value--plain">{site.address}</span>
            </Reveal>
            <Reveal className="ci-item" delay={0.3}>
              <span className="ci-item__label">Follow</span>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer"
                className="ci-item__value" data-cursor="hover">{site.instagramHandle}</a>
            </Reveal>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="contact-form-wrap">
          {sent ? (
            <div className="contact-success">
              <div className="contact-success__mark">✓</div>
              <h2 className="h-md">Thank you{data.first ? `, ${data.first}` : ''}.</h2>
              <p>Your email client should now be open with your enquiry ready to send.
                Prefer to talk? Call us on <a href={`tel:${site.phoneRaw}`}>{site.phone}</a>.</p>
              <button className="btn btn--ghost" onClick={() => setSent(false)} data-cursor="hover">
                Send another enquiry
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit}>
              <p className="contact-form__head">Send us an enquiry</p>
              <div className="contact-form__grid">
                {fields.map((f) =>
                  f.type === 'textarea' ? (
                    <label className="field field--full" key={f.name}>
                      <span>{f.label}</span>
                      <textarea rows="5" required value={data[f.name]} onChange={update(f.name)} />
                    </label>
                  ) : (
                    <label className={`field ${f.half ? 'field--half' : 'field--full'}`} key={f.name}>
                      <span>{f.label}</span>
                      <input type={f.type} required value={data[f.name]} onChange={update(f.name)} />
                    </label>
                  )
                )}
              </div>
              <button type="submit" className="btn btn--solid" data-cursor="hover">
                <span>Send enquiry</span>
                <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
