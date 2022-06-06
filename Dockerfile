FROM python:3.9-buster

ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY pyproject.toml .

RUN apt-get update \
    && apt-get install --no-install-recommends -y curl git build-essential \
    # pipからインストールすればあらかじめパスが通る
    && pip install poetry \ 
    # venvのパスがディレクトリ名に依存するため無効に
    && poetry config virtualenvs.create false \
    # ふつうにvenvにインストールする
    && poetry install \
    # 後ほど同じファイルをマウントするので消しとく
    && rm pyproject.toml

