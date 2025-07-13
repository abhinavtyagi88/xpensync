
---
# 💸 AI Finance Tracker

> Full Stack Finance Management App built with **Next.js**, **Supabase**, **Prisma**, **Inngest**, **ArcJet**, **Shadcn UI**, and **TailwindCSS**.

---

## ✨ Features

### 📊 Dashboard

* View **total income**, **expenses**, and **net balance**
* Recent transactions (with type, category, and date)
* **Pie chart** breakdown of expenses by category

### 💵 Accounts

* Multiple account support (e.g., HDFC, BOB-Freelance)
* Toggle between accounts to see transactions and balances
* Account-wise balance, income, and expense breakdown

### ➕ Add Transactions

* Supports **Income** & **Expense** types
* Assign to account and category (e.g., Salary, Entertainment)
* Recurring transaction support
* Smart **AI Receipt Scanner**

### 📈 Transaction Overview

* Visual graph for income vs expense
* Transaction filters (date, type, recurring)
* Category badges (e.g., Salary, Entertainment)

---

## ⚙️ Tech Stack

| Layer       | Stack                                       |
| ----------- | ------------------------------------------- |
| Frontend    | Next.js, TypeScript, TailwindCSS, Shadcn UI |
| Backend     | Supabase, Prisma ORM, Inngest, ArcJet       |
| Auth        | Clerk                                       |
| AI Features | Gemini API (receipt scanning)               |
| Email       | Resend API                                  |

---

## 🛠️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/abhinavtyagi88/xpensync.git
cd ai-finance-platform
pnpm install
```

2. **Setup `.env`**

```env
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=
RESEND_API_KEY=
ARCJET_KEY=
```

3. **Start the dev server**

```bash
pnpm dev
```

---

## 📌 Future Improvements

* Budget setting & alerts
* More expense categories
* Improved recurring logic with calendar sync
```
