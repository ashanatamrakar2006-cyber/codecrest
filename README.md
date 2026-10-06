# Codecrest

A full-stack landing page for a fictional coding academy, built to demonstrate modern web development practices using Next.js, TypeScript, Tailwind CSS, and Supabase.

**Live Demo:** YOUR_VERCEL_LINK

> **Disclaimer:** Codecrest is a portfolio/demo project. It is not a real company. All courses, statistics, testimonials, and other content are sample data.

---

## Overview

Codecrest is a responsive coding academy website designed as a full-stack portfolio project.

The website allows visitors to explore courses, view statistics, read testimonials, check frequently asked questions, and submit an enquiry through a lead-capture form.

Submitted enquiries are validated on both the client and server sides before being securely stored in a PostgreSQL database hosted on Supabase.

---

## Features

- Responsive design for desktop, tablet, and mobile devices
- Sticky navigation bar with mobile menu
- Hero section with call-to-action
- Course cards with sample course information
- Statistics section
- Benefits and features section
- Testimonials section
- Frequently Asked Questions (FAQ) section
- Enquiry form with client-side validation
- Server-side validation for submitted data
- Email and phone number validation
- Success and error states for form submission
- REST API route for enquiry handling
- Persistent enquiry storage using Supabase PostgreSQL
- Custom SVG logo and favicon
- Page metadata and SEO-friendly structure

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js |
| Language | TypeScript |
| Frontend | React |
| Styling | Tailwind CSS |
| Database | Supabase PostgreSQL |
| API | Next.js API Routes |
| Deployment | Vercel |
| Version Control | Git & GitHub |

---

## Architecture

```text
User
  |
  v
React Enquiry Form
  |
  | POST /api/enquiry
  v
Next.js API Route
  |
  | Server-side validation
  v
Supabase PostgreSQL
  |
  v
Enquiries Table

How It Works
1. The user fills out the enquiry form.
2. Client-side validation checks the submitted information.
3. The form sends a POST request to /api/enquiry.
4. The Next.js API route validates the data again on the server.
5. Validated data is inserted into the Supabase PostgreSQL database.
6. The API returns a success or error response to the user.
The Supabase secret key is used only on the server and is never exposed to the browser.
Project Structure
codecrest/
│
├── app/
│   ├── api/
│   │   └── enquiry/
│   │       └── route.ts
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── EnquiryForm.tsx
│   │
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   └── page.tsx
│
├── public/
│
├── .env.local
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json

Getting Started
Prerequisites
Make sure you have the following installed:
- Node.js 18 or later
- npm
- Git
- A Supabase account
1. Clone the Repository
git clone https://github.com/ashanatamrakar2006-cyber/codecrest.git

Navigate to the project directory:
cd codecrest

2. Install Dependencies
npm install

3. Set Up Supabase
Create a Supabase project and open the SQL Editor.
Run the following SQL:
create table enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text not null,
  course text not null,
  created_at timestamptz default now()
);

alter table enquiries enable row level security;

4. Configure Environment Variables
Create a .env.local file in the project root:
SUPABASE_URL=your-project-url
SUPABASE_SECRET_KEY=your-secret-key

Do not commit .env.local to GitHub.
5. Run the Development Server
npm run dev

Open the application in your browser:
http://localhost:3000

Environment Variables
Variable	Description
SUPABASE_URL	URL of your Supabase project
SUPABASE_SECRET_KEY	Supabase server-side secret key


The secret key should only be used in server-side code.
API Reference
POST /api/enquiry
Creates and stores a new enquiry.
Request Body
{
  "name": "Rahul Sharma",
  "phone": "9876543210",
  "email": "rahul@example.com",
  "course": "Full Stack Development"
}

Response Status
Status	Description
200	Enquiry submitted successfully
400	Invalid or missing input
500	Server or database error


The API validates required fields along with phone number and email format before storing the enquiry.
Security
- Supabase credentials are stored in environment variables.
- The Supabase secret key is never exposed to the client.
- .env.local is excluded from version control.
- Row Level Security is enabled on the enquiries table.
- Input validation is performed on both client and server sides.
- Database operations are performed through the server-side API route.
Deployment
The project can be deployed using Vercel.
Deployment Steps
1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the following environment variables:
   - SUPABASE_URL
   - SUPABASE_SECRET_KEY
4. Deploy the project.
5. Update the Live Demo link at the top of this README with the deployed Vercel URL.
After deployment, new pushes to the connected GitHub branch can automatically trigger a new deployment.
Future Improvements
- Admin dashboard for managing enquiries
- Admin authentication
- Email notifications for new enquiries
- API rate limiting and spam protection
- Individual course detail pages
- Enquiry analytics and reporting