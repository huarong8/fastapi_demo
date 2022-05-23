  
FROM python:3.9

RUN mkdir /app
WORKDIR /app

#RUN apt update && \
#    apt install -y mysql-client

COPY requirements.txt ./
RUN pip install -i https://pypi.tuna.tsinghua.edu.cn/simple  --no-cache-dir -r requirements.txt

COPY . .
