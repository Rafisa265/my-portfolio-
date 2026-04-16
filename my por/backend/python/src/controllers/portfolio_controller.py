from models.project_model import Project

def get_all_projects():
    return Project.get_all()

def get_project_by_id(project_id):
    return Project.get_by_id(project_id)

def create_project(data):
    return Project.create(data)