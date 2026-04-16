# Dynamic Website Monorepo

This workspace contains a multi-stack dynamic website scaffold with three backend options and a shared frontend.

## Structure

- `backend/node/` — Node.js + Express example
- `backend/php/` — PHP example
- `backend/python/` — Python + Flask example
- `frontend/public/` — shared static frontend assets
- `config/` — configuration files
- `data/` — sample data or database files

## Usage

Choose a backend stack and run the example server inside that folder.

### Node.js
```bash
cd backend/node
npm install
node src/app.js
```

### Python
```bash
cd backend/python
pip install -r requirements.txt
python app.py
```

### PHP
Use a local PHP server:
```bash
cd backend/php
php -S localhost:8000 -t public
```

## Notes

- The frontend assets in `frontend/public/` can be served by any of the backend apps.
- Use `config/` for app settings and `data/` for JSON or database files.
