fask
====

Fast flask app to serve static fiels for javascript development


# Install
```bash
git clone https://github.com/jmatt/fask.git
cd fask
pip install -r requirements.txt
```

# Use

Just initialize and run fask.

```bash
python fask.py
```

# Structure

```bash
assets/
```

Any static files in the assets directory will be served up through the
flask dev web server.

```bash
assets/vendor
```

Any third party dependencies, such as bootstrap.
