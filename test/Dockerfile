FROM python:3.9-buster

ENV PYTHONUNBUFFERED=1

EXPOSE 80

WORKDIR /project

RUN apt-get update \
    && apt-get install --no-install-recommends -y curl git build-essential \
    && pip install poetry \ 
    && poetry config virtualenvs.create false \
    && poetry init \
    && 

# CMD ["uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "80", "--reload"]