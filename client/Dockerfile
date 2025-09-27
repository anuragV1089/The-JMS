#Build stage
FROM node:22-alpine AS builder

WORKDIR /app

ARG VITE_BACKEND_API_URL
ARG VITE_RAZORPAY_KEY_ID

ENV VITE_BACKEND_API_URL=$VITE_BACKEND_API_URL
ENV VITE_RAZORPAY_KEY_ID=$VITE_RAZORPAY_KEY_ID

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

#serve stage
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]