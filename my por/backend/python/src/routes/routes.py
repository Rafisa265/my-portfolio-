from flask import Blueprint, jsonify, request
from controllers.portfolio_controller import get_all_projects, get_project_by_id, create_project

api_bp = Blueprint('api', __name__)

@api_bp.route('/projects', methods=['GET'])
def get_projects():
    projects = get_all_projects()
    return jsonify(projects)

@api_bp.route('/projects/<id>', methods=['GET'])
def get_project(id):
    project = get_project_by_id(id)
    if project:
        return jsonify(project)
    return jsonify({'error': 'Project not found'}), 404

@api_bp.route('/projects', methods=['POST'])
def add_project():
    data = request.get_json()
    new_project = create_project(data)
    return jsonify(new_project), 201