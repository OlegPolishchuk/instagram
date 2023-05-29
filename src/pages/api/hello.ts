// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

const goodStatus = 200;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(goodStatus).json({ name: 'John Doe' });
}
