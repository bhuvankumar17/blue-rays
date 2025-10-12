# MongoDB Integration

## Database Setup

The application is connected to MongoDB Atlas for storing contact form submissions and other data.

### Environment Variables

Create a `.env.local` file in the root directory with:

```env
MONGODB_URI=mongodb+srv://blueraysdata_db_user:WBzzUtxxTksLO9u6@bluerays.dxaa2yv.mongodb.net/
MONGODB_DB=bluerays_db
```

### Features

- **Contact Form Submissions**: All contact form data is stored in MongoDB
- **Status Tracking**: Track leads as 'new', 'contacted', or 'closed'
- **API Routes**: RESTful API endpoints for data management

### API Endpoints

#### POST /api/contact
Submit a new contact form entry

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9600970313",
  "message": "I'm interested in solar panels"
}
```

#### GET /api/contact
Retrieve contact form submissions

Query parameters:
- `status`: Filter by status (new/contacted/closed)
- `limit`: Number of results (default: 50)

### Database Schema

**Contact Collection:**
```typescript
{
  name: string;
  email: string;
  phone?: string;
  message: string;
  status: 'new' | 'contacted' | 'closed';
  createdAt: Date;
}
```

### Testing Locally

1. Ensure `.env.local` is configured
2. Run `npm run dev`
3. Submit the contact form on http://localhost:3000
4. Data will be saved to MongoDB Atlas

### Production Deployment

**Vercel Environment Variables:**

1. Go to your Vercel project settings
2. Add environment variable:
   - Name: `MONGODB_URI`
   - Value: `mongodb+srv://blueraysdata_db_user:WBzzUtxxTksLO9u6@bluerays.dxaa2yv.mongodb.net/`

3. Add environment variable:
   - Name: `MONGODB_DB`
   - Value: `bluerays_db`

4. Redeploy your application

### Accessing Data

You can view and manage your data through:
- MongoDB Atlas dashboard: https://cloud.mongodb.com/
- API endpoint: GET /api/contact

### Security Notes

- Never commit `.env.local` to git
- The MongoDB URI contains credentials - keep it secure
- Consider adding authentication to API routes for production
- Implement rate limiting for contact form submissions

## Future Enhancements

- Admin dashboard to manage contacts
- Email notifications for new submissions
- Export contacts to CSV
- Analytics and reporting
