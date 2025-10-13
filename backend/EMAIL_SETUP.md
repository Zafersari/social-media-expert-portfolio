# Email Setup Guide

## Steps to Enable Email Sending:

### 1. Create a .env file
Create a `.env` file in the backend folder with:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

### 2. Get Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Click on "Security"
3. Enable "2-Step Verification" if not enabled
4. Search for "App passwords" or go to: https://myaccount.google.com/apppasswords
5. Select "Mail" and "Other (Custom name)"
6. Name it "Social Media Portfolio"
7. Click "Generate"
8. Copy the 16-character password (without spaces)
9. Paste it in your `.env` file as `EMAIL_PASS`

### 3. Update .env file
Replace the placeholders:
```
EMAIL_USER=tuba@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
PORT=5000
```

### 4. Install dependencies (if not done)
```bash
npm install
```

### 5. Start the server
```bash
npm run dev
```

## Testing

1. Make sure backend is running on port 5000
2. Make sure frontend is running
3. Go to the contact page
4. Fill in the form and submit
5. Check your email inbox

## Troubleshooting

- If emails aren't sending, check the backend console for errors
- Make sure the App Password is correct (no spaces)
- Make sure 2-Step Verification is enabled on your Google account
- Check spam folder for test emails
