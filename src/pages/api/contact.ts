import type { NextApiRequest, NextApiResponse } from 'next';

interface ContactData {
  name: string;
  email: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

const isValidContactData = (value: unknown): value is ContactData => {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const data = value as Record<string, unknown>;

  return (
    typeof data.name === 'string' &&
    data.name.trim().length > 0 &&
    typeof data.email === 'string' &&
    data.email.trim().length > 0 &&
    typeof data.message === 'string' &&
    data.message.trim().length > 0
  );
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');

    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    });
  }

  if (!isValidContactData(req.body)) {
    return res.status(400).json({
      success: false,
      message: 'Name, email and message are required',
    });
  }

  return res.status(200).json({
    success: true,
    message: 'Thank you for your interest, ' + req.body.name.trim(),
  });
}
