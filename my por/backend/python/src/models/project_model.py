# In-memory database for demo
projects = [
    {
        'id': '1',
        'title': 'Python Security Scanner',
        'description': 'Automated vulnerability scanner built with Python and Nmap. Detects open ports and common CVEs.',
        'tags': ['Python', 'Security', 'Network'],
        'icon': '🐍'
    },
    {
        'id': '2',
        'title': 'Flask Dashboard',
        'description': 'Real-time monitoring dashboard with Flask, WebSockets, and interactive charts.',
        'tags': ['Flask', 'WebSocket', 'Chart.js'],
        'icon': '📊'
    },
    {
        'id': '3',
        'title': 'Cryptography Toolkit',
        'description': 'Encryption/decryption tool supporting AES, RSA, and digital signatures.',
        'tags': ['Cryptography', 'Python', 'Security'],
        'icon': '🔐'
    }
]

def get_all():
    return projects

def get_by_id(pid):
    for p in projects:
        if p['id'] == pid:
            return p
    return None

def create(data):
    new_id = str(len(projects) + 1)
    new_project = {
        'id': new_id,
        'title': data.get('title', 'New Project'),
        'description': data.get('description', ''),
        'tags': data.get('tags', ['New']),
        'icon': data.get('icon', '📁')
    }
    projects.append(new_project)
    return new_project