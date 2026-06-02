import { useState } from 'react';
import emailjs from '@emailjs/browser';

const emailServiceName = import.meta.env.VITE_EMAILJS_SERVICE;
const emailTemplateName = import.meta.env.VITE_EMAILJS_TEMPLATE;
const emailUserId = import.meta.env.VITE_EMAILJS_KEY;

export default function useContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false,
  });
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    emailjs
      .send(
        emailServiceName,
        emailTemplateName,
        {
          from_name: formData.name,
          to_name: 'Morgan',
          from_email: formData.email,
          reply_to: formData.email,
          message: formData.message,
        },
        emailUserId,
      )
      .then(() => {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          message: '',
          consent: false,
        });
      })
      .catch(() => setStatus('error'));
  };

  return { formData, status, handleChange, handleSubmit };
}
