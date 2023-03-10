import { NextApiRequest, NextApiResponse } from 'next';
import UserModel from '../../../models/user.model';
import dbConnect from '../../../utils/mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== 'GET') {
      res.status(405).json({ message: 'Method Not Allowed' });
      return;
    }

    dbConnect();

    const users = UserModel;
    const username = req.query.username;

    const findUser = await users
      .findOne({ username })
      .select({ id: 1, username: 1, name: 1 });

    res.status(200).json({ users: findUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
