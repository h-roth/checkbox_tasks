#Data Transfer Objects
#Used for documenting our swagger endpoints

from flask_restx import Namespace, fields

# User information
class TaskDto:
    api = Namespace('tasks', description='task related operations')
    #Use the model interace created by the api above.
    task = api.model('tasks', {
        'name': fields.String(required=True, description='user given name'),
        'description': fields.String(required=True, description='user surname'),
        'due_date': fields.DateTime(required=True, description='user email address')
    })