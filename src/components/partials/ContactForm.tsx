// components/contact/ContactForm.tsx
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';
import * as ContactAPI from '@/lib/api/contact';
import { useState } from 'react';

interface ContactFormProps {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

const ContactForm = ({ onSuccess, onError }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.reportValidity()) return;

    setIsSubmitting(true);
    try {
      await ContactAPI.submitContactForm(formData);
      alert('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      form.reset();
      onSuccess?.();
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      alert('Ocorreu um erro ao enviar a mensagem.');
      onError?.(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <Input
          placeholder="Seu nome"
          value={formData.name}
          required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          placeholder="Seu endereço de e-mail"
          type="email"
          value={formData.email}
          required
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="mt-8">
        <Input
          placeholder="Assunto"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />
      </div>

      <div className="mt-8">
        <TextArea
          placeholder="Mensagem"
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <div className="mt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200 disabled:opacity-60"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
