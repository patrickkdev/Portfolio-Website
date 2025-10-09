import type { NextApiRequest, NextApiResponse } from 'next';
import { ContactFormData } from '@/types/index';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body: ContactFormData = req.body;
  const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

  if (!body.name || !body.email || !body.subject || !body.message) {
    res.status(400).json({ message: 'Dados inválidos' });
    return;
  }

  const text = `Nome: ${body.name}\nEmail: ${body.email}\n\nAssunto: ${body.subject}\nMensagem: ${body.message}`;

  try {
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      console.error('Erro ao enviar mensagem para Telegram:', response.statusText);
      res.status(500).json({ message: 'Erro ao enviar mensagem para Telegram' });
      return;
    }
  } catch (error) {
    console.error('Erro ao enviar mensagem para Telegram:', error);
    res.status(500).json({ message: 'Erro ao enviar mensagem para Telegram' });
  } finally {
  }

  res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
}
