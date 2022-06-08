FROM python:3.9-buster

ENV PYTHONUNBUFFERED=1

WORKDIR /project

COPY pyproject.toml .

RUN apt-get update \
    && apt-get install --no-install-recommends -y curl git build-essential \
    && pip install poetry \ 
    && poetry config virtualenvs.create false \
    && poetry install \
    && mkdir api

