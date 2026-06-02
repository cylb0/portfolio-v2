import { useLanguage } from '../../contexts/LanguageContext';
import { emailJsForm } from '../../constants/contact';
import useContactForm from '../../hooks/useContactForm';

const inputClass =
  'bg-background-deep text-cosmic-white rounded-lg px-4 py-3 text-sm outline-none border border-primary/20 focus:border-primary/60 transition-colors placeholder:text-secondary-ice/40';

export default function EmailJsForm() {
  const { language } = useLanguage();
  const { formData, status, handleChange, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {status === 'success' && (
        <div className="text-primary text-sm">
          {emailJsForm[language].confirm}
        </div>
      )}

      {status === 'error' && (
        <div className="text-red-400 text-sm">
          {emailJsForm[language].error}
        </div>
      )}

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        aria-label={emailJsForm[language].name_placeholder}
        placeholder={emailJsForm[language].name_placeholder}
        className={inputClass}
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        aria-label={emailJsForm[language].email_placeholder}
        placeholder={emailJsForm[language].email_placeholder}
        className={inputClass}
      />

      <textarea
        rows={6}
        name="message"
        value={formData.message}
        onChange={handleChange}
        aria-label={emailJsForm[language].message_placeholder}
        placeholder={emailJsForm[language].message_placeholder}
        className={inputClass}
      />

      <label className="flex items-center gap-3 text-secondary-ice text-sm cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          aria-label={emailJsForm[language].consent_label}
          className="accent-primary w-4 h-4"
        />
        {emailJsForm[language].consent_label}
      </label>

      <button
        type="submit"
        onClick={handleSubmit}
        className="self-start px-6 py-2 rounded-full border-2 border-primary text-primary text-sm font-medium hover:bg-primary hover:text-background-dark transition-colors"
      >
        {status === 'loading'
          ? emailJsForm[language].button_loading
          : emailJsForm[language].button}
      </button>
    </form>
  );
}
