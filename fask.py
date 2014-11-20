from flask import json, Flask, Response, send_file

app = Flask(__name__, static_folder="assets", static_url_path="")
app.debug = True

@app.route("/data")
def data():
    data = open("assets/data.json").read()
    return Response(response=data,
                    status=200,
                    mimetype="application/json")

@app.route("/")
def index():
    return send_file("assets/index.html")

if __name__ == '__main__':
    app.run()
