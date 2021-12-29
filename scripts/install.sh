sudo apt-get update
sudo apt install -y postgresql
sudo apt install -y postgresql-contrib
sudo apt install -y libpq-dev
#pg_ctlcluster 12 main start
cd /tmp
sudo -u postgres createuser -s root

cd -
sudo apt install -y python3-pip
sudo apt install -y python3.8-venv
python3 -m venv .venv
source .venv/bin/activate
pip3 install wheel
pip3 install -r ../backend/requirements.txt

chmod +x scripts/*
./scripts/reset_db.sh

sudo snap install node --classic
sudo npm install -g yarn
sudo yarn global add serve
cd frontend && npm install && npm run build
cd ..

echo -e "\nIf there are no errors from the output above, you can now run the application. Run:\n\t./scripts/run_backend.sh, and\n\t./scripts/run_frontend.sh\nfrom the project root in separate terminal windows."

# pm2 instructions:
npm install -g pm2
sudo apt-get install nginx

sudo apt update
sudo apt install nginx
sudo ufw allow 'Nginx Full'

#Check nginx is running
systemctl status nginx

    #update locations in nginx config file
    #vim /etc/nginx/sites-available/default 
    # location / {
    #     proxy_pass http://127.0.0.1:5000;
    #     proxy_http_version 1.1;
    #     proxy_set_header Upgrade $http_upgrade;
    #     proxy_set_header Connection 'upgrade';
    #     proxy_set_header Host $host;
    #     proxy_cache_bypass $http_upgrade;
    # }

    ##update locations -> You can also now access this from public_ip:3000
    # location /frontend {
    #     proxy_pass http://localhost:3000;
    #     proxy_http_version 1.1;
    #     proxy_set_header Upgrade $http_upgrade;
    #     proxy_set_header Connection 'upgrade';
    #     proxy_set_header Host $host;
    #     proxy_cache_bypass $http_upgrade;
    # }
sudo systemctl restart nginx
pm2 start "flask run"
pm2 start npm -- start