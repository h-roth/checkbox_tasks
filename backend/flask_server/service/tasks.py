from typing import NewType
from .. import Task
from flask_server import db
import json

class TasksService():
    def get_all_tasks(self):
        return Task.query.all()

    def add_new_task(self, data): 
        new_task = Task(
            name=data['name'],
            description=data['description'],
            due_date=data['due_date']
        )
        self.save_changes(new_task)
        response_object = {
            'status': 'success',
            'data': {
                'name': new_task.name,
                'description': new_task.description,
                'due_date': str(new_task.due_date)
            }
        }
        return response_object, 200

    def save_changes(self, data):
        #Commit changes to database
        db.session.add(data)
        db.session.commit()