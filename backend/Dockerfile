FROM python:3.8-slim

WORKDIR /app
COPY . /app

RUN pip install --trusted-host pypi.python.org -r requirements.txt

RUN chmod +x /app/data/init_script.sh

EXPOSE 5000