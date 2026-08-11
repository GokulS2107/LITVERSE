from flask import Flask, render_template, request, redirect, session, flash, url_for
from flask_mysqldb import MySQL
from flask_session import Session

app = Flask(__name__)

# Secret key and session setup
app.secret_key = 'your_secret_key'
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)

# MySQL Configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Gokul21072004@#'  # your password
app.config['MYSQL_DB'] = 'flask_auth'

mysql = MySQL(app)

# Routes
@app.route('/')
def home():
    return redirect(url_for('login'))

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/library')
def library():
    return render_template('library.html')

@app.route('/subscription')
def subscription():
    return render_template('subscription.html')

@app.route('/account')
def account():
    return render_template('account.html')

@app.route('/u')
def u():
    return render_template('u.html')

@app.route('/page2')
def page2():
    return render_template('2.html')

@app.route('/u1')
def u1():
    return render_template('u1.html')

@app.route('/s')
def s():
    return render_template('setting.html')

@app.route('/ss')
def ss():
    return render_template('security.html')

@app.route('/uu')
def uu():
    return render_template('uu.html')

@app.route('/resetpassword')
def resetpassword():
    return render_template('resetpassword.html')


@app.route('/forgot_password')
def forgot_password():
    return render_template('forgot_password.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM users WHERE username=%s AND password=%s", (username, password))
        user = cur.fetchone()
        cur.close()
        if user:
            session['user'] = user[1]  # Store username in session
            return redirect('/dashboard')
        else:
            flash("Invalid credentials", "danger")
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        cur = mysql.connection.cursor()
        try:
            # Check if username already exists
            cur.execute("SELECT username FROM users WHERE username=%s", (username,))
            if cur.fetchone():
                flash("Username already exists.", "danger")
            else:
                # Store plain text password (not recommended for production)
                cur.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, password))
                mysql.connection.commit()
                flash("Registration successful. Please login.", "success")
                return redirect('/login')
        except Exception as e:
            flash(f"Registration error: {str(e)}", "danger")
        finally:
            cur.close()
    return render_template('register.html')

@app.route('/dashboard')
def dashboard():
    if 'user' in session:
        return render_template('index.html', user=session['user'])
    return redirect('/login')

@app.route('/logout')
def logout():
    session.pop('user', None)
    flash("You have been logged out.", "info")
    return redirect('/login')

if __name__ == '__main__':
    app.run(debug=True)