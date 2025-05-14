import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { type, payload } = req.body;
  res.status(200).json({ status: 'Proof request sent', type, payload });
}
