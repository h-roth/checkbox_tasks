from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_restx import Api
from flask_migrate import Migrate

# init SQLAlchemy so we can use it later in our models
db = SQLAlchemy()

# Import so we autogenerate tables using flask migrate
from .model.Task import Task

migrate = Migrate()

# init flask-restx
api = Api(title="Checkbox", description="Checkbox tasks", prefix='/api')

def create_app():
    app = Flask(__name__)

    # Enable CORS
    CORS(app, origins=["http://localhost:3000"], resources={r"/api/*": {"origins": "*"}})
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///checkbox_tasks'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['FRONTEND_ENDPOINT'] = 'http://localhost:3000'

    #Initialise db and flask-restx with factory pattern
    api.init_app(app)
    db.init_app(app)
    migrate.init_app(app,db)

    with app.app_context():
        db.create_all()
        db.session.commit()

    #Add namespaces for REST APIs
    from .routes.tasks import api as tasks_ns
    api.add_namespace(tasks_ns)
    
    return app
