FROM python:3.9-buster

ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY pyproject.toml .

RUN apt-get update && \
    apt-get install --no-install-recomends -y  curl git build-essential && \
    pip install poetry && \
    poetry config virtualenvs.create false && \
    poetry install \
    rm pyproject.toml


