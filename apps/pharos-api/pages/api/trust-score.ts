import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userAgent } = req.body;
  const score = userAgent.includes('Chrome') ? 75 : 50;

  res.status(200).json({
    score,
    factors: ['User-Agent analysis']
  });
}
