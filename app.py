import web3
from web3 import Web3
import json
from flask import Flask, jsonify, render_template, request
from flask_cors import CORS

web3 = Web3(Web3.HTTPProvider('http://127.0.0.1:8545'))

abi = json.loads("""[
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "_x",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "_y",
				"type": "int256"
			}
		],
		"name": "get_value",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "division",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minus",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "multiplied",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "plus",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]""")

print(web3.eth.accounts)

class Contract:

    def __init__(self, abi_address):
        self.contract = web3.eth.contract(address=abi_address, abi=abi)
        web3.eth.defaultAccount = web3.eth.accounts[0]

    def getValue(self, _x, _y):
        print(f'x : {_x},y : {_y}')
        tx_hash = self.contract.functions.get_value(_x,_y).transact()
        web3.eth.waitForTransactionReceipt(tx_hash)

    def plus(self):
        return self.contract.functions.plus().call()

    def minus(self):
        return self.contract.functions.minus().call()

    def multiplied(self):
        return self.contract.functions.multiplied().call()

    def division(self):
        return self.contract.functions.division().call()


app = Flask(__name__)
CORS(app)

@app.route('/plus', methods=['POST'])
def plus():
    req = request.get_json()
    abi_address = req['abi_address']
    x = int(req['xVal'])
    y = int(req['yVal'])
    value = Contract(abi_address).getValue(x, y)
    value = Contract(abi_address).plus()
    return jsonify(value)

@app.route('/minus', methods=['POST'])
def minus():
    req = request.get_json()
    abi_address = req['abi_address']
    x = int(req['xVal'])
    y = int(req['yVal'])
    value = Contract(abi_address).getValue(x, y)
    value = Contract(abi_address).minus()
    return jsonify(value)

@app.route('/multiplied', methods=['POST'])
def multiplied():
    req = request.get_json()
    abi_address = req['abi_address']
    x = int(req['xVal'])
    y = int(req['yVal'])
    value = Contract(abi_address).getValue(x, y)
    value = Contract(abi_address).multiplied()
    return jsonify(value)

@app.route('/division', methods=['POST'])
def division():
    req = request.get_json()
    abi_address = req['abi_address']
    x = int(req['xVal'])
    y = int(req['yVal'])
    value = Contract(abi_address).getValue(x, y)
    value = Contract(abi_address).division()
    return jsonify(value)

app.run(debug=True)