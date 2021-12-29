from .. import db

class Task(db.Model):
    """ Task Model for storing tasks """
    __tablename__ = "Tasks"

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.Text)
    description = db.Column(db.Text)
    due_date = db.Column(db.DateTime)

    def __repr__(self):
        return "<Task '{}, {}, {}'>".format(self.name, self.description, self.due_date)
