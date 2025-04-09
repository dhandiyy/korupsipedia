# Korupsipedia

Korupsipedia is a web platform that provides information about proven major corruption cases in Indonesia's history. This project aims to document and present corruption information in a structured manner as an educational resource and reflection tool for future generations.

## 🚀 About The Project

This project is being developed as a personal portfolio with a focus on fullstack development using Next.js and TypeScript. The website allows users to view information about corruption cases and contribute by submitting current information through a provided form.

## 💻 Tech Stack

- **Frontend & Backend**: [Next.js](https://nextjs.org/) (TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: PostgreSQL
- **ORM**: [Prisma](https://www.prisma.io/)
- **Deployment**: [Vercel](https://vercel.com/)

## ✨ Features

- **Case Browser**: Browse through major proven corruption cases in Indonesia
- **Contribution Form**: Form for users who wish to provide current information regarding corruption cases
- **Admin Dashboard**: Admin panel for verification and management of content submitted by users
- **SEO Optimized**: Optimized for search engines using Next.js features

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or newer)
- PostgreSQL
- NPM

### Installation

1. Clone this repository
   ```bash
   git clone https://github.com/username/korupsipedia.git
   cd korupsipedia
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure environment variables
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` and fill it with your PostgreSQL database configuration

4. Run Prisma migrations
   ```bash
   npx prisma migrate dev
   ```

5. Run the development server
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Contributing

This project is currently under development. Contributions in the form of code, suggestions, or bug reports are highly appreciated.

To contribute to the website content (corruption case information), please use the contribution form available on the website.

## 🔍 Project Goals

Korupsipedia aims to:

1. Provide structured information about major corruption cases in Indonesia
2. Serve as an educational resource and reflection tool for future generations
3. Centralize data on corruption cases proven in court
4. Enable public participation in documenting corruption cases

## 📡 Deployment

This project will be deployed using Vercel for the initial development phase.

## 📊 Project Status

This project is currently in active development.