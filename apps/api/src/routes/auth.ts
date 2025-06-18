import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AuthRequest } from '../types/auth';
import prisma from '../db';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET!;

router.post('/register', async (req, res) => {
  const { email, password } = req.body as AuthRequest;

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser)
    return res.status(400).json({ error: 'User already exists' });

  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      email,
      password: hashed,
    },
  });

  res.json({
    message: 'User created',
    user: { id: user.id, email: user.email },
  });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body as AuthRequest;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: '1h',
  });

  res.json({ token });
});

export default router;
