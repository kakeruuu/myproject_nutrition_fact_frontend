FROM python:3.9-buster

ENV PYTHONUNBUFFERED=1

EXPOSE 80

WORKDIR /project

COPY /poetry_installation.exp .

RUN apt-get update \
    && apt-get install --no-install-recommends -y curl git build-essential \
    && apt install expect -y\
    && pip install poetry \ 
    && poetry config virtualenvs.create false \
    && expect poetry_installation.exp \
    && poetry add fastapi \
    && poetry add uvicorn \
    && poetry add SQLAlchemy \
    && poetry add gunicorn \
    && poetry add --dev pytest \
    && mkdir api

CMD ["uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "80", "--reload"]