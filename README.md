# LITVERSE

A simple Flask web application with user authentication, session management, and a responsive UI. This project demonstrates a basic authentication system with login, registration, and dashboard functionality.

## 📋 Features

- **User Authentication**: Login and registration system
- **Session Management**: Persistent user sessions using Flask-Session
- **Database Integration**: MySQL database for user storage
- **Flash Messages**: User feedback for actions (success, error, info)
- **Protected Routes**: Dashboard accessible only to authenticated users
- **Responsive Design**: Mobile-friendly templates
- **Multiple Pages**: Library, subscription, account, settings, and more

## 🚀 Tech Stack

- **Backend**: Python Flask
- **Database**: MySQL
- **Session Management**: Flask-Session (filesystem-based)
- **Frontend**: HTML, CSS, JavaScript (via templates)
- **Extensions**: Flask-MySQLdb

## 📁 Project Structure

```
flask-auth/
├── app.py                 # Main application file
├── templates/             # HTML templates
│   ├── index.html        # Dashboard page
│   ├── login.html        # Login page
│   ├── register.html     # Registration page
│   ├── library.html      # Library page
│   ├── subscription.html # Subscription page
│   ├── account.html      # Account page
│   ├── setting.html      # Settings page
│   ├── security.html     # Security page
│   ├── resetpassword.html # Password reset page
│   ├── forgot_password.html # Forgot password page
│   ├── u.html
│   ├── u1.html
│   ├── uu.html
│   └── 2.html
├── static/               # Static files (CSS, JS, images)
├── flask_session/        # Session storage directory
├── __pycache__/          # Python cache
└── .vscode/             # VS Code configuration
```

## 🔧 Installation & Setup

### Prerequisites

- Python 3.7+
- MySQL Server
- pip (Python package manager)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/flask-auth.git
cd flask-auth
```

### 2. Install Dependencies

```bash
pip install Flask Flask-MySQLdb Flask-Session
```

### 3. Database Setup

Create a MySQL database and user:

```sql
CREATE DATABASE flask_auth;
USE flask_auth;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 4. Configure Application

Update the MySQL configuration in `app.py`:

```python
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'your_password'  # Update this
app.config['MYSQL_DB'] = 'flask_auth'
```

**Important**: Update the `app.secret_key` to a strong, random key:

```python
app.secret_key = 'your_strong_secret_key_here'
```

### 5. Run the Application

```bash
python app.py
```

The application will run at `http://localhost:5000`

## 🗺️ Routes

| Route | Method | Description | Access |
|-------|--------|-------------|--------|
| `/` | GET | Redirects to login | Public |
| `/login` | GET/POST | User login | Public |
| `/register` | GET/POST | User registration | Public |
| `/dashboard` | GET | Main dashboard | Protected |
| `/index` | GET | Dashboard page | Public |
| `/library` | GET | Library page | Public |
| `/subscription` | GET | Subscription page | Public |
| `/account` | GET | Account page | Public |
| `/setting` | GET | Settings page | Public |
| `/security` | GET | Security page | Public |
| `/resetpassword` | GET | Password reset | Public |
| `/forgot_password` | GET | Forgot password | Public |
| `/logout` | GET | Logout user | Public |

## 🔒 Security Notes

⚠️ **Important Security Considerations**:

1. **Password Storage**: Currently, passwords are stored in plain text. In production, you MUST use password hashing (e.g., bcrypt, werkzeug.security).
2. **Secret Key**: The secret key shown is for demonstration. Use a strong, randomly generated key in production.
3. **Debug Mode**: `debug=True` should be disabled in production.
4. **Session Storage**: Filesystem-based sessions are used. For production, consider using Redis or database-backed sessions.
5. **SQL Injection**: Parameterized queries are used, which is good practice.

### Recommended Security Improvements

```python
from werkzeug.security import generate_password_hash, check_password_hash

# During registration
hashed_password = generate_password_hash(password)
cur.execute("INSERT INTO users (username, password) VALUES (%s, %s)", 
            (username, hashed_password))

# During login
user = cur.fetchone()
if user and check_password_hash(user[2], password):
    session['user'] = user[1]
```

## 🎨 Features to Enhance

- [ ] Password hashing (bcrypt/werkzeug)
- [ ] Email verification
- [ ] Password reset functionality
- [ ] User profile management
- [ ] Remember me feature
- [ ] Rate limiting
- [ ] CSRF protection
- [ ] Input validation
- [ ] Error logging
- [ ] Unit tests

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgements

- Flask Framework
- Flask-MySQLdb Extension
- Flask-Session Extension
- Bootstrap (if used in templates)
