
from .. import api
from flask_restx import Resource
from flask import request
from flask_server.service.tasks import TasksService
from flask_server.service.dto import TaskDto

api = TaskDto.api
_task = TaskDto.task

@api.route('/')
class Tasks(Resource):

    @api.doc('Get Tasks')
    @api.marshal_list_with(_task, envelope='data') #Used to encode response as json
    def get(self):
        return TasksService().get_all_tasks()

    @api.doc('Add new task')
    @api.expect(_task)
    def post(self):
        data = request.json
        return TasksService().add_new_task(data)

