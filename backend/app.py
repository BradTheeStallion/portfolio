from flask import Flask, jsonify
from script1 import run_script_1
from script2 import run_script_2
from script3 import run_script_3

app = Flask(__name__)

@app.route('/run-python-code-1')
def run_python_code_1():
    result = run_script_1()
    return jsonify(result)

@app.route('/run-python-code-2')
def run_python_code_2():
    result = run_script_2()
    return jsonify(result)

@app.route('/run-python-code-3')
def run_python_code_3():
    result = run_script_3()
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
