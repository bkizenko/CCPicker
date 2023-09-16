from flask import Flask

app = Flask(__name__)

@app.route('/data')

def data():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
    