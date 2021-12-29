# chmod +x scripts/reset_db-db.sh
# ./scripts/reset_db.sh
source .venv/bin/activate
dropdb checkbox_tasks > /dev/null 2>&1
rm -rf backend/flask_server/migrations/
createdb checkbox_tasks
cd backend/flask_server
flask db init
flask db migrate
flask db upgrade
cd -