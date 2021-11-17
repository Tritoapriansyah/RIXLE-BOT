FROM node:16.13.0

RUN apt-get update && \
  apt-get install -y \
  neofetch \
  ffmpeg \
  wget \
  chromium \ 
  imagemagick && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .
RUN npm install 
RUN npm install ytdl-core@latest
RUN npm install yt-search@latest
ENV PM2_PUBLIC_KEY hh73adnvlt9kan1
ENV PM2_SECRET_KEY p0d57w4v1swtkx5

COPY . .
EXPOSE 5000

CMD ["npm", "start"]`
