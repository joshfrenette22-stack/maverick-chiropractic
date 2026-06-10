'use client';

import { useState, useRef } from 'react';

export default function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [focused, setFocused] = useState<Record<string, boolean>>({});
  const [filled, setFilled] = useState<Record<string, boolean>>({});
  const formRef = useRef<HTMLFormElement>(null);

  function checkFilled(name: string, value: string, isSelect = false) {
    const isFilled = value.trim() !== '' && !(isSelect && value === '');
    setFilled(prev => ({ ...prev, [name]: isFilled }));
  }

  function handleFocus(name: string) {
    setFocused(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: false }));
  }

  function handleBlur(name: string, value: string, isSelect = false) {
    setFocused(prev => ({ ...prev, [name]: false }));
    checkFilled(name, value, isSelect);
  }

  function getGroupClass(name: string) {
    const classes = ['form-group'];
    if (focused[name]) classes.push('focused');
    if (filled[name]) classes.push('filled');
    if (errors[name]) classes.push('error');
    return classes.join(' ');
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const newErrors: Record<string, boolean> = {};
    let valid = true;

    // Required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'subject', 'message'];
    requiredFields.forEach(name => {
      const value = (data.get(name) as string) || '';
      if (!value.trim()) {
        newErrors[name] = true;
        valid = false;
      }
    });

    // Email format
    const email = (data.get('email') as string) || '';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = true;
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) {
      const firstErrorKey = requiredFields.find(name => newErrors[name]);
      if (firstErrorKey) {
        const el = form.querySelector(`[name="${firstErrorKey}"]`) as HTMLElement;
        el?.focus();
      }
      return;
    }

    setFormState('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: data.get('firstName'),
          lastName: data.get('lastName'),
          email: data.get('email'),
          phone: data.get('phone'),
          subject: data.get('subject'),
          message: data.get('message'),
        }),
      });

      if (!res.ok) throw new Error('Send failed');
      setFormState('success');
    } catch {
      setFormState('error');
    }
  }

  if (formState === 'success') {
    return (
      <div className="form-success show">
        <h3>Message sent.</h3>
        <p>Thank you for reaching out. We&rsquo;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  if (formState === 'error') {
    return (
      <div className="form-success show">
        <h3>Something went wrong.</h3>
        <p>Please try again, or email us directly at courtney@maverickchiropracticcare.com</p>
        <button className="btn btn-ghost" style={{ marginTop: 16 }} onClick={() => setFormState('idle')}>Try Again</button>
      </div>
    );
  }

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit}>
      <div className="form-row">
        <div className={getGroupClass('firstName')}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            autoComplete="given-name"
            onFocus={() => handleFocus('firstName')}
            onBlur={e => handleBlur('firstName', e.target.value)}
            onChange={e => checkFilled('firstName', e.target.value)}
          />
          <p className="form-error-msg">Please enter your first name</p>
        </div>
        <div className={getGroupClass('lastName')}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            autoComplete="family-name"
            onFocus={() => handleFocus('lastName')}
            onBlur={e => handleBlur('lastName', e.target.value)}
            onChange={e => checkFilled('lastName', e.target.value)}
          />
          <p className="form-error-msg">Please enter your last name</p>
        </div>
      </div>
      <div className={getGroupClass('email')}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          onFocus={() => handleFocus('email')}
          onBlur={e => handleBlur('email', e.target.value)}
          onChange={e => checkFilled('email', e.target.value)}
        />
        <p className="form-error-msg">Please enter a valid email address</p>
      </div>
      <div className={getGroupClass('phone')}>
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          onFocus={() => handleFocus('phone')}
          onBlur={e => handleBlur('phone', e.target.value)}
          onChange={e => checkFilled('phone', e.target.value)}
        />
        <p className="form-error-msg">Please enter a valid phone number</p>
      </div>
      <div className={getGroupClass('subject')}>
        <label htmlFor="subject">Subject</label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          onFocus={() => handleFocus('subject')}
          onBlur={e => handleBlur('subject', e.target.value, true)}
          onChange={e => {
            checkFilled('subject', e.target.value, true);
            setErrors(prev => ({ ...prev, subject: false }));
          }}
        >
          <option value="" disabled>Select a subject</option>
          <option value="general">General Inquiry</option>
          <option value="new-patient">New Patient</option>
          <option value="existing-patient">Existing Patient</option>
          <option value="other">Other</option>
        </select>
        <p className="form-error-msg">Please select a subject</p>
      </div>
      <div className={getGroupClass('message')}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          onFocus={() => handleFocus('message')}
          onBlur={e => handleBlur('message', e.target.value)}
          onChange={e => checkFilled('message', e.target.value)}
        />
        <p className="form-error-msg">Please enter your message</p>
      </div>
      <button type="submit" className="btn btn-primary" disabled={formState === 'submitting'}>
        {formState === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
