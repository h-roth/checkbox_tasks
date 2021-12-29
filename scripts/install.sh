sudo apt-get update
sudo apt install -y postgresql
sudo apt install -y postgresql-contrib
sudo apt install -y libpq-dev
#pg_ctlcluster 12 main start
cd /tmp
sudo -u postgres createuser -s checkbox_admin

cd -
sudo apt install -y python3-pip
sudo apt install -y python3.8-venv
python3 -m venv .venv
source .venv/bin/activate
pip3 install wheel
pip3 install -r backend/requirements.txt

chmod +x scripts/*
./scripts/reset_db.sh

sudo snap install node --classic
sudo npm install -g yarn
sudo yarn global add serve
cd frontend && npm install && npm build
cd ..

echo -e "\nIf there are no errors from the output above, you can now run the application. Run:\n\t./scripts/run_backend.sh, and\n\t./scripts/run_frontend.sh\nfrom the project root in separate terminal windows."