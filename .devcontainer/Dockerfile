# syntax=docker/dockerfile:1
FROM node:20-buster AS builder
SHELL ["/bin/bash", "-c"]


WORKDIR /home/node/astro
COPY --chown=node:node ["package.json", "package-lock.json*", "./"]



## Releases containing enhancements
RUN apt update
RUN apt install git


FROM builder as dev
ENV NODE_ENV "development"
USER node
COPY --chown=node:node . .