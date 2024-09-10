import request from 'supertest';
import { type Express } from 'express';
import { createApp } from '../createApp';

describe('/api/users', () => {
    let app: Express;

    beforeAll(() => {
        app = createApp();
    })

    it('should return an empty array when getting /api/users', async () => {
        const res = await request(app).get('/api/users');
        expect(res.body).toStrictEqual([]);
    });
});